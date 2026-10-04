<!--tz-meta {"id":"recipe-site","title":"Recipe site","file":"prompts/recipe-site.md","description":"Recipe collection: the recipe in 10 seconds, no life story before the ingredients."} -->
# Prompt: Recipe site

Copy everything below the line into your AI builder (v0, Lovable, Replit,
Cursor, Claude, ChatGPT). Fill in the [BRACKETS] first.

---

Use https://github.com/rawmware/TZ-taste as a reference. Follow its AGENT.md
protocol: state your design read in one sentence, pick exactly ONE style DNA
from styles/index.json, and obey skill/SKILL.md (set VARIANCE/MOTION/DENSITY
dials, zero slop-blocklist violations).

Build a recipe collection homepage for [SITE NAME].

- **The point of view:** [e.g. "weeknight cooking for people who work late"]
- **Recipes:** [6–9 real-format samples: name, time, difficulty, cuisine tag]
- **Categories:** [the way this site thinks — by time, by season, by cuisine]
- **Author:** [who's cooking — one real person or collective]

**Structure (in this order):**
1. Name and one line of what this site cooks. Search box, prominent.
2. Today's pick: one featured recipe with a real photo, time and difficulty
   visible without clicking.
3. Recipe index: name, time, difficulty, tag. A list or compact grid where
   the DATA is readable at a glance — cook first, pretty second.
4. Browse by the site's real categories.
5. One featured recipe card showing the full pattern: ingredients with
   quantities, numbered steps, yield, time. This is the template every
   recipe page follows.
6. The cook behind the site: one sentence, one photo. Not an essay.
7. Newsletter: one line about what lands in the inbox and how often.
   Footer.

**Rules:**
- The recipe is reachable in one click and readable in ten seconds: time,
   difficulty, ingredients, steps — in that order, above any story.
- Ingredients list quantities in both grams and cups where it matters.
- Steps are numbered and each step is ONE action. "Sauté until done" is
   banned — done looks like what?
- No 2,000-word personal essay before the ingredients. The story goes after
   the recipe or on its own page.
- No stock food photography. One real photo per featured recipe, or a
   clean type-led card instead of a fake photo.
- Print styling: the recipe prints cleanly on one page.
- Copy ban: "mouthwatering", "to die for", "you'll love", "delicious",
   "tasty" as adjectives.

Do NOT build: a centered hero with badge + headline + two buttons; three equal
feature cards; a purple/blue gradient; Inter as the body font. If the output
resembles a template, redesign it before showing me.

Before writing code, tell me: your one-sentence design read, the DNA you chose
and why the runner-up loses, your dial settings, and the page's one
distinctive choice.
