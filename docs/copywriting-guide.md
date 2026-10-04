<!--tz-meta {"id":"copywriting-guide","title":"The Copywriting Guide","file":"docs/copywriting-guide.md","description":"Headlines that make claims, button copy, microcopy, killing jargon, and voice per DNA."} -->
# The Copywriting Guide

AI copy has a smell: "Unlock seamless, cutting-edge solutions that elevate
your workflow." Nobody talks like that. Nobody *thinks* like that. Good
interface copy sounds like a competent human explaining something briefly.
This guide is the rules for that.

## Headlines make claims

A headline's job is to give the reader a reason to read the next line.
"Welcome to Acme" gives no reason. A claim does.

**The test:** after reading the headline, can the reader disagree with it,
ask "how?", or feel something? If none of those, it's decoration.

Bad → good:

- "Welcome to Flowbase" → "Project tracking your team will actually open."
  (Claim: teams avoid most tracking tools. Disagreeable, specific.)
- "Our innovative platform leverages AI" → "Drafts the status report from
  your commits." (Says what it does. No adjectives needed.)
- "Solutions for modern teams" → "Every client file, searchable in one
  place." (A concrete outcome, not a category.)
- "Elevate your workflow" → banned word ("elevate") + says nothing.
  → "Cut the weekly report from 2 hours to 20 minutes." (A number is a
  claim. Use numbers whenever they're true.)

Rules:

1. **One idea per headline.** If it needs "and," it's two headlines.
   Pick the stronger one.
2. **Concrete beats clever.** Clever headlines make the writer feel
   smart; concrete headlines make the reader feel smart. On first paint,
   concrete wins — save clever for the one weird thing, not the value
   prop.
3. **No "Welcome to [Product]."** (skill rule). The reader knows where
   they are — they clicked to get here. Tell them why staying is worth it.
4. **Questions work** when the reader actually asks them: "Where did the
   budget go?" beats "Ready to transform your finances?" Fake questions
   ("Ready to...?", "Looking for...?") are template filler.
5. **Length:** headlines can run long if every word earns it. Subheads do
   the explaining — one to two lines, plain sentences, no buzzwords.

## Subheads earn the click

The subhead's job: make the headline believable. It answers "how?" or
"prove it."

- Headline: "Invoices that send themselves." Subhead: "Connect Stripe
  once. We draft, send, and chase every invoice — you approve in one tap."
  (Mechanism + effort level. Believable.)
- Headline without proof reads as marketing. Headline with mechanism
  reads as product.

Formula: **[what it does] + [how much effort it costs the user].** Effort
honesty ("you approve in one tap", "setup takes 4 minutes") converts
better than feature lists.

## Button copy

Buttons say what happens (skill rule). "Learn more" says nothing — more
*what*? Rules:

- **Verb + object:** "See the patterns", "Start the free trial",
  "Download the report", "Book a table". The reader should be able to
  predict the next screen.
- **Primary vs secondary:** the primary button is the page's main verb
  ("Start free trial"); the secondary is the low-commitment alternative
  ("Watch the 2-min demo"). Never two primaries competing.
- **No "Submit."** Submit what? "Send application", "Post comment",
  "Save changes". The button finishes the sentence "I want to ___."
- **No "Click here."** (See accessibility: link text describes the
  destination.)
- **State honesty:** "Start free trial" → if it needs a credit card, say
  "Start free trial — no card required" nearby, or don't claim it. The
  fastest way to destroy trust is a button that lies about the next step.
- **Destructive actions** say the consequence: "Delete project" not
  "Confirm". Confirm *what*?

## Microcopy

Microcopy is everything that isn't headline or button: form hints, empty
states, errors, confirmations, tooltips. It's where AI-generated sites
feel most robotic, because microcopy is where humans are most human.

**Errors** (see accessibility checklist for the mechanics):

- Say what happened, why, and how to fix it — in that order.
- Bad: "Invalid input." / "Error 422." / "Something went wrong."
- Good: "That email bounced — check for a typo and try again."
- Good: "Password needs 12+ characters. Yours has 9."
- Never blame the user. "You entered an invalid date" → "That date's in
  the past — pick a future one." The system's fault is assumed; the fix
  is offered.

**Empty states** are onboarding, not dead ends:

- Bad: "No projects yet."
- Good: "No projects yet. Create your first — it takes 30 seconds."
  (State + action + effort. Always an action.)
- The empty state of a new account is the most-read screen in the
  product. Write it like it matters.

**Confirmations** confirm and orient:

- Bad: "Success!"
- Good: "Report sent to 4 teammates. They'll get it by email."
  (What happened + what happens next.)

**Loading** states say what's happening after 2 seconds:

- "Saving…" is fine under 2s. After that: "Saving your changes — still
  working, don't close this tab." Silence during long waits reads as
  broken.

**Tooltips and hints** explain *why*, not *what*:

- Bad: "Click to enable notifications." (I can see it's a toggle.)
- Good: "Get a ping when a client replies — roughly 3 per week."
  (Consequence + frequency. Now I can decide.)

## Killing jargon

ANTI-SLOP #11 bans "delve, leverage, cutting-edge, seamless, elevate"
— that's the starter list. The full kill list for interface copy:

**Banned outright:** leverage, utilize (use "use"), seamless, cutting-edge,
state-of-the-art, revolutionary, game-changer, unlock (as a verb for
features), supercharge, elevate, delve, ecosystem (for "product list"),
holistic, robust, streamline, empower, synergy, disruptive, next-gen.

**The test:** would you say it to a friend explaining the product over
coffee? "It leverages AI to streamline your workflow" → no human has ever
said this sentence. "It drafts the email from your notes" → yes.

**Hedge words** ("simply", "just", "easily", "quickly") — cut them. "Just
click here to easily get started" insults the reader twice: it implies the
task is trivial (if they struggle, they're stupid) and pads the sentence.
State the action: "Click to start."

**"We" vs "you":** features are about the reader. "We built an amazing
dashboard" → "See everything in one dashboard." The product is the hero
of its marketing; the user is the hero of the product.

## Voice per DNA

Voice follows the DNA — the words should sound like the visuals look.
One-line voice spec per DNA, with a sample:

- **editorial-serif:** considered, literary, precise. *"Twelve essays on
  building software slowly, printed quarterly."* Long sentences allowed.
  Semicolons welcome.
- **swiss-rational:** terse, factual, numbered. *"147 components. One
  grid. Zero exceptions."* Fragments are fine. Data over adjectives.
- **dark-luxe:** quiet, assured, understated. *"Private banking, without
  the appointment."* Never exclamation marks. Never "amazing."
- **acid-rave:** loud, direct, confrontational. *"TURN IT UP. Tickets
  Friday."* All-caps is on-brand here and nowhere else.
- **glass-calm:** gentle, reassuring, simple. *"Your week, softly
  organized."* Short words. No urgency, ever.
- **retro-terminal:** terse, machine, dry humor allowed. *"$ deploy
  --prod // done in 41s."* Status-line voice. Lowercase is fine.
- **neo-brutalist-pop:** playful, bold, winking. *"Spreadsheets, but
  make it fun. (It worked.)"* Parentheticals welcome. Exclamation marks
  rationed: one per page.
- **industrial-brutalist:** blunt, industrial, no padding. *"Ships
  Monday. Breaks never."* Spec-sheet voice. Numbers everywhere.
- **ma-japanese:** sparse, poetic, silent. *"One bowl. Morning light."*
  Fewer words than any other DNA. Each word weighed.
- **y2k-chrome:** glossy, optimistic, nostalgic-futurist. *"Your files,
  but from the future."* Playful tech optimism, circa 1999, on purpose.
- **docs-solar:** clear, patient, instructive. *"Install in three steps.
  We'll wait."* Second person, present tense, no idioms (docs get
  translated).
- **soft-minimal:** calm, confident, plain. *"Notes that stay out of
  your way."* The anti-marketing voice. Understate everything.

Voice violations to watch: exclamation marks on `dark-luxe` or
`ma-japanese` (never), all-caps outside `acid-rave`/`industrial-brutalist`
(accident, not emphasis), and emoji anywhere (ANTI-SLOP #6 — Lucide or
Phosphor icons, one stroke weight).

## The read-aloud test

Skill rule: read microcopy out loud once. Add two more tests:

1. **The friend test:** explain the headline to a friend in one breath.
   If you paraphrase it into simpler words, those simpler words *are*
   the headline. Write that instead.
2. **The screenshot test:** screenshot the page, show it to someone for
   5 seconds, hide it. Can they say what the product does? If not, the
   headline failed — no matter how pretty the type is.

## Length discipline

- Hero headline: under 12 words. Over 12, it's a paragraph wearing a
  headline's clothes.
- Feature descriptions: 1–2 sentences. The third sentence is always cut.
- Testimonials: one sharp sentence beats three vague paragraphs. Edit
  testimonials — with permission — down to the quotable line.
- Footers: real links and real information (ANTI-SLOP #14 bans the
  "© 2026 All rights reserved."-only footer).

## Self-review checklist

- [ ] Every headline makes a claim, asks a real question, or states a
      concrete outcome — zero "Welcome to [Product]"
- [ ] Subheads give mechanism + effort, not adjectives
- [ ] Buttons are verb + object; no "Submit", "Learn more", "Click here"
- [ ] Errors say what happened, why, and the fix — never blame the user
- [ ] Empty states pair the state with an action
- [ ] Zero banned jargon (leverage, seamless, cutting-edge, utilize,
      supercharge, unlock, ecosystem, synergy…)
- [ ] Zero hedge words (just, simply, easily) padding instructions
- [ ] Copy voice matches the DNA (see per-DNA samples)
- [ ] Microcopy read aloud once; friend test and screenshot test pass
- [ ] "We" language flipped to "you" language where the reader acts

*Part of [TZ-taste](https://github.com/rawmware/TZ-taste). Write like a
human explaining something briefly — because that's what it is.*
