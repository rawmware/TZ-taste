<!--tz-meta {"id":"svelte-footer-hairline","title":"Hairline footer (Svelte)","category":"Svelte","file":"svelte/FooterHairline.svelte","tags":["svelte","footer"],"description":"Swiss-rational grid footer: numbered columns, a single red hairline, and an honest colophon — information architecture as aesthetic.","dnas":["swiss-rational"]} -->
<script>
  export let brand = "Studio Norm";
  export let tagline = "Design office, Zürich";
  export let columns = [
    { num: "01", heading: "Index", links: ["Work", "Journal", "About"] },
    { num: "02", heading: "Contact", links: ["hello@example.ch", "+41 44 000 00 00"] },
    { num: "03", heading: "Elsewhere", links: ["Instagram", "Are.na", "RSS"] }
  ];
  export let colophon = "Set in Archivo. One red, used sparingly. No trackers, no popups, no newsletter signup we will nag you about.";
  const year = new Date().getFullYear();
</script>

<footer class="tz-fh" aria-label="Footer">
  <div class="tz-fh-grid">
    <div class="tz-fh-brand">
      <p class="tz-fh-name">{brand}</p>
      <p class="tz-fh-tag">{tagline}</p>
    </div>
    {#each columns as col}
      <nav class="tz-fh-col" aria-label={col.heading}>
        <p class="tz-fh-colhead"><span class="tz-fh-num">{col.num}</span> {col.heading}</p>
        <ul>
          {#each col.links as link}
            <li><a href="#">{link}</a></li>
          {/each}
        </ul>
      </nav>
    {/each}
  </div>
  <div class="tz-fh-rule" aria-hidden="true"></div>
  <div class="tz-fh-bottom">
    <p class="tz-fh-colophon">{colophon}</p>
    <p class="tz-fh-copy">© {year} {brand}</p>
  </div>
</footer>

<style>
  .tz-fh {
    --bg: #fafafa;
    --ink: #111111;
    --red: #e30613;
    --mute: #6b6b6b;
    --surface: #f0f0f0;
    background: var(--bg);
    color: var(--ink);
    font-family: "Archivo", sans-serif;
    padding: clamp(48px, 7vw, 88px) clamp(24px, 6vw, 96px) 32px;
    border-top: 1px solid var(--ink);
  }
  /* Distinctive choice: a numbered Swiss grid — wide brand cell, narrow
     link columns labeled 01/02/03 — with exactly one red: the hairline. */
  .tz-fh-grid {
    display: grid;
    grid-template-columns: 2.2fr 1fr 1fr 1fr;
    gap: 40px 32px;
    align-items: start;
  }
  .tz-fh-name {
    font-weight: 800;
    font-size: clamp(30px, 4vw, 48px);
    letter-spacing: -0.03em;
    line-height: 1;
    margin: 0 0 12px;
    text-transform: uppercase;
  }
  .tz-fh-tag {
    font-family: "Space Mono", monospace;
    font-size: 11px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--mute);
    margin: 0;
  }
  .tz-fh-colhead {
    font-family: "Space Mono", monospace;
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--mute);
    margin: 0 0 16px;
  }
  .tz-fh-num {
    color: var(--red);
    font-weight: 700;
    margin-right: 8px;
  }
  .tz-fh-col ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 10px;
  }
  .tz-fh-col a {
    color: var(--ink);
    text-decoration: none;
    font-size: 15px;
    font-weight: 500;
  }
  .tz-fh-col a:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
    text-decoration-thickness: 2px;
  }
  .tz-fh-rule {
    height: 2px;
    background: var(--red);
    margin: clamp(40px, 5vw, 64px) 0 20px;
  }
  .tz-fh-bottom {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 24px;
    flex-wrap: wrap;
  }
  .tz-fh-colophon {
    font-size: 13.5px;
    color: var(--mute);
    margin: 0;
    max-width: 62ch;
    line-height: 1.65;
  }
  .tz-fh-copy {
    font-family: "Space Mono", monospace;
    font-size: 11px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--mute);
    margin: 0;
    white-space: nowrap;
  }
  @media (max-width: 760px) {
    .tz-fh-grid { grid-template-columns: 1fr 1fr; }
    .tz-fh-brand { grid-column: 1 / -1; }
  }
  @media (prefers-reduced-motion: reduce) {
    .tz-fh * { animation: none !important; transition: none !important; }
  }
</style>
