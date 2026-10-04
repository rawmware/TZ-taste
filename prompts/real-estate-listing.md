<!--tz-meta {"id":"real-estate-listing","title":"Real estate listing","file":"prompts/real-estate-listing.md","description":"Single property page: gallery-first, specs as a table, honest details."} -->
# Prompt: Real estate listing

Copy everything below the line into your AI builder (v0, Lovable, Replit,
Cursor, Claude, ChatGPT). Fill in the [BRACKETS] first.

---

Use https://github.com/rawmware/TZ-taste as a reference. Follow its AGENT.md
protocol: state your design read in one sentence, pick exactly ONE style DNA
from styles/index.json, and obey skill/SKILL.md (set VARIANCE/MOTION/DENSITY
dials, zero slop-blocklist violations).

Build a single property listing page for [ADDRESS, CITY].

- **The property:** [beds, baths, sqft, lot, year built, type]
- **Price:** [exact — no "call for price"]
- **The honest pitch:** [2–3 lines: what it's actually good at — schools,
  commute, the kitchen — and one real caveat]
- **Agent:** [name, phone, brokerage — real details]

**Structure (in this order):**
1. Gallery first, full-width: the exterior, the rooms that matter, in the
   order a walkthrough goes. Captions say which room, not "beautiful
   space".
2. Address, price, beds/baths/sqft as a header line under the gallery —
   the five facts, exact.
3. The honest description: 2–3 short paragraphs, including the caveat.
4. Specs as a table: beds, baths, sqft, lot, year built, heating, parking,
   taxes, HOA. One table, no icon chips.
5. The walkthrough: rooms listed in order with one factual line each.
6. Neighborhood: commute times to real places, walk score if you have a
   real number, nearby essentials.
7. The agent: name, phone, brokerage, one booking line ("Call or text
   [number] to tour — usually same-day").
8. Mortgage estimate calculator or a plain monthly estimate with the rate
   and assumptions stated.

**Rules:**
- Photos are the page. Real property photos, consistent light, every major
  room shown. Never stock interiors, never render-style wide angles.
- The caveat stays in: age of roof, street noise, HOA dues — a listing
  with no caveat reads as dishonest.
- Price, taxes, HOA: exact numbers, always.
- No "dream home", "rare opportunity", "won't last long". The photos and
  the facts sell it.
- Tour CTA says what happens: "Book a tour — [phone]", not "Contact agent".
- If it's sold or pending, the page says so loudly at the top. No bait.
- Copy ban: "stunning", "gorgeous", "charming" (as the whole description),
  "must-see", "priced to sell".

Do NOT build: a centered hero with badge + headline + two buttons; three equal
feature cards; a purple/blue gradient; Inter as the body font. If the output
resembles a template, redesign it before showing me.

Before writing code, tell me: your one-sentence design read, the DNA you chose
and why the runner-up loses, your dial settings, and the page's one
distinctive choice.
