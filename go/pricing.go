//tz-meta {"id":"go-pricing","title":"Ferry — invoicing pricing (swiss-rational)","category":"Go","file":"go/pricing.go","tags":["go","pricing","saas"],"description":"Pricing page for Ferry, a fictional invoicing tool for freelancers, in the swiss-rational DNA. go run go/pricing.go > out.html","dnas":["swiss-rational"]}
package main

// Design read: a spec sheet that happens to sell — Swiss grid, hairline
// rules, one red accent used like a highlighter on the one row that matters.
// DNA: swiss-rational (bg #fafafa, ink #111111, accent #e30613). Runner-up
// transit-swiss loses: same family, but its blue accent is corporate; the
// brief needs the red pen of an accountant.
// One distinctive choice: tiers as giant typographic rows — oversized price
// numerals, staggered widths, the middle tier pulled full-bleed with a red rule.
// (Deliberately NOT three equal cards.)
// Dials: VARIANCE 4 / MOTION 1 / DENSITY 6.

import "fmt"

const (
	bg      = "#fafafa"
	ink     = "#111111"
	accent  = "#e30613"
	muted   = "#6b6b6b"
	line    = "#111111"
	surface = "#f0f0f0"
)

func main() {
	fmt.Print(`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Ferry — Pricing. Pay for invoices, not seats.</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;700;800&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{background:` + bg + `;color:` + ink + `;font-family:'Archivo',sans-serif;font-size:17px;line-height:1.6;-webkit-font-smoothing:antialiased}
  a{color:inherit}
  .wrap{max-width:1060px;margin:0 auto;padding:0 32px}
  .mono{font-family:'Space Mono',monospace}
  header.top{display:flex;justify-content:space-between;align-items:center;padding:24px 0;border-bottom:2px solid ` + line + `}
  .wordmark{font-weight:800;font-size:22px;letter-spacing:-0.02em}
  .wordmark span{color:` + accent + `}
  nav{font-family:'Space Mono',monospace;font-size:13px;display:flex;gap:26px;align-items:center}
  nav a{text-decoration:none;color:` + muted + `}
  nav a:hover{color:` + ink + `}
  .btn{display:inline-block;padding:12px 26px;text-decoration:none;font-weight:700;font-size:15px;border:2px solid ` + line + `;border-radius:2px}
  .btn.solid{background:` + accent + `;border-color:` + accent + `;color:` + bg + `}
  .btn:hover{transform:translateY(-2px)}
  .hero{padding:96px 0 64px}
  .eyebrow{font-family:'Space Mono',monospace;font-size:12px;letter-spacing:0.16em;color:` + muted + `;margin-bottom:24px}
  h1{font-size:clamp(44px,6.4vw,88px);line-height:1.0;letter-spacing:-0.035em;font-weight:800;margin-bottom:24px;max-width:12em}
  h1 span{color:` + accent + `}
  .lede{font-size:19px;color:` + muted + `;max-width:34em}
  .tiers{border-top:2px solid ` + line + `;margin:24px 0 88px}
  .tier{display:grid;grid-template-columns:1fr auto;gap:32px;align-items:center;padding:40px 0;border-bottom:1px solid ` + line + `}
  .tier .name{font-family:'Space Mono',monospace;font-size:12px;letter-spacing:0.16em;color:` + muted + `;margin-bottom:10px}
  .tier .price{font-size:clamp(64px,9vw,120px);font-weight:800;letter-spacing:-0.045em;line-height:1}
  .tier .price small{font-size:18px;font-weight:500;letter-spacing:0;color:` + muted + `}
  .tier .desc{font-size:16.5px;color:` + muted + `;max-width:26em;margin-top:12px}
  .tier .desc strong{color:` + ink + `}
  .tier.hl{background:` + surface + `;margin:0 -32px;padding:40px 32px;border-bottom:2px solid ` + line + `;border-left:8px solid ` + accent + `}
  .tier.hl .flag{display:inline-block;background:` + accent + `;color:` + bg + `;font-family:'Space Mono',monospace;font-size:11px;letter-spacing:0.14em;padding:5px 12px;border-radius:2px;margin-bottom:14px}
  .tier .go{justify-self:end}
  section{padding-bottom:88px}
  h2{font-size:clamp(28px,3.4vw,44px);letter-spacing:-0.03em;font-weight:800;margin-bottom:8px}
  .sec-sub{font-family:'Space Mono',monospace;font-size:13px;color:` + muted + `;margin-bottom:36px}
  table.cmp{width:100%;border-collapse:collapse}
  table.cmp th{font-family:'Space Mono',monospace;font-size:12px;letter-spacing:0.08em;text-align:left;color:` + muted + `;font-weight:400;padding:0 16px 12px 0;border-bottom:2px solid ` + line + `}
  table.cmp th:not(:first-child),table.cmp td:not(:first-child){text-align:center;width:110px}
  table.cmp td{padding:16px 16px 16px 0;border-bottom:1px solid ` + muted + `}
  table.cmp td.y{color:` + accent + `;font-weight:700;font-size:20px}
  table.cmp td.n{color:` + muted + `;font-size:20px}
  .faq{border-top:2px solid ` + line + `}
  .qa{padding:24px 0;border-bottom:1px solid ` + muted + `;display:grid;grid-template-columns:1fr 2fr;gap:32px}
  .qa .q{font-weight:700;font-size:18px;letter-spacing:-0.01em}
  .qa .a{color:` + muted + `}
  footer.bot{border-top:2px solid ` + line + `;padding:40px 0 64px;display:flex;justify-content:space-between;gap:24px;flex-wrap:wrap;font-family:'Space Mono',monospace;font-size:12.5px;color:` + muted + `}
  @media (max-width:760px){
    .tier{grid-template-columns:1fr}
    .tier .go{justify-self:start}
    .tier.hl{margin:0 -24px;padding:32px 24px}
    .qa{grid-template-columns:1fr;gap:8px}
    .hero{padding:64px 0 48px}
  }
  @media (prefers-reduced-motion:reduce){.btn:hover{transform:none}}
</style>
</head>
<body>
<div class="wrap">
  <header class="top">
    <div class="wordmark">FERRY<span>.</span></div>
    <nav><a href="#plans">Plans</a><a href="#compare">Compare</a><a href="#faq">FAQ</a><a class="btn solid" href="#plans">Start free</a></nav>
  </header>

  <div class="hero" id="plans">
    <p class="eyebrow">PRICING — INVOICING FOR FREELANCERS</p>
    <h1>Pay for invoices, <span>not seats.</span></h1>
    <p class="lede">It's just you. Why are you paying per teammate? Ferry charges for what you send — and the free tier sends plenty.</p>
  </div>

  <div class="tiers">
    <div class="tier">
      <div>
        <div class="name">DRIFT</div>
        <div class="price">$0<small> / forever</small></div>
        <p class="desc"><strong>5 invoices a month.</strong> Ferry branding on the PDF, paid-stamp emails, and the quiet dignity of never chasing a client twice.</p>
      </div>
      <div class="go"><a class="btn" href="#plans">Start free</a></div>
    </div>
    <div class="tier hl">
      <div>
        <span class="flag">MOST FREELANCERS LAND HERE</span>
        <div class="name">CROSSING</div>
        <div class="price">$12<small> / month</small></div>
        <p class="desc"><strong>Unlimited invoices.</strong> Your logo, your domain, automatic late-fee nudges that sound like you on a good day. Pays for itself the first time a client pays late.</p>
      </div>
      <div class="go"><a class="btn solid" href="#plans">Start 30-day trial</a></div>
    </div>
    <div class="tier">
      <div>
        <div class="name">FLEET</div>
        <div class="price">$29<small> / month</small></div>
        <p class="desc"><strong>Everything in Crossing,</strong> plus multi-currency, a second business, and an accountant login that doesn't cost extra.</p>
      </div>
      <div class="go"><a class="btn" href="#plans">Talk to us</a></div>
    </div>
  </div>

  <section id="compare">
    <h2>Compare, honestly.</h2>
    <p class="sec-sub">NO ASTERISKS. THE TABLE IS THE WHOLE PITCH.</p>
    <table class="cmp">
      <tr><th></th><th>Drift</th><th>Crossing</th><th>Fleet</th></tr>
      <tr><td>Invoices per month</td><td>5</td><td>Unlimited</td><td>Unlimited</td></tr>
      <tr><td>Your logo &amp; domain</td><td class="n">–</td><td class="y">+</td><td class="y">+</td></tr>
      <tr><td>Late-fee nudges</td><td class="n">–</td><td class="y">+</td><td class="y">+</td></tr>
      <tr><td>Multi-currency</td><td class="n">–</td><td class="n">–</td><td class="y">+</td></tr>
      <tr><td>Accountant login</td><td class="n">–</td><td class="n">–</td><td class="y">+</td></tr>
    </table>
  </section>

  <section id="faq">
    <h2>Asked, answered.</h2>
    <p class="sec-sub">THREE QUESTIONS, NO SALES CALL.</p>
    <div class="faq">
      <div class="qa"><div class="q">What happens when the trial ends?</div><div class="a">You drop to Drift automatically. Nothing is deleted, nothing breaks — you just get 5 invoices a month until you decide.</div></div>
      <div class="qa"><div class="q">Do my clients need a Ferry account?</div><div class="a">No. They get a link, they pay by card or bank transfer, they're done. That's the whole point.</div></div>
      <div class="qa"><div class="q">Can I leave?</div><div class="a">Anytime, and your data exports as clean CSVs and PDFs. We'd rather earn the renewal than trap it.</div></div>
    </div>
  </section>

  <footer class="bot">
    <div>FERRY — INVOICING FOR PEOPLE WHO WORK ALONE.</div>
    <div>Demo page. Ferry is a fictional company, drawn for the TZ-taste Go track.</div>
  </footer>
</div>
</body>
</html>`)
}
