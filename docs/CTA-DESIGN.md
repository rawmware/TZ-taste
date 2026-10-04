<!--tz-meta {"id":"cta-design","title":"CTA Design","file":"docs/CTA-DESIGN.md","description":"Button copy that says what happens, hierarchy with one primary per viewport, and placement rules."} -->
# CTA Design

SKILL.md's copy rules say it in one line: *buttons say what happens.*
"Learn more" says nothing. "Submit" describes the database, not the
visitor's life. This doc is the full system: the copy, the hierarchy, the
sizes, and where the button goes — because a perfect button in the wrong
place converts like a bad button.

## Copy: verb + object, ≤ 5 words

The formula: **strong verb + concrete object**. The visitor should be able
to answer "what happens when I click this?" from the label alone.

| Weak | Strong | Why |
|---|---|---|
| Learn more | See the patterns | names the destination |
| Submit | Send my application | names the action + whose |
| Get started | Start your free trial | names the cost (free) and the thing (trial) |
| Click here | Download the checklist | never narrate the click |
| Sign up | Create my account | first person converts — "my" beats "your" in tests |
| Choose Pro | Start 14-day Pro trial | names what happens, not the tier (docs/PRICING-PSYCHOLOGY.md) |

Rules:

- **Ban list:** Submit, Click here, Learn more, Read more, Go. If the label
  works on every button on the site, it works on none of them.
- **First person ("my") outperforms second person ("your")** on account and
  trial CTAs — "Start my free trial" reads as the visitor talking, not being
  talked at.
- **Name the cost or the lack of it** when there's friction: "Start free",
  "Book a free call", "Get the $49 guide". Removing price ambiguity at the
  button is worth more than any copy above it.
- **Microcopy under the button** handles the objection the button can't:
  "Free 14-day trial · No credit card required · Cancel anytime" — 3
  fragments max, 13–14px, muted. This line does more conversion work than
  the headline on many pages.

## Hierarchy: one primary per viewport

Every viewport gets exactly one primary CTA. The hierarchy:

1. **Primary** — filled, accent or high-contrast. The one action this
   viewport exists to drive.
2. **Secondary** — outline or ghost. The alternative for the not-ready:
   "See how it works", "Read the docs".
3. **Tertiary** — text link. The escape hatch: "Compare plans", "Talk to
   sales".

Rules:

- **Two filled buttons side by side is a decision the page refused to
  make.** If both actions matter equally, the viewport has two jobs and
  needs redesigning, not restyling.
- The secondary must be *visibly* quieter — 1px outline or plain text with
  an arrow. A secondary that looks almost-primary creates hesitation, and
  hesitation is the conversion killer that no A/B test names.
- **Destructive CTAs** ("Delete project", "Cancel subscription") get the
  danger treatment: red text or red fill, placed away from primary actions,
  and always behind a confirmation step. Never a red button next to a
  neutral primary — proximity + color = misclicks.
- **Disabled buttons** explain themselves: 50% opacity + `not-allowed`
  cursor + the *reason* nearby ("Add 3 team members to continue"). A dead
  button with no explanation reads as a broken page.

## Size, shape, and states

- **Minimum 44px tall** (48px preferred on mobile), horizontal padding
  20–24px. Below 44px, thumbs miss and the button feels unserious.
- **Border radius follows the DNA**, not a default. ANTI-SLOP #7 warns:
  pill buttons (`border-radius: 999px`) on everything is a tell. Brutalist
  DNAs use 0–4px, soft DNAs 8–12px, pill radius only when the DNA's
  language is round (some y2k, some playful). The radius is a brand
  decision made once, not per button.
