<!--tz-meta {"id":"working-with-agents","title":"Working with Agents","file":"docs/working-with-agents.md","description":"How to brief an AI well, the one-liner, iteration loops, review mode, when to take over."} -->
# Working with Agents

TZ-taste exists because AI agents build most of the web now, and undirected
agents build slop. This doc is for the human on the other side: how to brief
an agent so the output has taste, how to run the iteration loop, and when to
stop prompting and take the wheel.

## The core insight

An agent doesn't have taste — it has *perfect obedience to instructions*
(TASTE-GUIDE.md). Every slop default (Inter, purple gradient, three cards)
is what the model produces when the brief contains no decision. Your job as
the human is not to "be creative at the AI." Your job is to **make the
decisions the model can't make**, then let it execute them flawlessly.

Concretely: the agent needs four things before it writes a line of code
(AGENT.md pre-flight). If your brief doesn't contain them, the agent will
invent them — and invented decisions are always the statistical average.

1. The one-sentence design read (audience + feeling + goal).
2. The style DNA — and why the runner-up loses (DECISION-MATRIX.md).
3. The page's one distinctive choice.
4. Dial settings: VARIANCE / MOTION / DENSITY.

## The brief template

Paste this, filled in, instead of "build me a landing page":

```
Build: [what it is, one line]
Audience: [who, specifically — "funded SaaS founders" beats "users"]
Feeling: [three adjectives — "warm, loud, honest"]
Goal: [the ONE conversion — "book a table", "start a trial"]
DNA: [one TZ-taste DNA + why the runner-up loses]
Distinctive choice: [the one weird thing — "reservation as a torn ticket stub"]
Dials: VARIANCE x / MOTION x / DENSITY x
Content: [real copy, real names, real numbers — or "write it, I'll correct"]
Don't: [explicit bans — "no purple gradients, no stock hero, no emoji icons"]
```

The `Don't` line matters more than people think. Agents are excellent at
obeying negative constraints — "never use Inter" works better than "use good
typography." Load the Don't line with your personal slop triggers.

