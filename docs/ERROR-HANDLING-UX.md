<!--tz-meta {"id":"error-handling-ux","title":"Error Handling UX","file":"docs/ERROR-HANDLING-UX.md","description":"Inline errors, validation timing, retries, and tone — errors that help instead of punish."} -->
# Error Handling UX

The hierarchy of error design: **prevent > explain > apologize.** The best
error message is the one that never appears — the form that can't be
submitted half-empty, the destructive action behind a confirmation, the
autosave that makes "unsaved changes" impossible. What remains after
prevention is this doc: how errors look, when they appear, what they say,
and how the user recovers.

## Validation timing: when the red appears

This is the decision most forms get wrong:

- **Validate format on blur.** Email shape, password rules, card number
  length — check when the user leaves the field. They've finished thinking;
  now you can judge.
- **Validate completeness on submit.** Required-but-empty is a submit-time
  concern, not a blur-time one. Flagging an empty field the moment it's
  focused is the form scolding the user for arriving.
- **Never validate on every keystroke** — with one exception: password
  strength meters and live character counts, which are *feedback*, not
  errors. A field turning red while the user is still typing teaches them
  the form is hostile.
- **Re-validate on change after an error is shown.** Once a field has an
  error, the user fixing it should see the error clear live — making them
  blur-and-resubmit to clear a fixed error is punitive.
- **Never show errors on load.** Red outlines on a pristine form
  (docs/COLOR-PSYCHOLOGY.md) read as accusation before the user has done
  anything.

## Inline error anatomy

Each field error has four parts, all present:

1. **Red border on the field** (2px, or border-color shift — visible
   without being the only signal).
2. **16px alert icon** left of the message — color is never the only
   signal (docs/COLOR-PSYCHOLOGY.md culture table logic applies to
   ability, too).
3. **Message in 13–14px red text** directly under the field,
   `aria-describedby` linking field to message for screen readers.
4. **The message formula: what happened + what to do.** "Enter a valid
   email, like name@example.com." Not "Invalid input." Not "Error 422."

Message rules:

- **Name the field's requirement, not the user's failure.** "Password
  needs 12+ characters" beats "Password too short" beats "Invalid input".
- **Show the fix inline when it's mechanical:** "Did you mean
  name@gmail.com?" for common domain typos. One suggestion, not a list.
- **Server errors get the same treatment.** A 409 or 422 from the API is
  translated into field-level language before the user ever sees it —
  "That email is already registered. Sign in instead?" with a link.
  Raw API errors shown to users are a bug, not an edge case.
- **On submit with errors:** scroll to the first error, focus it, and show
  an error summary at the top of the form ("3 fields need attention" with
  anchor links). The summary is for screen-reader and long-form users; the
  scroll+focus is for everyone.

## Tone: plain first, personality where it's safe

- **Payment, security, health, and data-loss errors are always plain.**
  "Your card was declined. Check the number or try another card." No jokes,
  no mascots, no "oopsie". The user's money or data is at stake; levity
  reads as not taking it seriously.
- **404s may have personality** — they're low-stakes and the user is
  already mildly amused or annoyed. One joke max, then the useful part:
  search field + home link + 2–3 likely destinations. A funny 404 with no
  navigation is just a dead end with better copy.
- **500s apologize once and offer a path:** "Something went wrong on our
  end. We're on it." + retry button + status page link + "your work is
  saved" if true. Never show a stack trace, never blame the user
  ("invalid request" for a server fault is a lie).
- **"Oops" budget: one per product.** If every error says "Oops!", none of
  them is human — it's a template. Write each error for its situation.

## Retries and transient failures

Network failures, timeouts, and rate limits are *expected*, not
exceptional. Design for them:

- **Retry button on every transient failure**, placed where the action
  was — not on a separate error page when avoidable.
- **Auto-retry with backoff: 1s, 2s, 4s — max 3 attempts**, then surface
  the manual retry. Show the attempt state ("Retrying… (2/3)") so the
  pause doesn't read as a hang.
- **Idempotency matters:** retries must be safe — disable double-submit on
  the client (button loading state, docs/CTA-DESIGN.md) and key requests
  server-side. A retry that charges twice is worse than the error.
