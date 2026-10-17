/* ======================================================
   GMDSS MCQ TEST PLATFORM - script.js
   Handles home page, test page, and result page logic.
   ====================================================== */

/* ------------------ Storage helpers ------------------ */

const SCORE_PERCENT_FACTOR = 100;
const TOTAL_MINUTES = 30;
const TOTAL_SECONDS = TOTAL_MINUTES * 60;

function displayQuestion(question) {
  return String(question).replace(/^\s*\[PLACE[ _-]?HOLDER\s*\d*\]\s*/i, "");
}

function scoreTest(questions, answers) {
  let correct = 0;
  let wrong = 0;
  let unanswered = 0;

  questions.forEach(function (q, i) {
    let chosen = answers[i];

    if (chosen === null || chosen === undefined || chosen < 0 || chosen >= q.options.length) {
      chosen = null;
      answers[i] = null;
    }

    if (chosen === null) {
      unanswered++;
    } else if (chosen === q.answer) {
      correct++;
    } else {
      wrong++;
    }
  });

  return {
    correct: correct,
    wrong: wrong,
    unanswered: unanswered,
    answered: correct + wrong,
    percent: questions.length === 0 ? 0 : Math.round((correct / questions.length) * SCORE_PERCENT_FACTOR)
  };
}

const store = {
  get(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw === null ? fallback : JSON.parse(raw);
    } catch (e) {
      return fallback;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      /* Storage can throw in private mode or when quota is hit.
         Ignoring keeps the test usable even then. */
    }
  },
  remove(key) {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      /* ignore */
    }
  }
};

const KEYS = {
  name: "gmdss_name",
  set: "gmdss_set",
  answers: "gmdss_answers",
  result: "gmdss_result",
  startedAt: "gmdss_started_at"
};

/* ------------------ Page detection ------------------ */

const isHomePage = !!document.getElementById("home-page");
const isTestPage = !!document.getElementById("test-page");
const isResultPage = !!document.getElementById("result-page");

/* ------------------ Shared helpers ------------------ */

function getSetLabel(setKey) {
  const keys = Object.keys(questionSets);
  const idx = keys.indexOf(setKey);
  return idx >= 0 ? "Set " + (idx + 1) : setKey.toUpperCase();
}

function setSetLabel(elId) {
  const el = document.getElementById(elId);
  if (!el) return;
  const setKey = store.get(KEYS.set, "set1");
  el.textContent = getSetLabel(setKey);
}

function setCandidateLabel(elId) {
  const el = document.getElementById(elId);
  if (!el) return;
  el.textContent = "Candidate: " + store.get(KEYS.name, "");
}

function buildSetSelect(selectEl) {
  const keys = Object.keys(questionSets);
  keys.forEach(function (key, i) {
    const opt = document.createElement("option");
    opt.value = key;
    opt.textContent = "Set " + (i + 1) + " (" + questionSets[key].length + " questions)";
    selectEl.appendChild(opt);
  });
  const saved = store.get(KEYS.set, null);
  if (saved && questionSets[saved]) {
    selectEl.value = saved;
  }
}

function redirectTo(page) {
  window.location.href = page;
}

function logout() {
  store.remove(KEYS.name);
  store.remove(KEYS.set);
  store.remove(KEYS.answers);
  store.remove(KEYS.result);

  const client = getAuthClient();
  if (client) {
    client.auth.signOut().then(function () {
      redirectTo("login.html");
    }).catch(function () {
      redirectTo("login.html");
    });
  } else {
    redirectTo("login.html");
  }
}

function normalizeSupabaseUrl(url) {
  if (typeof url !== "string") return "";
  let value = url.trim().replace(/\/+$/, "");
  value = value.replace(/\/rest\/v1$/i, "");
  return value;
}

function supabaseConfigValue(name) {
  const cfg = window.ADMIN_SUPABASE_CONFIG;
  if (!cfg || typeof cfg[name] !== "string") return "";
  return cfg[name].trim();
}

/* Cached so every call reuses one client. Creating a new client per call
   triggers Supabase's "multiple GoTrueClient instances" warning and can
   cause session-sync flicker/redirect loops across pages. */
let _authClientCache = null;
let _authClientInitialized = false;

