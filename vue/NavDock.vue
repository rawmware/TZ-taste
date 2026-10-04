<!--tz-meta {"id":"vue-nav-dock","title":"Dock nav (Vue)","category":"Vue","file":"vue/NavDock.vue","tags":["vue","nav"],"description":"Glass-calm dock nav: frosted magnification dock, sliding active indicator, mono status chip.","dnas":["glass-calm"]} -->
<script setup lang="ts">
import { ref } from 'vue'

interface DockLink {
  label: string
  icon: 'sun' | 'radar' | 'bell' | 'book'
}

const props = withDefaults(defineProps<{
  brand?: string
  links?: DockLink[]
  status?: string
}>(), {
  brand: 'Zephyr',
  status: '14° · calm',
  links: () => [
    { label: 'Today', icon: 'sun' },
    { label: 'Radar', icon: 'radar' },
    { label: 'Alerts', icon: 'bell' },
    { label: 'Journal', icon: 'book' },
  ],
})

const active = ref(0)
</script>

<template>
  <nav class="tz-dock" aria-label="Primary">
    <p class="tz-dock-brand">{{ brand }}</p>

    <ul class="tz-dock-bar">
      <li v-for="(l, i) in links" :key="l.label">
        <button
          class="tz-dock-item"
          :class="{ 'tz-dock-on': active === i }"
          :aria-current="active === i ? 'page' : undefined"
          @click="active = i"
        >
          <svg class="tz-dock-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true">
            <template v-if="l.icon === 'sun'"><circle cx="12" cy="12" r="4.5" /><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5 5l2.1 2.1M16.9 16.9L19 19M19 5l-2.1 2.1M7.1 16.9L5 19" /></template>
            <template v-if="l.icon === 'radar'"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4.5" /><path d="M12 12l6-6" /><circle cx="12" cy="12" r="1" fill="currentColor" /></template>
            <template v-if="l.icon === 'bell'"><path d="M6 16v-5a6 6 0 0 1 12 0v5l1.5 2.5h-15L6 16z" /><path d="M10 21a2 2 0 0 0 4 0" /></template>
            <template v-if="l.icon === 'book'"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5V5.5z" /><path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20" /></template>
          </svg>
          <span class="tz-dock-label">{{ l.label }}</span>
          <span class="tz-dock-dot" aria-hidden="true"></span>
        </button>
      </li>
      <span class="tz-dock-ind" :style="{ transform: `translateX(${active * 100}%)` }" aria-hidden="true"></span>
    </ul>

    <p class="tz-dock-status"><span class="tz-dock-pulse" aria-hidden="true"></span>{{ status }}</p>
  </nav>
</template>

<style scoped>
.tz-dock {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  background: #e8ecf5;
  font-family: 'Outfit', sans-serif;
  padding: 18px clamp(20px, 4vw, 48px);
  color: #2b3245;
}
.tz-dock-brand { font-weight: 800; font-size: 20px; letter-spacing: 0.06em; margin: 0; }
.tz-dock-bar {
  position: relative;
  display: flex;
  list-style: none;
  margin: 0;
  padding: 10px 12px;
  gap: 4px;
  background: #ffffff8c;
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid #ffffff88;
  border-radius: 22px;
  box-shadow: 0 8px 28px rgba(43, 50, 69, 0.1);
}
.tz-dock-bar li { position: relative; z-index: 1; }
.tz-dock-item {
  appearance: none;
  border: none;
  background: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 72px;
  padding: 10px 0 12px;
  cursor: pointer;
  color: #8b93a8;
  border-radius: 14px;
  transition: transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1), color 0.2s ease;
  transform-origin: bottom center;
}
.tz-dock-item:hover { transform: scale(1.18) translateY(-4px); color: #2b3245; }
.tz-dock-on { color: #2b3245; }
.tz-dock-icon { width: 24px; height: 24px; }
.tz-dock-label { font-size: 10.5px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; }
.tz-dock-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #7c8cf8;
  opacity: 0;
  transform: scale(0);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.tz-dock-on .tz-dock-dot { opacity: 1; transform: scale(1); }
.tz-dock-ind {
  position: absolute;
  top: 10px; bottom: 10px; left: 12px;
  width: 72px;
  background: #ffffff;
  border: 1px solid #ffffff88;
  border-radius: 14px;
  box-shadow: 0 3px 10px rgba(43, 50, 69, 0.12);
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  z-index: 0;
}
.tz-dock-status {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  letter-spacing: 0.08em;
  color: #8b93a8;
  margin: 0;
}
.tz-dock-pulse {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #7c8cf8;
  animation: tz-dock-pulse 2.4s ease-in-out infinite;
}
@keyframes tz-dock-pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.45; transform: scale(0.8); }
}
@media (max-width: 640px) {
  .tz-dock { flex-wrap: wrap; justify-content: center; }
  .tz-dock-status { display: none; }
}
@media (prefers-reduced-motion: reduce) {
  .tz-dock-item, .tz-dock-ind, .tz-dock-dot { transition: none; }
  .tz-dock-pulse { animation: none; }
}
</style>
