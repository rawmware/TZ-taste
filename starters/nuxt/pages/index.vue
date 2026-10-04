<!--tz-meta {"id":"nuxt-page","title":"Gridhouse landing page (Bauhaus Primary)","category":"Starter","file":"starters/nuxt/pages/index.vue","tags":["nuxt","landing-page","coworking"],"description":"Gridhouse coworking landing page: asymmetric hero with diagonal red bar, workshop spec rows, geometric membership blocks (circle/square/triangle), visit CTA, real footer.","dnas":["bauhaus-primary"]} -->
<script setup lang="ts">
interface SpaceRow {
  index: string
  name: string
  spec: string
  note: string
}

interface Tier {
  shape: 'circle' | 'square' | 'triangle'
  name: string
  price: string
  per: string
  blurb: string
  features: string[]
  cta: string
}

const spaces: SpaceRow[] = [
  {
    index: '01',
    name: 'Print room',
    spec: 'A2 laser · risograph · cutter',
    note: 'Toner is on us. Bring paper, take prints.'
  },
  {
    index: '02',
    name: 'Studio floor',
    spec: '48 desks · 140 × 70 cm oak',
    note: 'North light, a task lamp at every seat, chairs that do not squeak.'
  },
  {
    index: '03',
    name: 'Kamer 3',
    spec: '8 seats · 55″ screen',
    note: 'The meeting room. €15 an hour for members, booked by the half hour.'
  },
  {
    index: '04',
    name: 'Event hall',
    spec: '60 standing · projector',
    note: 'Crits, launches, screenings. Members book it free on Sundays.'
  },
  {
    index: '05',
    name: 'Quiet room',
    spec: 'no calls, ever',
    note: 'Headphones on. The door has a red lamp so nobody knocks.'
  },
  {
    index: '06',
    name: 'Kitchen',
    spec: 'stove · espresso · dishwasher',
    note: 'Cook lunch. Wash your mug. The good beans are on Fridays.'
  }
]

const tiers: Tier[] = [
  {
    shape: 'circle',
    name: 'Flex',
    price: '€149',
    per: 'per month',
    blurb: 'For the days you need a desk, not a lease.',
    features: [
      '10 desk-days a month',
      'Any free desk, 8:00–19:00',
      'Mail handling included',
      'Print room access'
    ],
    cta: 'Start with Flex'
  },
  {
    shape: 'square',
    name: 'Fixed',
    price: '€289',
    per: 'per month',
    blurb: 'Your own desk. Leave the monitor, the plant, the mess.',
    features: [
      'Dedicated desk, 24/7 access',
      'Locker and monitor arm',
      'Kamer 3 at half price',
      'One guest pass a month',
      'Storage shelf under the desk'
    ],
    cta: 'Claim a Fixed desk'
  },
  {
    shape: 'triangle',
    name: 'Studio',
    price: '€520',
    per: 'per month',
    blurb: 'A lockable room for two to four. Your name on the door.',
    features: [
      'Private room, 24/7 access',
      'Fits 2–4 people',
      'Storage wall and whiteboard',
      'Event hall priority booking',
      'Your studio on the Gridhouse map',
      'Two guest passes a month'
    ],
    cta: 'Tour the Studios'
  }
]
</script>

