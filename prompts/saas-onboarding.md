<!--tz-meta {"id":"saas-onboarding","title":"SaaS onboarding flow","file":"prompts/saas-onboarding.md","description":"Multi-step first-run flow: one job per screen, honest progress, skip without shame."} -->
# Prompt: SaaS onboarding flow

Copy everything below the line into your AI builder (v0, Lovable, Replit,
Cursor, Claude, ChatGPT). Fill in the [BRACKETS] first.

---

Use https://github.com/rawmware/TZ-taste as a reference. Follow its AGENT.md
protocol: state your design read in one sentence, pick exactly ONE style DNA
from styles/index.json, and obey skill/SKILL.md (set VARIANCE/MOTION/DENSITY
dials, zero slop-blocklist violations).

Build a multi-step onboarding flow for [PRODUCT NAME].

- **What the product does:** [one sentence]
- **New user:** [who they are, what they just signed up hoping to do]
- **The job:** [the ONE thing onboarding must get them to — their first win]
- **Steps:** [[N] steps max — list each step's single purpose in 5 words or less]
- **Feeling:** [3 adjectives — e.g. "reassuring, brisk, competent"]
- **Constraints:** [stack, e.g. "React + Tailwind"]; real copy, no lorem ipsum;
  renders clean at 1440/768/390; respects prefers-reduced-motion; WCAG AA
  contrast; keyboard-navigable (tab order, focus states, Enter to continue).

Onboarding rules:

- One job per screen. A step that asks for a name AND a plan AND an invite
  is three steps wearing a trench coat — split it.
- Progress is honest: a real step indicator ("2 of 4") or a proportional
  bar. Never a fake 90%-full bar on step one.
- Every step has a visible Skip (or "I'll do this later") that doesn't
  punish the user. Skipping must actually work and remember what was skipped.
- Buttons say what happens next: "Create my workspace" beats "Continue".
  Back is always available and never loses entered data.
- Collect only what the product needs to deliver the first win. Asking for
  a company size and job title before showing anything is a churn machine —
  cut every field and justify each survivor.
- The final screen shows the first win, not a dashboard tour: the thing they
  made, imported, or connected, named and real. Then one clear next action.

Do NOT build: three equal benefit cards on the welcome screen; a purple/blue
gradient; Inter as the body font; emoji as icons; a progress bar that fills
with animation alone and no real steps. If the output resembles a template,
redesign it before showing me.

Before writing code, tell me: your one-sentence design read, the DNA you chose
and why the runner-up loses, your dial settings, and the flow's one
distinctive choice. Stop for my approval on the step list before building.
