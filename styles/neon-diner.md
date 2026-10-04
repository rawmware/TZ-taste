<!--tz-meta {"id":"neon-diner","name":"Neon Diner","vibe":"1950s American diner: chrome, cherry red, teal vinyl. The OPEN sign is always on.","file":"styles/neon-diner.md","tags":["diner","retro","neon"],"best_for":["diners","barbershops","milkshake-brands","drive-ins"],"fonts":{"display":"Pacifico","body":"Oswald","mono":"Space Mono"},"tokens":{"bg":"#101b17","ink":"#fdf6ea","accent":"#e23b3b","muted":"#93a89b","line":"#e23b3b59"},"dials":{"variance":5,"motion":6,"density":4}} -->
# Neon Diner

> 1950s American diner: chrome, cherry red, teal vinyl.
> The OPEN sign is always on.

## Tokens

| Token | Value | Role |
|---|---|---|
| `--bg` | `#101b17` | Deep teal night outside the window |
| `--surface` | `#1c2f29` | Vinyl booth teal — panels |
| `--ink` | `#fdf6ea` | Cream, like the coffee mugs |
| `--muted` | `#93a89b` | Faded teal, secondary text |
| `--accent` | `#e23b3b` | Cherry red — neon script, one sign per viewport |
| `--line` | `#e23b3b59` | Neon-tube rules (alpha allowed on lines) |

## Type

- **Display:** Pacifico (neon script, sentence case, red glow via `text-shadow`, never all caps)
- **Body:** Oswald (uppercase, `0.08em` tracking — menu-board signage)
- **Mono:** Space Mono (prices and hours — "2.50", "OPEN TILL 2AM")

Google Fonts: `Pacifico` `Oswald:wght@400;500;600` `Space+Mono:wght@400;700`

## Spacing & shape

- Chrome double-rules frame sections: two `1px` lines, `4px` apart.
- Menu boards use dotted leaders between item and price: "Blue Plate Special .... 8.95".
- One checker band per page, used once, then put away.
- Panels get a modest `10px` radius — booth vinyl is soft, not sharp.

## Motion

The neon flickers on once when it enters the viewport (opacity keyframes, then
steady). Hovers make signs buzz brighter. Never loop the flicker — a buzzing
loop is a headache. With reduced motion, the sign is simply on.

## Do

- Letter the hero like a window sign: "Open late." in glowing script.
- Set the menu as a real menu board, prices in mono with dotted leaders.
- Point a red arrow at the order button: "EAT →".
- Microcopy from the counter: "Coffee's hot. Pie's hotter."

## Don't

- No blue or purple anywhere — the palette is cherry red, teal, cream, chrome.
- No gradient backgrounds; glow is `text-shadow` on type, never a gradient wash.
- No emoji icons, no minimalism — this DNA is maximal in a friendly way.
- No lorem. The special of the day is a real sentence.

## The one weird thing

A small neon "OPEN" sign pinned to the top corner of every page, flickering
on once per visit. It never turns off.

## Best for

Diners, barbershops, milkshake brands, drive-ins.

## Pairs with patterns

`hero-editorial` `cards-product` `pricing` `faq-hairline` `cta-card` `footer`

## Lineage

Mid-century American roadside craft — neon tube lettering, menu-board
typography, chrome trim, the window sign as brand. Set apart from tokyo-neon:
this is chrome-and-vinyl Americana, not cyberpunk circuitry. Principles only —
100% original implementation.
