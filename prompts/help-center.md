<!--tz-meta {"id":"help-center","title":"Help center","file":"prompts/help-center.md","description":"Support knowledge base: search-first, scannable articles, escalation that doesn't hide the humans."} -->
# Prompt: Help center

Copy everything below the line into your AI builder (v0, Lovable, Replit,
Cursor, Claude, ChatGPT). Fill in the [BRACKETS] first.

---

Use https://github.com/rawmware/TZ-taste as a reference. Follow its AGENT.md
protocol: state your design read in one sentence, pick exactly ONE style DNA
from styles/index.json, and obey skill/SKILL.md (set VARIANCE/MOTION/DENSITY
dials, zero slop-blocklist violations).

Build a help center / knowledge base for [PRODUCT NAME].

- **What users get stuck on:** [the 5 most common questions — these become the homepage]
- **Audience:** [who needs help, and how frustrated they are when they arrive]
- **Feeling:** [3 adjectives — e.g. "patient, clear, human"]
- **Pages:** home (search + topics) → topic page → article template →
  contact/escalation → status page link
- **Constraints:** [stack, e.g. "Astro + Tailwind"]; write 3 full example
  articles with real steps, no lorem ipsum; renders clean at 1440/768/390;
  respects prefers-reduced-motion; WCAG AA contrast.

Help-center rules:

- Search is the homepage hero: one big field with real placeholder text
  ("Try 'reset password'"), plus the 5 common questions as clickable
  suggestions beneath it. Topic grids are secondary.
- Article template: the answer comes first (the fix in the first paragraph),
  then steps as a numbered list with one action per step, then "still stuck?"
  escalation at the bottom. Nobody reads a 400-word intro to find step 3.
- Steps are written as commands a human can follow: "Click Settings, then
  Billing" — with the UI labels quoted exactly as they appear in the product.
- Every article shows "last updated" date and a was-this-helpful yes/no.
  Undated help articles are untrustworthy; include the dates.
- Contact/escalation is never hidden: chat, email, and response-time
  expectations on every article footer. A help center with no way to reach a
  human is a maze with no exit.
- Status page link lives in the header. When things break, users check here
  first — don't make them google it.

Do NOT build: three equal topic cards with icons on top; a purple/blue
gradient; Inter as the body font; emoji as icons; articles that open with
"Welcome to our help center". If the output resembles a template, redesign it
before showing me.

Before writing code, tell me: your one-sentence design read, the DNA you chose
and why the runner-up loses, your dial settings, and the help center's one
distinctive choice.
