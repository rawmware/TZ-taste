<!--tz-meta {"id":"mobile-app-onboarding","title":"Mobile app onboarding","file":"prompts/mobile-app-onboarding.md","description":"First-run flow: one job per screen, value before signup, permissions asked with context."} -->

# Prompt: Mobile app onboarding

Copy everything below the line into your AI builder (v0, Lovable, Replit, Cursor, Claude, ChatGPT). Fill in the [BRACKETS] first.

---

Use https://github.com/rawmware/TZ-taste as a reference. Follow its AGENT.md protocol: state your design read in one sentence, pick exactly ONE style DNA from styles/index.json, and obey skill/SKILL.md (set VARIANCE/MOTION/DENSITY dials, zero slop-blocklist violations).

Design the first-run onboarding flow for [APP NAME], a [TYPE OF APP] for [USER].

- **One job per screen:** 3–5 screens max, each screen does exactly one thing — [e.g. "pick a goal", "grant location", "create profile"]. Say the job of each screen in its heading.
- **Value before signup:** the user sees something real and useful before any account wall. Defer email/password to the moment the account protects something they made.
- **Permission priming:** explain why you need [PERMISSION] in plain words on the screen *before* the system dialog fires. If they decline, the app still works — show the degraded path.
- **Honest progress:** progress indicators reflect real steps, not marketing slides. Skip links exist and don't guilt-trip.
- **Collect the minimum:** every field must justify itself. Ask for [FIELD 1], [FIELD 2] — nothing else. Explain each field's purpose in microcopy.
- **First-run payoff:** the last screen lands on a real, personalized starting state — [e.g. "your first project pre-loaded"] — not an empty home screen.
- **State restoration:** if the app is killed mid-flow, the user returns to where they left off — never restarted from screen one.
- **Motion with a job:** transitions under 300ms that explain the next step (a card sliding into its home). Motion decorates nothing.
- **Tone check:** read the whole flow out loud once. Any screen that sounds like a pitch deck gets rewritten as instructions.
- **Constraints:** framed at 390 with native platform conventions respected; spot-check 768/1440; real copy, no lorem ipsum; respects prefers-reduced-motion; WCAG AA contrast.

Do NOT build: three identical illustration slides with dots and a "Get started" button; a "Welcome to [App]!" opener; stock flat illustrations; permission dialogs fired with zero context; a forced account wall before anything useful. If the flow could be any app's onboarding, redesign it before showing me.

Before writing code, tell me: your one-sentence design read, the DNA you chose and why the runner-up loses, your dial settings, and the flow's one distinctive choice.
