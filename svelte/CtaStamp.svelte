<!--tz-meta {"id":"svelte-cta-stamp","title":"Rubber-stamp CTA (Svelte)","category":"Svelte","file":"svelte/CtaStamp.svelte","tags":["svelte","cta"],"description":"Constructivist call to action: type that shouts from a wall beside a rotated double-ring rubber-stamp button that slams straight on hover.","dnas":["constructivist-red"]} -->
<script>
  export let kicker = "Final call — intake closes Friday";
  export let headline = "Posters for the next rent strike.";
  export let sub = "We print what landlords fear to read. You bring the words; we bring the red.";
  export let edition = "N° 041 of 200 · Hand-pulled screen print";
  export let stampText = "Take one";
  export let stampSub = "Free";
  export let href = "#rsvp";
</script>

<section class="tz-cs" aria-label="Call to action">
  <div class="tz-cs-band" aria-hidden="true"></div>
  <div class="tz-cs-inner">
    <div class="tz-cs-copy">
      <p class="tz-cs-kicker">{kicker}</p>
      <h2 class="tz-cs-title">{headline}</h2>
      <p class="tz-cs-sub">{sub}</p>
      <p class="tz-cs-edition">{edition}</p>
    </div>
    <a class="tz-cs-stamp" href={href} aria-label={stampText + " — " + sub}>
      <span class="tz-cs-ring" aria-hidden="true">
        <span class="tz-cs-word">{stampText}</span>
        <span class="tz-cs-free">{stampSub}</span>
      </span>
    </a>
  </div>
</section>

<style>
  .tz-cs {
    --paper: #f2ede4;
    --ink: #141414;
    --red: #d4201e;
    --mute: #6e675c;
    background: var(--paper);
    color: var(--ink);
    font-family: "Oswald", sans-serif;
    position: relative;
    overflow: hidden;
    padding: clamp(88px, 12vw, 170px) clamp(24px, 7vw, 110px);
  }
  /* Diagonal red slice behind the type — the wall the type shouts from. */
  .tz-cs-band {
    position: absolute;
    top: -20%;
    bottom: -20%;
    left: -6%;
    width: 34%;
    background: var(--red);
    transform: skewX(-12deg);
    opacity: 0.92;
  }
  .tz-cs-inner {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: clamp(48px, 8vw, 120px);
    max-width: 1140px;
    margin: 0 auto;
  }
  .tz-cs-copy { max-width: 560px; }
  .tz-cs-kicker {
    font-family: "Space Mono", monospace;
    font-size: 11px;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: var(--paper);
    background: var(--ink);
    display: inline-block;
    padding: 8px 14px;
    margin: 0 0 28px;
  }
  .tz-cs-title {
    font-family: "Russo One", sans-serif;
    font-size: clamp(40px, 6.4vw, 92px);
    line-height: 1.02;
    text-transform: uppercase;
    letter-spacing: 0.01em;
    margin: 0 0 24px;
  }
  .tz-cs-sub {
    font-size: 19px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    line-height: 1.55;
    margin: 0 0 18px;
    max-width: 40ch;
  }
  .tz-cs-edition {
    font-family: "Space Mono", monospace;
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--mute);
    margin: 0;
  }

  /* Distinctive choice: the CTA is a rotated rubber stamp — double ring,
     dashed inner edge, red on red. Hover slams it straight. */
  .tz-cs-stamp {
    flex: none;
    text-decoration: none;
    transform: rotate(-10deg);
    transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  .tz-cs-stamp:hover { transform: rotate(0deg) scale(1.05); }
  .tz-cs-stamp:active { transform: rotate(0deg) scale(0.95); }
  .tz-cs-ring {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: clamp(168px, 20vw, 220px);
    height: clamp(168px, 20vw, 220px);
    border-radius: 50%;
    border: 5px solid var(--red);
    outline: 2px dashed var(--red);
    outline-offset: -14px;
    color: var(--red);
    text-align: center;
    padding: 24px;
  }
  .tz-cs-word {
    font-family: "Russo One", sans-serif;
    font-size: clamp(22px, 2.6vw, 30px);
    text-transform: uppercase;
    line-height: 1.1;
  }
  .tz-cs-free {
    font-family: "Space Mono", monospace;
    font-size: 12px;
    letter-spacing: 0.3em;
    text-transform: uppercase;
  }
  @media (max-width: 760px) {
    .tz-cs-inner { flex-direction: column; align-items: flex-start; }
    .tz-cs-band { width: 60%; left: -20%; }
    .tz-cs-stamp { align-self: center; margin-top: 16px; }
  }
  @media (prefers-reduced-motion: reduce) {
    .tz-cs-stamp { transition: none; transform: none; }
  }
</style>
