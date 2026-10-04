<!--tz-meta {"id":"event-page","title":"Event page","file":"prompts/event-page.md","description":"Single event/conference page: lineup, schedule, one sticky ticket CTA."} -->
# Prompt: Event page

Copy everything below the line into your AI builder (v0, Lovable, Replit,
Cursor, Claude, ChatGPT). Fill in the [BRACKETS] first.

---

Use https://github.com/rawmware/TZ-taste as a reference. Follow its AGENT.md
protocol: state your design read in one sentence, pick exactly ONE style DNA
from styles/index.json, and obey skill/SKILL.md (set VARIANCE/MOTION/DENSITY
dials, zero slop-blocklist violations).

Build a single-event page for [EVENT NAME].

- **When/where:** [date, time, city, venue — exact]
- **What it is:** [one sentence — gig, conference, workshop]
- **Lineup:** [names + one line each; include the headliners the flyers lead
  with]
- **Ticket tiers:** [names + prices + what's different; e.g. "GA $40,
  early-bird $25 until Jun 1"]
- **The one reason to come:** [the pitch in plain words]

**Structure (in this order):**
1. The poster block: name, date, venue, city. Loud and complete — a stranger
   should know when and where without scrolling.
2. One primary ticket CTA. Sticky on mobile, anchored near the top on
   desktop. Price visible next to the button.
3. The pitch: the one reason to come, in real words.
4. Lineup as a list — name, set time or session, one line. A list, not a
   grid of six identical headshot cards.
5. Schedule/day plan with actual times. "TBA" appears nowhere; if a slot is
   undecided, it isn't on the page.
6. Ticket tiers: name, price, what changes. No fake countdown timer, no
   "only 3 left!!" if you can't prove it.
7. Practical: doors time, age limit, parking/transit, refunds policy. One
   compact block.
8. The organizer's real contact, one line.

**Rules:**
- Date, time, city, venue, and price are never buried. All five above the
  scroll midpoint on mobile.
- No fake urgency: no countdown, no invented scarcity, no popups.
- Lineup headshots: real photos or no photos. Never stock concert photos of
  other people.
- Schedule is honest about gaps — doors-to-first-act is information, show it.
- Ticket button says "Get tickets — $40", not "Buy now".
- Copy ban: "unforgettable night", "one-of-a-kind experience", "join the
  excitement", "limited time".

Do NOT build: a centered hero with badge + headline + two buttons; three equal
feature cards; a purple/blue gradient; Inter as the body font. If the output
resembles a template, redesign it before showing me.

Before writing code, tell me: your one-sentence design read, the DNA you chose
and why the runner-up loses, your dial settings, and the page's one
distinctive choice.
