<!--tz-meta {"id":"vue-footer-marquee","title":"Marquee footer (Vue)","category":"Vue","file":"vue/FooterMarquee.vue","tags":["vue","footer"],"description":"Acid-rave footer: giant alternating-fill marquee, cramped mono link columns, lime signal CTA.","dnas":["acid-rave"]} -->
<script setup lang="ts">
const props = withDefaults(defineProps<{
  brand?: string
  marquee?: string[]
  tagline?: string
  columns?: { head: string; links: string[] }[]
  note?: string
}>(), {
  brand: 'VOLTAGE',
  marquee: () => ['VOLTAGE', 'FRI OCT 09', 'WAREHOUSE 4', 'NO SLEEP'],
  tagline: 'Four hours, one room, no phones on the floor. The city’s loudest small night — back for its eleventh year.',
  columns: () => [
    { head: 'Visit', links: ['Tickets', 'The room', 'Getting there', 'Access'] },
    { head: 'Lineup', links: ['Headliners', 'Residents', 'Open decks', 'Archive'] },
    { head: 'Contact', links: ['Booking', 'Press', 'Lost & found', 'House rules'] },
  ],
  note: '© 2026 Voltage Collective — 18+ after 23:00 — earplugs free at the door',
})
</script>

<template>
  <footer class="tz-rave">
    <div class="tz-rave-marquee" aria-hidden="true">
      <div class="tz-rave-track">
        <span v-for="n in 2" :key="n" class="tz-rave-run">
          <span
            v-for="(w, i) in marquee"
            :key="`${n}-${i}`"
            class="tz-rave-word"
            :class="{ 'tz-rave-hollow': i % 2 === 1 }"
          >{{ w }}<span class="tz-rave-sep"> ✕ </span></span>
        </span>
      </div>
    </div>

    <div class="tz-rave-body">
      <div class="tz-rave-lead">
        <p class="tz-rave-brand">{{ brand }}</p>
        <p class="tz-rave-tag">{{ tagline }}</p>
        <a class="tz-rave-cta" href="#tickets">Tell your friends</a>
      </div>
      <nav
        v-for="col in columns"
        :key="col.head"
        class="tz-rave-col"
        :aria-label="col.head"
      >
        <p class="tz-rave-head">{{ col.head }}</p>
        <ul>
          <li v-for="l in col.links" :key="l"><a href="#">{{ l }}</a></li>
        </ul>
      </nav>
    </div>

    <p class="tz-rave-note">{{ note }}</p>
  </footer>
</template>

<style scoped>
.tz-rave {
  background: #0a0a0a;
  color: #f2f2f2;
  font-family: 'Space Grotesk', sans-serif;
  overflow: hidden;
}
.tz-rave-marquee {
  border-top: 2px solid #c6ff00;
  border-bottom: 2px solid #c6ff00;
  overflow: hidden;
  white-space: nowrap;
  padding: 10px 0;
}
.tz-rave-track { display: inline-block; animation: tz-rave-slide 22s linear infinite; }
.tz-rave-run { display: inline-block; }
.tz-rave-word {
  font-family: 'Anton', sans-serif;
  font-size: clamp(40px, 7vw, 88px);
  letter-spacing: 0.02em;
  color: #c6ff00;
  text-transform: uppercase;
}
.tz-rave-hollow {
  color: transparent;
  -webkit-text-stroke: 1.5px #c6ff00;
}
.tz-rave-sep { color: #f2f2f2; -webkit-text-stroke: 0; font-size: 0.6em; vertical-align: middle; }
.tz-rave-body {
  display: grid;
  grid-template-columns: minmax(0, 2fr) repeat(3, minmax(0, 1fr));
  gap: clamp(28px, 4vw, 56px);
  padding: clamp(48px, 6vw, 80px) clamp(24px, 6vw, 96px);
}
.tz-rave-brand {
  font-family: 'Anton', sans-serif;
  font-size: clamp(44px, 6vw, 84px);
  color: #c6ff00;
  margin: 0 0 14px;
  line-height: 1;
}
.tz-rave-tag {
  font-size: 15px;
  line-height: 1.7;
  color: #f2f2f2;
  opacity: 0.8;
  margin: 0 0 28px;
  max-width: 38ch;
}
.tz-rave-cta {
  display: inline-block;
  background: #c6ff00;
  color: #0a0a0a;
  text-decoration: none;
  font-weight: 800;
  font-size: 14px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 16px 30px;
  transition: transform 0.2s ease;
}
.tz-rave-cta:hover { transform: translate(-3px, -3px); box-shadow: 5px 5px 0 #f2f2f2; }
.tz-rave-head {
  font-family: 'Space Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: #7a7a7a;
  margin: 0 0 18px;
  border-bottom: 1px solid #f2f2f21f;
  padding-bottom: 12px;
}
.tz-rave-col ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 12px; }
.tz-rave-col a {
  color: #f2f2f2;
  text-decoration: none;
  font-family: 'Space Mono', monospace;
  font-size: 13px;
  opacity: 0.75;
  transition: opacity 0.15s ease, color 0.15s ease;
}
.tz-rave-col a:hover { opacity: 1; color: #c6ff00; }
.tz-rave-note {
  font-family: 'Space Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.06em;
  color: #7a7a7a;
  margin: 0;
  padding: 0 clamp(24px, 6vw, 96px) 32px;
}
@keyframes tz-rave-slide { to { transform: translateX(-50%); } }
@media (max-width: 860px) {
  .tz-rave-body { grid-template-columns: 1fr 1fr; }
  .tz-rave-lead { grid-column: 1 / -1; }
}
@media (prefers-reduced-motion: reduce) {
  .tz-rave-track { animation: none; }
  .tz-rave-cta { transition: none; }
}
</style>
