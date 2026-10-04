<!--tz-meta {"id":"svelte-hero-scandi","title":"Scandi hero (Svelte)","category":"Svelte","file":"svelte/HeroScandi.svelte","tags":["svelte","hero"],"description":"Radical restraint: a full-height vertical hairline with the brand hung like a gallery label, one quiet sentence, vast breathing whitespace.","dnas":["scandi-calm"]} -->
<script>
  export let brand = "Värn Studio";
  export let city = "Bergen";
  export let eyebrow = "Est. 1998 · Furniture for keeps";
  export let headline = "A sofa that outlives its second owner.";
  export let materials = "Solid beech · Boiled wool · Cold-rolled steel — nothing else";
  export let linkText = "The 2026 collection";
  export let linkHref = "#collection";
  export let locations = "Bergen — Oslo — Trondheim";
  export let catalogue = "Catalogue N° 28";
</script>

<section class="tz-sh" aria-label={brand + " — " + city}>
  <div class="tz-sh-rail" aria-hidden="true">
    <span class="tz-sh-railname">{brand} · {city}</span>
  </div>
  <div class="tz-sh-inner">
    <p class="tz-sh-eyebrow">{eyebrow}</p>
    <h1 class="tz-sh-title">{headline}</h1>
    <div class="tz-sh-rule" aria-hidden="true"></div>
    <p class="tz-sh-materials">{materials}</p>
    <a class="tz-sh-link" href={linkHref}>
      {linkText} <span class="tz-sh-arrow" aria-hidden="true">→</span>
    </a>
  </div>
  <footer class="tz-sh-foot" aria-hidden="true">
    <span>{locations}</span><span>{catalogue}</span>
  </footer>
</section>

<style>
  .tz-sh {
    --paper: #faf7f1;
    --ink: #2e2a25;
    --wood: #a9805a;
    --faint: #9a917f;
    --line: #e4dccb;
    background: var(--paper);
    color: var(--ink);
    min-height: 92dvh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    padding: clamp(64px, 12vh, 140px) clamp(32px, 10vw, 160px) clamp(36px, 6vh, 64px)
      clamp(64px, 14vw, 220px);
    font-family: "DM Sans", sans-serif;
  }

  /* Distinctive choice: the brand hung on a full-height vertical hairline,
     like a gallery label, while the headline sits low in open air. */
  .tz-sh-rail {
    position: absolute;
    top: 0;
    bottom: 0;
    left: clamp(28px, 6vw, 72px);
    width: 1px;
    background: var(--line);
  }
  .tz-sh-railname {
    position: absolute;
    bottom: clamp(40px, 8vh, 96px);
    left: 50%;
    transform: translate(-50%, 0) rotate(180deg);
    writing-mode: vertical-rl;
    font-family: "Space Mono", monospace;
    font-size: 11px;
    letter-spacing: 0.32em;
    text-transform: uppercase;
    color: var(--faint);
    white-space: nowrap;
  }

  .tz-sh-inner {
    max-width: 640px;
    animation: tzsh-rise 1.1s cubic-bezier(0.22, 1, 0.36, 1) both;
  }
  .tz-sh-eyebrow {
    font-family: "Space Mono", monospace;
    font-size: 11px;
    letter-spacing: 0.26em;
    text-transform: uppercase;
    color: var(--faint);
    margin: 0 0 clamp(48px, 8vh, 96px);
  }
  .tz-sh-title {
    font-family: "DM Serif Display", serif;
    font-weight: 400;
    font-size: clamp(36px, 5.4vw, 80px);
    line-height: 1.16;
    letter-spacing: -0.015em;
    margin: 0;
    max-width: 15ch;
  }
  .tz-sh-rule {
    width: 64px;
    height: 1px;
    background: var(--wood);
    margin: clamp(44px, 7vh, 84px) 0 clamp(28px, 4vh, 48px);
  }
  .tz-sh-materials {
    font-family: "Space Mono", monospace;
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--faint);
    margin: 0 0 26px;
  }
  .tz-sh-link {
    color: var(--ink);
    font-size: 17px;
    text-decoration: underline;
    text-underline-offset: 6px;
    text-decoration-thickness: 1px;
  }
  .tz-sh-arrow {
    display: inline-block;
    transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .tz-sh-link:hover .tz-sh-arrow {
    transform: translateX(6px);
  }
  .tz-sh-foot {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    flex-wrap: wrap;
    width: 100%;
    margin-top: clamp(72px, 12vh, 140px);
    padding-top: 18px;
    border-top: 1px solid var(--line);
    font-family: "Space Mono", monospace;
    font-size: 10px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--faint);
  }

  @keyframes tzsh-rise {
    from { opacity: 0; transform: translateY(18px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @media (prefers-reduced-motion: reduce) {
    .tz-sh-inner { animation: none; }
    .tz-sh-arrow { transition: none; }
  }
</style>
