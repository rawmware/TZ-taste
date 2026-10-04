<!--tz-meta {"id":"designing-forms","title":"Designing Forms","file":"docs/designing-forms.md","description":"Labels, error states, input styling per DNA, multi-step flows, validation copy."} -->
# Designing Forms

Forms are where taste goes to die. They're also where conversions live, so
the death matters. Most AI-generated forms share a look — rounded gray
inputs, floating labels that collide, red error text that appears from
nowhere — because the model copies the same three component libraries.
Here's how to make forms feel decided instead of defaulted.

## The non-negotiables

1. **Labels are always visible.** Placeholder-as-label is a usability crime
   and a taste crime. The label sits above the input (or beside it in dense
   layouts), in the DNA's body font, `small` size, ink-colored — never muted
   gray, never inside the input.
2. **One column.** Multi-column forms feel efficient and convert worse. The
   exception: genuinely paired fields (first/last name, city/ZIP, card
   expiry/CVC) — and even those stack on mobile without debate.
3. **Inputs are rectangles with hairlines.** `1px` border in the DNA's `line`
   token, radius per the DNA (swiss-rational: 0; soft-minimal: 8px;
   neo-brutalist-pop: 0 with 2px border and hard shadow). Gray filled inputs
   (`#f5f5f5` boxes) read as "unconsidered SaaS" — the form equivalent of
   Inter.
4. **Focus states are designed, not defaulted.** The browser's blue outline
   is a slop tell. Focus = accent-colored border (2px) or an accent underline,
   plus a subtle surface lift. Design it per DNA (below).
5. **Buttons say what happens.** "Create account" beats "Submit." "Send
   reset link" beats "Submit." There is no form on earth where "Submit" is
   the best label (SKILL.md copy rules).

## Labels, hints, and the order of information

Vertical order inside a field block, always:

1. **Label** — "Email address"
2. **Hint** (optional, muted, small) — "We'll never share this. Unsubscribe
   anytime." Hints *above* the input, never below — below the input is where
   errors live, and mixing the two teaches users to ignore both.
3. **Input**
4. **Error** (only when invalid) — replaces the hint's slot, never coexists
   with it.

Spacing: label→input `space-2` (8px), field→field `space-6` (24px),
field-group→field-group `space-8` (32px). Related fields (password +
confirm) group at `space-4`; unrelated sections separate at `space-12`.

**Required markers:** a small accent-colored `*` or the word "required" in
micro type — not "(required)" appended to every label like a legal disclaimer.
If *most* fields are required, mark the *optional* ones instead.

## Input styling per DNA

The input is the DNA's handshake. Get it wrong and the whole form feels
imported from another site.

| DNA | Border | Radius | Background | Focus |
|---|---|---|---|---|
| swiss-rational | 1px ink, full | 0 | bg `#fafafa` | 2px accent `#e30613` underline |
| editorial-serif | 1px line `#1c1a1526` | 0 | paper `#f5f1e8` | hairline thickens to 2px ink |
| soft-minimal | 1px line `#1a1a1414` | 8px | surface `#ffffff` | accent `#5b5bd6` border + soft ring |
| industrial-brutalist | 2px ink | 0 | bg `#d8d8d4` | accent `#ff4d00` border, no ring |
| neo-brutalist-pop | 2px ink | 0–4px | surface `#ffffff` | translate(-2px,-2px), hard shadow grows |
| dark-luxe | 1px line `#ece5d822` | 0 | surface `#161411` | champagne `#c9a96a` hairline |
| retro-terminal | 1px line `#33ff6633` | 0 | surface `#0e140d` | accent `#ffb000` border + glow |
| glass-calm | 1px line `#ffffff88` | 12px | surface `#ffffff8c` + blur | accent `#7c8cf8` border |
| ma-japanese | bottom hairline only | 0 | transparent | vermilion `#a33327` underline |
| docs-solar | 1px line `#3d3a2e1f` | 4px | bg `#fdf6e3` | amber `#cb4b16` border |
| acid-rave | 1px line `#f2f2f21f` | 0 | surface `#131313` | acid `#c6ff00` border |
| y2k-chrome | 1px line `#ffffff26` | 16px | surface `#15151d` | iridescent gradient border |

