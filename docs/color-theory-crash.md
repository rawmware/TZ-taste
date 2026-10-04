<!--tz-meta {"id":"color-theory-crash","title":"Color Theory Crash Course","file":"docs/color-theory-crash.md","description":"60-30-10, accent discipline, dark vs light logic, contrast math, and per-DNA palette logic."} -->
# Color Theory Crash Course

Color slop is easy to spot: five accents, a purple gradient, gray text on a
slightly-different gray. Color taste is simpler than theory textbooks make it.
You need four rules, one piece of math, and the discipline to stop at one
accent.

## 60-30-10

The oldest workable rule in interior design, and it ports directly to UI:

- **60% — dominant:** the background. One color, the whole page sits in it.
  In TZ-taste this is the DNA's `bg` token.
- **30% — secondary:** surfaces, cards, sections. The DNA's `surface`
  token. It should be *close* to the background — a step, not a leap.
- **10% — accent:** the DNA's `accent` token. CTAs, key highlights, the one
  weird thing. If it covers more than ~10% of any viewport, it's not an
  accent anymore — it's a second background.

Text (`ink` and `muted`) doesn't count toward the ratio — it's the content
layer, present everywhere by definition.

Test: screenshot the page, blur it until you can't read anything. You
should see one big field of background, smaller fields of surface, and
small sharp hits of accent. If you see two big fields fighting, rebalance.

## Accent discipline

One accent color. Not two, not "accent plus a secondary accent." One.

- The accent's job is to say "look here." If it's on the primary CTA, the
  nav logo, five icons, three headings, and the footer — it's saying
  "look everywhere," which means nowhere. ANTI-SLOP treats stray colors
  as a failure; the skill bans any hex outside DNA tokens.
- **Count rule:** the accent appears in at most 3 places per viewport.
  Primary action, one highlight, one detail. That's it.
- **Semantic colors are not accents.** Error red, success green, warning
  amber are a separate system — they carry meaning, not brand. They still
  resolve to the DNA's intent: `retro-terminal` uses amber (`#ffb000`) as
  its accent *and* its warning color, which is why that DNA works for
  dashboards.
- **Never tint the accent for "variety."** A lighter blue next to the blue
  accent reads as a mistake, not a palette. If you need a second emphasis
  level, use `ink` at full weight vs `muted` — typographic emphasis, not
  color emphasis.

The fastest color upgrade for any slop page: delete every color except
bg, surface, ink, muted, and one accent. Watch it instantly look designed.

## Dark vs light

Dark mode is not a personality. Pick based on the brief:

**Go dark when:** the product lives in dark environments (dev tools,
security dashboards, media/music), the brand is premium-evening
(`dark-luxe`), energy/nocturnal (`acid-rave`, `y2k-chrome`), or the
content is emissive (terminals, data viz, video). Dark also suits
"focus" products used at night.

**Go light when:** the product is daytime trust (SaaS, fintech, docs,
ecommerce), content is long-read (docs-solar's warm paper exists because
people read for hours), or the audience is general-public.

**Rules either way:**

- Dark doesn't mean pure black `#000`. Every dark DNA uses near-black
  (`acid-rave` `#0a0a0a`, `dark-luxe` `#0e0d0b`, `retro-terminal`
  `#0b0f0a`) — pure black crushes depth and makes surfaces invisible.
  Lift the background slightly and give surfaces a real step up.
