<?php //tz-meta {"id":"php-contact","title":"Toge Tea Rooms — contact page","category":"PHP","file":"php/contact.php","tags":["php","contact","tea-house"],"description":"Tea-house contact page in the ma-japanese DNA: the address set as a vertical poem as the distinctive choice, quiet-hours table, one honest reply promise.","dnas":["ma-japanese"]} ?>
<?php
// contact.php — Toge Tea Rooms, a small tea house.
// Exactly one DNA (ma-japanese). Distinctive choice: the address is set as a
// vertical poem — name, street, town, each on its own breath — instead of a
// form block; plus a quiet-hours table stating when the room is silent.
$json = file_get_contents(__DIR__ . '/../styles/index.json');
$dnas = json_decode($json, true)['dnas'];
$dna = null;
foreach ($dnas as $d) { if ($d['id'] === 'ma-japanese') { $dna = $d; break; } }
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
body { background: var(--bg); color: var(--ink); font-family: var(--body); font-size: 16px; line-height: 1.8; }
.tz-wrap { max-width: 1020px; margin: 0 auto; padding: 0 clamp(20px, 4vw, 44px); }
.tz-topbar { display: flex; justify-content: space-between; align-items: baseline; padding: 24px 0; border-bottom: 1px solid var(--line); }
.tz-brand { font-family: var(--display); font-size: 20px; }
.tz-topbar .tz-jp { font-family: var(--mono); font-size: 12px; color: var(--muted); letter-spacing: 0.2em; }
.tz-grid { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(32px, 6vw, 96px); padding: clamp(72px, 10vw, 128px) 0 clamp(48px, 6vw, 80px); align-items: start; }
.tz-eyebrow { font-family: var(--mono); font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--accent); margin-bottom: 18px; }
.tz-hero h1 { font-family: var(--display); font-weight: 400; font-size: clamp(36px, 4.8vw, 62px); line-height: 1.15; }
.tz-lede { margin-top: 20px; color: var(--muted); max-width: 44ch; }
.tz-promise { margin-top: 28px; border-left: 2px solid var(--accent); padding-left: 20px; font-family: var(--display); font-size: 20px; }
.tz-btn { display: inline-block; margin-top: 30px; background: var(--ink); color: var(--bg); text-decoration: none; font-size: 15px; font-weight: 600; padding: 16px 36px; }
.tz-btn-note { display: block; margin-top: 10px; font-family: var(--mono); font-size: 12px; color: var(--muted); }
.tz-poem { writing-mode: vertical-rl; font-family: var(--display); font-size: clamp(22px, 3vw, 30px); letter-spacing: 0.28em; line-height: 2.2; justify-self: center; color: var(--ink); }
.tz-poem .tz-red { color: var(--accent); }
.tz-hours { border-top: 1px solid var(--line); padding: 48px 0 clamp(56px, 8vw, 96px); }
.tz-hours h2 { font-family: var(--display); font-weight: 400; font-size: 26px; margin-bottom: 8px; }
.tz-hours p { color: var(--muted); max-width: 52ch; margin-bottom: 28px; }
.tz-hrow { display: grid; grid-template-columns: 200px 1fr 1fr; gap: 16px; padding: 16px 0; border-bottom: 1px solid var(--line); font-size: 15px; }
.tz-hrow:first-of-type { border-top: 1px solid var(--line); }
.tz-hrow .tz-day { font-family: var(--mono); font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase; }
.tz-hrow .tz-when { color: var(--muted); }
.tz-hrow .tz-silent { color: var(--accent); font-style: italic; }
.tz-foot { padding: 28px 0 52px; border-top: 1px solid var(--line); display: flex; justify-content: space-between; flex-wrap: wrap; gap: 12px; font-family: var(--mono); font-size: 12px; color: var(--muted); }
@media (max-width: 720px) {
  .tz-grid { grid-template-columns: 1fr; }
  .tz-poem { writing-mode: horizontal-tb; letter-spacing: 0.12em; justify-self: start; }
  .tz-hrow { grid-template-columns: 1fr; gap: 4px; }
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
<title>Toge Tea Rooms — write to us</title>
<style>
{$css}
</style>
</head>
<body>
<div class="tz-wrap">
  <div class="tz-topbar">
    <span class="tz-brand">Toge Tea Rooms</span>
    <span class="tz-jp">&#23784;&#33590;</span>
  </div>

  <div class="tz-grid">
    <header class="tz-hero">
      <p class="tz-eyebrow">Contact &middot; reservations</p>
      <h1>We answer every letter within two days.</h1>
      <p class="tz-lede">There is no form here &mdash; forms are for companies.
      Write to us like a person: the date you hope for, how many will sit,
      and anything we should know about knees, stairs, or silence.</p>
      <p class="tz-promise">Ceremonies seat six. Weekends book three weeks out;
      Tuesdays almost never do.</p>
      <a class="tz-btn" href="mailto:hello@example.com?subject=Reservation%20request">Write to us</a>
      <span class="tz-btn-note">Opens your mail app &middot; hello@example.com</span>
    </header>
    <p class="tz-poem" aria-label="our address">
      Toge Tea Rooms<br>
      <span class="tz-red">14 Foxglove Lane</span><br>
      Camden, Maine<br>
      04843
    </p>
  </div>

  <section class="tz-hours" aria-label="hours">
    <h2>When the room is quiet</h2>
    <p>We do not take calls during sittings. The kettle, the whisk, and the
    guest have the room&rsquo;s full attention &mdash; yours will too, when
    you are the guest.</p>
    <div class="tz-hrow">
      <span class="tz-day">Tue &ndash; Fri</span>
      <span class="tz-when">Sittings at 10, 1, and 4</span>
      <span class="tz-silent">Silent 12 &ndash; 1, every day</span>
    </div>
    <div class="tz-hrow">
      <span class="tz-day">Saturday</span>
      <span class="tz-when">Sittings at 10 and 2</span>
      <span class="tz-silent">Silent 12 &ndash; 1, every day</span>
    </div>
    <div class="tz-hrow">
      <span class="tz-day">Sun &ndash; Mon</span>
      <span class="tz-when">The room rests</span>
      <span class="tz-silent">Letters still answered</span>
    </div>
  </section>

  <footer class="tz-foot">
    <span>TOGE TEA ROOMS &middot; CAMDEN, MAINE</span>
    <span>SIX SEATS &middot; ONE KETTLE &middot; NO RUSH</span>
  </footer>
</div>
</body>
</html>
HTML;

print($html . "\n");
