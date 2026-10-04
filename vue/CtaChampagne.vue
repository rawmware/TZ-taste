<!--tz-meta {"id":"vue-cta-champagne","title":"Champagne CTA (Vue)","category":"Vue","file":"vue/CtaChampagne.vue","tags":["vue","cta"],"description":"Art-deco champagne CTA: gold sunburst fan, offset copy, perforated admit-two ticket stub.","dnas":["art-deco-luxe"]} -->
<script setup lang="ts">
const props = withDefaults(defineProps<{
  eyebrow?: string
  title?: string
  blurb?: string
  date?: string
  cta?: string
  stub?: string
}>(), {
  eyebrow: 'NEW YEAR’S EVE — THE MERIDIAN BALLROOM',
  title: 'The Gilded Hour',
  blurb: 'One night a year the ballroom opens its doors to strangers. Five courses, a nine-piece band, and a countdown worth dressing for.',
  date: 'DEC 31 · 20:00 — LATE',
  cta: 'Reserve a table',
  stub: 'ADMIT TWO',
})
</script>

<template>
  <section class="tz-deco">
    <div class="tz-deco-fan" aria-hidden="true"></div>

    <div class="tz-deco-copy">
      <p class="tz-deco-eyebrow">{{ eyebrow }}</p>
      <h2 class="tz-deco-title">{{ title }}</h2>
      <p class="tz-deco-rule" aria-hidden="true">◆ ◆ ◆</p>
      <p class="tz-deco-blurb">{{ blurb }}</p>
      <p class="tz-deco-date">{{ date }}</p>

      <a class="tz-deco-ticket" href="#reserve">
        <span class="tz-deco-ticket-main">{{ cta }}</span>
        <span class="tz-deco-ticket-stub">{{ stub }}</span>
      </a>
    </div>
  </section>
</template>

<style scoped>
.tz-deco {
  background: #0d0b08;
  color: #f2e7c9;
  font-family: 'Jost', sans-serif;
  padding: clamp(72px, 9vw, 128px) clamp(24px, 6vw, 96px);
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
  gap: clamp(40px, 6vw, 96px);
  align-items: center;
  overflow: hidden;
}
.tz-deco-fan {
  aspect-ratio: 1;
  max-width: 420px;
  width: 100%;
  justify-self: center;
  border-radius: 50%;
  border: 1px solid #c9a2274d;
  background:
    repeating-conic-gradient(from -90deg at 50% 50%, rgba(201, 162, 39, 0.32) 0deg 1.5deg, transparent 1.5deg 9deg),
    radial-gradient(circle at 50% 50%, rgba(201, 162, 39, 0.16) 0 38%, transparent 39%);
  position: relative;
  animation: tz-deco-turn 60s linear infinite;
}
.tz-deco-fan::after {
  content: '';
  position: absolute;
  inset: 34%;
  border-radius: 50%;
  border: 1px solid #c9a227;
  background: #0d0b08;
}
@keyframes tz-deco-turn { to { transform: rotate(360deg); } }
.tz-deco-copy { max-width: 560px; }
.tz-deco-eyebrow {
  font-family: 'Space Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.3em;
  color: #8a7f63;
  margin: 0 0 22px;
}
.tz-deco-title {
  font-family: 'Cinzel', serif;
  font-size: clamp(48px, 7vw, 96px);
  font-weight: 400;
  line-height: 1.02;
  letter-spacing: 0.02em;
  color: #c9a227;
  margin: 0 0 20px;
}
.tz-deco-rule {
  color: #c9a227;
  font-size: 12px;
  letter-spacing: 0.6em;
  margin: 0 0 24px;
}
.tz-deco-blurb {
  font-size: 17px;
  line-height: 1.75;
  color: #f2e7c9;
  opacity: 0.85;
  margin: 0 0 20px;
  max-width: 44ch;
}
.tz-deco-date {
  font-family: 'Space Mono', monospace;
  font-size: 13px;
  letter-spacing: 0.22em;
  color: #8a7f63;
  margin: 0 0 36px;
}
.tz-deco-ticket {
  display: inline-flex;
  align-items: stretch;
  text-decoration: none;
  border: 1px solid #c9a227;
  transition: transform 0.25s ease;
}
.tz-deco-ticket:hover { transform: translateY(-3px); }
.tz-deco-ticket-main {
  background: #c9a227;
  color: #0d0b08;
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 18px 32px;
}
.tz-deco-ticket-stub {
  font-family: 'Space Mono', monospace;
  font-size: 12px;
  letter-spacing: 0.18em;
  color: #f2e7c9;
  padding: 18px 22px;
  border-left: 2px dashed #c9a2274d;
  display: flex;
  align-items: center;
  transform: rotate(0deg);
}
@media (max-width: 860px) {
  .tz-deco { grid-template-columns: 1fr; }
  .tz-deco-fan { max-width: 280px; }
}
@media (prefers-reduced-motion: reduce) {
  .tz-deco-fan { animation: none; }
  .tz-deco-ticket { transition: none; }
}
</style>
