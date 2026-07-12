# Expedition Class 6 — Learning Adventure Game

A browser-based educational game for a Telangana State Class 6 student, covering
Mathematics, Science, Social Studies, English, and Telugu — no install, no
backend, just open a file.

## How to run it

1. Keep all four files in the **same folder**: `index.html`, `style.css`,
   `script.js`, `questions.js`.
2. Double-click `index.html` to open it in any browser (Chrome, Edge, Firefox).
   That's it — it works fully offline except for loading two Google Fonts
   (Baloo 2 and Nunito), which just fall back to system fonts if there's no
   internet connection.
3. To put it on a phone or tablet, copy the folder over (e.g. via USB, email,
   or a shared drive) and open `index.html` in the phone's browser. It's
   responsive down to small screens.
4. Progress, coins, XP, and streaks are saved in the browser's local storage
   **on that specific device/browser** — there's no login and no cloud sync.
   Clearing browser data will reset progress.

## What's inside

- **6 subjects, all 83 official TS SCERT Class 6 chapters**: Mathematics
  (14), Science (16), Social Studies (21), English (8 units), Telugu (12),
  Hindi (12) — 471 questions and 498 term/definition pairs in total.
- **6 game modes**: Adventure Quiz (a true mastery loop — see below),
  Time Challenge (60-second rapid fire), Memory Match, Match the Following
  (drag & drop), Spin & Win (bonus multiplier round), and a Boss Battle that
  unlocks once every chapter in a subject is mastered.
- A winding **trail map** for chapter selection — clearing a chapter reveals
  the next stop, with stars showing how cleanly it was done.
- Coins, XP, a daily streak counter, and unlockable badges.
- Every answer — right or wrong — shows a plain-language explanation, so
  wrong answers teach rather than just penalize.

## Learning from wrong answers

Every question carries two extra fields beyond the original `explain`
one-liner:
- `explainSteps`: an array of short, numbered reasoning steps that walk the
  kid to the answer.
- `explainDiagram`: a key into a built-in library of inline SVG diagrams
  (`DIAGRAM_BUILDERS` in `script.js`, 20 types) — number lines, place value
  blocks, magnet poles, the water cycle, circuits, maps/compass, latitude &
  longitude, landforms, government structure tiers, trade flow, and more.
  These are drawn live in the browser with no external images, so the app
  stays fully offline.

When a question is answered **wrong**, a warmer, exciting breakdown appears:
the correct answer restated, the step-by-step reasoning, and a diagram where
one genuinely helps. A **correct** answer stays light-touch (just the
original one-liner + a quick "yes, exactly right!"), so the extra detail
shows up exactly when it's most useful — after a mistake, not before it.

**Coverage: all 6 subjects, all 83 chapters, all 471 questions.** Math,
Science and Social Studies use diagrams where visual aids help; English,
Telugu and Hindi use the step breakdown without diagrams, since that content
is grammar/vocabulary/literature-based rather than visual. Every explanation
was written and validated individually (not templated), and the whole thing
was checked with a jsdom smoke test that clicks through all 83 chapters
forcing wrong answers and confirms the explain box renders correctly with
zero JS errors.

## How Adventure Quiz works (the mastery loop)

This isn't a fixed-length quiz. Adventure Quiz queues *every* question in a
chapter. Get one right and it's mastered for good. Get one wrong and it
comes back around a few questions later for another try — the chapter only
finishes once every concept has been answered correctly at least once.
Stars (0–3) reflect how many were right on the *first* try, but the chapter
still unlocks the next one regardless, since the point is that by the end,
every concept has actually been learned.

## A note on content scope and accuracy

- Chapter names and structure follow the official TS SCERT Class 6 syllabus,
  verified via web search (tsboardsolutions.in, apboardsolutions.in) in July
  2026. **TS reportedly revised these textbooks for 2025-26 under NEP 2020**,
  and what's built here reflects the well-documented older edition — worth a
  quick cross-check against your child's actual current textbook, especially
  chapter titles.
- **Maths, Science, Social Studies**: full official chapter list, 5–6
  questions per chapter written directly from the syllabus topics.
- **English**: all 8 official units. For units built around specific stories
  I don't have confident access to the exact text of (e.g. regional or
  lesser-known lessons), questions lean on grammar and vocabulary tied to the
  unit's theme rather than invented plot details. Units featuring genuinely
  well-documented public-domain material (Rip Van Winkle, Gulliver's Travels)
  or real historical/sporting figures (P.T. Usha, Wilma Rudolph, Tanaji
  Malusare, Bammera Pothana) include accurate general-knowledge questions
  about them.
- **Telugu and Hindi**: all 12 official lessons for each, by title. Since I
  don't have the exact lesson texts, questions focus on vocabulary and
  grammar tied to each lesson's theme rather than invented comprehension
  details — genuinely useful for language-building, but not a substitute for
  reading the actual lesson.
- If any chapter names don't match your child's exact textbook edition, the
  content underneath is still accurate Class 6-level material — just retitle
  the chapter in `questions.js`.

## Adding more chapters or subjects

Everything content-related lives in `questions.js`. To add a chapter, copy an
existing chapter object inside a subject's `chapters` array and fill in new
`questions` (with `q`, `options`, `answer` index, `difficulty`, `explain`) and
`terms` (`term` + `def`, used by Memory Match and Match the Following). No
changes are needed in `script.js` or `style.css` — new chapters automatically
get a spot on the trail map, get locked/unlocked correctly, and work with all
six game modes.

To add a whole new subject, copy one of the top-level subject objects in
`questions.js` (e.g. `math: {...}`) under a new key, give it a `name`, `icon`,
`color`, `tagline`, and its own `chapters` array — it'll show up automatically
on the subject selection screen.