function getAuthClient() {
  if (_authClientInitialized) return _authClientCache;
  _authClientInitialized = true;

  const url = normalizeSupabaseUrl(supabaseConfigValue("supabaseUrl"));
  const key = supabaseConfigValue("supabaseAnonKey");

  if (
    !url ||
    !key ||
    typeof window.supabase === "undefined" ||
    typeof window.supabase.createClient !== "function"
  ) {
    return null;
  }

  try {
    _authClientCache = window.supabase.createClient(url, key, {
      auth: {
        storage: window.sessionStorage,
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true
      }
    });
  } catch (e) {
    _authClientCache = null;
  }
  return _authClientCache;
}

/* Require a signed-in user before running protected page logic.
   If Supabase is not configured, fall back to the old behaviour. */
function requireSession(onReady) {
  const client = getAuthClient();
  if (!client) {
    onReady(null, null);
    return;
  }

  client.auth.getSession().then(function (res) {
    if (!res || !res.data || !res.data.session) {
      redirectTo("login.html");
      return;
    }
    onReady(client, res.data.session);
  }).catch(function () {
    redirectTo("login.html");
  });
}

/* Persist a completed attempt to the quiz_attempts table for the admin
   dashboard. Uses the signed-in user's id; the RLS policy requires
   auth.uid() = user_id, so the write only succeeds when logged in.
   Errors are logged but swallowed so the candidate is never blocked. */
function saveAttempt(client, result) {
  if (!client || !result) return;

  client.auth.getUser().then(function (userRes) {
    const user = userRes && userRes.data ? userRes.data.user : null;
    if (!user) return;

    return client.from("quiz_attempts").insert({
      user_id: user.id,
      set_name: result.setLabel,
      total_questions: result.total,
      correct_answers: result.correct,
      wrong_answers: result.wrong,
      score: result.percent,
      completed_at: new Date().toISOString()
    });
  }).then(function (insertRes) {
    if (insertRes && insertRes.error) {
      console.warn("Could not save quiz attempt:", insertRes.error.message);
    }
  }).catch(function (err) {
    console.warn("Could not save quiz attempt:", err && err.message ? err.message : err);
  });
}

/* Prefill the candidate name field from the signed-in account. */
function prefillCandidateName(client, session, nameInput) {
  if (!nameInput) return;

  const meta = (session && session.user && session.user.user_metadata) || {};
  const fromMeta = String(meta.display_name || "").trim();
  if (fromMeta) {
    nameInput.value = fromMeta;
    store.set(KEYS.name, fromMeta);
  }

  if (!client || !session || !session.user) return;

  client
    .from("profiles")
    .select("display_name")
    .eq("id", session.user.id)
    .maybeSingle()
    .then(function (res) {
      if (res && !res.error && res.data && res.data.display_name) {
        const name = String(res.data.display_name).trim();
        if (name) {
          nameInput.value = name;
          store.set(KEYS.name, name);
        }
      }
    })
    .catch(function () {
      /* ignore */
    });
}

/* ==================== HOME PAGE ==================== */

function initHomePage(client, session) {
  const nameInput = document.getElementById("candidate-name");
  const setSelect = document.getElementById("test-set");
  const errorEl = document.getElementById("name-error");
  const startForm = document.getElementById("start-form");
  const logoutBtn = document.getElementById("logoutBtn");
  const authSwitch = document.querySelector(".auth-switch");
  const accountNote = document.getElementById("account-note");

  buildSetSelect(setSelect);

  logoutBtn.hidden = false;
  logoutBtn.addEventListener("click", function (e) {
    e.preventDefault();
    logout();
  });

  if (authSwitch) authSwitch.hidden = true;

  if (accountNote) {
    const email = session && session.user && session.user.email ? session.user.email : "";
    if (email) {
      accountNote.textContent = "Signed in as " + email;
      accountNote.hidden = false;
    }
  }

  prefillCandidateName(client, session, nameInput);

  startForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = nameInput.value.trim();

    if (!name) {
      errorEl.hidden = false;
      nameInput.classList.add("input-error");
      nameInput.focus();
      return;
    }

    errorEl.hidden = true;
    nameInput.classList.remove("input-error");

    store.set(KEYS.name, name);
    store.set(KEYS.set, setSelect.value);
    store.remove(KEYS.answers);

    redirectTo("test.html");
  });

  nameInput.addEventListener("input", function () {
    if (nameInput.value.trim()) {
      errorEl.hidden = true;
      nameInput.classList.remove("input-error");
    }
  });
}

