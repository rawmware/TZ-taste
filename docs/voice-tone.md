<!--tz-meta {"id":"voice-tone","title":"Voice & Tone","file":"docs/voice-tone.md","description":"Voice is who you are, tone is how the moment feels: the attribute table, per-context sliders, and sentence-level rules."} -->
# Voice & Tone

**Voice** is who the product is — constant, recognizable, the same on the
homepage and in the settings. **Tone** is how that voice adjusts to the
moment — the error message doesn't sound like the welcome email, but both
sound like the same product. Slop copy fails here first: every AI-written
interface sounds like the same eager intern. Voice is how you stop.

## Define voice as 4 attributes (with opposites)

Vague values ("friendly," "professional") produce vague copy. Define each
attribute as a spectrum with this/not-that:

| We are this | Not that | Sounds like |
|---|---|---|
| Direct | Blunt | "That didn't work. Here's why." / not "Oopsie!" |
| Warm | Gushy | "Nice — you're in." / not "We're SO excited!!!" |
| Precise | Pedantic | "Export finished: 1,204 rows, CSV." / not "Your export has been successfully completed." |
| Confident | Arrogant | "Fixed in 2.4.1." / not "Our revolutionary fix…" |

Four attributes, each with a concrete example. Print it. Every writer and
every prompt references this table — it's the voice contract.

## Tone sliders per context

Same voice, different moments. Set the mix per context:

| Context | Direct | Warm | Precise | Example |
|---|---|---|---|---|
| Welcome / onboarding | ●●○○ | ●●●○ | ●●○○ | "You're in. Let's set up your first project." |
| Success confirmation | ●●●○ | ●●○○ | ●●●● | "Saved. 14 records updated." |
| Error (user's fault) | ●●●○ | ●●●○ | ●●●○ | "That card was declined — check the number and try again." |
| Error (our fault) | ●●●● | ●●●○ | ●●○○ | "Our fault — the export failed. We're on it; try again in 5 minutes." |
| Billing / money | ●●●● | ●○○○ | ●●●● | "You'll be charged $24 on Nov 1. Cancel anytime before then." |
| Empty states | ●●○○ | ●●●● | ●○○○ | "Nothing here yet — your first invoice takes about a minute." |
| Destructive confirm | ●●●● | ●○○○ | ●●●● | "Delete 'Q3 report'? This can't be undone." |

Note the error rows: **own your outages, respect user errors.** "Our
fault" gets maximum directness and an apology with a timeframe. User
errors get warmth and a next step — never blame, never cutesy deflection.

## Sentence-level rules

1. **Grade 8 reading level.** Short sentences. One idea each. If a
   microsentence needs a semicolon, split it.
2. **Active voice, named actor.** "We charged your card" / "You deleted
   the file" — never "Your card was charged" floating in passive fog.
3. **Buttons say what happens.** "Send invoice" beats "Submit." "Delete
   project" beats "Confirm." (docs/cta-design.md)
4. **Numbers are specific.** "About a minute" for <60s; "3 minutes" when
   measured; never "momentarily" or "shortly."
5. **One exclamation mark per page, maximum.** Usually zero. Excitement
   is rationed; everything-exciting means nothing is.
6. **No fake personalization.** "Hi {first_name}, as a valued customer…"
   is a mail merge, not warmth. Use the name or drop it.
7. **Contractions are allowed.** "You're in" sounds human; "You are in"
   sounds like a terms-of-service. Match the voice table, not a style
   guide from 1998.

## Words to retire

Beyond the five words on the ANTI-SLOP blocklist (docs/ANTI-SLOP.md #11),
retire these from product copy: "utilize" (use "use"),
"facilitate," "robust," "holistic," "synergy," "disrupt," "game-changer,"
"journey" (for funnels), "empower" (unless someone is literally gaining
power), "simply" and "just" (if it were simple they wouldn't be reading
the help text), "please" in error messages (apologize once, then help).

## The voice audit (run before ship)

- [ ] Voice table exists: 4 attributes, each with this/not-that + example
- [ ] Tone set per context (errors, billing, empty, destructive at minimum)
- [ ] Outages owned directly ("our fault") with a timeframe
- [ ] User errors get a next step, never blame or cutesy deflection
- [ ] Reading level ≤ grade 8; sentences short, active, named actor
- [ ] Buttons say what happens; numbers specific, never "shortly"
- [ ] ≤1 exclamation mark per page; contractions match voice
- [ ] Blocklist + retire list checked across all visible copy
- [ ] Read aloud once — if it sounds like an intern, rewrite

---

*Part of [TZ-taste](https://github.com/rawmware/TZ-taste). Companion:
docs/copywriting-guide.md, docs/error-handling-ux.md, docs/cta-design.md.*
