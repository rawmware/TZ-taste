<!--tz-meta {"id":"vue-features-blueprint","title":"Blueprint callouts (Vue)","category":"Vue","file":"vue/FeaturesBlueprint.vue","tags":["vue","features"],"description":"Blueprint-tech feature plate: annotated MK-2 board with leader-line callouts and spec labels.","dnas":["blueprint-tech"]} -->
<script setup lang="ts">
interface Callout {
  code: string
  title: string
  text: string
  spec: string
}

const props = withDefaults(defineProps<{
  plateTitle?: string
  plateDims?: string
  callouts?: Callout[]
}>(), {
  plateTitle: 'MK-2 · REV C CONTROLLER',
  plateDims: '85 × 56 MM · SCALE 1:1',
  callouts: () => [
    { code: 'C-01', title: 'Power rail', text: 'USB-C PD in, three regulated rails out. Brown-out lockout keeps the radio alive when the motors drink.', spec: '65W PD · 3V3/5V/VBAT' },
    { code: 'C-02', title: 'Sensor bus', text: 'Twelve drop points on one shared bus. Every node gets an address stamped at the factory — no jumpers, no guessing.', spec: 'I2C · 400kHz · 12 NODES' },
    { code: 'C-03', title: 'Mesh radio', text: 'Boards find each other and relay. A message hops the workshop floor without a router in sight.', spec: '2.4GHz · 16-CH MESH' },
    { code: 'C-04', title: 'Debug header', text: 'One ten-pin header for flashing, logging, and regrets. Exposed on the edge so probes reach it in the enclosure.', spec: 'SWD · UART · RST' },
  ],
})
</script>

<template>
  <section class="tz-bp">
    <div class="tz-bp-head">
      <p class="tz-bp-eyebrow">FIG. 04 — ANNOTATED PLATE</p>
      <h2 class="tz-bp-title">Everything on the board,<br>labeled before you ask.</h2>
    </div>

    <div class="tz-bp-grid">
      <figure class="tz-bp-plate">
        <span class="tz-bp-tick tz-bp-tl" aria-hidden="true"></span>
        <span class="tz-bp-tick tz-bp-tr" aria-hidden="true"></span>
        <span class="tz-bp-tick tz-bp-bl" aria-hidden="true"></span>
        <span class="tz-bp-tick tz-bp-br" aria-hidden="true"></span>
        <figcaption class="tz-bp-cap">{{ plateTitle }}</figcaption>
        <div class="tz-bp-chip" aria-hidden="true">
          <span class="tz-bp-pin" v-for="n in 8" :key="n"></span>
        </div>
        <p class="tz-bp-dims">{{ plateDims }}</p>
        <p class="tz-bp-note">dashed = silkscreen · solid = copper</p>
      </figure>

      <ol class="tz-bp-list">
        <li
          v-for="(c, i) in callouts"
          :key="c.code"
          class="tz-bp-callout"
          :class="{ 'tz-bp-shift': i % 2 === 1 }"
        >
          <span class="tz-bp-code">{{ c.code }}</span>
          <div>
            <h3 class="tz-bp-name">{{ c.title }}</h3>
            <p class="tz-bp-text">{{ c.text }}</p>
            <p class="tz-bp-spec">{{ c.spec }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.tz-bp {
  background: #17407f;
  color: #f2f6fc;
  font-family: 'IBM Plex Mono', monospace;
  padding: clamp(64px, 9vw, 120px) clamp(24px, 6vw, 88px);
}
.tz-bp-head { margin-bottom: clamp(36px, 5vw, 64px); }
.tz-bp-eyebrow { font-size: 11px; letter-spacing: 0.24em; color: #8fb3e8; margin: 0 0 16px; }
.tz-bp-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(32px, 5vw, 60px);
  line-height: 1.05;
  letter-spacing: -0.02em;
  margin: 0;
  max-width: 18ch;
}
.tz-bp-grid {
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
  gap: clamp(32px, 5vw, 72px);
  align-items: start;
}
.tz-bp-plate {
  position: relative;
  border: 1px dashed #ffffff40;
  padding: clamp(32px, 4vw, 56px);
  margin: 0;
  min-height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;
}
.tz-bp-tick { position: absolute; width: 22px; height: 22px; border: 2px solid #ffcf3f; }
.tz-bp-tl { top: -2px; left: -2px; border-right: none; border-bottom: none; }
.tz-bp-tr { top: -2px; right: -2px; border-left: none; border-bottom: none; }
.tz-bp-bl { bottom: -2px; left: -2px; border-right: none; border-top: none; }
.tz-bp-br { bottom: -2px; right: -2px; border-left: none; border-top: none; }
.tz-bp-cap { font-size: 13px; letter-spacing: 0.18em; color: #ffcf3f; }
.tz-bp-chip { width: clamp(140px, 18vw, 200px); height: 120px; border: 2px solid #f2f6fc; position: relative; }
.tz-bp-chip::after {
  content: 'MK-2';
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  font-size: 12px;
  letter-spacing: 0.3em;
  color: #8fb3e8;
}
.tz-bp-pin { position: absolute; width: 14px; height: 4px; background: #ffcf3f; }
.tz-bp-pin:nth-child(odd) { left: -16px; }
.tz-bp-pin:nth-child(even) { right: -16px; }
.tz-bp-pin:nth-child(1), .tz-bp-pin:nth-child(2) { top: 12px; }
.tz-bp-pin:nth-child(3), .tz-bp-pin:nth-child(4) { top: 40px; }
.tz-bp-pin:nth-child(5), .tz-bp-pin:nth-child(6) { top: 68px; }
.tz-bp-pin:nth-child(7), .tz-bp-pin:nth-child(8) { top: 96px; }
.tz-bp-dims { font-size: 12px; letter-spacing: 0.14em; color: #8fb3e8; margin: 0; }
.tz-bp-note { font-size: 11px; color: #8fb3e8; margin: 0; opacity: 0.7; }
.tz-bp-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: clamp(20px, 3vw, 32px); }
.tz-bp-callout {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 20px;
  border-top: 1px solid #ffffff40;
  padding-top: 20px;
  transition: transform 0.25s ease;
}
.tz-bp-callout:hover { transform: translateX(6px); }
.tz-bp-shift { margin-left: clamp(0px, 4vw, 56px); }
.tz-bp-code {
  font-size: 12px;
  letter-spacing: 0.1em;
  color: #17407f;
  background: #ffcf3f;
  padding: 6px 10px;
  height: fit-content;
  font-weight: 700;
}
.tz-bp-name { font-family: 'Space Grotesk', sans-serif; font-size: 20px; margin: 0 0 8px; letter-spacing: -0.01em; }
.tz-bp-text { font-size: 13.5px; line-height: 1.7; color: #8fb3e8; margin: 0 0 10px; max-width: 52ch; }
.tz-bp-spec { font-size: 11.5px; letter-spacing: 0.12em; color: #f2f6fc; margin: 0; opacity: 0.85; }
@media (max-width: 860px) {
  .tz-bp-grid { grid-template-columns: 1fr; }
  .tz-bp-shift { margin-left: 0; }
}
@media (prefers-reduced-motion: reduce) { .tz-bp-callout { transition: none; } }
</style>
