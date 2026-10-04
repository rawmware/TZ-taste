<?php //tz-meta {"id":"php-tzbuild","title":"TzBuild — zero-dependency PHP landing page builder","category":"PHP","file":"php/TzBuild.php","tags":["php","builder","cli","landing-page"],"description":"CLI builder that emits a complete styled landing page for any TZ-taste DNA slug. Validates the slug, resolves styles/index.json relative to the script, and prints the finished HTML to stdout.","dnas":["art-deco-luxe"]} ?>
<?php
/**
 * TzBuild.php — zero-dependency PHP landing page builder for TZ-taste.
 *
 * Usage:
 *   php php/TzBuild.php --dna=art-deco-luxe --title="My Product" > out.html
 *   php php/TzBuild.php --help
 *
 * Options:
 *   --dna=SLUG     one of the 48 style DNA ids (default: art-deco-luxe)
 *   --title="..."  product name used in the headline (default: "My Product")
 *   --help         print usage
 *
 * DNA values are read from styles/index.json relative to this file's
 * directory. Unknown slugs exit non-zero and list every valid slug.
 */

function usage($prog)
{
    $lines = array(
        "Usage: php {$prog} [--dna=SLUG] [--title=\"My Product\"] [--help]",
        "",
        "Emits a complete TZ-taste landing page to stdout.",
        "Default DNA: art-deco-luxe",
    );
    fwrite(STDOUT, implode(PHP_EOL, $lines) . PHP_EOL);
}

function loadDnas()
{
    $path = __DIR__ . DIRECTORY_SEPARATOR . '..' . DIRECTORY_SEPARATOR
          . 'styles' . DIRECTORY_SEPARATOR . 'index.json';
    $raw = @file_get_contents($path);
    if ($raw === false) {
        fwrite(STDERR, "TzBuild error: cannot read {$path}\n");
        exit(2);
    }
    $data = json_decode($raw, true);
    if (!is_array($data) || !isset($data['dnas'])) {
        fwrite(STDERR, "TzBuild error: bad index.json format\n");
        exit(2);
    }
    return $data['dnas'];
}

function findDna($dnas, $slug)
{
    foreach ($dnas as $d) {
        if ($d['id'] === $slug) {
            return $d;
        }
    }
    return null;
}

$prog = isset($argv[0]) ? basename($argv[0]) : 'TzBuild.php';
$dnaSlug = 'art-deco-luxe';
$title = 'My Product';

foreach (array_slice($argv, 1) as $arg) {
    if ($arg === '--help' || $arg === '-h') {
        usage($prog);
        exit(0);
    } elseif (strpos($arg, '--dna=') === 0) {
        $dnaSlug = substr($arg, 6);
    } elseif (strpos($arg, '--title=') === 0) {
        $title = substr($arg, 8);
    } else {
        fwrite(STDERR, "TzBuild error: unknown option \"{$arg}\"\n\n");
        usage($prog);
        exit(2);
    }
}

$dnas = loadDnas();
$dna = findDna($dnas, $dnaSlug);
if ($dna === null) {
    fwrite(STDERR, "TzBuild error: unknown DNA slug \"{$dnaSlug}\"\n\n");
    fwrite(STDERR, "Valid slugs:\n");
    foreach ($dnas as $d) {
        fwrite(STDERR, "  {$d['id']}\n");
    }
    exit(1);
}

$t = $dna['tokens'];
$f = $dna['fonts'];
$bg = $t['bg'];
$ink = $t['ink'];
$accent = $t['accent'];
$muted = $t['muted'];
$line = $t['line'];
$surface = isset($t['surface']) ? $t['surface'] : $t['bg'];
$display = $f['display'];
$body = $f['body'];
$mono = $f['mono'];
$titleEsc = htmlspecialchars($title, ENT_QUOTES, 'UTF-8');

