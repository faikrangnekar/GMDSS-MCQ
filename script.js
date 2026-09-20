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
    localStorage.setItem(key, JSON.stringify(value));
  },
  remove(key) {
    localStorage.removeItem(key);
  }
};

const KEYS = {
  name: "gmdss_name",
  set: "gmdss_set",
  answers: "gmdss_answers",
  result: "gmdss_result"
};

/* ------------------ Page detection ------------------ */

const isHomePage = !!document.getElementById("home-page");
const isTestPage = !!document.getElementById("test-page");
const isResultPage = !!document.getElementById("result-page");

/* ------------------ Shared helpers ------------------ */

function setSetLabel(elId) {
  const el = document.getElementById(elId);
  if (!el) return;
  const setKey = store.get(KEYS.set, "set1");
  const setNames = {
    set1: "Set 1",
    set2: "Set 2",
    set3: "Set 3",
    set4: "Set 4",
    set5: "Set 5"
  };
  el.textContent = setNames[setKey] || setKey.toUpperCase();
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

/* ==================== HOME PAGE ==================== */

if (isHomePage) {
  const nameInput = document.getElementById("candidate-name");
  const setSelect = document.getElementById("test-set");
  const errorEl = document.getElementById("name-error");
  const startForm = document.getElementById("start-form");

  buildSetSelect(setSelect);

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

/* ==================== TEST PAGE ==================== */

if (isTestPage) {
  const candidateName = store.get(KEYS.name, "");
  let setKey = store.get(KEYS.set, "");

  if (!candidateName || !questionSets[setKey]) {
    redirectTo("index.html");
  } else {
    startTest();
  }

  function startTest() {
    /* ------- data ------- */
    const questions = questionSets[setKey];
    const total = questions.length;
    const answers = store.get(KEYS.answers, null) || Array(total).fill(null);
    let remaining = TOTAL_SECONDS;
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
    const setNames = {
      set1: "Set 1",
      set2: "Set 2",
      set3: "Set 3",
      set4: "Set 4",
      set5: "Set 5"
    };
    candidateHeader.textContent = "Candidate: " + candidateName;
    setHeader.textContent = setNames[setKey] || setKey;

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

    function updateTimerDisplay() {
      timerBox.textContent = formatTime(remaining);
      if (remaining <= 60) {
        timerBox.classList.add("low");
      }
    }

    function startTimer() {
      timerId = setInterval(function () {
        remaining--;
        updateTimerDisplay();
        if (remaining <= 0) {
          clearInterval(timerId);
          timerBox.textContent = "00:00";
          autoSubmit();
        }
      }, 1000);
    }

    updateTimerDisplay();

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
      closeConfirmModal();
      autoSubmitModal.classList.add("hidden");

      const scored = scoreTest(questions, answers);

      const result = {
        name: candidateName,
        setKey: setKey,
        setLabel: setNames[setKey] || setKey,
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

      redirectTo("result.html");
    }

    /* ------- init ------- */
    renderAllQuestions();
    startTimer();
  }
}

/* ==================== RESULT PAGE ==================== */

if (isResultPage) {
  const result = store.get(KEYS.result, null);

  if (!result) {
    redirectTo("index.html");
  } else {
    displayResult(result);
  }

  function displayResult(result) {
    const setNames = {
      set1: "Set 1",
      set2: "Set 2",
      set3: "Set 3",
      set4: "Set 4",
      set5: "Set 5"
    };

    document.getElementById("candidateNameHeader").textContent = "Candidate: " + result.name;
    document.getElementById("testSetHeader").textContent = setNames[result.setKey] || result.setKey;

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

    document.getElementById("homeBtn").addEventListener("click", function () {
      store.remove(KEYS.answers);
      store.remove(KEYS.result);
      redirectTo("index.html");
    });
  }
}