<!--tz-meta {"id":"status-page","title":"Status page","file":"prompts/status-page.md","description":"Service status page: honest uptime grid, dated incident history, subscribe."} -->
# Prompt: Status page

Copy everything below the line into your AI builder (v0, Lovable, Replit,
Cursor, Claude, ChatGPT). Fill in the [BRACKETS] first.

---

Use https://github.com/rawmware/TZ-taste as a reference. Follow its AGENT.md
protocol: state your design read in one sentence, pick exactly ONE style DNA
from styles/index.json, and obey skill/SKILL.md (set VARIANCE/MOTION/DENSITY
dials, zero slop-blocklist violations).

Build a service status page for [SERVICE NAME].

- **Components:** [the real systems, e.g. "API, Web app, Webhooks, Email
  delivery"]
- **Current state:** [all operational? one degraded? — state the truth]
- **Incident history:** [2–3 past incidents: date, what broke, how long,
  what changed after]
- **Subscribe channels:** [email, SMS, RSS, webhook — the real ones]

**Structure (in this order):**
1. The current status in plain language at the top: "All systems
   operational" or exactly what's wrong. Big, unmissable.
2. Component list with per-component status. Names match the systems users
   actually know.
3. Uptime grid: 90 days, one bar per day, color-coded. Hover shows the date
   and any incident. Gaps in data are labeled "no data", never faked green.
4. Active incident (if any): what happened, impact, started-at time, updates
   in reverse-chronological order with timestamps.
5. Past incidents: date, duration, what broke, the fix, what changed after.
   Newest first.
6. Uptime percentages per component over 90 days. Computed from real data
   or marked "collecting data".
7. Subscribe: email/SMS/RSS/webhook — what each notifies about, how often.
8. Footer: link to support, SLA page if one exists.

**Rules:**
- The current status is true at a glance. No one should need to read the
  page to know if things are broken.
- Incidents are honest: what broke, how long, what changed. An incident
  titled "minor service disruption" with no details reads as a cover-up.
- Maintenance windows are announced on this page BEFORE they happen, with
  the design for that state included.
- Uptime bars never invent data. Unknown is unknown.
- Status colors follow convention (green/amber/red) — this is one place
  where novelty hurts. State this choice in your reply.
- Every timestamp carries a timezone.
- Copy ban: "experiencing issues" (without saying which), "degraded
  performance" (without numbers), "we apologize for any inconvenience".

Do NOT build: a centered hero with badge + headline + two buttons; three equal
feature cards; a purple/blue gradient; Inter as the body font. If the output
resembles a template, redesign it before showing me.

Before writing code, tell me: your one-sentence design read, the DNA you chose
and why the runner-up loses, your dial settings, and the page's one
distinctive choice.
