<!--tz-meta {"id":"nonprofit-donate","title":"Nonprofit donate","file":"prompts/nonprofit-donate.md","description":"Donation page: concrete impact amounts, honest financials, zero guilt trips."} -->
# Prompt: Nonprofit donate

Copy everything below the line into your AI builder (v0, Lovable, Replit,
Cursor, Claude, ChatGPT). Fill in the [BRACKETS] first.

---

Use https://github.com/rawmware/TZ-taste as a reference. Follow its AGENT.md
protocol: state your design read in one sentence, pick exactly ONE style DNA
from styles/index.json, and obey skill/SKILL.md (set VARIANCE/MOTION/DENSITY
dials, zero slop-blocklist violations).

Build a donation page for [ORGANIZATION NAME].

- **The cause:** [one sentence — what they do, for whom]
- **Giving tiers:** [3–4 amounts with CONCRETE outcomes, e.g. "$40 covers
  12 hot meals" — each outcome must be real]
- **Where money goes:** [the real split, e.g. "78¢ of every dollar to
  programs, 22¢ to operations"]
- **Tax status:** [e.g. "501(c)(3), EIN 12-3456789"]
- **Other ways to give:** [monthly, mail-a-check, employer match, volunteer]

**Structure (in this order):**
1. Headline stating what the donor's money does — specific, not
   "make a difference".
2. The giving form: amount selector (real tiers + custom), one-time vs
   monthly, donor name/email. The Donate button shows the amount: "Donate
   $40".
3. Each tier's concrete outcome, right next to the amount. Vague tiers get
   cut.
4. Where the money goes: the real split, shown simply. A link to the
   annual report or 990.
5. Tax status line, one sentence.
6. Other ways to give: monthly highlighted honestly (what it funds),
   check-by-mail address, employer match note.
7. Trust signals that exist: EIN, address, contact. Nothing invented.
8. Thank-you state design: what the donor sees after giving.

**Rules:**
- Every dollar amount maps to a concrete, real outcome. "$40 covers 12
  meals" is a claim; "helps the cause" is not a tier.
- No guilt-trip imagery: no crying children stock photos, no dark overlays
  with white text. Show the work, not the suffering.
- The financial split is real and linked to a source. If you don't have
  it, the page says "ask us" — it does not invent one.
- Monthly giving is presented honestly: what it funds, how to cancel,
  cancellation in one click.
- No exit-intent popups, no "wait, before you go" overlays.
- The donate button always states the amount.
- Copy ban: "make a difference", "every little bit helps", "give hope",
  "change lives" (as the whole pitch).

Do NOT build: a centered hero with badge + headline + two buttons; three equal
feature cards; a purple/blue gradient; Inter as the body font. If the output
resembles a template, redesign it before showing me.

Before writing code, tell me: your one-sentence design read, the DNA you chose
and why the runner-up loses, your dial settings, and the page's one
distinctive choice.
