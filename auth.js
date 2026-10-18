/* ======================================================
   GMDSS MCQ TEST PLATFORM - auth.js
   Sign up & login using Supabase Auth.
   Requires: supabase-js v2 CDN + admin-config.js
   ====================================================== */

const AUTH_REMEMBER_KEY = "gmdss_remember";
const AUTH_MIN_PASSWORD = 6;

/* ------------------ Config / client ------------------ */

function normalizeSupabaseUrl(url) {
  if (typeof url !== "string") return "";
  let value = url.trim().replace(/\/+$/, "");
  value = value.replace(/\/rest\/v1$/i, "");
  return value;
}

function configValue(name) {
  const cfg = window.ADMIN_SUPABASE_CONFIG;
  if (!cfg || typeof cfg[name] !== "string") return "";
  return cfg[name].trim();
}

function authStorage(remember) {
  return remember ? window.localStorage : window.sessionStorage;
}

function rememberPreference() {
  try {
    return window.localStorage.getItem(AUTH_REMEMBER_KEY) !== "0";
  } catch (e) {
    return true;
  }
}

function saveRememberPreference(remember) {
  try {
    window.localStorage.setItem(AUTH_REMEMBER_KEY, remember ? "1" : "0");
  } catch (e) {
    /* ignore storage errors (private mode) */
  }
}

/* Reuse one client per storage type. Creating a fresh client on every call
   triggers Supabase's "multiple GoTrueClient instances" warning, which
   causes competing session-sync attempts and page flicker. */
const _authClientCache = {};

function makeAuthClient(remember) {
  const url = normalizeSupabaseUrl(configValue("supabaseUrl"));
  const key = configValue("supabaseAnonKey");

  if (
    !url ||
    !key ||
    typeof window.supabase === "undefined" ||
    typeof window.supabase.createClient !== "function"
  ) {
    return null;
  }

  const cacheKey = remember ? "local" : "session";
  if (_authClientCache[cacheKey]) return _authClientCache[cacheKey];

  const client = window.supabase.createClient(url, key, {
    auth: {
      storage: authStorage(remember),
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true
    }
  });

  _authClientCache[cacheKey] = client;
  return client;
}

/* ------------------ UI helpers ------------------ */

function showAuthMessage(el, text, isSuccess) {
  if (!el) return;
  el.textContent = text || "";
  el.classList.remove("form-error", "form-success");
  el.classList.add(isSuccess ? "form-success" : "form-error");
  el.hidden = !text;
}

function clearAuthMessage(el) {
  showAuthMessage(el, "", false);
}

function setAuthBusy(btn, busy, label) {
  if (!btn) return;
  btn.disabled = busy;
  btn.textContent = busy ? "Please wait..." : label;
}

function markInvalid(input, invalid) {
  if (!input) return;
  input.classList.toggle("input-error", !!invalid);
}

function clearInvalid(inputs) {
  inputs.forEach(function (input) {
    markInvalid(input, false);
  });
}

/* ------------------ Validation ------------------ */

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidPhone(value) {
  const digits = value.replace(/\D/g, "");
  return /^[+()\d\s.\-]+$/.test(value) && digits.length >= 7 && digits.length <= 15;
}

function isValidBirthDate(value) {
  if (!value) return false;
  const d = new Date(value);
  if (isNaN(d.getTime())) return false;
  return d.getTime() <= Date.now();
}

/* ------------------ Login recording ------------------ */

/* Writes a row to public.login_history so the admin dashboard can show
   each candidate's last login. Best-effort: it must never block or fail
   the login itself, but failures are logged to the console so problems
   (most commonly: the supabase-login-history.sql file was not run) are
   visible instead of silent. */
/* Wall-clock time on this device at the exact moment of login, formatted
   as "YYYY-MM-DD HH:MM:SS". login_at (server clock, UTC) stays the
   authoritative instant; login_local makes the Supabase table readable
   in the real local time. */
function formatLocalNow() {
  const d = new Date();
  const pad = function (n) { return (n < 10 ? "0" : "") + n; };
  return (
    d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()) +
    " " + pad(d.getHours()) + ":" + pad(d.getMinutes()) + ":" + pad(d.getSeconds())
  );
}

/* Per-tab flag shared with script.js: set after a login is recorded so
   the start page's session-start hook does not record the same login a
   second time. Cleared automatically when the tab/browser session ends. */
