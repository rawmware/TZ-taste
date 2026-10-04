<!--tz-meta {"id":"link-in-bio","title":"Link-in-bio page","file":"prompts/link-in-bio.md","description":"Creator link hub: one-tap links, latest work up top, profile header with a point of view."} -->
# Prompt: Link-in-bio page

Copy everything below the line into your AI builder (v0, Lovable, Replit,
Cursor, Claude, ChatGPT). Fill in the [BRACKETS] first.

---

Use https://github.com/rawmware/TZ-taste as a reference. Follow its AGENT.md
protocol: state your design read in one sentence, pick exactly ONE style DNA
from styles/index.json, and obey skill/SKILL.md (set VARIANCE/MOTION/DENSITY
dials, zero slop-blocklist violations).

Build a link-in-bio page for [CREATOR NAME].

- **Who they are:** [one line — what they make, for whom]
- **The links:** [list 4–8: newest first by default, with one-line descriptions]
- **Audience:** [who taps through, and what they're hoping to find]
- **Feeling:** [3 adjectives — e.g. "playful, sharp, personal"]
- **Sections:** profile header → featured/latest → link stack → socials →
  tiny footer
- **Constraints:** [stack, e.g. "plain HTML + CSS"]; 390px-first (this lives
  on phones); real copy, no lorem ipsum; respects prefers-reduced-motion;
  WCAG AA contrast; loads fast (no framework needed — say so if vanilla wins).

Link-in-bio rules:

- The newest or most important thing sits at the top with a slightly larger
  treatment — not buried as link #6 in a uniform stack.
- Every link gets a one-line description ("My new EP — 6 tracks, out now").
  Bare URLs or mystery titles ("Click here") waste the tap.
- Max 8 links. More than that and it's a sitemap, not a bio — cut or group
  the rest under one "everything else" link.
- Profile header: photo or mark, name, and ONE line about what they do. No
  paragraph bio; that's what the about page is for.
- Social icons are recognizable brand glyphs in one consistent style (Lucide
  or Phosphor), not emoji, not mismatched brand-color blobs.
- The whole page is tappable with thumbs: generous tap targets, no hover-only
  information, nothing that requires precision.

Do NOT build: a purple/blue gradient background; Inter as the body font;
emoji as icons; twelve identical pill buttons; an "About me" essay above the
links. If the output resembles a template, redesign it before showing me.

Before writing code, tell me: your one-sentence design read, the DNA you chose
and why the runner-up loses, your dial settings, and the page's one
distinctive choice.
