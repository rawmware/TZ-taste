<!--tz-meta {"id":"booking-flow","title":"Booking flow","file":"prompts/booking-flow.md","description":"Appointment booking: service picker, honest calendar UX, confirmation states, no-show policy."} -->

# Prompt: Booking flow

Copy everything below the line into your AI builder (v0, Lovable, Replit, Cursor, Claude, ChatGPT). Fill in the [BRACKETS] first.

---

Use https://github.com/rawmware/TZ-taste as a reference. Follow its AGENT.md protocol: state your design read in one sentence, pick exactly ONE style DNA from styles/index.json, and obey skill/SKILL.md (set VARIANCE/MOTION/DENSITY dials, zero slop-blocklist violations).

Build the appointment-booking flow for [BUSINESS NAME], a [TYPE OF BUSINESS] offering [SERVICES].

- **Service picker first:** [YOUR SERVICES] with plain-language descriptions, durations, and prices shown before any calendar appears. Nobody should pick a time slot for a service they don't understand.
- **Honest calendar UX:** available / unavailable / limited states are visually distinct and labeled — never clickable-then-sorry. Show [TIME ZONE] explicitly, honor buffer times between appointments, and cap how far ahead booking opens ([e.g. "60 days"]).
- **Slot selection:** list real open slots for the chosen day; when a day is full, say so and suggest the next available day. Past times never render as selectable.
- **Minimum viable form:** name, contact method, and [ANYTHING TRULY REQUIRED]. Every extra field must justify itself in microcopy — "so we can text you the address" beats a bare required phone number.
- **Review + confirmation:** a review screen summarizing service, date, time, price, and location before the final tap. Confirmation screen states exactly what happens next: [e.g. "confirmation text in 2 minutes, reminder 24 hours before"].
- **Reschedule / cancel:** both are one tap from the confirmation, with the real policy stated kindly — [e.g. "free until 24 hours before"]. No-show handling is documented, not sprung on people.
- **Confirmation email copy:** write the actual email — subject line, what to bring, where to go, how to reach you. The flow isn't done until this exists.
- **Waitlist, not a dead end:** when nothing is available, offer a waitlist with stated position and notification method.
- **Add-ons once:** [e.g. "add 30 minutes", "extra service"] offered a single time, on the review screen — never surprise upsells mid-flow.
- **Time you can hear:** date/time pickers fully keyboard operable, times read as text — never color-coded dots with no labels.
- **Constraints:** [stack, e.g. "React + Tailwind"]; real copy, no lorem ipsum; renders clean at 1440/768/390; respects prefers-reduced-motion; WCAG AA contrast.

Do NOT build: a calendar grid where every day looks bookable; a required phone field with no explanation; hidden fees revealed at the last step; no confirmation state — just a spinner and hope; slop-blocklist jargon in the copy (see skill/SKILL.md). If a user could book the wrong service at the wrong time and not know it, redesign it before showing me.

Before writing code, tell me: your one-sentence design read, the DNA you chose and why the runner-up loses, your dial settings, and the flow's one distinctive choice.
