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
  adventure: { icon: "🧭", name: "Adventure Quiz", desc: "Work through every idea in the chapter. Get one wrong and it comes back around for another try." },
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
  return !!(prevProgress && prevProgress.adventureDone);
}

function isBossUnlocked(subjectKey) {
  const subj = QUESTION_BANK[subjectKey];
  return subj.chapters.every(ch => {
    const p = state.progress[subjectKey] && state.progress[subjectKey][ch.id];
    return p && p.adventureDone;
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

/* Adventure Quiz = a MASTERY LOOP, not a fixed-length quiz.
   Every question in the chapter goes into the queue once. Answer correctly
   and it's mastered (removed for good). Answer wrong and it's reinserted a
   few questions later so it comes back around for another try - the run
   only ends once every question has been answered correctly at least once. */
function renderAdventureQuiz(subjectKey, chapterId) {
  const subj = QUESTION_BANK[subjectKey];
  const chapter = subj.chapters.find(c => c.id === chapterId);
  const pools = buildAdaptiveQueue(chapter);
  const orderedQuestions = [...pools.easy, ...pools.medium, ...pools.hard];

  quizRuntime = {
    kind: "adventure", subjectKey, chapterId,
    queue: orderedQuestions.map(q => ({ question: q, attempts: 0 })),
    totalUnique: orderedQuestions.length,
    masteredCount: 0,
    firstTryCorrect: 0,
    roundsAnswered: 0,
    maxRounds: orderedQuestions.length * 5 + 10, // generous safety net, not a fail state
    coinsEarned: 0, xpEarned: 0
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
  if (r.queue.length === 0 || r.roundsAnswered >= r.maxRounds) { finishAdventureQuiz(); return; }

  const item = r.queue[0];
  r.currentItem = item;
  renderQuizQuestion(item.question, {
    mastery: { mastered: r.masteredCount, total: r.totalUnique },
    progressLabel: item.attempts > 0 ? "Let's try this one again" : "",
    onAnswer: (isCorrect) => handleAdventureAnswer(isCorrect)
  });
}

function handleAdventureAnswer(isCorrect) {
  const r = quizRuntime;
  const item = r.currentItem;
  const reward = tierCoinsXp(item.question.difficulty);
  r.roundsAnswered++;

  if (isCorrect) {
    if (item.attempts === 0) r.firstTryCorrect++;
    r.coinsEarned += reward.coins; r.xpEarned += reward.xp;
    r.masteredCount++;
    r.queue.shift(); // mastered - out of rotation for good
  } else {
    item.attempts++;
    r.queue.shift();
    const reinsertAt = Math.min(3, r.queue.length); // resurfaces a few questions later, not immediately
    r.queue.splice(reinsertAt, 0, item);
  }
  updateQuizHud(undefined, item.attempts > 0 ? "Nearly there" : "", { mastered: r.masteredCount, total: r.totalUnique });
  document.getElementById("nextQuestionBtn").addEventListener("click", () => nextAdventureQuestion(), { once: true });
}

function finishAdventureQuiz() {
  const r = quizRuntime;
  const accuracy = r.totalUnique ? Math.round((r.firstTryCorrect / r.totalUnique) * 100) : 0;
  const stars = accuracy >= 90 ? 3 : accuracy >= 70 ? 2 : accuracy >= 40 ? 1 : 0;
  const fullyMastered = r.queue.length === 0; // false only if the safety-net round cap was hit

  awardCoins(r.coinsEarned);
  awardXp(r.xpEarned);

  const progress = getChapterProgress(r.subjectKey, r.chapterId);
  const isFirstClear = !progress.adventureDone && fullyMastered;
  progress.adventureDone = progress.adventureDone || fullyMastered;
  progress.stars = Math.max(progress.stars, stars);
  progress.bestAccuracy = Math.max(progress.bestAccuracy, accuracy);
  saveState();

  if (isFirstClear) awardBadge("first_steps");
  if (stars === 3) awardBadge("perfectionist");
  const subj = QUESTION_BANK[r.subjectKey];
  if (subj.chapters.every(ch => (state.progress[r.subjectKey][ch.id] || {}).stars === 3)) awardBadge("subject_master");

  const retriesNeeded = r.totalUnique - r.firstTryCorrect;
  showResults({
    title: fullyMastered ? "Every idea mastered!" : "Great effort — let's pick this up again soon",
    emoji: stars === 3 ? "🏅" : fullyMastered ? "🎉" : "🌱",
    stars, accuracy,
    coins: r.coinsEarned, xp: r.xpEarned,
    customStat: fullyMastered
      ? { label: retriesNeeded > 0 ? "Needed another look" : "First-try correct", value: retriesNeeded > 0 ? `${retriesNeeded}/${r.totalUnique}` : `${r.firstTryCorrect}/${r.totalUnique}` }
      : { label: "Mastered so far", value: `${r.masteredCount}/${r.totalUnique}` },
    onRetry: () => renderAdventureQuiz(r.subjectKey, r.chapterId),
    onModes: () => goToModes(r.subjectKey, r.chapterId),
    onTrail: () => goToChapters(r.subjectKey)
  });
}

/* ---- generic question renderer used by adventure/time/boss ---- */
/* ---- Explanation panel: richer for wrong answers, light for right ones ---- */
function buildExplainHtml(question, isCorrect) {
  const correctText = question.options[question.answer];
  const hasSteps = Array.isArray(question.explainSteps) && question.explainSteps.length > 0;
  const diagramSvg = question.explainDiagram ? getDiagramSvg(question.explainDiagram) : "";

  if (isCorrect) {
    return `
      <div class="explain-header correct-header">🎉 Yes — exactly right!</div>
      <div class="explain-text">${question.explain}</div>
    `;
  }

  const bodyHtml = hasSteps
    ? `<ol class="explain-steps">${question.explainSteps.map(s => `<li>${s}</li>`).join("")}</ol>`
    : `<div class="explain-text">${question.explain}</div>`;

  return `
    <div class="explain-header wrong-header">💡 Not this time — but here's the fun part!</div>
    <div class="explain-correct-answer">The correct answer is <strong>${correctText}</strong>. Let's see why, step by step:</div>
    ${bodyHtml}
    ${diagramSvg ? `<div class="explain-diagram">${diagramSvg}</div>` : ""}
    <div class="explain-encourage">✨ Now you know it for good — spot a question like this again and you'll nail it!</div>
  `;
}

/* ---- Tiny inline-SVG diagram library (offline-safe, no external images) ---- */
function svgWrap(inner, viewBox = "0 0 280 150") {
  return `<svg viewBox="${viewBox}" class="diagram-svg" role="img" aria-hidden="true">${inner}</svg>`;
}
const DIAGRAM_BUILDERS = {
  magnetPoles: () => svgWrap(`
    <rect x="60" y="55" width="70" height="40" fill="#E24B3C"/>
    <rect x="130" y="55" width="70" height="40" fill="#3C7FE2"/>
    <rect x="60" y="55" width="140" height="40" fill="none" stroke="#1B3B36" stroke-width="3" rx="6"/>
    <text x="95" y="80" text-anchor="middle" fill="#fff" font-family="Baloo 2" font-size="22" font-weight="700">N</text>
    <text x="165" y="80" text-anchor="middle" fill="#fff" font-family="Baloo 2" font-size="22" font-weight="700">S</text>
    <circle cx="230" cy="75" r="10" fill="#8A8A8A"/>
    <text x="230" y="110" text-anchor="middle" fill="#1B3B36" font-family="Nunito" font-size="12">iron nail</text>
    <path d="M200 75 L216 75" stroke="#1B3B36" stroke-width="2" marker-end="url(#arrow)"/>
    <defs><marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#1B3B36"/></marker></defs>
  `),
  waterCycle: () => svgWrap(`
    <circle cx="45" cy="35" r="20" fill="#FFC93C"/>
    <ellipse cx="150" cy="30" rx="38" ry="18" fill="#fff" stroke="#4FC3E8" stroke-width="2"/>
    <path d="M45 55 L100 90" stroke="#1D8A6C" stroke-width="2.5" marker-end="url(#a2)" stroke-dasharray="3 3"/>
    <text x="55" y="75" font-family="Nunito" font-size="11" fill="#1B3B36">evaporation</text>
    <path d="M140 48 L110 100" stroke="#4FC3E8" stroke-width="2.5" marker-end="url(#a2)"/>
    <path d="M160 48 L170 100" stroke="#4FC3E8" stroke-width="2.5" marker-end="url(#a2)"/>
    <text x="175" y="75" font-family="Nunito" font-size="11" fill="#1B3B36">rain</text>
    <path d="M20 115 Q40 105 60 115 T100 115 T140 115 T180 115 T220 115" fill="none" stroke="#4FC3E8" stroke-width="4"/>
    <defs><marker id="a2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#1D8A6C"/></marker></defs>
  `),
  transparency: () => svgWrap(`
    <rect x="15" y="30" width="60" height="70" fill="#DFF3FA" stroke="#4FC3E8" stroke-width="3" rx="6"/>
    <circle cx="45" cy="65" r="9" fill="#FF6B5B"/>
    <text x="45" y="115" text-anchor="middle" font-family="Nunito" font-size="11" fill="#1B3B36">Transparent</text>
    <rect x="110" y="30" width="60" height="70" fill="#EAF6EE" stroke="#7ED957" stroke-width="3" rx="6"/>
    <circle cx="140" cy="65" r="9" fill="#FF6B5B" opacity="0.35"/>
    <text x="140" y="115" text-anchor="middle" font-family="Nunito" font-size="11" fill="#1B3B36">Translucent</text>
    <rect x="205" y="30" width="60" height="70" fill="#5A4A42" stroke="#1B3B36" stroke-width="3" rx="6"/>
    <text x="235" y="115" text-anchor="middle" font-family="Nunito" font-size="11" fill="#1B3B36">Opaque</text>
  `),
  habitatAdapt: () => svgWrap(`
    <circle cx="55" cy="35" r="18" fill="#FFC93C"/>
    <path d="M55 70 L45 110 M55 70 L65 110 M55 85 L35 95 M55 85 L75 95" stroke="#7ED957" stroke-width="4" stroke-linecap="round"/>
    <text x="55" y="130" text-anchor="middle" font-family="Nunito" font-size="11" fill="#1B3B36">hot & dry</text>
    <path d="M215 20 L220 35 L235 35 L223 45 L228 60 L215 50 L202 60 L207 45 L195 35 L210 35 Z" fill="#4FC3E8"/>
    <text x="215" y="90" text-anchor="middle" font-family="Nunito" font-size="11" fill="#1B3B36">freezing cold</text>
    <text x="140" y="75" text-anchor="middle" font-family="Baloo 2" font-size="16" fill="#1B3B36">vs</text>
  `),
  filtration: () => svgWrap(`
    <path d="M90 20 L190 20 L145 70 Z" fill="none" stroke="#1D8A6C" stroke-width="3"/>
    <path d="M100 30 L190 30" stroke="#8A8A8A" stroke-width="3" stroke-dasharray="4 3"/>
    <circle cx="115" cy="15" r="4" fill="#5A4A42"/><circle cx="140" cy="10" r="4" fill="#5A4A42"/><circle cx="165" cy="15" r="4" fill="#5A4A42"/>
    <rect x="135" y="70" width="20" height="35" fill="none" stroke="#1D8A6C" stroke-width="3"/>
    <path d="M145 105 Q150 118 145 130" stroke="#4FC3E8" stroke-width="3" fill="none"/>
    <text x="60" y="20" font-family="Nunito" font-size="11" fill="#1B3B36">mixture</text>
    <text x="145" y="145" text-anchor="middle" font-family="Nunito" font-size="11" fill="#1B3B36">clear liquid through</text>
  `),
  fibreToFabric: () => svgWrap(`
    <rect x="10" y="45" width="65" height="40" rx="8" fill="#EAF6EE" stroke="#7ED957" stroke-width="2.5"/>
    <text x="42" y="70" text-anchor="middle" font-family="Baloo 2" font-size="13" fill="#1B3B36">Fibre</text>
    <path d="M80 65 L100 65" stroke="#1B3B36" stroke-width="2.5" marker-end="url(#a3)"/>
    <rect x="105" y="45" width="65" height="40" rx="8" fill="#FFF6E5" stroke="#FFC93C" stroke-width="2.5"/>
    <text x="137" y="70" text-anchor="middle" font-family="Baloo 2" font-size="13" fill="#1B3B36">Yarn</text>
    <path d="M175 65 L195 65" stroke="#1B3B36" stroke-width="2.5" marker-end="url(#a3)"/>
    <rect x="200" y="45" width="65" height="40" rx="8" fill="#FDEAE7" stroke="#FF6B5B" stroke-width="2.5"/>
    <text x="232" y="70" text-anchor="middle" font-family="Baloo 2" font-size="13" fill="#1B3B36">Fabric</text>
    <text x="90" y="30" text-anchor="middle" font-family="Nunito" font-size="10" fill="#1B3B36">ginning/spinning</text>
    <text x="185" y="30" text-anchor="middle" font-family="Nunito" font-size="10" fill="#1B3B36">weaving</text>
    <defs><marker id="a3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#1B3B36"/></marker></defs>
  `),
  plantParts: () => svgWrap(`
    <ellipse cx="140" cy="35" rx="34" ry="14" fill="#7ED957"/>
    <text x="140" y="16" text-anchor="middle" font-family="Nunito" font-size="11" fill="#1B3B36">leaf</text>
    <circle cx="140" cy="45" r="8" fill="#FF6B5B"/>
    <text x="170" y="45" font-family="Nunito" font-size="11" fill="#1B3B36">flower</text>
    <rect x="137" y="50" width="6" height="45" fill="#1D8A6C"/>
    <text x="110" y="75" text-anchor="middle" font-family="Nunito" font-size="11" fill="#1B3B36">stem</text>
    <path d="M140 95 L120 125 M140 95 L160 125 M140 95 L140 130" stroke="#B98BE0" stroke-width="3" fill="none"/>
    <text x="140" y="145" text-anchor="middle" font-family="Nunito" font-size="11" fill="#1B3B36">root</text>
  `),
  reversible: () => svgWrap(`
    <text x="70" y="25" text-anchor="middle" font-family="Baloo 2" font-size="13" fill="#1D8A6C">Reversible</text>
    <rect x="30" y="40" width="35" height="30" fill="#DFF3FA" stroke="#4FC3E8" stroke-width="2"/>
    <text x="47" y="60" text-anchor="middle" font-family="Nunito" font-size="10">Ice</text>
    <path d="M70 55 L95 55" stroke="#1D8A6C" stroke-width="2.5" marker-end="url(#a4)" marker-start="url(#a4s)"/>
    <rect x="100" y="40" width="35" height="30" fill="#C9EAF7" stroke="#4FC3E8" stroke-width="2"/>
    <text x="117" y="60" text-anchor="middle" font-family="Nunito" font-size="10">Water</text>
    <text x="205" y="25" text-anchor="middle" font-family="Baloo 2" font-size="13" fill="#FF6B5B">Irreversible</text>
    <rect x="170" y="40" width="35" height="30" fill="#FFF6E5" stroke="#E6A800" stroke-width="2"/>
    <text x="187" y="60" text-anchor="middle" font-family="Nunito" font-size="10">Paper</text>
    <path d="M205 55 L235 55" stroke="#FF6B5B" stroke-width="2.5" marker-end="url(#a4)"/>
    <rect x="240" y="40" width="30" height="30" fill="#5A4A42" stroke="#1B3B36" stroke-width="2"/>
    <text x="255" y="60" text-anchor="middle" font-family="Nunito" font-size="10" fill="#fff">Ash</text>
    <defs>
      <marker id="a4" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#1B3B36"/></marker>
      <marker id="a4s" markerWidth="8" markerHeight="8" refX="2" refY="3" orient="auto"><path d="M6,0 L0,3 L6,6 Z" fill="#1B3B36"/></marker>
    </defs>
  `),
  circuit: () => svgWrap(`
    <rect x="40" y="30" width="180" height="80" fill="none" stroke="#1B3B36" stroke-width="4" rx="4"/>
    <rect x="115" y="22" width="30" height="16" fill="#FFC93C" stroke="#1B3B36" stroke-width="2"/>
    <text x="130" y="15" text-anchor="middle" font-family="Nunito" font-size="10" fill="#1B3B36">cell</text>
    <circle cx="220" cy="70" r="16" fill="#FFF6E5" stroke="#1B3B36" stroke-width="3"/>
    <text x="220" y="105" text-anchor="middle" font-family="Nunito" font-size="10" fill="#1B3B36">bulb</text>
    <rect x="32" y="62" width="16" height="16" fill="#fff" stroke="#1B3B36" stroke-width="3"/>
    <text x="40" y="105" text-anchor="middle" font-family="Nunito" font-size="10" fill="#1B3B36">switch</text>
  `),
  rulerCurve: () => svgWrap(`
    <path d="M20 100 Q60 20 100 100 T180 100" fill="none" stroke="#1D8A6C" stroke-width="3" stroke-dasharray="2 4"/>
    <text x="100" y="130" text-anchor="middle" font-family="Nunito" font-size="11" fill="#1B3B36">1. lay a thread along the curve</text>
    <rect x="200" y="60" width="70" height="10" fill="#FFC93C" stroke="#1B3B36" stroke-width="1.5"/>
    <text x="235" y="90" text-anchor="middle" font-family="Nunito" font-size="11" fill="#1B3B36">2. straighten & measure with ruler</text>
  `),
  jointTypes: () => svgWrap(`
    <path d="M40 40 A30 30 0 0 1 40 100" fill="none" stroke="#1B3B36" stroke-width="6"/>
    <circle cx="40" cy="70" r="14" fill="#4FC3E8" stroke="#1B3B36" stroke-width="2"/>
    <text x="40" y="130" text-anchor="middle" font-family="Nunito" font-size="10" fill="#1B3B36">ball & socket</text>
    <rect x="180" y="60" width="60" height="10" fill="#1B3B36"/>
    <rect x="180" y="70" width="60" height="10" fill="#7ED957" transform="rotate(25 180 70)"/>
    <text x="210" y="130" text-anchor="middle" font-family="Nunito" font-size="10" fill="#1B3B36">hinge (one direction)</text>
  `),
  shadowFormation: () => svgWrap(`
    <circle cx="35" cy="40" r="14" fill="#FFC93C"/>
    <rect x="110" y="25" width="14" height="60" fill="#5A4A42"/>
    <path d="M49 40 L110 30 M49 45 L110 85" stroke="#FFC93C" stroke-width="1.5" stroke-dasharray="2 2"/>
    <path d="M124 30 L200 95 L124 85 Z" fill="#B4B4B4" opacity="0.7"/>
    <line x1="10" y1="100" x2="270" y2="100" stroke="#1B3B36" stroke-width="3"/>
    <text x="160" y="130" text-anchor="middle" font-family="Nunito" font-size="11" fill="#1B3B36">shadow</text>
  `),
  mirrorInversion: () => svgWrap(`
    <text x="70" y="80" text-anchor="middle" font-family="Baloo 2" font-size="42" fill="#1B3B36">R</text>
    <line x1="140" y1="20" x2="140" y2="130" stroke="#4FC3E8" stroke-width="4"/>
    <text x="140" y="145" text-anchor="middle" font-family="Nunito" font-size="10" fill="#1B3B36">mirror</text>
    <text x="210" y="80" text-anchor="middle" font-family="Baloo 2" font-size="42" fill="#1B3B36" transform="scale(-1,1) translate(-420,0)">R</text>
  `),
  livingNonliving: () => svgWrap(`
    <text x="65" y="25" text-anchor="middle" font-family="Baloo 2" font-size="13" fill="#1D8A6C">Living ✓</text>
    <ellipse cx="45" cy="60" rx="20" ry="12" fill="#7ED957"/>
    <circle cx="90" cy="65" r="14" fill="#FFC93C"/>
    <text x="205" y="25" text-anchor="middle" font-family="Baloo 2" font-size="13" fill="#FF6B5B">Non-living ✗</text>
    <rect x="185" y="55" width="30" height="22" fill="#8A8A8A" rx="4"/>
    <circle cx="230" cy="70" r="14" fill="#5A4A42"/>
  `),
  placeValue: () => svgWrap(`
    <text x="140" y="20" text-anchor="middle" font-family="Nunito" font-size="11" fill="#1B3B36">4 7, 2 5 8</text>
    <rect x="30" y="35" width="45" height="45" fill="#FFF6E5" stroke="#E6A800" stroke-width="2" rx="6"/>
    <text x="52" y="63" text-anchor="middle" font-family="Baloo 2" font-size="24" fill="#1B3B36">4</text>
    <text x="52" y="95" text-anchor="middle" font-family="Nunito" font-size="10" fill="#1B3B36">ten-thou.</text>
    <rect x="85" y="35" width="45" height="45" fill="#FFC93C" stroke="#E6A800" stroke-width="3" rx="6"/>
    <text x="107" y="63" text-anchor="middle" font-family="Baloo 2" font-size="24" fill="#1B3B36">7</text>
    <text x="107" y="95" text-anchor="middle" font-family="Nunito" font-size="10" fill="#1B3B36">thousands</text>
    <rect x="140" y="35" width="45" height="45" fill="#FFF6E5" stroke="#E6A800" stroke-width="2" rx="6"/>
    <text x="162" y="63" text-anchor="middle" font-family="Baloo 2" font-size="24" fill="#1B3B36">2</text>
    <text x="162" y="95" text-anchor="middle" font-family="Nunito" font-size="10" fill="#1B3B36">hundreds</text>
    <rect x="195" y="35" width="45" height="45" fill="#FFF6E5" stroke="#E6A800" stroke-width="2" rx="6"/>
    <text x="217" y="63" text-anchor="middle" font-family="Baloo 2" font-size="24" fill="#1B3B36">5</text>
    <text x="217" y="95" text-anchor="middle" font-family="Nunito" font-size="10" fill="#1B3B36">tens</text>
  `),
  numberLine: () => svgWrap(`
    <line x1="15" y1="70" x2="265" y2="70" stroke="#1B3B36" stroke-width="3" marker-end="url(#nl1)"/>
    ${[0,1,2,3,4,5,6,7,8].map(i => `<line x1="${25+i*28}" y1="63" x2="${25+i*28}" y2="77" stroke="#1B3B36" stroke-width="2"/><text x="${25+i*28}" y="95" text-anchor="middle" font-family="Nunito" font-size="11" fill="#1B3B36">${i-4}</text>`).join("")}
    <defs><marker id="nl1" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#1B3B36"/></marker></defs>
  `),
  angleTypes: () => svgWrap(`
    <path d="M40 100 L110 100" stroke="#1B3B36" stroke-width="3"/>
    <path d="M40 100 L40 40" stroke="#1B3B36" stroke-width="3"/>
    <path d="M40 90 L50 90 L50 100" fill="none" stroke="#4FC3E8" stroke-width="2"/>
    <text x="45" y="120" text-anchor="middle" font-family="Nunito" font-size="10" fill="#1B3B36">right 90°</text>
    <path d="M150 100 L215 100" stroke="#1B3B36" stroke-width="3"/>
    <path d="M150 100 L185 45" stroke="#1B3B36" stroke-width="3"/>
    <path d="M170 100 A20 20 0 0 0 163 82" fill="none" stroke="#7ED957" stroke-width="2"/>
    <text x="180" y="120" text-anchor="middle" font-family="Nunito" font-size="10" fill="#1B3B36">acute &lt;90°</text>
  `),
  factorTree: () => svgWrap(`
    <text x="140" y="20" text-anchor="middle" font-family="Baloo 2" font-size="14" fill="#1B3B36">12</text>
    <path d="M140 25 L100 55 M140 25 L180 55" stroke="#1B3B36" stroke-width="2"/>
    <text x="100" y="65" text-anchor="middle" font-family="Baloo 2" font-size="13" fill="#1D8A6C">2</text>
    <text x="180" y="65" text-anchor="middle" font-family="Baloo 2" font-size="13" fill="#1D8A6C">6</text>
    <path d="M180 70 L160 100 M180 70 L200 100" stroke="#1B3B36" stroke-width="2"/>
    <text x="160" y="110" text-anchor="middle" font-family="Baloo 2" font-size="13" fill="#FF6B5B">2</text>
    <text x="200" y="110" text-anchor="middle" font-family="Baloo 2" font-size="13" fill="#FF6B5B">3</text>
    <text x="140" y="140" text-anchor="middle" font-family="Nunito" font-size="10" fill="#1B3B36">break numbers into prime factors</text>
  `),
  fractionBar: () => svgWrap(`
    <rect x="20" y="30" width="240" height="35" fill="none" stroke="#1B3B36" stroke-width="2"/>
    <line x1="80" y1="30" x2="80" y2="65" stroke="#1B3B36" stroke-width="2"/>
    <line x1="140" y1="30" x2="140" y2="65" stroke="#1B3B36" stroke-width="2"/>
    <line x1="200" y1="30" x2="200" y2="65" stroke="#1B3B36" stroke-width="2"/>
    <rect x="20" y="30" width="120" height="35" fill="#FFC93C" opacity="0.55"/>
    <text x="140" y="90" text-anchor="middle" font-family="Nunito" font-size="12" fill="#1B3B36">2 of 4 equal parts shaded = 2/4</text>
  `),
  perimeterArea: () => svgWrap(`
    <rect x="70" y="30" width="120" height="70" fill="#EAF6EE" stroke="#1D8A6C" stroke-width="4"/>
    <text x="130" y="20" text-anchor="middle" font-family="Nunito" font-size="11" fill="#1B3B36">perimeter = walk all the way around the edge</text>
    <text x="130" y="70" text-anchor="middle" font-family="Nunito" font-size="12" fill="#1D8A6C">area = fill the inside</text>
  `),
  ratioBar: () => svgWrap(`
    <rect x="20" y="40" width="20" height="30" fill="#4FC3E8"/><rect x="42" y="40" width="20" height="30" fill="#4FC3E8"/>
    <text x="41" y="90" text-anchor="middle" font-family="Nunito" font-size="11" fill="#1B3B36">part A</text>
    <text x="100" y="60" text-anchor="middle" font-family="Baloo 2" font-size="16" fill="#1B3B36">:</text>
    <rect x="130" y="40" width="20" height="30" fill="#FF6B5B"/><rect x="152" y="40" width="20" height="30" fill="#FF6B5B"/><rect x="174" y="40" width="20" height="30" fill="#FF6B5B"/><rect x="196" y="40" width="20" height="30" fill="#FF6B5B"/>
    <text x="163" y="90" text-anchor="middle" font-family="Nunito" font-size="11" fill="#1B3B36">part B</text>
  `),
  symmetryFold: () => svgWrap(`
    <rect x="60" y="30" width="80" height="80" fill="#EAF6EE" stroke="#1D8A6C" stroke-width="3"/>
    <line x1="100" y1="25" x2="100" y2="115" stroke="#FF6B5B" stroke-width="2" stroke-dasharray="4 3"/>
    <text x="100" y="130" text-anchor="middle" font-family="Nunito" font-size="11" fill="#1B3B36">fold line — both sides match exactly</text>
  `),
  shapes3D2D: () => svgWrap(`
    <path d="M40 40 L100 40 L100 100 L40 100 Z" fill="none" stroke="#1D8A6C" stroke-width="3"/>
    <text x="70" y="120" text-anchor="middle" font-family="Nunito" font-size="11" fill="#1B3B36">2D: flat square</text>
    <path d="M170 45 L215 45 L215 90 L170 90 Z" fill="#EAF6EE" stroke="#1D8A6C" stroke-width="2"/>
    <path d="M170 45 L190 30 L235 30 L215 45" fill="#DFF3FA" stroke="#1D8A6C" stroke-width="2"/>
    <path d="M215 45 L235 30 L235 75 L215 90" fill="#C9EAF7" stroke="#1D8A6C" stroke-width="2"/>
    <text x="200" y="120" text-anchor="middle" font-family="Nunito" font-size="11" fill="#1B3B36">3D: solid cube</text>
  `),
  mapCompass: () => svgWrap(`
    <rect x="30" y="20" width="220" height="110" fill="#EAF6EE" stroke="#1D8A6C" stroke-width="3" rx="8"/>
    <path d="M140 30 L140 120 M60 75 L220 75" stroke="#7ED957" stroke-width="1.5" stroke-dasharray="3 3"/>
    <text x="140" y="18" text-anchor="middle" font-family="Baloo 2" font-size="14" fill="#1D8A6C">N</text>
    <text x="140" y="140" text-anchor="middle" font-family="Nunito" font-size="11" fill="#1B3B36">S</text>
    <text x="255" y="79" text-anchor="middle" font-family="Nunito" font-size="11" fill="#1B3B36">E</text>
    <text x="25" y="79" text-anchor="middle" font-family="Nunito" font-size="11" fill="#1B3B36">W</text>
    <path d="M140 30 L146 45 L134 45 Z" fill="#FF6B5B"/>
  `),
  globeLatLong: () => svgWrap(`
    <circle cx="140" cy="75" r="55" fill="#DFF3FA" stroke="#1D8A6C" stroke-width="3"/>
    <ellipse cx="140" cy="75" rx="55" ry="18" fill="none" stroke="#4FC3E8" stroke-width="2"/>
    <ellipse cx="140" cy="75" rx="20" ry="55" fill="none" stroke="#FFC93C" stroke-width="2"/>
    <line x1="140" y1="20" x2="140" y2="130" stroke="#1B3B36" stroke-width="2" stroke-dasharray="2 3"/>
    <text x="205" y="79" font-family="Nunito" font-size="10" fill="#1B3B36">Equator</text>
    <text x="140" y="15" text-anchor="middle" font-family="Nunito" font-size="10" fill="#1B3B36">axis</text>
  `),
  landformTypes: () => svgWrap(`
    <path d="M20 110 L55 55 L90 110 Z" fill="#8A8A8A"/>
    <text x="55" y="125" text-anchor="middle" font-family="Nunito" font-size="10" fill="#1B3B36">mountain</text>
    <rect x="105" y="85" width="60" height="25" fill="#7ED957"/>
    <text x="135" y="125" text-anchor="middle" font-family="Nunito" font-size="10" fill="#1B3B36">plain</text>
    <path d="M180 110 L180 75 L235 75 L235 110 Z" fill="#E6A800"/>
    <text x="207" y="125" text-anchor="middle" font-family="Nunito" font-size="10" fill="#1B3B36">plateau</text>
  `),
  timelineEmpire: () => svgWrap(`
    <line x1="20" y1="75" x2="260" y2="75" stroke="#1B3B36" stroke-width="3" marker-end="url(#tl1)"/>
    <circle cx="60" cy="75" r="6" fill="#FFC93C"/><text x="60" y="100" text-anchor="middle" font-family="Nunito" font-size="10" fill="#1B3B36">earlier</text>
    <circle cx="150" cy="75" r="6" fill="#7ED957"/><text x="150" y="100" text-anchor="middle" font-family="Nunito" font-size="10" fill="#1B3B36">then</text>
    <circle cx="230" cy="75" r="6" fill="#FF6B5B"/><text x="230" y="100" text-anchor="middle" font-family="Nunito" font-size="10" fill="#1B3B36">later</text>
    <defs><marker id="tl1" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#1B3B36"/></marker></defs>
  `),
  govStructure: () => svgWrap(`
    <rect x="100" y="15" width="80" height="28" fill="#FFC93C" stroke="#1B3B36" stroke-width="2" rx="5"/>
    <text x="140" y="34" text-anchor="middle" font-family="Nunito" font-size="10" fill="#1B3B36">District</text>
    <path d="M140 43 L70 65 M140 43 L210 65" stroke="#1B3B36" stroke-width="2"/>
    <rect x="30" y="65" width="80" height="28" fill="#7ED957" stroke="#1B3B36" stroke-width="2" rx="5"/>
    <text x="70" y="84" text-anchor="middle" font-family="Nunito" font-size="10" fill="#1B3B36">Block/Mandal</text>
    <rect x="170" y="65" width="80" height="28" fill="#7ED957" stroke="#1B3B36" stroke-width="2" rx="5"/>
    <text x="210" y="84" text-anchor="middle" font-family="Nunito" font-size="10" fill="#1B3B36">Block/Mandal</text>
    <path d="M70 93 L70 110 M210 93 L210 110" stroke="#1B3B36" stroke-width="2"/>
    <rect x="30" y="110" width="80" height="28" fill="#4FC3E8" stroke="#1B3B36" stroke-width="2" rx="5"/>
    <text x="70" y="129" text-anchor="middle" font-family="Nunito" font-size="10" fill="#1B3B36">Village</text>
    <rect x="170" y="110" width="80" height="28" fill="#4FC3E8" stroke="#1B3B36" stroke-width="2" rx="5"/>
    <text x="210" y="129" text-anchor="middle" font-family="Nunito" font-size="10" fill="#1B3B36">Village</text>
  `),
  tradeFlow: () => svgWrap(`
    <circle cx="35" cy="75" r="24" fill="#EAF6EE" stroke="#1D8A6C" stroke-width="2"/>
    <text x="35" y="79" text-anchor="middle" font-family="Nunito" font-size="9" fill="#1B3B36">Farmer</text>
    <path d="M60 75 L95 75" stroke="#1B3B36" stroke-width="2" marker-end="url(#tf1)"/>
    <circle cx="120" cy="75" r="24" fill="#FFF6E5" stroke="#E6A800" stroke-width="2"/>
    <text x="120" y="79" text-anchor="middle" font-family="Nunito" font-size="9" fill="#1B3B36">Mandi</text>
    <path d="M145 75 L180 75" stroke="#1B3B36" stroke-width="2" marker-end="url(#tf1)"/>
    <circle cx="205" cy="75" r="24" fill="#FDEAE7" stroke="#FF6B5B" stroke-width="2"/>
    <text x="205" y="72" text-anchor="middle" font-family="Nunito" font-size="9" fill="#1B3B36">City</text>
    <text x="205" y="84" text-anchor="middle" font-family="Nunito" font-size="9" fill="#1B3B36">Market</text>
    <defs><marker id="tf1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#1B3B36"/></marker></defs>
  `)
};
function getDiagramSvg(type) {
  const builder = DIAGRAM_BUILDERS[type];
  return builder ? builder() : "";
}

function renderQuizQuestion(question, { heartsLeft, timerText, progressLabel, mastery, onAnswer }) {
  const shuffledOpts = question.options.map((text, idx) => ({ text, idx })).sort(() => Math.random() - 0.5);

  const masteryHtml = mastery ? `
    <div class="mastery-bar-wrap">
      <div class="mastery-bar-track"><div class="mastery-bar-fill" id="masteryBarFill" style="width:${Math.round((mastery.mastered / mastery.total) * 100)}%;"></div></div>
      <div class="mastery-bar-text" id="masteryBarText">Mastered ${mastery.mastered} / ${mastery.total}</div>
    </div>` : "";

  const area = document.getElementById("playArea");
  area.innerHTML = `
    <div class="quiz-topline">
      <span>${progressLabel || ""}</span>
      ${heartsLeft !== undefined ? `<span class="hearts">${"❤️".repeat(heartsLeft)}${"🖤".repeat(Math.max(0, 3 - heartsLeft))}</span>` : ""}
      ${timerText !== undefined ? `<span class="timer-badge" id="timerBadge">${timerText}</span>` : ""}
    </div>
    ${masteryHtml}
    <div class="question-card">
      <span class="difficulty-tag ${question.difficulty}">${question.difficulty.toUpperCase()}</span>
      <div class="question-text">${question.q}</div>
      <div class="options-list" id="optionsList"></div>
      <div class="explain-box" id="explainBox"></div>
      <div class="next-btn-wrap" id="nextBtnWrap"></div>
    </div>
  `;
  const list = document.getElementById("optionsList");
  shuffledOpts.forEach(({ text, idx }) => {
    const btn = el(`<button class="option-btn" data-original-index="${idx}"><span class="opt-letter">${letterFor(list.children.length)}</span><span>${text}</span></button>`);
    btn.addEventListener("click", () => {
      document.querySelectorAll(".option-btn").forEach(b => b.disabled = true);
      const isCorrect = idx === question.answer;
      btn.classList.add(isCorrect ? "correct" : "wrong");
      if (!isCorrect) {
        const correctBtn = list.querySelector(`[data-original-index="${question.answer}"]`);
        if (correctBtn) correctBtn.classList.add("correct");
      }
      const explainBox = document.getElementById("explainBox");
      explainBox.innerHTML = buildExplainHtml(question, isCorrect);
      explainBox.classList.toggle("wrong-answer", !isCorrect);
      explainBox.classList.add("show");
      document.getElementById("nextBtnWrap").innerHTML = `<button class="btn" id="nextQuestionBtn">${isCorrect ? "Next →" : "Try the next one →"}</button>`;
      onAnswer(isCorrect, idx);
    });
    list.appendChild(btn);
  });
}

function updateQuizHud(heartsLeft, progressLabel, mastery) {
  const topline = document.querySelector(".quiz-topline");
  if (topline) {
    const spans = topline.querySelectorAll("span");
    if (spans[0]) spans[0].textContent = progressLabel;
  }
  if (mastery) {
    const fill = document.getElementById("masteryBarFill");
    const text = document.getElementById("masteryBarText");
    if (fill) fill.style.width = Math.round((mastery.mastered / mastery.total) * 100) + "%";
    if (text) text.textContent = `Mastered ${mastery.mastered} / ${mastery.total}`;
  }
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
