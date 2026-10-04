<!--tz-meta {"id":"trend-watch-2026","title":"Trend Watch 2026","file":"docs/trend-watch-2026.md","description":"What's current vs dated right now, honest trend assessment, how TZ-taste stays fresh via CI."} -->
# Trend Watch 2026

Taste decays. Every technique on this page has a half-life: today's sharp is
tomorrow's slop, because the models learn the sharp thing and average it into
oblivion. This doc is TZ-taste's honest ledger — what's current, what's
dated, what's emerging — updated as the weekly CI refreshes the library.

*Last assessed: October 2026. Treat anything here older than 6 months as
suspect — that's the point of the freshness system below.*

## Currently sharp (use with confidence)

- **Oversized editorial type as the hero.** Fraunces/Anton/Unbounded at
  massive sizes, tight tracking, left-aligned or full-bleed. Still reads as
  deliberate because the *composition* varies even when the technique is
  common. DNAs: editorial-serif, acid-rave, industrial-brutalist.
- **Hairlines over shadows.** 1px borders as the primary structure. The
  pancake-shadow era is over; restraint reads as confidence. Universal
  across DNAs.
- **Mono micro-labels.** Space Mono / IBM Plex Mono annotations —
  `EST. 1987`, `STEP 02/04`, timestamps, coordinates. Adds technical
  credibility to any DNA. Still sharp because it's *information*, not
  decoration.
- **Bento grids (asymmetric).** The symmetric 3×2 bento is done (see below),
  but *asymmetric* bento — one large cell, satellites of different sizes —
  still works. Key: the big cell must earn its size with real content.
- **Dark-luxe restraint.** Near-black + one muted metallic + whisper type.
  Survives because it's hard to fake — thin serifs and generous air can't
  be approximated by adding more stuff.
- **Real photography, graded hard.** Phone-shot, specific, duotone or
  high-contrast B&W. The stock era is dead; the *specific* era is here.
- **Scroll-driven storytelling (restrained).** One or two pinned moments
  per page, transform/opacity only. The 2024 version had twelve; the 2026
  version has two and they're better.

## Dated (retire or radically rethink)

- **Purple/blue gradient everything.** The #1 AI tell (ANTI-SLOP #1). Dated
  since 2024, still the most common slop marker in 2026. There is no
  rehabilitation — pick a DNA background token.
- **Glassmorphism as a personality.** Frosted cards on pastel gradients was
  2021; by 2026 it's the default output of every "modern dashboard" prompt.
  glass-calm keeps the *technique* but only as a calm-DNA material, never as
  the whole design.
