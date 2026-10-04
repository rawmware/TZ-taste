<!--tz-meta {"id":"changelog-page","title":"Changelog page","file":"prompts/changelog-page.md","description":"Release-notes page: reverse-chron entries, semantic labels, anchorable versions, subscribe hook."} -->
# Prompt: Changelog page

Copy everything below the line into your AI builder (v0, Lovable, Replit,
Cursor, Claude, ChatGPT). Fill in the [BRACKETS] first.

---

Use https://github.com/rawmware/TZ-taste as a reference. Follow its AGENT.md
protocol: state your design read in one sentence, pick exactly ONE style DNA
from styles/index.json, and obey skill/SKILL.md (set VARIANCE/MOTION/DENSITY
dials, zero slop-blocklist violations).

Build a changelog / release-notes page for [PRODUCT NAME].

- **Release cadence:** [e.g. weekly — this sets how entries group]
- **Audience:** [users checking what changed, and power users tracking fixes]
- **Feeling:** [3 adjectives — e.g. "tidy, candid, engineering-honest"]
- **Sections:** latest release spotlight → reverse-chron entry list →
  subscribe-to-updates → footer
- **Constraints:** [stack, e.g. "Astro + Tailwind"]; real example entries
  (write 3–4 believable ones), no lorem ipsum; renders clean at 1440/768/390;
  respects prefers-reduced-motion; WCAG AA contrast.

Changelog rules:

- Entries are reverse-chronological with version numbers, dates, and
  anchor links (#v2-4-1). People link to specific releases — make it possible.
- Each change carries a semantic label: New / Improved / Fixed / Deprecated.
  Labels are consistent, color-coded once from the DNA, and filterable.
- Entries are written for users, not commits: "Exports now include column
  headers" beats "fix: csv header regression (#4821)". No raw git log.
- Breaking changes and deprecations get a callout with a migration path or
  date — never buried mid-list.
- The subscribe control is one email field and one button ("Email me
  releases"), plus an RSS link. Changelog readers are RSS people; respect them.
- The latest release gets a slightly larger treatment (the spotlight), but
  the list format never changes shape between entries — scannability is the
  whole product here.

Do NOT build: a centered hero with badge + headline + two buttons; three equal
feature cards; a purple/blue gradient; Inter as the body font; emoji as
labels. If the output resembles a template, redesign it before showing me.

Before writing code, tell me: your one-sentence design read, the DNA you chose
and why the runner-up loses, your dial settings, and the page's one
distinctive choice.
