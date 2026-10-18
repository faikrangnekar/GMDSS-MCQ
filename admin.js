/* ======================================================
   GMDSS MCQ ADMIN DASHBOARD - admin.js
   Admin sign-in, server-side role verification, dashboard.
   Requires: supabase-js v2 CDN + admin-config.js
   ====================================================== */

const loginView = document.getElementById("login-view");
const dashboardView = document.getElementById("dashboard-view");
const loginForm = document.getElementById("admin-login-form");
const loginErrorEl = document.getElementById("login-error");
const emailInput = document.getElementById("admin-email");
const passwordInput = document.getElementById("admin-password");
const loginBtn = document.getElementById("login-btn");
const logoutBtn = document.getElementById("adminLogoutBtn");
const adminEmailLabel = document.getElementById("adminEmailLabel");
const dashboardErrorEl = document.getElementById("dashboard-error");
const statGrid = document.getElementById("statGrid");
const candidatesContent = document.getElementById("candidatesContent");
const reportsContent = document.getElementById("reportsContent");
const reportsFilter = document.getElementById("reportsFilter");

const PLACEHOLDER_PREFIX = "YOUR_TEST";

let supabaseClient = null;
let currentAdmin = null;
let allReports = [];
let dashboardData = { profiles: null, access: null };

/* ------------------ UI helpers ------------------ */

function showLoginError(message) {
  if (message) {
    loginErrorEl.textContent = message;
    loginErrorEl.hidden = false;
  } else {
    loginErrorEl.textContent = "";
    loginErrorEl.hidden = true;
  }
}

function setLoginBusy(busy) {
  loginBtn.disabled = busy;
  loginBtn.textContent = busy ? "Signing In..." : "Sign In";
}

function showLogin() {
  currentAdmin = null;
  dashboardView.hidden = true;
  loginView.hidden = false;
  passwordInput.value = "";
  statGrid.innerHTML = "";
  candidatesContent.innerHTML = "";
  reportsContent.innerHTML = "";
  allReports = [];
  dashboardData = { profiles: null, access: null };
  if (reportsFilter) reportsFilter.value = "all";
  dashboardErrorEl.hidden = true;
}

function showDashboard(user) {
  currentAdmin = user;
  loginView.hidden = true;
  dashboardView.hidden = false;
  adminEmailLabel.textContent = user.email || "";
  loadDashboard();
}

function setDashboardError(message) {
  if (message) {
    dashboardErrorEl.textContent = message;
    dashboardErrorEl.hidden = false;
  } else {
    dashboardErrorEl.textContent = "";
    dashboardErrorEl.hidden = true;
  }
}

function addLoadingState(container) {
  const el = document.createElement("p");
  el.className = "empty-state";
  el.textContent = "Loading data...";
  container.appendChild(el);
}

/* ------------------ Formatting helpers ------------------ */

function formatDate(value) {
  if (!value) return "—";
  const d = new Date(value);
  if (isNaN(d.getTime())) return "—";
  return d.toLocaleString();
}

/* Wall-clock time on this device at the exact moment of login
   ("YYYY-MM-DD HH:MM:SS") — mirrors auth.js's helper for login_history. */
function formatLocalNow() {
  const d = new Date();
  const pad = function (n) { return (n < 10 ? "0" : "") + n; };
  return (
    d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()) +
    " " + pad(d.getHours()) + ":" + pad(d.getMinutes()) + ":" + pad(d.getSeconds())
  );
}

function displayName(profile) {
  if (profile && profile.display_name && String(profile.display_name).trim()) {
    return String(profile.display_name).trim();
  }
  return "Unnamed candidate";
}

function roleLabel(profile) {
  if (!profile || !profile.role) return "candidate";
  return String(profile.role);
}

/* ------------------ Supabase init ------------------ */

