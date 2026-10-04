<!--tz-meta {"id":"contact-page","title":"Contact page","file":"prompts/contact-page.md","description":"Contact page with a form that states what happens next."} -->
# Prompt: Contact page

Copy everything below the line into your AI builder (v0, Lovable, Replit,
Cursor, Claude, ChatGPT). Fill in the [BRACKETS] first.

---

Use https://github.com/rawmware/TZ-taste as a reference. Follow its AGENT.md
protocol: state your design read in one sentence, pick exactly ONE style DNA
from styles/index.json, and obey skill/SKILL.md (set VARIANCE/MOTION/DENSITY
dials, zero slop-blocklist violations).

Build a contact page for [COMPANY NAME].

- **Who should write:** [the audience, e.g. "small museums, not startups"]
- **Who should NOT write:** [who gets turned away — say it plainly]
- **Response promise:** [e.g. "Every note gets a human reply within 2
  business days, usually faster"]
- **Other channels:** [email, phone, address — real ones only]

**Structure (in this order):**
1. A headline that says who this page is for.
2. The form: name, email, what it's about (a short dropdown of real topics),
   message. Keep it to one message field, not three.
3. Directly under the form, the response promise — what happens after they
   hit send, in one sentence.
4. The other channels: email as a mailto, phone as a tel link, address as
   plain text. Real details only; if there's no phone number, don't show a
   phone row.
5. Office hours or availability if they matter. Skip them if they don't.

**Rules:**
- The form is not a floating card on a gradient void. Ground it in the page's
  layout — side-by-side with info, or full-width with rhythm.
- The submit button says what happens: "Send the note", not "Submit".
- Include a confirmation state design: what the user sees after sending,
  including the honest timeline.
- Validate inline; error copy is specific ("That email looks off — try
  again") not red-only.
- No map embed of the whole country with a pin. An address line is enough.
- Copy ban: "We'd love to hear from you", "Don't hesitate to reach out",
  "Our team will be in touch shortly".

Do NOT build: a centered hero with badge + headline + two buttons; three equal
feature cards; a purple/blue gradient; Inter as the body font. If the output
resembles a template, redesign it before showing me.

Before writing code, tell me: your one-sentence design read, the DNA you chose
and why the runner-up loses, your dial settings, and the page's one
distinctive choice.
