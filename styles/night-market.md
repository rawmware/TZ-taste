<!--tz-meta {"id":"night-market","name":"Night Market","vibe":"Strings of lanterns over wet pavement, hand-painted stall signs, steam off the grill. Eat first, ask questions later.","file":"styles/night-market.md","tags":["night","street-food","lantern"],"best_for":["food-trucks","festivals","restaurants","travel"],"fonts":{"display":"Fraunces","body":"Mulish","mono":"JetBrains Mono"},"tokens":{"bg":"#161009","surface":"#221a10","ink":"#f5ead6","accent":"#e8722a","muted":"#a8967a","line":"#f5ead61f"},"dials":{"variance":6,"motion":5,"density":4}} -->
# Night Market

> Strings of lanterns over wet pavement, hand-painted stall signs, steam off the grill.
> Eat first, ask questions later.

## Tokens

| Token | Value | Role |
|---|---|---|
| `--bg` | `#161009` | Night, warm black |
| `--surface` | `#221a10` | Stall awning, card panels |
| `--ink` | `#f5ead6` | Lantern-lit paper |
| `--muted` | `#a8967a` | Smoke and shadow, secondary text |
| `--accent` | `#e8722a` | Lantern amber — prices, the glow, used sparingly |
| `--line` | `#f5ead61f` | Hairlines in the dark (alpha allowed on lines) |

## Type

- **Display:** Fraunces (warm and heavy — the hand-painted stall sign, 3–6rem)
- **Body:** Mulish (1rem, friendly, readable in the dark)
- **Mono:** JetBrains Mono (stall numbers, prices — "STALL 12", "$6")

Google Fonts: `Fraunces:wght@600;700;900` `Mulish:wght@400;500;700` `JetBrains+Mono:wght@400;500`

## Spacing & shape

- Stall-row layout: offerings run in horizontal strips, like walking the lane.
- Prices set big in mono — "$6" is the headline of every stall card.
- Strings of lantern dots (small, round, accent) divide sections like lights overhead.
- Radius: `10px`. Paper lanterns are round; so are the cards.

## Motion

Lantern dots sway almost imperceptibly (small rotate/translate, transform
only). Stall cards lift on hover (translateY, opacity of a warm glow). With
reduced motion: the lanterns hang still.

## Do

- Put prices everywhere, set like a chalkboard: "Noodles $6, extra egg $1."
- Write honest hawker copy: "Sold out by 9 most nights. Come early."
- Let one warm radial glow sit behind the hero — lantern light, never neon.
- Number the stalls; regulars navigate by number, not by name.

## Don't

- No purple or blue gradients — night here is warm black and amber, never neon.
- No emoji icons; no stock night-market photo with a dark overlay.
- No generic "authentic" claims; name the dish, name the price.
- No lorem — the menu is the copy.

## The one weird thing

Each section opens with a hanging stall sign — a small plank with the section
name painted in display type, swinging almost imperceptibly, like it's hung
from the section above it.

## Best for

Food trucks, festivals, restaurants, travel.

## Pairs with patterns

`cards-event` `pricing-sticker` `testimonials-masonry` `faq-columns` `footers-marquee` `cta-sticker`

## Lineage

Lantern-string hawker craft — hand-painted stall signs, chalked prices, paper
lanterns strung over a night bazaar. ≠ tokyo-neon / tokyo-kissaten:
hawker warmth and steam, not neon nightlife or kissaten calm. Principles only
— 100% original implementation.
