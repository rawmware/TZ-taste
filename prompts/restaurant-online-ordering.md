<!--tz-meta {"id":"restaurant-online-ordering","title":"Restaurant online ordering page","file":"prompts/restaurant-online-ordering.md","description":"Restaurant ordering page: menu, modifiers, pickup/delivery, live order tracking."} -->
# Prompt: Restaurant online ordering page

Copy everything below the line into your AI builder (v0, Lovable, Replit,
Cursor, Claude, ChatGPT). Fill in the [BRACKETS] first.

---

Use https://github.com/rawmware/TZ-taste as a reference. Follow its AGENT.md
protocol: state your design read in one sentence, pick exactly ONE style DNA
from styles/index.json, and obey skill/SKILL.md (set VARIANCE/MOTION/DENSITY
dials, zero slop-blocklist violations).

Build an online ordering page for [RESTAURANT NAME] ([cuisine], [neighborhood]).

- **The menu:** [real items with prices — 8+ across categories]
- **Audience:** [who orders — e.g. "weeknight regulars within 3 miles"]
- **Feeling:** [3 adjectives — e.g. "warm, fast, appetizing"]
- **Fulfillment:** [pickup / delivery / both; hours; delivery radius + fee]
- **Sections:** header (hours status: open now / closes 9pm) → category nav
  (sticky) → menu sections (item, description, price, photo, dietary tags) →
  item modal (modifiers, quantity, special instructions) → cart drawer
  (running total, pickup/delivery toggle) → checkout (name, phone, payment,
  tip) → order tracking (confirmed → preparing → ready) → footer
- **Constraints:** [stack, e.g. "React + Tailwind"]; real copy, no lorem ipsum;
  renders clean at 1440/768/390; respects prefers-reduced-motion; WCAG AA contrast.

Do NOT build: a menu as a PDF or image; modifier options that don't affect the
price shown; a cart that hides the total until checkout; dark-patterned tip
defaults; three equal promo cards; a purple/blue gradient; Inter as the body
font. The price must update live with every modifier — surprise totals at
checkout are why people abandon carts.

Before writing code, tell me: your one-sentence design read, the DNA you chose
and why the runner-up loses, your dial settings, and the page's one
distinctive choice.
