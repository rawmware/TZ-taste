<!--tz-meta {"id":"design-debt","title":"Design Debt","file":"docs/design-debt.md","description":"The taxonomy of design debt: visual, pattern, copy, and token drift — how to measure it, budget paydown, and stop it at the source."} -->
# Design Debt

Design debt is every shortcut that made a deadline and stayed. The
one-off button style, the "temporary" modal, the third slightly-different
card. Individually harmless; collectively they're why a two-year-old
product looks like five products wearing a trench coat.

Debt isn't a moral failing — it's a loan. The problem is teams take the
loan and never schedule repayment. This doc is the repayment schedule.

## The taxonomy (name it to fight it)

| Type | What it looks like | Interest rate |
|---|---|---|
| **Visual debt** | 6 button styles, 4 grays that should be 2, rogue border radii | High — every new screen copies the wrong one |
| **Pattern debt** | 3 different date pickers, 2 toast systems, modal vs sheet chosen by mood | Highest — users relearn the product per screen |
| **Copy debt** | "Delete" vs "Remove" vs "Discard" for the same action; tense drift | Medium — erodes trust quietly |
| **Token drift** | `#f5f5f5` next to `#f7f7f7`; spacing values off the 8pt scale | Medium — compounds silently in code |
| **Flow debt** | Onboarding step 4 nobody can justify; settings page as junk drawer | High — users feel it as confusion |

Pattern debt is the most expensive: inconsistent patterns teach users the
product is unpredictable, and unpredictable products get abandoned. When
triaging, kill pattern debt first.

## Measuring it: the drift index

You can't pay down what you can't count. Quarterly, run this audit:

1. **Screenshot inventory.** Capture every distinct screen (or the top 50
   by traffic). Group visually identical components.
2. **Count variants.** Buttons: how many distinct styles? Cards? Form
   field heights? Empty states? Write the numbers down — "7 button
   variants" is a fact; "feels inconsistent" is a vibe.
3. **Drift index = variants ÷ canonical patterns.** A healthy product
   sits near 1.0–1.3 (some justified variants). Above 2.0, you're paying
   real interest: slower builds, confused users, QA catching visual bugs
   that shouldn't exist.
4. **Log the top 10.** The ten most-duplicated non-canonical patterns go
   on the paydown backlog with screenshots. Debt you can point at gets
   fixed; abstract debt gets deferred forever.

## The paydown budget

- **10–20% of design capacity per cycle** goes to debt, scheduled like
  any other work — not "when we have time" (you won't). One sprint in
  five is a debt sprint; or one day a week, every week. Pick a cadence
  and defend it.
- **Fix at the source, not the symptom.** Consolidating 7 button variants
  into the 2 canonical ones beats restyling 40 screens individually. The
  token file is where one change fixes forty screens
  (docs/design-tokens-explained.md).
- **Grandfather, don't big-bang.** New work uses canonical patterns from
  today; old screens migrate when touched. A "redesign everything" quarter
  ships nothing and breaks muscle memory.
- **Debt has an owner.** One person (or a tiny guild) approves new
  patterns. Most debt is born the day someone invents a variant without
  asking. The approval can be a 5-minute check — it just has to exist.

## Prevention: the DNA-first rule

TZ-taste's structural defense: **every new screen starts from one DNA and
its tokens** (skill/SKILL.md). Rogue hex values, off-scale spacing, and
novel shadows can't accumulate if the rule is "every value resolves to a
token." Add two gates:

1. **Pre-ship token check.** The spacing-rhythm audit's first item —
   every value on the scale or commented optical — catches token drift
   before it merges.
2. **The variant question.** Before building a new pattern, the designer
   answers: "Which existing pattern is closest, and why does it fail?"
   in one sentence. Half of all variants die at this question.

## The design-debt audit (run quarterly)

- [ ] Screenshot inventory current (top 50 screens by traffic)
- [ ] Variant counts recorded: buttons, cards, fields, empty states, toasts
- [ ] Drift index computed; >2.0 triggers a paydown plan
- [ ] Top-10 debt backlog exists with screenshots and owners
- [ ] 10–20% of design capacity scheduled for paydown this cycle
- [ ] Pattern debt prioritized over visual debt in triage
- [ ] New-pattern approval exists (owner named, check ≤5 min)
- [ ] Token check runs pre-ship on every screen
- [ ] Migration rule documented: new = canonical, old = migrate-on-touch

---

*Part of [TZ-taste](https://github.com/rawmware/TZ-taste). Companion:
docs/design-tokens-explained.md, docs/shipping-checklist.md, skill/SKILL.md.*
