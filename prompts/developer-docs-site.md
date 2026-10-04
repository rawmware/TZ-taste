<!--tz-meta {"id":"developer-docs-site","title":"Developer docs site","file":"prompts/developer-docs-site.md","description":"Docs for developers: quickstart above the fold, working code samples, search-first, honest error docs."} -->

# Prompt: Developer docs site

Copy everything below the line into your AI builder (v0, Lovable, Replit, Cursor, Claude, ChatGPT). Fill in the [BRACKETS] first.

---

Use https://github.com/rawmware/TZ-taste as a reference. Follow its AGENT.md protocol: state your design read in one sentence, pick exactly ONE style DNA from styles/index.json, and obey skill/SKILL.md (set VARIANCE/MOTION/DENSITY dials, zero slop-blocklist violations).

Build the documentation site for [API / SDK NAME], a [WHAT IT DOES] with [LANGUAGE] SDKs.

- **Quickstart above the fold:** a working hello-world in [PRIMARY LANGUAGE] copy-pasteable in under 2 minutes, including install, auth, and a real response. No "read the concepts page first".
- **Information architecture:** Getting started → Core concepts → Guides (task-based) → API reference → Errors → Changelog. Every guide is named for a task ("Send your first [THING]"), not a feature.
- **Code samples that run:** every snippet is complete, uses real method names, and shows the expected output. Mark [PLACEHOLDER VALUES] clearly — never fake tokens like `sk-test-1234` presented as real.
- **Search-first:** search input in the header, keyboard shortcut stated ([e.g. "⌘K"]), and a "most searched" list on the empty state built from [YOUR TOPICS].
- **Errors documented honestly:** an error catalog with the actual status codes, what each means in plain words, and how to fix it. Rate limits get their own page with the real numbers.
- **Copy-paste fidelity:** every code block gets a copy button that grabs exactly what compiles — no `$` prompts, no line numbers in the copied text.
- **Auth on one page:** every auth method on a single page, with a test-it-now curl block that returns a real 200 against the sandbox.
- **SDK parity notes:** where SDKs differ, the page says so inline — never silently present one language's behavior as universal.
- **Version switcher:** current version labeled, changelog linked per version, deprecated endpoints marked with migration paths — not silent removals.
- **Constraints:** [stack, e.g. "Next.js + Tailwind"]; real copy, no lorem ipsum; renders clean at 1440/768/390; respects prefers-reduced-motion; WCAG AA contrast. Code blocks scroll horizontally at 390, never wrap mid-token.

Do NOT build: a marketing hero on the docs homepage; auto-generated reference pages with no prose; a sidebar that buries the quickstart three levels deep; slop-blocklist jargon anywhere (see skill/SKILL.md); code samples that wouldn't compile. If it reads like generated API output with a theme, redesign it before showing me.

Before writing code, tell me: your one-sentence design read, the DNA you chose and why the runner-up loses, your dial settings, and the site's one distinctive choice.