function configValue(name) {
  const cfg = window.ADMIN_SUPABASE_CONFIG;
  if (!cfg || typeof cfg[name] !== "string") return "";
  return cfg[name].trim();
}

function isPlaceholder(value) {
  return !value || value.indexOf(PLACEHOLDER_PREFIX) === 0;
}

function normalizeSupabaseUrl(url) {
  if (typeof url !== "string") return "";
  let value = url.trim().replace(/\/+$/, "");
  value = value.replace(/\/rest\/v1$/i, "");
  return value;
}

/* Must match auth.js/script.js: session lives in localStorage when
   "Remember me" is on (the default), sessionStorage when it is off. */
function authRememberPreference() {
  try {
    return window.localStorage.getItem("gmdss_remember") !== "0";
  } catch (e) {
    return true;
  }
}

function init() {
  const url = normalizeSupabaseUrl(configValue("supabaseUrl"));
  const key = configValue("supabaseAnonKey");

  if (isPlaceholder(url) || isPlaceholder(key)) {
    showLoginError("Admin config is not set. Open admin-config.js and enter your test project URL and anon/publishable key.");
    loginBtn.disabled = true;
    return;
  }

  if (typeof window.supabase === "undefined" || typeof window.supabase.createClient !== "function") {
    showLoginError("Failed to load the Supabase library. Check your internet connection and reload the page.");
    loginBtn.disabled = true;
    return;
  }

  supabaseClient = window.supabase.createClient(url, key, {
    auth: {
      storage: authRememberPreference() ? window.localStorage : window.sessionStorage,
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true
    }
  });
  restoreSession();
}

/* ------------------ Auth ------------------ */

async function restoreSession() {
  try {
    const { data, error } = await supabaseClient.auth.getSession();
    if (error || !data || !data.session) {
      showLogin();
      return;
    }
    await verifyAdmin(data.session.user);
  } catch (e) {
    showLogin();
  }
}

async function verifyAdmin(user) {
  let data = null;
  let error = null;

  try {
    const result = await supabaseClient
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .maybeSingle();
    data = result.data;
    error = result.error;
  } catch (e) {
    error = { message: e.message || "Network error" };
  }

  if (error) {
    await safeSignOut();
    showLogin();
    showLoginError("Could not verify administrator access. Please try again. (" + error.message + ")");
    return;
  }

  if (!data || data.role !== "admin") {
    await safeSignOut();
    showLogin();
    showLoginError("Access denied. This account is not authorised as an administrator.");
    return;
  }

  showDashboard(user);
}

async function safeSignOut() {
  try {
    await supabaseClient.auth.signOut();
  } catch (e) {
    /* ignore sign-out errors */
  }
}

