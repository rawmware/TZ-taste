<!--tz-meta {"id":"newsroom-wire","name":"Newsroom Wire","vibe":"The copy desk at 2am: teletype clatter, urgent red wire alerts, ink on newsprint.","file":"styles/newsroom-wire.md","tags":["news","teletype","urgent"],"best_for":["news-sites","media-kits","crisis-comms","sports-scores"],"fonts":{"display":"Special Elite","body":"PT Serif","mono":"Courier Prime"},"tokens":{"bg":"#f7f4ec","ink":"#16130e","accent":"#c8102e","muted":"#6f6a5e","line":"#16130e29"},"dials":{"variance":4,"motion":3,"density":8}} -->
# Newsroom Wire

> The copy desk at 2am: teletype clatter, urgent red wire alerts, ink on newsprint.
> Speed is the aesthetic — every element says "filed minutes ago."

## Tokens

| Token | Value | Role |
|---|---|---|
| `--bg` | `#f7f4ec` | Newsprint paper background |
| `--surface` | `#efe9da` | Wire-copy panels, dateline blocks |
| `--ink` | `#16130e` | Teletype black text |
| `--muted` | `#6f6a5e` | Faded ink — timestamps, datelines, captions |
| `--accent` | `#c8102e` | Urgent wire red — breaking alerts, kickers, one underline |
| `--line` | `#16130e29` | Hairline rules between stories (alpha allowed on lines) |

## Type

- **Display:** Special Elite (headlines and deck heads; typewriter clack, never scaled past 4rem)
- **Body:** PT Serif (wire copy, 1–1.125rem, 45–70 characters per line)
- **Mono:** Courier Prime (datelines, bylines, timestamps — uppercase, `0.08em` tracking)

Google Fonts: `Special+Elite:wght@400` `PT+Serif:wght@400;700`
`Courier+Prime:wght@400;700`

## Spacing & shape

- Radius: `0px`. Paper has edges, not curves.
- A thick 4px black rule sits under the masthead; 1px hairlines separate everything below it.
- Copy runs in narrow columns; a mono dateline sits above every story, never below.
- Rhythm: dense ranked story stacks, then one wide "developing story" banner. Density is the point — this is a desk that files fast.

## Motion

Motion reads like the wire, not the web. A ticker strip crawls new items
(transform-only marquee, pauses on hover). "DEVELOPING" flags flash once in
wire red, then hold. Story rows enter with a 200ms fade, staggered 60ms.
Honor `prefers-reduced-motion`: the ticker becomes a static list.

## Do

- Open with a masthead: nameplate, mono dateline ("FILED OCT 3, 2026 — 02:14 ET"), red rule.
- Use urgent red for exactly one thing per viewport: the breaking kicker, the live timestamp, the alert. If it is everywhere, nothing is urgent.
- Let timestamps carry the page: "updated 9:40pm", "developing", "corrected 10:15pm".
- Write headlines real wire copy would file: "Council votes 5–2 on transit bond; ward 3 recount begins at dawn."

## Don't

- No gradients, no glass, no soft shadows — this is paper, not an app.
- No emoji as icons; the only symbols are typographic: —, ·, §, ¶.
- No three-equal-cards; stories stack in ranked rows, biggest first.
- No lorem, ever — a wire page with fake copy is a contradiction. Write the actual headline.

## The one weird thing

Give the page a working "wire ticker": a thin strip under the masthead with
five timestamped one-liners ("02:14 — Rain moves the final to Sunday",
"01:58 — Mayor's office confirms the interview"), mono type, red bullets
between entries. It makes the page feel filed, not built.

## Best for

News sites, media kits, crisis comms pages, live sports coverage.

## Pairs with patterns

`heroes-broadsheet` `stats-ticker` `cards-article` `navs-ticker` `misc-timeline` `footers-newsletter` `cta-type`

## Lineage

Wire-service typography and teletype composition; AP-style discipline where
every element answers who-what-when; the ranked urgency of a copy desk at
deadline. Not retro-terminal: there is no green phosphor, no CRT glow, no dark
room — this is printed wire copy on paper, filed at speed. Not
editorial-serif: that is the magazine — ceremony and long reads; this is the
copy desk — utility first, ink still wet. Principles only — 100% original
implementation.
