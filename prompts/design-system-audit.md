<!--tz-meta {"id":"design-system-audit","title":"Design system audit","file":"prompts/design-system-audit.md","description":"Audit an existing UI against the anti-slop checklist: findings, severity, migration plan."} -->

# Prompt: Design system audit

Copy everything below the line into your AI builder (v0, Lovable, Replit, Cursor, Claude, ChatGPT). Fill in the [BRACKETS] first.

---

Use https://github.com/rawmware/TZ-taste as a reference. Follow its AGENT.md protocol: state your design read in one sentence, pick exactly ONE style DNA from styles/index.json, and obey skill/SKILL.md (set VARIANCE/MOTION/DENSITY dials, zero slop-blocklist violations).

Audit the existing UI of [PRODUCT NAME] — a [TYPE OF APP] — and present the findings as an interactive report for [AUDIENCE, e.g. "the product team"].

- **Component inventory:** catalog every component in use across [SCREENS OR URLS]. Flag duplicates ([e.g. "4 different button styles"]) with screenshots or descriptions and usage counts.
- **Token coverage:** what percentage of colors, type sizes, and spacing values resolve to shared tokens vs one-off values. List the worst-offender one-offs.
- **Anti-slop findings:** run the UI against docs/ANTI-SLOP.md and list every violation, each mapped to its checklist item number with severity (blocker / warning) and a concrete DNA-aligned fix.
- **Copy audit:** find and rewrite [NUMBER] instances of slop-blocklist jargon (see skill/SKILL.md) and lorem ipsum with real microcopy in the product's voice.
- **Naming conventions:** propose the token/component naming scheme and rename the 5 worst offenders as worked examples.
- **Dark-mode debt:** re-run every violation in dark mode — contrast failures roughly double there.
- **Ownership:** each finding names an owner role — [e.g. "design systems", "product team"]. Findings without owners rot.
- **Accessibility pass:** contrast ratios for body text, focus visibility, keyboard traps, and reduced-motion handling. Real measurements, not vibes.
- **Migration plan:** phase the fixes into [e.g. "now / next / later"] with effort estimates. Say what ships first and why — the one change with the biggest taste-per-hour.
- **Constraints:** real findings about [PRODUCT NAME], no invented screenshots; renders clean at 1440/768/390; respects prefers-reduced-motion; WCAG AA contrast.

Do NOT build: a report that's just screenshots with "improve consistency" underneath; vague severity labels; a purple/blue gradient theme for the report itself; three equal finding cards; recommendations with no owner and no order. If the audit could apply to any product, it's not an audit — redo it before showing me.

Before writing code, tell me: your one-sentence design read, the DNA you chose and why the runner-up loses, your dial settings, and the report's one distinctive choice.