<template>
  <div class="page">
    <!-- ============ top bar ============ -->
    <header class="topbar">
      <div class="wrap topbar__inner">
        <a class="brand" href="#top" aria-label="Gridhouse home">
          <span class="brand__mark" aria-hidden="true"></span>
          <span class="brand__word">Gridhouse</span>
        </a>
        <nav class="nav" aria-label="Sections">
          <a href="#workshop">Spaces</a>
          <a href="#membership">Membership</a>
          <a href="#visit">Visit</a>
        </nav>
        <a class="btn btn--sm" href="#visit">Book a tour</a>
      </div>
    </header>

    <main id="top">
      <!-- ============ hero: offset type, diagonal red bar ============ -->
      <section class="hero" aria-labelledby="hero-title">
        <div class="wrap hero__grid">
          <div class="hero__type">
            <p class="kicker snap"><span class="no">N°01</span> — Coworking for designers — Rotterdam</p>
            <h1 id="hero-title" class="snap snap-1">
              <span class="line">Sit.</span>
              <span class="line line--offset">Build.</span>
              <span class="line line--offset-2">Ship<span class="dot">.</span></span>
            </h1>
            <p class="hero__sub snap snap-2">
              Gridhouse is a coworking space for designers in Rotterdam.
              Oak desks, daylight, and a print room that never runs dry.
              Desks from €149 a month — no deposit, cancel monthly, coffee included.
            </p>
            <div class="snap snap-3">
              <a class="btn btn--red" href="#visit">Book a desk tour</a>
            </div>
          </div>
          <div class="hero__shapes snap snap-2" aria-hidden="true">
            <div class="shape shape--circle"><span class="dim">Ø 240</span></div>
            <div class="shape shape--square"></div>
            <div class="shape shape--tri"></div>
          </div>
        </div>
        <div class="hero__bar" aria-hidden="true"></div>
      </section>

      <hr class="rule-heavy" />

      <!-- ============ the workshop: honest spec rows ============ -->
      <section id="workshop" class="workshop" aria-labelledby="workshop-title">
        <div class="wrap">
          <div class="section-head">
            <p class="kicker"><span class="no">N°02</span> — The workshop</p>
            <h2 id="workshop-title">Six rooms.<br />No filler.</h2>
            <p class="section-head__note">
              Every room at Gridhouse exists because a member asked for it.
              Here is exactly what is in each one.
            </p>
          </div>
          <dl class="rows">
            <div v-for="space in spaces" :key="space.index" class="row">
              <dt class="row__index">{{ space.index }}</dt>
              <dd class="row__name">{{ space.name }}</dd>
              <dd class="row__spec">{{ space.spec }}</dd>
              <dd class="row__note">{{ space.note }}</dd>
            </div>
          </dl>
        </div>
      </section>

      <hr class="rule-heavy" />

      <!-- ============ membership: geometric blocks, one shape per tier ============ -->
      <section id="membership" class="membership" aria-labelledby="membership-title">
        <div class="wrap">
          <div class="section-head">
            <p class="kicker"><span class="no">N°03</span> — Membership <span class="grid-note">· grid: 12</span></p>
            <h2 id="membership-title">Three ways in.<br />One shape each.</h2>
            <p class="section-head__note">
              Pick the shape that fits how you work. Switch tiers at the end of
              any month — nobody will take it personally.
            </p>
          </div>
          <div class="tiers">
            <article
              v-for="(tier, i) in tiers"
              :key="tier.name"
              :class="['tier', `tier--${tier.shape}`, `tier--span-${i}`]"
            >
              <div :class="['tier__shape', `tier__shape--${tier.shape}`]" aria-hidden="true"></div>
              <h3 class="tier__name">{{ tier.name }}</h3>
              <p class="tier__price">{{ tier.price }}<span class="tier__per">{{ tier.per }}</span></p>
              <p class="tier__blurb">{{ tier.blurb }}</p>
              <ul class="tier__list">
                <li v-for="feature in tier.features" :key="feature">{{ feature }}</li>
              </ul>
              <a class="tier__cta" :href="`#visit`">{{ tier.cta }} →</a>
            </article>
          </div>
        </div>
      </section>

      <hr class="rule-heavy" />

      <!-- ============ visit / CTA ============ -->
      <section id="visit" class="visit" aria-labelledby="visit-title">
        <div class="wrap visit__grid">
          <div>
            <p class="kicker kicker--light"><span class="no">N°04</span> — Visit</p>
            <h2 id="visit-title" class="visit__title">Come look before you pay.</h2>
            <p class="visit__copy">
              A tour takes twenty minutes. We show you the print room first,
              because that is what everyone asks about. If you like it, take a
              trial week for €45 — credited toward your first month.
            </p>
            <a class="btn btn--paper" href="mailto:hello@gridhouse.design?subject=Trial%20week">Claim a trial week</a>
          </div>
          <div class="visit__facts">
            <div class="fact">
              <p class="fact__label">Address</p>
              <p class="fact__value">Keileweg 27<br />3029 BS Rotterdam</p>
            </div>
            <div class="fact">
              <p class="fact__label">Hours</p>
              <p class="fact__value">Mon–Fri 8:00–19:00<br />Sat 10:00–16:00</p>
            </div>
            <div class="fact">
              <p class="fact__label">Contact</p>
              <p class="fact__value">
                <a href="mailto:hello@gridhouse.design">hello@gridhouse.design</a><br />
                <a href="tel:+31104367890">+31 10 436 7890</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- ============ footer ============ -->
    <footer class="footer">
      <div class="wrap footer__grid">
        <div class="footer__brand">
          <p class="footer__word">Gridhouse</p>
          <p class="footer__tag">A workshop for people who make things.</p>
          <p class="chip" aria-label="Color chip">ROT 01</p>
        </div>
        <div class="footer__col">
          <p class="footer__label">Find us</p>
          <p>Keileweg 27<br />3029 BS Rotterdam<br />The Netherlands</p>
        </div>
        <div class="footer__col">
          <p class="footer__label">Hours</p>
          <p>Mon–Fri 8:00–19:00<br />Sat 10:00–16:00<br />Sun — members only</p>
        </div>
        <div class="footer__col">
          <p class="footer__label">Talk</p>
          <p>
            <a href="mailto:hello@gridhouse.design">hello@gridhouse.design</a><br />
            <a href="tel:+31104367890">+31 10 436 7890</a>
          </p>
        </div>
      </div>
      <div class="wrap footer__base">
        <p>© 2026 Gridhouse · KvK 74581236 · BTW NL860123456B01</p>
        <p class="footer__built">Set in Archivo &amp; Space Mono</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.page {
  overflow-x: clip;
}

