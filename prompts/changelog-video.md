<!--tz-meta {"id":"changelog-video","title":"Video changelog page","file":"prompts/changelog-video.md","description":"Release notes as short videos: latest episode hero, episode archive, transcripts, subscribe."} -->
# Prompt: Video changelog page

Copy everything below the line into your AI builder (v0, Lovable, Replit,
Cursor, Claude, ChatGPT). Fill in the [BRACKETS] first.

---

Use https://github.com/rawmware/TZ-taste as a reference. Follow its AGENT.md
protocol: state your design read in one sentence, pick exactly ONE style DNA
from styles/index.json, and obey skill/SKILL.md (set VARIANCE/MOTION/DENSITY
dials, zero slop-blocklist violations).

Build a video-first changelog page for [PRODUCT NAME] — each release is a
short video episode, not a wall of text.

- **Product + release cadence:** [e.g. "weekly shipping, episodes every Friday"]
- **Latest episode:** [version number, 3 headline changes, runtime]
- **Audience:** [who watches — e.g. "power users who read every release note"]
- **Feeling:** [3 adjectives — e.g. "energetic, insider, precise"]
- **Sections:** latest episode hero (player, chapter list, transcript toggle) →
  episode archive (filterable by version/tag) → "what changed" text digest per
  episode → subscribe (RSS/email/YouTube) → footer
- **Constraints:** [stack, e.g. "React + Tailwind"]; real copy, no lorem ipsum;
  renders clean at 1440/768/390; respects prefers-reduced-motion; WCAG AA contrast.

Do NOT build: autoplay with sound; a generic blog grid of equal cards; episode
thumbnails that are all the same template; a purple/blue gradient; Inter as the
body font. Every episode must have a real transcript — video-only changelogs
exclude too many users.

Before writing code, tell me: your one-sentence design read, the DNA you chose
and why the runner-up loses, your dial settings, and the page's one
distinctive choice.
