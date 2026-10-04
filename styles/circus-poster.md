<!--tz-meta {"id":"circus-poster","name":"Circus Poster","vibe":"Wood type and starbursts: a 1910 big-top bill shouted in deep red and gold.","file":"styles/circus-poster.md","tags":["circus","letterpress","vintage"],"best_for":["events","festivals","theaters","live-music"],"fonts":{"display":"Rye","body":"Bitter","mono":"Space Mono"},"tokens":{"bg":"#f5e8c8","ink":"#2b1408","accent":"#b3202c","muted":"#8a6b45","line":"#2b140829"},"dials":{"variance":8,"motion":5,"density":7}} -->
# Circus Poster

> Wood type and starbursts: a 1910 big-top bill shouted in deep red and gold.
> If it is not the loudest thing on the block, it is not done.

## Tokens

| Token | Value | Role |
|---|---|---|
| `--bg` | `#f5e8c8` | Aged bill paper background |
| `--surface` | `#eed9a8` | Handbill panels, inset playbills |
| `--ink` | `#2b1408` | Deep brown-black wood type |
| `--muted` | `#8a6b45` | Faded poster ink — small print, disclaimers |
| `--accent` | `#b3202c` | Deep circus red — headlines, rules, banners |
| `--gold` | `#c9962e` | Tarnished gold — starbursts and gilded seals only |
| `--line` | `#2b140829` | Letterpress rule color (alpha allowed on lines) |

## Type

- **Display:** Rye (wood type, huge, uppercase, never set below 3rem)
- **Body:** Bitter (playbill copy, 1–1.1rem, the voice of the barker in print)
- **Mono:** Space Mono (dates, admission prices, "DOORS 7PM" — tabular, loud)

Google Fonts: `Rye:wght@400` `Bitter:wght@400;700`
`Space+Mono:wght@400;700`

## Spacing & shape

- Everything oversized and centered; wood type needs a crowd.
- Starburst seals overlap section corners, slightly rotated, never straight.
- Thick 6px red rules frame the page; thin hairlines are banned — type this thick gets thick frames.
- Radius: `0px`. Letterpress is punched, not rounded.
- Rhythm: wall of type, then a breath of empty paper, then the wall again.

## Motion

Banners swing in once with a slight rotate-and-settle (transform, 500ms
ease-out). Starburst seals scale-pop a single time. Nothing loops, nothing
floats. A poster hangs on a wall; it does not dance.

## Do

- Stamp starburst seals in gold and red: "ONE NIGHT ONLY", "SOLD OUT" — real claims, real dates.
- Set admission in mono like a ticket booth: "ADMISSION 25¢ · CHILDREN 10¢".
- Rotate a banner or two by −2° — handbills were pasted by hand, not aligned by grid.
- Let the small print be small: "Rain or shine. No refunds after the parade."

## Don't

- No thin hairlines, no delicate details — wood type is thick or it is wrong.
- No pastels, no neon, no gradients; red sits on aged paper as flat poster ink.
- No lowercase headlines; the barker does not whisper.
- No lorem — a poster with fake copy is a blank wall. Write the actual bill.

## The one weird thing

Make the CTA a perforated ticket stub: dashed divider, mono admission price,
rotated −1.5°, with "ADMIT ONE" stamped on the tear-off half. One stub per
page — the rest stays disciplined so the stub lands.

## Best for

Event posters, festivals, theaters, live music venues.

## Pairs with patterns

`heroes-gig-poster` `cta-sticker` `footers-marquee` `cards-event` `navs-sticker` `marquee` `features-stickers`

## Lineage

American wood-type showbills and 1910s circus heralds; the over-inked punch of
letterpress on cheap stock; the hierarchy of a barker's pitch — star claim
first, price second, fine print last. Principles only — 100% original
implementation.
