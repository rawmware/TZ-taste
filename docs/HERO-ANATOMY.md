<!--tz-meta {"id":"hero-anatomy","title":"Hero Anatomy","file":"docs/HERO-ANATOMY.md","description":"Seven hero compositions that aren't the template — structure, copy budgets, and per-DNA variants."} -->
# Hero Anatomy

The hero is the most lied-about section on the internet. Everyone knows the
template — centered badge, huge headline, subtext, two buttons, logo row —
and ANTI-SLOP #3 bans it outright: *if your hero looks like this, start
over.* This doc gives you seven compositions that aren't the template, the
copy budgets each one allows, and the structural rules that keep any hero
from collapsing into slop.

## What a hero must do (in order)

1. **Orient** — what is this, in under 3 seconds.
2. **Promise** — the one outcome the visitor gets (a claim, not a description).
3. **Direct** — the single next step, unmistakable.

Anything else — social proof, feature lists, secondary CTAs, newsletter
forms — is cargo. Cargo goes below the fold or gets cut.

## The seven compositions

**1. Offset editorial.** Headline pinned left on a 12-column grid, starting
at column 2; supporting image or product shot bleeding off the right edge,
cropped by the viewport. The asymmetry *is* the design. Copy budget:
headline ≤ 10 words, subtext ≤ 25 words, one CTA. Works for: portfolios,
studios, editorial brands. Fails when: the image is generic stock — an offset
stock photo is just a template with extra steps.

**2. Full-bleed type.** No image. One enormous statement set in display type
at `clamp(3rem, 9vw, 8rem)`, tight letter-spacing (-0.03em), maybe two lines
max. Subtext and CTA tucked underneath at small scale for contrast. The
one-weird-thing rule (SKILL.md) lives here naturally — an oversized numeral,
a rotated label, one word in the accent color. Works for: manifestos,
studios, launches. Fails when: the type pairing is weak (this composition
exposes typography completely — Inter at 8rem is still Inter).

**3. Split screen.** Two halves in tension: statement left, evidence right
(product screenshot, price, stat, testimonial). The split can be 50/50 or
60/40; the dividing line can be a hairline, a color change, or a hard edge.
Copy budget: headline ≤ 8 words per side. Works for: SaaS, tools with a
visual payoff. Fails when: both halves are text — a split needs one side to
be *shown*, not told.

