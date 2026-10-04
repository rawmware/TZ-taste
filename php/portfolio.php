<?php //tz-meta {"id":"php-portfolio","title":"June Kurosawa — landscape photographer","category":"PHP","file":"php/portfolio.php","tags":["php","portfolio","photography"],"description":"Photographer portfolio in the ink-wash-sumi DNA: vertical Japanese captions, a red hanko seal as the distinctive mark, one commission CTA, quiet rows instead of galleries.","dnas":["ink-wash-sumi"]} ?>
<?php
// portfolio.php — June Kurosawa, landscape photographer.
// Exactly one DNA (ink-wash-sumi). Distinctive choice: a red hanko seal and
// vertical Japanese caption text beside each series; no image grid.
$json = file_get_contents(__DIR__ . '/../styles/index.json');
$dnas = json_decode($json, true)['dnas'];
$dna = null;
foreach ($dnas as $d) { if ($d['id'] === 'ink-wash-sumi') { $dna = $d; break; } }
if ($dna === null) { fwrite(STDERR, "dna not found\n"); exit(1); }
$t = $dna['tokens']; $f = $dna['fonts'];
$bg=$t['bg']; $ink=$t['ink']; $accent=$t['accent']; $muted=$t['muted']; $line=$t['line'];
$surface = isset($t['surface']) ? $t['surface'] : $t['bg'];
$display=$f['display']; $body=$f['body']; $mono=$f['mono'];