function markLoginRecorded() {
  try {
    window.sessionStorage.setItem("gmdss_login_recorded", "1");
  } catch (e) {
    /* ignore storage errors */
  }
}

/* Returns a Promise that resolves true on success / false on failure so
   callers can await the insert before navigating away. Redirecting while
   the insert is still in flight aborts it and the row is silently lost. */
function recordLogin(client, userId, candidateName) {
  if (!client || !userId) return Promise.resolve(false);

  const payload = { user_id: userId, login_local: formatLocalNow() };
  if (candidateName && String(candidateName).trim()) {
    payload.candidate_name = String(candidateName).trim();
  }

  function sendOnce(body) {
    return new Promise(function (resolve) {
      try {
        client
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

  function delay(ms) {
    return new Promise(function (resolve) {
      setTimeout(resolve, ms);
    });
  }

  return (async function () {
    let body = payload;
    let error = await sendOnce(body);

    if (error && error.message && error.message.indexOf("login_local") !== -1) {
      /* Older schema (SQL not re-run yet): retry without the column. */
      body = { user_id: payload.user_id, candidate_name: payload.candidate_name };
      error = await sendOnce(body);
    }

    if (error) {
      /* One delayed retry covers transient network failures. */
      await delay(1500);
      error = await sendOnce(body);
    }

    if (error) {
      console.warn("Could not record login:", error.message || error);
      return false;
    }

    markLoginRecorded();
    return true;
  })();
}

/* ------------------ Page detection ------------------ */

const isSignupPage = !!document.getElementById("signup-page");
const isLoginPage = !!document.getElementById("login-page");

/* ==================== SIGNUP PAGE ==================== */

if (isSignupPage) {
  const form = document.getElementById("signup-form");
  const nameInput = document.getElementById("signup-name");
  const dobInput = document.getElementById("signup-dob");
  const emailInput = document.getElementById("signup-email");
  const phoneInput = document.getElementById("signup-phone");
  const passwordInput = document.getElementById("signup-password");
  const confirmInput = document.getElementById("signup-confirm");
  const messageEl = document.getElementById("auth-message");
  const submitBtn = document.getElementById("signup-btn");

  if (dobInput) {
    dobInput.max = new Date().toISOString().split("T")[0];
  }

  const client = makeAuthClient(rememberPreference());

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const fullName = nameInput.value.trim();
    const dob = dobInput.value;
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const password = passwordInput.value;
    const confirm = confirmInput.value;

    clearAuthMessage(messageEl);
    clearInvalid([nameInput, dobInput, emailInput, phoneInput, passwordInput, confirmInput]);

    if (!fullName) {
      markInvalid(nameInput, true);
      showAuthMessage(messageEl, "Please enter your full name.", false);
      nameInput.focus();
      return;
    }

    if (!isValidBirthDate(dob)) {
      markInvalid(dobInput, true);
      showAuthMessage(messageEl, "Please enter a valid birth date (not in the future).", false);
      dobInput.focus();
      return;
    }

    if (!isValidEmail(email)) {
      markInvalid(emailInput, true);
      showAuthMessage(messageEl, "Please enter a valid email address.", false);
      emailInput.focus();
      return;
    }

    if (!isValidPhone(phone)) {
      markInvalid(phoneInput, true);
      showAuthMessage(messageEl, "Please enter a valid contact number.", false);
      phoneInput.focus();
      return;
    }

    if (password.length < AUTH_MIN_PASSWORD) {
      markInvalid(passwordInput, true);
      showAuthMessage(messageEl, "Password must be at least " + AUTH_MIN_PASSWORD + " characters.", false);
      passwordInput.focus();
      return;
    }

    if (password !== confirm) {
      markInvalid(confirmInput, true);
      showAuthMessage(messageEl, "Passwords do not match.", false);
      confirmInput.focus();
      return;
    }

    if (!client) {
      showAuthMessage(messageEl, "Authentication is not configured. Please contact the administrator.", false);
      return;
    }

    setAuthBusy(submitBtn, true, "Create Account");

    let result = null;
    try {
      result = await client.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            display_name: fullName,
            birth_date: dob,
            phone_number: phone
          }
        }
      });
    } catch (err) {
      result = { error: { message: (err && err.message) || "Network error" } };
    }

    setAuthBusy(submitBtn, false, "Create Account");

    if (result.error) {
      showAuthMessage(messageEl, "Sign up failed: " + result.error.message, false);
      return;
    }

    const user = result.data ? result.data.user : null;
    const session = result.data ? result.data.session : null;

    /* Fallback: also store the profile row. The database trigger normally
       handles this, so failures here are ignored. */
    if (user) {
      try {
        await client.from("profiles").upsert(
          {
            id: user.id,
            display_name: fullName,
            birth_date: dob,
            phone_number: phone,
            email: email
          },
          { onConflict: "id" }
        );
      } catch (err) {
        /* trigger or RLS may handle it; ignore */
      }
    }

    if (session) {
      /* Immediate sign-in counts as the candidate's first login. Await the
         insert (capped) so the redirect cannot abort it mid-flight. */
      showAuthMessage(messageEl, "Account created. Redirecting...", true);
      if (user) {
        await Promise.race([
          recordLogin(client, user.id, fullName),
          new Promise(function (resolve) {
            setTimeout(resolve, 5000);
          })
        ]);
      }
      window.location.href = "index.html";
    } else {
      showAuthMessage(
        messageEl,
        "Account created. Please check your email to confirm your address, then log in.",
        true
      );
      form.reset();
      if (dobInput) dobInput.max = new Date().toISOString().split("T")[0];
    }
  });
}

