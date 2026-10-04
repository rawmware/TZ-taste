<!--tz-meta {"id":"ticket-stub","name":"Ticket Stub","vibe":"Admit one. The paper left in your pocket after the lights came up. Keep it — you'll want the date.","file":"styles/ticket-stub.md","tags":["cinema","music","ephemera"],"best_for":["venues","festivals","theaters","tours"],"fonts":{"display":"Oswald","body":"Public Sans","mono":"DM Mono"},"tokens":{"bg":"#f1ece1","surface":"#e3d9c4","ink":"#241f18","accent":"#b23a2e","muted":"#8a7d66","line":"#241f182b"},"dials":{"variance":6,"motion":4,"density":5}} -->
# Ticket Stub

> Admit one. The paper left in your pocket after the lights came up.
> Keep it — you'll want the date.

## Tokens

| Token | Value | Role |
|---|---|---|
| `--bg` | `#f1ece1` | Stub paper |
| `--surface` | `#e3d9c4` | The retained half, panels |
| `--ink` | `#241f18` | Box-office ink |
| `--muted` | `#8a7d66` | Faded print, secondary text |
| `--accent` | `#b23a2e` | Cinema red — stamps, SOLD OUT, one per page |
| `--line` | `#241f182b` | Perforation guides (alpha allowed on lines) |

## Type

- **Display:** Oswald (uppercase condensed — the ADMIT ONE type, 3–6rem)
- **Body:** Public Sans (1rem, the usher's voice — clear directions)
- **Mono:** DM Mono (seat, row, fine print — "SEC C / ROW 9", "NO REFUNDS")

Google Fonts: `Oswald:wght@500;600;700` `Public+Sans:wght@400;500;700` `DM+Mono:wght@400;500`

## Spacing & shape

- Sections are torn stubs with perforated edges — the dot-mask edge, reused honestly.
- Seat/row/date blocks set as labels down one margin, like the stub's serial run.
- The tear line is the section divider; content sits on either side of it.
- Radius: `0px`. Stubs tear; they don't round.

## Motion

Stubs rock one degree on hover (rotate, transform only). A "tear" on click
shifts the perforation mask (transform/opacity only). With reduced motion: the
stubs stay in the roll.

## Do

- Set real show details: "Doors 7, show 8. Latecomers seated at intermission."
- Write keeper microcopy: "Keep this stub — it's also your coat-check claim."
- Stamp the status in accent red: "ON SALE NOW" or "SOLD OUT", set per page.
- Date everything like box-office type: "FRI OCT 9".

## Don't

- No purple or blue gradients — the stub is printed flat, in one or two colors.
- No marquee-bulb kitsch, no starburst "SALE" graphics.
- No stock concert photo with a dark overlay; the ticket is the image.
- No emoji, no lorem — the box office doesn't do placeholders.

## The one weird thing

The page header is a box-office window — a framed panel stamped "ON SALE NOW"
or "SOLD OUT" in accent red, with the night's date, doors, and showtime set
like real box-office type.

## Best for

Venues, festivals, theaters, tours.

## Pairs with patterns

`cards-event` `heroes-gig-poster` `pricing-sticker` `forms-waitlist` `testimonials-social` `footers-marquee`

## Lineage

Cinema and concert ephemera — the perforated stub, the box-office window, "no
refunds" set small and final. ≠ neon-diner: the paper in your pocket after the
show, not the neon out front. Principles only — 100% original implementation.
