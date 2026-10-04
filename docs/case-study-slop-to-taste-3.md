<!--tz-meta {"id":"case-study-slop-to-taste-3","title":"Case Study: Slop → Taste, Restaurant Edition","file":"docs/case-study-slop-to-taste-3.md","description":"Before/after teardown of a generic restaurant site: diagnosis, DNA pick, rebuild notes."} -->
# Case Study: Slop → Taste, Restaurant Edition

A full teardown of a fictional-but-typical restaurant site — **Cinder & Oak**,
a wood-fired neighborhood kitchen — rebuilt from statistical-average slop into
a page with actual taste. Every step is checkable against ANTI-SLOP.md and
DECISION-MATRIX.md.

## The brief

> A wood-fired restaurant in a converted mill building. Open kitchen, seasonal
> menu, 40 seats, booked out most weekends. The owners want the site to feel
> like the room: warm, a little loud, honest. Reservations are the only
> conversion that matters.

One-sentence design read: *a regular's dinner-table recommendation, printed
large — warm craft for people deciding where to eat Friday night.*

## The BEFORE page (what the AI shipped first)

Untouched model output, typical of a bare "build me a restaurant site" prompt:

1. Centered hero: stock photo of a moody steak under a dark overlay, white
   headline — "Welcome to Cinder & Oak" — subtext about "elevating the dining
   experience," two pill buttons ("Book a Table" / "Learn More"), a badge
   that says "Farm to Table Excellence."
2. Three equal cards in a row: "Fresh Ingredients" / "Cozy Atmosphere" /
   "Expert Chefs," each with a leaf/flame/star emoji on top.
3. Menu section: alternating light/dark/light rows, generic dish names,
   gray-on-gray prices.
4. A gallery of four identical soft-shadowed cards with stock food photos.
5. Footer: "© 2026 Cinder & Oak. All rights reserved." Nothing else.
6. Inter everywhere. `h-screen` hero that clips the nav on phones.

### Slop diagnosis (ANTI-SLOP.md item numbers)

| # | Item | Present? | Evidence |
|---|---|---|---|
| 3 | The template hero | 🔴 yes | Badge → headline → subtext → two buttons, verbatim |
| 2 | Three equal cards | 🔴 yes | Icon-top triptych, identical padding |
| 4 | Inter everywhere | 🔴 yes | System default, one weight |
| 6 | Emoji icons | 🔴 yes | 🍃🔥⭐ as feature icons |
| 9 | Stock hero + overlay + white headline | 🟡 yes | Steak photo, 60% black overlay |
| 11 | "elevating", "excellence" | 🟡 yes | Two marketing buzzwords in hero copy |
| 13 | `h-screen` clipping | 🟡 yes | Nav overlaps headline at 390px |
| 14 | Footer only | 🟡 yes | Copyright line, nothing else |
| 15 | Uniform section padding | 🟡 yes | Every section `py-16` |

**Verdict: 4 blockers, 5 warnings.** This page cannot ship. It is also
indistinguishable from 40,000 other restaurant sites — which is exactly the
problem. Nothing on it could *only* be Cinder & Oak.

## The DNA pick

DECISION-MATRIX says: brief signals "craft," "food," "warm" → candidates are
**editorial-serif** (studio, craft, "considered"), **ma-japanese** (craft,
space), and **dark-luxe** (evening, premium).

- **Pick: editorial-serif.** Wood-fired, converted mill, neighborhood warmth —
  this is a literary-magazine register: warm paper, oversized Fraunces, one
  fire-red accent (`#b5461f`). The menu becomes typography, not cards.
- **Runner-up dark-luxe loses because** the room is loud and rustic, not
  hushed and champagne. Dark-luxe would whisper; this place shouts over a
  fire.
- **ma-japanese loses because** it protects emptiness — a restaurant that
  books out needs appetite density, not a tea-house void.

Dials from editorial-serif in styles/index.json: VARIANCE 6 / MOTION 3 /
DENSITY 2 — but density nudges up to ~4 for a menu that must list real dishes.

## The rebuild, decision by decision

### 1. Kill the hero composition, keep the fire