loginForm.addEventListener("submit", async function (e) {
  e.preventDefault();
  if (!supabaseClient) return;

  const email = emailInput.value.trim();
  const password = passwordInput.value;

  if (!email || !password) {
    showLoginError("Enter your email and password.");
    return;
  }

  showLoginError("");
  setLoginBusy(true);

  let data = null;
  let error = null;

  try {
    const result = await supabaseClient.auth.signInWithPassword({ email: email, password: password });
    data = result.data;
    error = result.error;
  } catch (err) {
    error = { message: err.message || "Network error. Check your connection." };
  }

  setLoginBusy(false);

  if (error) {
    showLoginError("Sign-in failed: " + error.message);
    return;
  }

  /* Best-effort: record the sign-in time in login_history. Awaited (with a
     hard cap and one retry) so the dashboard's follow-up reads/navigation
     cannot abort the insert mid-flight. Failures are logged to the console
     (most common cause: supabase-login-history.sql has not been run in the
     SQL Editor). */
  if (data && data.user) {
    try {
      const meta = data.user.user_metadata || {};
      const loginPayload = {
        user_id: data.user.id,
        candidate_name: meta.display_name || data.user.email || null,
        login_local: formatLocalNow()
      };

      function sendLoginOnce(body) {
        return new Promise(function (resolve) {
          try {
            supabaseClient
              .from("login_history")
              .insert(body)
              .then(function (res) {
                resolve(res && res.error ? res.error : null);
              })
              .catch(function (err) {
                resolve(err || new Error("Unknown error"));
              });
          } catch (e) {
            resolve(e);
          }
        });
      }

      await Promise.race(
        (async function () {
          /* The database trigger (handle_auth_login) records the sign-in
             first; if its row is already there, skip the insert. */
          try {
            const probe = await supabaseClient
              .from("login_history")
              .select("id")
              .eq("user_id", loginPayload.user_id)
              .gt("login_at", new Date(Date.now() - 60000).toISOString())
              .limit(1);
            if (probe && probe.data && probe.data.length) return;
          } catch (e) {
            /* probe failure is fine: fall through and insert */
          }

          let body = loginPayload;
          let loginError = await sendLoginOnce(body);

          if (loginError && loginError.message && loginError.message.indexOf("login_local") !== -1) {
            /* Older schema (SQL not re-run yet): retry without the column. */
            body = { user_id: loginPayload.user_id, candidate_name: loginPayload.candidate_name };
            loginError = await sendLoginOnce(body);
          }

          if (loginError) {
            /* One delayed retry covers transient network failures. */
            await new Promise(function (resolve) {
              setTimeout(resolve, 1500);
            });
            loginError = await sendLoginOnce(body);
          }

          if (loginError) {
            console.warn("Could not record login:", loginError.message || loginError);
          }
        })(),
        new Promise(function (resolve) {
          setTimeout(resolve, 5000);
        })
      );
    } catch (e) {
      console.warn("Could not record login:", e && e.message ? e.message : e);
    }
  }

  passwordInput.value = "";
  await verifyAdmin(data.user);
});

logoutBtn.addEventListener("click", async function () {
  await safeSignOut();
  showLogin();
  showLoginError("");
});

reportsFilter.addEventListener("change", renderReportsTable);

/* ------------------ Dashboard data ------------------ */

async function loadDashboard() {
  setDashboardError("");
  statGrid.innerHTML = "";
  candidatesContent.innerHTML = "";
  reportsContent.innerHTML = "";
  addLoadingState(candidatesContent);
  addLoadingState(reportsContent);

  let results;
  try {
    results = await Promise.all([
      supabaseClient.from("profiles").select("id, display_name, role, created_at"),
      supabaseClient.from("candidate_access").select("user_id, payment_status, expires_at, updated_at"),
      supabaseClient
        .from("login_history")
        .select("user_id, login_at")
        .order("login_at", { ascending: false }),
      supabaseClient
        .from("wrong_answer_reports")
        .select("*")
        .order("created_at", { ascending: false })
    ]);
  } catch (err) {
    /* Network failure or an unreachable project. Show a message instead of
       leaving the "Loading data..." placeholders on screen forever. */
    const message = "Could not reach the server. Check your connection and try again.";
    setDashboardError(message);
    renderEmptyState(candidatesContent, message);
    renderEmptyState(reportsContent, message);
    return;
  }

  const profilesResult = results[0];
  const accessResult = results[1];
  const loginsResult = results[2];
  const reportsResult = results[3];

  const errors = [];
  if (profilesResult.error) errors.push("Profiles: " + profilesResult.error.message);
  if (accessResult.error) errors.push("Candidate access: " + accessResult.error.message);
  if (loginsResult.error) errors.push("Login history: " + loginsResult.error.message);
  if (reportsResult.error) errors.push("Wrong answer reports: " + reportsResult.error.message);

  if (errors.length > 0) {
    setDashboardError(
      "Some dashboard data could not be loaded (this usually means a database permission problem): " +
        errors.join(" | ")
    );
  }

  const profiles = profilesResult.error ? null : (profilesResult.data || []);
  const access = accessResult.error ? null : (accessResult.data || []);
  const logins = loginsResult.error ? [] : (loginsResult.data || []);
  allReports = reportsResult.error ? [] : (reportsResult.data || []);
  dashboardData = { profiles: profiles, access: access };

  /* Rows come newest-first, so the first row seen per user is their
     most recent login. */
  const lastLoginByUser = {};
  logins.forEach(function (row) {
    if (!lastLoginByUser[row.user_id]) {
      lastLoginByUser[row.user_id] = row.login_at;
    }
  });

  renderStats(profiles, access);
  renderCandidatesTable(profiles, access, lastLoginByUser);

  if (reportsResult.error) {
    renderEmptyState(reportsContent, "Wrong answer reports could not be loaded.");
  } else {
    renderReportsTable();
  }
}

