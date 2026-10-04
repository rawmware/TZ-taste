<!--tz-meta {"id":"ai-chat-widget","title":"AI chat widget","file":"prompts/ai-chat-widget.md","description":"Embeddable AI chat widget UI: launcher, panel, streaming, suggested prompts, human handoff."} -->
# Prompt: AI chat widget

Copy everything below the line into your AI builder (v0, Lovable, Replit,
Cursor, Claude, ChatGPT). Fill in the [BRACKETS] first.

---

Use https://github.com/rawmware/TZ-taste as a reference. Follow its AGENT.md
protocol: state your design read in one sentence, pick exactly ONE style DNA
from styles/index.json, and obey skill/SKILL.md (set VARIANCE/MOTION/DENSITY
dials, zero slop-blocklist violations).

Build an embeddable AI chat widget for [PRODUCT/COMPANY] — the floating
launcher + chat panel that lives on [site type].

- **The bot's job:** [one sentence — e.g. "answer pricing and plan questions, book demos"]
- **Audience:** [who chats — e.g. "evaluators comparing us to competitors"]
- **Feeling:** [3 adjectives — e.g. "helpful, quick, honest about limits"]
- **Sections (widget anatomy):** launcher button (unread badge, online state) →
  panel header (bot name, "typically replies instantly", close/minimize) →
  suggested prompts (3–4 real starters) → message thread (streaming response,
  sources/citations, feedback thumbs) → composer (attach, send, character
  hint) → human handoff (when the bot can't answer: name/email → "a human
  replies within [X]") → closed state → mobile full-screen takeover
- **Constraints:** [stack, e.g. "React + Tailwind"]; real copy, no lorem ipsum;
  renders clean at 1440/768/390; respects prefers-reduced-motion; WCAG AA contrast.

Do NOT build: a bot that pretends to be human; fake typing delays that waste
time; suggested prompts that lead nowhere; no way to reach a human; a
purple/blue gradient; Inter as the body font. The widget must say it's AI in
the header, cite sources for factual claims, and offer the human handoff
before the third failed answer — not after the tenth.

Before writing code, tell me: your one-sentence design read, the DNA you chose
and why the runner-up loses, your dial settings, and the page's one
distinctive choice.
