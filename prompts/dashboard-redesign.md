<!--tz-meta {"id":"dashboard-redesign","title":"Dashboard redesign","file":"prompts/dashboard-redesign.md","description":"Rebuild an existing dashboard: audit first, then redesign around one core job with honest charts."} -->

# Prompt: Dashboard redesign

Copy everything below the line into your AI builder (v0, Lovable, Replit, Cursor, Claude, ChatGPT). Fill in the [BRACKETS] first.

---

Use https://github.com/rawmware/TZ-taste as a reference. Follow its AGENT.md protocol: state your design read in one sentence, pick exactly ONE style DNA from styles/index.json, and obey skill/SKILL.md (set VARIANCE/MOTION/DENSITY dials, zero slop-blocklist violations).

Redesign the dashboard of [PRODUCT NAME], a [TYPE OF APP] used daily by [USER ROLE] to [CORE JOB].

- **Audit first:** inventory what the current dashboard shows, then state what you cut, merged, or demoted — and why. The redesign starts from subtraction.
- **One primary metric** owns the largest slot. Secondary metrics support it. Everything else lives one click deeper. No ties for attention.
- **Real workflows:** build [2–3 SPECIFIC FLOWS, e.g. "dispute a charge", "export last quarter's report"] end to end. No dead buttons, no decorative panels.
- **Honest charts:** labeled axes, real units, zero fake exponential-growth curves. Use [YOUR DATA SOURCE] or realistic sample figures with sources noted.
- **Empty states:** every panel states what shows up here, when, and what to do while it's empty. "No data yet" is a sentence, not a shrug.
- **Constraints:** [stack, e.g. "React + Tailwind"]; real copy, no lorem ipsum; renders clean at 1440/768/390; respects prefers-reduced-motion; WCAG AA contrast.
- **Density:** default the DENSITY dial to 7–9. Whitespace is a cost on dashboards — spend it on the numbers that drive decisions, not decoration.
- **Keyboard:** core actions reachable by keyboard, focus states visible, table rows navigable. Tables scroll horizontally at 390 — never squash them.
- **Alerts, not noise:** thresholds that notify [USER ROLE] should be rare, configurable, and explainable. Show what fired and why, with a mute path.
- **Export fidelity:** reports export as CSV/PDF with the same numbers on screen. Numbers that change on export destroy trust.
- **Transition trust:** if this replaces an old view, run old and new side by side for the first 30 days — trust is earned, not announced.

Do NOT build: a left sidebar + three KPI cards + a line chart in a rounded box; gray-on-gray metric text; sparklines with no axes; a fake "Recent activity" feed of lorem ipsum; a purple/blue gradient anywhere. If it looks like a template's dashboard page, redesign it before showing me.

Before writing code, tell me: your one-sentence design read, the DNA you chose and why the runner-up loses, your dial settings, and the page's one distinctive choice.
