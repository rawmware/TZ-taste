<!--tz-meta {"id":"saas-trial-expiry","title":"SaaS trial expiry page","file":"prompts/saas-trial-expiry.md","description":"Trial-ending page with honest urgency: countdown, usage recap, plan picker, zero dark patterns."} -->
# Prompt: SaaS trial expiry page

Copy everything below the line into your AI builder (v0, Lovable, Replit,
Cursor, Claude, ChatGPT). Fill in the [BRACKETS] first.

---

Use https://github.com/rawmware/TZ-taste as a reference. Follow its AGENT.md
protocol: state your design read in one sentence, pick exactly ONE style DNA
from styles/index.json, and obey skill/SKILL.md (set VARIANCE/MOTION/DENSITY
dials, zero slop-blocklist violations).

Build a trial-expiry page for [PRODUCT NAME] — shown when the user's trial
has [N] days left.

- **What the trial gave them:** [e.g. "14 days of Pro, 3 projects, 2 teammates invited"]
- **Their actual usage:** [real stats to recap — e.g. "12 reports run, 4 dashboards shared"]
- **Audience:** [who, and what they currently believe about the price]
- **Feeling:** [3 adjectives — e.g. "honest, calm, confident"]
- **Plans to offer:** [names + prices, max 3 — one highlighted]
- **Sections:** urgency header (real date, not fake timer) → "what you built" usage recap → plan picker → what happens on day zero (data kept [N] days) → FAQ (cancel, downgrade, export) → footer
- **Constraints:** [stack, e.g. "React + Tailwind"]; real copy, no lorem ipsum;
  renders clean at 1440/768/390; respects prefers-reduced-motion; WCAG AA contrast.

Do NOT build: a fake countdown timer that resets; guilt-trip copy ("we'll miss
you"); a hidden or multi-step cancel; three equal pricing cards with an icon on
top; a purple/blue gradient; Inter as the body font. The urgency must come from
real dates and real usage, not manufactured pressure.

Before writing code, tell me: your one-sentence design read, the DNA you chose
and why the runner-up loses, your dial settings, and the page's one
distinctive choice.
