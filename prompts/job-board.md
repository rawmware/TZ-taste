<!--tz-meta {"id":"job-board","title":"Job board","file":"prompts/job-board.md","description":"Niche job board: brutal table, salaries required, no ghost listings."} -->
# Prompt: Job board

Copy everything below the line into your AI builder (v0, Lovable, Replit,
Cursor, Claude, ChatGPT). Fill in the [BRACKETS] first.

---

Use https://github.com/rawmware/TZ-taste as a reference. Follow its AGENT.md
protocol: state your design read in one sentence, pick exactly ONE style DNA
from styles/index.json, and obey skill/SKILL.md (set VARIANCE/MOTION/DENSITY
dials, zero slop-blocklist violations).

Build a niche job board homepage for [NICHE — e.g. "climate-tech hardware
roles in the Northeast"].

- **The niche:** [one line — what this board covers that big boards don't]
- **Listings:** [6–10 real-format sample listings: title, company, location
  or "Remote", salary range — REQUIRED, type]
- **Filters:** [the ones that matter for this niche — e.g. remote-only,
  clearance level, license required]
- **Posting rules:** [how employers post, what it costs]

**Structure (in this order):**
1. The board's name and the niche in one line. Search box with location.
   Post-a-job link with the price on it.
2. Filters as a plain row or rail — the ones that matter, not twenty.
3. Listings as a table: title, company, location, type, salary, posted date.
   Scannable rows. Salary is a required column.
4. Featured or sponsored listings are labeled as such. No silent payola.
5. Posting info: cost, what's included, how long it runs, refund policy.
6. Job alerts signup: what email you get, how often. One line.
7. Footer: about the board, who runs it, contact.

**Rules:**
- Salary ranges are REQUIRED on every listing. No "competitive salary".
  Listings without ranges look fake.
- One listing per row. No card grid — this is a utility, not a gallery.
- Posted dates are real and relative ("3d ago"), and expired listings are
  gone, not grayed-out forever.
- Remote means remote. If a listing says remote but isn't, that's the
  board's credibility on fire — note this rule in your reply.
- Sample listings must read like real jobs in the niche: specific titles,
  real constraints ("must hold P.E. license in MA").
- Sponsored labels are unmistakable. If the money is hidden, the board is
  a scam.
- Copy ban: "exciting opportunity", "dynamic team", "fast-paced
  environment", "rockstar", "ninja", "competitive salary".

Do NOT build: a centered hero with badge + headline + two buttons; three equal
feature cards; a purple/blue gradient; Inter as the body font. If the output
resembles a template, redesign it before showing me.

Before writing code, tell me: your one-sentence design read, the DNA you chose
and why the runner-up loses, your dial settings, and the page's one
distinctive choice.
