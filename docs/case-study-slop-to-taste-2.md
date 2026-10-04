<!--tz-meta {"id":"case-study-slop-to-taste-2","title":"Case Study: Slop to Taste #2 — Portfolio","file":"docs/case-study-slop-to-taste-2.md","description":"Before/after teardown of a generic portfolio: slop diagnosis, DNA pick, rebuild notes."} -->
# Case Study #2: The Generic Portfolio

Same method as case study #1: composite "before" drawn from real
AI-generated portfolios, scored against ANTI-SLOP.md, then rebuilt
under the protocol — design read, DNA with runner-up reasoning, dials,
one distinctive choice.

## The before

The template every generated portfolio converges on:

- **Hero:** "Hi, I'm Alex 👋" — huge Inter headline, "I'm a creative
  developer & designer crafting digital experiences." Two pill buttons:
  "View My Work", "Contact Me". Background: subtle purple gradient mesh
  or floating blurred blobs. Maybe a stock photo of a desk with a
  laptop and coffee.
- **About:** centered paragraph of gray text. "I'm passionate about
  creating seamless user experiences at the intersection of design and
  technology." A row of "skill bars": HTML 95%, CSS 90%, JavaScript
  85%, React 80% — animated bars filling on scroll.
- **Work:** three (or six) equal cards. Screenshot thumbnail, project
  title, one-line description, "tech stack" pill tags (React, Tailwind,
  Node). Hover: lift + shadow. Every card identical.
- **Services:** three equal cards with emoji icons. "🎨 UI Design",
  "💻 Development", "🚀 SEO".
- **Testimonials:** carousel, auto-advancing, three vague quotes.
- **Contact:** centered "Let's work together!" + pill button
  "Get In Touch" + a form with placeholder-only labels.
- **Footer:** "© 2026 Alex. All rights reserved."
- Motion: everything fades up on scroll with the same animation.
  Custom cursor dot following the mouse. Marquee of tech logos.

## Slop diagnosis

**🔴 Blockers (ANTI-SLOP.md):**

1. **#1 — purple gradient mesh / blobs.** The tell, present in the
   hero background.
2. **#2 — three equal cards, twice.** Work grid and services — same
   component, different nouns. Six identical project cards is #2 with
   volume turned up.
3. **#3 — the template hero.** Greeting → title → subtext → two
   buttons. "Hi, I'm X" is the portfolio edition of "Welcome to
   [Product]."
4. **#4 — Inter everywhere.** No typographic voice on a page whose
   entire job is demonstrating taste.
5. **#6 — emoji icons.** 👋🎨💻🚀 — the portfolio is *presenting
   design skill* while using emojis as icons.

**🟡 Warnings:** #7 (pill buttons, pill tags), #8 (gray-on-gray about
text), #9 (stock desk photo), #11 ("passionate", "seamless", "digital
experiences", "at the intersection of"), #12 (animated skill *bars*
fill via width animation — layout thrash, literally), #14 (dead
footer), #15 (uniform section padding).

