<!--tz-meta {"id":"diary-zine","name":"Diary Zine","vibe":"Photocopied punk zine: cut-and-paste ransom type, staples through the gutter, marker underlines, and ink that ran in the rain.","file":"styles/diary-zine.md","tags":["punk","zine","collage","diy"],"best_for":["bands","diy-brands","activists","indie-publishers"],"fonts":{"display":"Anton","body":"Special Elite","mono":"Space Mono"},"tokens":{"bg":"#e8e4d8","ink":"#111111","accent":"#d81b36","muted":"#55524a","line":"#11111133"},"dials":{"variance":10,"motion":4,"density":8}} -->
# Diary Zine

> Photocopied punk zine: cut-and-paste ransom type, staples through the
> gutter, marker underlines, and ink that ran in the rain.

## Tokens

| Token | Value | Role |
|---|---|---|
| `--bg` | `#e8e4d8` | Third-generation photocopy paper |
| `--surface` | `#dcd6c4` | Pasted-in cutout panels |
| `--ink` | `#111111` | Toner black |
| `--muted` | `#55524a` | Faded copy, old layers |
| `--accent` | `#d81b36` | Red marker — underlines, arrows, "READ THIS" |
| `--line` | `#11111133` | Cut edges and rules (alpha allowed on lines) |

## Type

- **Display:** Anton (cut-and-paste headlines — each word can be a different size, slight rotations, like letters clipped from magazines)
- **Body:** Special Elite (typewriter diary entries, 0.95–1.05rem, the confessional voice)
- **Mono:** Space Mono (issue numbers, dates, "XEROXED 500 COPIES")

Google Fonts: `Anton` `Special+Elite` `Space+Mono:wght@400;700`

## Spacing & shape

- Collage grid: nothing aligns to the same baseline twice. Elements overlap, rotate (−3° to 3°), and crowd the page like a paste-up board.
- Staples and tape as structure: visible staple marks at panel corners, masking-tape strips holding images down.
- Radius: `0px`. Scissors don't do rounded corners.
- Ransom-type headlines: mix Anton with a second cutout style (bold marker hand) — never one uniform headline font throughout.

## Motion

Paste-up physics: elements drop in with a paper-slap settle (fast, 300ms,
slight overshoot). Marquee tape-strips scroll. Hovering a cutout lifts it
with a hard shadow like peeling tape. Respect `prefers-reduced-motion` — then
everything is just already pasted.

## Do

- Number it like a zine: "ISSUE #7 · PRINTED AT KINKO'S · 2AM".
- Write in first person, unfiltered: "We recorded this in a basement. It sounds like it."
- Use red marker only for the loudest thing on each spread: one underline, one arrow, one circled word.
- Show the process: visible tape, staple holes, a coffee stain, a crossed-out draft. The seams are the style.

## Don't

- No clean grids, no generous corporate whitespace — neatness is the enemy here.
- No gradients, no soft shadows; hard offset shadows only (`4px 4px 0 #111`).
- No emoji icons; hand-drawn arrows and asterisks in marker red.
- No lorem ipsum; zines are all voice, and fake copy kills it instantly.

## The one weird thing

Add one analog artifact per page: a "cut here" dotted scissor line with a
real downloadable (a coupon, a setlist, a manifesto PDF), a stapled-in
business card, or a handwritten margin rant. The zine should feel like it
exists in the physical world.

## Best for

Bands and venues, DIY brands, activists and organizers, indie publishers.

## Pairs with patterns

`heroes-gig-poster` `backgrounds-crosshatch` `cards-brutalist` `footers-marquee` `cta-sticker` `testimonials-snap` `marquee`

## Lineage

Punk paste-up practice: ransom-note headlines, typewriter body copy, stapled
spines, photocopier grain; the urgency of print made at 2am with borrowed
scissors. Principles only — 100% original implementation. Explicitly not
`concrete-poem`: this is zine — collage, staples, marker — not concrete
poetry; words here shout from cut paper, they don't form shapes on a blank page.