/* ============ top bar ============ */
.topbar {
  border-bottom: var(--rule-heavy);
  background: var(--bg);
  position: sticky;
  top: 0;
  z-index: 50;
}

.topbar__inner {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding-block: 0.9rem;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  text-decoration: none;
}

.brand__mark {
  width: 1.15rem;
  height: 1.15rem;
  background: var(--accent);
}

.brand__word {
  font-family: var(--font-display);
  font-size: 1.25rem;
  letter-spacing: -0.01em;
  text-transform: uppercase;
}

.nav {
  margin-left: auto;
  display: flex;
  gap: 1.5rem;
}

.nav a {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  text-decoration: none;
  border-bottom: 2px solid transparent;
}

.nav a:hover {
  border-bottom-color: var(--accent);
}

.btn--sm {
  padding: 0.6rem 1.1rem;
  font-size: 0.8rem;
}

/* ============ hero ============ */
.hero {
  position: relative;
  padding: 5rem 0 6rem;
}

.hero__grid {
  display: grid;
  grid-template-columns: 7fr 5fr;
  gap: 3rem;
  align-items: center;
}

.hero h1 {
  margin: 1.5rem 0 2rem;
}

.line {
  display: block;
}

.line--offset {
  margin-left: clamp(2rem, 8vw, 7rem);
}

.line--offset-2 {
  margin-left: clamp(4rem, 16vw, 14rem);
}

.dot {
  color: var(--accent);
}

.hero__sub {
  font-size: 1.15rem;
  margin-bottom: 2.5rem;
}

.hero__shapes {
  position: relative;
  height: 22rem;
}

.shape {
  position: absolute;
}

