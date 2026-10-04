<!--tz-meta {"id":"careers-page","title":"Careers page","file":"prompts/careers-page.md","description":"Jobs page that earns applications: honest comp, real team proof, low-friction role list."} -->
# Prompt: Careers page

Copy everything below the line into your AI builder (v0, Lovable, Replit,
Cursor, Claude, ChatGPT). Fill in the [BRACKETS] first.

---

Use https://github.com/rawmware/TZ-taste as a reference. Follow its AGENT.md
protocol: state your design read in one sentence, pick exactly ONE style DNA
from styles/index.json, and obey skill/SKILL.md (set VARIANCE/MOTION/DENSITY
dials, zero slop-blocklist violations).

Build a careers / jobs page for [COMPANY NAME].

- **What the company does:** [one sentence]
- **Why work here:** [the honest pitch — what is actually good about it]
- **Open roles:** [list 3–6 real roles with team and location/remote status]
- **Audience:** [who you're hiring, and what they've been burned by before]
- **Feeling:** [3 adjectives — e.g. "straightforward, warm, ambitious"]
- **Sections:** honest pitch → how we work (location, hours, comp approach) →
  benefits → open roles → application CTA → footer
- **Constraints:** [stack, e.g. "React + Tailwind"]; real copy, no lorem ipsum;
  renders clean at 1440/768/390; respects prefers-reduced-motion; WCAG AA contrast.

Careers-page rules:

- Compensation is stated or the approach is stated ("salary bands shared in
  the first call"). A careers page with zero mention of pay reads as hiding it.
- The role list is filterable by team and location, and each role shows the
  actual job: what the person will do in their first 90 days, not a wish list
  of 14 "requirements" that describes nobody.
- "Benefits" names specifics (parental leave length, real PTO policy, equipment
  budget) — "competitive benefits" and "fast-paced environment" are banned phrases.
- Culture proof is concrete: a team photo that looks like the actual team, a
  quote from a real employee with name and role, or a written principle with
  an example. No stock photo of a diverse group laughing at a laptop.
- Applying takes one click to the application form or email — no account
  creation, no "upload your resume then retype your resume".
- If hiring is remote, say exactly how remote: time-zone overlap, async
  norms, offsite cadence. "Remote-friendly" means nothing.

Do NOT build: a centered hero with badge + headline + two buttons; three equal
perk cards; a purple/blue gradient; Inter as the body font; stock photos with
a dark overlay. If the output resembles a template, redesign it before showing
me.

Before writing code, tell me: your one-sentence design read, the DNA you chose
and why the runner-up loses, your dial settings, and the page's one
distinctive choice.
