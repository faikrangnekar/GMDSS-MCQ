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
const attemptsContent = document.getElementById("attemptsContent");
const reportsContent = document.getElementById("reportsContent");
const reportsFilter = document.getElementById("reportsFilter");

const PLACEHOLDER_PREFIX = "YOUR_TEST";

let supabaseClient = null;
let currentAdmin = null;
let allReports = [];
let dashboardData = { profiles: null, attempts: null, access: null };

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
  attemptsContent.innerHTML = "";
  reportsContent.innerHTML = "";
  allReports = [];
  dashboardData = { profiles: null, attempts: null, access: null };
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
  attemptsContent.innerHTML = "";
  reportsContent.innerHTML = "";
  addLoadingState(candidatesContent);
  addLoadingState(attemptsContent);
  addLoadingState(reportsContent);

  let results;
  try {
    results = await Promise.all([
      supabaseClient.from("profiles").select("id, display_name, role, created_at"),
      supabaseClient
        .from("quiz_attempts")
        .select("id, user_id, set_name, total_questions, correct_answers, wrong_answers, score, completed_at")
        .order("completed_at", { ascending: false }),
      supabaseClient.from("candidate_access").select("user_id, payment_status, expires_at, updated_at"),
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
    renderEmptyState(attemptsContent, message);
    renderEmptyState(reportsContent, message);
    return;
  }

  const profilesResult = results[0];
  const attemptsResult = results[1];
  const accessResult = results[2];
  const reportsResult = results[3];

  const errors = [];
  if (profilesResult.error) errors.push("Profiles: " + profilesResult.error.message);
  if (attemptsResult.error) errors.push("Quiz attempts: " + attemptsResult.error.message);
  if (accessResult.error) errors.push("Candidate access: " + accessResult.error.message);
  if (reportsResult.error) errors.push("Wrong answer reports: " + reportsResult.error.message);

  if (errors.length > 0) {
    setDashboardError(
      "Some dashboard data could not be loaded (this usually means a database permission problem): " +
        errors.join(" | ")
    );
  }

  const profiles = profilesResult.error ? null : (profilesResult.data || []);
  const attempts = attemptsResult.error ? null : (attemptsResult.data || []);
  const access = accessResult.error ? null : (accessResult.data || []);
  allReports = reportsResult.error ? [] : (reportsResult.data || []);
  dashboardData = { profiles: profiles, attempts: attempts, access: access };

  renderStats(profiles, attempts, access);
  renderCandidatesTable(profiles, attempts, access);
  renderAttemptsTable(attempts, profiles);

  if (reportsResult.error) {
    renderEmptyState(reportsContent, "Wrong answer reports could not be loaded.");
  } else {
    renderReportsTable();
  }
}

function renderStats(profiles, attempts, access) {
  statGrid.innerHTML = "";

  if (profiles) {
    const candidateCount = profiles.filter(function (p) {
      return roleLabel(p) !== "admin";
    }).length;
    addStatCard("Registered Candidates", String(candidateCount), "blue");
  }

  if (attempts) {
    addStatCard("Quiz Attempts", String(attempts.length), "green");

    let latest = "—";
    if (attempts.length > 0 && attempts[0].completed_at) {
      const d = new Date(attempts[0].completed_at);
      if (!isNaN(d.getTime())) {
        latest = d.toLocaleDateString() + " " + d.toLocaleTimeString();
      }
    }
    addStatCard("Last Activity", latest, "orange");
  }

  if (access) {
    addStatCard("Access Records", String(access.length), "red");
  }

  const pendingReports = allReports.filter(function (r) {
    return (r.status || "pending") === "pending";
  }).length;
  addStatCard("Pending Reports", String(pendingReports), "red");

  if (!profiles && !attempts && !access) {
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

function addTableRow(tbody, values) {
  const tr = document.createElement("tr");
  values.forEach(function (v) {
    const td = document.createElement("td");
    td.textContent = v;
    tr.appendChild(td);
  });
  tbody.appendChild(tr);
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

function renderCandidatesTable(profiles, attempts, access) {
  if (!profiles) {
    renderEmptyState(candidatesContent, "Candidate list could not be loaded.");
    return;
  }

  const accessByUser = {};
  (access || []).forEach(function (row) {
    accessByUser[row.user_id] = row;
  });

  const attemptStatsByUser = {};
  (attempts || []).forEach(function (a) {
    const stats = attemptStatsByUser[a.user_id];
    if (!stats) {
      attemptStatsByUser[a.user_id] = { count: 1, last: a.completed_at || null };
    } else {
      stats.count += 1;
      if (a.completed_at && (!stats.last || new Date(a.completed_at) > new Date(stats.last))) {
        stats.last = a.completed_at;
      }
    }
  });

  const candidates = profiles.filter(function (p) {
    return roleLabel(p) !== "admin";
  });

  renderTableOrMessage(
    candidatesContent,
    function () {
      const table = buildTable(["Name", "Role", "Payment Status", "Access Expiry", "Last Activity", "Attempts"]);

      candidates.forEach(function (p) {
        const acc = accessByUser[p.id];
        const stats = attemptStatsByUser[p.id];

        addTableRow(table.tbody, [
          displayName(p),
          roleLabel(p),
          acc && acc.payment_status ? String(acc.payment_status) : "No access record",
          acc ? formatDate(acc.expires_at) : "—",
          stats && stats.last ? formatDate(stats.last) : "No attempts yet",
          stats ? String(stats.count) : "0"
        ]);
      });

      return table;
    },
    candidates,
    "No candidate accounts found yet."
  );
}

function renderAttemptsTable(attempts, profiles) {
  if (!attempts) {
    renderEmptyState(attemptsContent, "Quiz attempts could not be loaded.");
    return;
  }

  const nameById = {};
  (profiles || []).forEach(function (p) {
    nameById[p.id] = displayName(p);
  });

  renderTableOrMessage(
    attemptsContent,
    function () {
      const table = buildTable(["Candidate", "Set", "Score", "Correct", "Wrong", "Total", "Completed At"]);

      attempts.forEach(function (a) {
        const name = nameById[a.user_id] || "Unknown candidate";

        addTableRow(table.tbody, [
          name,
          a.set_name ? String(a.set_name) : "—",
          a.score === null || a.score === undefined ? "—" : String(a.score),
          a.correct_answers === null || a.correct_answers === undefined ? "—" : String(a.correct_answers),
          a.wrong_answers === null || a.wrong_answers === undefined ? "—" : String(a.wrong_answers),
          a.total_questions === null || a.total_questions === undefined ? "—" : String(a.total_questions),
          formatDate(a.completed_at)
        ]);
      });

      return table;
    },
    attempts,
    "No quiz attempts recorded yet."
  );
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
  renderStats(dashboardData.profiles, dashboardData.attempts, dashboardData.access);
  renderReportsTable();
}

/* ------------------ Start ------------------ */

init();
