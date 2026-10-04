<!--tz-meta {"id":"tokyo-kissaten","name":"Tokyo Kissaten","vibe":"Showa-era Japanese coffee house: dark walnut, worn velvet booths, low brass lamps, and the slow pour of a siphon brewer.","file":"styles/tokyo-kissaten.md","tags":["japanese","retro","cafe","warm"],"best_for":["cafes","restaurants","jazz-bars","bookshops"],"fonts":{"display":"Shippori Mincho","body":"Zen Kaku Gothic New","mono":"IBM Plex Mono"},"tokens":{"bg":"#171009","ink":"#f3e4c8","accent":"#d9a441","muted":"#9a7c5e","line":"#d9a44155"},"dials":{"variance":4,"motion":2,"density":3}} -->
# Tokyo Kissaten

> Showa-era Japanese coffee house: dark walnut walls, worn velvet booths,
> low brass lamps, and the slow pour of a siphon brewer. Time moves at
> pour-over speed.

## Tokens

| Token | Value | Role |
|---|---|---|
| `--bg` | `#171009` | Dark walnut interior |
| `--surface` | `#241a0f` | Velvet booth panels, menu boards |
| `--ink` | `#f3e4c8` | Lamplight on paper |
| `--muted` | `#9a7c5e` | Coffee-stain browns, captions |
| `--accent` | `#d9a441` | Brass lamp glow — rules, small marks |
| `--line` | `#d9a44155` | Hairline brass dividers (alpha allowed on lines) |

## Type

- **Display:** Shippori Mincho (stately, slow — set big with generous leading; Japanese text sets beside it, never inside it)
- **Body:** Zen Kaku Gothic New (0.95–1.05rem; warm, rounded, unhurried)
- **Mono:** IBM Plex Mono (prices on the menu, opening hours, "Est. 1968" stamps)

Google Fonts: `Shippori+Mincho:wght@500;700` `Zen+Kaku+Gothic+New:wght@400;500;700`
`IBM+Plex+Mono:wght@400;500`

## Spacing & shape

- Dense and low: sections sit close like booth tables, `py-20 md:py-28`, with wide horizontal margins — nothing touches the edge.
- Radius: `0px`. Wood and brass are square.
- Menu-board discipline: items in ruled rows, dotted leaders between name and price — "Coffee (siphon) .... ¥600".
- One glowing panel per page: a backlit menu board in brass, everything else dim walnut.

## Motion

Almost none. Pages fade in once, slow (1000ms), like eyes adjusting to a dim
room. Hover states warm slightly — a lamp turning up, not a UI event. No
scroll choreography, no parallax, no bouncing. A kissaten is the opposite of
urgent.

## Do

- Write microcopy like the master behind the counter wrote it: "No Wi-Fi. The coffee is the point."
- Show the menu as a ruled board: name, dotted leader, price. No cards, no tiles.
- Set one vertical Japanese phrase as a design element — 昭和の喫茶店 — running down the hero's edge like a noren curtain.
- Let brass mark only the important things: the reservation line, today's special, the closing time.

## Don't

- No neon, no cyberpunk signage — the lamps here are incandescent.
- No stock photos of laptops in cafés; show the cup, the siphon, the wood grain.
- No rounded pill buttons — square brass-bordered buttons, like a nameplate.
- No three equal feature cards; a kissaten has one menu, read top to bottom.

## The one weird thing

Add one honest house rule per page, typeset small and centered like a framed
sign on the wall: "Please keep voices low — the jazz is loud enough." or
"Second pour is free. Third pour means you live here now." Kissaten have rules
and they are part of the charm.

## Best for

Cafés and coffee houses, restaurants, jazz bars, bookshops.

## Pairs with patterns

`heroes-noir` `cards-editorial` `testimonials-solo` `pricing-luxe` `cta-luxe` `nav-minimal` `footer`

## Lineage

The hand-lettered menu boards of Showa-era kissaten; the low-brass-lamp
interior discipline of places that never redecorated; Japanese typesetting
rhythm with vertical text as ornament. Principles only — 100% original
implementation. Explicitly not `tokyo-neon`: this is kissaten warmth — wood,
velvet, and lamplight — against neon cyber; no glowing signage, no night-city
electricity.
