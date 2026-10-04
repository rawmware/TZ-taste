<!--tz-meta {"id":"postage-stamp","name":"Postage Stamp","vibe":"Engraved portraits the size of a thumbnail, perforated edges, gum on the back. Mail still moves at the speed of care.","file":"styles/postage-stamp.md","tags":["philatelic","print","miniature"],"best_for":["museums","newsletters","small-brands","wedding-sites"],"fonts":{"display":"Bodoni Moda","body":"Libre Franklin","mono":"IBM Plex Mono"},"tokens":{"bg":"#f4f1e6","surface":"#e6dfcc","ink":"#2e2a24","accent":"#b03a2e","muted":"#8a7f6a","line":"#2e2a2426"},"dials":{"variance":6,"motion":3,"density":5}} -->
# Postage Stamp

> Engraved portraits the size of a thumbnail, perforated edges, gum on the back.
> Mail still moves at the speed of care.

## Tokens

| Token | Value | Role |
|---|---|---|
| `--bg` | `#f4f1e6` | Stamp paper |
| `--surface` | `#e6dfcc` | Aged envelope, inner panels |
| `--ink` | `#2e2a24` | Engraving ink |
| `--muted` | `#8a7f6a` | Cancelled-gray secondary text |
| `--accent` | `#b03a2e` | Postal red — postmarks, one per page |
| `--line` | `#2e2a2426` | Hairlines, perforation guides (alpha allowed on lines) |

## Type

- **Display:** Bodoni Moda (engraved, high contrast — denomination numerals and mastheads, 3–6rem)
- **Body:** Libre Franklin (1rem, the fine print under the stamp — plain and legible)
- **Mono:** IBM Plex Mono (postmarks, dates, routes — "PORTLAND ME / OCT 3 / FIRST CLASS")

Google Fonts: `Bodoni+Moda:opsz,wght@6..96,500;6..96,700` `Libre+Franklin:wght@400;500;700` `IBM+Plex+Mono:wght@400;500`

## Spacing & shape

- Every module sits inside a perforated stamp frame — the edge punched with a radial-gradient dot mask, not a border.
- Oversized denomination numerals ("25", "50") anchor sections like stamp values.
- Postmark rings — a circle with wavy cancellation bars — divide major sections.
- Radius: `0px`. Stamps are rectangles; the perforation is the decoration.

## Motion

Stamps tilt one degree on hover (rotate, transform only). The postmark stamps
down once on load — a quick scale from 1.15 with opacity — then rests. With
reduced motion: already delivered, perfectly still.

## Do

- Set real dates in the postmarks: "OCT 3 2026", never a placeholder.
- Run the cancellation bars across the CTA: "Paid. Sent. Done."
- Write microcopy like the mailroom means it: "Postmarked Tuesday. It'll get there."
- Use denomination-style numerals for pricing tiers: "25" reads friendlier than "$25/mo".

## Don't

- No purple or blue gradients — paper is flat, ink is flat, the postmark is flat.
- No glossy 3D stamps or drop-shadowed "peeling" effects.
- No fake countries on the stamps; if it says a place, it should be a real one.
- No emoji, no lorem — the mailroom keeps real hours.

## The one weird thing

The page header carries a real-style postmark — city, date, and wavy
cancellation lines — overlapping the hero's corner like actual handled mail,
set fresh per page.

## Best for

Museums, newsletters, small brands, wedding sites.

## Pairs with patterns

`hero-editorial` `cards-event` `stats-table` `forms-newsletter-card` `faq-hairline` `footer`

## Lineage

Philatelic craft — the engraved intaglio miniature, the perforated edge, the
cancellation postmark. ≠ newsroom-wire: a collectible printed by a state mint,
not a broadsheet front page. Principles only — 100% original implementation.