.shape--circle {
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  background: var(--yellow);
  top: 0;
  right: 2rem;
}

.shape--circle .dim {
  position: absolute;
  bottom: 1.1rem;
  left: 50%;
  transform: translateX(-50%);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--ink);
}

.shape--square {
  width: 8rem;
  height: 8rem;
  background: var(--accent-2);
  bottom: 0;
  right: 11rem;
}

.shape--tri {
  width: 0;
  height: 0;
  border-left: 4rem solid transparent;
  border-right: 4rem solid transparent;
  border-bottom: 7rem solid var(--accent);
  top: 2rem;
  right: 0;
}

/* the diagonal red bar cutting the hero */
.hero__bar {
  position: absolute;
  top: 46%;
  left: -5%;
  width: 110%;
  height: 1.6rem;
  background: var(--accent);
  transform: rotate(-6deg);
  pointer-events: none;
}

/* ============ section head ============ */
.section-head {
  padding: 5rem 0 3rem;
  max-width: 44rem;
}

.section-head h2 {
  margin: 1.25rem 0 1.5rem;
}

.section-head__note {
  font-size: 1.1rem;
  color: var(--ink);
}

.grid-note {
  color: var(--muted);
}

/* ============ workshop rows ============ */
.workshop {
  padding-bottom: 5rem;
}

.rows {
  margin: 0;
  border-top: var(--rule-heavy);
}

.row {
  display: grid;
  grid-template-columns: 4rem 1fr 1.2fr 1.4fr;
  gap: 1.5rem;
  align-items: baseline;
  padding: 1.6rem 0;
  border-bottom: var(--rule);
  margin: 0;
}

.row:hover {
  background: var(--surface);
}

.row__index {
  font-family: var(--font-mono);
  font-weight: 700;
  color: var(--accent);
}

.row__name {
  font-family: var(--font-display);
  font-size: 1.5rem;
  text-transform: uppercase;
  margin: 0;
}

.row__spec {
  font-family: var(--font-mono);
  font-size: 0.9rem;
  margin: 0;
}

.row__note {
  color: var(--muted);
  margin: 0;
}

/* ============ membership tiers: 3 / 4 / 5 on the 12-col grid ============ */
.membership {
  padding-bottom: 6rem;
}

.tiers {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1.5rem;
  align-items: stretch;
}

.tier--span-0 { grid-column: span 3; }
.tier--span-1 { grid-column: span 4; }
.tier--span-2 { grid-column: span 5; }

.tier {
  border: var(--rule-heavy);
  background: var(--bg);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  position: relative;
}

.tier--square {
  background: var(--surface);
}

.tier--triangle {
  border-top: 0.75rem solid var(--accent);
}

.tier__shape {
  margin-bottom: 1.75rem;
}

.tier__shape--circle {
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 50%;
  background: var(--yellow);
}

.tier__shape--square {
  width: 5.5rem;
  height: 5.5rem;
  background: var(--accent-2);
}

.tier__shape--triangle {
  width: 0;
  height: 0;
  border-left: 2.75rem solid transparent;
  border-right: 2.75rem solid transparent;
  border-bottom: 4.75rem solid var(--accent);
}

.tier__name {
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
}

.tier__price {
  font-family: var(--font-display);
  font-size: 2.75rem;
  letter-spacing: -0.02em;
  margin-bottom: 0.75rem;
}

.tier__per {
  display: block;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--muted);
}

.tier__blurb {
  margin-bottom: 1.5rem;
  font-weight: 500;
}

.tier__list {
  list-style: none;
  margin: 0 0 2rem;
  padding: 0;
  font-family: var(--font-mono);
  font-size: 0.88rem;
}

.tier__list li {
  padding: 0.55rem 0;
  border-top: var(--rule-thin);
}

.tier__list li::before {
  content: "— ";
  color: var(--accent);
  font-weight: 700;
}

