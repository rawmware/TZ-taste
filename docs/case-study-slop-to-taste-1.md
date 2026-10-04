<!--tz-meta {"id":"case-study-slop-to-taste-1","title":"Case Study: Slop to Taste #1 — SaaS Landing","file":"docs/case-study-slop-to-taste-1.md","description":"Before/after teardown of a generic SaaS landing: slop diagnosis, DNA pick, rebuild notes."} -->
# Case Study #1: The Generic SaaS Landing

A before/after teardown. The "before" is a composite of a hundred real
AI-generated SaaS pages — if you recognize your own page in it, that's
the point. Diagnosis uses ANTI-SLOP.md item numbers; the rebuild follows
the TZ-taste protocol (AGENT.md: design read, DNA, dials, one distinctive
choice).

## The before

Picture it — you've seen this page:

- **Hero:** centered. Small pill badge ("✨ New: AI-powered v2.0") →
  huge Inter headline ("Welcome to Flowbase — the seamless solution for
  modern teams") → gray subtext → two pill buttons ("Get Started",
  "Learn More") → a row of grayscale logos ("Trusted by teams at").
  Background: blue-to-purple gradient, or a stock photo of a diverse
  team pointing at a laptop under a dark overlay.
- **Features:** three equal cards. Icon on top (emoji or gradient blob),
  title, two lines of text. "Fast", "Secure", "Scalable" — or "AI
  Powered", "Integrations", "Analytics". Identical soft shadows.
- **How it works:** three more equal cards, numbered 1-2-3.
- **Testimonials:** three more equal cards, five gold stars, "This
  product changed our workflow!" — Jane D., CEO.
- **Pricing:** three equal cards (spot the pattern), middle one
  highlighted purple, "Most Popular" ribbon.
- **CTA band:** dark section (alternating light/dark/light/dark all the
  way down), centered headline, pill button.
- **Footer:** "© 2026 Flowbase. All rights reserved." Four dead link
  columns optional.
- Every section: `py-16`, centered, same rhythm throughout. Body text
  in `#6b7280` on `#f9fafb`.

## Slop diagnosis

Scored against docs/ANTI-SLOP.md:

**🔴 Blockers:**

1. **#1 — the purple gradient.** Blue-to-purple hero background. The
   single most recognized AI tell on the internet, present and
   unapologetic.
2. **#2 — three equal cards, four times.** Features, how-it-works,
   testimonials, pricing — the same component with different nouns.
   The page has one layout idea repeated until it means nothing.
3. **#3 — the template hero.** Badge → headline → subtext → two
   buttons → logos. Pixel-for-pixel the banned composition.
4. **#4 — Inter everywhere.** Default sans, default weights, zero
   typographic voice.
5. **#6 — emoji icons.** ✨🚀🔒 as the feature icon system.
6. **#11 (via copy):** "seamless solution", "modern teams",
   "AI-powered", "elevate your workflow" — four banned phrases before
   the fold.

**🟡 Warnings:** #7 (pill buttons on everything), #8 (gray-on-gray body
text), #9 (stock photo hero), #10 (zebra light/dark sections), #14
(dead footer), #15 (identical section padding), #16 (pancake card
shadows). Seven warnings — the "two or more = rethink" threshold isn't
just crossed, it's lapped.

**Taste test:** no design read exists. No DNA — colors are stray hexes.
No distinctive choice; a stranger would describe it as "a startup
website." Verdict: full rebuild, not a polish pass. (Per the decision
matrix anti-patterns: when review surfaces this many warnings, revisit
the fundamentals — there were none.)

## The brief, honestly stated

Design read: **"A project-tracking SaaS for small agencies; competent
and calm; goal is trial signups."** Audience: agency owners, not
designers. Feeling: relief — someone finally organized the chaos. Goal:
start a trial.

**Dials:** VARIANCE 5 / MOTION 4 / DENSITY 3 (skill defaults for a
landing page).

**DNA pick: soft-minimal.** Brief signals: SaaS, productivity, "clean"
→ soft-minimal per docs/DECISION-MATRIX.md. Runner-up:
**neo-brutalist-pop** — loses because playful sticker energy
undermines B2B trust; agency owners handing over client data want calm
competence, not toys. Runner-up 2: swiss-rational — loses because it's
colder than the "relief" feeling needs.

**Tokens:** bg `#f7f7f5`, surface `#ffffff`, ink `#1a1a1a`, muted
`#8a8a93`, accent iris `#5b5bd6`, line `#1a1a1414`.

**One distinctive choice:** the product's actual UI as the hero — a
live-looking project board rendered in the DNA's tokens, tilted 0deg
(no fake 3D tilt), annotated with one handwritten-style annotation
("shipped Friday ✓" — no, no emoji; a mono label: `shipped fri — 4:12pm`).
The distinctive choice is *showing the product instead of describing
it*, with real data, not lorem ipsum.

## Rebuild notes

