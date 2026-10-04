<?php //tz-meta {"id":"php-changelog","title":"Meridian API — changelog","category":"PHP","file":"php/changelog.php","tags":["php","changelog","api","docs"],"description":"API changelog page in the blueprint-tech DNA: a brutal revision table with mono hashes and change-type chips as the distinctive choice.","dnas":["blueprint-tech"]} ?>
<?php
// changelog.php — Meridian API changelog.
// Exactly one DNA (blueprint-tech). Distinctive choice: a brutal revision
// table — mono hashes, change-type chips, dated and signed — instead of
// blog-style release posts.
$json = file_get_contents(__DIR__ . '/../styles/index.json');
$dnas = json_decode($json, true)['dnas'];
$dna = null;
foreach ($dnas as $d) { if ($d['id'] === 'blueprint-tech') { $dna = $d; break; } }
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
  --mono: "{$mono}", "Courier New", Courier, monospace;
}
* { margin: 0; padding: 0; box-sizing: border-box; }
body {
  background: var(--bg); color: var(--ink); font-family: var(--display);
  font-size: 16px; line-height: 1.6;
  background-image: linear-gradient(var(--line) 1px, transparent 1px),
    linear-gradient(90deg, var(--line) 1px, transparent 1px);
  background-size: 48px 48px;
}
.tz-wrap { max-width: 1020px; margin: 0 auto; padding: 0 clamp(20px, 4vw, 44px); }
.tz-topbar { display: flex; justify-content: space-between; align-items: center; padding: 22px 0; border-bottom: 2px solid var(--ink); }
.tz-brand { font-weight: 700; font-size: 19px; letter-spacing: -0.01em; }
.tz-brand .tz-api { font-family: var(--mono); font-size: 12px; color: var(--accent); margin-left: 10px; font-weight: 400; }
.tz-topbar nav a { color: var(--muted); text-decoration: none; font-size: 14px; margin-left: 22px; font-family: var(--mono); }
.tz-topbar nav a:hover { color: var(--ink); }
.tz-hero { padding: clamp(72px, 10vw, 128px) 0 clamp(48px, 6vw, 80px); }
.tz-eyebrow { font-family: var(--mono); font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--accent); margin-bottom: 18px; }
.tz-hero h1 { font-size: clamp(38px, 5.4vw, 68px); line-height: 1.06; letter-spacing: -0.03em; font-weight: 700; max-width: 16ch; }
.tz-lede { margin-top: 20px; color: var(--muted); max-width: 52ch; }
.tz-table { width: 100%; border-collapse: collapse; background: var(--bg); border: 2px solid var(--ink); margin-bottom: clamp(48px, 6vw, 80px); font-size: 15px; }
.tz-table th { font-family: var(--mono); font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--muted); text-align: left; padding: 14px 18px; border-bottom: 2px solid var(--ink); }
.tz-table td { padding: 18px; border-bottom: 1px solid var(--line); vertical-align: top; }
.tz-table tr:last-child td { border-bottom: 0; }
.tz-hash { font-family: var(--mono); font-size: 13px; color: var(--accent); white-space: nowrap; }
.tz-date { font-family: var(--mono); font-size: 13px; color: var(--muted); white-space: nowrap; }
.tz-chip { display: inline-block; font-family: var(--mono); font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; border: 1px solid var(--ink); padding: 4px 10px; margin-right: 8px; white-space: nowrap; }
.tz-chip.break { background: var(--accent); border-color: var(--accent); color: var(--bg); }
.tz-table .tz-what { max-width: 52ch; }
.tz-table .tz-what code { font-family: var(--mono); font-size: 0.88em; background: var(--surface); padding: 1px 6px; border-radius: 3px; }
.tz-cta { border: 2px solid var(--ink); background: var(--bg); padding: clamp(36px, 5vw, 60px); display: grid; grid-template-columns: 1.5fr 1fr; gap: clamp(24px, 5vw, 64px); align-items: center; margin-bottom: clamp(56px, 8vw, 100px); }
.tz-cta h2 { font-size: clamp(26px, 3.6vw, 42px); font-weight: 700; letter-spacing: -0.02em; line-height: 1.12; }
.tz-cta p { margin-top: 12px; color: var(--muted); max-width: 44ch; }
.tz-btn { display: inline-block; background: var(--accent); color: var(--bg); text-decoration: none; font-weight: 700; font-size: 15px; padding: 16px 32px; justify-self: start; }
.tz-btn-note { display: block; margin-top: 10px; font-family: var(--mono); font-size: 12px; color: var(--muted); }
.tz-foot { padding: 28px 0 52px; border-top: 2px solid var(--ink); display: flex; justify-content: space-between; flex-wrap: wrap; gap: 12px; font-family: var(--mono); font-size: 12px; color: var(--muted); }
.tz-scroll { overflow-x: auto; }
@media (max-width: 720px) {
  .tz-cta { grid-template-columns: 1fr; }
  .tz-table { min-width: 640px; }
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
<title>Meridian API — changelog</title>
<style>
{$css}
</style>
</head>
<body>
<div class="tz-wrap">
  <div class="tz-topbar">
    <span class="tz-brand">Meridian<span class="tz-api">API v3</span></span>
    <nav><a href="#log">Changelog</a><a href="#docs">Docs</a><a href="#status">Status</a></nav>
  </div>

  <header class="tz-hero">
    <p class="tz-eyebrow">Changelog &middot; signed releases</p>
    <h1>Every change, dated and signed.</h1>
    <p class="tz-lede">No &ldquo;various improvements.&rdquo; Each row is a
    release with its hash, its date, and exactly what moved. Breaking changes
    ship on a six-month deprecation clock &mdash; printed here, not buried in
    a migration guide.</p>
  </header>

  <div class="tz-scroll">
  <table class="tz-table" id="log">
    <thead>
      <tr><th>Release</th><th>Date</th><th>What changed</th></tr>
    </thead>
    <tbody>
      <tr>
        <td class="tz-hash">r-3.14.0 &middot; 9f2ac1</td>
        <td class="tz-date">2026-09-30</td>
        <td class="tz-what"><span class="tz-chip break">Breaking</span>
        <code>POST /invoices</code> now requires <code>currency</code>;
        the USD default retires 2027-03-30. Webhook payloads gain
        <code>attempt</code> so retries are visible.</td>
      </tr>
      <tr>
        <td class="tz-hash">r-3.13.2 &middot; 41bd77</td>
        <td class="tz-date">2026-09-12</td>
        <td class="tz-what"><span class="tz-chip">Fix</span>
        Rate-limit headers now report the correct reset window on
        <code>GET /ledger</code>. No contract change.</td>
      </tr>
      <tr>
        <td class="tz-hash">r-3.13.0 &middot; 77e0c2</td>
        <td class="tz-date">2026-08-28</td>
        <td class="tz-what"><span class="tz-chip">New</span>
        <code>GET /reconciliation</code> returns matched payouts for a date
        range. Sandbox parity from day one.</td>
      </tr>
      <tr>
        <td class="tz-hash">r-3.12.4 &middot; 02f9a8</td>
        <td class="tz-date">2026-08-02</td>
        <td class="tz-what"><span class="tz-chip">Fix</span>
        Idempotency keys are honored for 72 hours instead of 24. Older keys
        still replay safely.</td>
      </tr>
    </tbody>
  </table>
  </div>

  <section class="tz-cta">
    <div>
      <h2>Read the notes before your pager does.</h2>
      <p>One email per release: the hash, the date, and the three lines that
      matter. Breaking changes get their own subject line.</p>
    </div>
    <div>
      <a class="tz-btn" href="#subscribe">Get release notes by email</a>
      <span class="tz-btn-note">~2 emails a month &middot; unsubscribe anytime</span>
    </div>
  </section>

  <footer class="tz-foot">
    <span>MERIDIAN API &middot; SHEET 04 OF 12</span>
    <span>99.99% UPTIME, 12 MO &middot; STATUS: OPERATIONAL</span>
  </footer>
</div>
</body>
</html>
HTML;

print($html . "\n");