$css = <<<CSS
:root {
  --bg: {$bg}; --ink: {$ink}; --accent: {$accent};
  --muted: {$muted}; --line: {$line}; --surface: {$surface};
  --display: "{$display}", "Hiragino Mincho ProN", Georgia, serif;
  --body: "{$body}", "Hiragino Kaku Gothic ProN", "Helvetica Neue", Arial, sans-serif;
  --mono: "{$mono}", "Courier New", Courier, monospace;
}
* { margin: 0; padding: 0; box-sizing: border-box; }
body { background: var(--bg); color: var(--ink); font-family: var(--body); font-size: 16px; line-height: 1.75; }
.tz-wrap { max-width: 1000px; margin: 0 auto; padding: 0 clamp(20px, 5vw, 48px); }
.tz-top { display: flex; justify-content: space-between; align-items: flex-start; padding: 28px 0 0; }
.tz-mark { font-family: var(--display); font-size: 22px; }
.tz-lang { font-family: var(--mono); font-size: 12px; color: var(--muted); letter-spacing: 0.1em; }
.tz-hero { padding: clamp(80px, 12vw, 160px) 0 clamp(60px, 8vw, 110px); display: grid; grid-template-columns: 1fr 60px; gap: clamp(24px, 4vw, 48px); }
.tz-hero h1 { font-family: var(--display); font-weight: 400; font-size: clamp(44px, 7vw, 92px); line-height: 1.1; letter-spacing: 0.01em; }
.tz-hero h1 .tz-red { color: var(--accent); }
.tz-lede { margin-top: 26px; color: var(--muted); max-width: 42ch; }
.tz-vertical { writing-mode: vertical-rl; font-family: var(--display); font-size: 15px; letter-spacing: 0.35em; color: var(--muted); justify-self: end; }
.tz-hanko { display: inline-flex; align-items: center; justify-content: center; width: 64px; height: 64px; background: var(--accent); color: var(--bg); font-family: var(--display); font-size: 26px; margin-top: 30px; border-radius: 3px; }
.tz-series { border-top: 1px solid var(--line); }
.tz-work { display: grid; grid-template-columns: 44px 1fr 1.4fr; gap: clamp(20px, 4vw, 48px); padding: 44px 0; border-bottom: 1px solid var(--line); align-items: start; }
.tz-year { font-family: var(--mono); font-size: 12px; color: var(--accent); letter-spacing: 0.1em; padding-top: 6px; }
.tz-work h2 { font-family: var(--display); font-weight: 400; font-size: clamp(24px, 3.2vw, 36px); line-height: 1.2; }
.tz-work .tz-jp { writing-mode: vertical-rl; font-family: var(--display); font-size: 14px; letter-spacing: 0.3em; color: var(--muted); }
.tz-work p { color: var(--muted); max-width: 56ch; margin-top: 10px; }
.tz-work .tz-plate { display: grid; grid-template-columns: 1fr auto; gap: 16px; align-items: start; }
.tz-cta-band { padding: clamp(72px, 9vw, 120px) 0; text-align: left; }
.tz-cta-band h2 { font-family: var(--display); font-weight: 400; font-size: clamp(30px, 4.4vw, 52px); line-height: 1.15; max-width: 20ch; }
.tz-btn { display: inline-block; margin-top: 28px; background: var(--ink); color: var(--bg); text-decoration: none; font-size: 14px; font-weight: 600; padding: 16px 34px; border-radius: 2px; }
.tz-btn-note { display: block; margin-top: 12px; font-family: var(--mono); font-size: 12px; color: var(--muted); }
.tz-foot { padding: 36px 0 60px; border-top: 1px solid var(--line); display: flex; justify-content: space-between; flex-wrap: wrap; gap: 12px; color: var(--muted); font-size: 13px; font-family: var(--mono); }
@media (max-width: 680px) {
  .tz-hero { grid-template-columns: 1fr; }
  .tz-vertical { writing-mode: horizontal-tb; letter-spacing: 0.2em; justify-self: start; }
  .tz-work { grid-template-columns: 1fr; }
  .tz-work .tz-jp { writing-mode: horizontal-tb; }
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
<title>June Kurosawa — landscape photographer</title>
<style>
{$css}
</style>
</head>
<body>
<div class="tz-wrap">
  <div class="tz-top">
    <span class="tz-mark">June Kurosawa</span>
    <span class="tz-lang">EN &middot; &#26085;&#26412;&#35486;</span>
  </div>

  <header class="tz-hero">
    <div>
      <h1>Fog doesn&rsquo;t wait for the <span class="tz-red">right lens.</span></h1>
      <p class="tz-lede">I photograph the hour before the weather decides &mdash;
      marshes, ridgelines, and harbors in the Northeast, printed large and
      framed in black ash. No presets, no composites, one camera, one lens.</p>
      <span class="tz-hanko" aria-label="artist seal">&#40658;&#27901;</span>
    </div>
    <p class="tz-vertical">&#38665;&#12398;&#21069;&#12398;&#19968;&#26178;&#38291;</p>
  </header>

  <section class="tz-series" aria-label="selected series">
    <article class="tz-work">
      <span class="tz-year">2026</span>
      <div class="tz-plate">
        <div>
          <h2>Low Water, Great Marsh</h2>
          <p>Fourteen mornings in Newbury before the tide came back. Shot on
          medium format, developed in the kitchen sink, printed at 30 by 40.</p>
        </div>
        <span class="tz-jp">&#24178;&#28526;</span>
      </div>
    </article>
    <article class="tz-work">
      <span class="tz-year">2025</span>
      <div class="tz-plate">
        <div>
          <h2>The Notch in November</h2>
          <p>Crawford Notch the week the leaves gave up. Granite, birch, and
          the exact gray of a wool coat. Twelve prints, edition of eight.</p>
        </div>
        <span class="tz-jp">&#38738;</span>
      </div>
    </article>
    <article class="tz-work">
      <span class="tz-year">2024</span>
      <div class="tz-plate">
        <div>
          <h2>Harbor, First Ice</h2>
          <p>Working boats at dawn in Rockland, the week the harbor skin
          froze overnight. The whole series fits in one portfolio box.</p>
        </div>
        <span class="tz-jp">&#28207;</span>
      </div>
    </article>
  </section>

  <section class="tz-cta-band">
    <h2>October light is short. Let&rsquo;s not waste it.</h2>
    <a class="tz-btn" href="#book">Book a shoot for October</a>
    <span class="tz-btn-note">Two dates left this month &mdash; reply within a day</span>
  </section>

  <footer class="tz-foot">
    <span>June Kurosawa &middot; Burlington, Vermont</span>
    <span>Prints from \$400 &middot; editions of 8</span>
  </footer>
</div>
</body>
</html>
HTML;

print($html . "\n");
