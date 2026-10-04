<?php //tz-meta {"id":"php-pricing","title":"Karst Type — font license pricing","category":"PHP","file":"php/pricing.php","tags":["php","pricing","type-foundry"],"description":"Type-foundry pricing in the swiss-poster DNA: oversized poster numerals for each tier, hairline rules, no cards — pricing as a specimen sheet.","dnas":["swiss-poster"]} ?>
<?php
// pricing.php — Karst Type, an independent type foundry.
// Exactly one DNA (swiss-poster). Distinctive choice: pricing as a specimen
// sheet — giant poster numerals per tier separated by hairlines, not cards.
$json = file_get_contents(__DIR__ . '/../styles/index.json');
$dnas = json_decode($json, true)['dnas'];
$dna = null;
foreach ($dnas as $d) { if ($d['id'] === 'swiss-poster') { $dna = $d; break; } }
if ($dna === null) { fwrite(STDERR, "dna not found\n"); exit(1); }
$t = $dna['tokens']; $f = $dna['fonts'];
$bg=$t['bg']; $ink=$t['ink']; $accent=$t['accent']; $muted=$t['muted']; $line=$t['line'];
$surface = isset($t['surface']) ? $t['surface'] : $t['bg'];
$display=$f['display']; $body=$f['body']; $mono=$f['mono'];

$css = <<<CSS
:root {
  --bg: {$bg}; --ink: {$ink}; --accent: {$accent};
  --muted: {$muted}; --line: {$line}; --surface: {$surface};
  --display: "{$display}", "Arial Black", "Helvetica Neue", sans-serif;
  --body: "{$body}", "Helvetica Neue", Arial, sans-serif;
  --mono: "{$mono}", "Courier New", Courier, monospace;
}
* { margin: 0; padding: 0; box-sizing: border-box; }
body { background: var(--bg); color: var(--ink); font-family: var(--body); font-size: 16px; line-height: 1.6; }
.tz-wrap { max-width: 1060px; margin: 0 auto; padding: 0 clamp(20px, 4vw, 44px); }
.tz-topbar { display: flex; justify-content: space-between; align-items: baseline; padding: 22px 0; border-bottom: 3px solid var(--ink); }
.tz-brand { font-family: var(--display); font-size: 20px; letter-spacing: 0.02em; }
.tz-topbar .tz-note { font-family: var(--mono); font-size: 12px; color: var(--muted); letter-spacing: 0.1em; }
.tz-hero { padding: clamp(64px, 9vw, 116px) 0 clamp(40px, 5vw, 64px); }
.tz-eyebrow { font-family: var(--mono); font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--accent); margin-bottom: 18px; }
.tz-hero h1 { font-family: var(--display); font-weight: 400; font-size: clamp(44px, 7vw, 96px); line-height: 0.98; text-transform: uppercase; max-width: 14ch; }
.tz-lede { margin-top: 22px; color: var(--muted); max-width: 50ch; }
.tz-tiers { border-top: 3px solid var(--ink); margin-bottom: clamp(48px, 6vw, 80px); }
.tz-tier { display: grid; grid-template-columns: 200px 1fr 1.4fr; gap: clamp(20px, 4vw, 56px); padding: clamp(32px, 4vw, 52px) 0; border-bottom: 1px solid var(--line); align-items: start; }
.tz-amount { font-family: var(--display); font-size: clamp(64px, 8vw, 120px); line-height: 0.9; color: var(--accent); }
.tz-amount .tz-per { display: block; font-family: var(--mono); font-size: 12px; letter-spacing: 0.14em; color: var(--muted); margin-top: 12px; }
.tz-tier h2 { font-family: var(--display); font-weight: 400; font-size: clamp(24px, 3.2vw, 40px); text-transform: uppercase; line-height: 1.05; }
.tz-tier p { color: var(--muted); max-width: 46ch; margin-top: 12px; }
.tz-tier ul { list-style: none; margin-top: 16px; font-family: var(--mono); font-size: 13px; color: var(--muted); line-height: 2; }
.tz-tier ul li::before { content: "+ "; color: var(--accent); }
.tz-cta { background: var(--ink); color: var(--bg); padding: clamp(44px, 6vw, 76px); display: grid; grid-template-columns: 1.5fr 1fr; gap: clamp(24px, 5vw, 64px); align-items: center; margin-bottom: clamp(56px, 8vw, 100px); }
.tz-cta h2 { font-family: var(--display); font-weight: 400; font-size: clamp(30px, 4.4vw, 54px); line-height: 1; text-transform: uppercase; }
.tz-cta p { margin-top: 14px; font-size: 15px; opacity: 0.75; max-width: 42ch; }
.tz-btn { display: inline-block; background: var(--accent); color: #fff; text-decoration: none; font-family: var(--display); font-size: 16px; text-transform: uppercase; padding: 18px 36px; justify-self: start; }
.tz-btn-note { display: block; margin-top: 10px; font-family: var(--mono); font-size: 12px; opacity: 0.65; }
.tz-foot { padding: 28px 0 52px; border-top: 3px solid var(--ink); display: flex; justify-content: space-between; flex-wrap: wrap; gap: 12px; font-family: var(--mono); font-size: 12px; color: var(--muted); }
@media (max-width: 760px) {
  .tz-tier { grid-template-columns: 1fr; }
  .tz-cta { grid-template-columns: 1fr; }
}
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
}
CSS;

