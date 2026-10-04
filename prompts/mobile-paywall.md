<!--tz-meta {"id":"mobile-paywall","title":"Mobile app paywall","file":"prompts/mobile-paywall.md","description":"Subscription paywall screen set: honest plan comparison, clear trial terms, zero dark patterns."} -->
# Prompt: Mobile app paywall

Copy everything below the line into your AI builder (v0, Lovable, Replit,
Cursor, Claude, ChatGPT). Fill in the [BRACKETS] first.

---

Use https://github.com/rawmware/TZ-taste as a reference. Follow its AGENT.md
protocol: state your design read in one sentence, pick exactly ONE style DNA
from styles/index.json, and obey skill/SKILL.md (set VARIANCE/MOTION/DENSITY
dials, zero slop-blocklist violations).

Build a subscription paywall screen set for [APP NAME] (iOS/Android, 390px
first — this is a phone screen, not a desktop page).

- **What the app does:** [one sentence]
- **What paying unlocks:** [the real list — specific features, not "premium experience"]
- **Plans:** [e.g. monthly $X / annual $Y; note any trial length]
- **Audience:** [who pays, and what they compare you against]
- **Feeling:** [3 adjectives — e.g. "direct, warm, no-nonsense"]
- **Screens:** paywall → plan selected state → purchase confirm/error →
  restore-purchase → post-purchase welcome
- **Constraints:** [stack, e.g. "SwiftUI" or "React Native"]; real copy, no
  lorem ipsum; respects prefers-reduced-motion; WCAG AA contrast; 44pt minimum
  touch targets.

Paywall rules:

- The close (✕) control is visible and tappable from the first frame. A
  paywall you can't leave is a dark pattern — the build fails review without it.
- Trial terms are stated in plain numbers on the screen: price, billing
  cadence, when the trial ends, that it auto-renews, and how to cancel.
  Fine print smaller than body text is a second dark pattern.
- Plans compare on specifics: "Unlimited exports" vs "10 exports/month",
  not "Basic features" vs "All features".
- Show the actual price the user pays, with currency, per plan. No
  "as low as" math that hides the annual charge.
- Restore purchase is a real, reachable control — same weight as the buy
  button's neighborhood, not buried in settings.
- Post-purchase screen confirms what they got and shows the first paid
  feature working. No confetti-first, value-never.

Do NOT build: three equal plan cards; a purple/blue gradient; Inter as the
body font; emoji as icons; a countdown timer pressuring the purchase. If the
output resembles a template, redesign it before showing me.

Before writing code, tell me: your one-sentence design read, the DNA you chose
and why the runner-up loses, your dial settings, and the screen set's one
distinctive choice.
