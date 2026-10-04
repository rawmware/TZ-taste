<!--tz-meta {"id":"digital-download-store","title":"Digital download store","file":"prompts/digital-download-store.md","description":"Storefront for digital products: previews, licensing, instant delivery, checkout."} -->
# Prompt: Digital download store

Copy everything below the line into your AI builder (v0, Lovable, Replit,
Cursor, Claude, ChatGPT). Fill in the [BRACKETS] first.

---

Use https://github.com/rawmware/TZ-taste as a reference. Follow its AGENT.md
protocol: state your design read in one sentence, pick exactly ONE style DNA
from styles/index.json, and obey skill/SKILL.md (set VARIANCE/MOTION/DENSITY
dials, zero slop-blocklist violations).

Build a storefront for [STORE NAME] selling digital downloads ([product type:
e.g. "Lightroom presets", "Notion templates", "sample packs"]).

- **Catalog:** [the actual products — names, prices, what's in each]
- **Audience:** [who buys — e.g. "wedding photographers who edit in batches"]
- **Feeling:** [3 adjectives — e.g. "tactile, generous, no-nonsense"]
- **Sections:** hero (the craft, not the catalog) → featured/bestseller with
  real preview → product grid (preview, format, price, license badge) →
  licensing explained (personal vs commercial, plain words) → bundle offer →
  how delivery works (instant, formats, re-download) → reviews → FAQ
  (refunds, compatibility) → footer
- **Constraints:** [stack, e.g. "React + Tailwind"]; real copy, no lorem ipsum;
  renders clean at 1440/768/390; respects prefers-reduced-motion; WCAG AA contrast.

Do NOT build: "digital products" generic filler with no real previews; license
terms hidden until checkout; three equal product cards with an icon on top; a
centered hero with badge + headline + two buttons; a purple/blue gradient;
Inter as the body font. Every product needs a real preview (image, audio
snippet, or live demo) — downloads you can't inspect don't get bought.

Before writing code, tell me: your one-sentence design read, the DNA you chose
and why the runner-up loses, your dial settings, and the page's one
distinctive choice.