$css = <<<CSS
:root {
  --bg: {$bg}; --ink: {$ink}; --accent: {$accent};
  --muted: {$muted}; --line: {$line}; --surface: {$surface};
  --display: "{$display}", Georgia, "Times New Roman", serif;
  --body: "{$body}", "Avenir Next", "Helvetica Neue", Arial, sans-serif;
  --mono: "{$mono}", "Courier New", Courier, monospace;
}
* { margin: 0; padding: 0; box-sizing: border-box; }
body {
  background: var(--bg); color: var(--ink);
  font-family: var(--body); font-size: 17px; line-height: 1.65;
}
.tz-wrap { max-width: 1100px; margin: 0 auto; padding: 0 clamp(20px, 4vw, 48px); }
.tz-topbar {
  display: flex; justify-content: space-between; align-items: center;
  padding: 20px 0; border-bottom: 1px solid var(--line);
}
.tz-brand { font-family: var(--display); font-size: 20px; letter-spacing: 0.06em; }
.tz-brand em { font-style: normal; color: var(--accent); }
.tz-topbar .tz-no { font-family: var(--mono); font-size: 12px; color: var(--muted); letter-spacing: 0.14em; }
.tz-hero {
  display: grid; grid-template-columns: 1.15fr 0.85fr;
  gap: clamp(32px, 6vw, 88px); align-items: center;
  padding: clamp(72px, 10vw, 140px) 0 clamp(56px, 7vw, 96px);
}
.tz-eyebrow {
  font-family: var(--mono); font-size: 12px; letter-spacing: 0.22em;
  text-transform: uppercase; color: var(--accent); margin-bottom: 22px;
}
.tz-hero h1 {
  font-family: var(--display); font-weight: 400;
  font-size: clamp(38px, 5.2vw, 68px); line-height: 1.08; letter-spacing: 0.01em;
}
.tz-hero h1 em { font-style: normal; color: var(--accent); }
.tz-lede { margin: 24px 0 32px; color: var(--muted); max-width: 46ch; }
.tz-btn {
  display: inline-block; border: 1px solid var(--accent); color: var(--ink);
  background: transparent; text-decoration: none; font-size: 14px;
  letter-spacing: 0.08em; text-transform: uppercase; font-weight: 600;
  padding: 16px 34px; transition: background 0.25s ease, color 0.25s ease;
}
.tz-btn:hover { background: var(--accent); color: var(--bg); }
.tz-btn-note { display: block; margin-top: 12px; font-family: var(--mono); font-size: 12px; color: var(--muted); }
.tz-emblem {
  border: 1px solid var(--line); padding: clamp(28px, 4vw, 48px);
  text-align: center; background: var(--surface);
}
.tz-emblem svg { display: block; width: 100%; max-width: 220px; margin: 0 auto 20px; }
.tz-emblem .tz-cap { font-family: var(--mono); font-size: 12px; letter-spacing: 0.2em; color: var(--muted); text-transform: uppercase; }
.tz-emblem .tz-num { font-family: var(--display); font-size: clamp(56px, 7vw, 96px); color: var(--accent); line-height: 1; margin: 8px 0; }
.tz-rule { border: 0; border-top: 1px solid var(--line); margin: 0; }
.tz-rows { padding: clamp(48px, 6vw, 80px) 0; }
.tz-row {
  display: grid; grid-template-columns: 110px 1fr 2fr; gap: 24px;
  padding: 30px 0; border-bottom: 1px solid var(--line); align-items: baseline;
}
.tz-row:first-child { border-top: 1px solid var(--line); }
.tz-roman { font-family: var(--mono); font-size: 13px; color: var(--accent); letter-spacing: 0.12em; }
.tz-row h2 { font-family: var(--display); font-size: 24px; font-weight: 400; letter-spacing: 0.02em; }
.tz-row p { color: var(--muted); max-width: 58ch; }
.tz-foot { padding: 44px 0 64px; }
.tz-foot .tz-fine { font-family: var(--mono); font-size: 12px; color: var(--muted); letter-spacing: 0.06em; margin-bottom: 18px; }
.tz-swatches { display: flex; flex-wrap: wrap; gap: 12px; }
.tz-swatch {
  display: flex; align-items: center; gap: 10px;
  border: 1px solid var(--line); padding: 8px 14px 8px 8px;
  font-family: var(--mono); font-size: 12px; color: var(--muted);
}
.tz-chip { width: 26px; height: 26px; border: 1px solid var(--line); }
@media (max-width: 760px) {
  .tz-hero { grid-template-columns: 1fr; }
  .tz-row { grid-template-columns: 1fr; gap: 8px; }
}
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
}
CSS;

