<?php //tz-meta {"id":"php-saas","title":"Benchly — calibration scheduling for small labs","category":"PHP","file":"php/saas.php","tags":["php","saas","landing-page"],"description":"Landing page for a fictional lab-calibration SaaS in the laboratory-clean DNA: hero is a mono calibration certificate strip, hairline numbered rows, one honest price.","dnas":["laboratory-clean"]} ?>
<?php
// saas.php — Benchly, calibration scheduling for small labs.
// Exactly one DNA (laboratory-clean). Distinctive choice: the hero focal
// element is a mono "calibration certificate" strip instead of a dashboard.
$json = file_get_contents(__DIR__ . '/../styles/index.json');
$dnas = json_decode($json, true)['dnas'];
$dna = null;
foreach ($dnas as $d) { if ($d['id'] === 'laboratory-clean') { $dna = $d; break; } }
if ($dna === null) { fwrite(STDERR, "dna not found\n"); exit(1); }
$t = $dna['tokens']; $f = $dna['fonts'];
$bg=$t['bg']; $ink=$t['ink']; $accent=$t['accent']; $muted=$t['muted']; $line=$t['line'];
$surface = isset($t['surface']) ? $t['surface'] : $t['bg'];
$display=$f['display']; $body=$f['body']; $mono=$f['mono'];

