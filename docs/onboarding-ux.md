<!--tz-meta {"id":"onboarding-ux","title":"Onboarding UX","file":"docs/onboarding-ux.md","description":"Value before ask: the 3-screen rule, progressive disclosure, checklists that beat tours, and empty states as onboarding."} -->
# Onboarding UX

Onboarding is not a tour. Nobody ever finished a product tour and thought
"now I understand." Onboarding is the shortest path between signup and the
first moment the product does something useful — the **time-to-value** —
with everything else deferred, hidden, or deleted.

## The 3-screen rule

Count the screens between signup and value. Each required screen costs you
completions — plan on losing a meaningful share of users per added step, so
budget screens like money:

| Screens to value | Verdict |
|---|---|
| 1 | Ideal. Signup → value on the same screen if you can manage it. |
| 2–3 | Normal. Account + one real decision (name, goal, import). |
| 4–5 | Danger zone. Every screen here needs a written justification. |
| 6+ | You're onboarding the user out of your product. Cut or defer. |

A "screen" is anything that blocks: a form page, a modal, a permissions
gate, a "tell us about yourself" quiz. Prefilled, skippable, and
deferrable steps don't count at full price — but they still cost attention,
so keep them honest.

## Value before ask

The ordering rule that fixes most onboarding: **give before you take.**
Let the user see, touch, or generate one real thing before asking for
anything the product doesn't strictly need.

- Ask for the name when personalization needs it, not on screen one.
- Ask for notifications when there's something worth notifying about —
  after the first meaningful event, not at install.
- Ask for the credit card when the trial's value is proven, not before
  the user has seen the product work.
- Ask for contacts/imports after the empty state has made the cost of
  emptiness obvious.

The test: for every field and permission, write the sentence "We need this
now because ___." If the sentence ends with "for later," defer it.

## Checklists beat tours

Product tours (coach marks, pulsing hotspots, "click here!") have miserable
completion because they teach the interface instead of the value. Replace
them:

- **Checklists** (3–5 items max) with real actions: "Import your first
  file," "Invite one teammate," "Run your first report." Each item links
  directly to the action. Checking items off is the onboarding.
- **Empty states as onboarding.** The blank dashboard is the best teacher
  you have — put the first action *in* the empty state, with one sentence
  of context. (docs/empty-states.md)
- **Progressive disclosure.** Advanced features don't get a tour; they get
  discovered. Surface them contextually — the export button appears when
  there's something to export.

Tours are only justified for genuinely novel interaction models (a canvas
tool, a gesture system). Even then: 3 steps, skippable, replayable from
settings, never auto-played twice.

## The skip contract

Every onboarding step must be skippable, and skipping must be safe:

- **Skip never breaks the product.** The user lands in a working empty
  state, not a broken half-configured one.
- **Skip is one tap, always visible.** A "Skip" link hidden in 11px gray
  text is a dark pattern, not a design.
- **Skipped steps are recoverable.** The checklist lives in settings or a
  "Get started" card until dismissed — the user who skipped on day one
  finishes on day three.

## The onboarding audit (run before ship)

- [ ] Screens from signup to first value: counted, ≤3, each justified
- [ ] Every ask has a "we need this now because ___" sentence
- [ ] Permissions requested at the moment of need, not at install
- [ ] No auto-playing product tour (or ≤3 steps, skippable, replayable)
- [ ] Empty states contain the first action + one sentence of context
- [ ] Every step skippable in one visible tap; skip lands in working state
- [ ] Skipped setup recoverable from settings or a dismissible card
- [ ] "Remind me later" exists wherever the ask isn't blocking
- [ ] Completion is measurable (instrumented funnel, not vibes)

---

*Part of [TZ-taste](https://github.com/rawmware/TZ-taste). Companion:
docs/empty-states.md, docs/designing-forms.md, docs/error-handling-ux.md.*