**Hero (composition change — kills #3):** left-aligned, 7/5 split.
Eyebrow (mono, accent): `PROJECT TRACKING`. Headline (Instrument Sans,
clamp 2.5–4.5rem, -0.03em): "Every client project, finally in one
place." Subhead: "Flowbase pulls tasks, files, and deadlines into a
single board. Setup takes 4 minutes — import from wherever you're
escaping." Buttons: primary "Start free trial" (verb + object),
secondary "Watch the 2-min demo". Right column: the product board
visual. No badge, no logo row above the fold — logos move to a quiet
single-line strip *below* the hero, small, muted, no "trusted by"
label needed... actually keep a micro-label: "USED BY TEAMS AT" in
mono 11px tracked. Fine.

**Copy (kills #11):** "seamless", "modern teams", "AI-powered",
"elevate" all deleted. Headlines make claims (see
docs/copywriting-guide.md): "Cut the weekly status meeting to 10
minutes." Numbers where true.

**Features (kills #2):** the three-cards section becomes a bento
(`patterns/bento.html`): one large cell with the board screenshot, two
medium cells (integrations list as *text*, not icons; a real metric:
"4 min median setup"), three small stat cells. Varied content types,
hairline gaps, one hero cell. The second "how it works" three-cards
becomes a 3-row numbered list — rows, not cards, because the content is
homogeneous steps.

**Testimonials (kills #2 again):** one large quote, editorial style —
oversized serif... no, soft-minimal: large Instrument Sans, muted
attribution, hairline rule above. One strong voice beats three
"changed our workflow!" cards. Real names, real companies, one quotable
line each — max two.

**Pricing (kills #2 a third time):** three tiers as *rows* in a table,
not cards. Feature comparison reads better in rows; the "most popular"
tier gets an accent left-border, not a purple fill. Prices are real
numbers with a "per seat / month" mono label.

**Type (kills #4):** Instrument Sans throughout (harmony pairing —
docs/picking-type-pairings.md #2), JetBrains Mono for eyebrows, data,
and buttons' micro-labels. Fluid display, tight tracking, 65ch measure
on all body copy.

**Color (kills #1):** gradient deleted. bg `#f7f7f5`, surfaces white,
iris accent counted: primary CTA, active nav state, one annotation on
the hero visual. Three uses per viewport, max.

**Rhythm (kills #15, #10):** spacing scale 8/16/32/64/128. Sections at
`py-24 md:py-40`. One dark band only — the final CTA, near-black with
the iris accent, because the page needs one moment of gravity before
the footer. Not zebra; one decision.

**Icons (kills #6):** Lucide, 1.5px stroke, one weight, used sparingly
— most "features" don't need icons at all. The bento's text cells need
none.

**Footer (kills #14):** real sitemap columns (Product, Company,
Resources, Legal), contact email, status link ("All systems
operational" with a green dot — real status, not decoration), copyright
as one line among real content.

**Motion (MOTION 4):** hero entrance — headline rises, subhead, CTAs,
visual, staggered 75ms, total under 800ms, ease-out-expo. Scroll reveals
on sections (rise, once, IntersectionObserver). Reduced-motion: all
disabled, content visible. Nothing else moves. (See
docs/motion-guide.md.)

## After: the taste test

- [ ] One-sentence design read exists and the page matches it: "calm,
      competent project tracking for agencies" — yes.
- [ ] Exactly one DNA, all values resolve to tokens — yes, soft-minimal.
- [ ] One deliberate distinctive choice — the real product board as hero,
      annotated.
- [ ] Stranger describes it in 3 words: "calm, clear, confident."
- [ ] Zero 🔴, one 🟡 (the logo strip is borderline stock — replaced
      with text-only wordmarks, warning cleared).

## What we kept

The rebuild wasn't a bonfire — a few things in the before were fine and
stayed:

- **CTA placement under the subhead.** The template hero gets one thing
  right: the primary action sits where the eye lands after the
  headline. Kept, left-aligned.
- **The logo strip.** Social proof is legitimate; it just moved below
  the fold, went quiet (mono micro-label, muted wordmarks), and stopped
  pretending to be a headline.
- **Three pricing tiers.** Three options is genuinely good choice
  architecture. What changed is the *container* (rows, not cards) and
  the emphasis (accent border, not purple fill).
- **Section order.** Hero → proof → how it works → pricing → final CTA
  is a sound persuasion sequence. Slop was in the execution, not the
  outline.

Rule of thumb for teardowns: keep the information architecture, replace
the visual decisions. If you're reordering sections, you'd better have
a reason stronger than "it felt samey."

## If the brief changed

The DNA pick follows the brief (decision matrix). Same product,
different briefs:

- **Dev-tool positioning** ("built for engineers, CLI-first") →
  **industrial-brutalist**. Safety-orange accents, spec-sheet copy,
  terminal-flavored code blocks. Runner-up soft-minimal loses: too
  polite for a technical audience that respects rawness.
- **Premium/enterprise** ("SOC2, Fortune 500 buyers") → **dark-luxe**.
  Whisper-thin serif headlines, champagne hairlines, one dark page.
  Motion drops to 3, variance to 4.
- **Playful consumer** ("project tracking for creators") →
  **neo-brutalist-pop**. Sticker aesthetics, hard shadows, wobble on
  the distinctive choice. The bento stays — it's the one layout both
  DNAs share.

Same protocol every time: design read, DNA + runner-up reasoning,
dials, one distinctive choice, ANTI-SLOP self-review.

## What this case study teaches

The slop wasn't in any single component — it was the *absence of
decisions*. Every section defaulted: centered, three cards, Inter,
purple. The rebuild didn't add flair; it made decisions (one DNA, one
composition per section, real copy, counted accents) and cut everything
that was defaulted. Taste was subtraction plus commitment — exactly the
TASTE-GUIDE.md thesis.

*Part of [TZ-taste](https://github.com/rawmware/TZ-taste). See also:
case-study-slop-to-taste-2 (portfolio teardown).*
