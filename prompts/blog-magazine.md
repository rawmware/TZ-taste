<!--tz-meta {"id":"blog-magazine","title":"Blog / magazine","file":"prompts/blog-magazine.md","description":"Editorial homepage plus article template: reading-first typography, real bylines, archive discipline."} -->
# Prompt: Blog / magazine

Copy everything below the line into your AI builder (v0, Lovable, Replit,
Cursor, Claude, ChatGPT). Fill in the [BRACKETS] first.

---

Use https://github.com/rawmware/TZ-taste as a reference. Follow its AGENT.md
protocol: state your design read in one sentence, pick exactly ONE style DNA
from styles/index.json, and obey skill/SKILL.md (set VARIANCE/MOTION/DENSITY
dials, zero slop-blocklist violations).

Build an editorial homepage plus article template for [PUBLICATION NAME].

- **What it covers:** [beat in one sentence — what readers come here to think about]
- **Audience:** [who reads it, and what they already read]
- **Feeling:** [3 adjectives — e.g. "sharp, literary, opinionated"]
- **Cadence:** [how often pieces publish — this drives archive design]
- **Primary goal:** [read the featured piece / subscribe]
- **Pages:** homepage → article template → archive/index → about → footer
- **Constraints:** [stack, e.g. "Astro + Tailwind"]; real headlines and
  excerpts, no lorem ipsum; renders clean at 1440/768/390; respects
  prefers-reduced-motion; WCAG AA contrast.

Editorial rules:

- The homepage leads with ONE story: oversized headline, one strong image or
  none, a two-line standfirst that earns the click. The rest of the grid is
  deliberately quieter — hierarchy, not a tile farm.
- Article template: 45–75 characters per line, generous leading, drop cap
  optional but only if the DNA earns it. Pull quotes pull from the actual
  article text, not decoration.
- Every piece has a real byline, date, and reading time. Anonymous "Admin"
  authors and "January 1, 1970" dates are banned.
- Homepage shows at most 6–8 stories above the fold of scrolling. The archive
  page carries the weight: grouped by month or topic, scannable in seconds.
- Subscribe appears once, written plainly ("One email a week. Unsubscribe
  anytime."), not as three competing popups and a slide-in.
- Category labels are specific to the publication ("Field notes", "Repairs")
  — never "Category 1" or generic "Blog".

Do NOT build: a centered hero with badge + headline + two buttons; three equal
feature cards; a purple/blue gradient; Inter as the body font; a stock photo
of a laptop with a dark overlay. If the output resembles a template, redesign
it before showing me.

Before writing code, tell me: your one-sentence design read, the DNA you chose
and why the runner-up loses, your dial settings, and the site's one
distinctive choice.
