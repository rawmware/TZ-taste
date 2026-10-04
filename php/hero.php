<?php //tz-meta {"id":"php-hero","title":"Blackletter & Bell — letterpress hero page","category":"PHP","file":"php/hero.php","tags":["php","hero","letterpress"],"description":"Single-hero page in the gothic-editorial DNA: blackletter at full volume, one giant drop cap as the distinctive choice, a single folio CTA.","dnas":["gothic-editorial"]} ?>
<?php
// hero.php — Blackletter & Bell, a letterpress studio.
// Exactly one DNA (gothic-editorial). Distinctive choice: the entire page is
// one hero — blackletter type at full volume anchored by a single giant drop
// cap — with nothing below but a hairline footer.
$json = file_get_contents(__DIR__ . '/../styles/index.json');
$dnas = json_decode($json, true)['dnas'];
$dna = null;
foreach ($dnas as $d) { if ($d['id'] === 'gothic-editorial') { $dna = $d; break; } }
if ($dna === null) { fwrite(STDERR, "dna not found\n"); exit(1); }
$t = $dna['tokens']; $f = $dna['fonts'];
$bg=$t['bg']; $ink=$t['ink']; $accent=$t['accent']; $muted=$t['muted']; $line=$t['line'];
$surface = isset($t['surface']) ? $t['surface'] : $t['bg'];
$display=$f['display']; $body=$f['body']; $mono=$f['mono'];

$css = <<<CSS
:root {
  --bg: {$bg}; --ink: {$ink}; --accent: {$accent};
  --muted: {$muted}; --line: {$line}; --surface: {$surface};
  --display: "{$display}", "Old English Text MT", Georgia, serif;
  --body: "{$body}", Georgia, "Times New Roman", serif;
  --mono: "{$mono}", "Courier New", Courier, monospace;
}
* { margin: 0; padding: 0; box-sizing: border-box; }
html, body { min-height: 100%; }
body {
  background: var(--bg); color: var(--ink); font-family: var(--body);
  font-size: 18px; line-height: 1.7; display: flex; flex-direction: column;
}
.tz-stage { flex: 1; display: flex; align-items: center; }
.tz-wrap { width: 100%; max-width: 1200px; margin: 0 auto; padding: clamp(48px, 8vw, 110px) clamp(20px, 4vw, 44px); }
.tz-rule-top { display: flex; justify-content: space-between; font-family: var(--mono); font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--muted); padding-bottom: 26px; border-bottom: 1px solid var(--line); margin-bottom: clamp(40px, 6vw, 72px); }
.tz-grid { display: grid; grid-template-columns: 0.55fr 1fr; gap: clamp(28px, 5vw, 72px); align-items: start; }
.tz-dropcap { font-family: var(--display); font-size: clamp(180px, 26vw, 340px); line-height: 0.85; color: var(--accent); }
.tz-hero h1 { font-family: var(--display); font-weight: 400; font-size: clamp(52px, 8.5vw, 128px); line-height: 1.02; }
.tz-sub { margin-top: 26px; font-size: clamp(19px, 2.4vw, 25px); font-style: italic; color: var(--muted); max-width: 30ch; }
.tz-detail { margin-top: 30px; max-width: 46ch; color: var(--muted); }
.tz-detail strong { color: var(--ink); font-weight: 600; }
.tz-cta-row { margin-top: 40px; }
.tz-btn { display: inline-block; border: 1px solid var(--accent); color: var(--ink); text-decoration: none; font-family: var(--body); font-size: 17px; font-style: italic; padding: 16px 40px; transition: background 0.25s ease, color 0.25s ease; }
.tz-btn:hover { background: var(--accent); color: var(--bg); }
.tz-btn-note { display: block; margin-top: 12px; font-family: var(--mono); font-size: 12px; color: var(--muted); }
.tz-foot { border-top: 1px solid var(--line); padding: 24px clamp(20px, 4vw, 44px) 32px; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 12px; font-family: var(--mono); font-size: 12px; letter-spacing: 0.1em; color: var(--muted); max-width: 1200px; width: 100%; margin: 0 auto; }
@media (max-width: 760px) {
  .tz-grid { grid-template-columns: 1fr; }
  .tz-dropcap { font-size: clamp(120px, 30vw, 200px); }
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
<title>Blackletter &amp; Bell — letterpress studio</title>
<style>
{$css}
</style>
</head>
<body>
  <div class="tz-stage">
    <div class="tz-wrap">
      <div class="tz-rule-top">
        <span>Blackletter &amp; Bell</span>
        <span>Press No. 3 &middot; Est. 1974</span>
      </div>
      <div class="tz-grid">
        <p class="tz-dropcap" aria-hidden="true">P</p>
        <header class="tz-hero">
          <h1>Printed by hand.<br>Read by candlelight.</h1>
          <p class="tz-sub">Wedding suites, broadsides, and books too stubborn for a laser printer.</p>
          <p class="tz-detail">Every job at <strong>Blackletter &amp; Bell</strong>
          is set in metal type and pulled on a 1911 Chandler &amp; Price. We
          proof on the press, not on a screen &mdash; what you approve is
          exactly what your guests will hold.</p>
          <div class="tz-cta-row">
            <a class="tz-btn" href="#folios">See the autumn folios</a>
            <span class="tz-btn-note">Twelve recent jobs, photographed flat &middot; updated monthly</span>
          </div>
        </header>
      </div>
    </div>
  </div>
  <footer class="tz-foot">
    <span>THE OLD MILL &middot; UNIT 9 &middot; VISITS BY APPOINTMENT</span>
    <span>INK SMELLS LIKE IT SHOULD</span>
  </footer>
</body>
</html>
HTML;

print($html . "\n");
