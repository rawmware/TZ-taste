<!--tz-meta {"id":"imagery-art-direction","title":"Imagery & Art Direction","file":"docs/imagery-art-direction.md","description":"Photography vs illustration vs none, duotone/grade recipes, picsum usage, per-DNA imagery rules."} -->
# Imagery & Art Direction

Every AI-generated site reaches for the same move: a stock hero photo, a dark
overlay, white headline (ANTI-SLOP #9). It's not that photography is bad —
it's that *undecided* photography is bad. Art direction means deciding what
kind of image belongs on the page, then making every image obey.

## The first decision: photo, illustration, or nothing

Before sourcing a single image, decide which of the three your DNA wants.
Most pages need exactly one.

**Photography** — when the subject is real and specificity sells: restaurants,
hotels, fashion, architecture, people. A wood-fired restaurant needs a photo
of *its* fire, not an illustration of fire. DNAs: editorial-serif,
dark-luxe, ma-japanese, acid-rave (documentary-style).

**Illustration** — when the subject is abstract (software, finance, AI) or
when photography would be generic stock. Custom-feeling illustration beats
real-but-boring photography every time. DNAs: soft-minimal, neo-brutalist-pop,
glass-calm, y2k-chrome, docs-solar (diagrams).

**Nothing** — the bravest and often best choice. Type, color, and layout
carry the page; no image could add information. DNAs that thrive imageless:
swiss-rational (data as aesthetic), retro-terminal (the terminal *is* the
visual), ma-japanese (emptiness is content). If your page works without
images, seriously consider shipping without them — a missing image slot is a
slop magnet that *will* get filled with stock later.

**Rule: one imagery language per page.** Photos *and* illustrations *and* 3D
renders on the same page is a mood board, not art direction. Pick one,
commit (TASTE-GUIDE.md).

## Photography rules

1. **Real beats stock.** A phone photo of the actual restaurant, studio, or
   product beats a perfect stock photo every time — specificity is the whole
   game. If you must use stock, it should be unrecognizable *as* stock:
   no handshake photos, no "diverse team laughing at laptop," no perfectly
   staged desk flat-lays.
2. **One grade across all photos.** Every photo on the page gets the same
   treatment (recipes below). Mixed grades — one warm, one cool, one
   high-contrast — read as a Google Image search, not a photoshoot.
3. **No dark overlay + white headline.** Ever. ANTI-SLOP #9. If text must sit
   on a photo, the photo gets a layout solution (text beside it, text below
   it, or a solid color block overlapping one edge) — not a gradient scrim.
   The single exception: a *subtle* bottom scrim for caption legibility on
   editorial images, never for headlines.
4. **Crop with intent.** Faces need headroom rules; architecture needs level
   horizons; food needs to be shot at the angle of appetite (45°, not
   top-down, unless it's editorial-flatlay on purpose). A bad crop is worse
   than no photo.
5. **Aspect ratios are a system.** Pick 2–3 ratios for the page (e.g. 16/9
   hero, 4/3 cards, 1/1 avatars) and never deviate. Random ratios are the
   photographic equivalent of eyeballed margins.

## Duotone and grade recipes

A grade is a decision you make once and apply everywhere. Recipes per DNA
(CSS filters — cheap, consistent, reversible):

| DNA | Recipe | Effect |
|---|---|---|
| editorial-serif | `sepia(0.25) contrast(1.05) brightness(0.98)` | warm print-magazine |
| dark-luxe | `brightness(0.85) contrast(1.1) saturate(0.8)` | moody, hushed |
| ma-japanese | `saturate(0.6) contrast(0.95) brightness(1.02)` | quiet, desaturated |
| swiss-rational | `grayscale(1) contrast(1.15)` | documentary black-and-white |
| industrial-brutalist | `grayscale(1) contrast(1.3)` | harsh, high-contrast B&W |
| acid-rave | `contrast(1.2) saturate(1.4)` + duotone overlay `#c6ff00` at 15% | flyer energy |
| retro-terminal | `grayscale(1) sepia(1) hue-rotate(70deg) saturate(3)` | phosphor-green cast |
| soft-minimal | `saturate(0.9) brightness(1.03)` | clean, barely-there grade |
| glass-calm | `saturate(0.85) brightness(1.05)` + soft light | airy pastel |
| neo-brutalist-pop | `saturate(1.3) contrast(1.1)` | sticker-bright |
| docs-solar | `sepia(0.2) brightness(1.02)` | warm paper-friendly |
| y2k-chrome | `saturate(1.2) contrast(1.05)` + subtle iridescent overlay | liquid gloss |

**Duotone technique:** overlay a solid accent color at 10–25% opacity with
`mix-blend-mode: overlay` or `color`, on top of the graded photo. This
unifies even mismatched source photos into one family — it's the fastest way
to make stock look art-directed. acid-rave and swiss-rational live on this
technique.

## Illustration rules

1. **One illustration style.** Flat geometric *or* hand-drawn *or* 3D —
   never two. The style should feel like it could only belong to this DNA:
   neo-brutalist-pop gets thick-outlined sticker shapes; glass-calm gets
   soft translucent blobs; retro-terminal gets ASCII and pixel art.
2. **Illustrations earn their place** (TASTE-GUIDE.md: cut). Decorative
   blobs in hero corners are the illustration equivalent of lorem ipsum.
   Every illustration should explain something, mark a section, or be the
   page's one weird thing — otherwise delete it.
3. **No AI-generated "3D abstract shapes."** The glossy purple blob render
   is the illustration version of the purple gradient — instantly
   recognizable as model output. If you use generative imagery, art-direct
   it hard (consistent palette, consistent subject, post-grade) or don't
   ship it.
4. **Diagrams > decorations** for docs-solar, swiss-rational, soft-minimal.
   A clear architecture diagram in DNA colors beats any hero illustration.

## Avatars, logos, and UGC

- **Avatars:** one shape (circle or rounded square), one size per context,
  hairline border in the `line` token. Initials fallback in DNA type —
  never a gray silhouette icon.
- **Logos (customer/press rows):** grayscale them. A "logo wall" of
  full-color logos is a NASCAR jacket; `grayscale(1) opacity(0.6)`,
  color on hover if you must. Better yet: a mono text list instead of logo
  images — more editorial, zero asset wrangling.
- **User-generated images:** you can't art-direct these. Contain them:
  fixed aspect ratios, consistent rounding, hairline borders. The frame is
  your art direction when the content isn't.

## Picsum and placeholders: the honest protocol

`picsum.photos` exists in this repo's DNA files as a *wireframe* tool, and
that's its only legitimate use. The protocol:

1. **Wireframe phase:** picsum with the DNA's grade applied, marked clearly
   (a mono caption: `IMAGE: hearth photo, 16/9`). This is honest — everyone
   knows it's temporary.
2. **Before ship:** every picsum URL is replaced with a real, graded,
   rights-cleared image — or the slot is deleted. No exceptions.
3. **Never ship picsum to production.** A random photo of a stranger is
   worse than an empty slot; it's also a legal liability.

Grep for `picsum` before every deploy. Make it a CI check if you're fancy.
(The TZ-taste freshness CI checks sources weekly — your own repo should check
for placeholder leaks on every push.)

## Per-DNA imagery cheat sheet

| DNA | Imagery language | Hero move |
|---|---|---|
| editorial-serif | warm documentary photo, one only | full-bleed type + single vertical photo |
| dark-luxe | dark, moody, sparse photography | one cinematic image, lots of black around it |
| ma-japanese | one quiet photo or none | emptiness; image as a small framed moment |
| swiss-rational | B&W documentary, data viz | grid of images or pure data |
| industrial-brutalist | harsh B&W, technical diagrams | full-bleed B&W with safety-orange annotation |
| neo-brutalist-pop | sticker illustration, bold photo | illustrated hero, thick borders |
| soft-minimal | product UI screenshots, subtle illustration | the product itself, floating on off-white |
| glass-calm | pastel photography, soft 3D | frosted card over dreamy imagery |
| retro-terminal | none — ASCII, scanlines, terminal output | a live terminal session |
| acid-rave | gig photography, flyer collage | maximum-volume collage |
| y2k-chrome | glossy renders, iridescent product shots | chrome-drenched product moment |
| docs-solar | diagrams, annotated screenshots | the clearest diagram you've got |

## Art-directing AI-generated imagery

Generative image tools are now a legitimate source — *if* art-directed.
Undirected AI imagery has tells as recognizable as the purple gradient:
overly smooth skin, impossible hands (fading but not gone), the same three
color palettes, a vague "premium" sheen on everything. The protocol:

1. **Prompt the grade, not just the subject.** "Wood-fired restaurant
   hearth, documentary photography, warm tungsten light, high contrast,
   shallow depth of field" — then apply the DNA's CSS grade recipe on top
   anyway. The prompt gets you 70% there; the grade unifies it with the
   rest of the page.
2. **Generate in series.** One image per prompt produces orphans. Generate
   5–10 variations of the same subject/lighting/palette, pick the family
   that coheres, discard the rest. Art direction is selection as much as
   creation.
3. **Ban the defaults in the prompt.** Add negatives: "no purple
   gradients, no glowing abstract shapes, no lens-flare premium look." The
   model's defaults are the slop list — name them to exclude them.
4. **Post-process like a photo.** The DNA grade recipe applies to AI images
   exactly as to photos. An AI image with the editorial-serif sepia grade
   sits in the family; without it, it floats.
5. **Disclose when it matters.** Marketing imagery for a real business
   (the restaurant's actual dining room) must be real. AI imagery is for
   the abstract: concepts, textures, backgrounds. Never fake the specific.

## Image performance (art direction includes loading)

- **The hero image is the LCP.** Preload it, `fetchpriority="high"`, sized
  to its slot. A 2MB hero is an art-direction failure regardless of how
  good it looks.
- **Below the fold: lazy, always.** `loading="lazy"` + explicit dimensions
  (no layout shift). The shipping checklist covers the mechanics
  (docs/shipping-checklist.md); the art-direction point is that *which*
  images load first is a hierarchy decision — the focal image loads first,
  supporting images wait.
- **AVIF/WebP with fallbacks**, `srcset` for density. Serve the grade
  baked in where possible (CSS filters are cheap, but baked grades are
  cheaper and consistent across browsers).

## The imagery audit

- [ ] One imagery language decided (photo / illustration / none)
- [ ] Every photo graded with the DNA recipe; no mixed grades
- [ ] No dark overlay + white headline anywhere
- [ ] Aspect ratios limited to 2–3 per page
- [ ] Illustrations all one style; each one earns its place
- [ ] No glossy-AI-blob renders without hard art direction
- [ ] AI-generated images: prompted with grade + negatives, generated in series, post-graded
- [ ] Logos grayscaled or replaced with a mono text list
- [ ] Zero picsum/placeholder URLs in production (grep it)
- [ ] All images rights-cleared, alt text written by a human
- [ ] Hero preloaded and sized; everything else lazy with explicit dimensions

---

*Part of [TZ-taste](https://github.com/rawmware/TZ-taste). Sources for free
imagery live in sources/sources.json — licenses verified weekly by CI.*