/* ==================== LOGIN PAGE ==================== */

if (isLoginPage) {
  const form = document.getElementById("login-form");
  const emailInput = document.getElementById("login-email");
  const passwordInput = document.getElementById("login-password");
  const rememberInput = document.getElementById("remember-me");
  const messageEl = document.getElementById("auth-message");
  const submitBtn = document.getElementById("login-btn");
  const togglePasswordBtn = document.getElementById("toggle-password");

  /* Show/hide password: lets the candidate reveal what they have typed
     without retyping it. */
  if (togglePasswordBtn && passwordInput) {
    togglePasswordBtn.addEventListener("click", function () {
      const show = passwordInput.type === "password";
      passwordInput.type = show ? "text" : "password";
      togglePasswordBtn.textContent = show ? "Hide" : "Show";
      togglePasswordBtn.setAttribute("aria-pressed", show ? "true" : "false");
      passwordInput.focus();
    });
  }

  /* If a session already exists, go straight to the test selection page. */
  const existingClient = makeAuthClient(rememberPreference());
  if (existingClient) {
    existingClient.auth.getSession().then(function (res) {
      if (res && res.data && res.data.session) {
        window.location.href = "index.html";
      }
    }).catch(function () {});
  }

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const remember = !!(rememberInput && rememberInput.checked);

    clearAuthMessage(messageEl);
    clearInvalid([emailInput, passwordInput]);

    if (!isValidEmail(email)) {
      markInvalid(emailInput, true);
      showAuthMessage(messageEl, "Please enter a valid email address.", false);
      emailInput.focus();
      return;
    }

    if (!password) {
      markInvalid(passwordInput, true);
      showAuthMessage(messageEl, "Please enter your password.", false);
      passwordInput.focus();
      return;
    }

    saveRememberPreference(remember);
    const client = makeAuthClient(remember);

    if (!client) {
      showAuthMessage(messageEl, "Authentication is not configured. Please contact the administrator.", false);
      return;
    }

    setAuthBusy(submitBtn, true, "Log In");

    let result = null;
    try {
      result = await client.auth.signInWithPassword({ email: email, password: password });
    } catch (err) {
      result = { error: { message: (err && err.message) || "Network error" } };
    }

    setAuthBusy(submitBtn, false, "Log In");

    if (result.error) {
      showAuthMessage(messageEl, "Sign-in failed: " + result.error.message, false);
      return;
    }

    showAuthMessage(messageEl, "Signed in. Redirecting...", true);

    /* Await the login_history insert (with a hard cap) BEFORE navigating,
       otherwise the redirect aborts the in-flight request and the row is
       lost — this was the cause of logins missing from the table. */
    if (result.data && result.data.user) {
      const meta = result.data.user.user_metadata || {};
      await Promise.race([
        recordLogin(client, result.data.user.id, meta.display_name || ""),
        new Promise(function (resolve) {
          setTimeout(resolve, 5000);
        })
      ]);
    }

    window.location.href = "index.html";
  });
}

/* ==================== RESET PASSWORD PAGE ==================== */

const isResetPage = !!document.getElementById("reset-page");

