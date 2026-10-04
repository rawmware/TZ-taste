<!--tz-meta {"id":"tokyo-neon","name":"Tokyo Neon","vibe":"Electric signage culture: hot pink and cyan on black, vertical accents, the glow of a Shinjuku side street.","file":"styles/tokyo-neon.md","tags":["tokyo","neon","signage"],"best_for":["arcades","ramen-shops","nightlife"],"fonts":{"display":"Zen Dots","body":"Space Grotesk","mono":"Space Mono"},"tokens":{"bg":"#0a0a10","ink":"#f4f4f0","accent":"#ff2e88","muted":"#6b6b78","line":"#232330"},"dials":{"variance":8,"motion":8,"density":5}} -->

# Tokyo Neon

> After-midnight signage culture — the hum of a side-street sign column, arcade marquees, ramen-shop noren at 2am. Hot pink and cyan on near-black, with vertical text running like a real signpost.

## Tokens

| Token | Value | Role |
| --- | --- | --- |
| `--bg` | `#0a0a10` | night street black |
| `--surface` | `#13131c` | sign panel |
| `--ink` | `#f4f4f0` | tube-lit white |
| `--muted` | `#6b6b78` | back-alley gray |
| `--accent` | `#ff2e88` | hot pink neon |
| `--line` | `#232330` | panel seams |
| `--accent-2` | `#00e5ff` | cyan neon |

## Type

- **Display:** Zen Dots — the dotted-tube lettering of neon signage. Headlines should glow: tight tracking, uppercase, and a soft pink text-shadow that fakes tube light.
- **Body:** Space Grotesk — the functional ground under the glow. Menu text, hours, directions — legible and slightly technical.
- **Mono:** Space Mono — prices, opening hours, ticket counts, floor numbers. Neon sign columns were basically spec sheets with light.

Google Fonts: `Zen+Dots`, `Space+Grotesk:wght@400;500;700`, `Space+Mono:wght@400;700`

## Spacing & shape

- Dense and stacked like a sign column: tight vertical rhythm, signage elements hanging close together.
- Thin tube borders (1–2px) with glow shadows do the framing work — no heavy cards.
- Vertical text runs (writing-mode) along one edge of major sections, like the tall signs jutting from shopfronts.
- Radius stays sharp or barely rounded; neon is bent glass, not bubble letters.

## Motion

This is the high-motion DNA: signs flicker on, letters buzz, the hero has a slow electric flicker loop (opacity 0.92↔1 on a long, irregular keyframe so it feels like a real tube, not an animation). Marquee strips scroll at street pace. Keep flicker subtle enough to never trigger vestibular complaints — one flickering element per viewport max.

## Do

- Put a vertical accent strip of text on the page edge — shop name, "OPEN 24H", "2F ↑" — it instantly reads as Tokyo signage.
- Use the two accent colors as alternating signage, never blended: pink sign here, cyan sign there, black between.
- Glow only the display type — a body paragraph with a glow is a broken sign.
- Give interactive elements a "sign buzz": on hover the border brightens and the glow tightens, like a tube warming up.

## Don't

- Don't go acid-rave: no warped type, no checkerboard, no chaos collage — this is orderly, commercial signage culture.
- Don't put neon on light backgrounds — the black is what makes the tubes read.
- Don't use emoji or stock icons — a simple outlined shape (circle, arrow, kanji-style divider) in a tube border is the whole icon system.
- Don't flicker everything — one hero element flickers, the rest stay steady like working signs.

## The one weird thing

Build a sign column: a tall vertical stack in the corner with 4–6 little mono labels ("BAR", "KARAOKE", "2F", "OPEN") that light up in sequence as you scroll, pink→cyan→pink, like a building lighting floor by floor at night. Or make the CTA a marquee tube — an infinite scrolling strip inside a bordered sign frame that speeds up slightly on hover. Pick one.

## Best for

Arcades, ramen shops, late-night venues, night markets, city guides.

## Pairs with patterns

`hero-kinetic`, `nav-minimal`, `marquee`, `cards`, `stats`, `cta`, `footer`

## Lineage

The commercial-signage discipline of dense urban night streets — every sign has a job (find me, enter here, open now); the vertical sign column as information hierarchy; arcade marquee typography built to be read from across a crowd.
