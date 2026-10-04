<!--tz-meta {"id":"drive-in-theater","name":"Drive-In Theater","vibe":"Dusk at the lot: the sky goes flat indigo, the marquee flickers on, and the second feature starts whether you are back from the snack bar or not.","file":"styles/drive-in-theater.md","tags":["retro","cinema","night"],"best_for":["film-festivals","event-venues","nostalgia-brands","music"],"fonts":{"display":"Limelight","body":"Figtree","mono":"IBM Plex Mono"},"tokens":{"bg":"#151423","surface":"#211f33","ink":"#f4efe4","accent":"#f2a93b","muted":"#8f8ba0","line":"#f4efe41f"},"dials":{"variance":6,"motion":6,"density":3}} -->
# Drive-In Theater

> Dusk at the lot: the sky goes flat indigo, the marquee flickers on,
> and the second feature starts whether you are back from the snack bar or not.

## Tokens

| Token | Value | Role |
|---|---|---|
| `--bg` | `#151423` | Dusk sky, flat |
| `--surface` | `#211f33` | Later dusk — schedule bands |
| `--ink` | `#f4efe4` | Marquee-bulb cream type |
| `--muted` | `#8f8ba0` | Distant headlights, secondary text |
| `--accent` | `#f2a93b` | Marquee amber — showtimes, one per page |
| `--line` | `#f4efe41f` | Speaker-post hairlines (alpha allowed on lines) |

## Type

- **Display:** Limelight (marquee lettering, uppercase, slightly tracked — the big sign)
- **Body:** Figtree (1rem, plainspoken, stays out of the marquee's way)
- **Mono:** IBM Plex Mono (showtimes and lot rules — "GATES 7:00 · DUSK 8:40")

Google Fonts: `Limelight` `Figtree:wght@400;500;700` `IBM+Plex+Mono:wght@400;500`

## Spacing & shape

- One big marquee moment up top; everything else rows out like parked cars.
- Showtime blocks sit in the later-dusk surface tone, separated by hairlines.
- Wide, low density — the lot is big, the night is bigger.
- Radius: `4px`. Rounded like a speaker grille.

## Motion

Marquee bulbs chase along the headline rule (opacity only, slow loop).
The title flickers on once like a projector warming up — then holds steady.
With reduced motion: bulbs steady, no flicker.

## Do

- Write the marquee like a human: "Two features. One ticket. Bring a blanket."
- Set showtimes as real mono tables — gates, dusk, feature one, feature two.
- Spend the marquee amber once per viewport: the showtime or the CTA.
- Microcopy from the lot: "Tune to 88.3. Lights off, please."

## Don't

- No purple or blue gradients — the dusk sky is flat indigo, never a gradient.
- No Hollywood kitsch: no red carpets, no film-strip borders, no clapperboards.
- No emoji icons; no lorem — the marquee has real showtimes.
- No bright daytime sections. This is night; the dark has a reason.

## The one weird thing

An intermission countdown pinned in the header — "INTERMISSION ENDS IN 07:42" —
in mono, counting down for real. When it hits zero, the CTA changes from
"Get snacks" to "Hurry back".

## Best for

Film festivals, event venues, nostalgia brands, music.

## Pairs with patterns

`hero-marquee` `schedule-table` `cards-event` `cta-card` `footer`

## Lineage

Midcentury marquee craft — changeable-letter boards, speaker-post
instructions, painted lot signs. Set apart from roadside-motel: marquee
showtime typography, not vacancy-sign typography. Principles only — 100%
original implementation.
