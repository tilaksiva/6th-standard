/* ============================================================
   EXPEDITION CLASS 6 — APP LOGIC
   Vanilla JS, no dependencies. All progress lives in
   localStorage under STORAGE_KEY. Screens are plain <section>
   elements toggled with a .active class; a small back-stack
   powers the ← button.
============================================================ */

const STORAGE_KEY = "expeditionClass6Save";

const BADGES = {
  first_steps:   { icon: "🥾", name: "First Steps",     desc: "Completed your first chapter" },
  perfectionist: { icon: "🌟", name: "Perfectionist",     desc: "Earned 3 stars on a chapter" },
  streak_3:      { icon: "🔥", name: "On a Roll",         desc: "3-day learning streak" },
  coin_collector:{ icon: "💰", name: "Coin Collector",    desc: "Collected 200 coins" },
  subject_master:{ icon: "🏆", name: "Trail Master",      desc: "3-starred an entire subject" },
  boss_slayer:   { icon: "👑", name: "Boss Slayer",       desc: "Defeated a Boss Battle" }
};

const MODES = {
  adventure: { icon: "🧭", name: "Adventure Quiz", desc: "Answer questions that get harder as you go. 3 hearts." },
  time:      { icon: "⏱️", name: "Time Challenge", desc: "60 seconds, as many correct answers as you can!" },
  memory:    { icon: "🧠", name: "Memory Match",    desc: "Flip cards to match terms with meanings." },
  match:     { icon: "🎯", name: "Match the Following", desc: "Drag each term onto its correct meaning." },
  spin:      { icon: "🎡", name: "Spin & Win", desc: "Spin for a coin multiplier, then answer 3 bonus questions." }
};

/* ---------------- State ---------------- */
let state = null;
let nav = { subject: null, chapter: null, mode: null, screenStack: [] };
let quizRuntime = null; // holds transient state for whichever quiz-like mode is running

function defaultState() {
  return {
    name: "",
    coins: 0,
    xp: 0,
    streak: { count: 0, lastDate: null },
    badges: [],
    progress: {} // progress[subjectKey][chapterKey] = { stars, bestAccuracy, adventureDone, modesPlayed:[...] }
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    state = raw ? Object.assign(defaultState(), JSON.parse(raw)) : defaultState();
  } catch (e) {
    state = defaultState();
  }
}

function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) { /* storage unavailable */ }
}

function getChapterProgress(subjectKey, chapterId) {
  if (!state.progress[subjectKey]) state.progress[subjectKey] = {};
  if (!state.progress[subjectKey][chapterId]) {
    state.progress[subjectKey][chapterId] = { stars: 0, bestAccuracy: 0, adventureDone: false, modesPlayed: [] };
  }
  return state.progress[subjectKey][chapterId];
}

/* ---------------- Utilities ---------------- */
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function pick(arr, n) { return shuffle(arr).slice(0, n); }
function todayStr() { return new Date().toISOString().slice(0, 10); }
function el(html) { const d = document.createElement("div"); d.innerHTML = html.trim(); return d.firstElementChild; }
function letterFor(i) { return "ABCD"[i]; }

/* ---------------- Streak handling ---------------- */
function touchStreak() {
  const today = todayStr();
  if (state.streak.lastDate === today) return; // already counted today
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  if (state.streak.lastDate === yesterday) {
    state.streak.count += 1;
  } else {
    state.streak.count = 1;
  }
  state.streak.lastDate = today;
  saveState();
  if (state.streak.count >= 3) awardBadge("streak_3");
}

/* ---------------- Rewards ---------------- */
function awardCoins(n) { state.coins += n; saveState(); renderTopbarStats(); if (state.coins >= 200) awardBadge("coin_collector"); }
function awardXp(n) { state.xp += n; saveState(); renderTopbarStats(); }

function awardBadge(id) {
  if (state.badges.includes(id)) return;
  state.badges.push(id);
  saveState();
  const b = BADGES[id];
  showBadgeToast(`${b.icon} Badge earned: ${b.name}!`);
}

let badgeToastTimer = null;
function showBadgeToast(text) {
  const toast = document.getElementById("badgeToast");
  toast.textContent = text;
  toast.classList.add("show");
  clearTimeout(badgeToastTimer);
  badgeToastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function fireConfetti(count = 26) {
  const colors = ["#FFC93C", "#FF6B5B", "#4FC3E8", "#7ED957", "#B98BE0"];
  for (let i = 0; i < count; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
    const dur = 1.8 + Math.random() * 1.4;
    piece.style.animationDuration = dur + "s";
    piece.style.animationDelay = (Math.random() * 0.3) + "s";
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), (dur + 0.5) * 1000);
  }
}

