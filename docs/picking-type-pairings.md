<!--tz-meta {"id":"picking-type-pairings","title":"Picking Type Pairings","file":"docs/picking-type-pairings.md","description":"The display/body/mono trio, contrast vs harmony, and 8 example pairings mapped to DNAs."} -->
# Picking Type Pairings

A type pairing is a casting decision: three roles (display, body, mono),
one personality per page. Get the casting right and the page has a voice
before a word is read. Get it wrong and even good copy sounds generic.

This is the companion to docs/typography-guide.md — that covers *using*
type; this covers *choosing* it.

## The trio model

Three roles, three max (skill rule):

| Role | Job | Where it shows |
|---|---|---|
| **Display** | Personality, voice, memory | Headlines, hero, big numerals, section titles |
| **Body** | Readability, invisibility | Paragraphs, UI labels, captions |
| **Mono** | Structure, technical texture | Eyebrows, code, data, timestamps, labels |

Casting rules:

1. **Cast display first.** It's the only role the reader consciously
   notices. Pick the voice (loud? quiet? literary? technical?), then
   cast body and mono as its supporting cast.
2. **Body must disappear.** If you notice the body face while reading a
   paragraph, it's wrong for the job. Body faces are evaluated on
   texture at 16px, not personality at 72px.
3. **Mono is seasoning, not a course.** A little mono (eyebrows, data,
   buttons) adds technical flavor. A page set entirely in mono is a
   concept (`retro-terminal`) — don't stumble into it by accident.
4. **Two roles can share one face.** `soft-minimal` casts Instrument
   Sans as display *and* body; `glass-calm` does the same with Outfit.
   Same-family casting is harmony strategy (below) — legitimate, not
   lazy, when it's deliberate.

## Contrast vs harmony

The fundamental pairing decision. Pick one axis per project:

**Contrast pairing** — display and body from different classifications.
Serif display + grotesque body. Loud display + quiet body. The tension
*is* the design.

- Pros: instant character, clear hierarchy, memorable.
- Cons: easier to get wrong; two strong voices fight.
- Rule: if display is loud, body must be very quiet. One diva per page.

**Harmony pairing** — one family (or close relatives) throughout,
hierarchy from weight, size, and color.

- Pros: cohesive, calm, hard to break. The `soft-minimal` /
  `glass-calm` register.
- Cons: can read as flat without strong scale contrast — compensate
  with dramatic size steps and tight display tracking.
- Rule: harmony needs *more* scale contrast, not less. If display and
  body are the same face at similar sizes, there's no hierarchy at all.

**Don't mix strategies.** A contrast display/body pair plus a harmony
mono (same family as body) is fine — the axis decision is about the
display↔body relationship. What fails is display fighting body *and*
body fighting mono — three voices, no hierarchy.

## The practical filters

Run every candidate pairing through these before committing:

1. **The paragraph test.** Set 200 words of real copy in the body
   candidate at 16px. Read it. Any friction — cramped apertures, weak
   differentiation of i/l/1, tiring texture — disqualifies it. Display
   faces routinely fail this; that's why they're not body faces.
2. **The x-height check.** Display and body candidates should have
   compatible x-heights where they meet (mono labels inside sans
   sentences, numerals in headlines). Wildly mismatched x-heights make
   mixed lines look broken.
3. **Weight availability.** You need at least regular + semibold/bold,
   ideally a variable font. A beautiful display face with one weight is
   a poster, not a system.
4. **License.** Google Fonts / open license for everything in this
   library's context. If the brief allows commercial fonts, fine — but
   document the license. "Found it on a free site" is not a license.
5. **Numerals.** Data-heavy pages need tabular numerals (mono or
   `font-variant-numeric: tabular-nums`). Proportional numerals in
   tables make columns wobble. Check the body face has them or lean on
   the mono role for data.
6. **The 5-second test.** Show the display face at hero size to someone
   for 5 seconds. Ask for three words. If the words match the DNA's
   vibe, the casting works.

## Eight pairings, mapped to DNAs

Real pairings from `styles/index.json`, with the reasoning for each.
Steal the reasoning, not just the names.

### 1. editorial-serif — Fraunces + Newsreader + Space Mono

Contrast-adjacent harmony: both serifs, but Fraunces (high-contrast,
expressive, optical sizes) against Newsreader (quiet, bookish). The
display shouts in a library voice; the body whispers. Space Mono for
eyebrows and folio details — the technical counterpoint that keeps it
from being precious. *Use when:* the words are the product.

### 2. soft-minimal — Instrument Sans + Instrument Sans + JetBrains Mono

Pure harmony. One family, hierarchy from weight (400 body / 600
headlines) and dramatic scale. JetBrains Mono only for data and labels.
The Linear/Notion register — the pairing disappears so the product
doesn't have to. *Use when:* the interface should feel inevitable.

### 3. retro-terminal — IBM Plex Mono only