function renderStats(profiles, access) {
  statGrid.innerHTML = "";

  if (profiles) {
    const candidateCount = profiles.filter(function (p) {
      return roleLabel(p) !== "admin";
    }).length;
    addStatCard("Registered Candidates", String(candidateCount), "blue");
  }

  if (access) {
    addStatCard("Access Records", String(access.length), "red");
  }

  const pendingReports = allReports.filter(function (r) {
    return (r.status || "pending") === "pending";
  }).length;
  addStatCard("Pending Reports", String(pendingReports), "red");

  if (!profiles && !access) {
    const el = document.createElement("p");
    el.className = "empty-state";
    el.textContent = "Dashboard data could not be loaded.";
    statGrid.appendChild(el);
  }
}

function addStatCard(label, value, cls) {
  const card = document.createElement("div");
  card.className = "score-card " + (cls || "");

  const num = document.createElement("span");
  num.className = "score-number";
  num.textContent = value;

  const labelEl = document.createElement("span");
  labelEl.className = "score-label";
  labelEl.textContent = label;

  card.appendChild(num);
  card.appendChild(labelEl);
  statGrid.appendChild(card);
}

function buildTable(headers) {
  const wrap = document.createElement("div");
  wrap.className = "table-wrap";

  const table = document.createElement("table");
  table.className = "data-table";

  const thead = document.createElement("thead");
  const headRow = document.createElement("tr");
  headers.forEach(function (h) {
    const th = document.createElement("th");
    th.textContent = h;
    headRow.appendChild(th);
  });
  thead.appendChild(headRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  table.appendChild(tbody);

  wrap.appendChild(table);
  return { wrap: wrap, tbody: tbody };
}

function renderEmptyState(container, message) {
  container.innerHTML = "";
  const el = document.createElement("p");
  el.className = "empty-state";
  el.textContent = message;
  container.appendChild(el);
}

function renderTableOrMessage(container, buildFn, rows, emptyMessage) {
  container.innerHTML = "";
  if (rows.length === 0) {
    const el = document.createElement("p");
    el.className = "empty-state";
    el.textContent = emptyMessage;
    container.appendChild(el);
    return;
  }
  const table = buildFn();
  container.appendChild(table.wrap);
}

const ACCESS_STATUSES = ["pending", "paid", "trial", "expired"];

function toDateInputValue(ts) {
  if (!ts) return "";
  const d = new Date(ts);
  if (isNaN(d.getTime())) return "";
  const pad = function (n) { return (n < 10 ? "0" : "") + n; };
  return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
}

function renderCandidatesTable(profiles, access, lastLoginByUser) {
  if (!profiles) {
    renderEmptyState(candidatesContent, "Candidate list could not be loaded.");
    return;
  }

  const accessByUser = {};
  (access || []).forEach(function (row) {
    accessByUser[row.user_id] = row;
  });

  const candidates = profiles.filter(function (p) {
    return roleLabel(p) !== "admin";
  });

  renderTableOrMessage(
    candidatesContent,
    function () {
      const table = buildTable(["Name", "Role", "Payment Status", "Access Expiry", "Last Login", "Action"]);

      candidates.forEach(function (p) {
        const acc = accessByUser[p.id];
        const lastLogin = lastLoginByUser ? lastLoginByUser[p.id] : null;
        const tr = document.createElement("tr");

        addReportCell(tr, displayName(p));
        addReportCell(tr, roleLabel(p));

        /* Editable payment status */
        const statusSelect = document.createElement("select");
        statusSelect.className = "access-select";
        statusSelect.setAttribute("aria-label", "Payment status for " + displayName(p));

        const placeholder = document.createElement("option");
        placeholder.value = "";
        placeholder.textContent = "— set status —";
        statusSelect.appendChild(placeholder);

        ACCESS_STATUSES.forEach(function (s) {
          const opt = document.createElement("option");
          opt.value = s;
          opt.textContent = s.charAt(0).toUpperCase() + s.slice(1);
          statusSelect.appendChild(opt);
        });

        if (acc && acc.payment_status) {
          statusSelect.value = acc.payment_status;
        }
        addReportCell(tr, statusSelect);

        /* Editable access expiry */
        const dateInput = document.createElement("input");
        dateInput.type = "date";
        dateInput.className = "access-date";
        dateInput.setAttribute("aria-label", "Access expiry for " + displayName(p));
        if (acc && acc.expires_at) {
          dateInput.value = toDateInputValue(acc.expires_at);
        }
        addReportCell(tr, dateInput);

        addReportCell(tr, lastLogin ? formatDate(lastLogin) : "Never");

        /* Save action */
        const saveBtn = document.createElement("button");
        saveBtn.type = "button";
        saveBtn.className = "btn btn-outline report-action-btn";
        saveBtn.textContent = "Save";
        saveBtn.addEventListener("click", function () {
          saveCandidateAccess(p, statusSelect.value, dateInput.value, saveBtn);
        });
        addReportCell(tr, saveBtn);

        table.tbody.appendChild(tr);
      });

      return table;
    },
    candidates,
    "No candidate accounts found yet."
  );
}

/* Upsert the candidate's access row (creates it if missing — RLS allows
   admins to insert and update any candidate's record). */
async function saveCandidateAccess(profile, status, expiryDate, button) {
  setDashboardError("");

  if (!status) {
    setDashboardError("Choose a payment status before saving for " + displayName(profile) + ".");
    return;
  }

  const expiresAt = expiryDate ? new Date(expiryDate + "T23:59:59").toISOString() : null;

  button.disabled = true;
  button.textContent = "Saving...";

  let error = null;
  try {
    const result = await supabaseClient.from("candidate_access").upsert(
      {
        user_id: profile.id,
        payment_status: status,
        expires_at: expiresAt,
        updated_at: new Date().toISOString()
      },
      { onConflict: "user_id" }
    );
    error = result.error;
  } catch (err) {
    error = { message: (err && err.message) || "Network error" };
  }

  if (error) {
    button.disabled = false;
    button.textContent = "Save";
    setDashboardError(
      "Could not save candidate access: " + error.message +
      " (if the policy is missing, run supabase-candidate-access-setup.sql in the SQL Editor.)"
    );
    return;
  }

  /* Keep the in-memory data in sync so stats re-render correctly. */
  if (!dashboardData.access) dashboardData.access = [];
  const existing = dashboardData.access.find(function (row) {
    return row.user_id === profile.id;
  });
  if (existing) {
    existing.payment_status = status;
    existing.expires_at = expiresAt;
    existing.updated_at = new Date().toISOString();
  } else {
    dashboardData.access.push({
      user_id: profile.id,
      payment_status: status,
      expires_at: expiresAt,
      updated_at: new Date().toISOString()
    });
  }

  renderStats(dashboardData.profiles, dashboardData.access);

  button.textContent = "Saved ✓";
  setTimeout(function () {
    button.disabled = false;
    button.textContent = "Save";
  }, 1500);
}

/* ------------------ Wrong answer reports ------------------ */

function truncateText(text, max) {
  if (text === null || text === undefined) return "";
  const s = String(text);
  if (s.length <= max) return s;
  return s.slice(0, max - 1) + "\u2026";
}

function addReportCell(tr, content, className) {
  const td = document.createElement("td");
  if (className) td.className = className;
  if (content instanceof Node) {
    td.appendChild(content);
  } else {
    td.textContent = content;
  }
  tr.appendChild(td);
  return td;
}

function reportStatusValue(report) {
  return report.status === "resolved" ? "resolved" : "pending";
}

function renderReportsTable() {
  if (!reportsContent) return;

  const filter = reportsFilter ? reportsFilter.value : "all";
  const reports = allReports.filter(function (r) {
    return filter === "all" ? true : reportStatusValue(r) === filter;
  });

  reportsContent.innerHTML = "";

  if (allReports.length === 0) {
    renderEmptyState(reportsContent, "No wrong-answer reports yet.");
    return;
  }

  if (reports.length === 0) {
    renderEmptyState(reportsContent, "No reports match this filter.");
    return;
  }

  const table = buildTable([
    "Reported At", "Candidate", "Set", "Q#", "Question",
    "App's Answer", "Reported Answer", "Note", "Status", "Action"
  ]);

  reports.forEach(function (r) {
    const tr = document.createElement("tr");
    const status = reportStatusValue(r);

    addReportCell(tr, formatDate(r.created_at));
    addReportCell(tr, r.candidate_name ? String(r.candidate_name) : "Unknown candidate");
    addReportCell(tr, r.set_label ? String(r.set_label) : (r.set_key ? String(r.set_key) : "\u2014"));
    addReportCell(
      tr,
      r.question_number === null || r.question_number === undefined ? "\u2014" : String(r.question_number)
    );
    addReportCell(
      tr,
      r.question_text ? truncateText(String(r.question_text), 120) : "\u2014",
      "report-question-cell"
    );
    addReportCell(
      tr,
      r.current_answer_text ? String(r.current_answer_text) : "\u2014",
      "report-answer-cell"
    );
    addReportCell(tr, r.reported_answer ? String(r.reported_answer) : "\u2014", "report-answer-cell");
    addReportCell(tr, r.note ? String(r.note) : "\u2014", "report-answer-cell");

    const badge = document.createElement("span");
    badge.className = "status-badge " + status;
    badge.textContent = status === "resolved" ? "Resolved" : "Pending";
    addReportCell(tr, badge);

    const actionBtn = document.createElement("button");
    actionBtn.type = "button";
    actionBtn.className = "btn btn-outline report-action-btn";
    actionBtn.textContent = status === "resolved" ? "Reopen" : "Mark Resolved";
    actionBtn.addEventListener("click", function () {
      setReportStatus(r, status === "resolved" ? "pending" : "resolved", actionBtn);
    });
    addReportCell(tr, actionBtn);

    table.tbody.appendChild(tr);
  });

  reportsContent.appendChild(table.wrap);
}

async function setReportStatus(report, status, button) {
  if (button) {
    button.disabled = true;
    button.textContent = "Saving...";
  }

  let error = null;
  try {
    const result = await supabaseClient
      .from("wrong_answer_reports")
      .update({ status: status })
      .eq("id", report.id);
    error = result.error;
  } catch (err) {
    error = { message: (err && err.message) || "Network error" };
  }

  if (error) {
    if (button) {
      button.disabled = false;
      button.textContent = reportStatusValue(report) === "resolved" ? "Reopen" : "Mark Resolved";
    }
    setDashboardError("Could not update the report status: " + error.message);
    return;
  }

  setDashboardError("");
  report.status = status;
  renderStats(dashboardData.profiles, dashboardData.access);
  renderReportsTable();
}

/* ------------------ Start ------------------ */

init();
