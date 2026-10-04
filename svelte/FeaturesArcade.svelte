<!--tz-meta {"id":"svelte-features-arcade","title":"Arcade features (Svelte)","category":"Svelte","file":"svelte/FeaturesArcade.svelte","tags":["svelte","features"],"description":"Neon arcade cabinet in disciplined tokens: a blinking INSERT COIN strip, a double-wide boss card beside three disciplined power-up cards.","dnas":["pixel-arcade"]} -->
<script>
  export let kicker = "Four power-ups. Zero quarters required.";
  export let title = "Power-ups, unlocked.";
  export let features = [
    {
      score: "hi-score 99,990",
      name: "Turbo Mornings",
      desc: "Plans your day before the coffee cools. Boss-level triage for real mornings.",
      lvl: "boss lvl · stage 01",
      boss: true
    },
    {
      score: "hi-score 87,400",
      name: "Combo Chains",
      desc: "Streaks stack into multipliers. Miss a day, keep the chain.",
      lvl: "lvl 02 · unlocked"
    },
    {
      score: "hi-score 64,200",
      name: "Shield Mode",
      desc: "Do-not-disturb with teeth. Notifications bounce off the cabinet.",
      lvl: "lvl 03 · unlocked"
    },
    {
      score: "hi-score 42,050",
      name: "Extra Life Sundays",
      desc: "A weekly reset ritual. Review the week, bank the win, continue.",
      lvl: "lvl 04 · unlocked"
    }
  ];
</script>

<section class="tz-fa" aria-label="Features">
  <p class="tz-fa-coin" aria-hidden="true">▸ insert coin to continue ▸ insert coin to continue ▸</p>
  <div class="tz-fa-head">
    <h2 class="tz-fa-title">{title}</h2>
    <p class="tz-fa-kicker">{kicker}</p>
  </div>
  <div class="tz-fa-cab">
    {#each features as f}
      <article class="tz-fa-card" class:tz-fa-boss={f.boss}>
        <p class="tz-fa-score">{f.score}</p>
        <h3 class="tz-fa-name">{f.name}</h3>
        <p class="tz-fa-desc">{f.desc}</p>
        <p class="tz-fa-lvl">{f.lvl}</p>
      </article>
    {/each}
  </div>
  <p class="tz-fa-foot">Streak Quest · free to start · no continues sold here</p>
</section>

<style>
  .tz-fa {
    --bg: #0b0b14;
    --ink: #e8f0e8;
    --pink: #ff2fb3;
    --mute: #5c6b8c;
    --line: #1f2a44;
    background: var(--bg);
    color: var(--ink);
    font-family: "Space Mono", monospace;
    padding: 0 0 clamp(72px, 9vw, 120px);
    overflow: hidden;
  }
  .tz-fa-coin {
    margin: 0;
    background: var(--pink);
    color: var(--bg);
    text-align: center;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    padding: 14px 16px;
    white-space: nowrap;
    animation: tzfa-blink 1.6s steps(2) infinite;
  }
  .tz-fa-head {
    text-align: center;
    padding: clamp(56px, 8vw, 96px) 24px clamp(40px, 5vw, 64px);
  }
  .tz-fa-title {
    font-family: "Press Start 2P", monospace;
    font-size: clamp(20px, 3.4vw, 40px);
    line-height: 1.5;
    color: var(--pink);
    text-shadow: 0 0 22px rgba(255, 47, 179, 0.55);
    margin: 0 0 20px;
  }
  .tz-fa-kicker {
    color: var(--mute);
    font-size: 13px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    margin: 0;
  }

  /* Distinctive choice: an asymmetric cabinet — one double-wide boss card
     beside three disciplined power-up cards, never three equal cards. */
  .tz-fa-cab {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 20px;
    max-width: 1080px;
    margin: 0 auto;
    padding: 0 clamp(24px, 5vw, 72px);
  }
  .tz-fa-card {
    grid-column: span 2;
    border: 2px solid var(--line);
    background: #0e0e1a;
    padding: 26px 22px;
    display: flex;
    flex-direction: column;
    transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .tz-fa-card:hover {
    transform: translateY(-6px);
    border-color: var(--pink);
  }
  .tz-fa-boss {
    grid-column: span 6;
    border-color: var(--pink);
    box-shadow: 0 0 26px rgba(255, 47, 179, 0.28);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px 32px;
    align-items: center;
    padding: 34px 32px;
  }
  .tz-fa-boss:hover {
    transform: translateY(-6px);
  }
  .tz-fa-score {
    font-size: 11px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--mute);
    margin: 0 0 18px;
  }
  .tz-fa-boss .tz-fa-score { margin: 0; }
  .tz-fa-name {
    font-family: "Press Start 2P", monospace;
    font-size: 14px;
    line-height: 1.6;
    color: var(--pink);
    margin: 0 0 14px;
  }
  .tz-fa-boss .tz-fa-name { font-size: 18px; margin: 0; }
  .tz-fa-desc {
    font-size: 13.5px;
    line-height: 1.7;
    color: rgba(232, 240, 232, 0.78);
    margin: 0 0 22px;
    flex: 1;
  }
  .tz-fa-boss .tz-fa-desc { margin: 0; font-size: 14.5px; }
  .tz-fa-lvl {
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--pink);
    margin: 0;
  }
  .tz-fa-boss .tz-fa-lvl { text-align: right; }
  .tz-fa-foot {
    text-align: center;
    color: var(--mute);
    font-size: 11px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    margin: clamp(48px, 6vw, 72px) 24px 0;
  }
  @keyframes tzfa-blink {
    50% { opacity: 0.3; }
  }
  @media (max-width: 720px) {
    .tz-fa-card { grid-column: span 6; }
    .tz-fa-boss { grid-template-columns: 1fr; }
    .tz-fa-boss .tz-fa-lvl { text-align: left; }
    .tz-fa-boss .tz-fa-score { margin-bottom: 14px; }
  }
  @media (prefers-reduced-motion: reduce) {
    .tz-fa-coin { animation: none; }
    .tz-fa-card { transition: none; }
  }
</style>