**4. Product-in-scene.** The product rendered inside a believable context —
dashboard on a laptop at an angle is the cliché; better: the app UI
full-bleed as the background with type floating over the quietest quadrant,
or a phone mockup held in a real hand, cropped hard. Rule: the scene must
be *specific* (this product, this user, this moment), never a floating
device on a gradient. Works for: apps, hardware. Fails when: the mockup is
a generic device frame with placeholder UI inside (ANTI-SLOP #5).

**5. Single image + caption.** One strong photograph, full-bleed or nearly,
with a short caption-style headline — 6 words max, set like a magazine
kicker, not a marketing claim. No overlay gradient darkening the whole
image (ANTI-SLOP #9: stock photo + dark overlay + white headline). If text
must sit on the image, place it over the image's naturally quiet area and
add a soft scrim only behind the text block. Works for: travel, food,
fashion, causes. Fails when: the photo is stock-smiling-people — the
composition can't save a dishonest image (see docs/imagery-art-direction.md).

**6. Poster / no-image.** Type, rules, numerals, and one graphic gesture —
no photography at all. Think gig poster: the information *is* the visual.
Copy budget is generous here because layout carries it: date, place, price,
lineup as designed elements. Works for: events, launches, personal brands.
Fails when: it becomes a ransom note — cap the typefaces at two and the
sizes at three.

**7. Interactive.** The hero *is* a demo: a working widget, a playable
visualization, a configurator. Highest engagement, highest cost. Rules: it
must be usable within 5 seconds of load, it must degrade to a static
composition if JS fails, and it must not block the headline — the promise
still reads first. LCP budget is strict here (below). Works for: dev tools,
data products, games. Fails when: the interaction is decorative (a particle
field that does nothing is motion slop — SKILL.md motion rules).

## Structural rules (all compositions)

- **One focal point per viewport** (SKILL.md layout rules). The hero gets
  one. If the headline and the image compete, shrink one of them.
- **Asymmetric vertical padding:** `pt-32 pb-40` desktop, `pt-24 pb-32`
  mobile. More air *below* the hero pulls the eye down the page
  (docs/spacing-rhythm.md). Never `h-screen` — ANTI-SLOP #13; use
  `min-h-[100dvh]` only when the composition truly needs full height, and
  even then let content grow past it.
- **Max two CTAs, usually one primary + one quiet secondary.** Two equal
  primary buttons is a decision the page refused to make. The secondary is a
  text link or ghost button, never a second filled button.
- **Logo rows are earned, not default.** ANTI-SLOP #3 lists the logo row as
  part of the template. Include one only with 4+ real, recognizable
  customer logos, grayscale, uniform height (24–32px), ~60% opacity — and
  place it *after* the hero's promise has landed, not as hero furniture.
  (Full rules: docs/SOCIAL-PROOF.md.)
- **Eyebrow badges are optional.** "Introducing v3.0" above the headline is
  a habit, not a requirement. Cut it unless it carries real news.
- **Background treatments need air.** A hero with an image, color band, or
  texture gets one padding level *more* than a plain hero — treatments read
  as intentional only with room around them.

## Copy budgets

| Element | Budget | Notes |
|---|---|---|
| Headline | ≤ 12 words, one claim or question | No "Welcome to [Product]" (SKILL.md copy rules) |
| Subtext | 1–2 lines, ≤ 30 words | Expands the claim with mechanism or proof |
| Primary CTA | ≤ 5 words, verb + object | "Start your free trial" beats "Get started" (docs/CTA-DESIGN.md) |
| Secondary | ≤ 4 words | "See how it works", "Read the docs" |
| Eyebrow (if used) | ≤ 6 words | News only: "Now with offline mode" |

Read the hero out loud. If you run out of breath on the subtext, cut it in
half.

## Performance rules (heroes are LCP)

- The hero's largest element is almost always the LCP element. Budget:
  **LCP ≤ 2.5s** on a mid-range phone over 4G.
- Hero image ≤ **250KB**, modern format (AVIF/WebP), `fetchpriority="high"`,
  explicit `width`/`height` to prevent layout shift (CLS ≤ 0.1).
- Preload the display font; `font-display: swap`. A hero that renders in
  fallback type for 2 seconds has already lost.
- Entrance motion: stagger children 60–90ms, total under **800ms**
  (SKILL.md motion rules). The headline should never wait for the image.
- Lazy-load everything below the hero. The hero is the only thing allowed
  to be eager.

## Common failures

| Symptom | Cause | Fix |
|---|---|---|
| Hero "looks fine" but forgettable | template composition (ANTI-SLOP #3) | pick one of the seven; change the geometry, not the colors |
| Two buttons, neither clicked | equal-weight CTAs | one filled primary, one quiet secondary |
| Headline wraps to 5 lines on mobile | 20-word headline | ≤ 12 words; `clamp()` type scale with a 390px check |
| Page feels top-heavy | hero padding = section padding | asymmetric `pt-32 pb-40`; hero is not a section |
| Slow, janky load | 2MB hero image + webfont chain | 250KB cap, preload, `fetchpriority="high"` |

## Pre-ship audit

- [ ] Composition is one of the seven (or a deliberate eighth) — not the template (ANTI-SLOP #3)
- [ ] One focal point; headline ≤ 12 words making a claim or asking a question
- [ ] Max two CTAs: one primary (verb + object), one quiet secondary
- [ ] Logo row only if 4+ real logos, placed after the promise, grayscale
- [ ] Asymmetric padding (`pt-32 pb-40` desktop); no `h-screen` (ANTI-SLOP #13)
- [ ] Hero image ≤ 250KB, LCP ≤ 2.5s budget, fonts preloaded
- [ ] Entrance motion staggered 60–90ms, total under 800ms, reduced-motion honored
- [ ] Renders clean at 390px — headline wraps gracefully, nothing clips
- [ ] All values resolve to DNA tokens (SKILL.md color rules)

## Per-DNA notes

- **neo-brutalist-pop:** hero as bordered poster — thick rules, hard shadow
  on the CTA, headline slightly rotated (-1deg). The border *is* the
  composition.
- **ma-japanese:** composition 2 (full-bleed type) with vast space; one
  vertical text element; the emptiness is the luxury.
- **retro-terminal:** hero as boot sequence — typed headline with cursor,
  `> whoami` energy. Keep it to 3–4 lines; a terminal that scrolls forever
  is a gimmick.
- **editorial-serif:** composition 1 (offset editorial) is native — drop
  cap, kicker, ruled columns. Let the grid show.
- **glass-calm:** product-in-scene through frosted layers; extra internal
  padding or the blur reads as smudge (docs/spacing-rhythm.md).
- **dark-luxe:** composition 2 with one metallic accent word; the hero
  should feel like a gallery wall, not a dashboard.
- **y2k-chrome / acid-rave:** composition 7 (interactive) or 6 (poster) —
  restraint elsewhere on the page so the hero's chaos lands.

---

*Part of [TZ-taste](https://github.com/rawmware/TZ-taste). Companion:
docs/SOCIAL-PROOF.md (logo rows), docs/CTA-DESIGN.md (button copy),
docs/imagery-art-direction.md, skill/SKILL.md layout rules.*
