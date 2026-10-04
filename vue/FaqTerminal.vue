<!--tz-meta {"id":"vue-faq-terminal","title":"Terminal FAQ (Vue)","category":"Vue","file":"vue/FaqTerminal.vue","tags":["vue","faq"],"description":"Retro-terminal FAQ: run faq --topic commands, click to expand logged answers with OK/WARN tags.","dnas":["retro-terminal"]} -->
<script setup lang="ts">
import { ref } from 'vue'

interface FaqItem {
  topic: string
  q: string
  a: string
  warn?: string
}

const props = withDefaults(defineProps<{
  items?: FaqItem[]
  prompt?: string
}>(), {
  prompt: 'packetline — bash',
  items: () => [
    { topic: 'install', q: 'What does install actually put on my machine?', a: 'One 14MB binary and a config file in ~/.packetline. No daemon, no launch agent, no background updater phoning home. Delete the binary and it is gone.', },
    { topic: 'keys', q: 'Where do my API keys live?', a: 'In your OS keychain, never in the config file. The binary reads them at runtime and never writes them to disk or logs.', warn: 'keys passed via --key flag are visible in shell history' },
    { topic: 'billing', q: 'What counts as a billable event?', a: 'Only completed captures. Failed handshakes, dropped packets, and dry runs are logged free. The meter starts when bytes land.', },
    { topic: 'logs', q: 'Can I get my data back out?', a: 'Anytime. `packetline export --since 2026-01-01` dumps everything as newline JSON. No retention games: your captures are yours.', },
  ],
})

const openTopic = ref<string | null>(props.items[0]?.topic ?? null)
const toggle = (t: string) => { openTopic.value = openTopic.value === t ? null : t }
</script>

<template>
  <section class="tz-term">
    <p class="tz-term-eyebrow">faq(1) · packetline user manual</p>

    <div class="tz-term-box">
      <p class="tz-term-bar"><span aria-hidden="true">$</span> {{ prompt }}</p>
      <div class="tz-term-body">
        <template v-for="item in items" :key="item.topic">
          <button
            class="tz-term-cmd"
            :class="{ 'tz-term-open': openTopic === item.topic }"
            :aria-expanded="openTopic === item.topic"
            @click="toggle(item.topic)"
          >
            <span class="tz-term-p" aria-hidden="true">$</span>
            faq --topic {{ item.topic }}
            <span class="tz-term-chev" aria-hidden="true">{{ openTopic === item.topic ? '▾' : '▸' }}</span>
          </button>
          <Transition name="tz-term-fold">
            <div v-if="openTopic === item.topic" class="tz-term-out">
              <p class="tz-term-log"><span class="tz-term-ok">[OK]</span> query resolved · {{ item.topic }}</p>
              <p class="tz-term-q">Q: {{ item.q }}</p>
              <p class="tz-term-a">A: {{ item.a }}</p>
              <p v-if="item.warn" class="tz-term-warn"><span class="tz-term-amber">[WARN]</span> {{ item.warn }}</p>
            </div>
          </Transition>
        </template>
        <p class="tz-term-idle"><span class="tz-term-p" aria-hidden="true">$</span> <span class="tz-term-cursor" aria-hidden="true">▊</span></p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tz-term {
  background: #0b0f0a;
  color: #33ff66;
  font-family: 'IBM Plex Mono', monospace;
  padding: clamp(64px, 9vw, 120px) clamp(20px, 6vw, 88px);
}
.tz-term-eyebrow {
  font-size: 11px;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: #1f6b3a;
  margin: 0 auto clamp(28px, 4vw, 44px);
  max-width: 860px;
}
.tz-term-box {
  max-width: 860px;
  margin: 0 auto;
  border: 1px solid #33ff6633;
  background: #0e140d;
  position: relative;
  overflow: hidden;
}
.tz-term-box::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.22) 0 1px, transparent 1px 3px);
}
.tz-term-bar {
  margin: 0;
  padding: 12px 20px;
  border-bottom: 1px solid #33ff6633;
  font-size: 12px;
  letter-spacing: 0.12em;
  color: #1f6b3a;
}
.tz-term-bar span { color: #33ff66; margin-right: 12px; }
.tz-term-body {
  padding: clamp(24px, 4vw, 40px);
  font-size: clamp(12.5px, 1.8vw, 14.5px);
  line-height: 1.65;
  position: relative;
  z-index: 1;
}
.tz-term-cmd {
  display: flex;
  align-items: baseline;
  gap: 10px;
  width: 100%;
  appearance: none;
  border: none;
  background: none;
  color: #33ff66;
  font: inherit;
  text-align: left;
  padding: 10px 4px;
  margin: 0 0 2px;
  cursor: pointer;
  transition: background 0.15s ease, transform 0.15s ease;
}
.tz-term-cmd:hover { background: #33ff6614; transform: translateX(4px); }
.tz-term-open { background: #33ff6614; }
.tz-term-p { font-weight: 700; }
.tz-term-chev { margin-left: auto; color: #1f6b3a; }
.tz-term-open .tz-term-chev { color: #33ff66; }
.tz-term-out {
  border-left: 2px solid #33ff66;
  padding: 12px 0 12px 22px;
  margin: 0 0 22px 10px;
  overflow: hidden;
}
.tz-term-log, .tz-term-q, .tz-term-a, .tz-term-warn { margin: 0 0 10px; }
.tz-term-log { color: #1f6b3a; font-size: 12px; }
.tz-term-ok { color: #33ff66; font-weight: 700; }
.tz-term-q { color: #33ff66; font-weight: 700; }
.tz-term-a { color: #33ff66; opacity: 0.88; max-width: 62ch; }
.tz-term-warn { color: #ffb000; font-size: 12.5px; margin-bottom: 0; }
.tz-term-amber { font-weight: 700; }
.tz-term-idle { margin: 8px 0 0; }
.tz-term-cursor { display: inline-block; animation: tz-term-blink 1.1s steps(1) infinite; }
.tz-term-fold-enter-active, .tz-term-fold-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.tz-term-fold-enter-from, .tz-term-fold-leave-to { opacity: 0; transform: translateY(-8px); }
@keyframes tz-term-blink { 50% { opacity: 0; } }
@media (prefers-reduced-motion: reduce) {
  .tz-term-cursor { animation: none; }
  .tz-term-fold-enter-active, .tz-term-fold-leave-active, .tz-term-cmd { transition: none; }
}
</style>
