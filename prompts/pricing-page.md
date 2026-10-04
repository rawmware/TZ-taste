<!--tz-meta {"id":"pricing-page","title":"Pricing page","file":"prompts/pricing-page.md","description":"Standalone pricing: honest comparison table, real FAQ, annual toggle, no fake scarcity."} -->
# Prompt: Pricing page

Copy everything below the line into your AI builder (v0, Lovable, Replit,
Cursor, Claude, ChatGPT). Fill in the [BRACKETS] first.

---

Use https://github.com/rawmware/TZ-taste as a reference. Follow its AGENT.md
protocol: state your design read in one sentence, pick exactly ONE style DNA
from styles/index.json, and obey skill/SKILL.md (set VARIANCE/MOTION/DENSITY
dials, zero slop-blocklist violations).

Build a standalone pricing page for [PRODUCT NAME].

- **The tiers:** [names + prices + the one-line difference between each]
- **Billing:** [monthly/annual options and the real annual discount]
- **Audience:** [who pays, and what they're comparing you to]
- **Feeling:** [3 adjectives — e.g. "transparent, confident, calm"]
- **Primary goal:** [start trial / pick a plan / talk to sales]
- **Sections:** tier cards → comparison table → FAQ → guarantee/trust →
  final CTA → footer
- **Constraints:** [stack, e.g. "React + Tailwind"]; real prices and feature
  lists, no lorem ipsum; renders clean at 1440/768/390 (table must survive
  390); respects prefers-reduced-motion; WCAG AA contrast.

Pricing-page rules:

- Tier differences are specific: "10 projects" vs "Unlimited projects", not
  "Core features" vs "Advanced features". If a buyer can't tell tiers apart
  from the feature lists, rewrite the lists.
- The comparison table covers everything the cards summarize — same feature
  names in both, no renaming between sections to hide gaps.
- "Most popular" highlighting is earned: mark the tier most buyers actually
  choose, and say why in one line ("Most teams land here"). Never highlight
  the most expensive tier just to anchor high.
- Monthly/annual toggle shows both prices honestly, with the annual math
  visible ("$20/mo billed annually — $240/yr"). No "save 20%" without the
  numbers beside it.
- FAQ answers pricing questions, not marketing questions: what happens when
  the trial ends, can I change plans mid-cycle, how do seats work, what's
  the refund policy. Write the answers like support wrote them.
- Free tier (if any) is a real tier in the table with real limits — not a
  footnote. Enterprise/"Contact us" gets its own honest column or a clear
  aside, not a mystery box.

Do NOT build: a centered hero with badge + headline + two buttons; three equal
tier cards with no differentiation; a purple/blue gradient; Inter as the body
font; fake scarcity ("Prices go up Friday!"). If the output resembles a
template, redesign it before showing me.

Before writing code, tell me: your one-sentence design read, the DNA you chose
and why the runner-up loses, your dial settings, and the page's one
distinctive choice.
