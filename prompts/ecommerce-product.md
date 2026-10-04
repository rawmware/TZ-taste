<!--tz-meta {"id":"ecommerce-product","title":"E-commerce product page","file":"prompts/ecommerce-product.md","description":"Product detail page: gallery, specs, reviews, sticky buy — with honest commerce copy."} -->
# Prompt: E-commerce product page

Copy everything below the line into your AI builder (v0, Lovable, Replit,
Cursor, Claude, ChatGPT). Fill in the [BRACKETS] first.

---

Use https://github.com/rawmware/TZ-taste as a reference. Follow its AGENT.md
protocol: state your design read in one sentence, pick exactly ONE style DNA
from styles/index.json, and obey skill/SKILL.md (set VARIANCE/MOTION/DENSITY
dials, zero slop-blocklist violations).

Build a product detail page for [PRODUCT NAME].

- **What it is:** [one honest sentence — what the thing is, who it's for]
- **Price:** [price + any financing/bundle options]
- **Audience:** [who buys this, and what they worry about before buying]
- **Feeling:** [3 adjectives — e.g. "tactile, confident, unhurried"]
- **Images:** [how many shots, what's in them — lifestyle vs. studio vs. detail]
- **Primary goal:** [add to cart / start checkout]
- **Sections:** gallery → title/price/variants → sticky buy bar → honest
  details → specs → reviews → related products → footer
- **Constraints:** [stack, e.g. "React + Tailwind"]; real copy, no lorem ipsum;
  renders clean at 1440/768/390; respects prefers-reduced-motion; WCAG AA contrast.

Product-page rules:

- Gallery is the hero: one large image at a time with a clear thumbnail rail
  or dot sequence. No auto-rotating carousel that moves on its own.
- Variants (size/color) are real selectors with names and, where it matters,
  measurements. "One size" for something with dimensions is a lie — list them.
- Details answer the questions people actually email about: materials, care,
  shipping time, returns. Write them like a shopkeeper talking, not a policy.
- Reviews show distribution (a histogram or count summary), a few real
  reviews with names and dates, and a way to write one. No "★★★★★ Trusted by
  10,000 happy customers" badges row.
- Related products: four maximum, curated by the shop (not an algorithm
  apology). The current product never appears in its own "you may also like".
- Sticky buy bar appears only after the main buy section scrolls out of view,
  on mobile and desktop alike. It shows product name, price, and one button.

Do NOT build: a centered hero with badge + headline + two buttons; three equal
feature cards; a purple/blue gradient; Inter as the body font; fake urgency
("Only 3 left!" on a print-on-demand item). If the output resembles a
template, redesign it before showing me.

Before writing code, tell me: your one-sentence design read, the DNA you chose
and why the runner-up loses, your dial settings, and the page's one
distinctive choice.
