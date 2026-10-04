<!--tz-meta {"id":"accessibility-checklist","title":"The Accessibility Checklist","file":"docs/accessibility-checklist.md","description":"WCAG AA concrete checklist: contrast, focus, keyboard, reduced motion, alt text, forms."} -->
# The Accessibility Checklist

Accessibility isn't a separate phase — it's the same quality bar, checked
with different tools. Every item below is WCAG 2.2 AA concrete: pass/fail,
checkable in a browser, no interpretation needed. Taste and access are the
same discipline: decisions instead of defaults.

## Contrast

- [ ] Body text: **4.5:1** minimum against its background. Check the
      DNA's ink-on-bg and ink-on-surface pairs in devtools — don't assume
      the tokens pass (see docs/color-theory-crash.md for the math).
- [ ] Large text (24px+ regular, 18.66px+ bold): **3:1** minimum.
- [ ] `muted` text: if it's below 4.5:1, it's captions/metadata only —
      never body copy, never small UI labels. ANTI-SLOP #8 (gray-on-gray)
      is an accessibility failure wearing a style costume.
- [ ] Text over images: the image is not a background color — check the
      ratio against the *darkest/lightest* part of the image the text
      sits on, or put a scrim behind the text and check against the
      scrim. (Also: stock-photo-hero-with-overlay is ANTI-SLOP #9. If
      you're checking contrast on one, reconsider the composition first.)
- [ ] Focus indicators: **3:1** against adjacent colors, and visible —
      not just a subtle glow that disappears on the DNA's bg.
- [ ] Disabled states: exempt from the ratio, but must not be the *only*
      way to convey "unavailable" — pair with text or an icon.

## Keyboard

- [ ] **Tab order matches visual order.** If CSS reorders things
      visually (flex/grid `order`, absolute positioning), keyboard users
      get a scrambled page. Fix the DOM order, not the tab index.
- [ ] Everything interactive is reachable: links, buttons, inputs, custom
      dropdowns, tabs, modals, tooltips-with-actions. If you built a div
      that acts like a button, it's a button — use `<button>`.
- [ ] **No keyboard traps.** Focus must be able to leave every component,
      including modals (Esc closes, focus returns to the trigger),
      carousels, and embedded widgets.
- [ ] **Skip link** as the first focusable element: "Skip to content",
      visible on focus. One line of HTML, massive for screen-reader and
      keyboard users.
- [ ] `tabindex` values: `0` (in natural order) or `-1` (programmatic
      focus only). Never positive values — they hijack the order.
- [ ] Custom components follow ARIA patterns: tabs arrow-key between
      tabs, menus arrow-key through items, Esc closes, Enter/Space
      activates. Don't invent interaction models.
- [ ] Focus is **visible** — custom `:focus-visible` styles in the DNA's
      accent or a 2px outline offset. Removing outlines without a
      replacement is a failure, full stop.

## Focus management

- [ ] Modal/drawer open: focus moves inside, tab cycles within (focus
      trap), Esc closes, focus returns to the element that opened it.
- [ ] Page/view change (SPA routing): focus moves to the new view's
      heading (`tabindex="-1"` + `.focus()`), announced via an
      `aria-live` region or the document title update.
- [ ] Form errors: focus moves to the error summary or first invalid
      field on submit.
- [ ] No focus loss: never remove the focused element from the DOM
      without moving focus somewhere sensible first.

## Reduced motion

- [ ] `prefers-reduced-motion: reduce` disables non-essential animation
      (see docs/motion-guide.md for the exact CSS block).
- [ ] Autoplaying carousels, marquees, and video pause or render a static
      frame under reduced motion. Marquees (`patterns/marquee.html`)
      must respect this — a marquee that can't stop is hostile.
- [ ] No content is *only* reachable through motion (e.g. information
      that appears mid-animation and never settles).
- [ ] Parallax is decorative-only and disabled under reduced motion.
- [ ] Flashing: **no more than 3 flashes per second**, anywhere, for any
      user. This is WCAG 2.3.1 and a seizure risk — it applies to
      `acid-rave`'s glitch vocabulary and `y2k-chrome`'s shimmer alike.
      When in doubt, don't flash.

## Images and alt text

- [ ] **Informative images** get alt text describing the *information*,
      not the appearance: "Q3 revenue up 40% year over year" not "bar
      chart." Keep it under 125 characters.
- [ ] **Decorative images** get `alt=""` (empty) — screen readers skip
      them. Background grain, dividers, ambient blobs: all empty alt.
- [ ] **Functional images** (icons inside buttons, linked images) get alt
      describing the *action*: "Search" not "magnifying glass." If the
      button already has visible text, the icon is decorative (`alt=""`
      or `aria-hidden`).
- [ ] **Complex images** (charts, diagrams): short alt + adjacent text
      or a linked long description with the same data. Never "chart
      showing growth" with no numbers anywhere.
- [ ] No images of text. If the design needs styled text, it's HTML text
      with CSS. (Logos are the exception.)

## Forms

- [ ] Every input has a **visible label** (`<label for>`). Placeholders
      are not labels — they disappear, they're low-contrast, and
      screen readers handle them inconsistently.
- [ ] Required fields marked with text ("required"), not color alone.
- [ ] Errors: described in text next to the field, linked with
      `aria-describedby`; the field gets `aria-invalid="true"`.
      "Invalid input" is not an error message — say what's wrong and how
      to fix it: "Enter a date after today."
- [ ] Error summary on submit: focus moves to it, lists each error with
      a link jumping to the field.
- [ ] Don't clear the user's input on error. Ever.
- [ ] Grouped inputs (radio/checkbox sets) wrapped in `<fieldset>` +
      `<legend>`.
- [ ] Autocomplete attributes on personal fields (`name`, `email`,
      `tel`, etc.) — lets password managers and browsers help.

## Structure and semantics

- [ ] **One `<h1>` per page**, then headings in order — no skipping from
      h1 to h3 because "h2 looked too big." Style headings with CSS;
      the hierarchy is for structure, not size.
- [ ] Landmarks: `<header>`, `<nav>`, `<main>`, `<footer>`, plus
      `aria-label` on multiple navs ("Primary", "Footer").
- [ ] Lists are `<ul>`/`<ol>`, not divs with dashes. Nav links are lists.
- [ ] Tables are `<table>` with `<th scope>` — never div-tables for
      data. `swiss-rational` and `retro-terminal` love tables; make them
      real ones, with captions where the data needs context.
- [ ] Link text describes the destination: "Read the motion guide" not
      "click here." (Also better copy — see docs/copywriting-guide.md.)
- [ ] Buttons do things, links go places. A "button" that navigates is
      a link. A "link" that opens a modal is a button.

## Color and meaning

- [ ] **Never color alone.** Errors need icons/text, required fields
      need text labels, chart series need labels or patterns — not just
      different hues. 1 in 12 men has color-vision deficiency; your
      red/green status dots are invisible to them.
- [ ] Focus, selection, and active states differ by more than color
      (outline, underline, shape change).
- [ ] Test the key flows in grayscale (devtools rendering emulation).
      If anything becomes ambiguous, it was color-alone.

## Touch and targets

- [ ] Touch targets **44×44px minimum** (WCAG 2.5.8 AA; Apple HIG says
      44pt). Spacing between adjacent targets: 8px minimum.
- [ ] Hover-only interactions have a touch/keyboard equivalent. No
      tooltips that only appear on hover — make them toggles.
- [ ] No horizontal scrolling on mobile except deliberate carousels with
      visible affordance. Content clipped by `overflow` is content lost.

## Motion-triggered content (3D, video, canvas)

- [ ] 3D scenes (docs/using-3d-in-ui.md) render a static poster frame
      under reduced motion and when WebGL is unavailable.
- [ ] Autoplaying video: muted, ≤5s or pausable, with a visible pause
      control. Never the only way to get information.
- [ ] Canvas content has a text alternative describing the same
      information.

## The audit pass

Run this on every page before shipping, in order:

1. **Keyboard only:** unplug the mouse. Can you reach everything, see
   where you are, and complete the primary task?
2. **Screen reader skim:** 10 minutes with VoiceOver/NVDA on the key
   flow. Do headings, landmarks, and labels make sense out of visual
   context?
3. **Contrast sweep:** devtools color picker on every text/background
   pair. Fix failures by darkening text first.
4. **Reduced motion on:** OS setting enabled — is the page fully usable
   and calm?
5. **200% zoom:** browser zoom to 200%. No clipped text, no overlapping
   panels, no lost content. (WCAG 1.4.10 reflow — 400% at 1280px width
   is the formal bar; 200% catches most failures.)
6. **Grayscale:** rendering emulation — anything ambiguous was
   color-alone.

## Per-DNA accessibility risks

Some DNAs have structural accessibility tension. Know it upfront:

- **glass-calm:** low-saturation pastels + frosted translucency = the
  highest contrast risk in the set. Text over frosted surfaces must be
  checked against the *blurred composite*, not the flat bg. When in
  doubt, darken ink one step.
- **retro-terminal:** green-on-black passes, but `muted` (`#1f6b3a`)
  on bg fails body ratios badly — it's decoration/status color only.
  Amber accent text on black passes at large sizes; check small sizes.
- **acid-rave:** maximum contrast is good; the risk is flashing. Any
  glitch/strobe vocabulary must stay under 3 flashes/second, and every
  flashing element needs a static equivalent.
- **y2k-chrome:** text over iridescent gradients — check the ratio at
  the lightest gradient stop, or put text on solid surfaces only.
- **dark-luxe:** whisper-thin Cormorant at small sizes isn't just ugly,
  it's unreadable — the 20px floor is an accessibility rule too.
- **ma-japanese:** vast whitespace is fine, but ensure the sparse
  content still has a logical heading order and visible focus.

## Common failures in generated UI

Patterns to grep for in AI-produced code:

- `outline: none` with no `:focus-visible` replacement. The #1
  accessibility slop tell.
- Placeholder-only form labels. Always a failure.
- `div onClick` instead of `<button>`. Keyboard-invisible.
- Autoplaying carousels with no pause button.
- Color-coded status with no text label (red/green dots).
- `aria-label` on a div trying to make it a button — the label doesn't
  confer keyboard behavior. Use the real element.
- Images with `alt="image"` or filenames as alt. Worse than empty.
- Heading levels chosen for size (`<h4>` because it "looked right").

## Self-review checklist

- [ ] Contrast: body 4.5:1, large text 3:1, focus indicators 3:1 — checked,
      not assumed
- [ ] Full keyboard path: tab order = visual order, no traps, skip link
      present, focus visible and on-brand
- [ ] Focus managed on modals, route changes, and form errors
- [ ] Reduced motion disables non-essential animation; nothing flashes
      more than 3×/second
- [ ] Alt text: informative describes information, decorative is empty,
      functional describes the action
- [ ] Forms: visible labels, text-described errors, no cleared input,
      autocomplete set
- [ ] Headings in order, landmarks labeled, lists/tables use real elements
- [ ] Nothing conveyed by color alone (grayscale test passes)
- [ ] Touch targets 44×44px, hover-only interactions have equivalents
- [ ] 200% zoom: no clipping, no overlap, no lost content

*Part of [TZ-taste](https://github.com/rawmware/TZ-taste). Accessible isn't
a feature — it's the absence of failures.*
