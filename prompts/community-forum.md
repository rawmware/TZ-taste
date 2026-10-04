<!--tz-meta {"id":"community-forum","title":"Community forum","file":"prompts/community-forum.md","description":"Forum/community homepage: index-style categories, live activity, visible rules."} -->
# Prompt: Community forum

Copy everything below the line into your AI builder (v0, Lovable, Replit,
Cursor, Claude, ChatGPT). Fill in the [BRACKETS] first.

---

Use https://github.com/rawmware/TZ-taste as a reference. Follow its AGENT.md
protocol: state your design read in one sentence, pick exactly ONE style DNA
from styles/index.json, and obey skill/SKILL.md (set VARIANCE/MOTION/DENSITY
dials, zero slop-blocklist violations).

Build a community forum homepage for [COMMUNITY NAME].

- **The community:** [who hangs out here and why — e.g. "amateur
  shortwave radio operators trading repair notes"]
- **Categories:** [5–8 real categories with a one-line description each]
- **Rules:** [the 3–5 real rules, stated plainly]
- **Tone:** [3 adjectives — e.g. "helpful, crusty, no-fluff"]

**Structure (in this order):**
1. The community name and one sentence of what happens here. Sign-in and
   join links visible but not shouting.
2. Category index: name, description, topic count, last activity. As a table
   or list — scannable, not a card grid.
3. Latest activity: recent threads with titles, authors, reply counts, time
   stamps. Real-looking thread titles from the actual topic area.
4. Pinned threads and announcements, clearly separated from the flood.
5. The rules — short, plain, visible without a click. ("Be kind" is not a
   rule; "no buying/selling outside the classifieds" is.)
6. How joining works: what a guest can see, what an account unlocks.
7. Moderator list with names. A community with invisible moderators reads
   as abandoned.

**Rules:**
- The homepage is an index, not a marketing page. It should look like a
  place people use, not a pitch for a place people might use.
- Thread titles are real examples from the topic — write them like actual
  posts ("Soldering iron tip tinned but won't wet — what's the trick?").
- Activity numbers are plausible and consistent (last-post times that agree
  with reply counts).
- Empty states are designed: a category with zero threads says what to post,
  not "No content yet".
- No marketing hero, no "join the conversation" stock photo, no testimonial
  slider.
- Copy ban: "vibrant community", "like-minded individuals", "engage",
  "foster", "vibrant".

Do NOT build: a centered hero with badge + headline + two buttons; three equal
feature cards; a purple/blue gradient; Inter as the body font. If the output
resembles a template, redesign it before showing me.

Before writing code, tell me: your one-sentence design read, the DNA you chose
and why the runner-up loses, your dial settings, and the page's one
distinctive choice.