The template hero (badge → headline → buttons) dies. Replacement: a
full-bleed editorial spread. Left two-thirds: one giant Fraunces line — "Cooked
by actual fire." — set at `-0.04em` tracking, ink `#1c1a15` on paper `#f5f1e8`.
Right third: a single vertical photograph of the open hearth, edge to edge,
no overlay, no white headline on top of it. The reservation button sits under
the headline as a *text link with a hairline rule*, not a pill: "Book Friday
→". One focal point per viewport. Composition changed, not decorated.

### 2. Typography becomes the menu

Inter is gone. Fraunces (display) + Newsreader (body) + Space Mono (micro —
prices, hours, annotations). The menu section is a brutal, beautiful table:
dish name in Fraunces 28px, a dotted hairline leader, price in Space Mono.
No cards. No shadows. Three courses, twelve dishes, real names: "charred
leek, hazelnut, brown butter" — written by a human, not "delectable seasonal
offerings." ANTI-SLOP #5 (lorem ipsum / fake copy) dies the moment copy gets
specific.

### 3. The three cards become one statement + a strip

"Fresh Ingredients / Cozy Atmosphere / Expert Chefs" — the most dishonest
three cards on earth — get replaced by one sentence, set huge:

> "Everything on the menu touched wood smoke before it touched your plate."

Under it, a mono micro-strip: `MILL BUILDING, EST. 1987 · 40 SEATS · WED–SUN`.
Information density without a single icon. Emojis gone; where an icon is
genuinely needed (map pin, phone), Lucide at 1.5px stroke, 20px, never
decorative (see docs/icon-usage.md).

### 4. Rhythm: sections breathe differently

