<!--tz-meta {"id":"dashboard","title":"Dashboard","file":"prompts/dashboard.md","description":"Dense, keyboard-friendly product UI with real interactive workflows."} -->
# Prompt: Dashboard

Copy everything below the line into your AI builder. Fill in the [BRACKETS] first.

---

Use https://github.com/rawmware/TZ-taste as a reference. Follow its AGENT.md
protocol: one-sentence design read, exactly ONE style DNA from
styles/index.json, dials set, skill/SKILL.md obeyed.

Build a [PRODUCT] dashboard for [USER ROLE — e.g. "support analysts"].

- **The 3 numbers that matter:** [metric 1], [metric 2], [metric 3]
- **Primary workflow:** [the one task users do 10x a day]
- **Density:** high — this is a tool, not marketing. DENSITY dial 7–9.
- **Layout:** sidebar nav + top bar + content grid. Sidebar collapses on mobile.
- **Data:** realistic fake data with proper formatting (currency, dates, deltas).
  Charts as inline SVG — no chart-library defaults that scream "template".

Rules:
- Every control does something visible (even if mocked with JS state).
- Keyboard navigable. Focus states visible. `prefers-reduced-motion` respected.
- Empty states and error states designed, not forgotten.
- No marketing hero inside the product. No purple gradients.

Deliver: the dashboard shell plus the primary workflow fully interactive.