- **Hover:** `translateY(-1px)` + shadow deepen, or a 10–15% color shift —
  transform and opacity only, never layout properties (ANTI-SLOP #12).
  The hover state must be *perceptible* in under 100ms or it feels laggy.
- **Focus-visible:** 2–3px outline, 2px offset, accent or high-contrast
  color. Keyboard users convert too; an invisible focus ring abandons them.
- **Loading:** spinner replaces the icon (never the label — the label is
  the promise), button disables, width stays fixed so the layout doesn't
  jump. On completion the button confirms briefly ("Saved ✓" for ~1.5s)
  before returning to rest.
- **Button text contrast ≥ 4.5:1** against the button fill — white text on
  a medium accent fails more often than designers expect; check it, don't
  eyeball it (ANTI-SLOP #8, docs/COLOR-PSYCHOLOGY.md).

## Placement: the button goes after the value, before the doubt

- **Hero:** after the subtext, `space-8` below it (docs/spacing-rhythm.md).
  Never above the headline, never floating without context.
- **After every value block** that makes the case: feature section, pricing
  tier, testimonial. The pattern is *claim → proof → action*, repeated.
- **Repeat the primary CTA every 1–2 viewports** on long pages. The
  visitor who is convinced at section 4 should not have to scroll back to
  section 1 to act. Same label every time — consistency builds recognition.
- **End of page:** the final CTA section is a full stop, not a whisper.
  Restate the promise in ≤ 10 words, one primary button, the microcopy
  line beneath it. A page that just... ends... leaks its most convinced
  visitors.
- **Forms:** the submit button is left-aligned with the fields (or full
  width on mobile), labeled with the outcome ("Create my account", not
  "Submit"). Full rules in docs/designing-forms.md.

## CTA density and fatigue

- **One ask per section.** A section with "Start trial", "Book demo",
  *and* "Read docs" buttons is three sections wearing a trench coat.
- **Don't CTA the already-converted.** Logged-in users see "Open
  dashboard", not "Start free trial". A signup button shown to a customer
  says nobody thought about them.
- **Exit-intent and timed popups** are a copy of last resort: if the page
  needs a popup to convert, the page isn't convincing. One passive inline
  nudge (footer band, docs/FOOTER-STRATEGY.md) outperforms an interruptive
  modal on trust — and trust is the whole game.

## Common failures

| Symptom | Cause | Fix |
|---|---|---|
| Buttons everywhere, clicks nowhere | no hierarchy — three "primaries" per viewport | one filled primary; demote the rest |
| High clicks, low completions | label promises what the next page doesn't deliver | label = the next step's reality ("Start trial" → trial, not a sales form) |
| Mobile mis-taps | 32px buttons | 44px min height, 48px preferred |
| "The button looks AI" | pill radius on everything (ANTI-SLOP #7) | radius from the DNA, set once |
| Keyboard users bounce | no visible focus state | 2–3px focus-visible outline, 2px offset |

## Pre-ship audit

- [ ] Every label is verb + object, ≤ 5 words; ban list (Submit/Click here/Learn more) absent
- [ ] One primary per viewport; secondary visibly quieter; tertiary is a text link
- [ ] Buttons ≥ 44px tall, 20–24px horizontal padding; radius set once from the DNA (not default pill)
- [ ] Button text contrast ≥ 4.5:1 against fill — checked, not eyeballed
- [ ] Hover is transform/opacity only, perceptible in < 100ms (ANTI-SLOP #12)
- [ ] Focus-visible ring 2–3px with 2px offset present and visible
- [ ] Loading state keeps label + fixed width; brief confirmation (~1.5s) on success
- [ ] Primary CTA repeated every 1–2 viewports on long pages; final CTA section closes the page
- [ ] Microcopy under key CTAs: cost + commitment + exit, ≤ 3 fragments
- [ ] Destructive actions are red, separated, and confirmed; disabled buttons explain why

## Per-DNA notes

- **neo-brutalist-pop:** the CTA is the loudest element allowed — thick
  border, hard offset shadow (`4px 4px 0`), active state translates *into*
  the shadow. Hover: shadow shrinks, button moves 2px. Physical.
- **dark-luxe:** quiet CTA — thin outline or muted fill, generous padding,
  letterspaced micro-caps label. Loud buttons would shatter the calm.
- **soft-minimal / glass-calm:** 8–12px radius, soft shadow, 10% darken on
  hover. The button should feel like pressing a pebble, not a buzzer.
- **retro-terminal:** CTA as `[ START ]` bracketed command or a typed
  prompt. Hover: block cursor. Keep the bit consistent — a terminal CTA on
  a non-terminal page is cosplay.
- **ma-japanese:** the CTA can be a text link with a long underline rule —
  restraint is the conversion tool. If a filled button is needed, one per
  page, small, dark ink on paper.
- **editorial-serif:** CTA as a ruled, letterspaced link ("Begin —→")
  beats a button in most placements; reserve filled buttons for the final
  ask.

---

*Part of [TZ-taste](https://github.com/rawmware/TZ-taste). Companion:
docs/PRICING-PSYCHOLOGY.md (per-tier CTAs), docs/designing-forms.md
(submit buttons), docs/HERO-ANATOMY.md (hero CTAs), skill/SKILL.md copy
rules.*
