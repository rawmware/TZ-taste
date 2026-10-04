<!--tz-meta {"id":"svelte-pricing-docs","title":"Docs-style pricing (Svelte)","category":"Svelte","file":"svelte/PricingDocs.svelte","tags":["svelte","pricing"],"description":"Pricing written as documentation: a revision header, an 'on this page' index, numbered plan rows with a marginal chosen-plan note, and honest footnotes.","dnas":["docs-solar"]} -->
<script>
  export let kicker = "Documentation / Billing";
  export let title = "Pricing, in plain sentences.";
  export let revision = "Revision 1.2 — October 2026. What follows is the whole of it.";
  export let plans = [
    { id: "free", name: "Free", price: "$0", per: "forever", tag: "",
      blurb: "The full product, not a teaser. One workspace, unlimited notes, sync on two devices.",
      features: ["Unlimited notes & tasks", "Sync on 2 devices", "Export everything, anytime"], note: "" },
    { id: "pro", name: "Pro", price: "$6", per: "per month", tag: "Chosen by most",
      blurb: "For people who live in their notes. Ten workspaces, every device, priority everything.",
      features: ["10 workspaces", "Sync on every device", "Version history, 1 year", "Priority human support"],
      note: "Most people land here after about three weeks on Free." },
    { id: "team", name: "Team", price: "$10", per: "per seat / month", tag: "",
      blurb: "Shared workspaces with real permissions. Billing that doesn't need a spreadsheet.",
      features: ["Everything in Pro", "Shared workspaces", "One simple admin page"], note: "" }
  ];
  export let footnotes = [
    "No card needed to start the free tier. We ask for payment only when you choose to pay.",
    "Yearly billing is two months cheaper, shown up front at checkout. Nothing hidden.",
    "To cancel, email a human at support@example.com and we stop charging. That is the whole policy."
  ];
</script>