if (isResetPage) {
  const requestSection = document.getElementById("request-reset-section");
  const setSection = document.getElementById("set-password-section");

  const requestForm = document.getElementById("request-reset-form");
  const emailInput = document.getElementById("reset-email");
  const requestBtn = document.getElementById("request-reset-btn");
  const requestMessage = document.getElementById("reset-message");

  const setForm = document.getElementById("set-password-form");
  const newPasswordInput = document.getElementById("new-password");
  const confirmInput = document.getElementById("confirm-password");
  const setBtn = document.getElementById("set-password-btn");
  const setMessage = document.getElementById("set-message");

  const client = makeAuthClient(true);

  function showSetPassword() {
    if (requestSection) requestSection.hidden = true;
    if (setSection) setSection.hidden = false;
  }

  function looksLikeRecovery() {
    const hash = window.location.hash || "";
    const search = window.location.search || "";
    return (
      hash.indexOf("type=recovery") !== -1 ||
      hash.indexOf("access_token") !== -1 ||
      search.indexOf("type=recovery") !== -1 ||
      search.indexOf("code=") !== -1
    );
  }

  if (client) {
    client.auth.onAuthStateChange(function (event) {
      if (event === "PASSWORD_RECOVERY") {
        showSetPassword();
      } else if (event === "SIGNED_IN" && looksLikeRecovery()) {
        showSetPassword();
      }
    });

    client.auth.getSession().then(function (res) {
      const session = res && res.data ? res.data.session : null;
      if (session && looksLikeRecovery()) showSetPassword();
    }).catch(function () {});
  }

  /* ---- Request a reset link ---- */
  if (requestForm) {
    requestForm.addEventListener("submit", async function (e) {
      e.preventDefault();

      const email = emailInput.value.trim();

      clearAuthMessage(requestMessage);
      clearInvalid([emailInput]);

      if (!isValidEmail(email)) {
        markInvalid(emailInput, true);
        showAuthMessage(requestMessage, "Please enter a valid email address.", false);
        emailInput.focus();
        return;
      }

      if (!client) {
        showAuthMessage(requestMessage, "Authentication is not configured. Please contact the administrator.", false);
        return;
      }

      setAuthBusy(requestBtn, true, "Send Reset Link");

      let result = null;
      try {
        result = await client.auth.resetPasswordForEmail(email, {
          redirectTo: window.location.origin + window.location.pathname
        });
      } catch (err) {
        result = { error: { message: (err && err.message) || "Network error" } };
      }

      setAuthBusy(requestBtn, false, "Send Reset Link");

      if (result.error) {
        showAuthMessage(requestMessage, "Could not send reset link: " + result.error.message, false);
        return;
      }

      showAuthMessage(
        requestMessage,
        "If that email is registered, a reset link is on its way. Check your inbox (and spam folder).",
        true
      );
      requestForm.reset();
    });
  }

  /* ---- Set the new password ---- */
  if (setForm) {
    setForm.addEventListener("submit", async function (e) {
      e.preventDefault();

      const password = newPasswordInput.value;
      const confirm = confirmInput.value;

      clearAuthMessage(setMessage);
      clearInvalid([newPasswordInput, confirmInput]);

      if (password.length < AUTH_MIN_PASSWORD) {
        markInvalid(newPasswordInput, true);
        showAuthMessage(setMessage, "Password must be at least " + AUTH_MIN_PASSWORD + " characters.", false);
        newPasswordInput.focus();
        return;
      }

      if (password !== confirm) {
        markInvalid(confirmInput, true);
        showAuthMessage(setMessage, "Passwords do not match.", false);
        confirmInput.focus();
        return;
      }

      if (!client) {
        showAuthMessage(setMessage, "Authentication is not configured. Please contact the administrator.", false);
        return;
      }

      setAuthBusy(setBtn, true, "Update Password");

      let result = null;
      try {
        result = await client.auth.updateUser({ password: password });
      } catch (err) {
        result = { error: { message: (err && err.message) || "Network error" } };
      }

      if (result.error) {
        setAuthBusy(setBtn, false, "Update Password");
        showAuthMessage(setMessage, "Could not update password: " + result.error.message, false);
        return;
      }

      showAuthMessage(setMessage, "Password updated. Redirecting to login...", true);

      try {
        await client.auth.signOut();
      } catch (err) {
        /* ignore */
      }

      setTimeout(function () {
        window.location.href = "login.html";
      }, 1400);
    });
  }
}
