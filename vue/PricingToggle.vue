<!--tz-meta {"id":"vue-pricing-toggle","title":"Billing toggle (Vue)","category":"Vue","file":"vue/PricingToggle.vue","tags":["vue","pricing"],"description":"Nordic-noir case-file pricing: hard billing switch, stamped file-folder plan cards.","dnas":["nordic-noir"]} -->
<script setup lang="ts">
import { ref } from 'vue'

interface Plan { name: string; fileNo: string; monthly: number; annual: number; blurb: string; features: string[]; flagged?: string }

const props = withDefaults(defineProps<{
  eyebrow?: string
  title?: string
  plans?: Plan[]
}>(), {
  eyebrow: 'ACCESS TIERS — FILED Q4',
  title: 'Read the record.',
  plans: () => [
    { name: 'Desk', fileNo: 'CASE 01', monthly: 12, annual: 9, blurb: 'For the curious reader who wants every filing, searchable, from one desk.', features: ['Every filing, full-text search', 'Document alerts by topic', 'Export 20 bundles/mo', 'Reading-room annotations'] },
    { name: 'Newsroom', fileNo: 'CASE 02', monthly: 39, annual: 31, blurb: 'For reporters on deadline: the whole archive plus an API and a human on call.', features: ['Everything in Desk', 'Archive API + webhooks', 'Unlimited exports', 'Priority line to the desk editor', 'Team seats for five'], flagged: 'MOST REQUESTED' },
  ],
})

const annual = ref(false)
const price = (p: Plan) => (annual.value ? p.annual : p.monthly)
const billed = (p: Plan) => (annual.value ? `$${p.annual * 12}/yr, billed once` : `$${p.monthly}/mo, cancel anytime`)
</script>

<template>
  <section class="tz-noir">
    <p class="tz-noir-eyebrow">{{ eyebrow }}</p>
    <h2 class="tz-noir-title">{{ title }}</h2>

    <div class="tz-noir-switch" role="group" aria-label="Billing period">
      <button class="tz-noir-opt" :class="{ 'tz-noir-on': !annual }" :aria-pressed="!annual" @click="annual = false">Monthly</button>
      <button class="tz-noir-opt" :class="{ 'tz-noir-on': annual }" :aria-pressed="annual" @click="annual = true">Annual <b>−25%</b></button>
      <span class="tz-noir-knob" :class="{ 'tz-noir-right': annual }" aria-hidden="true"></span>
    </div>

    <div class="tz-noir-grid">
      <article v-for="(p, i) in plans" :key="p.name" class="tz-noir-card" :class="{ 'tz-noir-drop': i === 1 }">
        <span class="tz-noir-tab">{{ p.fileNo }}</span>
        <span v-if="p.flagged" class="tz-noir-stamp">{{ p.flagged }}</span>
        <h3 class="tz-noir-name">{{ p.name }}</h3>
        <p class="tz-noir-price"><Transition name="tz-noir-swap" mode="out-in"><span class="tz-noir-amt" :key="annual ? 'a' : 'm'">${{ price(p) }}</span></Transition><span class="tz-noir-per">/mo</span></p>
        <p class="tz-noir-billed">{{ billed(p) }}</p>
        <p class="tz-noir-blurb">{{ p.blurb }}</p>
        <ul class="tz-noir-list">
          <li v-for="f in p.features" :key="f">{{ f }}</li>
        </ul>
        <a class="tz-noir-cta" href="#subscribe">Open the file</a>
      </article>
    </div>
  </section>
</template>