<section class="tz-pd" aria-label="Pricing">
  <header class="tz-pd-head">
    <p class="tz-pd-kicker">{kicker}</p>
    <h2 class="tz-pd-title">{title}</h2>
    <p class="tz-pd-rev">{revision}</p>
  </header>
  <div class="tz-pd-cols">
    <aside class="tz-pd-index" aria-label="On this page">
      <p class="tz-pd-indexhead">On this page</p>
      <ol>{#each plans as plan}<li><a href={"#" + plan.id}>{plan.name}</a></li>{/each}</ol>
    </aside>
    <div class="tz-pd-plans">
      {#each plans as plan, i}
        <article class="tz-pd-plan" id={plan.id}>
          <div class="tz-pd-margin" aria-hidden="true">
            <span class="tz-pd-num">{String(i + 1).padStart(2, "0")}</span>
            {#if plan.tag}<span class="tz-pd-chosen">{plan.tag}</span>{/if}
          </div>
          <div class="tz-pd-main">
            <div class="tz-pd-top">
              <h3 class="tz-pd-name">{plan.name}</h3>
              <p class="tz-pd-price"><span class="tz-pd-amount">{plan.price}</span> <span class="tz-pd-per">{plan.per}</span></p>
            </div>
            <p class="tz-pd-blurb">{plan.blurb}</p>
            <ul class="tz-pd-feats">{#each plan.features as feat}<li>{feat}</li>{/each}</ul>
            {#if plan.note}<p class="tz-pd-note">{plan.note}</p>{/if}
          </div>
        </article>
      {/each}
    </div>
  </div>
  <footer class="tz-pd-notes">
    <p class="tz-pd-noteshead">Read before you pay</p>
    <ol>{#each footnotes as note}<li>{note}</li>{/each}</ol>
  </footer>
</section>

<style>
  .tz-pd { --bg:#fdf6e3; --ink:#3d3a2e; --amber:#cb4b16; --mute:#8a8672;
    --line:#3d3a2e1f; --surface:#f7eeda;
    background:var(--bg); color:var(--ink); font-family:"Source Serif 4",serif;
    padding:clamp(72px,10vw,140px) clamp(24px,6vw,96px); }
  .tz-pd-kicker { font-family:"IBM Plex Mono",monospace; font-size:11px;
    letter-spacing:.24em; text-transform:uppercase; color:var(--amber); margin:0 0 20px; }
  .tz-pd-title { font-size:clamp(34px,4.6vw,58px); font-weight:600;
    letter-spacing:-.01em; margin:0 0 12px; max-width:18ch; }
  .tz-pd-rev { color:var(--mute); font-style:italic; font-size:16px; margin:0 0 clamp(48px,6vw,80px); }

  /* Distinctive choice: pricing as a doc page — a sticky "on this page" index
     beside numbered plan rows, the popular plan flagged in the margin. */
  .tz-pd-cols { display:grid; grid-template-columns:200px 1fr;
    gap:clamp(32px,5vw,72px); max-width:1020px; }
  .tz-pd-index { position:sticky; top:32px; align-self:start;
    border-left:2px solid var(--line); padding-left:18px; }
  .tz-pd-indexhead { font-family:"IBM Plex Mono",monospace; font-size:11px;
    letter-spacing:.2em; text-transform:uppercase; color:var(--mute); margin:0 0 12px; }
  .tz-pd-index ol { list-style:none; margin:0; padding:0; display:grid; gap:10px; }
  .tz-pd-index a { color:var(--ink); font-size:16px; text-decoration:none; }
  .tz-pd-index a:hover { color:var(--amber); text-decoration:underline; text-underline-offset:4px; }

  .tz-pd-plan { display:grid; grid-template-columns:64px 1fr; gap:24px;
    padding:40px 0; border-top:1px solid var(--line); }
  .tz-pd-plan:last-of-type { border-bottom:1px solid var(--line); }
  .tz-pd-margin { display:grid; gap:10px; align-content:start; }
  .tz-pd-num { font-family:"IBM Plex Mono",monospace; font-size:13px; color:var(--mute); }
  .tz-pd-chosen { font-family:"IBM Plex Mono",monospace; font-size:10.5px;
    letter-spacing:.08em; text-transform:uppercase; color:var(--amber);
    border:1px solid var(--amber); padding:6px 8px; writing-mode:vertical-rl; text-align:center; }
  .tz-pd-top { display:flex; align-items:baseline; justify-content:space-between;
    gap:16px; flex-wrap:wrap; margin-bottom:10px; }
  .tz-pd-name { font-size:26px; font-weight:600; margin:0; }
  .tz-pd-price { margin:0; font-style:italic; }
  .tz-pd-amount { font-size:30px; font-weight:600; font-style:normal; }
  .tz-pd-per { color:var(--mute); font-size:15px; }
  .tz-pd-blurb { font-size:17px; line-height:1.65; margin:0 0 18px; max-width:52ch; }
  .tz-pd-feats { list-style:none; margin:0; padding:0; display:grid; gap:8px; font-size:15.5px; }
  .tz-pd-feats li::before { content:"— "; color:var(--amber); }
  .tz-pd-note { margin:18px 0 0; padding:12px 16px; background:var(--surface);
    font-size:15px; font-style:italic; border-left:3px solid var(--amber); }

  .tz-pd-notes { max-width:1020px; margin-top:clamp(48px,6vw,72px); }
  .tz-pd-noteshead { font-family:"IBM Plex Mono",monospace; font-size:11px;
    letter-spacing:.2em; text-transform:uppercase; color:var(--mute); margin:0 0 12px; }
  .tz-pd-notes ol { margin:0; padding-left:22px; display:grid; gap:8px;
    font-size:15px; line-height:1.6; }

  @media (max-width:640px) {
    .tz-pd-cols { grid-template-columns:1fr; }
    .tz-pd-index { position:static; border-left:0; padding-left:0; }
    .tz-pd-index ol { grid-auto-flow:column; justify-content:start; gap:20px; }
  }
  @media (prefers-reduced-motion:reduce) {
    .tz-pd * { animation:none !important; transition:none !important; }
  }
</style>
