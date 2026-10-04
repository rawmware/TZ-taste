<!--tz-meta {"id":"api-docs","title":"API docs","file":"prompts/api-docs.md","description":"API docs landing: copy-paste quickstart, real code, sidebar that reads like a map."} -->
# Prompt: API docs

Copy everything below the line into your AI builder (v0, Lovable, Replit,
Cursor, Claude, ChatGPT). Fill in the [BRACKETS] first.

---

Use https://github.com/rawmware/TZ-taste as a reference. Follow its AGENT.md
protocol: state your design read in one sentence, pick exactly ONE style DNA
from styles/index.json, and obey skill/SKILL.md (set VARIANCE/MOTION/DENSITY
dials, zero slop-blocklist violations).

Build an API documentation landing page for [API NAME].

- **What it does:** [one sentence a developer would understand]
- **Quickstart endpoint:** [the real first call a developer makes]
- **Auth:** [how auth works — API key, OAuth — exact]
- **Code languages:** [the 2–3 languages to show, e.g. curl, Python, JS]

**Structure (in this order):**
1. Name, one-sentence description, base URL. "Get started" and "API
   reference" links — the only two buttons that matter here.
2. Quickstart: install → authenticate → first request → first response.
   Real code in the actual languages, copy button on every block.
3. Authentication section: where the key goes, how to get one, rotation.
   Exact, no "contact sales for credentials".
4. Core resources: one page-per-resource pattern — endpoint, parameters
   table (name, type, required, description), example request, example
   response.
5. Error reference: status codes with the real error bodies, and what each
   one means in plain words.
6. Rate limits and quotas: numbers, headers, what happens when you hit them.
7. Changelog: latest changes first, dated.
8. Sidebar nav for the whole thing — it should read like a map, not a
   sitemap. Footer with status page link.

**Rules:**
- Every code sample is complete and copy-pasteable: real endpoints, real
  headers, no `YOUR_API_KEY` without showing where to get it. Placeholder
  tokens are marked as such.
- Code blocks have language labels and copy buttons. Syntax is highlighted
  for real, not color-sprayed.
- Parameter tables, not paragraphs. One table per endpoint.
- Errors show the actual JSON the API returns, then the fix in words.
- No marketing copy in docs. The quickstart's job is a working request in
  under five minutes — state that goal.
- Version the docs: the version number is visible on every page.
- Copy ban: "powerful", "robust", "seamless", "simply" (in instructions),
  "cutting-edge".

Do NOT build: a centered hero with badge + headline + two buttons; three equal
feature cards; a purple/blue gradient; Inter as the body font. If the output
resembles a template, redesign it before showing me.

Before writing code, tell me: your one-sentence design read, the DNA you chose
and why the runner-up loses, your dial settings, and the page's one
distinctive choice.
