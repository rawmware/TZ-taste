<!--tz-meta {"id":"checkout-flow","title":"Checkout flow","file":"prompts/checkout-flow.md","description":"Three-step ecommerce checkout: guest-first, sticky summary, error states that actually help."} -->
# Prompt: Checkout flow

Copy everything below the line into your AI builder (v0, Lovable, Replit,
Cursor, Claude, ChatGPT). Fill in the [BRACKETS] first.

---

Use https://github.com/rawmware/TZ-taste as a reference. Follow its AGENT.md
protocol: state your design read in one sentence, pick exactly ONE style DNA
from styles/index.json, and obey skill/SKILL.md (set VARIANCE/MOTION/DENSITY
dials, zero slop-blocklist violations).

Build a 3-step ecommerce checkout for [STORE NAME].

- **What it sells:** [one sentence]
- **The 3 steps:** [1: contact/shipping → 2: delivery method → 3: payment —
  adjust only if the store truly needs it]
- **Audience:** [who buys, on what device — design mobile-first if they buy on phones]
- **Feeling:** [3 adjectives — e.g. "quick, trustworthy, quiet"]
- **Screens:** cart review → step 1 → step 2 → step 3 → confirmation →
  error states for each step
- **Constraints:** [stack, e.g. "React + Tailwind"]; real copy, no lorem ipsum;
  renders clean at 1440/768/390 (390 is the priority); respects
  prefers-reduced-motion; WCAG AA contrast; full keyboard operability.

Checkout rules:

- Guest checkout is the default path. Account creation is offered AFTER the
  order completes ("Save your details for next time") — never as a gate
  before payment.
- A sticky order summary (items, subtotal, shipping, tax, total) is visible
  on every step. The total updates live; no surprise fees on step 3.
- One question per field group, labels above inputs, inline validation that
  says what's wrong and how to fix it ("Card number is 15 digits — check for
  a typo"). Error summaries focus the first bad field.
- Step indicator shows all 3 steps with the current one marked; completed
  steps are clickable to go back. Back never loses entered data.
- Payment step shows trust plainly: card icons, "encrypted checkout" in
  plain words, and the exact charge amount on the pay button ("Pay $84.20"),
  not "Complete purchase".
- Confirmation screen: order number, what happens next (shipping timeline),
  and receipt sent to [their email]. It is also printable.

Do NOT build: three equal "why shop with us" cards; a purple/blue gradient;
Inter as the body font; emoji as icons; a forced account signup wall. If the
output resembles a template, redesign it before showing me.

Before writing code, tell me: your one-sentence design read, the DNA you chose
and why the runner-up loses, your dial settings, and the flow's one
distinctive choice. Stop for my approval on the field list before building.
