<!--tz-meta {"id":"laundromat-neon","name":"Laundromat Neon","vibe":"Open 24 hours: humming fluorescents over white tile, mint and chrome at 3am.","file":"styles/laundromat-neon.md","tags":["laundromat","fluorescent","retro"],"best_for":["laundromats","coin-ops","late-night","local-services"],"fonts":{"display":"Bungee","body":"DM Sans","mono":"Fira Code"},"tokens":{"bg":"#f3f7f5","ink":"#14201c","accent":"#2fd08a","muted":"#6b7f76","line":"#14201c21"},"dials":{"variance":4,"motion":4,"density":7}} -->
# Laundromat Neon

> Open 24 hours: humming fluorescents over white tile, mint and chrome at 3am.
> Nobody is here for the atmosphere. Everybody is here because it works.

## Tokens

| Token | Value | Role |
|---|---|---|
| `--bg` | `#f3f7f5` | White tile background |
| `--surface` | `#e4efe9` | Machine-row panels, service cards |
| `--ink` | `#14201c` | Deep teal-black text |
| `--muted` | `#6b7f76` | Chrome gray-green — labels, fine print |
| `--accent` | `#2fd08a` | Fluorescent mint — open signs, running states, one underline |
| `--line` | `#14201c21` | Tile-grout hairlines (alpha allowed on lines) |

## Type

- **Display:** Bungee (signage, stacked lines — like the decal in the window)
- **Body:** DM Sans (1–1.1rem, straightforward; instructions, not poetry)
- **Mono:** Fira Code (cycle timers, price-per-load — "WASHER 04 · 00:23 LEFT")

Google Fonts: `Bungee:wght@400` `DM+Sans:wght@400;500;700`
`Fira+Code:wght@400;600`

## Spacing & shape

- Grid like a wall of machines: even rows, even gaps, grout-thin lines between.
- Radius: `4px` — rounded like machine panels, never pill.
- The OPEN sign lives top-left, always: stacked display type in fluorescent mint.
- Rhythm: machine rows, machine rows, then the one mint sign that says it all.

## Motion

A soft fluorescent hum: accent glows pulse gently (opacity, 3s ease-in-out).
Machine timers tick down. Signs flicker once on load, then hold steady.
Honor `prefers-reduced-motion`: no flicker, no hum — everything simply lit.

## Do

- Put the hours where the sign goes: "OPEN 24 HOURS — somebody's always folding."
- Price it like the wall chart: "WASH $4.50 · DRY 25¢ / 7 MIN" in mono.
- Build the machine status board: rows labeled WASHER 01–08, mono countdowns, mint "RUNNING" vs gray "OPEN".
- Write the copy a 3am regular would nod at: "Lost sock? Check the wall of fame by dryer 12."

## Don't

- No chrome-and-cherry-red diner language — this is mint and tile, not vinyl booths.
- No gradients, no glass; fluorescent light is flat and honest.
- No three-equal-cards of "amenities" — services are a price list, ranked by use.
- No lorem — a price board with fake prices is a lie. Write the actual prices.

## The one weird thing

Give the page a working machine board: eight washer rows with real mono
countdown timers and mint RUNNING / gray OPEN states, updating in place. It
is the most honest interactive element on the internet — a laundromat page
that shows you which machine is free.

## Best for

Laundromats, coin-op services, late-night local businesses, laundromats again.

## Pairs with patterns

`heroes-chrome-type` `forms-waitlist` `stats-bars` `misc-modal` `cta-split` `navs-bottom-tabs` `faq-blocks`

## Lineage

Midcentury laundromat signage and fluorescent tube lighting; white ceramic
tile and chrome trim; the price board as the entire information architecture.
Not neon-diner: the diner is chrome bumpers and cherry-red vinyl at noon —
atmosphere lighting for milkshakes. The laundromat is fluorescent mint over
white tile at 3am — utility lighting for getting the wash done. (A
neon-diner DNA is being written in parallel by another writer; this one stays
fluorescent, mint, and tile — no red vinyl, no jukebox.) Principles only —
100% original implementation.