**The one-liner** (for when you're in a hurry):

> "Use https://github.com/rawmware/TZ-taste as a reference to build: [brief].
> DNA: [pick]. Dials: [V/M/D]. Run the AGENT.md pre-flight out loud first."

The one-liner works because TZ-taste carries the decisions the brief skips:
the slop blocklist, the token schema, the type rules. It's a compressed
senior designer.

## The iteration loop

Don't ask for the whole page at once. Slop compounds — a bad hero decision
in round one infects every section after it. Run the loop:

**Round 1 — Structure.** "Build the page skeleton: sections, hierarchy, and
real copy. No styling beyond the DNA tokens. I want to approve the *decisions*
before the *decoration*." Review: does the composition avoid the template
hero? Is there one focal point per viewport? Is the copy specific?

**Round 2 — DNA application.** "Apply [DNA] fully: tokens, type pairing,
spacing scale. Self-review against ANTI-SLOP.md and report the score."
Review: do all values resolve to tokens? (Ask for the grep.) Is there
exactly one distinctive choice?

**Round 3 — Polish.** "Refine: optical spacing, hover states, motion per the
MOTION dial, reduced-motion support." Review at 390px and 1440px.

**Round 4 — Ship.** "Run docs/shipping-checklist.md and report every check."

Rules for the loop:

- **One round, one concern.** "Fix the hero AND make the form prettier AND
  add dark mode" produces three mediocre fixes. Sequence them.
- **Never accept the first draft of copy.** Agent copy is grammatically
  perfect and completely forgettable. Rewrite headlines yourself, or prompt:
  "Rewrite every headline as a claim or a question. No buzzwords." Then still
  rewrite them yourself.
- **Ask for the self-review explicitly.** "Audit this against ANTI-SLOP.md,
  item by item, and tell me your score." Agents that must *cite item numbers*
  catch things that "does this look good?" never surfaces.
- **Screenshot rounds.** Have the agent render and screenshot at 1440/768/390
  between rounds. You review images, not code — code review doesn't catch
  taste failures.

## Review mode: how to critique agent output

Vague feedback produces vague revisions. "Make it pop" is how you get a
purple gradient. Critique like this:

| Instead of | Say |
|---|---|
| "It looks generic" | "ANTI-SLOP #2 — those three cards. Replace with [specific alternative]." |
| "Make it more premium" | "Switch DNA to dark-luxe, increase section padding one level, thin the type." |
| "The hero is boring" | "Change the composition: offset the headline left, full-bleed type, image right third." |
| "I don't like the colors" | "The accent is used 12 times — ration it to the CTA and active states only." |
| "Make it pop" | Banned. Describe the actual change: size, position, color, or motion. |

**Reference the checklist by number.** "ANTI-SLOP #7" is a complete,
actionable critique. "It looks AI-generated" is an insult that teaches
nothing. The checklist exists so feedback can be precise.

**The three-question review** (for when you're tired):

1. What's the one thing this page wants me to do? (If unclear → hierarchy
   failure.)
2. What would I remember tomorrow? (If nothing → no distinctive choice.)
3. What would I delete? (If lots → subtraction round needed.)

## When to take over

Agents have a ceiling. Recognize it early — the loop should converge, and
when it stops converging, you're burning tokens on taste the model can't
reach.

**Take over when:**

- **You've prompted the same fix three times.** The model can't see what
  you see. Open the file, move the thing, done in 30 seconds.
- **It's copy.** You will always write better headlines than the agent.
  Always. Budget your time accordingly — the agent builds the page, you
  write the words.
- **It's the one weird thing.** The distinctive choice is the most human
  part of the page. Agents can *execute* a weird thing you specify; they
  can't *invent* one that feels inevitable. The ticket stub, the marquee,
  the brutal table — that's your call.
- **It's optical.** The 1–2px nudges, the "this shade is slightly off"
  feelings, the "it needs more air *here*" — these are eye judgments.
  Describe them if you can; just fix them if you can't.
- **The DNA is wrong.** If ANTI-SLOP review keeps surfacing warnings no
  patch fixes, the brief-to-DNA routing failed (DECISION-MATRIX.md
  anti-patterns). Re-pick the DNA yourself — don't ask the agent to
  "make it work."

**Don't take over:**

- Token plumbing, responsive breakpoints, config wiring — the agent is
  faster and makes fewer typos.
- Checklist audits — the agent is *more* thorough than you at grep-based
  verification.
- Repetitive application — "apply the new spacing scale to all sections" is
  exactly what agents are for.

## Briefing anti-patterns (what not to do)

**"Make it modern and clean."** The two most averaged words in design
briefs. Every model maps "modern + clean" to soft-minimal-with-Inter —
which is how we got here. Replace adjectives with decisions: name the DNA,
set the dials, describe the feeling in three *specific* words ("warm, loud,
honest" beats "modern, clean, professional").

**The 40-line mega-brief.** A brief that specifies every section, every
color, and every animation isn't a brief — it's a bad design doc the agent
will follow literally, including the bad parts. Brief the *decisions*
(DNA, dials, distinctive choice, conversion) and let the agent handle
execution. Over-specification produces obedient mediocrity.

**"Surprise me."** The agent will — with the statistical average. Surprise
requires a point of view, and the model doesn't have one. If you want
surprise, supply the weird thing yourself: "the nav is a vertical marquee
on the left edge." Now the agent has something to execute faithfully.

**Iterating on the wrong layer.** "Make the headline bigger" when the
problem is the composition; "change the colors" when the problem is the
DNA. If three rounds of polish don't fix it, the issue is structural —
revisit the pre-flight decisions (usually the DNA pick or the distinctive
choice) instead of prompting round four of tweaks.

**No reference images.** Agents can't see taste, but *you* can show them:
"like the spacing on [site], like the type attitude on [site], but in our
DNA." Two reference URLs beat two paragraphs of adjectives. (Don't ask the
agent to copy them — reference the *quality*, not the layout.)

## Multi-agent and long-horizon workflows

For big builds (multi-page sites, design systems), one conversation won't
hold it. The pattern that works:

1. **The brief doc.** Write the four pre-flight decisions + content +
   Don't-list into a file (e.g. `design-brief.md`) in the repo. Every agent
   session reads it first. Decisions survive context loss when they're
   written down.
2. **The DNA file is law.** Agents load exactly one DNA file
   (styles/index.json: "pick exactly ONE dna, load only that file"). The
   brief doc points at it. No agent re-picks mid-build without human sign-off.
3. **Checkpoints, not marathons.** Break the build into the round structure
   above (structure → DNA → polish → ship), with human review between
   rounds. A 6-hour autonomous build without checkpoints produces 6 hours
   of compounded average.
4. **The audit is automated.** ANTI-SLOP.md's greppable checks (stray hex,
   lorem, picsum, pill-radius) run in CI or as an agent self-check script.
   Humans review what can't be grepped: composition, copy, the weird thing.

## The handoff: agent → human → ship

The healthy division of labor:

- **Agent:** structure, tokens, responsiveness, checklists, repetitive
  application, first-draft everything.
- **Human:** the brief's four decisions, all copy, the one weird thing,
  optical polish, the final ANTI-SLOP judgment call.
- **Both:** the shipping checklist (agent runs it, human signs it).

A page built this way has the agent's tirelessness and the human's taste.
A page built by "just make it nice, AI" has neither.

---

*Part of [TZ-taste](https://github.com/rawmware/TZ-taste). Start every build
with AGENT.md; end every build with docs/shipping-checklist.md.*
