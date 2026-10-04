<?php //tz-meta {"id":"php-restaurant","title":"Bar Camillo — aperitivo bar menu page","category":"PHP","file":"php/restaurant.php","tags":["php","restaurant","menu"],"description":"Aperitivo bar page in the aperitivo-italian DNA: a price-list poster menu with oversized numerals as the distinctive choice, Campari-red accents on cream.","dnas":["aperitivo-italian"]} ?>
<?php
// restaurant.php — Bar Camillo, an aperitivo bar.
// Exactly one DNA (aperitivo-italian). Distinctive choice: the menu is a
// price-list poster with oversized numerals — no cards, no photo hero.
$json = file_get_contents(__DIR__ . '/../styles/index.json');
$dnas = json_decode($json, true)['dnas'];
$dna = null;
foreach ($dnas as $d) { if ($d['id'] === 'aperitivo-italian') { $dna = $d; break; } }
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
.tz-topbar { display: flex; justify-content: space-between; align-items: center; padding: 22px 0; border-bottom: 2px solid var(--ink); }
.tz-brand { font-family: var(--display); font-size: 22px; }
.tz-hours { font-family: var(--mono); font-size: 12px; color: var(--muted); letter-spacing: 0.1em; text-align: right; }
.tz-hero { padding: clamp(64px, 9vw, 120px) 0 clamp(48px, 6vw, 80px); display: grid; grid-template-columns: 1fr auto; gap: clamp(24px, 5vw, 64px); align-items: end; }
.tz-eyebrow { font-family: var(--mono); font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--accent); margin-bottom: 18px; }
.tz-hero h1 { font-family: var(--display); font-weight: 400; font-size: clamp(44px, 7vw, 96px); line-height: 1.02; }
.tz-hero h1 .tz-red { color: var(--accent); }
.tz-lede { margin-top: 22px; color: var(--muted); max-width: 46ch; }
.tz-clock { border: 2px solid var(--ink); padding: 20px 26px; text-align: center; }
.tz-clock .tz-big { font-family: var(--display); font-size: clamp(40px, 5vw, 64px); color: var(--accent); line-height: 1; }
.tz-clock .tz-cap { font-family: var(--mono); font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--muted); margin-top: 8px; }
.tz-menu { border-top: 2px solid var(--ink); margin-bottom: clamp(48px, 6vw, 80px); }
.tz-item { display: grid; grid-template-columns: 1fr auto; gap: 12px 28px; padding: 26px 0; border-bottom: 1px solid var(--line); align-items: baseline; }
.tz-item .tz-name { font-family: var(--display); font-size: clamp(20px, 2.6vw, 30px); }
.tz-item .tz-price { font-family: var(--display); font-size: clamp(30px, 4vw, 52px); color: var(--accent); line-height: 1; }
.tz-item .tz-desc { grid-column: 1; color: var(--muted); max-width: 52ch; }
.tz-item .tz-tag { font-family: var(--mono); font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted); }
.tz-cta { background: var(--ink); color: var(--bg); border-radius: 4px; padding: clamp(40px, 6vw, 72px); display: grid; grid-template-columns: 1.5fr 1fr; gap: clamp(24px, 5vw, 64px); align-items: center; margin-bottom: clamp(56px, 8vw, 104px); }
.tz-cta h2 { font-family: var(--display); font-weight: 400; font-size: clamp(28px, 4vw, 48px); line-height: 1.1; }
.tz-cta p { margin-top: 14px; font-size: 15px; opacity: 0.75; max-width: 44ch; }
.tz-btn { display: inline-block; background: var(--accent); color: #fff; text-decoration: none; font-weight: 700; font-size: 15px; padding: 16px 34px; border-radius: 4px; justify-self: start; }
.tz-btn-note { display: block; margin-top: 10px; font-family: var(--mono); font-size: 12px; opacity: 0.65; }
.tz-foot { padding: 32px 0 56px; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 12px; font-family: var(--mono); font-size: 12px; color: var(--muted); border-top: 2px solid var(--ink); }
@media (max-width: 720px) {
  .tz-hero { grid-template-columns: 1fr; }
  .tz-cta { grid-template-columns: 1fr; }
  .tz-item { grid-template-columns: 1fr; }
  .tz-item .tz-price { justify-self: start; }
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
<title>Bar Camillo — aperitivo, done properly</title>
<style>
{$css}
</style>
</head>
<body>
<div class="tz-wrap">
  <div class="tz-topbar">
    <span class="tz-brand">Bar Camillo</span>
    <span class="tz-hours">TUE&ndash;SUN &middot; 5PM&ndash;MIDNIGHT<br>14 MARKET SQ, OLD PORT</span>
  </div>

  <header class="tz-hero">
    <div>
      <p class="tz-eyebrow">Aperitivo bar &middot; est. 2019</p>
      <h1>The bitter hour, <span class="tz-red">done properly.</span></h1>
      <p class="tz-lede">Low lights, loud ice, and a spritz menu we have not
      changed in six years because it never needed changing. Walk-ins only at
      the bar; the back room is for people who call ahead.</p>
    </div>
    <div class="tz-clock" aria-label="aperitivo hours">
      <p class="tz-big">5&ndash;7</p>
      <p class="tz-cap">Spritz hour,<br>every evening</p>
    </div>
  </header>

  <section class="tz-menu" aria-label="menu">
    <div class="tz-item">
      <span class="tz-name">Camillo Spritz <span class="tz-tag">&middot; house pour</span></span>
      <span class="tz-price">9</span>
      <p class="tz-desc">Bitter aperitivo, prosecco, soda, and the orange we
      cut to order. The one everyone photographs and nobody regrets.</p>
    </div>
    <div class="tz-item">
      <span class="tz-name">Negroni Sbagliato <span class="tz-tag">&middot; low abv</span></span>
      <span class="tz-price">11</span>
      <p class="tz-desc">The mistaken negroni, invented on purpose: campari,
      sweet vermouth, prosecco instead of gin. Dangerous only in threes.</p>
    </div>
    <div class="tz-item">
      <span class="tz-name">Tagliere della Casa <span class="tz-tag">&middot; serves two</span></span>
      <span class="tz-price">18</span>
      <p class="tz-desc">Cured meats, two cheeses, olives, and bread from the
      bakery next door. Arrives when it arrives; that is the point.</p>
    </div>
    <div class="tz-item">
      <span class="tz-name">Amaro Flight <span class="tz-tag">&middot; three pours</span></span>
      <span class="tz-price">14</span>
      <p class="tz-desc">Three bitter pours, light to brooding, with the
      bartender&rsquo;s running commentary included at no charge.</p>
    </div>
  </section>

  <section class="tz-cta">
    <div>
      <h2>Fridays fill the back room by seven.</h2>
      <p>Eight tables, no standing room, and the good playlist. Tell us the
      night and the headcount &mdash; we hold it for twenty minutes past the
      hour.</p>
    </div>
    <div>
      <a class="tz-btn" href="#reserve">Reserve a stool for Friday</a>
      <span class="tz-btn-note">We confirm by text within the hour</span>
    </div>
  </section>

  <footer class="tz-foot">
    <span>BAR CAMILLO &middot; 14 MARKET SQ</span>
    <span>SPRITZ HOUR 5&ndash;7 DAILY &middot; WALK-INS AT THE BAR</span>
  </footer>
</div>
</body>
</html>
HTML;

print($html . "\n");
