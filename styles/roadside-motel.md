<!--tz-meta {"id":"roadside-motel","name":"Roadside Motel","vibe":"Highway typography: the sign is taller than the building, the pool is closed, and the vacancy light has been on since 1962 and it is still on.","file":"styles/roadside-motel.md","tags":["motel","highway","americana"],"best_for":["motels","roadside-attractions","retro-brands","travel"],"fonts":{"display":"Yellowtail","body":"Karla","mono":"IBM Plex Mono"},"tokens":{"bg":"#101c2c","surface":"#1a2a40","ink":"#f3ead8","accent":"#e8b53a","muted":"#8d99a8","line":"#f3ead81f"},"dials":{"variance":6,"motion":5,"density":3}} -->
# Roadside Motel

> Highway typography: the sign is taller than the building, the pool is closed,
> and the vacancy light has been on since 1962 and it is still on.

## Tokens

| Token | Value | Role |
|---|---|---|
| `--bg` | `#101c2c` | Highway night, flat |
| `--surface` | `#1a2a40` | Later night — room-card bands |
| `--ink` | `#f3ead8` | Sign-bulb cream type |
| `--muted` | `#8d99a8` | Distant headlights, secondary text |
| `--accent` | `#e8b53a` | Sign amber — vacancy light, one per page |
| `--line` | `#f3ead81f` | Changeable-letter hairlines (alpha allowed on lines) |

## Type

- **Display:** Yellowtail (script motel sign — "Starlight", the big pylon letters)
- **Body:** Karla (1rem, front-desk plain talk)
- **Mono:** IBM Plex Mono (changeable letters — "VACANCY · ICE · COLOR TV")

Google Fonts: `Yellowtail` `Karla:wght@400;500;700` `IBM+Plex+Mono:wght@400;500`

## Spacing & shape

- One tall sign moment up top — the script masthead, big and glowing.
- Everything else rows out like the rooms along the lot, in the later-night tone.
- Changeable-letter rails separate sections: hairline, mono, uppercase.
- Radius: `6px`. Rounded like a pylon-sign cabinet.

## Motion

The VACANCY badge flickers on once at load (opacity only) — then holds
steady, like the sign warming up. Nothing else moves.
With reduced motion: the sign is already on.

## Do

- Write the sign like a human: "Clean rooms. Honest rates. Ice machine works."
- Set the amenities as changeable letters in mono — "VACANCY · POOL · ICE".
- Spend the sign amber once per viewport: the vacancy light or the CTA.
- Microcopy from the desk: "Checkout is eleven. The coffee is free."

## Don't

- No purple or blue gradients — the highway night is flat, never a gradient.
- No retro kitsch beyond the sign itself: no pink flamingos, no Route 66 shields as icons.
- No emoji icons; no lorem — the sign has real letters on it.
- No bright daytime sections. This is 10 p.m. off the interstate; the dark has a reason.

## The one weird thing

A VACANCY / NO VACANCY toggle in the header — a real switch, in mono.
Flip it to NO VACANCY and the whole page dims: muted text drops a stop,
the CTA reads "Call ahead next time". Flip it back and the lights come up.

## Best for

Motels, roadside attractions, retro brands, travel.

## Pairs with patterns

`hero-marquee` `cards-room` `stats-table` `cta-card` `footer`

## Lineage

Roadside signage craft — tall pylon signs, changeable letters, the
vacancy light, the ice machine. Set apart from neon-diner: vacancy-sign
typography, not diner interior. Principles only — 100% original
implementation.