$css = <<<CSS
:root {
  --bg: {$bg}; --ink: {$ink}; --accent: {$accent};
  --muted: {$muted}; --line: {$line}; --surface: {$surface};
  --display: "{$display}", "Helvetica Neue", Arial, sans-serif;
  --body: "{$body}", "Helvetica Neue", Arial, sans-serif;
  --mono: "{$mono}", "Courier New", Courier, monospace;
}
* { margin: 0; padding: 0; box-sizing: border-box; }
body { background: var(--bg); color: var(--ink); font-family: var(--body); font-size: 16px; line-height: 1.6; }
.tz-wrap { max-width: 1080px; margin: 0 auto; padding: 0 clamp(20px, 4vw, 44px); }
.tz-nav { display: flex; justify-content: space-between; align-items: center; padding: 20px 0; border-bottom: 1px solid var(--line); }
.tz-brand { font-weight: 600; letter-spacing: -0.01em; }
.tz-brand .tz-dot { color: var(--accent); }
.tz-nav a { color: var(--muted); text-decoration: none; font-size: 14px; margin-left: 22px; }
.tz-nav a:hover { color: var(--ink); }
.tz-hero { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(32px, 6vw, 80px); align-items: center; padding: clamp(72px, 10vw, 132px) 0 clamp(56px, 7vw, 88px); }
.tz-eyebrow { font-family: var(--mono); font-size: 12px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--accent); margin-bottom: 18px; }
.tz-hero h1 { font-family: var(--display); font-size: clamp(36px, 4.8vw, 60px); line-height: 1.06; letter-spacing: -0.025em; font-weight: 600; }
.tz-lede { margin: 20px 0 30px; color: var(--muted); max-width: 44ch; }
.tz-btn { display: inline-block; background: var(--accent); color: #fff; text-decoration: none; font-size: 14px; font-weight: 600; padding: 15px 30px; border-radius: 6px; }
.tz-btn-note { display: block; margin-top: 12px; font-family: var(--mono); font-size: 12px; color: var(--muted); }
.tz-cert { background: var(--surface); border: 1px solid var(--line); border-radius: 10px; padding: clamp(24px, 3.5vw, 40px); font-family: var(--mono); font-size: 13px; line-height: 2; }
.tz-cert .tz-stamp { display: inline-block; border: 2px solid var(--accent); color: var(--accent); font-weight: 700; letter-spacing: 0.1em; padding: 4px 12px; transform: rotate(-4deg); margin-top: 14px; font-size: 12px; }
.tz-cert dl { display: grid; grid-template-columns: auto 1fr; gap: 2px 18px; }
.tz-cert dt { color: var(--muted); }
.tz-cert dd { color: var(--ink); }
.tz-rows { border-top: 1px solid var(--line); padding-bottom: clamp(48px, 6vw, 80px); }
.tz-row { display: grid; grid-template-columns: 84px 1fr 2fr; gap: 24px; padding: 28px 0; border-bottom: 1px solid var(--line); align-items: baseline; }
.tz-idx { font-family: var(--mono); font-size: 12px; color: var(--accent); letter-spacing: 0.1em; }
.tz-row h2 { font-size: 20px; font-weight: 600; letter-spacing: -0.01em; }
.tz-row p { color: var(--muted); max-width: 60ch; }
.tz-price { background: var(--surface); border: 1px solid var(--line); border-radius: 10px; padding: clamp(28px, 4vw, 48px); display: grid; grid-template-columns: 1.6fr 1fr; gap: clamp(24px, 5vw, 64px); align-items: center; margin-bottom: clamp(48px, 7vw, 88px); }
.tz-price h2 { font-size: clamp(24px, 3vw, 34px); font-weight: 600; letter-spacing: -0.02em; margin-bottom: 12px; }
.tz-price p { color: var(--muted); max-width: 48ch; }
.tz-foot { padding: 36px 0 60px; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 12px; color: var(--muted); font-size: 13px; font-family: var(--mono); }
@media (max-width: 760px) {
  .tz-hero { grid-template-columns: 1fr; }
  .tz-row { grid-template-columns: 1fr; gap: 8px; }
  .tz-price { grid-template-columns: 1fr; }
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
<title>Benchly — calibration scheduling for small labs</title>
<style>
{$css}
</style>
</head>
<body>
<div class="tz-wrap">
  <nav class="tz-nav">
    <span class="tz-brand">benchly<span class="tz-dot">.</span></span>
    <span><a href="#how">How it works</a><a href="#pricing">Pricing</a><a href="#login">Sign in</a></span>
  </nav>

  <header class="tz-hero">
    <div>
      <p class="tz-eyebrow">Calibration scheduling for small labs</p>
      <h1>Your pipettes drift. Your deadlines shouldn&rsquo;t.</h1>
      <p class="tz-lede">Benchly tracks every instrument in your lab &mdash;
      pipettes, balances, thermometers &mdash; and books the calibration before
      the certificate expires. The auditor asks; you point at the screen.</p>
      <a class="tz-btn" href="#checklist">Get the free drift checklist</a>
      <span class="tz-btn-note">A one-page PDF: the 9 instruments labs forget</span>
    </div>
    <div class="tz-cert" aria-label="sample calibration certificate">
      <dl>
        <dt>INSTRUMENT</dt><dd>Pipette P-200 &middot; SN 4471</dd>
        <dt>LAST CAL</dt><dd>2026-09-14 &mdash; PASS, &plusmn;0.4%</dd>
        <dt>DUE</dt><dd>2026-12-14 &mdash; 72 days</dd>
        <dt>BOOKED</dt><dd>2026-12-09, 10:00 &mdash; confirmed</dd>
      </dl>
      <span class="tz-stamp">AUDIT-READY</span>
    </div>
  </header>

  <section class="tz-rows" id="how">
    <div class="tz-row">
      <span class="tz-idx">01</span>
      <h2>List what you own</h2>
      <p>Photograph the serial plates or import from a spreadsheet. Benchly
      builds the register and reads each instrument&rsquo;s calibration
      interval from its certificate.</p>
    </div>
    <div class="tz-row">
      <span class="tz-idx">02</span>
      <h2>It books ahead of the deadline</h2>
      <p>Thirty days before expiry, Benchly holds a slot with your calibration
      vendor and pings you to confirm. Miss nothing, chase nobody.</p>
    </div>
    <div class="tz-row">
      <span class="tz-idx">03</span>
      <h2>The binder, minus the binder</h2>
      <p>Every certificate lives attached to its instrument, searchable by
      serial number. Audit day becomes a five-minute conversation.</p>
    </div>
  </section>

  <section class="tz-price" id="pricing" aria-label="pricing">
    <div>
      <h2>$49 a month. Unlimited instruments.</h2>
      <p>One price for the whole lab, whether you run twelve pipettes or four
      hundred instruments across two sites. Annual billing knocks it to $39 a
      month.</p>
    </div>
    <a class="tz-btn" href="#trial">Start the 30-day trial</a>
  </section>

  <footer class="tz-foot">
    <span>Benchly &mdash; made for labs with 3 to 30 people</span>
    <span>ISO 17025 friendly &middot; no card to try</span>
  </footer>
</div>
</body>
</html>
HTML;

print($html . "\n");
