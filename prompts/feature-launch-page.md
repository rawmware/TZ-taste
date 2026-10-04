<!--tz-meta {"id":"feature-launch-page","title":"Feature launch page","file":"prompts/feature-launch-page.md","description":"Announcement page for a new feature: what's new, who's it for, before/after, try-it path."} -->

# Prompt: Feature launch page

Copy everything below the line into your AI builder (v0, Lovable, Replit, Cursor, Claude, ChatGPT). Fill in the [BRACKETS] first.

---

Use https://github.com/rawmware/TZ-taste as a reference. Follow its AGENT.md protocol: state your design read in one sentence, pick exactly ONE style DNA from styles/index.json, and obey skill/SKILL.md (set VARIANCE/MOTION/DENSITY dials, zero slop-blocklist violations).

Build the launch announcement page for [FEATURE NAME], a new [CAPABILITY] in [PRODUCT NAME] aimed at [USER SEGMENT].

- **Lead with the change:** the first viewport states what the feature does and who it's for — no throat-clearing, no "we're thrilled to announce".
- **Before / after:** show the old workflow vs the new one side by side with [REAL EXAMPLE DATA]. The contrast is the argument.
- **Try-it path:** the shortest possible route from this page to the feature working — [e.g. "one toggle in settings", "a 90-second demo with your data"]. Every extra click you add, justify.
- **What's included, what's not:** scope stated plainly — [PLAN AVAILABILITY], limits, and anything still missing with an honest "coming next" note. No surprise paywalls discovered after signup.
- **Migration notes:** if the feature replaces or changes existing behavior, say what breaks, who it affects, and the exact steps to adapt. Link the changelog entry.
- **One quote, one number:** a single real user quote and a single real metric from [BETA / EARLY ACCESS]. Two proof points, both attributable — that's enough.
- **Rollout status, stated plainly:** [e.g. "rolling out to all workspaces this week" or "beta — request access"], with the actual timeline.
- **Docs linkage:** the page links to the real documentation for the feature — not a second marketing page.
- **Feedback loop:** one visible channel for reactions — [e.g. "reply to the announcement email", "comment thread"]. Launches that end at publish feel abandoned.
- **Constraints:** [stack, e.g. "React + Tailwind"]; real copy, no lorem ipsum; renders clean at 1440/768/390; respects prefers-reduced-motion; WCAG AA contrast.

Do NOT build: three equal feature cards; confetti or celebration graphics; hype adjectives standing in for facts ("revolutionary", "game-changing") — every claim carries a proof point; slop-blocklist jargon anywhere (see skill/SKILL.md); a purple/blue gradient; Inter as the body font; a changelog link buried in the footer. If the page celebrates more than it explains, redesign it before showing me.

Before writing code, tell me: your one-sentence design read, the DNA you chose and why the runner-up loses, your dial settings, and the page's one distinctive choice.