$fan = '';
for ($i = 0; $i < 9; $i++) {
    $x2 = 110 + 80 * cos(deg2rad(180 + $i * 22.5));
    $y2 = 100 - 80 * sin(deg2rad(180 + $i * 22.5));
    $fan .= sprintf(
        '<line x1="110" y1="100" x2="%.1f" y2="%.1f" stroke="%s" stroke-width="1.5"/>',
        $x2, $y2, $accent
    );
}

$html = <<<HTML
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{$titleEsc} — built by TzBuild</title>
<style>
{$css}
</style>
</head>
<body>
<div class="tz-wrap">
  <div class="tz-topbar">
    <span class="tz-brand">{$titleEsc}<em> &mdash;</em> MMXXVI</span>
    <span class="tz-no">TZ-BUILD &middot; {$dnaSlug}</span>
  </div>

  <header class="tz-hero">
    <div>
      <p class="tz-eyebrow">A new offering from {$titleEsc}</p>
      <h1>{$titleEsc}, composed <em>like a classic</em>.</h1>
      <p class="tz-lede">This page was assembled by TzBuild in one command,
      committed to a single TZ-taste DNA. Swap the slug, keep the bones:
      every color and typeface on this page resolves to one token set.</p>
      <a class="tz-btn" href="#walkthrough">Book a private walkthrough</a>
      <span class="tz-btn-note">A 15-minute video tour, no sales deck</span>
    </div>
    <div class="tz-emblem" aria-label="emblem">
      <svg viewBox="0 0 220 130" role="img" aria-label="deco fan">
        {$fan}
        <rect x="14" y="104" width="192" height="1" fill="{$line}"/>
      </svg>
      <p class="tz-cap">First edition</p>
      <p class="tz-num">I</p>
      <p class="tz-cap">{$dna['name']}</p>
    </div>
  </header>

  <hr class="tz-rule">

  <section class="tz-rows" aria-label="how it works">
    <div class="tz-row">
      <span class="tz-roman">I.</span>
      <h2>Pick a DNA</h2>
      <p>Forty-eight style DNAs, each with its own tokens and type pairing.
      One page, one DNA &mdash; the runner-up stays on the shelf.</p>
    </div>
    <div class="tz-row">
      <span class="tz-roman">II.</span>
      <h2>Run one command</h2>
      <p>TzBuild reads the DNA file, validates the slug, and prints finished
      finished page. No build step, no dependencies, no bundler to feed.</p>
    </div>
    <div class="tz-row">
      <span class="tz-roman">III.</span>
      <h2>Ship the page</h2>
      <p>Redirect stdout to a file and you are done. The swatches below are
      the only colors this page is allowed to use.</p>
    </div>
  </section>

  <footer class="tz-foot">
    <p class="tz-fine">TOKEN SWATCHES &mdash; {$dna['name']} ({$dnaSlug})</p>
    <div class="tz-swatches">
      <span class="tz-swatch"><span class="tz-chip" style="background: {$bg}"></span>bg {$bg}</span>
      <span class="tz-swatch"><span class="tz-chip" style="background: {$ink}"></span>ink {$ink}</span>
      <span class="tz-swatch"><span class="tz-chip" style="background: {$accent}"></span>accent {$accent}</span>
      <span class="tz-swatch"><span class="tz-chip" style="background: {$muted}"></span>muted {$muted}</span>
      <span class="tz-swatch"><span class="tz-chip" style="background: {$line}"></span>line {$line}</span>
      <span class="tz-swatch"><span class="tz-chip" style="background: {$surface}"></span>surface {$surface}</span>
    </div>
  </footer>
</div>
</body>
</html>
HTML;

print($html . "\n");
