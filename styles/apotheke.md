<!--tz-meta {"id":"apotheke","name":"Apotheke","vibe":"Amber bottles in a row, labels in careful Latin, the mortar never quite clean. Remedies, measured twice.","file":"styles/apotheke.md","tags":["pharmacy","botanical","heritage"],"best_for":["clinics","wellness","skincare","tea-brands"],"fonts":{"display":"Cormorant Garamond","body":"Newsreader","mono":"Roboto Mono"},"tokens":{"bg":"#f3f0e6","surface":"#e6e0cd","ink":"#26302a","accent":"#2e7d4f","muted":"#7a8272","line":"#26302a26"},"dials":{"variance":4,"motion":3,"density":5}} -->
# Apotheke

> Amber bottles in a row, labels in careful Latin, the mortar never quite clean.
> Remedies, measured twice.

## Tokens

| Token | Value | Role |
|---|---|---|
| `--bg` | `#f3f0e6` | Apothecary paper |
| `--surface` | `#e6e0cd` | The shelf, prescription counter |
| `--ink` | `#26302a` | Green-black prescription ink |
| `--muted` | `#7a8272` | Faded label text, secondary |
| `--accent` | `#2e7d4f` | Apothecary green — the cross, one per page |
| `--line` | `#26302a26` | Ledger lines (alpha allowed on lines) |

## Type

- **Display:** Cormorant Garamond (pharmacopoeia serif — remedy names, 3–5rem)
- **Body:** Newsreader (1rem, the consultation voice — calm, precise)
- **Mono:** Roboto Mono (dosages, batch numbers — "No. 214", "10 ml")

Google Fonts: `Cormorant+Garamond:wght@500;600;700` `Newsreader:opsz,wght@6..72,400;6..72,500` `Roboto+Mono:wght@400;500`

## Spacing & shape

- Apothecary shelf rows: remedies lined up like amber bottles, evenly spaced.
- Dosage-table grids with ruled lines; oversized Rx numerals mark the tiers.
- Hairline rules run under everything like ledger lines.
- Radius: `0px`. Glass bottles don't round; labels don't either.

## Motion

Bottle labels tilt a degree on hover (rotate, transform only). Sections arrive
with a quiet fade-and-rise (opacity/translate), staggered. With reduced motion:
everything is already on the shelf.

## Do

- Set tables like dosages: "Take one daily, with water. Refills: two."
- Use Latin sparingly and correctly: "ex tempore" under the house blend.
- Put batch numbers in the microcopy: "Batch 214 — bottled Tuesday."
- Keep the green cross small and exact; it's a sign, not a billboard.

## Don't

- No purple or blue gradients — the shop is paper and green glass, never a glow.
- No medical-cross clip art tiled across the page.
- No wellness buzzwords; name the ingredient, state the dose.
- No emoji, no lorem — the ledger is always filled in.

## The one weird thing

Pricing is set as a dosage table — "One jar / two jars / the whole shelf" —
with instructions under each tier, like "apply generously, twice weekly."

## Best for

Clinics, wellness, skincare, tea brands.

## Pairs with patterns

`pricing-docs` `features-docs` `stats-table` `faq-accordion` `forms-newsletter-card` `footers-hairline`

## Lineage

Apothecary craft — the prescription ledger, amber glass, labels set by hand in
the back room. ≠ botanical-lab: the apothecary counter and the ledger, not the
laboratory bench. Principles only — 100% original implementation.
