<!--tz-meta {"id":"vue-hero-kinetic","title":"Kinetic hero (Vue)","category":"Vue","file":"vue/HeroKinetic.vue","tags":["vue","hero"],"description":"Swiss-poster kinetic hero: staggered colossal type, vermilion block, marquee strip.","dnas":["swiss-poster"]} -->
<script setup lang="ts">
interface HeroLine { text: string; accent?: boolean; indent?: string }

const props = withDefaults(defineProps<{
  kicker?: string
  edition?: string
  lines?: HeroLine[]
  blurb?: string
  primary?: string
  secondary?: string
  ticker?: string
}>(), {
  kicker: 'PLAKAT Nº 04 — INTERNATIONALE PLAKATAUSSTELLUNG',
  edition: '04',
  lines: () => [
    { text: 'TYPE', indent: '0' },
    { text: 'IS THE', indent: 'clamp(24px, 6vw, 96px)' },
    { text: 'IMAGE.', accent: true, indent: 'clamp(48px, 12vw, 192px)' },
  ],
  blurb: 'Forty-eight posters. Twelve countries. One room in Zürich where letterforms do all the shouting. October 24–26, no admission after 22:00.',
  primary: 'Get the poster',
  secondary: 'See the walls ↓',
  ticker: 'ZÜRICH — OCT 24–26 — TYPE AS IMAGE — NO WHISPERING — ',
})
</script>

<template>
  <section class="tz-hk">
    <p class="tz-hk-kicker">{{ kicker }}</p>
    <span class="tz-hk-edition" aria-hidden="true">Nº{{ edition }}</span>

    <h1 class="tz-hk-title">
      <span v-for="(line, i) in lines" :key="i" class="tz-hk-line" :class="{ 'tz-hk-accent': line.accent }" :style="{ marginLeft: line.indent, animationDelay: `${i * 0.12}s` }">{{ line.text }}</span>
    </h1>

    <div class="tz-hk-foot">
      <p class="tz-hk-blurb">{{ blurb }}</p>
      <div class="tz-hk-actions">
        <a class="tz-hk-btn" href="#poster">{{ primary }}</a>
        <a class="tz-hk-ghost" href="#walls">{{ secondary }}</a>
      </div>
    </div>

    <div class="tz-hk-strip" aria-hidden="true">
      <div class="tz-hk-track"><span>{{ ticker }}</span><span>{{ ticker }}</span></div>
    </div>
  </section>
</template>

<style scoped>
.tz-hk {
  background: #f2ede3;
  color: #141414;
  font-family: 'Archivo', 'Arial Black', sans-serif;
  padding: clamp(48px, 7vw, 96px) 0 0;
  overflow: hidden;
  position: relative;
}
.tz-hk-kicker {
  font-family: 'Space Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.22em;
  color: #7a766c;
  padding: 0 clamp(24px, 6vw, 96px);
  margin: 0 0 8px;
  position: relative;
  z-index: 2;
}
.tz-hk-edition {
  position: absolute;
  top: clamp(24px, 4vw, 56px);
  right: clamp(12px, 3vw, 48px);
  font-family: 'Archivo Black', 'Arial Black', sans-serif;
  font-size: clamp(64px, 12vw, 160px);
  line-height: 1;
  color: transparent;
  -webkit-text-stroke: 2px #141414;
  z-index: 1;
  user-select: none;
}
.tz-hk-title {
  font-family: 'Archivo Black', 'Arial Black', sans-serif;
  font-size: clamp(72px, 16vw, 230px);
  line-height: 0.9;
  letter-spacing: -0.01em;
  margin: 0;
  padding: 0 clamp(24px, 6vw, 96px);
  position: relative;
  z-index: 2;
}
.tz-hk-line {
  display: block;
  opacity: 0;
  animation: tz-hk-rise 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
.tz-hk-accent {
  color: #f2ede3;
  background: #e8401f;
  display: inline-block;
  padding: 0 0.12em;
}
.tz-hk-foot {
  display: grid;
  grid-template-columns: minmax(0, 46ch) 1fr;
  gap: 32px;
  align-items: end;
  padding: 32px clamp(24px, 6vw, 96px) clamp(48px, 6vw, 80px);
  position: relative;
  z-index: 2;
}
.tz-hk-blurb { font-size: 16px; line-height: 1.65; margin: 0; max-width: 46ch; }
.tz-hk-actions { display: flex; gap: 20px; flex-wrap: wrap; justify-self: end; }
.tz-hk-btn {
  background: #141414;
  color: #f2ede3;
  text-decoration: none;
  font-weight: 800;
  font-size: 15px;
  letter-spacing: 0.04em;
  padding: 16px 34px;
  transition: transform 0.2s ease;
}
.tz-hk-btn:hover { transform: translate(-3px, -3px); box-shadow: 5px 5px 0 #e8401f; }
.tz-hk-ghost {
  color: #141414;
  text-decoration: none;
  font-weight: 700;
  font-size: 15px;
  align-self: center;
  border-bottom: 2px solid #e8401f;
  padding-bottom: 2px;
}
.tz-hk-strip {
  border-top: 3px solid #141414;
  border-bottom: 3px solid #141414;
  background: #e8401f;
  color: #f2ede3;
  overflow: hidden;
  white-space: nowrap;
  padding: 12px 0;
}
.tz-hk-track {
  display: inline-block;
  animation: tz-hk-slide 18s linear infinite;
  font-family: 'Archivo Black', 'Arial Black', sans-serif;
  font-size: 20px;
  letter-spacing: 0.06em;
}
@keyframes tz-hk-slide { to { transform: translateX(-50%); } }
@keyframes tz-hk-rise {
  from { opacity: 0; transform: translateY(48px) skewX(-4deg); }
  to { opacity: 1; transform: translateY(0) skewX(0); }
}
@media (max-width: 760px) { .tz-hk-foot { grid-template-columns: 1fr; } .tz-hk-actions { justify-self: start; } }
@media (prefers-reduced-motion: reduce) { .tz-hk-track { animation: none; } .tz-hk-line { opacity: 1; animation: none; } }
</style>
