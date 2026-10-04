<!--tz-meta {"id":"dark-dashboard","title":"Dark-mode analytics dashboard","file":"prompts/dark-dashboard.md","description":"Analytics dashboard in dark mode: dense but disciplined, honest charts, one accent."} -->
# Prompt: Dark-mode analytics dashboard

Copy everything below the line into your AI builder (v0, Lovable, Replit,
Cursor, Claude, ChatGPT). Fill in the [BRACKETS] first.

---

Use https://github.com/rawmware/TZ-taste as a reference. Follow its AGENT.md
protocol: state your design read in one sentence, pick exactly ONE style DNA
from styles/index.json, and obey skill/SKILL.md (set VARIANCE/MOTION/DENSITY
dials, zero slop-blocklist violations).

Build a dark-mode analytics dashboard for [PRODUCT NAME].

- **What it measures:** [the domain — e.g. "API usage", "store revenue"]
- **The 4 key metrics:** [name each one and its unit — these anchor the layout]
- **Audience:** [who stares at this daily, and what decision it informs]
- **Feeling:** [3 adjectives — e.g. "precise, calm, nocturnal"]
- **Layout:** sidebar → top KPI strip → main chart area → supporting tables →
  alerts/activity
- **Constraints:** [stack, e.g. "React + Tailwind + Recharts"]; real-looking
  sample data with stated units, no lorem ipsum; renders clean at 1440/768/390;
  respects prefers-reduced-motion; WCAG AA contrast (chart colors included).

Dashboard rules:

- Density dial starts at 7–8: this is a working surface, not a landing page.
  Whitespace is for grouping, not decoration.
- One accent color for data emphasis; everything else is ink/muted/surface
  from the DNA. A rainbow of chart series is unreadable — cap distinct series
  colors at 4 and reuse them consistently across every chart.
- Charts are honest: axes start at zero unless there's a stated reason, time
  ranges are labeled, and "up" is only green if up is actually good for that
  metric (churn going up is not a win — don't color it like one).
- KPI cards show value, unit, delta vs. previous period, and the period.
  A number with no context is a decoration.
- Sidebar has at most 7 top-level items. Everything else lives under one of
  them or doesn't exist.
- Empty and loading states are designed: skeleton structure for loading, and
  an empty state that says what to do ("Connect a data source"), not a blank
  panel.

Do NOT build: three equal stat cards with icons on top; a purple/blue
gradient background; Inter as the body font; emoji as icons; gray-on-gray
text below 4.5:1. If the output resembles a template, redesign it before
showing me.

Before writing code, tell me: your one-sentence design read, the DNA you chose
and why the runner-up loses, your dial settings, and the dashboard's one
distinctive choice.