- **Offline:** persistent, dismissible banner ("You're offline — changes
  will sync when you reconnect"), actions queue visibly. Never let the
  user do 10 minutes of work offline and discover at save time that none
  of it kept.

## Destructive actions and irreversibility

- **Confirm before destroy**, with the confirmation naming the thing:
  "Delete 'Q3 Report'?" — not "Are you sure?" The user should be able to
  verify *what* without reading anything else.
- **Type-to-confirm** for irreversible, high-blast-radius actions (delete
  account, drop database): type the name to proceed. Friction is the point.
- **Undo beats confirmation** for reversible actions: archive/delete with
  a 5-second undo toast instead of a modal. Modals for everything trains
  users to click through without reading — which defeats the destructive
  confirmations when they matter.
- **Toast duration 4–6 seconds** for undo windows; the toast must contain
  the undo action itself, not just information.

## Error pages (404 / 500 / offline)

Keep the site chrome (nav + footer) on error pages — a chromeless error
page strands the user. Contents:

- **404:** plain headline ("Page not found"), one personality line max,
  search field, home link, 2–3 suggested destinations. Log the missing URL
  — a 404 that gets hit 500 times a week is a broken link you own.
- **500:** apology, "we're on it", retry, status link. Auto-report with a
  correlation ID the user can quote to support ("Ref: 8F3K2").
- **Offline/empty-permission states** are covered in
  docs/EMPTY-STATES.md — the rule stands: name the blocker, give the step.

## Common failures

| Symptom | Cause | Fix |
|---|---|---|
| Users rage at forms | keystroke validation | validate on blur, completeness on submit |
| "Invalid input" everywhere | lazy messages | what happened + what to do, naming the requirement |
| Double charges on retry | no idempotency | disable double-submit; key requests server-side |
| Support flooded after outages | generic "error" with no path | retry + status link + correlation ID |
| Users click through deletes | modal for everything | undo toast for reversible; confirm only the irreversible |
| Red fields on page load | errors shown pre-interaction | errors appear only after blur/submit |

## Pre-ship audit

- [ ] No validation on load; format on blur, completeness on submit, never per-keystroke (except strength meters)
- [ ] Every inline error: red border + 16px icon + 13–14px message + `aria-describedby`; message = what happened + what to do
- [ ] Submit with errors: scroll to first error, focus it, summary with anchor links at top
- [ ] No raw API errors visible; server errors translated to field-level language
- [ ] Transient failures: retry button in place, auto-retry 1s/2s/4s max 3 attempts with visible attempt state
- [ ] Offline: persistent banner, actions queue visibly, no silent work loss
- [ ] Destructive: confirm naming the thing; type-to-confirm for irreversible; undo toast (4–6s) for reversible
- [ ] 404/500 keep site chrome; 500 has retry + status link + correlation ID
- [ ] Tone: plain on payment/security/data-loss; max one "oops"-style line per product
- [ ] Error text contrast ≥ 4.5:1 — red on white checked, not eyeballed (ANTI-SLOP #8)

## Per-DNA notes

- **retro-terminal:** errors as stderr — `error: invalid email format`,
  red phosphor, exit-code energy. Fits perfectly; keep messages just as
  helpful as the plain versions.
- **neo-brutalist-pop:** error box with thick red border and hard shadow —
  impossible to miss, which is the point. The visual loudness must match
  message clarity.
- **soft-minimal:** errors stay quiet — muted red text, no shaking
  animations, no red field fills. A shake animation on error is motion
  slop; stillness with clear copy converts better.
- **dark-luxe:** errors in a warm amber-red, never pure `#FF0000` —
  pure red on near-black vibrates. Copy stays formal; no jokes anywhere
  near errors in this DNA.
- **ma-japanese:** the error appears with generous space around it —
  crowding an error message next to the field at 4px gaps makes it feel
  like an accusation. Air is apology.
- **industrial-brutalist:** errors as spec violations — "FIELD: email /
  STATUS: invalid format / FIX: name@example.com". The register suits the
  DNA and stays genuinely useful.

---

*Part of [TZ-taste](https://github.com/rawmware/TZ-taste). Companion:
docs/EMPTY-STATES.md (permission/gated states), docs/CTA-DESIGN.md
(button loading/disabled states), docs/COLOR-PSYCHOLOGY.md (semantic
colors).*