Uniform `py-16` is replaced with an 8pt-derived scale (see
docs/spacing-rhythm.md): hero `pt-32 pb-40`, menu section `py-24`, the
statement `py-40` — one big breath in the middle of the page. Sections no
longer alternate light/dark "like a template" (ANTI-SLOP #10). The whole page
stays on paper; one dark band appears exactly once — the private-events
section, near-black `#1c1a15` with champagne-ish ink — because *dark sections
need a reason*, and "the room after 9pm" is a reason.

### 5. The one weird thing

Every page needs exactly one deliberate distinctive choice (SKILL.md). Here:
the reservation widget is a **torn-paper ticket stub** — a hairline-bordered
strip with perforated edges (CSS radial mask) showing tonight's availability
as mono type: `FRI 7:30 ×2 · FRI 9:15 ×4`. It looks like the tickets the
kitchen actually uses. One weird thing. The rest of the page stays disciplined
so it lands.

### 6. Motion: almost none, and that's the point

MOTION 3. The only animation: the ticket stub's availability updates with a
soft fade, and nav links get an underline draw on hover
(`cubic-bezier(0.22, 1, 0.36, 1)`, 200ms). No entrance choreography — a
restaurant page that performs for you feels like a waiter doing magic tricks.
`prefers-reduced-motion` kills even the fades.

### 7. Copy: claims and specifics, never adjectives

- ❌ "Welcome to Cinder & Oak — elevating the dining experience."
- ✅ "Cooked by actual fire."
- ❌ "Learn more" / "Our story"
- ✅ "Book Friday →" / "See tonight's menu"
- The About section is 60 words, one paragraph, ends with the owners' first
  names. "Mara and Dev still work the pass most nights."

### 8. Footer earns its place

ANTI-SLOP #14 fixed: address, hours in mono, phone as a real link, Instagram
handle, and a one-line private-events pitch. Still short. Just not empty.

## Re-score against ANTI-SLOP.md

| # | Before | After |
|---|---|---|
| 1 purple gradient | — | — (never present) |
| 2 three equal cards | 🔴 | ✅ gone — statement + strip |
| 3 template hero | 🔴 | ✅ editorial spread composition |
| 4 Inter everywhere | 🔴 | ✅ Fraunces/Newsreader/Space Mono |
| 5 lorem/fake copy | — | ✅ specific dish names, real words |
| 6 emoji icons | 🔴 | ✅ Lucide, functional only |
| 7 pill buttons | 🟡 (two pills) | ✅ hairline text links |
| 9 stock hero + overlay | 🟡 | ✅ real hearth photo, no overlay |
| 11 buzzwords | 🟡 | ✅ "delve/leverage/elevate" purged |
| 13 h-screen clipping | 🟡 | ✅ `min-h-[100dvh]`, verified at 390 |
| 14 footer-only | 🟡 | ✅ address/hours/contact |
| 15 uniform padding | 🟡 | ✅ 8pt scale, varied section rhythm |
| 16 pancake shadows | 🟡 (gallery) | ✅ hairlines, zero shadows |

**Zero blockers. Zero warnings.** The taste test: one-sentence design read
exists and matches; exactly one DNA, all values resolve to editorial-serif
tokens (`bg #f5f1e8`, `ink #1c1a15`, `accent #b5461f`, `muted #6f6a5e`); one
distinctive choice (ticket stub); a stranger describes it as "warm, loud,
honest."

## What actually changed (the pattern to steal)

The rebuild is not "more design." It is the three moves from TASTE-GUIDE.md:

1. **Constrain.** One DNA. Every color, font, and radius resolves to
   editorial-serif tokens. No stray hex, no second accent.
2. **Commit.** Full-bleed type instead of a safe centered hero. A menu as a
   table instead of cards. The ticket stub goes all the way — perforations
   and all — instead of a timid "reserve" button.
3. **Cut.** Three feature cards, two pill buttons, a badge, a gallery, four
   stock photos, and every buzzword: removed. The page is shorter than the
   slop version and says more.

If you remember one thing from this case study: **slop is what happens when
no decision is made.** The purple gradient, the three cards, the centered
hero — these aren't ugly choices, they're *absent* choices. Taste is the
record of decisions. Make them, write them down (AGENT.md pre-flight), and
the page stops looking generated.

## Rejected alternatives (why the rebuild isn't arbitrary)

Three directions were considered and killed — recording them so the choice
reads as a choice:

1. **Full dark-luxe.** Tested in round one: near-black `#0e0d0b`, champagne
   type, the hearth photo glowing. Beautiful — and wrong. It made a $28
   wood-fired neighborhood spot feel like a $90 tasting menu. The brief says
   "a little loud"; dark-luxe can't be loud. Killed on brand mismatch.
2. **Menu as cards.** A "modern" treatment: each dish a card with a photo.
   Twelve dishes × twelve photos = twelve art-direction problems, and the
   page became a gallery instead of a menu. The table won because a menu is
   *read*, not browsed — typography serves reading, cards serve browsing.
3. **Illustrated brand mascots.** A cute flame character for the "story"
   section. Killed in one round: the restaurant's personality is the fire
   itself, and a mascot would have been the page's *second* weird thing
   (SKILL.md allows exactly one). The ticket stub survived; the mascot
   didn't.

## Run this teardown on your own page

Steal the method, not the restaurant:

1. **Screenshot the current page.** Print it or view it at 50% — distance
   exposes composition.
2. **Score it against ANTI-SLOP.md, item by item.** Write the numbers down.
   Be brutal; the model that built it won't be offended.
3. **Write the one-sentence design read** for what the page *should* be.
   If you can't, stop — no rebuild survives an unclear brief.
4. **Route the brief through DECISION-MATRIX.md.** Name the DNA *and* the
   runner-up that loses. If you can't say why the runner-up loses, you
   haven't read the brief closely enough.
5. **List every element that exists because "websites have those."**
   The badge, the triptych, the logo wall, the testimonial carousel nobody
   asked for. Delete all of them in the rebuild. If the page breaks without
   one, it earned its place — rebuild it deliberately.
6. **Make the three moves:** constrain to the DNA's tokens, commit to one
   composition change that scares you slightly, cut until the page is
   shorter than the slop version.
7. **Re-score.** Zero blockers, fewer than two warnings, taste test all
   true. If it doesn't pass, the DNA is wrong — re-route, don't patch.

Most teardowns converge on the same discovery: the slop version wasn't
missing *design*, it was missing *decisions*. The rebuild is shorter,
cheaper to build, and unmistakably yours. That's the whole trick.

---

*Part of [TZ-taste](https://github.com/rawmware/TZ-taste). More teardowns:
this is case study #3 in the series.*