Notes:

- **ma-japanese underline inputs** are beautiful and fragile — they need
  generous vertical padding (`py-3` minimum) or they feel cramped, and they
  fail at high density. Don't use them in dashboards.
- **neo-brutalist-pop focus** moves the input — that motion must respect
  `prefers-reduced-motion` (swap to border-color change only).
- **Placeholder text** is a hint, not a label: muted, and it must vanish on
  focus, not on typing. Format examples only: "jane@studio.co", never
  "Enter your email address" (that's the label's job, repeated).

## Error states

Errors are the most under-designed part of every form. Rules:

1. **Inline, at the field.** Never a toast at the top, never only on submit.
   The error lives in the error slot (below the input), in the DNA's error
   color — which should be a *real* red/orange, not the accent. retro-terminal
   uses amber `#ffb000` for warnings and a true red for errors; don't reuse
   the accent for errors in any DNA.
2. **The input border turns error-colored too.** Text alone is easy to miss;
   border + text is unmissable. Keep the focus ring error-colored while the
   field is invalid.
3. **Validate on blur, re-validate on input.** Validating on every keystroke
   punishes users mid-thought; validating only on submit wastes a round trip.
   Blur → show error; typing → clear it live.
4. **Never clear the user's input on error.** Repopulate everything. A form
   that empties itself on a failed submit is hostile.
5. **Success states are quiet.** A green check or a border settling back to
   normal. No confetti, no "Great job!" — the reward for filling a form
   correctly is the form going away.

### Validation copy: write like a human

Error messages are microcopy, and microcopy is written, not generated
(SKILL.md). The formula: **what's wrong + how to fix it, in plain words.**

| ❌ Generated | ✅ Written |
|---|---|
| "Invalid input" | "That doesn't look like an email address." |
| "Password must contain 1 uppercase, 1 number, 1 special character" | "Add one number and one symbol — you're nearly there." |
| "Field is required" | "We need your name for the reservation." |
| "Passwords do not match" | "These two don't match. Try again?" |
| "An error occurred. Please try again." | "That didn't go through — check your connection and retry." |

Banned from validation copy: "invalid," "failed," "oops," exclamation marks,
blame ("you entered"). The form made the mistake until proven otherwise —
most "user errors" are actually unclear requirements.

## Multi-step flows

Long forms convert better as steps. But steps add their own slop surface.

