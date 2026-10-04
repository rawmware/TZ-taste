#<%# tz-meta {"id":"ruby-tz-build","title":"tz_build — DNA-driven ERB builder","category":"Ruby","file":"ruby/tz_build.rb","tags":["ruby","erb","builder"],"description":"CLI that renders a complete standalone landing page for any of the 48 style DNAs via an embedded ERB template. Stdlib only (erb, json, optparse).","dnas":["soft-minimal"]} %>
#!/usr/bin/env ruby
# frozen_string_literal: true
#
# tz_build — DNA-driven ERB site builder (TZ-taste Ruby track).
#
# Renders a complete standalone landing page for one style DNA, using an
# embedded ERB template. Every color and font resolves to the DNA's tokens.
#
# Usage (run from the repo root):
#   ruby ruby/tz_build.rb --dna soft-minimal --title "Harborline" --out page.html
#   ruby ruby/tz_build.rb --dna acid-rave > rave.html
#
# Stdlib only: erb, json, optparse.
#
# Design read: calm confidence for a small async-standup product — generous
# whitespace, hairline structure, one editorial numeral rail. Dials 5/4/3.
# Distinctive choice: oversized section numerals (01 / 02 / 03) set in the
# display face, overlapping each section's kicker like a print margin note.

require "erb"
require "json"
require "optparse"

options = { dna: "soft-minimal", title: "Harborline", out: nil }

OptionParser.new do |o|
  o.banner = "Usage: ruby ruby/tz_build.rb --dna <slug> [--title \"...\"] [--out page.html]"
  o.on("--dna SLUG", "Style DNA slug from styles/index.json") { |v| options[:dna] = v }
  o.on("--title TITLE", "Product / site title") { |v| options[:title] = v }
  o.on("--out FILE", "Write to FILE instead of stdout") { |v| options[:out] = v }
  o.on("-h", "--help", "Show this help") { puts o; exit }
end.parse!

candidates = [
  File.expand_path("../styles/index.json", __dir__),
  File.expand_path("styles/index.json", Dir.pwd)
]
index_path = candidates.find { |p| File.file?(p) }
abort "tz_build: styles/index.json not found (looked in #{candidates.join(', ')})" unless index_path

index = JSON.parse(File.read(index_path, encoding: "utf-8"))
dna = index["dnas"].find { |d| d["id"] == options[:dna] }
abort "tz_build: unknown dna #{options[:dna].inspect}" unless dna

title   = options[:title]
t       = dna["tokens"]
f       = dna["fonts"]
bg      = t["bg"]
ink     = t["ink"]
accent  = t["accent"]
muted   = t["muted"]
line    = t["line"]
surface = t["surface"] || t["bg"]
display = f["display"]
body    = f["body"]
mono    = f["mono"]

# Plain family requests (no weight axis) so the URL is valid for every DNA,
# including single-weight display faces.
font_url = "https://fonts.googleapis.com/css2?" \
  + f.values.uniq.map { |name| "family=#{name.gsub(' ', '+')}" }.join("&") \
  + "&display=swap"

