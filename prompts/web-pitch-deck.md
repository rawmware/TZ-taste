<!--tz-meta {"id":"web-pitch-deck","title":"Web pitch deck","file":"prompts/web-pitch-deck.md","description":"Investor pitch as a scrollable page: narrative arc, one idea per section, honest numbers."} -->
# Prompt: Web pitch deck

Copy everything below the line into your AI builder (v0, Lovable, Replit,
Cursor, Claude, ChatGPT). Fill in the [BRACKETS] first.

---

Use https://github.com/rawmware/TZ-taste as a reference. Follow its AGENT.md
protocol: state your design read in one sentence, pick exactly ONE style DNA
from styles/index.json, and obey skill/SKILL.md (set VARIANCE/MOTION/DENSITY
dials, zero slop-blocklist violations).

Build an investor pitch deck as a scrollable web page for [COMPANY NAME].

- **What the company does:** [one sentence a smart outsider understands]
- **The ask:** [raising $X / round type — stated plainly in the deck]
- **Traction:** [the 3 realest numbers you have — revenue, users, growth]
- **Audience:** [which investors, and what they need to believe by the end]
- **Feeling:** [3 adjectives — e.g. "confident, rigorous, calm"]
- **Narrative:** problem → insight → product → traction → market → business
  model → team → the ask → contact
- **Constraints:** [stack, e.g. "React + Tailwind"]; real numbers only, no
  invented metrics; renders clean at 1440/768/390; respects
  prefers-reduced-motion; WCAG AA contrast; printable (each section holds up
  on paper).

Pitch-deck rules:

- One idea per section, one headline per section, and the headline is the
  takeaway ("Churn dropped to 2% after we shipped X"), never a label ("Traction").
- Charts show real data with labeled axes and sources. A bar chart that
  climbs with no numbers is decoration pretending to be evidence.
- Market size is bottom-up (customers × price) before top-down. If the TAM
  slide says "$4.2T", it needs to show its math.
- Competition is a real comparison on dimensions that matter to customers,
  not a magic-quadrant where you're top-right and everyone else is bottom-left.
- The ask section states the amount, the round, and what the money does
  (hiring plan, runway) — investors shouldn't have to guess.
- Team slide: names, roles, and one line of relevant proof each. No advisor
  logos doing the credibility work the founders should.

Do NOT build: a centered hero with badge + headline + two buttons; three equal
feature cards; a purple/blue gradient; Inter as the body font; stock photos of
handshakes and skylines. If the output resembles a template, redesign it
before showing me.

Before writing code, tell me: your one-sentence design read, the DNA you chose
and why the runner-up loses, your dial settings, and the deck's one
distinctive choice. Stop for my approval on the narrative order before building.
