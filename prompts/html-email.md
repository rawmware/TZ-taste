<!--tz-meta {"id":"html-email","title":"Marketing email template","file":"prompts/html-email.md","description":"Responsive HTML email: one idea, one CTA, bulletproof buttons, dark-mode safe."} -->
# Prompt: Marketing email template

Copy everything below the line into your AI builder (v0, Lovable, Replit,
Cursor, Claude, ChatGPT). Fill in the [BRACKETS] first.

---

Use https://github.com/rawmware/TZ-taste as a reference. Follow its AGENT.md
protocol: state your design read in one sentence, pick exactly ONE style DNA
from styles/index.json, and obey skill/SKILL.md (set VARIANCE/MOTION/DENSITY
dials, zero slop-blocklist violations).

Build a responsive marketing email template for [BRAND NAME].

- **The one idea:** [the single thing this email is about — one idea per email]
- **The one CTA:** [the button text and where it goes]
- **Audience:** [who gets this, and why they opened it]
- **Feeling:** [3 adjectives — e.g. "crisp, friendly, restrained"]
- **Content blocks:** preheader → header/logo → headline → body → CTA →
  secondary link → footer (address, unsubscribe, preferences)
- **Constraints:** single column, ~600px max width; table-based layout or MJML
  (Gmail/Outlook-safe); inline CSS only; web-safe fallbacks for display type;
  images with real alt text; bulletproof buttons (not image buttons); dark-mode
  meta + safe colors; plain-text version alongside.

Email rules:

- Preheader is written, not auto-generated: it completes the subject line's
  thought in under 100 characters.
- The email works with images off: every image has alt text, and no sentence
  lives inside an image. If Gmail blocks the hero, the message survives.
- One CTA button, repeated at most twice (top and bottom for long emails).
  Three different asks in one email means zero clicks.
- Links are underlined and a real color — "click here" never appears as link
  text; the words describe the destination.
- Footer carries the physical address, a one-click unsubscribe, and a
  preferences link. No unsubscribe = no send.
- Test notes included: how it degrades in Outlook (mso conditionals), and
  what the dark-mode rendering looks like.

Do NOT build: a purple/blue gradient header; Inter as the body font; emoji as
section icons; a hero image with baked-in headline text; "Lorem ipsum" anywhere
including alt attributes. If the output resembles a template, redesign it
before showing me.

Before writing code, tell me: your one-sentence design read, the DNA you chose
and why the runner-up loses, your dial settings, and the email's one
distinctive choice.