Special citation: **skill bars.** "HTML 95%" is meaningless (95% of
what?), the width animation is layout thrash (#12), and every hiring
manager knows it. Delete on sight — show work, not percentages.

**Taste test:** no design read. No DNA. Distinctive choice: the custom
cursor dot — which is decoration, not distinction, and actively
annoying on touch devices. A stranger's three words: "a portfolio
website." Verdict: rebuild.

## The brief, honestly stated

Design read: **"A freelance designer-developer; editorial and
considered; goal is inbound client inquiries from people who value
craft."** Audience: founders and creative directors hiring freelancers.
Feeling: this person has *judgment*. Goal: the contact form gets used.

**Dials:** VARIANCE 7 / MOTION 5 / DENSITY 2 (skill default for
portfolio, variance pushed up — portfolios earn asymmetry).

**DNA pick: editorial-serif.** Brief signals: "considered", "craft",
freelance creative → editorial-serif per docs/DECISION-MATRIX.md.
Runner-up: **swiss-rational** — loses because it's too cold; the brief
wants warmth and craft judgment, not information architecture. (ma-
japanese was considered for "minimal" — loses because the portfolio
needs to *say* things; ma's near-silence would starve the case
studies.)

**Tokens:** bg `#f5f1e8` (warm paper), surface `#efe9da`, ink
`#1c1a15`, muted `#6f6a5e`, accent burnt orange `#b5461f`, line
`#1c1a1526` (hairline rules — the DNA's signature).

**One distinctive choice:** the index. The work section is a numbered
editorial index — "01, 02, 03…" in oversized Fraunces numerals with
hairline rules, each row expanding (accordion, grid-rows animation —
transform-safe) to reveal the case study. A table of contents for a
practice. It reads as considered because it *is* an editorial device,
not a card grid wearing a costume.

## Rebuild notes

**Hero (kills #3, #1):** no greeting, no gradient. Full-bleed
editorial composition (`patterns/hero-editorial.html`): oversized
Fraunces statement, left-aligned, starting at column 2 — *"I design
and build websites with opinions."* (A claim — disagreeable, per the
copywriting guide.) Below it, mono micro-label: `PORTFOLIO — 2024/2026`
+ location. Right side: one portrait or one project image, full-bleed
to the viewport edge, no overlay, no stock desk. The distinctive
choice is restraint: vast paper, one sentence, one image.

**About (kills #11, #8, skill bars):** two sentences, ink on paper,
65ch: what they do, who it's for. Then a *selected clients* list as
plain text rows with hairlines — names and years, no logos, no bars.
"HTML 95%" deleted; replaced by evidence (the work index below it).
Copy: "I design and build marketing sites and web apps for small
studios. Twelve projects a year, on purpose." — concrete, no
"passionate about seamless experiences."

**Work (kills #2):** the numbered index. Each row: oversized numeral
(Fraunces, 96px), project title (large), one-line outcome ("Booking
flow rebuild — conversion +34%"), year + role in mono muted, hairline
rule. Click/Enter expands the row: 2–3 images, a 150-word case note
(problem → decision → outcome), and a link. Accordion via
`grid-template-rows: 0fr → 1fr` (transform-safe, no width animation).
Four projects, not six — curation is the portfolio's real skill. The
index *is* the one weird thing; everything else stays disciplined.

**Services (kills #2 again):** deleted as a section. Services live as
three *lines* under the about section: "Design — Design — Build —
Retainers." with one-line descriptions. A freelancer's services don't
need cards; they need a sentence each. (Subtraction, per TASTE-GUIDE.)

**Testimonials:** one. Large Fraunces italic pull-quote, hairline
rules top and bottom, real name + real company. Positioned as a
full-bleed rest between work and contact (rhythm — see layout guide).

**Contact (kills #7, placeholder labels):** left-aligned, 7/5 split.
Headline: "Have something worth making well?" (a question the reader
actually asks). Email link huge, underlined in accent. Form: visible
`<label>` elements (accessibility checklist), three fields max (name,
email, project), button "Send inquiry" (verb + object). No "Get In
Touch" pill.

**Type (kills #4):** Fraunces display (optical sizes — 144pt cut for
the hero and numerals) + Newsreader body + Space Mono labels. Tight
tracking on display (-0.03em), italic emphasis in the pull-quote.
Pairing #1 from docs/picking-type-pairings.md, applied.

**Color (kills #1):** warm paper throughout. Accent `#b5461f` counted:
the index numerals' hover state, one pull-quote rule, the email
underline. Print-color discipline — never fills.

**Motion (MOTION 5):** hero statement rises once (stagger: label →
headline → meta). Index rows: hairline draw-in on scroll (scaleX, once
each). Accordion expand 300ms ease-out-expo. Portrait: subtle
clip-reveal on load. Reduced-motion: everything static and visible.
No custom cursor (deleted — decoration). No auto-advancing carousel
(deleted — hostile).

**Footer (kills #14):** sitemap (Index, About, Contact), elsewhere
links (real profiles), email, colophon ("Set in Fraunces & Newsreader.
Built with opinions."), copyright as one line. A colophon on a
portfolio is a craft signal — it says the type choices were deliberate.

## After: the taste test

- [ ] Design read matches: "editorial, considered freelancer" — the
      paper, the index, the colophon all say it.
- [ ] One DNA, all tokens resolve — editorial-serif throughout.
- [ ] One distinctive choice — the numbered work index.
- [ ] Three words from a stranger: "confident, literary, sharp."
- [ ] Zero 🔴, zero 🟡.

## What we kept

Not everything in the before was slop:

- **Reverse-chronological work.** Newest first is correct for a
  portfolio — clients hire for what you can do now. Kept, as the
  index's top-to-bottom order.
- **Tech-stack tags.** Legitimate filtering information for technical
  clients. Kept — but as mono micro-labels in the index rows, not pill
  tags on cards.
- **The contact form.** A mailto link alone loses inquiries to friction;
  three fields is the right ceiling. Kept, with real labels.
- **One portrait.** A freelancer sells trust; a face helps. Kept — one
  real photo, no stock desk, no overlay.

Same teardown rule as case study #1: keep the information architecture,
replace the visual decisions.

## If the brief changed

- **Technical freelancer** ("hire me for infrastructure") →
  **retro-terminal**. Mono-only, status-line voice, the work index
  becomes a `$ ls ~/work` listing. The concept carries the whole page.
- **Gallery/exhibition artist** → **ma-japanese**. Near-silence, one
  work per viewport, vertical text labels. Density drops to 1, motion
  to 2 — the work must survive the emptiness.
- **Commercial studio** (team, not solo) → **swiss-rational**. The
  index becomes a strict table: project, client, year, outcome metric.
  Warmth is the wrong signal when selling process.

Note what didn't change across briefs: curation over volume, real copy,
one distinctive choice, zero skill bars. Those aren't DNA decisions —
they're taste decisions.

## What this case study teaches

Portfolios fail hardest at the thing they're selling: judgment. The
before page demonstrated every default in the book while claiming
"creative developer." The rebuild's argument: **curation is the
portfolio.** Four projects in an index beat six in cards; two sentences
beat a paragraph of passion; one testimonial beats a carousel. And the
skill bars — the purest form of portfolio slop, a meaningless number
animated with layout thrash — became the emblem of what got cut. When
everything you removed was decoration, what remains is the work.

*Part of [TZ-taste](https://github.com/rawmware/TZ-taste). See also:
case-study-slop-to-taste-1 (SaaS landing teardown).*