- **Three equal feature cards.** Dated since forever, still generated daily
  (ANTI-SLOP #2). The triptych is where taste goes to be averaged.
- **Centered hero: badge → headline → subtext → two buttons → logos.**
  The template (ANTI-SLOP #3). If your hero matches this sequence, the page
  is dated regardless of how pretty the gradient is.
- **Neumorphism.** Soft extruded plastic. Died 2022, still haunts Dribbble
  reposts. Let it rest.
- **AI-blob 3D renders.** Glossy abstract purple shapes (docs/imagery-
  art-direction.md). The illustration equivalent of the purple gradient —
  instantly recognizable as model output since 2024.
- **Marquees of client logos.** Motion for motion's sake; says "we couldn't
  think of a real testimonial." A static mono list is more editorial and
  more honest.
- **"Delve / leverage / seamless" copy.** The LLM-voice vocabulary list
  (ANTI-SLOP #11). Dated the moment it was generated. Human copy is the
  trend now — specificity over smoothness.

## Emerging (watch, don't chase)

- **Brutalist data tables as design.** Dense, bordered, mono-heavy tables
  treated as the visual centerpiece (inspired by the industrial-brutalist
  register). Emerging in dev tools and data products. Sharp *if* the data
  is real — a fake table is just a new kind of lorem ipsum.
- **"Digital ephemera" textures.** Ticket stubs, stamped labels, perforated
  edges, photocopy grain — the physical world leaking into UI. The
  case-study ticket stub (docs/case-study-slop-to-taste-3.md) is this trend
  done right: one object, functional, on-DNA.
- **Anti-design restraint.** Pages that are *almost* unstyled — raw HTML
  energy, system-adjacent type, brutal hierarchy. Distinct from slop because
  it's deliberate: every unstyled element is a choice. (retro-terminal and
  swiss-rational live adjacent to this.)
- **Localized maximalism.** y2k-chrome's whole thesis: the global minimal
  consensus is boring, so specific subcultures (Y2K nostalgia, rave flyers,
  zine culture) become design languages. Expect more DNAs from more
  subcultures — the library grows sideways, not just forward.
- **Voice-first UI hints.** Interfaces designed with voice interaction as a
  first-class input — visible mic states, transcript-first layouts. Too
  early to be a DNA, but the patterns are forming.

## The honest assessment framework

When someone pitches you a trend (or when a model generates one), run it
through three questions:

1. **Is it a decision or a default?** Glassmorphism died as a *default* but
   survives inside glass-calm as a *decision*. The technique isn't dated —
   the thoughtlessness is. Ask: "what brief would specifically choose this?"
   If the answer is "any brief," it's a default. Kill it.
2. **Can a model generate it convincingly?** If yes, its half-life is short.
   Models are excellent at gradients, cards, and centered heroes — which is
   exactly why those read as slop. Techniques that require *judgment*
   (asymmetric bento with real content hierarchy, optical spacing, written
   copy) survive longer because they can't be averaged.
3. **Does it serve the conversion?** The marquee died because it never sold
   anything. Oversized type survives because it delivers the claim instantly.
   Trends that carry information outlive trends that carry vibes.

**The meta-trend:** specificity is the only durable aesthetic. Real photos
of real places, real copy with real numbers, real constraints from real
briefs. Everything generic gets absorbed by the models; everything specific
survives. This is why TZ-taste is organized around *briefs* (DECISION-MATRIX.md),
not around *looks*.

## How TZ-taste stays fresh (the CI system)

Taste is a moving target, so the library moves. The freshness system:

1. **Weekly source re-check** (`.github/workflows/freshness.yml`): all 15
   curated sources in sources/sources.json are re-verified — licenses,
   availability, whether the source still represents current practice.
   Dead or drifted sources get flagged or replaced. The commit history is
   the audit trail.
2. **New DNAs from the wild:** when a subculture or technique matures from
   "emerging" to "sharp" above, it becomes a DNA candidate. DNAs are added,
   never "updated into" — editorial-seriff doesn't *become* something else;
   a new DNA joins the twelve. Old DNAs retire only when their entire
   register reads as dated (none have yet).
3. **ANTI-SLOP.md evolves:** new tells get added via PR as the models learn
   new tricks. The checklist is versioned by the same weekly rhythm — slop
   evolves, so does the list. If you spot a new tell in the wild, that's a
   PR, not a complaint.
4. **This doc is the ledger:** trend assessments move from "emerging" to
   "sharp" to "dated" here, with dates. When guidance elsewhere in the repo
   conflicts with this doc, this doc wins — it's the newest judgment.

**What this means for you:** pin a TZ-taste version for production work
(reproducibility), but check this doc quarterly. If your site's techniques
have slid from "sharp" to "dated," that's a redesign signal — not a failure,
just the half-life doing its job.

## DNA health check (October 2026)

All twelve DNAs, assessed against the ledger above:

| DNA | Status | Note |
|---|---|---|
| editorial-serif | sharp | oversized-serif hero trend is this DNA's home turf |
| dark-luxe | sharp | restraint can't be averaged; hardest to fake well |
| swiss-rational | sharp | data-as-aesthetic is anti-slop by construction |
| industrial-brutalist | sharp | brutalist data tables trending in its favor |
| soft-minimal | watch | closest to the model default — needs strict token discipline to avoid drifting into generic SaaS |
| glass-calm | watch | technique is fine; must never become "glassmorphism as personality" again |
| neo-brutalist-pop | sharp | sticker maximalism still distinct from model defaults |
| acid-rave | sharp | flyer energy is the opposite of averaged |
| retro-terminal | sharp | the terminal *is* the visual; un-fakeable |
| ma-japanese | sharp | emptiness as content; models fear whitespace |
| y2k-chrome | sharp | localized maximalism thesis holding |
| docs-solar | sharp | readability never dates |

**The pattern:** DNAs survive when they're *far* from the statistical
average (acid-rave, retro-terminal, ma-japanese) or when their discipline
is structural (swiss-rational's grid, dark-luxe's restraint). soft-minimal
and glass-calm sit nearest the model's defaults — they work, but they
demand the strictest adherence to tokens, spacing, and the slop blocklist.
If a soft-minimal page starts feeling generic, the DNA isn't wrong — the
discipline slipped.

## Signals a trend is dying

You don't need this doc to stay current — you need the pattern-recognition.
A technique is sliding from "sharp" to "dated" when you see three or more of
these:

1. **The models do it unprompted.** Ask for "a landing page" with no style
   direction. If the output uses the technique, it's the average now — it's
   over. (This is how the purple gradient died: it became the default.)
2. **Template marketplaces sell it as a category.** "50 glassmorphism
   dashboard kits" means the technique has been productized, which means
   it's been averaged, which means it's done as a differentiator.
3. **It appears in unrelated briefs.** Bento grids on a law-firm site.
   Marquees on a funeral home. When a technique stops matching briefs and
   starts matching *habit*, it's decoration — cut it.
4. **Parodies exist.** The "AI slop starter pack" memes are a lagging
   indicator, but a reliable one. If Twitter is joking about it, clients
   are noticing it.
5. **You can't name a brief that would specifically choose it.** The
   decision-or-default test (above). "Modern SaaS dashboard" is not a
   reason — it's a shrug.

**The counter-signal:** a technique can be *old* without being *dated*.
Hairlines are ancient. Serif type is centuries old. They survive because
they're structural, not stylistic — they solve problems (hierarchy,
readability) rather than signaling newness. When in doubt, prefer the
structural over the novel. Novelty has a half-life; structure doesn't.

## Using this doc in reviews

- **Quarterly design review:** pull up the ledger, walk through the
  techniques your product uses, mark each sharp/watch/dated. Anything
  "dated" goes on the redesign backlog with a reason, not a vibe.
- **Agent briefs:** paste the "Dated" section into the brief's Don't-list.
  "Don't: purple gradients, glassmorphism-as-personality, three equal
  cards, centered badge-hero, AI-blob renders" — five bans that prevent
  80% of trend-slop.
- **Onboarding designers:** this doc is the fastest way to transfer
  judgment. "Read the trend ledger, then tell me which of our pages uses
  a dated technique" is a better first-week task than any tutorial.

## The one prediction worth making

By 2027, "looks AI-generated" will stop being a useful critique — because
*everything* will be AI-assisted, and the critique will shift to "looks
undecided." The checklists in this repo (ANTI-SLOP.md's blockers, the
pre-flight's four decisions, the shipping list) are already written for that
world: they don't test whether a human or a model made the page. They test
whether *decisions were made*. That test doesn't expire.

---

*Part of [TZ-taste](https://github.com/rawmware/TZ-taste). Spotted a new
tell or a dying trend? PRs welcome — slop evolves, so does this list.*