/* ---------------- Screen navigation ---------------- */
function showScreen(id, { pushHistory = true, topbar = true } = {}) {
  if (pushHistory) {
    const current = document.querySelector(".screen.active");
    if (current) nav.screenStack.push(current.id);
  }
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  document.getElementById("topbar").style.display = topbar ? "flex" : "none";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function goBack() {
  // leaving an active timer-based mode should stop its timer
  stopAnyRunningTimer();
  const prev = nav.screenStack.pop();
  if (!prev) { showScreen("screen-home", { pushHistory: false, topbar: false }); return; }
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(prev).classList.add("active");
  document.getElementById("topbar").style.display = prev === "screen-home" ? "none" : "flex";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function stopAnyRunningTimer() {
  if (quizRuntime && quizRuntime.timerHandle) {
    clearInterval(quizRuntime.timerHandle);
    quizRuntime.timerHandle = null;
  }
}

function renderTopbarStats() {
  document.getElementById("statCoins").textContent = state.coins;
  document.getElementById("statXp").textContent = state.xp;
  document.getElementById("statStreak").textContent = state.streak.count;
}

/* ============================================================
   HOME SCREEN
============================================================ */
function renderHome() {
  renderTopbarStats();
  const hasName = !!state.name;
  document.getElementById("nameFormCard").style.display = hasName ? "none" : "block";
  document.getElementById("welcomeBackCard").style.display = hasName ? "block" : "none";
  document.getElementById("homeProgressWrap").style.display = hasName ? "block" : "none";

  if (hasName) {
    document.getElementById("welcomeBackLabel").textContent = `Welcome back, ${state.name}! 🌿`;
    const { done, total } = overallProgress();
    const pct = total ? Math.round((done / total) * 100) : 0;
    document.getElementById("homeProgressPct").textContent = pct + "%";
    document.getElementById("homeProgressFill").style.width = pct + "%";
  }
}

function overallProgress() {
  let done = 0, total = 0;
  for (const subjKey in QUESTION_BANK) {
    QUESTION_BANK[subjKey].chapters.forEach(ch => {
      total += 3; // 3 stars max per chapter
      const p = state.progress[subjKey] && state.progress[subjKey][ch.id];
      if (p) done += p.stars;
    });
  }
  return { done, total };
}

document.getElementById("btnStartLearning").addEventListener("click", () => {
  const val = document.getElementById("playerNameInput").value.trim();
  if (!val) { document.getElementById("playerNameInput").focus(); return; }
  state.name = val.slice(0, 20);
  saveState();
  touchStreak();
  renderHome();
  goToSubjects();
});
document.getElementById("btnContinue").addEventListener("click", () => { touchStreak(); goToSubjects(); });
document.getElementById("btnSwitchExplorer").addEventListener("click", () => {
  if (confirm("Switching clears this device's saved progress for a new explorer. Continue?")) {
    state = defaultState();
    saveState();
    renderHome();
  }
});
document.getElementById("btnBack").addEventListener("click", goBack);

function goToSubjects() {
  renderSubjects();
  showScreen("screen-subjects", { pushHistory: false });
  nav.screenStack = ["screen-home"];
}

/* ============================================================
   SUBJECT SELECTION
============================================================ */
function renderSubjects() {
  const grid = document.getElementById("subjectGrid");
  grid.innerHTML = "";
  Object.entries(QUESTION_BANK).forEach(([key, subj]) => {
    let starsTotal = 0, starsMax = 0;
    subj.chapters.forEach(ch => {
      starsMax += 3;
      const p = state.progress[key] && state.progress[key][ch.id];
      if (p) starsTotal += p.stars;
    });
    const card = el(`
      <button class="subject-card" style="--card-color:${subj.color}">
        <span class="icon">${subj.icon}</span>
        <span class="name">${subj.name}</span>
        <span class="tagline">${subj.tagline}</span>
        <span class="stars-summary">⭐ ${starsTotal}/${starsMax}</span>
      </button>
    `);
    card.addEventListener("click", () => { nav.subject = key; goToChapters(key); });
    grid.appendChild(card);
  });
}

/* ============================================================
   CHAPTER TRAIL MAP (signature visual element)
============================================================ */
function goToChapters(subjectKey) {
  renderChapterTrail(subjectKey);
  showScreen("screen-chapters");
}

function isChapterUnlocked(subjectKey, index) {
  if (index === 0) return true;
  const subj = QUESTION_BANK[subjectKey];
  const prevChapter = subj.chapters[index - 1];
  const prevProgress = state.progress[subjectKey] && state.progress[subjectKey][prevChapter.id];
  return !!(prevProgress && prevProgress.stars >= 1);
}

function isBossUnlocked(subjectKey) {
  const subj = QUESTION_BANK[subjectKey];
  return subj.chapters.every(ch => {
    const p = state.progress[subjectKey] && state.progress[subjectKey][ch.id];
    return p && p.stars >= 1;
  });
}

function renderChapterTrail(subjectKey) {
  const subj = QUESTION_BANK[subjectKey];
  document.getElementById("chapterScreenTitle").innerHTML =
    `${subj.icon} ${subj.name}<small>Follow the trail — clear a chapter to reveal the next</small>`;
  document.getElementById("chapterBlurbBox").style.display = "none";

  const nodes = subj.chapters.map((ch, i) => ({ type: "chapter", index: i, chapter: ch }));
  const bossUnlocked = isBossUnlocked(subjectKey);
  nodes.push({ type: "boss", unlocked: bossUnlocked });

  const rowHeight = 140;
  const totalHeight = rowHeight * nodes.length + 60;
  const viewW = 400;

  const points = nodes.map((n, i) => {
    let x;
    if (i === 0) x = viewW / 2;
    else x = (i % 2 === 1) ? viewW * 0.28 : viewW * 0.72;
    const y = 70 + i * rowHeight;
    return { x, y };
  });

  let pathD = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const p0 = points[i - 1], p1 = points[i];
    const midY = (p0.y + p1.y) / 2;
    pathD += ` C ${p0.x} ${midY}, ${p1.x} ${midY}, ${p1.x} ${p1.y}`;
  }

  const wrap = document.getElementById("trailWrap");
  wrap.style.height = totalHeight + "px";
  wrap.innerHTML = `
    <svg class="trail-svg" viewBox="0 0 ${viewW} ${totalHeight}" preserveAspectRatio="none" style="position:absolute; top:0; left:0; height:${totalHeight}px;">
      <path d="${pathD}" fill="none" stroke="rgba(255,255,255,0.55)" stroke-width="6" stroke-linecap="round" stroke-dasharray="2 18"/>
    </svg>
  `;

  nodes.forEach((n, i) => {
    const { x, y } = points[i];
    let unlocked, icon, label, starsHtml = "";
    if (n.type === "chapter") {
      unlocked = isChapterUnlocked(subjectKey, n.index);
      const p = state.progress[subjectKey] && state.progress[subjectKey][n.chapter.id];
      const stars = p ? p.stars : 0;
      icon = unlocked ? (stars === 3 ? "🏅" : subj.icon) : "🔒";
      label = n.chapter.name;
      if (unlocked) starsHtml = `<div class="trail-node-stars">${"★".repeat(stars)}${"☆".repeat(3 - stars)}</div>`;
    } else {
      unlocked = n.unlocked;
      icon = unlocked ? "👑" : "🔒";
      label = "Boss Battle";
    }
    const btn = el(`
      <button class="trail-node-btn ${unlocked ? "" : "locked"}" style="left:${(x / viewW) * 100}%; top:${(y / totalHeight) * 100}%;">
        <div class="trail-node-circle">${icon}</div>
        <div class="trail-node-label">${label}</div>
        ${starsHtml}
      </button>
    `);
    btn.addEventListener("click", () => {
      if (!unlocked) {
        showBadgeToast(n.type === "boss" ? "👑 Clear every chapter first!" : "🔒 Finish the previous chapter first!");
        return;
      }
      if (n.type === "chapter") {
        document.getElementById("chapterBlurbBox").style.display = "block";
        document.getElementById("chapterBlurbBox").textContent = `📜 ${n.chapter.blurb}`;
        nav.chapter = n.chapter.id;
        goToModes(subjectKey, n.chapter.id);
      } else {
        nav.chapter = "__boss__";
        startBossBattle(subjectKey);
      }
    });
    wrap.appendChild(btn);
  });
}

/* ============================================================
   MODE SELECTION
============================================================ */
function goToModes(subjectKey, chapterId) {
  renderModes(subjectKey, chapterId);
  showScreen("screen-modes");
}

function renderModes(subjectKey, chapterId) {
  const subj = QUESTION_BANK[subjectKey];
  const chapter = subj.chapters.find(c => c.id === chapterId);
  const progress = getChapterProgress(subjectKey, chapterId);
  document.getElementById("modeScreenTitle").innerHTML = `${chapter.name}<small>${chapter.blurb}</small>`;

  const grid = document.getElementById("modeGrid");
  grid.innerHTML = "";
  Object.entries(MODES).forEach(([modeId, mode]) => {
    const requiresAdventure = modeId !== "adventure";
    const locked = requiresAdventure && !progress.adventureDone;
    const card = el(`
      <button class="mode-card ${locked ? "locked" : ""}">
        <span class="icon">${mode.icon}</span>
        <div class="name">${mode.name}</div>
        <div class="desc">${locked ? "Complete Adventure Quiz first" : mode.desc}</div>
      </button>
    `);
    card.addEventListener("click", () => {
      if (locked) { showBadgeToast("🧭 Try Adventure Quiz first to unlock this!"); return; }
      launchMode(modeId, subjectKey, chapterId);
    });
    grid.appendChild(card);
  });
}

function launchMode(modeId, subjectKey, chapterId) {
  nav.subject = subjectKey; nav.chapter = chapterId; nav.mode = modeId;
  if (modeId === "adventure") renderAdventureQuiz(subjectKey, chapterId);
  else if (modeId === "time") renderTimeChallenge(subjectKey, chapterId);
  else if (modeId === "memory") renderMemoryMatch(subjectKey, chapterId);
  else if (modeId === "match") renderMatchFollowing(subjectKey, chapterId);
  else if (modeId === "spin") renderSpinWheel(subjectKey, chapterId);
  showScreen("screen-play");
}

/* ============================================================
   SHARED QUIZ ENGINE  (used by Adventure Quiz + Boss Battle)
============================================================ */
function buildAdaptiveQueue(chapter) {
  const byDiff = { easy: [], medium: [], hard: [] };
  chapter.questions.forEach(q => byDiff[q.difficulty].push(q));
  return { easy: shuffle(byDiff.easy), medium: shuffle(byDiff.medium), hard: shuffle(byDiff.hard) };
}

function renderAdventureQuiz(subjectKey, chapterId) {
  const subj = QUESTION_BANK[subjectKey];
  const chapter = subj.chapters.find(c => c.id === chapterId);
  const pools = buildAdaptiveQueue(chapter);
  const maxQuestions = Math.min(8, chapter.questions.length);

  quizRuntime = {
    kind: "adventure", subjectKey, chapterId,
    pools, tierOrder: ["easy", "medium", "hard"], tierIdx: 0,
    asked: 0, maxQuestions, correct: 0, hearts: 3,
    usedIds: new Set(), coinsEarned: 0, xpEarned: 0
  };
  nextAdventureQuestion();
}

function tierCoinsXp(diff) {
  if (diff === "easy") return { coins: 5, xp: 10 };
  if (diff === "medium") return { coins: 8, xp: 15 };
  return { coins: 12, xp: 20 };
}

function nextAdventureQuestion() {
  const r = quizRuntime;
  if (r.asked >= r.maxQuestions || r.hearts <= 0) { finishAdventureQuiz(); return; }

  const tier = r.tierOrder[r.tierIdx];
  let pool = r.pools[tier].filter(q => !r.usedIds.has(q.q));
  // fall back to any tier with remaining questions if current tier is exhausted
  if (pool.length === 0) {
    for (const t of r.tierOrder) {
      const alt = r.pools[t].filter(q => !r.usedIds.has(q.q));
      if (alt.length) { pool = alt; break; }
    }
  }
  if (pool.length === 0) { finishAdventureQuiz(); return; }

  const question = pool[0];
  r.usedIds.add(question.q);
  r.currentQuestion = question;
  renderQuizQuestion(question, {
    heartsLeft: r.hearts,
    progressLabel: `Q${r.asked + 1} / ${r.maxQuestions}`,
    onAnswer: (isCorrect, optIdx) => handleAdventureAnswer(isCorrect)
  });
}

function handleAdventureAnswer(isCorrect) {
  const r = quizRuntime;
  const diff = r.currentQuestion.difficulty;
  const reward = tierCoinsXp(diff);
  if (isCorrect) {
    r.correct++;
    r.coinsEarned += reward.coins; r.xpEarned += reward.xp;
    r.tierIdx = Math.min(r.tierIdx + 1, 2); // adapt: get harder
  } else {
    r.hearts--;
    r.tierIdx = Math.max(r.tierIdx - 1, 0); // adapt: ease off
  }
  r.asked++;
  updateQuizHud(r.hearts, `Q${Math.min(r.asked + 1, r.maxQuestions)} / ${r.maxQuestions}`);
  document.getElementById("nextQuestionBtn").addEventListener("click", () => nextAdventureQuestion(), { once: true });
}

function finishAdventureQuiz() {
  const r = quizRuntime;
  const accuracy = r.asked ? Math.round((r.correct / r.asked) * 100) : 0;
  const stars = r.hearts <= 0 ? 0 : (accuracy >= 90 ? 3 : accuracy >= 70 ? 2 : accuracy >= 40 ? 1 : 0);

  awardCoins(r.coinsEarned);
  awardXp(r.xpEarned);

  const progress = getChapterProgress(r.subjectKey, r.chapterId);
  const isFirstClear = !progress.adventureDone && stars >= 1;
  progress.adventureDone = progress.adventureDone || stars >= 1;
  progress.stars = Math.max(progress.stars, stars);
  progress.bestAccuracy = Math.max(progress.bestAccuracy, accuracy);
  saveState();

  if (isFirstClear) awardBadge("first_steps");
  if (stars === 3) awardBadge("perfectionist");
  const subj = QUESTION_BANK[r.subjectKey];
  if (subj.chapters.every(ch => (state.progress[r.subjectKey][ch.id] || {}).stars === 3)) awardBadge("subject_master");

  showResults({
    title: stars >= 1 ? "Chapter cleared!" : "Good try!",
    emoji: stars === 3 ? "🏅" : stars >= 1 ? "🎉" : "🌱",
    stars, accuracy,
    coins: r.coinsEarned, xp: r.xpEarned,
    correct: r.correct, total: r.asked,
    onRetry: () => renderAdventureQuiz(r.subjectKey, r.chapterId),
    onModes: () => goToModes(r.subjectKey, r.chapterId),
    onTrail: () => goToChapters(r.subjectKey)
  });
}

/* ---- generic question renderer used by adventure/time/boss ---- */
function renderQuizQuestion(question, { heartsLeft, timerText, progressLabel, onAnswer }) {
  const shuffledOpts = question.options.map((text, idx) => ({ text, idx })).sort(() => Math.random() - 0.5);

  const area = document.getElementById("playArea");
  area.innerHTML = `
    <div class="quiz-topline">
      <span>${progressLabel || ""}</span>
      ${heartsLeft !== undefined ? `<span class="hearts">${"❤️".repeat(heartsLeft)}${"🖤".repeat(Math.max(0, 3 - heartsLeft))}</span>` : ""}
      ${timerText !== undefined ? `<span class="timer-badge" id="timerBadge">${timerText}</span>` : ""}
    </div>
    <div class="question-card">
      <span class="difficulty-tag ${question.difficulty}">${question.difficulty.toUpperCase()}</span>
      <div class="question-text">${question.q}</div>
      <div class="options-list" id="optionsList"></div>
      <div class="explain-box" id="explainBox"><span class="lbl">Why:</span><span id="explainText"></span></div>
      <div class="next-btn-wrap" id="nextBtnWrap"></div>
    </div>
  `;
  const list = document.getElementById("optionsList");
  shuffledOpts.forEach(({ text, idx }) => {
    const btn = el(`<button class="option-btn"><span class="opt-letter">${letterFor(list.children.length)}</span><span>${text}</span></button>`);
    btn.addEventListener("click", () => {
      document.querySelectorAll(".option-btn").forEach(b => b.disabled = true);
      const isCorrect = idx === question.answer;
      btn.classList.add(isCorrect ? "correct" : "wrong");
      if (!isCorrect) {
        [...list.children][question.answer]?.classList.add("correct");
      }
      document.getElementById("explainText").textContent = question.explain;
      document.getElementById("explainBox").classList.add("show");
      document.getElementById("nextBtnWrap").innerHTML = `<button class="btn" id="nextQuestionBtn">Next →</button>`;
      onAnswer(isCorrect, idx);
    });
    list.appendChild(btn);
  });
}

function updateQuizHud(heartsLeft, progressLabel) {
  const topline = document.querySelector(".quiz-topline");
  if (!topline) return;
  const spans = topline.querySelectorAll("span");
  if (spans[0]) spans[0].textContent = progressLabel;
}

/* ============================================================
   TIME CHALLENGE — 60 second rapid fire
============================================================ */
function renderTimeChallenge(subjectKey, chapterId) {
  const chapter = QUESTION_BANK[subjectKey].chapters.find(c => c.id === chapterId);
  quizRuntime = {
    kind: "time", subjectKey, chapterId,
    queue: shuffle(chapter.questions), qIdx: 0,
    correct: 0, asked: 0, streakCombo: 0,
    coinsEarned: 0, xpEarned: 0,
    timeLeft: 60, timerHandle: null
  };
  document.getElementById("playArea").innerHTML = `
    <div style="text-align:center; color:var(--white); margin-bottom:14px;">
      <div class="display" style="font-size:20px;">Rapid Fire! ⏱️ Answer as many as you can</div>
    </div>`;
  nextTimeQuestion();
  quizRuntime.timerHandle = setInterval(tickTimeChallenge, 1000);
}

function tickTimeChallenge() {
  const r = quizRuntime;
  r.timeLeft--;
  const badge = document.getElementById("timerBadge");
  if (badge) {
    badge.textContent = `${r.timeLeft}s`;
    badge.classList.toggle("urgent", r.timeLeft <= 10);
  }
  if (r.timeLeft <= 0) {
    clearInterval(r.timerHandle);
    finishTimeChallenge();
  }
}

function nextTimeQuestion() {
  const r = quizRuntime;
  if (r.qIdx >= r.queue.length) r.queue = shuffle(r.queue), r.qIdx = 0; // recycle pool if they're fast
  const q = r.queue[r.qIdx++];
  r.currentQuestion = q;
  renderQuizQuestion(q, {
    timerText: `${r.timeLeft}s`,
    progressLabel: `Score: ${r.correct}`,
    onAnswer: (isCorrect) => handleTimeAnswer(isCorrect)
  });
}

function handleTimeAnswer(isCorrect) {
  const r = quizRuntime;
  r.asked++;
  if (isCorrect) {
    r.correct++; r.streakCombo++;
    r.coinsEarned += 6; r.xpEarned += 10;
    if (r.streakCombo === 3) { r.coinsEarned += 5; showBadgeToast("🔥 Combo bonus! +5 coins"); }
    if (r.streakCombo > 0 && r.streakCombo % 3 === 0) r.coinsEarned += 5;
  } else {
    r.streakCombo = 0;
  }
  const btn = document.getElementById("nextQuestionBtn");
  if (btn) {
    btn.textContent = "Next →";
    btn.addEventListener("click", () => { if (quizRuntime.timeLeft > 0) nextTimeQuestion(); }, { once: true });
  }
}

function finishTimeChallenge() {
  const r = quizRuntime;
  awardCoins(r.coinsEarned); awardXp(r.xpEarned);
  const accuracy = r.asked ? Math.round((r.correct / r.asked) * 100) : 0;
  showResults({
    title: "Time's up!", emoji: r.correct >= 10 ? "⚡" : "⏱️",
    stars: null, accuracy,
    coins: r.coinsEarned, xp: r.xpEarned,
    correct: r.correct, total: r.asked,
    customStat: { label: "Questions answered", value: r.asked },
    onRetry: () => launchMode("time", r.subjectKey, r.chapterId),
    onModes: () => goToModes(r.subjectKey, r.chapterId),
    onTrail: () => goToChapters(r.subjectKey)
  });
}

/* ============================================================
   MEMORY MATCH
============================================================ */
function renderMemoryMatch(subjectKey, chapterId) {
  const chapter = QUESTION_BANK[subjectKey].chapters.find(c => c.id === chapterId);
  const pairs = pick(chapter.terms, Math.min(6, chapter.terms.length));
  let cards = [];
  pairs.forEach((p, i) => {
    cards.push({ pairId: i, side: "term", text: p.term });
    cards.push({ pairId: i, side: "def", text: p.def });
  });
  cards = shuffle(cards);

  quizRuntime = { kind: "memory", subjectKey, chapterId, flipped: [], matchedCount: 0, totalPairs: pairs.length, flips: 0, coinsEarned: 0, xpEarned: 0, locked: false };

  const area = document.getElementById("playArea");
  area.innerHTML = `
    <div style="text-align:center; color:var(--white); margin-bottom:14px;">
      <div class="display" style="font-size:20px;">Memory Match 🧠 — matched <span id="memMatchedCount">0</span>/${pairs.length}</div>
    </div>
    <div class="memory-grid" id="memoryGrid"></div>
  `;
  const grid = document.getElementById("memoryGrid");
  cards.forEach((card, idx) => {
    const cardEl = el(`
      <div class="memory-card" data-idx="${idx}" data-pair="${card.pairId}" data-side="${card.side}">
        <div class="memory-card-inner">
          <div class="memory-face front">🌿</div>
          <div class="memory-face back">${card.text}</div>
        </div>
      </div>
    `);
    cardEl.addEventListener("click", () => handleMemoryFlip(cardEl));
    grid.appendChild(cardEl);
  });
}

function handleMemoryFlip(cardEl) {
  const r = quizRuntime;
  if (r.locked) return;
  if (cardEl.classList.contains("flipped") || cardEl.classList.contains("matched")) return;
  if (r.flipped.length >= 2) return;

  cardEl.classList.add("flipped");
  r.flipped.push(cardEl);
  if (r.flipped.length === 2) {
    r.flips++;
    const [a, b] = r.flipped;
    const isMatch = a.dataset.pair === b.dataset.pair && a.dataset.side !== b.dataset.side;
    if (isMatch) {
      a.classList.add("matched"); b.classList.add("matched");
      r.matchedCount++; r.coinsEarned += 6; r.xpEarned += 8;
      document.getElementById("memMatchedCount").textContent = r.matchedCount;
      r.flipped = [];
      if (r.matchedCount >= r.totalPairs) finishMemoryMatch();
    } else {
      r.locked = true;
      setTimeout(() => {
        a.classList.remove("flipped"); b.classList.remove("flipped");
        r.flipped = []; r.locked = false;
      }, 900);
    }
  }
}

function finishMemoryMatch() {
  const r = quizRuntime;
  const perfectBonus = r.flips <= r.totalPairs + 2 ? 10 : 0;
  if (perfectBonus) { r.coinsEarned += perfectBonus; showBadgeToast("🧠 Sharp memory! +10 bonus coins"); }
  awardCoins(r.coinsEarned); awardXp(r.xpEarned);
  showResults({
    title: "All matched!", emoji: "🧩", stars: null, accuracy: null,
    coins: r.coinsEarned, xp: r.xpEarned,
    customStat: { label: "Flips used", value: r.flips },
    onRetry: () => launchMode("memory", r.subjectKey, r.chapterId),
    onModes: () => goToModes(r.subjectKey, r.chapterId),
    onTrail: () => goToChapters(r.subjectKey)
  });
}

/* ============================================================
   MATCH THE FOLLOWING (drag & drop)
============================================================ */
function renderMatchFollowing(subjectKey, chapterId) {
  const chapter = QUESTION_BANK[subjectKey].chapters.find(c => c.id === chapterId);
  const items = pick(chapter.terms, Math.min(6, chapter.terms.length));
  quizRuntime = { kind: "match", subjectKey, chapterId, remaining: items.length, coinsEarned: 0, xpEarned: 0, wrongTries: 0 };

  const area = document.getElementById("playArea");
  area.innerHTML = `
    <div style="text-align:center; color:var(--white); margin-bottom:14px;">
      <div class="display" style="font-size:20px;">Match the Following 🎯</div>
      <div style="font-size:13px; opacity:0.85;">Drag each term onto its correct meaning (or tap term, then tap meaning)</div>
    </div>
    <div class="match-columns">
      <div class="match-col" id="matchTerms"></div>
      <div class="match-col" id="matchTargets"></div>
    </div>
  `;
  const termsCol = document.getElementById("matchTerms");
  const targetsCol = document.getElementById("matchTargets");

  shuffle(items).forEach((item, i) => {
    const termEl = el(`<div class="match-item" draggable="true" data-term="${item.term}">${item.term}</div>`);
    termEl.addEventListener("dragstart", e => { e.dataTransfer.setData("text/plain", item.term); termEl.classList.add("dragging"); });
    termEl.addEventListener("dragend", () => termEl.classList.remove("dragging"));
    termEl.addEventListener("click", () => selectMatchTerm(termEl));
    termsCol.appendChild(termEl);
  });
  shuffle(items).forEach(item => {
    const targetEl = el(`<div class="match-target" data-answer="${item.term}">${item.def}</div>`);
    targetEl.addEventListener("dragover", e => e.preventDefault());
    targetEl.addEventListener("drop", e => {
      e.preventDefault();
      const term = e.dataTransfer.getData("text/plain");
      handleMatchDrop(term, targetEl);
    });
    targetEl.addEventListener("click", () => {
      if (quizRuntime.selectedTerm) handleMatchDrop(quizRuntime.selectedTerm.dataset.term, targetEl);
    });
    targetsCol.appendChild(targetEl);
  });
}

function selectMatchTerm(termEl) {
  if (termEl.classList.contains("placed")) return;
  document.querySelectorAll(".match-item").forEach(t => t.style.outline = "");
  quizRuntime.selectedTerm = termEl;
  termEl.style.outline = "3px solid var(--sky-trail)";
}

function handleMatchDrop(term, targetEl) {
  if (targetEl.classList.contains("filled")) return;
  const termEl = [...document.querySelectorAll(".match-item")].find(t => t.dataset.term === term && !t.classList.contains("placed"));
  if (!termEl) return;
  const r = quizRuntime;
  if (targetEl.dataset.answer === term) {
    targetEl.classList.add("filled");
    targetEl.innerHTML = `<span class="placed-chip">${term}</span>${targetEl.textContent}`;
    termEl.classList.add("placed");
    termEl.style.outline = "";
    r.remaining--; r.coinsEarned += 6; r.xpEarned += 8;
    if (r.remaining <= 0) finishMatchFollowing();
  } else {
    targetEl.classList.add("wrong-flash");
    r.wrongTries++;
    setTimeout(() => targetEl.classList.remove("wrong-flash"), 350);
  }
  r.selectedTerm = null;
}

function finishMatchFollowing() {
  const r = quizRuntime;
  awardCoins(r.coinsEarned); awardXp(r.xpEarned);
  showResults({
    title: "All matched correctly!", emoji: "🎯", stars: null, accuracy: null,
    coins: r.coinsEarned, xp: r.xpEarned,
    customStat: { label: "Wrong tries", value: r.wrongTries },
    onRetry: () => launchMode("match", r.subjectKey, r.chapterId),
    onModes: () => goToModes(r.subjectKey, r.chapterId),
    onTrail: () => goToChapters(r.subjectKey)
  });
}

/* ============================================================
   SPIN & WIN — bonus wheel + 3 bonus questions
============================================================ */
const WHEEL_SEGMENTS = [
  { mult: 1, label: "x1", color: "#4FC3E8" },
  { mult: 1.5, label: "x1.5", color: "#7ED957" },
  { mult: 1, label: "x1", color: "#FFC93C" },
  { mult: 2, label: "x2", color: "#FF6B5B" },
  { mult: 1.5, label: "x1.5", color: "#4FC3E8" },
  { mult: 3, label: "x3!", color: "#B98BE0" }
];

function renderSpinWheel(subjectKey, chapterId) {
  quizRuntime = { kind: "spin", subjectKey, chapterId, multiplier: 1, coinsEarned: 0, xpEarned: 0, correct: 0, asked: 0 };
  const seg = 360 / WHEEL_SEGMENTS.length;
  let paths = "";
  WHEEL_SEGMENTS.forEach((s, i) => {
    const a0 = (i * seg - 90) * Math.PI / 180, a1 = ((i + 1) * seg - 90) * Math.PI / 180;
    const cx = 150, cy = 150, R = 148;
    const x0 = cx + R * Math.cos(a0), y0 = cy + R * Math.sin(a0);
    const x1 = cx + R * Math.cos(a1), y1 = cy + R * Math.sin(a1);
    const midAngle = (a0 + a1) / 2;
    const tx = cx + 95 * Math.cos(midAngle), ty = cy + 95 * Math.sin(midAngle);
    paths += `<path d="M${cx},${cy} L${x0},${y0} A${R},${R} 0 0,1 ${x1},${y1} Z" fill="${s.color}" stroke="#fff" stroke-width="2"/>`;
    paths += `<text x="${tx}" y="${ty}" fill="#fff" font-family="Baloo 2" font-size="20" font-weight="700" text-anchor="middle" dominant-baseline="middle">${s.label}</text>`;
  });

  document.getElementById("playArea").innerHTML = `
    <div style="text-align:center; color:var(--white); margin-bottom:10px;">
      <div class="display" style="font-size:20px;">Spin & Win 🎡</div>
      <div style="font-size:13px; opacity:0.85;">Spin for a coin multiplier, then answer 3 bonus questions!</div>
    </div>
    <div class="wheel-wrap">
      <div class="wheel-outer">
        <div class="wheel-pointer"></div>
        <svg id="spinWheelSvg" viewBox="0 0 300 300">${paths}</svg>
      </div>
      <button class="btn" id="spinBtn">Spin the wheel!</button>
    </div>
  `;
  document.getElementById("spinBtn").addEventListener("click", spinTheWheel, { once: true });
}

function spinTheWheel() {
  const runtimeRef = quizRuntime; // guard: verify this session is still active when timers fire
  const idx = Math.floor(Math.random() * WHEEL_SEGMENTS.length);
  const seg = 360 / WHEEL_SEGMENTS.length;
  const targetRotation = 360 * 5 + (360 - (idx * seg + seg / 2));
  const svg = document.getElementById("spinWheelSvg");
  if (svg) svg.style.transform = `rotate(${targetRotation}deg)`;
  setTimeout(() => {
    if (quizRuntime !== runtimeRef) return; // player already left this screen
    quizRuntime.multiplier = WHEEL_SEGMENTS[idx].mult;
    showBadgeToast(`🎡 Landed on ${WHEEL_SEGMENTS[idx].label} multiplier!`);
    setTimeout(() => {
      if (quizRuntime !== runtimeRef) return;
      startSpinBonusQuestions();
    }, 1200);
  }, 4100);
}

function startSpinBonusQuestions() {
  const chapter = QUESTION_BANK[quizRuntime.subjectKey].chapters.find(c => c.id === quizRuntime.chapterId);
  quizRuntime.queue = pick(chapter.questions, Math.min(3, chapter.questions.length));
  quizRuntime.qIdx = 0;
  nextSpinQuestion();
}

function nextSpinQuestion() {
  const r = quizRuntime;
  if (r.qIdx >= r.queue.length) { finishSpinWheel(); return; }
  const q = r.queue[r.qIdx++];
  renderQuizQuestion(q, {
    progressLabel: `Bonus Q${r.qIdx} / ${r.queue.length} · Multiplier x${r.multiplier}`,
    onAnswer: (isCorrect) => {
      r.asked++;
      if (isCorrect) { r.correct++; r.coinsEarned += Math.round(8 * r.multiplier); r.xpEarned += 10; }
      document.getElementById("nextQuestionBtn").addEventListener("click", () => nextSpinQuestion(), { once: true });
    }
  });
}

function finishSpinWheel() {
  const r = quizRuntime;
  awardCoins(r.coinsEarned); awardXp(r.xpEarned);
  showResults({
    title: "Bonus round complete!", emoji: "🎡", stars: null, accuracy: null,
    coins: r.coinsEarned, xp: r.xpEarned, correct: r.correct, total: r.asked,
    onRetry: () => launchMode("spin", r.subjectKey, r.chapterId),
    onModes: () => goToModes(r.subjectKey, r.chapterId),
    onTrail: () => goToChapters(r.subjectKey)
  });
}

/* ============================================================
   BOSS BATTLE — pooled hardest questions across the subject
============================================================ */
function startBossBattle(subjectKey) {
  const subj = QUESTION_BANK[subjectKey];
  let pool = [];
  subj.chapters.forEach(ch => {
    ch.questions.forEach(q => { if (q.difficulty === "hard" || q.difficulty === "medium") pool.push(q); });
  });
  pool = shuffle(pool).slice(0, Math.min(10, pool.length));

  quizRuntime = {
    kind: "boss", subjectKey,
    queue: pool, qIdx: 0, hearts: 3, correct: 0, asked: 0,
    coinsEarned: 0, xpEarned: 0
  };
  showScreen("screen-play");
  nextBossQuestion();
}

function nextBossQuestion() {
  const r = quizRuntime;
  if (r.qIdx >= r.queue.length || r.hearts <= 0) { finishBossBattle(); return; }
  const q = r.queue[r.qIdx];
  renderQuizQuestion(q, {
    heartsLeft: r.hearts,
    progressLabel: `Boss Q${r.qIdx + 1} / ${r.queue.length}`,
    onAnswer: (isCorrect) => {
      r.asked++;
      if (isCorrect) { r.correct++; r.coinsEarned += 15; r.xpEarned += 25; }
      else r.hearts--;
      r.qIdx++;
      updateQuizHud(r.hearts, `Boss Q${Math.min(r.qIdx + 1, r.queue.length)} / ${r.queue.length}`);
      document.getElementById("nextQuestionBtn").addEventListener("click", () => nextBossQuestion(), { once: true });
    }
  });
}

function finishBossBattle() {
  const r = quizRuntime;
  const won = r.hearts > 0 && r.asked > 0;
  awardCoins(r.coinsEarned); awardXp(r.xpEarned);
  if (won) awardBadge("boss_slayer");
  if (won) fireConfetti(40);
  showResults({
    title: won ? "Boss defeated!" : "The boss got away this time...",
    emoji: won ? "👑" : "🌱", stars: null, accuracy: r.asked ? Math.round((r.correct / r.asked) * 100) : 0,
    coins: r.coinsEarned, xp: r.xpEarned, correct: r.correct, total: r.asked,
    onRetry: () => startBossBattle(r.subjectKey),
    onModes: null,
    onTrail: () => goToChapters(r.subjectKey)
  });
}

/* ============================================================
   RESULTS SCREEN
============================================================ */
function showResults({ title, emoji, stars, accuracy, coins, xp, correct, total, customStat, onRetry, onModes, onTrail }) {
  const card = document.getElementById("resultsCard");
  const starsRow = stars !== null && stars !== undefined
    ? `<div class="stars-row">${"⭐".repeat(stars)}${"☆".repeat(Math.max(0, 3 - stars))}</div>` : "";
  const statBlocks = [];
  if (correct !== undefined && total !== undefined) statBlocks.push({ label: "Correct", value: `${correct}/${total}` });
  if (accuracy !== null && accuracy !== undefined) statBlocks.push({ label: "Accuracy", value: accuracy + "%" });
  if (customStat) statBlocks.push(customStat);
  statBlocks.push({ label: "Coins", value: "🪙" + coins });
  statBlocks.push({ label: "XP", value: "⭐" + xp });

  card.innerHTML = `
    <div class="results-emoji">${emoji}</div>
    <h2 class="results-title">${title}</h2>
    ${starsRow}
    <div class="results-stats">
      ${statBlocks.map(s => `<div class="results-stat"><div class="val">${s.value}</div><div class="lbl">${s.label}</div></div>`).join("")}
    </div>
    <div class="results-actions">
      <button class="btn" id="btnRetry">Play Again</button>
      ${onModes ? `<button class="btn secondary" id="btnModes">More Modes</button>` : ""}
      <button class="btn ghost" id="btnTrail" style="color:var(--ink); border-color:var(--jungle-canopy);">Back to Trail</button>
    </div>
  `;
  document.getElementById("btnRetry").addEventListener("click", () => { showScreen("screen-play", { pushHistory: false }); onRetry(); });
  if (onModes) document.getElementById("btnModes").addEventListener("click", () => { nav.screenStack = ["screen-home", "screen-subjects", "screen-chapters"]; onModes(); });
  document.getElementById("btnTrail").addEventListener("click", () => { nav.screenStack = ["screen-home", "screen-subjects"]; onTrail(); });

  if ((stars !== null && stars >= 2) || (accuracy !== null && accuracy >= 70)) fireConfetti(30);
  showScreen("screen-results", { pushHistory: false });
}

/* ============================================================
   INIT
============================================================ */
function initApp() {
  loadState();
  renderHome();
  showScreen("screen-home", { pushHistory: false, topbar: false });
}

document.addEventListener("DOMContentLoaded", initApp);
