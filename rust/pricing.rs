//tz-meta {"id":"rust-pricing","title":"Northpost — address verification API pricing","category":"Rust","file":"rust/pricing.rs","tags":["rust","pricing","api","saas"],"description":"Swiss-rational pricing page for fictional Northpost address API: strict grid, one red accent, full spec-table comparison instead of cards, usage math strip.","dnas":["swiss-rational"]}
//! Askama-style: struct PricingPage { plans: u8 } with #[derive(Template)] — this file ships a zero-dep render() instead.
//!
//! Design read: no-nonsense pricing for a developer API —
//!    audience: engineers choosing an address-verification vendor; feeling: the numbers are the pitch; goal: get an API key.
//! DNA: swiss-rational (runner-up blueprint-tech loses: schematic where this needs ledger-like bluntness).
//! Distinctive choice: pricing as a full spec table — rows of capabilities, columns of plans, red where it matters.
//! Dials: VARIANCE 4 / MOTION 2 / DENSITY 6.

pub fn render() -> String {
    r##"<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Northpost — Pricing: pay for lookups. Nothing else.</title>
<style>
:root{
  --bg:#fafafa;
  --ink:#111111;
  --accent:#e30613;
  --muted:#6b6b6b;
  --line:#111111;
  --surface:#f0f0f0;
  color-scheme:light;
}
*{box-sizing:border-box;margin:0;padding:0}
body{
  background:var(--bg);color:var(--ink);
  font-family:"Archivo","Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size:16px;line-height:1.6;
  -webkit-font-smoothing:antialiased;
}
.mono{font-family:"Space Mono","Courier New",monospace}
.wrap{max-width:1060px;margin:0 auto;padding:0 24px}
/* nav */
.nav{border-bottom:2px solid var(--line)}
.nav-in{display:flex;justify-content:space-between;align-items:center;padding:18px 24px;max-width:1060px;margin:0 auto}
.brand{font-weight:800;font-size:20px;letter-spacing:-0.02em;text-decoration:none;color:var(--ink);text-transform:uppercase}
.brand i{font-style:normal;color:var(--accent)}
.nav-links{display:flex;gap:26px}
.nav-links a{color:var(--ink);text-decoration:none;font-size:14px;font-weight:600;text-transform:uppercase;letter-spacing:.06em}
.nav-links a:hover{color:var(--accent)}
/* hero */
.hero{padding:88px 0 56px;border-bottom:2px solid var(--line)}
.kicker{font-family:"Space Mono","Courier New",monospace;font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:var(--accent);margin-bottom:18px}
h1{font-size:clamp(40px,5.6vw,68px);line-height:1.02;letter-spacing:-0.03em;font-weight:800;text-transform:uppercase;max-width:14em;margin-bottom:20px}
h1 .r{color:var(--accent)}
.lede{font-size:19px;max-width:36em;color:var(--muted)}
.lede strong{color:var(--ink)}
/* usage strip */
.usage{background:var(--ink);color:var(--bg);margin:0}
.usage-in{max-width:1060px;margin:0 auto;padding:28px 24px;display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.usage .cell{border-left:2px solid var(--accent);padding-left:18px}
.usage .n{font-size:34px;font-weight:800;letter-spacing:-0.02em}
.usage .n small{font-size:16px;font-weight:600;color:var(--accent)}
.usage p{font-size:14px;color:var(--bg);opacity:.7;margin-top:4px}
/* table */
section.block{padding:72px 0}
.sec-head{display:flex;justify-content:space-between;align-items:end;gap:24px;margin-bottom:32px;flex-wrap:wrap}
.sec-head h2{font-size:clamp(28px,3.6vw,42px);font-weight:800;letter-spacing:-0.025em;text-transform:uppercase}
.sec-head p{font-family:"Space Mono","Courier New",monospace;font-size:13px;color:var(--muted)}
table.spec{width:100%;border-collapse:collapse;border:2px solid var(--line)}
.spec th,.spec td{padding:16px 18px;text-align:left;border-bottom:1px solid var(--line);vertical-align:top}
.spec thead th{background:var(--ink);color:var(--bg);border-bottom:2px solid var(--line)}
.spec thead th .p{font-size:22px;font-weight:800;letter-spacing:-0.02em;display:block;text-transform:uppercase}
.spec thead th .pr{font-family:"Space Mono","Courier New",monospace;font-size:13px;opacity:.75;display:block;margin-top:4px;font-weight:400}
.spec thead th.hl{background:var(--accent)}
.spec tbody th{font-size:15px;font-weight:600;width:34%}
.spec tbody th small{display:block;font-weight:400;color:var(--muted);font-size:13px;margin-top:2px}
.spec td{text-align:center;font-weight:700;font-size:16px}
.spec td.y{color:var(--accent)}
.spec td.n{color:var(--muted);font-weight:400}
.spec tr.hl-row td,.spec tr.hl-row th{background:var(--surface)}
.spec tfoot td{border-bottom:none;background:var(--surface);text-align:center;padding:20px 18px}
/* cta */
.btn{display:inline-block;background:var(--accent);color:var(--bg);font-weight:800;font-size:15px;text-transform:uppercase;letter-spacing:.06em;text-decoration:none;padding:15px 30px;border-radius:4px;transition:transform .15s ease}
.btn:hover{transform:translateY(-2px)}
.btn.dark{background:var(--ink)}
/* fine print */
.fine{display:grid;grid-template-columns:1fr 1fr;gap:0 48px;margin-top:56px}
.fine div{border-top:2px solid var(--line);padding-top:20px}
.fine h3{font-size:15px;text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;font-weight:800}
.fine p{color:var(--muted);font-size:15px;max-width:30em}
/* final */
.final{border-top:2px solid var(--line);padding:72px 0;display:grid;grid-template-columns:1fr auto;gap:32px;align-items:center}
.final h2{font-size:clamp(30px,4.4vw,52px);font-weight:800;letter-spacing:-0.03em;text-transform:uppercase;line-height:1.05}
.final h2 span{color:var(--accent)}
.final p{color:var(--muted);margin-top:10px;max-width:30em}
/* footer */
footer.site{border-top:2px solid var(--line);padding:40px 0 48px;margin-top:0}
.foot{display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;font-size:13px;font-family:"Space Mono","Courier New",monospace;color:var(--muted)}
.foot nav{display:flex;gap:20px}
.foot a{color:var(--ink);text-decoration:none}
.foot a:hover{color:var(--accent)}
@media (prefers-reduced-motion:reduce){
  *,*::before,*::after{animation:none!important;transition:none!important}
}
@media (max-width:860px){
  .usage-in{grid-template-columns:1fr}
  .fine{grid-template-columns:1fr;gap:32px}
  .final{grid-template-columns:1fr}
  .spec thead th .p{font-size:17px}
  .spec th,.spec td{padding:12px 10px;font-size:14px}
  .spec tbody th{width:30%}
}
@media (max-width:640px){
  .hero{padding:64px 0 44px}
  section.block{padding:56px 0}
  .nav-links{display:none}
  .sec-head{flex-direction:column;align-items:start}
}
</style>
</head>
<body>
<header class="nav">
  <div class="nav-in">
    <a class="brand" href="#">North<i>post</i></a>
    <nav class="nav-links" aria-label="Primary">
      <a href="#">Docs</a><a href="#pricing">Pricing</a><a href="#">Status</a>
    </nav>
    <a class="btn dark" href="#pricing" style="padding:11px 20px">Get an API key</a>
  </div>
</header>

<main>
  <section class="hero">
    <div class="wrap">
      <p class="kicker">Address verification API &middot; 240M addresses &middot; 99.99% uptime</p>
      <h1>Pay for lookups.<br><span class="r">Nothing else.</span></h1>
      <p class="lede">No platform fee, no seat licenses, no &ldquo;contact sales&rdquo; maze. <strong>Every plan includes the full API</strong> — the tiers differ only in volume, speed, and how fast we answer the phone.</p>
    </div>
  </section>

  <div class="usage" aria-label="Usage examples">
    <div class="usage-in">
      <div class="cell"><div class="n">10,000 <small>lookups</small></div><p>= $49 on Growth. Enough for a 40-order-a-day shop.</p></div>
      <div class="cell"><div class="n">1M <small>lookups</small></div><p>= $2,900 on Scale. Overage at $0.0029, no cliffs.</p></div>
      <div class="cell"><div class="n">$0 <small>to start</small></div><p>Sandbox is free forever. Test with 50,000 fake addresses.</p></div>
    </div>
  </div>

  <section class="block" id="pricing">
    <div class="wrap">
      <div class="sec-head">
        <h2>The whole menu</h2>
        <p class="mono">PRICES IN USD &middot; BILLED MONTHLY &middot; CANCEL WITH ONE API CALL</p>
      </div>
      <table class="spec">
        <thead>
          <tr>
            <th scope="col" style="width:34%"><span class="p" style="font-size:15px">Capability</span></th>
            <th scope="col"><span class="p">Sandbox</span><span class="pr">$0 / forever</span></th>
            <th scope="col" class="hl"><span class="p">Growth</span><span class="pr">$49 / mo + usage</span></th>
            <th scope="col"><span class="p">Scale</span><span class="pr">$2,900 / mo flat to 1M</span></th>
          </tr>
        </thead>
        <tbody>
          <tr class="hl-row"><th scope="row">Monthly lookups included<small>then metered, never throttled to zero</small></th><td>50K test</td><td class="y">10K</td><td class="y">1M</td></tr>
          <tr><th scope="row">US + CA address coverage<small>CASS-certified, updated weekly</small></th><td class="y">&#9679;</td><td class="y">&#9679;</td><td class="y">&#9679;</td></tr>
          <tr><th scope="row">International (190 countries)</th><td class="n">&mdash;</td><td class="y">&#9679;</td><td class="y">&#9679;</td></tr>
          <tr><th scope="row">Autocomplete endpoint<small>sub-100ms p95, debounced client included</small></th><td class="n">&mdash;</td><td class="y">&#9679;</td><td class="y">&#9679;</td></tr>
          <tr><th scope="row">Batch verification<small>CSV in, verified CSV out</small></th><td class="n">&mdash;</td><td class="n">&mdash;</td><td class="y">&#9679;</td></tr>
          <tr><th scope="row">Rate limit</th><td>10/s</td><td>100/s</td><td class="y">2,000/s</td></tr>
          <tr><th scope="row">Dedicated Slack channel<small>a human who knows your integration</small></th><td class="n">&mdash;</td><td class="n">&mdash;</td><td class="y">&#9679;</td></tr>
          <tr><th scope="row">Uptime SLA</th><td class="n">None</td><td>99.9%</td><td class="y">99.99%</td></tr>
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td><a class="btn dark" href="#">Start free</a></td>
            <td><a class="btn" href="#">Get an API key</a></td>
            <td><a class="btn dark" href="#">Talk to an engineer</a></td>
          </tr>
        </tfoot>
      </table>

      <div class="fine">
        <div>
          <h3>Overage, in plain numbers</h3>
          <p>Growth: $0.0049 per lookup past 10K. Scale: $0.0029 past 1M. We email you at 80% and 100% — the meter never surprises you at 2 a.m.</p>
        </div>
        <div>
          <h3>Cancel like an adult</h3>
          <p><span class="mono" style="font-size:14px">DELETE /v1/account</span> ends the plan at period close. Your data exports as CSV first; we delete ours within 30 days and send you the log.</p>
        </div>
      </div>
    </div>
  </section>

  <section style="padding:0">
    <div class="wrap">
      <div class="final">
        <div>
          <h2>Ship verified addresses <span>this afternoon.</span></h2>
          <p>Sandbox keys issue instantly. The median integration — autocomplete on a checkout form — takes 47 minutes, measured across 312 signups last quarter.</p>
        </div>
        <a class="btn" href="#">Get an API key</a>
      </div>
    </div>
  </section>
</main>

<footer class="site">
  <div class="wrap foot">
    <span>&copy; 2026 NORTHPOST SYSTEMS</span>
    <nav aria-label="Footer"><a href="#">DOCS</a><a href="#">STATUS: ALL GREEN</a><a href="#">SECURITY</a><a href="#">CONTACT</a></nav>
    <span>SOC 2 TYPE II &middot; CASS CERTIFIED</span>
  </div>
</footer>
</body>
</html>"##.to_string()
}

fn main() {
    print!("{}", render());
}