.tier__cta {
  margin-top: auto;
  font-family: var(--font-mono);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.9rem;
  text-decoration: none;
  border-top: var(--rule);
  padding-top: 1.25rem;
}

.tier__cta:hover {
  color: var(--accent);
}

/* ============ visit ============ */
.visit {
  background: var(--accent-2);
  color: var(--bg);
  padding: 6rem 0;
}

.visit__grid {
  display: grid;
  grid-template-columns: 7fr 5fr;
  gap: 4rem;
  align-items: start;
}

.kicker--light {
  color: var(--bg);
  opacity: 0.75;
}

.kicker--light .no {
  color: var(--yellow);
}

.visit__title {
  margin: 1.25rem 0 1.5rem;
}

.visit__copy {
  font-size: 1.15rem;
  margin-bottom: 2.5rem;
  max-width: 38ch;
}

.btn--paper {
  background: var(--bg);
  color: var(--ink);
  border-color: var(--bg);
}

.btn--paper:hover {
  background: var(--yellow);
  border-color: var(--yellow);
  color: var(--ink);
}

.visit__facts {
  border: var(--rule-heavy);
  border-color: var(--bg);
}

.fact {
  padding: 1.5rem;
  border-bottom: 2px solid var(--bg);
}

.fact:last-child {
  border-bottom: 0;
}

.fact__label {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.75;
  margin-bottom: 0.5rem;
}

.fact__value {
  font-size: 1.25rem;
  font-weight: 500;
}

.fact__value a {
  color: var(--bg);
  text-decoration-thickness: 2px;
  text-underline-offset: 3px;
}

.fact__value a:hover {
  color: var(--yellow);
}

/* ============ footer ============ */
.footer {
  border-top: var(--rule-heavy);
  padding: 4rem 0 2rem;
}

.footer__grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 2.5rem;
  margin-bottom: 3rem;
}

.footer__word {
  font-family: var(--font-display);
  font-size: 2rem;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.footer__tag {
  color: var(--muted);
  margin-bottom: 1.5rem;
}

.chip {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  background: var(--accent);
  color: var(--bg);
  padding: 0.35rem 0.7rem;
}

.footer__label {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 0.75rem;
}

.footer__col p {
  margin: 0;
}

.footer__col a {
  text-decoration-thickness: 1px;
  text-underline-offset: 3px;
}

.footer__col a:hover {
  color: var(--accent);
}

.footer__base {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  border-top: var(--rule-thin);
  padding-top: 1.5rem;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--muted);
}

/* ============ responsive ============ */
@media (max-width: 900px) {
  .hero__grid {
    grid-template-columns: 1fr;
  }

  .hero__shapes {
    height: 14rem;
  }

  .shape--circle {
    width: 10rem;
    height: 10rem;
    right: auto;
    left: 0;
  }

  .shape--square {
    right: auto;
    left: 11rem;
  }

  .shape--tri {
    right: auto;
    left: 20rem;
  }

  .row {
    grid-template-columns: 3rem 1fr;
    grid-template-areas:
      "index name"
      "index spec"
      "index note";
    row-gap: 0.35rem;
  }

  .row__index { grid-area: index; }
  .row__name { grid-area: name; }
  .row__spec { grid-area: spec; }
  .row__note { grid-area: note; }

  .tier--span-0,
  .tier--span-1,
  .tier--span-2 {
    grid-column: span 12;
  }

  .tier--span-1 {
    margin-left: 0;
  }

  .visit__grid {
    grid-template-columns: 1fr;
  }

  .footer__grid {
    grid-template-columns: 1fr 1fr;
  }

  .nav {
    display: none;
  }
}

@media (max-width: 520px) {
  .footer__grid {
    grid-template-columns: 1fr;
  }

  .line--offset {
    margin-left: 1.5rem;
  }

  .line--offset-2 {
    margin-left: 3rem;
  }
}
</style>
