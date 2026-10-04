<!--tz-meta {"id":"svelte-testimonial-solo","title":"Solo testimonial (Svelte)","category":"Svelte","file":"svelte/TestimonialSolo.svelte","tags":["svelte","testimonial"],"description":"One huge candlelit quote with a blackletter drop cap and margin attribution — a library after hours, not a card wall.","dnas":["gothic-editorial"]} -->
<script>
  export let quote =
    "I read it twice in one sitting — once for the story, and once to watch how the sentences were built. Neither reading wasted a minute.";
  export let author = "M. E. Harlowe";
  export let role = "Bookseller, Portland — twenty-two years behind the counter";
  export let context = "On The Hollow Meridian, a reader's letter";
  export let chapter = "Chapter XII · Marginalia";
</script>

<section class="tz-ts" aria-label="Reader testimonial">
  <p class="tz-ts-chapter">{chapter}</p>
  <blockquote class="tz-ts-quote">
    <span class="tz-ts-mark" aria-hidden="true">“</span>
    <p class="tz-ts-text">{quote}</p>
  </blockquote>
  <div class="tz-ts-attr">
    <div class="tz-ts-rule" aria-hidden="true"></div>
    <p class="tz-ts-author">{author}</p>
    <p class="tz-ts-role">{role}</p>
    <p class="tz-ts-context">{context}</p>
  </div>
</section>

<style>
  .tz-ts {
    --bg: #12100c;
    --ink: #e8dfc8;
    --blood: #a33b2e;
    --mute: #7d7261;
    --line: #2e2820;
    background: var(--bg);
    color: var(--ink);
    font-family: "Cormorant Garamond", serif;
    padding: clamp(96px, 14vw, 200px) clamp(24px, 8vw, 120px);
    position: relative;
    overflow: hidden;
  }
  .tz-ts-chapter {
    font-family: "Space Mono", monospace;
    font-size: 11px;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: var(--mute);
    margin: 0 0 clamp(48px, 7vw, 96px);
  }

  /* Distinctive choice: an enormous blackletter opening mark hung in the
     margin and a drop-cap first letter — the quote as illuminated manuscript. */
  .tz-ts-quote {
    margin: 0;
    position: relative;
    max-width: 900px;
  }
  .tz-ts-mark {
    position: absolute;
    top: -0.35em;
    left: -0.12em;
    font-family: "UnifrakturMaguntia", serif;
    font-size: clamp(120px, 18vw, 260px);
    line-height: 1;
    color: var(--blood);
    opacity: 0.85;
    pointer-events: none;
  }
  .tz-ts-text {
    font-size: clamp(30px, 4.6vw, 56px);
    line-height: 1.28;
    font-weight: 500;
    margin: 0;
    padding-left: clamp(56px, 9vw, 150px);
  }
  .tz-ts-text::first-letter {
    font-family: "UnifrakturMaguntia", serif;
    font-size: 1.9em;
    color: var(--blood);
    line-height: 0.8;
    padding-right: 0.08em;
  }
  .tz-ts-attr {
    margin-top: clamp(56px, 8vw, 110px);
    padding-left: clamp(56px, 9vw, 150px);
    max-width: 560px;
  }
  .tz-ts-rule {
    width: 72px;
    height: 1px;
    background: var(--blood);
    margin-bottom: 22px;
  }
  .tz-ts-author {
    font-family: "UnifrakturMaguntia", serif;
    font-size: clamp(24px, 3vw, 34px);
    margin: 0 0 6px;
    color: var(--ink);
  }
  .tz-ts-role {
    font-size: 17px;
    font-style: italic;
    color: var(--mute);
    margin: 0 0 10px;
    line-height: 1.5;
  }
  .tz-ts-context {
    font-family: "Space Mono", monospace;
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--mute);
    margin: 0;
  }
  @media (max-width: 560px) {
    .tz-ts-text, .tz-ts-attr { padding-left: 0; }
    .tz-ts-mark { left: auto; right: -10px; opacity: 0.4; }
  }
  @media (prefers-reduced-motion: reduce) {
    .tz-ts * { animation: none !important; transition: none !important; }
  }
</style>