1. **Show progress honestly.** "Step 2 of 4" in mono micro type, plus a
   hairline progress bar in the accent color. Never a percentage ("50%
   complete" is a lie — step 2 of 4 is not half the *work*).
2. **One question per step for high-friction asks** (onboarding, applications);
   grouped sections for low-friction ones (checkout). Match the step size to
   the cognitive weight, not to an arbitrary "3 fields per step" rule.
3. **Back button always.** Every step except the first has a visible,
   working Back. Losing entered data on Back is unforgivable — persist to
   state (or localStorage) on every change.
4. **Review step before submit** for anything consequential (payments,
   applications, bookings). The review is a read-only summary with "Edit"
   links per section. This single step eliminates most support tickets.
5. **No step should ask for information you already have.** If they're logged
   in, the email field is filled. If they picked a date last step, don't ask
   again. Redundant questions are the #1 "this form feels dumb" signal.

Step transitions: a 200ms crossfade or slide, `cubic-bezier(0.22, 1, 0.36,
1)`. Nothing bouncier — the user is doing paperwork, not playing a game
(unless the DNA is neo-brutalist-pop, where a little spring is on-brand).

## Checkboxes, radios, selects, toggles

- **Checkboxes/radios:** custom-drawn per DNA (2px borders for brutalist
  DNAs, hairlines for luxe/editorial), minimum 20px hit target, label
  clickable. Native controls unstyled are a slop tell — but custom controls
  must keep native keyboard behavior and screen-reader semantics. Style the
  appearance, never rebuild the semantics.
- **Selects:** style the closed state; the open dropdown is OS-rendered and
  that's fine. For >7 options, use a searchable combobox instead of a
  40-item dropdown (country pickers, I'm looking at you).
- **Toggles:** only for immediate-effect settings (notifications on/off).
  For form data (subscribe me: yes/no), use a checkbox — toggles imply the
  action already happened.

## Form layout patterns

**Single-question flow.** One question per screen, big type, generous air.
Best for onboarding and high-consideration asks (loan applications, medical
intake). The question is set in display type; the input is large and lonely.
Progress is a mono `02 / 07`. This pattern converts best when each answer is
cognitively heavy — and worst when the questions are trivial (don't make
someone click seven times to give you their email and ZIP).

**Sectioned long form.** Grouped fieldsets with clear headings, all on one
page, anchor-linked from a side nav ("Contact → Shipping → Payment"). Best
for checkout and settings. Each section gets `space-12` separation and a
hairline rule; the side nav shows completion state per section. The review
step at the end is mandatory here.

**Inline/embedded form.** Newsletter signup in a footer, search in a nav,
a single input + button in a hero. Rules tighten: label can be
visually-hidden (but present for screen readers), the button sits *adjacent*
not below, and the whole thing must work at 320px wide. Embedded forms have
no room for hints — the placeholder carries the format example, the error
slot still exists below.

**Conversational/chat form.** The chatbot-style flow. Use sparingly — it's
slower than a real form for everything except genuinely conditional logic
("are you a business or an individual?" branching). If you use it, show a
progress indicator anyway (users distrust endless chat), and always offer
"show me the full form" as an escape hatch.

## Accessibility specifics (beyond the basics)

- **Label association is mechanical:** every input has a `<label
  for="...">` or an `aria-label`. No exceptions, no "it's obvious from
  context." Screen-reader users tab through forms linearly — context is
  exactly what they don't have.
- **Announce errors politely:** `aria-describedby` linking input to error
  text, `aria-invalid="true"` on the field. Error summaries for multi-step
  forms get `role="alert"` and move focus to the first invalid field.
- **Don't disable the submit button.** Disabled buttons give no feedback
  about *why* nothing happens — users click, nothing happens, they leave.
  Keep it enabled; validate on submit and show inline errors. (The one
  exception: double-submit prevention *during* the request, with a loading
  state.)
- **Date, tel, and number inputs:** use the right `type` and `inputmode`.
  `inputmode="numeric"` for codes and PINs (not `type="number"` — spinners
  on a 6-digit code field are absurd). `autocomplete` attributes are free
  UX (shipping-checklist covers this; it bears repeating).
- **Time limits:** if the form times out (banking, ticketing), warn at 2
  minutes remaining and offer a one-tap extend. Silent timeouts that eat
  entered data are a special circle of form hell.

## The form audit

- [ ] Every field has a visible label above the input
- [ ] Single column (paired fields excepted, stacked on mobile)
- [ ] Inputs use the DNA's border/radius/background/focus spec
- [ ] Focus state designed per DNA, no default blue outline
- [ ] Hints above inputs; errors below, never coexisting
- [ ] Errors: inline, border + text, validate on blur, input preserved
- [ ] Validation copy rewritten by a human (no "invalid input")
- [ ] Submit button says what happens
- [ ] Multi-step: honest progress, working Back, review step for consequential forms
- [ ] 44px minimum touch targets on mobile; tested with a real keyboard
- [ ] `autocomplete` attributes set (email, name, tel, address...) — free UX
- [ ] Labels programmatically associated; errors announced via aria
- [ ] Submit never disabled except mid-request with loading state

---

*Part of [TZ-taste](https://github.com/rawmware/TZ-taste). Companion:
docs/spacing-rhythm.md for field spacing, docs/icon-usage.md for field icons.*
