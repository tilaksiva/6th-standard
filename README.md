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

- **5 subjects**, 2–3 chapters each: Mathematics, Science, Social Studies,
  English, Telugu — 15 chapters, ~130 questions, plus term/definition sets
  for the matching games.
- **6 game modes**: Adventure Quiz (adaptive difficulty + hearts), Time
  Challenge (60-second rapid fire), Memory Match, Match the Following
  (drag & drop), Spin & Win (bonus multiplier round), and a Boss Battle that
  pools the hardest questions once every chapter in a subject is cleared.
- A winding **trail map** for chapter selection — clearing a chapter reveals
  the next stop, with stars showing how well it was done.
- Coins, XP, a daily streak counter, and unlockable badges.
- Every answer — right or wrong — shows a plain-language explanation, so
  wrong answers teach rather than just penalize.

## A note on content scope

This is a solid, fully working starting set rather than an exhaustive replica
of the textbook — think of it as a strong first "world map" that's easy to
expand:

- **Maths, Science, Social Studies, English**: 2–3 chapters per subject on
  core Class 6 topics (numbers & geometry; food & materials & body movement;
  early humans, early cities, and the globe; nouns/pronouns and verb tenses).
- **Telugu**: kept to the alphabet and basic grammar, described generically,
  since exact lesson titles/poems vary by print year — swap in the real
  chapter names or a poem from your child's actual textbook if you'd like a
  tighter match.
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