$html = <<<HTML
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Karst Type — font licensing</title>
<style>
{$css}
</style>
</head>
<body>
<div class="tz-wrap">
  <div class="tz-topbar">
    <span class="tz-brand">KARST TYPE</span>
    <span class="tz-note">INDEPENDENT FOUNDRY &middot; 14 FAMILIES</span>
  </div>

  <header class="tz-hero">
    <p class="tz-eyebrow">Licensing &middot; simple, forever</p>
    <h1>Pay for the letters you actually set.</h1>
    <p class="tz-lede">No seat math, no annual audits, no &ldquo;desktop vs.
    web&rdquo; riddles. One license covers your whole team, every medium, for
    as long as the files exist. Prices below are per family.</p>
  </header>

  <section class="tz-tiers" aria-label="license tiers">
    <div class="tz-tier">
      <p class="tz-amount">49<span class="tz-per">USD &middot; ONE-TIME</span></p>
      <div>
        <h2>Studio</h2>
        <p>For freelancers and teams up to five. Set it in client work, ship
        it in products, bill the hours with a clear conscience.</p>
      </div>
      <ul>
        <li>Desktop, web, app, and ebook use</li>
        <li>Up to 5 people, unlimited projects</li>
        <li>Free updates for the family, forever</li>
      </ul>
    </div>
    <div class="tz-tier">
      <p class="tz-amount">190<span class="tz-per">USD &middot; ONE-TIME</span></p>
      <div>
        <h2>Company</h2>
        <p>For organizations up to two hundred people. One purchase, one
        invoice, and the license file your legal team actually asked for.</p>
      </div>
      <ul>
        <li>Everything in Studio</li>
        <li>Up to 200 people, subsidiaries included</li>
        <li>Broadcast and signage rights</li>
      </ul>
    </div>
    <div class="tz-tier">
      <p class="tz-amount">0<span class="tz-per">USD &middot; ALWAYS</span></p>
      <div>
        <h2>Open</h2>
        <p>Three families are free under the open font license. Use them in
        anything, including the thing that makes you money.</p>
      </div>
      <ul>
        <li>Karst Grotesk, Karst Mono, Karst Serif</li>
        <li>Modify, redistribute, embed</li>
        <li>No account, no email, just download</li>
      </ul>
    </div>
  </section>

  <section class="tz-cta">
    <div>
      <h2>Try the full family for 30 days.</h2>
      <p>Every weight, every italic, in real client files &mdash; not a
      watermarked demo. If it ships, you buy the license. If it doesn&rsquo;t,
      it stops working and nobody is mad.</p>
    </div>
    <div>
      <a class="tz-btn" href="#trial">Start the 30-day trial license</a>
      <span class="tz-btn-note">No card &middot; fonts expire, files don&rsquo;t</span>
    </div>
  </section>

  <footer class="tz-foot">
    <span>KARST TYPE &middot; SET IN KARST GROTESK</span>
    <span>LICENSES ARE PERPETUAL &middot; SUPPORT IS HUMAN</span>
  </footer>
</div>
</body>
</html>
HTML;

print($html . "\n");