The mono-concept DNA: one face for all three roles. Hierarchy from
color (green ink / amber accent / dimmed muted), weight, and size —
never from face changes. Works because the concept *is* the terminal;
any second face would break the fiction. *Use when:* the machine is the
message. *Don't* copy this structure for non-terminal briefs.

### 4. dark-luxe — Cormorant Garamond + Outfit + Space Mono

Maximum contrast: whisper-thin high-contrast serif display against a
neutral geometric sans body. Cormorant below 20px dies — it's display-
only, always large, always with room to breathe. Outfit handles every-
thing functional without competing. Space Mono for small caps labels
and prices. *Use when:* restraint must read as expensive.

### 5. industrial-brutalist — Anton + Space Grotesk + JetBrains Mono

Loud/quiet contrast: condensed uppercase Anton at huge sizes against
workhorse Space Grotesk. Anton is all-caps-only in practice — lowercase
Anton looks wrong, so headlines are uppercase by construction.
JetBrains Mono for spec-sheet data and labels. *Use when:* the brief
says raw, technical, ships-Monday.

### 6. acid-rave — Anton + Space Grotesk + Space Mono

Same skeleton as industrial-brutalist (Anton display is the loudest
tool in the box) but the *treatment* differs: tighter leading, all-caps,
maximum size, on black with acid lime. Space Mono (not JetBrains) for
labels — rounder, more characterful, matches the flyer energy.
*Lesson:* the same faces in a different DNA are a different pairing.
Casting includes treatment, not just names.

### 7. y2k-chrome — Unbounded + Space Grotesk + Space Mono

Harmony with a twist: Unbounded (wide, bubbly, unmistakably Y2K) for
display, Space Grotesk for body — both geometric sans with rounded
tendencies, so they rhyme without matching. The display can take chrome
gradient treatments; the body stays flat and readable. *Use when:*
nostalgic futurism, and the display needs to feel like 1999's tomorrow.

### 8. docs-solar — Source Serif 4 + Source Serif 4 + IBM Plex Mono

Long-read harmony: one serif for display and body (Source Serif 4's
optical sizes handle both), IBM Plex Mono for code. Docs are read for
hours — the pairing optimizes for stamina, not first impression. Body
at 17–18px, leading 1.7. The display role is quiet here (docs headlines
inform, they don't perform). *Use when:* people will read for 20+
minutes. *Lesson:* sometimes the display role deliberately underplays.

### The four not detailed (same method applies)

- **swiss-rational:** Archivo throughout — weight-only hierarchy, the
  most disciplined harmony pairing in the set.
- **glass-calm:** Outfit throughout + JetBrains Mono — soft geometry,
  calm by construction.
- **neo-brutalist-pop:** Archivo Black + Space Grotesk + Space Mono —
  contrast pairing where the display doubles as illustration.
- **ma-japanese:** Shippori Mincho + Zen Kaku Gothic New + Space Mono —
  the quietest contrast pairing; restraint is the voice.

## When to break the trio

- **Mono-only** (`retro-terminal`): the concept demands it.
- **Display-only pages:** posters, single-statement pages
  (`ma-japanese` at its most minimal) — one face, enormous, done.
- **System faces as body:** `ui-monospace` for mono, system-ui for body
  — legitimate when load performance is the priority, but document it
  as a decision. "We shipped system-ui for 0KB font cost" is taste;
  "we forgot to load fonts" is slop.

## Pairing anti-patterns

- **Two display faces.** Pick one voice. (The only exception: a serif
  italic accent word inside a sans headline — that's emphasis, not a
  second face.)
- **Display face as body.** High-contrast serifs and condensed
  grotesques fall apart at 16px. If the paragraph test hurts, recast.
- **Inter as the "safe" body under a characterful display.** Inter
  everywhere is ANTI-SLOP #4 — and Inter-as-body under a loud display
  reads as "I picked one font and gave up on the second." Cast a body
  face with intention: Space Grotesk, Archivo, Newsreader, Outfit all
  earn their place.
- **Four+ faces.** The fourth face is always unnecessary. Cut it.
- **Pairing by "looks good in the specimen."** Specimens lie — they
  show large sizes. The paragraph test and the 5-second test don't.

## Self-review checklist

- [ ] Three roles cast, three faces max — display first, body
      disappears, mono seasons
- [ ] One axis: contrast (loud display + quiet body) or harmony (one
      family + scale contrast) — not both, not neither
- [ ] Body candidate passed the 200-word paragraph test at 16px
- [ ] x-heights compatible where faces meet in a line
- [ ] Regular + bold (or variable) available; tabular numerals for data
- [ ] License documented; open-licensed in this library's context
- [ ] Display face passed the 5-second / three-words test against the
      DNA vibe
- [ ] Pairing treatment (case, tracking, leading) specified, not just
      names — see pairing #6's lesson

*Part of [TZ-taste](https://github.com/rawmware/TZ-taste). Cast three
roles, one voice — then let the words do the talking.*
