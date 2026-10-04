<!--tz-meta {"id":"empty-states","title":"Empty States","file":"docs/EMPTY-STATES.md","description":"Zero-data screens that teach instead of dead-end — anatomy, types, and tone rules."} -->
# Empty States

Every product has moments with nothing to show: first run, deleted
everything, search with no matches, a list nobody populated yet. Most
teams design these last, which is backwards — the empty state is often the
*first* thing a new user sees, and it's the moment the product must explain
its own purpose. A blank table with headers is a dead end. An empty state
is a teacher.

## The five types

**1. First-run.** The user just arrived; there is no data because there
couldn't be yet. Job: explain what goes here and why they'd want it.
This is onboarding disguised as a screen — the highest-value empty
state you'll design.

**2. User-cleared.** They deleted everything, or archived it all. Job:
confirm the state is intentional and offer the way back ("Trash empties in
30 days — restore anything"). Tone: calm, never scolding.

**3. No results.** Search or filters returned nothing. Job: say what was
searched, suggest the fix. This is the only empty state where echoing the
user's input is mandatory.

**4. Permission/gated.** The data exists but the user can't see it
(no access, offline, feature not enabled). Job: name the blocker and the
exact step past it. Never show a generic empty screen for a permission
problem — that's a lie that sends users to support.

**5. Partial/upsell.** The feature area is real but empty at this tier
("No automations yet — available on Scale"). Job: show what's possible
without shaming the current plan. One upgrade path, honestly labeled.

## The anatomy (all five types)

Every empty state has exactly these parts, in this order:

1. **Visual** — an icon or small illustration, 96–160px. Lucide/Phosphor
   icon at 48–64px in a muted circle works for 90% of cases; custom
   illustration only if the brand already has an illustration language.
   Never a giant stock image, never an emoji (ANTI-SLOP #6).
2. **Headline** — states the situation, ≤ 8 words: "No projects yet",
   "Nothing matches those filters". Plain language, sentence case.
3. **Explanation** — one to two lines: why it's empty and/or what belongs
   here. "Projects hold your files, briefs, and timelines in one place."
   This line is the teaching; don't skip it.
4. **One primary action** — the single next step: "Create your first
   project". Verb + object (docs/CTA-DESIGN.md). Exactly one primary;
   a quiet secondary ("Import from CSV", "See an example") is allowed.
5. **(No-results only) The echo + reset** — "No results for 'quarterly
   report'." plus "Clear filters" / "Try fewer keywords". Never leave a
   failed search without an exit.

What it never has: a data table with headers and zero rows (that's the
absence of design), three competing CTAs, or a paragraph of marketing copy.
The empty state is 30 seconds of the user's life — respect it.

## Tone rules

- **Never blame the user.** "You haven't added any projects" accuses;
   "No projects yet" describes. The difference is one word and the entire
   relationship.
- **Match the product's voice, then go 10% warmer.** Empty states are
   vulnerable moments — the user is lost or new. Clinical copy ("0 items")
   reads as indifference; warmth here is cheap and effective.
- **Be specific about the action's payoff.** "Create your first project"
   beats "Get started"; "Invite your team" beats "Continue". The button
   should complete the sentence the headline started.
- **Humor is allowed once, in low-stakes contexts only.** A playful
   illustration on an empty playlist is fine; jokes on an empty medical
   records screen or a failed payment are a trust violation. When in doubt,
   be plain.

## First-run: the onboarding empty state

This one deserves extra care because it fires exactly once per user, at
peak attention:

- **Show, don't just tell.** If possible, seed one *real* example item
  marked as sample ("Sample project — delete anytime") instead of an empty
  screen. A product with one example teaches 10x faster than a product with
  a paragraph. The sample must be deletable in one click and clearly
  labeled — fake data that pretends to be real destroys trust.
- **Progressive disclosure:** the empty state can carry 2–3 setup steps
  ("1. Create a project 2. Invite your team 3. Connect your calendar")
  with the first step actionable inline. More than 3 steps is a wizard —
  build the wizard instead of cramming it here.
- **Time-to-value target:** from this screen to the first real item should
  be under 60 seconds and under 3 clicks. Count it. If it's longer, the
  empty state isn't the problem — the onboarding flow is.

## No-results: the search contract

- **Echo the query verbatim:** "No results for 'q3 report'." The user
  needs to see what the system heard — typos live here.
- **Offer the two exits:** "Clear all filters" and a suggestion ("Try
  'report' or check spelling"). If the product supports it, offer "Create
  'q3 report'" — turning a failed search into a creation flow is the
  highest-value trick in this doc.
- **Distinguish zero-from-search vs zero-from-filters.** "No projects
  match these filters" (adjust filters) is different from "No projects
  yet" (create one). Conflating them sends filter-users down the creation
  path and creation-users into filter-tweaking.

## Common failures

| Symptom | Cause | Fix |
|---|---|---|
| New users bounce at first screen | blank table, no teaching | first-run empty state: visual + what-goes-here + one action |
| "I searched and got nothing, so I left" | no echo, no exits | echo query + clear filters + create-from-query |
| Users think the product is broken | permission block shown as generic empty | name the blocker + the exact step past it |
| Empty state with 3 CTAs | design by committee | one primary; demote or cut the rest |
| Sample data confuses users | fake items not labeled | "Sample — delete anytime", one-click removal |

## Pre-ship audit

- [ ] Every zero-data screen in the product has a designed state — no bare tables with headers and zero rows
- [ ] Anatomy present in order: visual (96–160px) → headline (≤ 8 words) → 1–2 line explanation → one primary action
- [ ] Exactly one primary CTA, verb + object, naming the payoff (docs/CTA-DESIGN.md)
- [ ] No-results echoes the query verbatim and offers clear-filters + a creation exit
- [ ] Permission/gated states name the blocker and the exact step past it — never generic
- [ ] Tone blameless ("No projects yet", never "You haven't added…"); humor only in low-stakes contexts
- [ ] First-run: time-to-first-real-item under 60 seconds and 3 clicks; sample data labeled and deletable
- [ ] Visual is icon/illustration on-brand — no emoji (ANTI-SLOP #6), no stock photo

## Per-DNA notes

- **soft-minimal / glass-calm:** the empty state is mostly whitespace with
  a small centered group — the calm *is* the reassurance. Don't fill the
  void; frame it.
- **retro-terminal:** `$ ls` returning nothing, then the suggestion as a
  command: `> try: create --name "Q3 report"`. The bit writes itself —
  keep it to 3 lines.
- **neo-brutalist-pop:** dashed-border placeholder box where the content
  will live, with the CTA inside it. The empty slot is drawn, not
  described.
- **editorial-serif:** the empty state as a pull-quote-like statement —
  large quiet type, small action link. Restrained, confident.
- **dark-luxe:** minimal — one line of muted type, one quiet outline
  button. An elaborate illustration would break the register.
- **industrial-brutalist:** spec-plate style — "STATUS: EMPTY / ACTION:
  CREATE PROJECT", monospace, bordered. Honest and direct.

---

*Part of [TZ-taste](https://github.com/rawmware/TZ-taste). Companion:
docs/CTA-DESIGN.md (empty-state actions), docs/ERROR-HANDLING-UX.md
(permission/offline empties), skill/SKILL.md copy rules.*