TEMPLATE = <<~'ERB'
  <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title><%= title %> — async standups for small crews</title>
  <meta name="description" content="<%= title %> replaces the 9 a.m. meeting with a written check-in your team actually reads.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="<%= font_url %>" rel="stylesheet">
  <style>
    :root{
      --bg:<%= bg %>; --ink:<%= ink %>; --accent:<%= accent %>;
      --muted:<%= muted %>; --line:<%= line %>; --surface:<%= surface %>;
      --ink-2:color-mix(in srgb, var(--ink) 68%, var(--bg));
      --display:"<%= display %>",Georgia,serif;
      --body:"<%= body %>",-apple-system,"Segoe UI",sans-serif;
      --mono:"<%= mono %>",ui-monospace,SFMono-Regular,monospace;
    }
    *{margin:0;padding:0;box-sizing:border-box}
    html{scroll-behavior:smooth}
    body{background:var(--bg);color:var(--ink);font-family:var(--body);
         font-size:16px;line-height:1.65;-webkit-font-smoothing:antialiased}
    ::selection{background:var(--accent);color:var(--bg)}
    .wrap{max-width:1120px;margin:0 auto;padding:0 clamp(20px,4vw,48px)}
    /* header */
    .site-head{border-bottom:1px solid var(--line)}
    .site-head .wrap{display:flex;align-items:center;justify-content:space-between;
                     padding-top:20px;padding-bottom:20px}
    .brand{font-family:var(--mono);font-size:13px;letter-spacing:.22em;
           text-transform:uppercase;text-decoration:none;color:var(--ink)}
    .brand b{color:var(--accent)}
    nav a{font-size:14px;color:var(--ink-2);text-decoration:none;margin-left:28px}
    nav a:hover{color:var(--accent)}
    /* hero — asymmetric: type left, check-in card right and dropped */
    .hero{padding:clamp(64px,9vw,128px) 0 clamp(56px,7vw,96px)}
    .hero-grid{display:grid;grid-template-columns:1.15fr .85fr;
               gap:clamp(32px,6vw,96px);align-items:start}
    .kicker{font-family:var(--mono);font-size:12px;letter-spacing:.26em;
            text-transform:uppercase;color:var(--ink-2);margin-bottom:22px}
    .kicker .dot{color:var(--accent)}
    h1{font-family:var(--display);font-weight:400;
       font-size:clamp(44px,6.4vw,84px);line-height:1.02;letter-spacing:-.03em;
       margin-bottom:24px;text-wrap:balance}
    h1 em{font-style:normal;color:var(--accent)}
    .lede{font-size:18px;color:var(--ink-2);max-width:44ch;margin-bottom:36px}
    .cta-row{display:flex;align-items:center;gap:24px;flex-wrap:wrap}
    .btn{display:inline-block;background:var(--accent);color:var(--bg);
         font-family:var(--body);font-weight:700;font-size:15px;
         padding:15px 28px;border-radius:6px;text-decoration:none;border:0;cursor:pointer}
    .btn:hover{filter:brightness(1.08)}
    .btn-ghost{color:var(--ink);font-weight:600;font-size:15px;text-decoration:none;
               border-bottom:2px solid var(--accent);padding-bottom:2px}
    .checkin{margin-top:clamp(24px,5vw,72px);background:var(--surface);
             border:1px solid var(--line);border-radius:10px;overflow:hidden}
    .checkin-head{display:flex;justify-content:space-between;align-items:center;
                  padding:14px 20px;border-bottom:1px solid var(--line);
                  font-family:var(--mono);font-size:12px;color:var(--ink-2)}
    .checkin-head .live{color:var(--accent)}
    .checkin ul{list-style:none}
    .checkin li{padding:16px 20px;border-bottom:1px solid var(--line);font-size:14.5px}
    .checkin li:last-child{border-bottom:0}
    .checkin .who{font-weight:700}
    .checkin .when{font-family:var(--mono);font-size:11.5px;color:var(--ink-2);margin-left:8px}
    .checkin p{color:var(--ink-2);margin-top:4px}
    /* sections with editorial numerals */
    section.block{padding:clamp(64px,8vw,120px) 0;position:relative}
    .numeral{font-family:var(--display);font-size:clamp(90px,12vw,170px);
             line-height:1;color:var(--muted);opacity:.35;letter-spacing:-.04em;
             margin-bottom:-.35em;user-select:none}
    .sec-kicker{font-family:var(--mono);font-size:12px;letter-spacing:.26em;
               text-transform:uppercase;color:var(--ink-2);margin:18px 0 14px}
    h2{font-family:var(--display);font-weight:400;letter-spacing:-.02em;
       font-size:clamp(30px,4vw,48px);line-height:1.1;margin-bottom:16px;text-wrap:balance}
    .sec-sub{color:var(--ink-2);max-width:56ch;margin-bottom:8px}
    .steps{list-style:none;margin-top:40px;border-top:1px solid var(--line)}
    .steps li{display:grid;grid-template-columns:72px 1fr;gap:24px;
              padding:30px 0;border-bottom:1px solid var(--line);align-items:baseline}
    .steps .n{font-family:var(--mono);font-size:13px;color:var(--accent);letter-spacing:.1em}
    .steps h3{font-size:20px;font-weight:700;margin-bottom:8px;letter-spacing:-.01em}
    .steps p{color:var(--ink-2);max-width:62ch}
    /* quote */
    .quote{padding:clamp(64px,8vw,120px) 0}
    .quote blockquote{font-family:var(--display);font-size:clamp(26px,3.6vw,44px);
                      line-height:1.25;letter-spacing:-.015em;max-width:24ch;
                      margin-left:auto}
    .quote cite{display:block;margin-top:24px;font-family:var(--mono);font-style:normal;
                font-size:13px;color:var(--ink-2);letter-spacing:.06em;text-align:right}
    /* pricing strip */
    .plan{border:1px solid var(--line);border-radius:10px;background:var(--surface);
          padding:clamp(28px,4vw,48px);display:grid;grid-template-columns:1fr auto;
          gap:28px;align-items:center;margin-top:32px}
    .plan .price{font-family:var(--display);font-size:clamp(40px,5vw,64px);
                 letter-spacing:-.03em;white-space:nowrap}
    .plan .price small{font-family:var(--body);font-size:15px;letter-spacing:0;color:var(--ink-2)}
    .plan p{color:var(--ink-2);max-width:52ch;margin-top:8px}
    /* footer */
    footer{border-top:1px solid var(--line);margin-top:clamp(48px,6vw,96px)}
    footer .wrap{display:grid;grid-template-columns:1.2fr 1fr 1fr;gap:32px;
                 padding-top:48px;padding-bottom:40px}
    footer h4{font-family:var(--mono);font-size:11px;letter-spacing:.24em;
              text-transform:uppercase;color:var(--ink-2);margin-bottom:16px;font-weight:400}
    footer a{display:block;color:var(--ink);text-decoration:none;font-size:14.5px;
             margin-bottom:10px}
    footer a:hover{color:var(--accent)}
    .fine{border-top:1px solid var(--line)}
    .fine .wrap{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;
                padding-top:20px;padding-bottom:28px;font-family:var(--mono);
                font-size:12px;color:var(--ink-2)}
    @media (max-width:820px){
      .hero-grid{grid-template-columns:1fr}
      .checkin{margin-top:8px}
      .steps li{grid-template-columns:1fr;gap:8px}
      .plan{grid-template-columns:1fr}
      .quote blockquote{margin-left:0}
      footer .wrap{grid-template-columns:1fr 1fr}
      nav a{margin-left:18px}
    }
    @media (prefers-reduced-motion:reduce){html{scroll-behavior:auto}}
  </style>
  </head>
  <body>
  <header class="site-head">
    <div class="wrap">
      <a class="brand" href="#"><b>■</b> <%= title %></a>
      <nav>
        <a href="#how">How it works</a>
        <a href="#pricing">Pricing</a>
        <a href="#start">Start free</a>
      </nav>
    </div>
  </header>

  <main>
    <div class="wrap hero">
      <div class="hero-grid">
        <div>
          <p class="kicker"><span class="dot">●</span> Async standups for small crews</p>
          <h1>Four minutes.<br>The whole crew, <em>caught up.</em></h1>
          <p class="lede"><%= title %> replaces the 9&nbsp;a.m. meeting with a written
          check-in your team actually reads — yesterday, today, and what's stuck,
          in everyone's own words.</p>
          <div class="cta-row">
            <a class="btn" href="#start">Start a free crew</a>
            <a class="btn-ghost" href="#how">See how it works ↓</a>
          </div>
        </div>
        <aside class="checkin" aria-label="Sample check-in">
          <div class="checkin-head"><span>TUESDAY CHECK-IN</span><span class="live">● 4 of 6 in</span></div>
          <ul>
            <li><span class="who">Mara</span><span class="when">8:41</span>
              <p>Shipped the onboarding email. Today: billing page copy. Stuck on the refund wording — need a second pair of eyes.</p></li>
            <li><span class="who">Dev</span><span class="when">8:57</span>
              <p>API latency down to 180ms. Today: load test at noon. Nothing stuck.</p></li>
            <li><span class="who">June</span><span class="when">9:12</span>
              <p>Talked to three customers about the mobile nav. Today: prototype v2. Stuck: can't reach the beta tester in Oslo.</p></li>
          </ul>
        </aside>
      </div>
    </div>

    <div class="wrap">
      <section class="block" id="how">
        <div class="numeral" aria-hidden="true">01</div>
        <p class="sec-kicker">How it works</p>
        <h2>No meeting. No thread to lose. Just the update.</h2>
        <p class="sec-sub">One prompt a day, answered whenever each person starts work.
        Everything lands in a single readable page — no scrolling through chat history.</p>
        <ol class="steps">
          <li><span class="n">STEP 1</span><div>
            <h3>You set the prompt</h3>
            <p>Yesterday / today / stuck, or write your own. <%= title %> nudges everyone
            once, at their local 9 a.m. — and never twice.</p></div></li>
          <li><span class="n">STEP 2</span><div>
            <h3>Everyone answers in plain words</h3>
            <p>No video, no status theater. Two or three sentences from a phone or a laptop,
            usually before coffee cools.</p></div></li>
          <li><span class="n">STEP 3</span><div>
            <h3>You read one page</h3>
            <p>Stuck items rise to the top automatically. Reply in context, assign the fix,
            and get on with the day.</p></div></li>
        </ol>
      </section>

      <section class="quote">
        <div class="numeral" aria-hidden="true">02</div>
        <blockquote>“We cancelled standup in March. Nobody has asked for it back.”</blockquote>
        <cite>— Priya N., runs a six-person support team in Leeds</cite>
      </section>

      <section class="block" id="pricing">
        <div class="numeral" aria-hidden="true">03</div>
        <p class="sec-kicker">Pricing</p>
        <h2>One plan. Priced like coffee, not software.</h2>
        <div class="plan" id="start">
          <div>
            <div class="price">$12 <small>per person / month</small></div>
            <p>Unlimited check-ins, unlimited history, every integration. Free for crews
            of three or fewer — because that's how most good teams start.</p>
          </div>
          <a class="btn" href="#start">Start free — no card needed</a>
        </div>
      </section>
    </div>
  </main>

  <footer>
    <div class="wrap">
      <div>
        <h4><%= title %></h4>
        <a href="#">Manifesto: meetings are a bug</a>
        <a href="#">Changelog</a>
        <a href="#">Status: all systems normal</a>
      </div>
      <div>
        <h4>Product</h4>
        <a href="#how">How it works</a>
        <a href="#pricing">Pricing</a>
        <a href="#">Integrations</a>
      </div>
      <div>
        <h4>Company</h4>
        <a href="#">About the crew</a>
        <a href="#">Contact a human</a>
        <a href="#">Privacy, in plain English</a>
      </div>
    </div>
    <div class="fine"><div class="wrap">
      <span>© 2026 <%= title %>. Made for teams that hate meetings.</span>
      <span>DNA: <%= dna["id"] %> · rendered by tz_build</span>
    </div></div>
  </footer>
  </body>
  </html>
ERB

html = ERB.new(TEMPLATE, trim_mode: "-").result(binding)

if options[:out]
  File.write(options[:out], html, encoding: "utf-8")
  warn "tz_build: wrote #{options[:out]} (dna=#{dna['id']})"
else
  print html
end