<style scoped>
.tz-noir {
  background: #dfe3e6;
  color: #131a24;
  font-family: 'DM Sans', sans-serif;
  padding: clamp(64px, 9vw, 120px) clamp(24px, 6vw, 88px);
}
.tz-noir-eyebrow { font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.26em; color: #7d8994; margin: 0 0 18px; }
.tz-noir-title { font-family: 'Bebas Neue', sans-serif; font-size: clamp(56px, 9vw, 120px); line-height: 0.95; letter-spacing: 0.01em; margin: 0 0 40px; }
.tz-noir-switch { position: relative; display: grid; grid-template-columns: 1fr 1fr; width: min(340px, 100%); margin: 0 0 56px; border: 2px solid #131a24; background: #f4f6f7; }
.tz-noir-opt { position: relative; z-index: 1; appearance: none; border: none; background: none; font-family: 'IBM Plex Mono', monospace; font-weight: 700; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; color: #7d8994; padding: 15px 8px; cursor: pointer; transition: color 0.2s ease; }
.tz-noir-opt b { background: #131a24; color: #f4f6f7; font-size: 10px; padding: 2px 7px; margin-left: 6px; }
.tz-noir-on { color: #f4f6f7; }
.tz-noir-knob {
  position: absolute;
  top: 0; bottom: 0; left: 0;
  width: 50%;
  background: #3f647f;
  transition: transform 0.28s cubic-bezier(0.22, 1, 0.36, 1);
}
.tz-noir-right { transform: translateX(100%); }
.tz-noir-grid {
  display: grid;
  grid-template-columns: minmax(0, 380px) minmax(0, 460px);
  gap: clamp(28px, 4vw, 48px);
  justify-content: start;
  align-items: start;
}
.tz-noir-card {
  position: relative;
  background: #f4f6f7;
  border: 2px solid #131a24;
  padding: 40px 36px 36px;
  box-shadow: 7px 7px 0 #b9c1c9;
}
.tz-noir-drop { margin-top: clamp(0px, 4vw, 56px); }
.tz-noir-tab {
  position: absolute;
  top: -16px; left: 24px;
  background: #3f647f;
  color: #f4f6f7;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.14em;
  padding: 6px 14px;
}
.tz-noir-stamp {
  position: absolute;
  top: 28px; right: 28px;
  border: 2px solid #3f647f;
  color: #3f647f;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
  padding: 5px 10px;
  transform: rotate(4deg);
}
.tz-noir-name { font-family: 'Bebas Neue', sans-serif; font-size: 44px; letter-spacing: 0.02em; margin: 0 0 6px; }
.tz-noir-price { margin: 0 0 4px; display: flex; align-items: baseline; gap: 8px; }
.tz-noir-amt { display: inline-block; font-family: 'Bebas Neue', sans-serif; font-size: 72px; line-height: 1; }
.tz-noir-per { font-size: 16px; color: #7d8994; }
.tz-noir-billed { font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: #7d8994; margin: 0 0 18px; }
.tz-noir-blurb { font-size: 15px; line-height: 1.6; margin: 0 0 24px; max-width: 34ch; }
.tz-noir-list { list-style: none; margin: 0 0 30px; padding: 0; display: flex; flex-direction: column; gap: 10px; }
.tz-noir-list li { font-size: 14.5px; padding-left: 24px; position: relative; }
.tz-noir-list li::before { content: '—'; position: absolute; left: 0; color: #3f647f; font-weight: 700; }
.tz-noir-cta {
  display: block;
  text-align: center;
  background: #131a24;
  color: #f4f6f7;
  text-decoration: none;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 13px;
  padding: 16px;
  transition: transform 0.2s ease;
}
.tz-noir-cta:hover { transform: translateY(-2px); }
.tz-noir-swap-enter-active, .tz-noir-swap-leave-active { transition: opacity 0.18s ease, transform 0.18s ease; }
.tz-noir-swap-enter-from { opacity: 0; transform: translateY(10px); }
.tz-noir-swap-leave-to { opacity: 0; transform: translateY(-10px); }
@media (max-width: 760px) { .tz-noir-grid { grid-template-columns: 1fr; } .tz-noir-drop { margin-top: 0; } }
@media (prefers-reduced-motion: reduce) { .tz-noir-knob, .tz-noir-swap-enter-active, .tz-noir-swap-leave-active, .tz-noir-cta { transition: none; } }
</style>
