<!--tz-meta {"id":"greenmarket-dawn","name":"Greenmarket Dawn","vibe":"6am at the farmers market: dew on greens, kraft paper, chalked price tags.","file":"styles/greenmarket-dawn.md","tags":["market","produce","morning"],"best_for":["farmers-markets","groceries","csa","cafes"],"fonts":{"display":"DM Serif Display","body":"Work Sans","mono":"Courier Prime"},"tokens":{"bg":"#faf6ec","ink":"#243015","accent":"#4a7c2f","muted":"#8a8468","line":"#24301529"},"dials":{"variance":5,"motion":3,"density":6}} -->
# Greenmarket Dawn

> 6am at the farmers market: dew on greens, kraft paper, chalked price tags.
> Everything here was picked yesterday. The page should feel like it too.

## Tokens

| Token | Value | Role |
|---|---|---|
| `--bg` | `#faf6ec` | Kraft paper background |
| `--surface` | `#f0e7cf` | Paper-bag panels, stall cards |
| `--ink` | `#243015` | Deep produce-green-black text |
| `--muted` | `#8a8468` | Kraft-dust — origins, weights, small print |
| `--accent` | `#4a7c2f` | Produce green — prices, freshness marks, one stem per section |
| `--line` | `#24301529` | Kraft hairline rules (alpha allowed on lines) |

## Type

- **Display:** DM Serif Display (dawn-fresh, large, sentence case)
- **Body:** Work Sans (1–1.125rem, plainspoken; the farmer explaining the apple)
- **Mono:** Courier Prime (chalked prices and weights — "$4/LB", tabular, honest)

Google Fonts: `DM+Serif+Display:wght@400` `Work+Sans:wght@400;500;600`
`Courier+Prime:wght@400;700`

## Spacing & shape

- Airy like an empty market at opening: wide gaps, one basket per section.
- Radius: `6px` — softened like a folded paper bag, never sharp, never pill.
- Sections sit on kraft panels with hairline rules; produce green is a detail, not a field.
- Rhythm: sparse stalls, then one full crate. Morning, not midday.

## Motion

Tags sway once into place (transform rotate settle, 500ms) when scrolled
into view; copy fades up like dew lifting, 400ms. Nothing loops — dawn
happens once. Honor `prefers-reduced-motion`: tags are simply pinned.

## Do

- Pin chalked price tags at section corners: mono prices on rotated kraft tags with a pin dot — "$4/LB".
- Write produce copy like the stall sign: "Heirloom tomatoes · $4/lb — picked yesterday."
- Use produce green for prices and freshness marks only: "picked 5am", "last crate".
- Keep the voice of the early regular: "Samples are free. Opinions cost extra."

## Don't

- No jewel tones, no saturated maximalism — this is 6am, not noon.
- No gradients, no glass; kraft paper is matte.
- No three-equal-cards of "benefits" — produce is a list with prices, ranked by season.
- No lorem — a price tag with fake copy is an empty stall. Write the actual price.

## The one weird thing

Give each page a "first stall" note: one small rotated kraft tag pinned
top-right of the hero — "First stall past the gate. Follow the smell of
basil." — in mono, with a pin dot. One tag, always slightly crooked,
always the detail a regular would notice.

## Best for

Farmers markets, grocery brands, CSA programs, farm-to-table cafés.

## Pairs with patterns

`pricing-single` `cards-product` `features-rows` `forms-newsletter-card` `stats-dotmap` `cta-card` `testimonials-masonry`

## Lineage

Dawn produce markets and kraft paper bags; chalkboard price signs written at
5am; the restraint of an empty market at opening — green on kraft, one
basket at a time. Not bazaar-spice: the spice bazaar is midday maximalism —
saturated color, dense stalls, every sense shouting. This is 6am: dew,
restraint, quiet. (A bazaar-spice DNA is being written in parallel by
another writer; this one keeps its distance — no jewel tones, no density, no
noise.) Principles only — 100% original implementation.
