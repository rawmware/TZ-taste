<!--tz-meta {"id":"vue-stats-bars","title":"Bar-chart stats (Vue)","category":"Vue","file":"vue/StatsBars.vue","tags":["vue","stats"],"description":"Laboratory-clean stats: specimen rows with scaleX-animated CSS bars, one featured sample, no chart lib.","dnas":["laboratory-clean"]} -->
<script setup lang="ts">
interface Stat {
  id: string
  label: string
  value: string
  pct: number
  note: string
  featured?: boolean
}

const props = withDefaults(defineProps<{
  eyebrow?: string
  title?: string
  stats?: Stat[]
}>(), {
  eyebrow: 'RUN 26-104 — CALIBRATED 08:12',
  title: 'The numbers, before the story.',
  stats: () => [
    { id: 'S-01', label: 'Sample recovery', value: '98.2%', pct: 98.2, note: 'Across 96 replicates, one analyst, one protocol.', featured: true },
    { id: 'S-02', label: 'Detection limit', value: '0.4 ppb', pct: 62, note: 'Method blank + 3σ. New column, week two.' },
    { id: 'S-03', label: 'Run time per plate', value: '42 min', pct: 44, note: 'From load to export, walk-away.' },
    { id: 'S-04', label: 'Replicates passed QC', value: '91 / 96', pct: 95, note: 'Five reruns, all cleared on the second pass.' },
  ],
})

const featured = props.stats.find((s) => s.featured) ?? props.stats[0]
const rest = props.stats.filter((s) => s !== featured)
</script>

<template>
  <section class="tz-sb">
    <div class="tz-sb-head">
      <p class="tz-sb-eyebrow">{{ eyebrow }}</p>
      <h2 class="tz-sb-title">{{ title }}</h2>
    </div>

    <article class="tz-sb-feat">
      <p class="tz-sb-id">{{ featured.id }} · PRIMARY SPECIMEN</p>
      <div class="tz-sb-feat-row">
        <h3 class="tz-sb-feat-label">{{ featured.label }}</h3>
        <p class="tz-sb-feat-val">{{ featured.value }}</p>
      </div>
      <div class="tz-sb-track" role="img" :aria-label="`${featured.label}: ${featured.value}`">
        <div class="tz-sb-fill" :style="{ '--w': featured.pct / 100 }"></div>
      </div>
      <p class="tz-sb-note">{{ featured.note }}</p>
    </article>

    <div class="tz-sb-grid">
      <article v-for="s in rest" :key="s.id" class="tz-sb-row">
        <div class="tz-sb-row-head">
          <p class="tz-sb-id">{{ s.id }}</p>
          <p class="tz-sb-val">{{ s.value }}</p>
        </div>
        <h3 class="tz-sb-label">{{ s.label }}</h3>
        <div class="tz-sb-track" role="img" :aria-label="`${s.label}: ${s.value}`">
          <div class="tz-sb-fill" :style="{ '--w': s.pct / 100 }"></div>
        </div>
        <p class="tz-sb-note">{{ s.note }}</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.tz-sb {
  background: #fbfcfd;
  color: #0f1720;
  font-family: 'IBM Plex Sans', sans-serif;
  padding: clamp(64px, 9vw, 120px) clamp(24px, 6vw, 88px);
}
.tz-sb-head { margin-bottom: clamp(32px, 4vw, 52px); }
.tz-sb-eyebrow { font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.22em; color: #6b7684; margin: 0 0 16px; }
.tz-sb-title {
  font-size: clamp(30px, 4.5vw, 54px);
  font-weight: 600;
  letter-spacing: -0.02em;
  margin: 0;
  max-width: 16ch;
}
.tz-sb-id {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.18em;
  color: #6b7684;
  margin: 0;
}
.tz-sb-feat {
  border: 1px solid #dfe4ea;
  border-top: 3px solid #0a7d8c;
  padding: clamp(28px, 4vw, 48px);
  margin-bottom: clamp(28px, 4vw, 44px);
  background: #ffffff;
}
.tz-sb-feat-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 24px;
  flex-wrap: wrap;
  margin: 14px 0 22px;
}
.tz-sb-feat-label { font-size: clamp(22px, 3vw, 34px); font-weight: 600; letter-spacing: -0.01em; margin: 0; }
.tz-sb-feat-val {
  font-family: 'IBM Plex Mono', monospace;
  font-size: clamp(40px, 5vw, 64px);
  font-weight: 600;
  color: #0a7d8c;
  margin: 0;
}
.tz-sb-track { height: 14px; background: #dfe4ea; position: relative; overflow: hidden; }
.tz-sb-fill {
  position: absolute;
  inset: 0;
  background: #0a7d8c;
  transform: scaleX(var(--w, 0));
  transform-origin: left;
  animation: tz-sb-in 1.1s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.tz-sb-note { font-size: 13.5px; color: #6b7684; margin: 14px 0 0; line-height: 1.6; }
.tz-sb-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(20px, 3vw, 32px);
}
.tz-sb-row {
  border: 1px solid #dfe4ea;
  background: #ffffff;
  padding: 26px 24px;
  display: flex;
  flex-direction: column;
}
.tz-sb-row:nth-child(2) { margin-top: clamp(0px, 3vw, 32px); }
.tz-sb-row-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 10px;
}
.tz-sb-val {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 20px;
  font-weight: 600;
  color: #0a7d8c;
  margin: 0;
}
.tz-sb-label { font-size: 16px; font-weight: 600; margin: 0 0 16px; }
.tz-sb-row .tz-sb-note { margin-top: 12px; font-size: 12.5px; }
@keyframes tz-sb-in { from { transform: scaleX(0); } }
@media (max-width: 860px) { .tz-sb-grid { grid-template-columns: 1fr; } .tz-sb-row:nth-child(2) { margin-top: 0; } }
@media (prefers-reduced-motion: reduce) { .tz-sb-fill { animation: none; } }
</style>