- Light doesn't mean pure white `#fff` everywhere. `soft-minimal`
  backgrounds `#f7f7f5`, `editorial-serif` `#f5f1e8`, `ma-japanese`
  `#f7f4ec` — warm or cool-tinted paper with white surfaces on top.
  Pure-white-page with pure-white-cards has no depth; you end up
  faking depth with shadows (ANTI-SLOP #16, pancake cards).
- **Dark sections need a reason** (skill rule). Alternating
  light/dark/light/dark down the page is a template tell (ANTI-SLOP
  #10). One dark band for contrast — e.g. a dark CTA or footer on a
  light page — is a decision. Zebra striping is a default.
- Text on dark: drop pure white for `#f2f2f2`-ish ink and use `muted`
  generously. Pure white text on black vibrates (halation) and reads
  as harsh.

## Contrast math

WCAG AA (the bar in docs/accessibility-checklist.md):

- **Body text:** 4.5:1 against its background. No exceptions.
- **Large text** (18.66px+ bold, or 24px+ regular): 3:1.
- **UI components and focus indicators:** 3:1 against adjacent colors.

The math, briefly: contrast ratio = (L1 + 0.05) / (L2 + 0.05), where L is
relative luminance (0 = black, 1 = white). You don't compute this by
hand — every browser's devtools shows it in the color picker, and tools
like WebAIM's contrast checker take two hex values. But know what the
numbers mean:

- **7:1+** — AAA. Body text on any DNA's bg/ink pair should hit this.
  Check yours: `editorial-serif` ink `#1c1a15` on bg `#f5f1e8` is ~13:1.
- **4.5–7:1** — AA pass for body. Fine for `muted` text *if* it's large
  or non-essential; risky for small body copy.
- **Below 4.5:1 on body text** — ANTI-SLOP #8, gray-on-gray. The most
  common AI tell after the purple gradient. `muted` tokens exist for
  captions and metadata, not paragraphs. If your `muted` fails 4.5:1 at
  body sizes, use it only above 16px or darken it.

Accent-on-background check: accents are usually mid-luminance, which
means **accent text on bg often fails**. `acid-rave`'s lime `#c6ff00` on
black passes; `soft-minimal`'s iris `#5b5bd6` on off-white passes for
large text but is borderline for small — so that DNA uses the accent
for fills and underlines, with ink-colored text on top. Rule: **accent
as background + ink as text**, or **ink as text + accent as underline/
border**. Never accent-colored small text on bg unless you've checked
the ratio.

## DNA token anatomy

Every TZ-taste DNA ships six tokens (`styles/index.json`). Learn what
each is for:

- **`bg`** — the 60%. Page background.
- **`surface`** — the 30%. Cards, panels, wells. Always adjacent to `bg`
  in luminance — a step, not a leap. (`glass-calm`'s surface is
  `#ffffff8c`, a translucent white over pastel — the DNA's whole trick.)
- **`ink`** — primary text. Near-black on light, near-white on dark.
- **`muted`** — secondary text: captions, metadata, placeholders.
  Lower contrast by design — keep it out of body copy.
- **`accent`** — the 10%. One color, counted uses.
- **`line`** — hairlines and borders. Usually ink at 8–15% opacity
  (`#1c1a1526` on editorial-serif) or a solid on brutalist DNAs
  (`industrial-brutalist` and `neo-brutalist-pop` use solid `#141412` /
  `#1a1a1a` lines — borders as structure, per the skill).

No stray hex values. If a color isn't one of these six (or a documented
semantic color), it doesn't ship.

## Per-DNA palette logic

Why the palettes work — steal the reasoning, not the hex:

- **editorial-serif** (`#f5f1e8` / `#1c1a15` / `#b5461f`): warm paper,
  near-black ink, burnt-orange accent. The accent is a *print* color —
  it recalls red editorial markup. Accent moments: drop caps, rules,
  one pull-quote. Never fills.
- **swiss-rational** (`#fafafa` / `#111111` / `#e30613`): neutral ground,
  black structure, one signal red. The red is *alarm* — used for the
  single most important datum or action per view. Restraint is the brand.
- **dark-luxe** (`#0e0d0b` / `#ece5d8` / `#c9a96a`): near-black with warm
  undertone, champagne accent. Metallic accents must be used thin —
  hairlines, small caps labels, dividers. A big champagne button looks
  cheap; a champagne hairline looks expensive.
- **acid-rave** (`#0a0a0a` / `#f2f2f2` / `#c6ff00`): black room, acid
  lime at maximum contrast. The accent is *safety-vest* loud — it works
  because everything else shuts up. Any second bright color kills it.
- **glass-calm** (`#e8ecf5` / `#2b3245` / `#7c8cf8`): pastel light, iris
  accent, frosted surfaces. Low-saturation everything; the accent is a
  tint darker than the bg, not a neon. Calm palettes fail when the
  accent is more saturated than the concept allows.
- **retro-terminal** (`#0b0f0a` / `#33ff66` / `#ffb000`): phosphor green
  is the *ink*, amber is the accent/warning. Inverted logic from most
  DNAs — the "text color" is the loud one. Works because the bg is near-
  black and there's nothing else competing.
- **neo-brutalist-pop** (`#fff6e9` / `#1a1a1a` / `#ff5da2`): cream paper,
  black structure lines, sticker pink. The DNA allows *sticker* colors
  (plural) on illustrations and badges — the one DNA where a second
  bright color is legal, because the thick black borders contain them.
  Containment is what makes it work.
- **industrial-brutalist** (`#d8d8d4` / `#141412` / `#ff4d00`): concrete
  gray, black structure, safety orange. The accent is *hazard* — use it
  like hazard striping: small, high-contrast, sparing. Big orange fills
  read as a traffic cone.
- **ma-japanese** (`#f7f4ec` / `#26221c` / `#a33327`): rice paper, ink,
  vermillion (shu-iro, the hanko stamp red). The accent appears at
  stamp scale — a seal, a single character, a thin rule. Vermillion at
  large sizes stops being Japanese-minimal and starts being alarming.
- **y2k-chrome** (`#0d0d12` / `#f4f4f8` / `#b8c5ff`): near-black, icy
  periwinkle accent, iridescent gradients allowed. The one DNA where
  gradients are legal — and even here they're *iridescent metal*, not
  purple-blue mush. Keep gradient stops within the icy family.
- **docs-solar** (`#fdf6e3` / `#3d3a2e` / `#cb4b16`): warm solarized
  paper, amber accent. The accent is *annotation* — links, callouts,
  highlights. Docs palettes fail when the accent is loud enough to
  compete with code syntax colors; amber sits below that threshold.
- **soft-minimal** (`#f7f7f5` / `#1a1a1a` / `#5b5bd6`): off-white, iris.
  The Linear/Notion register — the accent is *interface*, used on
  interactive elements only (focus rings, active states, primary
  buttons). Never decorative. The moment iris becomes decoration, the
  DNA slides into slop.

## The subtraction test

When a page's color feels off, don't add — subtract:

1. List every distinct color on the page (eyedropper the screenshot).
2. Map each to a DNA token. Anything unmapped gets deleted or remapped.
3. Count accent uses per viewport. Over 3? Demote the extras to ink or
   muted.
4. Check every text/background pair against 4.5:1. Fix failures by
   darkening text, not by lightening backgrounds into mud.
5. Blur test again. One field, smaller fields, sharp hits.

## Self-review checklist

- [ ] Every color resolves to a DNA token — zero stray hex values
- [ ] 60-30-10 holds: one bg, adjacent surface, accent under ~10%
- [ ] Exactly one accent; counted at ≤3 uses per viewport
- [ ] Dark sections have a stated reason (no zebra striping)
- [ ] Body text hits 4.5:1; large text 3:1 (checked in devtools, not eyeballed)
- [ ] Accent used as fill+ink-text or ink-text+accent-detail — never
      small accent text on bg without a ratio check
- [ ] Semantic colors (error/success/warning) are separate from the accent
- [ ] Blur test: one dominant field, sharp accent hits, no fighting fields

*Part of [TZ-taste](https://github.com/rawmware/TZ-taste). If it's everywhere,
it's nowhere — that applies to color first.*
