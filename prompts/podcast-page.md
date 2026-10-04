<!--tz-meta {"id":"podcast-page","title":"Podcast page","file":"prompts/podcast-page.md","description":"Podcast show page: latest episode up front, dense episode index, honest subscribe."} -->
# Prompt: Podcast page

Copy everything below the line into your AI builder (v0, Lovable, Replit,
Cursor, Claude, ChatGPT). Fill in the [BRACKETS] first.

---

Use https://github.com/rawmware/TZ-taste as a reference. Follow its AGENT.md
protocol: state your design read in one sentence, pick exactly ONE style DNA
from styles/index.json, and obey skill/SKILL.md (set VARIANCE/MOTION/DENSITY
dials, zero slop-blocklist violations).

Build a podcast show page for [SHOW NAME].

- **The show:** [what it's about, in one sentence a stranger would get]
- **Hosts:** [names — real people]
- **Episodes:** [5–8 real-format samples: title, number, date, duration,
  one-line description]
- **Cadence:** [weekly, biweekly — exact]
- **Feeds:** [the platforms it's actually on: Apple, Spotify, RSS]

**Structure (in this order):**
1. Show title, one-sentence premise, hosts. Cover art — designed or real,
   never a stock mic photo.
2. The latest episode front and center: title, number, date, duration, a
   real player UI, and the episode description.
3. Subscribe block: buttons ONLY for platforms the show is actually on.
   No dead buttons.
4. Episode index: number, title, date, duration, description — newest first,
   dense, scannable. Search if there are more than 30 episodes.
5. Two or three "start here" episodes for new listeners, labeled as such
   with why each.
6. About the show: premise in more detail, host bios in two sentences each,
   contact line for pitches.
7. Reviews only if they're real and attributed. Otherwise skip — an empty
   "what listeners say" is worse than none.

**Rules:**
- The latest episode is playable without scrolling far. The play button is
  the page's focal point.
- Episode titles are real titles from the genre — specific, not
  "Episode 12: Chat".
- Descriptions say what's in the episode, including the timestamped beats
  if the show does them.
- Duration and date on every episode row. Missing dates look abandoned.
- Cover art: one strong image. If there's no art, a type-led lockup beats
  a fake mic photo.
- No auto-play. Ever.
- Copy ban: "join us", "tune in", "deep dive" (as the whole premise),
  "riveting".

Do NOT build: a centered hero with badge + headline + two buttons; three equal
feature cards; a purple/blue gradient; Inter as the body font. If the output
resembles a template, redesign it before showing me.

Before writing code, tell me: your one-sentence design read, the DNA you chose
and why the runner-up loses, your dial settings, and the page's one
distinctive choice.