if (isHomePage) {
  requireSession(function (client, session) {
    initHomePage(client, session);
  });
}

/* ==================== TEST PAGE ==================== */

function initTestPage(authClient) {
  const candidateName = store.get(KEYS.name, "");
  let setKey = store.get(KEYS.set, "");

  document.getElementById("logoutBtn").addEventListener("click", logout);

  /* Home returns the candidate to the start-test page. The in-progress
     answers are kept, so returning to the same set resumes where they
     left off (including the remaining time). */
  const homeBtn = document.getElementById("homeBtn");
  if (homeBtn) {
    homeBtn.addEventListener("click", function () {
      redirectTo("index.html");
    });
  }

  if (!candidateName || !questionSets[setKey]) {
    redirectTo("index.html");
    return;
  }

  startTest();

  function startTest() {
    /* ------- data ------- */
    const questions = questionSets[setKey];
    const total = questions.length;

    /* Restore saved answers, but only if they match this set's length.
       A leftover array from a different set would mis-align answers. */
    const savedAnswers = store.get(KEYS.answers, null);
    const answers =
      Array.isArray(savedAnswers) && savedAnswers.length === total
        ? savedAnswers
        : Array(total).fill(null);

    /* The deadline is stored as an absolute timestamp so the timer keeps
       running correctly across page refreshes and cannot be reset by
       reloading the page. */
    let deadline = store.get(KEYS.startedAt, null);
    if (typeof deadline !== "number" || deadline <= 0) {
      deadline = Date.now() + TOTAL_SECONDS * 1000;
      store.set(KEYS.startedAt, deadline);
    }

    let timerId = null;
    let submitted = false;
    let autoSubmitting = false;

    /* ------- dom refs ------- */
    const candidateHeader = document.getElementById("candidateNameHeader");
    const setHeader = document.getElementById("testSetHeader");
    const timerBox = document.getElementById("timerBox");
    const questionsList = document.getElementById("questionsList");
    const submitBtn = document.getElementById("submitBtn");
    const submitModal = document.getElementById("submitModal");
    const autoSubmitModal = document.getElementById("autoSubmitModal");
    const cancelSubmitBtn = document.getElementById("cancelSubmitBtn");
    const confirmSubmitBtn = document.getElementById("confirmSubmitBtn");
    const modalSummary = document.getElementById("modalSummary");

    /* ------- header ------- */
    candidateHeader.textContent = "Candidate: " + candidateName;
    setHeader.textContent = getSetLabel(setKey);

    /* ------- persistence ------- */
    function saveAnswers() {
      store.set(KEYS.answers, answers);
    }

    /* ------- timer ------- */
    function formatTime(sec) {
      const m = Math.floor(sec / 60);
      const s = sec % 60;
      return (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
    }

    function secondsLeft() {
      return Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
    }

    function updateTimerDisplay() {
      const remaining = secondsLeft();
      timerBox.textContent = formatTime(remaining);
      if (remaining <= 60) {
        timerBox.classList.add("low");
      } else {
        timerBox.classList.remove("low");
      }
      return remaining;
    }

    /* The timer is driven by the real clock rather than a tick counter, so
       it stays accurate even if the browser throttles background tabs. */
    function startTimer() {
      if (updateTimerDisplay() <= 0) {
        timerBox.textContent = "00:00";
        autoSubmit();
        return;
      }

      timerId = setInterval(function () {
        const remaining = updateTimerDisplay();
        if (remaining <= 0) {
          clearInterval(timerId);
          timerId = null;
          timerBox.textContent = "00:00";
          autoSubmit();
        }
      }, 1000);

      /* Catch up immediately when the user returns to the tab. */
      document.addEventListener("visibilitychange", function () {
        if (document.visibilityState === "visible" && !submitted) {
          const remaining = updateTimerDisplay();
          if (remaining <= 0 && timerId) {
            clearInterval(timerId);
            timerId = null;
            timerBox.textContent = "00:00";
            autoSubmit();
          }
        }
      });
    }

    /* ------- render all questions on one page ------- */
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
    let questionCards = [];

    function renderAllQuestions() {
      questionsList.innerHTML = "";
      questionCards = [];

      questions.forEach(function (q, qi) {
        const card = document.createElement("section");
        card.className = "question-card";
        card.dataset.qIndex = qi;

        const qnum = document.createElement("div");
        qnum.className = "qnum";
        qnum.textContent = "Question " + (qi + 1) + " of " + total;

        const qtext = document.createElement("p");
        qtext.className = "question-text";
        qtext.textContent = displayQuestion(q.question);

        const options = document.createElement("div");
        options.className = "options";

        q.options.forEach(function (text, oi) {
          const label = document.createElement("label");
          label.className = "option-label";

          const radio = document.createElement("input");
          radio.type = "radio";
          radio.name = "question-" + qi;
          radio.value = oi;
          radio.className = "option-radio";
          if (answers[qi] === oi) {
            radio.checked = true;
          }

          const letterSpan = document.createElement("span");
          letterSpan.className = "option-letter";
          letterSpan.textContent = letters[oi] || (oi + 1);

          const textSpan = document.createElement("span");
          textSpan.className = "option-text";
          textSpan.textContent = text;

          label.appendChild(radio);
          label.appendChild(letterSpan);
          label.appendChild(textSpan);

          radio.addEventListener("change", function () {
            if (submitted) return;
            answers[qi] = parseInt(radio.value, 10);
            saveAnswers();
            updateOptionStyle(qi);
          });

          options.appendChild(label);
        });

        card.appendChild(qnum);
        card.appendChild(qtext);
        card.appendChild(options);
        questionsList.appendChild(card);
        questionCards.push(card);

        updateOptionStyle(qi);
      });
    }

    function updateOptionStyle(qi) {
      const card = questionCards[qi];
      if (!card) return;
      const labels = card.querySelectorAll(".option-label");
      labels.forEach(function (label) {
        const radio = label.querySelector(".option-radio");
        label.classList.toggle("selected", radio.checked);
      });
    }

    /* ------- confirm submit ------- */
    function countAnswered() {
      return answers.filter(function (a) { return a !== null; }).length;
    }

    function openConfirmModal() {
      const answeredCount = countAnswered();
      modalSummary.textContent =
        "You have answered " + answeredCount + " of " + total +
        " questions. Are you sure you want to submit?";
      submitModal.classList.remove("hidden");
    }

    function closeConfirmModal() {
      submitModal.classList.add("hidden");
    }

    cancelSubmitBtn.addEventListener("click", closeConfirmModal);

    submitBtn.addEventListener("click", function () {
      if (submitted || autoSubmitting) return;
      openConfirmModal();
    });

    confirmSubmitBtn.addEventListener("click", finishTest);

    /* ------- auto submit ------- */
    function autoSubmit() {
      if (submitted) return;
      autoSubmitting = true;
      clearInterval(timerId);
      autoSubmitModal.classList.remove("hidden");
      setTimeout(function () {
        finishTest();
      }, 1500);
    }

    /* ------- finish & save result ------- */
    function finishTest() {
      if (submitted) return;
      submitted = true;
      clearInterval(timerId);
      timerId = null;
      closeConfirmModal();
      autoSubmitModal.classList.add("hidden");

      const scored = scoreTest(questions, answers);

      const result = {
        name: candidateName,
        setKey: setKey,
        setLabel: getSetLabel(setKey),
        total: total,
        correct: scored.correct,
        wrong: scored.wrong,
        unanswered: scored.unanswered,
        answered: scored.answered,
        percent: scored.percent,
        answers: answers
      };

      store.set(KEYS.result, result);
      store.remove(KEYS.answers);
      store.remove(KEYS.startedAt);

      /* Best-effort: record the attempt for the admin dashboard.
         A failed write never blocks the candidate from their result. */
      saveAttempt(authClient, result);

      redirectTo("result.html");
    }

    /* ------- wrong answer reporting ------- */
    const reportWrongBtn = document.getElementById("reportWrongBtn");
    const reportModal = document.getElementById("reportModal");
    const reportFormView = document.getElementById("reportFormView");
    const reportSuccessView = document.getElementById("reportSuccessView");
    const reportForm = document.getElementById("report-form");
    const reportQnum = document.getElementById("report-qnum");
    const reportAnswer = document.getElementById("report-answer");
    const reportNote = document.getElementById("report-note");
    const reportError = document.getElementById("report-error");
    const cancelReportBtn = document.getElementById("cancelReportBtn");
    const closeReportBtn = document.getElementById("closeReportBtn");
    const sendReportBtn = document.getElementById("sendReportBtn");

    let reportClient = null;

    function initReportClient() {
      if (!reportWrongBtn) return;

      if (authClient) {
        reportClient = authClient;
        return;
      }

      /* Reuse the shared cached client so we never spin up a second
         Supabase instance (which causes the multi-instance warning). */
      reportClient = getAuthClient();
      if (!reportClient) {
        reportWrongBtn.hidden = true;
      }
    }

    function setReportError(message) {
      if (message) {
        reportError.textContent = message;
        reportError.hidden = false;
      } else {
        reportError.textContent = "";
        reportError.hidden = true;
      }
    }

    function setReportBusy(busy) {
      sendReportBtn.disabled = busy;
      sendReportBtn.textContent = busy ? "Sending..." : "Send Report";
    }

    function resetReportForm() {
      reportForm.reset();
      setReportError("");
      reportQnum.classList.remove("input-error");
      reportAnswer.classList.remove("input-error");
      setReportBusy(false);
    }

    function openReportModal() {
      if (submitted || autoSubmitting) return;
      resetReportForm();
      reportFormView.hidden = false;
      reportSuccessView.hidden = true;
      reportModal.classList.remove("hidden");
      reportQnum.focus();
    }

    function closeReportModal() {
      reportModal.classList.add("hidden");
    }

    reportWrongBtn.addEventListener("click", openReportModal);

    cancelReportBtn.addEventListener("click", closeReportModal);

    closeReportBtn.addEventListener("click", function () {
      closeReportModal();
      resetReportForm();
    });

    reportForm.addEventListener("submit", async function (e) {
      e.preventDefault();
      if (submitted || autoSubmitting) return;

      setReportError("");
      reportQnum.classList.remove("input-error");
      reportAnswer.classList.remove("input-error");

      const qnum = Number(reportQnum.value);
      const answerText = reportAnswer.value.trim();
      const noteText = reportNote.value.trim();

      if (!Number.isInteger(qnum) || qnum < 1 || qnum > total) {
        setReportError("Enter a question number between 1 and " + total + ".");
        reportQnum.classList.add("input-error");
        reportQnum.focus();
        return;
      }

      if (!answerText) {
        setReportError("Enter the answer you believe is correct.");
        reportAnswer.classList.add("input-error");
        reportAnswer.focus();
        return;
      }

      if (!reportClient) {
        setReportError("Reporting is temporarily unavailable. Please try again later.");
        return;
      }

      const q = questions[qnum - 1];
      const payload = {
        candidate_name: candidateName,
        set_key: setKey,
        set_label: getSetLabel(setKey),
        question_number: qnum,
        question_text: displayQuestion(q.question).slice(0, 200),
        current_answer_text: q.options[q.answer],
        reported_answer: answerText,
        note: noteText ? noteText : null
      };

      setReportBusy(true);

      let error = null;
      try {
        const result = await reportClient.from("wrong_answer_reports").insert(payload);
        error = result.error;
      } catch (err) {
        error = { message: (err && err.message) || "Network error" };
      }

      setReportBusy(false);

      if (error) {
        setReportError("Could not send your report: " + error.message);
        return;
      }

      reportFormView.hidden = true;
      reportSuccessView.hidden = false;
    });

    /* ------- init ------- */
    reportQnum.max = String(total);
    initReportClient();
    renderAllQuestions();
    startTimer();
  }
}

if (isTestPage) {
  requireSession(function (client) {
    initTestPage(client);
  });
}

/* ==================== RESULT PAGE ==================== */

if (isResultPage) {
  document.getElementById("logoutBtn").addEventListener("click", logout);

  /* Return to the start-test page (candidate set selection). */
  function goResultHome() {
    store.remove(KEYS.answers);
    store.remove(KEYS.result);
    redirectTo("index.html");
  }

  const resultHomeBtn = document.getElementById("resultHomeBtn");
  if (resultHomeBtn) {
    resultHomeBtn.addEventListener("click", goResultHome);
  }

  /* Only show results to a signed-in candidate. */
  requireSession(function () {
    const result = store.get(KEYS.result, null);

    if (!result) {
      redirectTo("index.html");
    } else {
      displayResult(result);
    }
  });

  function displayResult(result) {
    document.getElementById("candidateNameHeader").textContent = "Candidate: " + result.name;
    document.getElementById("testSetHeader").textContent = getSetLabel(result.setKey);

    const scoreGrid = document.getElementById("scoreGrid");

    const cards = [
      { label: "Total Questions", value: result.total, cls: "" },
      { label: "Correct", value: result.correct, cls: "green" },
      { label: "Wrong", value: result.wrong, cls: "red" },
      { label: "Unanswered", value: result.unanswered, cls: "orange" },
      { label: "Percentage", value: result.percent + "%", cls: "blue" }
    ];

    cards.forEach(function (c) {
      const card = document.createElement("div");
      card.className = "score-card " + c.cls;

      const num = document.createElement("span");
      num.className = "score-number";
      num.textContent = c.value;

      const label = document.createElement("span");
      label.className = "score-label";
      label.textContent = c.label;

      card.appendChild(num);
      card.appendChild(label);
      scoreGrid.appendChild(card);
    });

    /* ----- answer review ----- */
    const questions = questionSets[result.setKey] || [];
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
    const reviewList = document.getElementById("reviewList");

    function addOption(container, text, optionIndex, isCorrectAnswer, chosenIndex) {
      const row = document.createElement("div");
      row.className = "review-option";

      const letter = document.createElement("span");
      letter.className = "opt-letter";
      letter.textContent = letters[optionIndex] || (optionIndex + 1);

      const label = document.createElement("span");
      label.textContent = text;

      row.appendChild(letter);
      row.appendChild(label);

      if (optionIndex === chosenIndex && optionIndex === isCorrectAnswer) {
        row.classList.add("correct-answer");
        addBadge(row, "Your Answer", "correct-b");
      } else if (optionIndex === chosenIndex) {
        row.classList.add("chosen-wrong");
        addBadge(row, "Your Answer", "wrong-b");
      } else if (optionIndex === isCorrectAnswer) {
        row.classList.add("correct-answer");
        addBadge(row, "Correct Answer", "correct-b");
      }

      container.appendChild(row);
    }

    function addBadge(row, text, cls) {
      const badge = document.createElement("span");
      badge.className = "badge " + cls;
      badge.textContent = text;
      row.appendChild(badge);
    }

    questions.forEach(function (q, i) {
      const chosenIndex = result.answers[i] !== undefined ? result.answers[i] : null;
      const isAnswered = chosenIndex !== null;
      const isCorrect = isAnswered && chosenIndex === q.answer;

      const card = document.createElement("div");
      card.className = "review-card " + (isCorrect ? "correct" : isAnswered ? "wrong" : "unanswered");

      const qnum = document.createElement("div");
      qnum.className = "review-qnum";
      qnum.textContent = "Question " + (i + 1) + " of " + result.total;
      card.appendChild(qnum);

      const qtext = document.createElement("div");
      qtext.className = "review-question";
      qtext.textContent = displayQuestion(q.question);
      card.appendChild(qtext);

      const opts = document.createElement("div");
      opts.className = "review-options";
      q.options.forEach(function (text, oi) {
        addOption(opts, text, oi, q.answer, chosenIndex);
      });
      card.appendChild(opts);

      const verdict = document.createElement("div");
      verdict.className = "review-verdict";
      if (isCorrect) {
        verdict.textContent = "Correct";
        verdict.classList.add("verdict-correct");
      } else if (isAnswered) {
        verdict.textContent = "Wrong";
        verdict.classList.add("verdict-wrong");
      } else {
        verdict.textContent = "Unanswered";
        verdict.classList.add("verdict-unanswered");
      }
      card.appendChild(verdict);

      reviewList.appendChild(card);
    });

    /* ----- result action buttons ----- */
    document.getElementById("retryBtn").addEventListener("click", function () {
      store.remove(KEYS.answers);
      store.remove(KEYS.result);
      redirectTo("test.html");
    });

    document.getElementById("homeBtn").addEventListener("click", goResultHome);
  }
}