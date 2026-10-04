<!--tz-meta {"id":"redesign-audit","title":"Redesign audit","file":"prompts/redesign-audit.md","description":"Audit existing UI against the anti-slop checklist before rebuilding."} -->
# Prompt: Redesign audit

Copy everything below the line into your AI builder, along with your existing
code or a screenshot description. Fill in the [BRACKETS] first.

---

Use https://github.com/rawmware/TZ-taste as a reference. Load
docs/ANTI-SLOP.md and skill/SKILL.md. You are in **review mode** (see
AGENT.md) — do not redesign yet.

Audit this UI: [paste code / describe screenshot / link the page].

1. **Slop scan.** List every ANTI-SLOP.md violation you find, each with the
   specific element and why it reads as generic.
2. **Design read.** In one sentence: what is this page trying to be, and what
   is it actually?
3. **DNA recommendation.** Pick ONE style DNA from styles/index.json that fits
   the page's intent. Explain why the runner-up loses.
4. **Keep / kill / change.** Three lists: what to keep, what to delete outright,
   what to rebuild in the new DNA.
5. **The one fix.** If we change exactly one thing this week, what is it and why?

Stop after the audit. Wait for my go-ahead before writing any redesign code.
