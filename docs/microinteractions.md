<!--tz-meta {"id":"microinteractions","title":"Microinteractions","file":"docs/microinteractions.md","description":"The anatomy of a microinteraction: trigger to feedback, honest durations, the five zones that matter, and the reduced-motion contract."} -->
# Microinteractions

A microinteraction is one trigger, one feedback, under a second. Button
press → the button confirms it was pressed. Toggle → the state visibly
changes. That's the whole form. Everything else is decoration arguing with
the user.

The slop version: every element fades up on scroll, buttons scale on hover,
cards tilt toward the cursor — motion that's performing "modern" instead of
answering a question the user asked. SKILL.md's motion rule applies double
here: motion explains *or* delights, never both at once, never neither.

## Anatomy: trigger → rule → feedback

Every microinteraction you ship should be describable in one line:

| Trigger | Rule | Feedback |
|---|---|---|
| Pointer enters button | 150ms, `cubic-bezier(0.22,1,0.36,1)` | Background shifts one token step darker |
| Toggle flipped | 200ms | Knob translates, track color swaps, label updates |
| Form field focused | 120ms | Border goes accent, label floats or bolds |
| Action completes | Immediate | Toast or inline confirmation ≤3s |
| Data loading | After 300ms delay | Skeleton or spinner (never before 300ms — flicker is worse than waiting) |

The 300ms loading rule deserves emphasis: showing a spinner for a 120ms
fetch creates *more* perceived slowness than showing nothing. Delay all
loading indicators by 300ms; if the data arrives first, the user never knew
there was a wait.

## Durations, honest numbers

- **Hover:** 120–150ms. Anything longer feels laggy; anything shorter feels
  accidental.
- **Toggle/switch:** 180–220ms. The eye needs to track the knob.
- **Panel open (accordion, disclosure):** 200–280ms, ease-out.
- **Toast in/out:** 200ms in, auto-dismiss at 3–5s, 150ms out.
- **Page/section entrance:** stagger 60–90ms per child, total under 800ms.
- **Never:** anything over 500ms for a UI response. Cinematic transitions
  belong on marketing pages (MOTION 8+), not in app chrome.

## The five zones that matter

If you only polish five things, polish these — they're the interactions
users repeat hundreds of times:

1. **Primary button press.** Active state must be visible within one frame
   of pointerdown (not click). Users who can't feel the press will press
   twice.
2. **Toggles and checkboxes.** The state change must be unambiguous at a
   glance — color *and* position *and* label, never color alone.
3. **Input focus.** The focused field is the single most important element
   on screen. Border, ring, or background shift — pick one, make it
   unmistakable.
4. **Copy-to-clipboard.** The highest-frequency delight in technical UIs.
   Feedback: icon swaps to check, label says "Copied" for 2s, then reverts.
   No toast needed.
5. **Destructive confirm.** The interaction should *slow the user down*:
   require typing the name, or a two-step press-and-hold. Friction here is
   the feature.

## Honesty rules

- **Don't animate fake progress.** A progress bar that moves on a timer
  while nothing measurable happens is lying. If you can't measure it, use
  an indeterminate indicator.
- **Don't confirm what didn't happen.** "Saved!" before the write
  completes is a bug report waiting to happen. Confirm on acknowledgment,
  or say "Saving…" honestly.
- **Don't punish with motion.** Shake-on-error is fine once; shaking the
  whole form on every keystroke is harassment.
- **Reduced motion is a contract, not a preference.** With
  `prefers-reduced-motion`, kill transforms and transitions — keep opacity
  changes ≤150ms and instant state swaps. The information must survive;
  the choreography doesn't.

## The microinteraction audit (run before ship)

- [ ] Every animation answers a user action (trigger → feedback, one line each)
- [ ] Hover ≤150ms, toggle ≤220ms, entrances total ≤800ms
- [ ] Active/pressed state visible on pointerdown for primary buttons
- [ ] Toggle state readable by color + position + label
- [ ] Loading indicators delayed 300ms; no fake progress bars
- [ ] Copy actions confirm inline ("Copied", 2s revert)
- [ ] Destructive actions add deliberate friction
- [ ] `prefers-reduced-motion` verified: information survives, motion dies
- [ ] No animation on width/height/top/left (transform + opacity only)

---

*Part of [TZ-taste](https://github.com/rawmware/TZ-taste). Companion:
docs/motion-guide.md, docs/loading-performance-ux.md, skill/SKILL.md motion rules.*
