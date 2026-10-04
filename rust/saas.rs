//tz-meta {"id":"rust-saas","title":"Tallywise — bookkeeping SaaS landing page","category":"Rust","file":"rust/saas.rs","tags":["rust","saas","landing-page"],"description":"Soft-minimal landing page for Tallywise, a bookkeeping-autopilot SaaS: offset hero, close-board panel, numbered close timeline, proof band, hairline FAQ.","dnas":["soft-minimal"]}
//! Askama-style: struct SaasPage { title: &'static str } with #[derive(Template)] — this file ships a zero-dep render() instead.
//!
//! Design read: calm product page for a bookkeeping-autopilot SaaS —
//!    audience: agency owners drowning in month-end; feeling: relief; goal: start a free close.
//! DNA: soft-minimal (runner-up laboratory-clean loses: too clinical for a relief story).
//! Distinctive choice: a rotated "CLOSED BY THE 5TH — OR THE MONTH IS FREE" stamp on the close board.
//! Dials: VARIANCE 4 / MOTION 4 / DENSITY 5.

pub fn render() -> String {
    r##"<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Tallywise — Your clients' books, closed by the 5th</title>
<style>
:root{
  --bg:#f7f7f5;
  --ink:#1a1a1a;
  --accent:#5b5bd6;
  --muted:#8a8a93;
  --line:#1a1a1414;
  --surface:#ffffff;
  color-scheme:light;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{
  background:var(--bg);color:var(--ink);
  font-family:"Instrument Sans","Avenir Next","Segoe UI",sans-serif;
  font-size:17px;line-height:1.6;
  -webkit-font-smoothing:antialiased;
}
.mono{font-family:"JetBrains Mono","SFMono-Regular",Consolas,monospace}
.wrap{max-width:1120px;margin:0 auto;padding:0 24px}
/* ---------- nav ---------- */
.nav{border-bottom:1px solid var(--line);background:var(--bg);position:sticky;top:0;z-index:10}
.nav-in{display:flex;align-items:center;justify-content:space-between;padding:16px 24px;max-width:1120px;margin:0 auto}
.brand{font-weight:700;font-size:19px;letter-spacing:-0.02em;text-decoration:none;color:var(--ink)}
.brand span{color:var(--accent)}
.nav-links{display:flex;gap:28px}
.nav-links a{color:var(--ink);text-decoration:none;font-size:15px;opacity:.75}
.nav-links a:hover{opacity:1;color:var(--accent)}
/* ---------- buttons ---------- */
.btn{display:inline-block;font-weight:600;font-size:16px;text-decoration:none;border-radius:8px;padding:13px 24px;transition:transform .18s ease,box-shadow .18s ease}
.btn-primary{background:var(--ink);color:var(--bg)}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(26,26,26,.18)}
.btn-ghost{border:1px solid var(--line);color:var(--ink);background:var(--surface)}
.btn-ghost:hover{border-color:var(--ink)}
/* ---------- hero ---------- */
.hero{padding:96px 0 80px}
.hero-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:64px;align-items:center}
.eyebrow{font-family:"JetBrains Mono","SFMono-Regular",Consolas,monospace;font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--accent);margin-bottom:20px}
h1{font-size:clamp(40px,5.4vw,64px);line-height:1.04;letter-spacing:-0.035em;font-weight:700;margin-bottom:24px}
h1 em{font-style:normal;color:var(--accent)}
.lede{font-size:19px;max-width:34em;margin-bottom:32px}
.lede strong{font-weight:700}
.cta-row{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:16px}
.micro{font-size:14px;color:var(--muted)}
/* close board */
.board{background:var(--surface);border:1px solid var(--line);border-radius:14px;padding:28px;position:relative;box-shadow:0 24px 48px -24px rgba(26,26,26,.14)}
.board-head{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:20px}
.board-head h2{font-size:15px;font-weight:700;letter-spacing:-0.01em}
.board-head .mono{font-size:12px;color:var(--muted)}
.brow{display:flex;justify-content:space-between;align-items:center;padding:11px 0;border-top:1px solid var(--line);font-size:15px}
.brow .mono{font-size:13px}
.brow .ok{color:var(--accent);font-weight:700}
.bar{height:8px;background:var(--line);border-radius:4px;margin:14px 0 6px;overflow:hidden}
.bar i{display:block;height:100%;width:98%;background:var(--accent);border-radius:4px}
.bar-cap{font-size:13px;color:var(--muted);display:flex;justify-content:space-between}
.stamp{position:absolute;top:-18px;right:22px;transform:rotate(4deg);border:2px solid var(--accent);color:var(--accent);font-family:"JetBrains Mono","SFMono-Regular",Consolas,monospace;font-size:11px;font-weight:700;letter-spacing:.1em;padding:8px 12px;border-radius:6px;background:var(--bg);text-transform:uppercase}
/* ---------- sections ---------- */
section.block{padding:80px 0}
.sec-head{margin-bottom:48px;max-width:640px}
.sec-head h2{font-size:clamp(28px,3.4vw,40px);letter-spacing:-0.03em;line-height:1.1;margin-bottom:12px}
.sec-head p{font-size:18px;color:var(--muted)}
/* timeline */
.timeline{position:relative;margin-top:8px}
.tline{position:absolute;left:23px;top:8px;bottom:8px;width:2px;background:var(--line)}
.step{position:relative;display:grid;grid-template-columns:48px 1fr;gap:24px;padding:20px 0}
.step-n{width:48px;height:48px;border-radius:50%;background:var(--ink);color:var(--bg);display:flex;align-items:center;justify-content:center;font-family:"JetBrains Mono","SFMono-Regular",Consolas,monospace;font-weight:700;font-size:15px;position:relative;z-index:1}
.step h3{font-size:20px;letter-spacing:-0.02em;margin-bottom:6px}
.step p{max-width:40em;color:var(--muted)}
.step p .mono{color:var(--ink);font-size:14px}
/* proof */
.proof{background:var(--surface);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.proof-grid{display:grid;grid-template-columns:1.2fr .8fr;gap:64px;align-items:start}
.quote{font-size:clamp(22px,2.6vw,30px);line-height:1.35;letter-spacing:-0.02em;font-weight:500}
.quote footer{margin-top:20px;font-size:15px;color:var(--muted);font-weight:400}
.nums{display:grid;gap:32px}
.num b{display:block;font-size:clamp(44px,5vw,64px);letter-spacing:-0.04em;font-weight:700;color:var(--accent)}
.num span{font-size:15px;color:var(--muted)}
/* fit rows */
.fit-row{display:grid;grid-template-columns:220px 1fr auto;gap:24px;align-items:baseline;padding:22px 0;border-top:1px solid var(--line)}
.fit-row:last-child{border-bottom:1px solid var(--line)}
.fit-row h3{font-size:19px;letter-spacing:-0.01em}
.fit-row p{color:var(--muted);max-width:34em}
.fit-row .tag{font-family:"JetBrains Mono","SFMono-Regular",Consolas,monospace;font-size:12px;color:var(--accent);border:1px solid var(--accent);border-radius:6px;padding:5px 10px;white-space:nowrap}
/* faq */
.faq-grid{display:grid;grid-template-columns:1fr 1fr;gap:0 48px}
.faq{padding:24px 0;border-top:1px solid var(--line)}
.faq h3{font-size:17px;margin-bottom:8px;letter-spacing:-0.01em}
.faq p{color:var(--muted);font-size:16px;max-width:30em}
/* final cta */
.final{background:var(--ink);color:var(--bg);border-radius:20px;padding:64px;display:grid;grid-template-columns:1fr auto;gap:32px;align-items:center}
.final h2{font-size:clamp(28px,3.6vw,44px);letter-spacing:-0.03em;line-height:1.08;margin-bottom:12px}
.final p{opacity:.72;max-width:30em}
.final .btn-primary{background:var(--bg);color:var(--ink);white-space:nowrap}
.final .btn-primary:hover{box-shadow:0 8px 24px rgba(0,0,0,.35)}
/* footer */
footer.site{padding:56px 0 40px;border-top:1px solid var(--line);margin-top:80px}
.foot-grid{display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr;gap:32px;margin-bottom:40px}
.foot-grid h4{font-size:13px;text-transform:uppercase;letter-spacing:.1em;color:var(--muted);margin-bottom:14px;font-weight:700}
.foot-grid a{display:block;color:var(--ink);text-decoration:none;font-size:15px;padding:4px 0;opacity:.8}
.foot-grid a:hover{opacity:1;color:var(--accent)}
.foot-base{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;font-size:14px;color:var(--muted);border-top:1px solid var(--line);padding-top:24px}
/* motion */
@keyframes rise{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}
.rise{animation:rise .7s cubic-bezier(0.22,1,0.36,1) both}
.rise.d1{animation-delay:.08s}.rise.d2{animation-delay:.16s}.rise.d3{animation-delay:.24s}
@media (prefers-reduced-motion:reduce){
  *,*::before,*::after{animation:none!important;transition:none!important}
  html{scroll-behavior:auto}
}
/* responsive */
@media (max-width:900px){
  .hero-grid{grid-template-columns:1fr}
  .proof-grid{grid-template-columns:1fr}
  .final{grid-template-columns:1fr;padding:44px 28px}
  .fit-row{grid-template-columns:1fr;gap:8px}
  .foot-grid{grid-template-columns:1fr 1fr}
}
@media (max-width:640px){
  .hero{padding:64px 0 56px}
  section.block{padding:56px 0}
  .nav-links{display:none}
  .faq-grid{grid-template-columns:1fr}
  .cta-row .btn{flex:1;text-align:center}
  .stamp{right:12px}
}
</style>
</head>
<body>
<header class="nav">
  <div class="nav-in">
    <a class="brand" href="#">Tally<span>wise</span></a>
    <nav class="nav-links" aria-label="Primary">
      <a href="#how">How it works</a>
      <a href="#proof">Proof</a>
      <a href="#faq">FAQ</a>
    </nav>
    <a class="btn btn-primary" href="#start" style="padding:10px 18px;font-size:15px">Start your first close</a>
  </div>
</header>

<main>
  <section class="hero">
    <div class="wrap hero-grid">
      <div>
        <p class="eyebrow rise">Bookkeeping autopilot for agencies</p>
        <h1 class="rise d1">Your clients&rsquo; books, <em>closed by the 5th.</em></h1>
        <p class="lede rise d2">Tallywise pulls every transaction, chases every missing receipt, and drafts the close checklist. <strong>Your bookkeeper just signs off</strong> — most firms finish month-end in an afternoon.</p>
        <div class="cta-row rise d3">
          <a class="btn btn-primary" href="#how">Watch a 4-minute close</a>
          <a class="btn btn-ghost" href="#start">Start your first close — free 30 days</a>
        </div>
        <p class="micro rise d3">No card required. Imports from 40+ banks and every major card processor.</p>
      </div>
      <div class="board rise d2" aria-label="Sample close board">
        <div class="stamp">Closed by the 5th — or the month is free</div>
        <div class="board-head">
          <h2>October close — Marlowe Studio</h2>
          <span class="mono">day 04 of 05</span>
        </div>
        <div class="brow"><span>Transactions reconciled</span><span class="mono"><span class="ok">412</span> / 418</span></div>
        <div class="brow"><span>Receipts chased down</span><span class="mono"><span class="ok">37</span> / 40</span></div>
        <div class="brow"><span>Client questions answered</span><span class="mono"><span class="ok">9</span> / 9</span></div>
        <div class="brow"><span>Draft statements ready</span><span class="mono ok">yes</span></div>
        <div class="bar" role="img" aria-label="98 percent complete"><i></i></div>
        <div class="bar-cap"><span>6 items left</span><span class="mono">98%</span></div>
      </div>
    </div>
  </section>

  <section class="block" id="how">
    <div class="wrap">
      <div class="sec-head">
        <h2>How a close works</h2>
        <p>Four steps, one afternoon. The machine does the first three; a human does the part that matters.</p>
      </div>
      <div class="timeline">
        <div class="tline" aria-hidden="true"></div>
        <div class="step">
          <div class="step-n">01</div>
          <div><h3>Connect the accounts</h3><p>Link bank, cards, payroll, and Stripe in about ten minutes. Tallywise reads <span class="mono">412 transactions</span> and sorts every one into your chart of accounts — it learns your categories, it doesn&rsquo;t guess at them.</p></div>
        </div>
        <div class="step">
          <div class="step-n">02</div>
          <div><h3>Receipts chase themselves</h3><p>Missing paperwork gets a polite email to whoever spent the money, with the exact amount and date. Follow-ups go out on day 3 and day 7. You never write &ldquo;quick nudge!!&rdquo; again.</p></div>
        </div>
        <div class="step">
          <div class="step-n">03</div>
          <div><h3>You approve the exceptions</h3><p>Only the odd ones land on your desk — the uncategorized transfer, the duplicate charge. Everything routine is already matched, filed, and footnoted.</p></div>
        </div>
        <div class="step">
          <div class="step-n">04</div>
          <div><h3>Signed by the 5th</h3><p>Draft P&amp;L and balance sheet arrive for e-signature. If a client&rsquo;s close slips past the 5th because of us, that month is free. It has happened <span class="mono">twice</span>.</p></div>
        </div>
      </div>
    </div>
  </section>

  <section class="block proof" id="proof">
    <div class="wrap proof-grid">
      <blockquote class="quote">
        &ldquo;We used to lose the first week of every month to close. Now my bookkeeper spends that week calling clients about their actual businesses. I did not think software could give me that back.&rdquo;
        <footer>— Priya Raman, owner, Studio Meridian (client since March 2025)</footer>
      </blockquote>
      <div class="nums">
        <div class="num"><b>11,204</b><span>client closes signed on time since launch</span></div>
        <div class="num"><b>4.2 days</b><span>median close, down from 11.6 before Tallywise</span></div>
      </div>
    </div>
  </section>

  <section class="block">
    <div class="wrap">
      <div class="sec-head">
        <h2>Built for firms like yours</h2>
        <p>If month-end currently eats a week, you&rsquo;re who we built this for.</p>
      </div>
      <div class="fit-row">
        <h3>Agencies &amp; studios</h3>
        <p>Project costs land in the right buckets automatically, so client profitability reports write themselves.</p>
        <span class="tag">Most popular</span>
      </div>
      <div class="fit-row">
        <h3>Consultancies</h3>
        <p>Contractor payouts reconciled against invoices — no more spreadsheet archaeology in February.</p>
        <span class="tag">1099-ready</span>
      </div>
      <div class="fit-row">
        <h3>E-commerce operators</h3>
        <p>Stripe, Shopify, and ad spend matched daily, so December doesn&rsquo;t arrive as a surprise.</p>
        <span class="tag">Daily sync</span>
      </div>
    </div>
  </section>

  <section class="block" id="faq" style="padding-top:0">
    <div class="wrap">
      <div class="sec-head">
        <h2>Asked before you ask</h2>
      </div>
      <div class="faq-grid">
        <div class="faq"><h3>Does this replace my bookkeeper?</h3><p>No. It replaces the chasing, sorting, and data entry — the parts nobody went to school for. Your bookkeeper becomes the reviewer, which is the job they actually want.</p></div>
        <div class="faq"><h3>What if a close runs late?</h3><p>If the delay is on us, that client&rsquo;s month is free, automatically. No ticket, no argument. It&rsquo;s happened twice; we publish the count.</p></div>
        <div class="faq"><h3>How do you handle messy historical books?</h3><p>First close includes a cleanup pass: we reconcile the prior 90 days and flag anything older as a fixed-fee project. You approve the scope before we touch it.</p></div>
        <div class="faq"><h3>Can my clients see any of this?</h3><p>Only what you share. Clients get the receipt-chase emails and the signature request — both in your branding, not ours.</p></div>
      </div>
    </div>
  </section>

  <section class="block" id="start" style="padding-top:0">
    <div class="wrap">
      <div class="final">
        <div>
          <h2>October&rsquo;s close starts Monday.</h2>
          <p>Connect one client account today and see a draft checklist by tomorrow morning. Free for 30 days — keep the cleanup even if you leave.</p>
        </div>
        <a class="btn btn-primary" href="#">Start your first close</a>
      </div>
    </div>
  </section>
</main>

<footer class="site">
  <div class="wrap">
    <div class="foot-grid">
      <div>
        <h4>Tallywise</h4>
        <p style="font-size:15px;color:var(--muted);max-width:24em">Bookkeeping autopilot for agencies, studios, and consultancies. Made in Providence, RI.</p>
      </div>
      <div>
        <h4>Product</h4>
        <a href="#how">How it works</a><a href="#proof">Customer proof</a><a href="#">Security</a><a href="#">Status</a>
      </div>
      <div>
        <h4>Company</h4>
        <a href="#">About</a><a href="#">Careers — we&rsquo;re hiring a support lead</a><a href="#">Press kit</a>
      </div>
      <div>
        <h4>Talk to us</h4>
        <a href="mailto:hello@tallywise.com">hello@tallywise.com</a><a href="tel:+14015550194">(401) 555-0194</a><a href="#">Book a 20-min demo</a>
      </div>
    </div>
    <div class="foot-base">
      <span>&copy; 2026 Tallywise Systems, Inc.</span>
      <span class="mono">SOC 2 Type II &middot; 11,204 closes and counting</span>
    </div>
  </div>
</footer>
</body>
</html>"##.to_string()
}

fn main() {
    print!("{}", render());
}
