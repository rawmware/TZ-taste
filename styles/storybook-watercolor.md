<!--tz-meta {"id":"storybook-watercolor","name":"Storybook Watercolor","vibe":"A children's picture book: washed paper, ink outlines, hand-lettered display. Read me like it's bedtime.","file":"styles/storybook-watercolor.md","tags":["watercolor","storybook","handmade"],"best_for":["childrens-books","schools","family-events"],"fonts":{"display":"Caveat","body":"Karla","mono":"Space Mono"},"tokens":{"bg":"#f7f0dc","ink":"#2e2a23","accent":"#d95f43","muted":"#8a7f6c","line":"#2e2a2326"},"dials":{"variance":7,"motion":5,"density":2}} -->
# Storybook Watercolor

> A children's picture book: washed paper, ink outlines, hand-lettered display.
> Read me like it's bedtime.

## Tokens

| Token | Value | Role |
|---|---|---|
| `--bg` | `#f7f0dc` | Washed paper, warm daylight |
| `--surface` | `#fdf8ea` | Lighter wash — story panels |
| `--ink` | `#2e2a23` | Warm ink, outlines and text |
| `--muted` | `#8a7f6c` | Pencil-gray captions and asides |
| `--accent` | `#d95f43` | Poppy red — one painted shape per page |
| `--line` | `#2e2a2326` | Ink-wash dividers (alpha allowed on lines) |

## Type

- **Display:** Caveat (hand-lettered, sentence case, 2.5–4rem; hero line gets a slight `-1deg` tilt, never all caps)
- **Body:** Karla (1–1.05rem, friendly leading, 45–65ch measure)
- **Mono:** Space Mono (page numbers, dates — "Page 3", "Sat 10am")

Google Fonts: `Caveat:wght@500;700` `Karla:wght@400;500;700` `Space+Mono:wght@400;700`

## Spacing & shape

- Hand-drawn wobble radius on cards: `border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px`. Nothing is a perfect rectangle.
- Torn-paper dividers between sections; washes bleed to the viewport edge.
- Compositions sit slightly off-center, like an illustration mid-page — the headline leans left, the painting leans right.

## Motion

Paint washes fade in like wet pigment (opacity + slight scale, 600–900ms).
Headlines reveal with a mask wipe, left to right, as if being lettered.
Illustrations get a gentle float — nothing snaps, nothing springs. With reduced
motion, everything is simply there, already dry.

## Do

- Letter the hero headline by hand-feel: "The bakery opens at dawn."
- Give each section one watercolor wash as its background; hold illustrations in visible ink outlines.
- Number sections like story pages: "Chapter Two: Flavors."
- Write buttons that say what happens: "Read the menu", "Save a seat Saturday".

## Don't

- No CSS linear gradients — washes are flat pigment plus paper grain, never a gradient fill.
- No sharp corporate geometry; no 4px-everywhere radius systems.
- No emoji icons — draw simple ink icons with a consistent wobbly stroke.
- No lorem, no dark mode. This DNA lives in daylight.

## The one weird thing

One coffee-ring stain per site, placed somewhere honest — next to the Saturday
hours. And every headline gets a crayon underline in accent, drawn slightly
too long on the right side.

## Best for

Children's books, schools, playgrounds, family events.

## Pairs with patterns

`hero-editorial` `cards-article` `testimonials-solo` `faq-accordion` `cta-sticker` `footer`

## Lineage

The principles of mid-century picture-book illustration — ink contour holding
flat wash, deckled paper edges, the hand-lettered title page; the discipline
of one idea per spread. Principles only — 100% original implementation.
