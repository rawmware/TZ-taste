//tz-meta {"id":"go-tzserve","title":"tzserve — DNA-driven Go server","category":"Go","file":"go/tzserve.go","tags":["go","server","html/template"],"description":"Tiny stdlib-only Go server that renders the TZ-taste landing page in any of the 48 style DNAs via ?dna=<slug> (default soft-minimal). Run from repo root: go run go/tzserve.go","dnas":["soft-minimal"]}
package main

// Design read: a calm lab bench for the TZ-taste reference itself —
// soft-minimal default, every one of the 48 DNAs a single query param away.
// DNA: soft-minimal (default). Runner-up swiss-rational loses: too cold for a pitch about taste.
// One distinctive choice: the full 48-DNA switcher strip — every DNA as a chip
// with its accent dot; the whole page re-skins live via ?dna=<slug>.
// Dials: VARIANCE 5 / MOTION 2 / DENSITY 4.

import (
	"encoding/json"
	"flag"
	"html/template"
	"log"
	"net/http"
	"os"
	"strings"
)

type Fonts struct {
	Display string `json:"display"`
	Body    string `json:"body"`
	Mono    string `json:"mono"`
}

type DNA struct {
	ID     string            `json:"id"`
	Name   string            `json:"name"`
	Vibe   string            `json:"vibe"`
	Fonts  Fonts             `json:"fonts"`
	Tokens map[string]string `json:"tokens"`
}

type Palette struct {
	Accent, Bg, Ink, Line, Muted, Surface string
}

func resolve(t map[string]string) Palette {
	p := Palette{
		Accent:  t["accent"],
		Bg:      t["bg"],
		Ink:     t["ink"],
		Line:    t["line"],
		Muted:   t["muted"],
		Surface: t["surface"],
	}
	if p.Surface == "" {
		p.Surface = p.Bg
	}
	if p.Line == "" {
		p.Line = p.Muted
	}
	if p.Muted == "" {
		p.Muted = p.Ink
	}
	return p
}

// fontHref builds a Google Fonts URL with bare family names (weight 400 only),
// which is valid for every family in the catalog — no 400-errors on odd faces.
func fontHref(f Fonts) string {
	plus := func(s string) string { return strings.ReplaceAll(s, " ", "+") }
	return "https://fonts.googleapis.com/css2?family=" + plus(f.Display) +
		"&family=" + plus(f.Body) + "&family=" + plus(f.Mono) + "&display=swap"
}

type Page struct {
	Cur      DNA
	P        Palette
	FontHref string
	DNAs     []DNA
}

var pageTmpl = template.Must(template.New("page").Parse(`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>TZ-taste — the anti-slop design reference</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="{{.FontHref}}" rel="stylesheet">
<style>
  :root{
    --accent:{{.P.Accent}}; --bg:{{.P.Bg}}; --ink:{{.P.Ink}};
    --line:{{.P.Line}}; --muted:{{.P.Muted}}; --surface:{{.P.Surface}};
    --display:'{{.Cur.Fonts.Display}}',sans-serif;
    --body:'{{.Cur.Fonts.Body}}',sans-serif;
    --mono:'{{.Cur.Fonts.Mono}}',monospace;
  }
  *{margin:0;padding:0;box-sizing:border-box}
  body{background:var(--bg);color:var(--ink);font-family:var(--body);font-size:17px;line-height:1.6;-webkit-font-smoothing:antialiased}
  a{color:inherit}
  .wrap{max-width:1120px;margin:0 auto;padding:0 32px}
  header.top{display:flex;justify-content:space-between;align-items:baseline;padding:28px 0;border-bottom:1px solid var(--line)}
  .wordmark{font-family:var(--display);font-size:24px;letter-spacing:-0.02em}
  .wordmark em{font-style:normal;color:var(--accent)}
  nav.topnav{font-family:var(--mono);font-size:13px;display:flex;gap:28px}
  nav.topnav a{text-decoration:none;color:var(--muted)}
  nav.topnav a:hover{color:var(--ink)}
  .hero{display:grid;grid-template-columns:7fr 5fr;gap:64px;padding:96px 0 64px;align-items:start}
  .eyebrow{font-family:var(--mono);font-size:12px;letter-spacing:0.14em;color:var(--muted);margin-bottom:24px}
  h1{font-family:var(--display);font-size:clamp(44px,6vw,84px);line-height:1.02;letter-spacing:-0.03em;margin-bottom:24px;font-weight:400}
  h1 .strike{color:var(--accent)}
  .lede{font-size:19px;max-width:34em;color:var(--ink);margin-bottom:36px}
  .cta-row{display:flex;gap:16px;flex-wrap:wrap}
  .btn{display:inline-block;padding:14px 26px;border-radius:4px;text-decoration:none;font-size:16px;border:1px solid var(--ink)}
  .btn.solid{background:var(--accent);border-color:var(--accent);color:var(--bg)}
  .btn.ghost{background:transparent;color:var(--ink)}
  .btn:hover{transform:translateY(-2px)}
  .specimen{background:var(--surface);border:1px solid var(--line);border-radius:8px;padding:28px;transform:rotate(1.5deg)}
  .specimen h3{font-family:var(--mono);font-size:12px;letter-spacing:0.14em;color:var(--muted);margin-bottom:16px}
  .specimen .dna-name{font-family:var(--display);font-size:32px;letter-spacing:-0.02em;margin-bottom:8px}
  .specimen .vibe{font-size:15px;color:var(--muted);margin-bottom:20px}
  .swatches{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:20px}
  .sw{height:56px;border-radius:4px;border:1px solid var(--line);position:relative}
  .sw span{position:absolute;left:8px;bottom:6px;font-family:var(--mono);font-size:10px;color:var(--ink);background:var(--bg);padding:1px 5px;border-radius:3px}
  .specimen .fonts{font-family:var(--mono);font-size:12px;color:var(--muted);line-height:1.8}
  .strip{border-top:1px solid var(--line);border-bottom:1px solid var(--line);padding:28px 0;margin:32px 0 0}
  .strip-label{font-family:var(--mono);font-size:12px;letter-spacing:0.14em;color:var(--muted);margin-bottom:16px}
  .chips{display:flex;gap:10px;overflow-x:auto;padding-bottom:8px}
  .chip{flex:0 0 auto;display:inline-flex;align-items:center;gap:8px;padding:8px 14px;border:1px solid var(--line);border-radius:4px;background:var(--surface);text-decoration:none;font-family:var(--mono);font-size:12px;white-space:nowrap}
  .chip .dot{width:10px;height:10px;border-radius:50%;border:1px solid var(--line)}
  .chip.on{border-color:var(--accent);box-shadow:0 0 0 1px var(--accent)}
  .chip:hover{border-color:var(--ink)}
  section.block{padding:96px 0;border-bottom:1px solid var(--line)}
  h2{font-family:var(--display);font-size:clamp(30px,3.6vw,48px);letter-spacing:-0.025em;line-height:1.05;margin-bottom:16px;font-weight:400}
  .sec-sub{color:var(--muted);max-width:38em;margin-bottom:48px}
  table.blocklist{width:100%;border-collapse:collapse}
  table.blocklist th{font-family:var(--mono);font-size:12px;letter-spacing:0.12em;text-align:left;color:var(--muted);padding:0 16px 12px 0;border-bottom:1px solid var(--line)}
  table.blocklist td{padding:20px 16px 20px 0;border-bottom:1px solid var(--line);vertical-align:top}
  table.blocklist td.n{font-family:var(--mono);color:var(--accent);white-space:nowrap}
  table.blocklist td.t{font-weight:700;white-space:nowrap}
  table.blocklist td.f{color:var(--muted)}
  .dial-row{display:grid;grid-template-columns:180px 1fr 220px;gap:24px;align-items:center;padding:22px 0;border-bottom:1px solid var(--line)}
  .dial-row .name{font-family:var(--mono);font-size:13px;letter-spacing:0.1em}
  .meter{display:flex;gap:6px}
  .meter i{width:26px;height:10px;border:1px solid var(--line);border-radius:2px}
  .meter i.f{background:var(--accent);border-color:var(--accent)}
  .dial-row .note{font-size:14px;color:var(--muted)}
  pre.code{background:var(--surface);border:1px solid var(--line);border-radius:8px;padding:28px;font-family:var(--mono);font-size:14px;line-height:1.7;overflow-x:auto;margin-top:8px}
  pre.code .c{color:var(--muted)}
  footer{padding:56px 0 72px;display:flex;justify-content:space-between;gap:32px;flex-wrap:wrap;font-family:var(--mono);font-size:13px;color:var(--muted)}
  footer a{color:var(--ink)}
  @media (max-width:860px){
    .hero{grid-template-columns:1fr;gap:48px;padding:64px 0 48px}
    .dial-row{grid-template-columns:1fr;gap:12px}
    section.block{padding:64px 0}
  }
  @media (prefers-reduced-motion:reduce){.btn:hover{transform:none}}
</style>
</head>
<body>
<div class="wrap">
  <header class="top">
    <div class="wordmark">TZ<em>—</em>taste</div>
    <nav class="topnav"><a href="#dnas">48 DNAs</a><a href="#blocklist">Blocklist</a><a href="https://github.com/rawmware/TZ-taste">GitHub</a></nav>
  </header>

  <div class="hero">
    <div>
      <p class="eyebrow">A FREE DESIGN REFERENCE FOR AI AGENTS</p>
      <h1>Stop shipping <span class="strike">purple gradients.</span></h1>
      <p class="lede">TZ-taste is a free reference for anyone building with AI: 48 style DNAs with exact tokens and real font pairings, copy-paste section patterns, and a blocklist of everything that reads as machine-made. Pick a DNA, set the dials, ship something with taste.</p>
      <div class="cta-row">
        <a class="btn solid" href="#dnas">Browse the 48 DNAs</a>
        <a class="btn ghost" href="#blocklist">Read the anti-slop checklist</a>
      </div>
    </div>
    <aside class="specimen" aria-label="Current style DNA">
      <h3>NOW SHOWING</h3>
      <div class="dna-name">{{.Cur.Name}}</div>
      <p class="vibe">{{.Cur.Vibe}}</p>
      <div class="swatches">
        <div class="sw" style="background:{{.P.Bg}}"><span>bg</span></div>
        <div class="sw" style="background:{{.P.Ink}}"><span>ink</span></div>
        <div class="sw" style="background:{{.P.Accent}}"><span>accent</span></div>
        <div class="sw" style="background:{{.P.Surface}}"><span>surface</span></div>
        <div class="sw" style="background:{{.P.Muted}}"><span>muted</span></div>
        <div class="sw" style="background:{{.P.Line}}"><span>line</span></div>
      </div>
      <p class="fonts">display — {{.Cur.Fonts.Display}}<br>body — {{.Cur.Fonts.Body}}<br>mono — {{.Cur.Fonts.Mono}}</p>
    </aside>
  </div>

  <div class="strip" id="dnas">
    <p class="strip-label">TRY A DNA — THIS WHOLE PAGE RE-SKINS (?dna=&lt;slug&gt;)</p>
    <div class="chips">
      {{range .DNAs}}<a class="chip{{if eq .ID $.Cur.ID}} on{{end}}" href="/?dna={{.ID}}"><span class="dot" style="background:{{index .Tokens "accent"}}"></span>{{.Name}}</a>{{end}}
    </div>
  </div>

  <section class="block" id="blocklist">
    <h2>The anti-slop checklist</h2>
    <p class="sec-sub">AI slop isn't a vibe — it's a set of specific, repeatable defaults. Zero blockers to ship.</p>
    <table class="blocklist">
      <tr><th>#</th><th>The tell</th><th>The fix</th></tr>
      <tr><td class="n">01</td><td class="t">The purple gradient</td><td class="f">Pick a DNA background token — paper, concrete, black — and commit.</td></tr>
      <tr><td class="n">02</td><td class="t">Three equal cards</td><td class="f">Asymmetric bento, rows, or a single strong statement.</td></tr>
      <tr><td class="n">03</td><td class="t">The template hero</td><td class="f">Change the composition — offset, full-bleed type, split, one focal image.</td></tr>
      <tr><td class="n">04</td><td class="t">Inter everywhere</td><td class="f">A real pairing from your DNA: display + body + mono.</td></tr>
      <tr><td class="n">05</td><td class="t">Lorem ipsum</td><td class="f">Write real microcopy. Short and honest beats long and fake.</td></tr>
      <tr><td class="n">06</td><td class="t">Emoji icons</td><td class="f">Lucide or Phosphor, one consistent stroke weight.</td></tr>
    </table>
  </section>

  <section class="block">
    <h2>Set the dials before you code</h2>
    <p class="sec-sub">Three numbers, stated out loud, before a single div. Defaults shown are for a landing page.</p>
    <div class="dial-row">
      <div class="name">VARIANCE — 5</div>
      <div class="meter"><i class="f"></i><i class="f"></i><i class="f"></i><i class="f"></i><i class="f"></i><i></i><i></i><i></i><i></i><i></i></div>
      <div class="note">Layout risk. 1 is centered and calm; 10 is editorial and weird on purpose.</div>
    </div>
    <div class="dial-row">
      <div class="name">MOTION — 4</div>
      <div class="meter"><i class="f"></i><i class="f"></i><i class="f"></i><i class="f"></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
      <div class="note">Animation depth. Hover states up through scroll choreography at 10.</div>
    </div>
    <div class="dial-row">
      <div class="name">DENSITY — 3</div>
      <div class="meter"><i class="f"></i><i class="f"></i><i class="f"></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
      <div class="note">Information per viewport. 1 is one idea per screen; 10 is a dense dashboard.</div>
    </div>
  </section>

  <section class="block">
    <h2>Use it in one line</h2>
    <p class="sec-sub">Paste this into any AI conversation, then describe what you're building.</p>
    <pre class="code"><span class="c">// the whole protocol in a single prompt</span>
Use https://github.com/rawmware/TZ-taste as a reference to build: [your brief]</pre>
  </section>

  <footer>
    <div>TZ-taste — free forever, MIT licensed.</div>
    <div><a href="https://github.com/rawmware/TZ-taste">github.com/rawmware/TZ-taste</a> · served by tzserve (stdlib Go, no dependencies)</div>
  </footer>
</div>
</body>
</html>`))

func loadDNAs(path string) ([]DNA, error) {
	b, err := os.ReadFile(path)
	if err != nil {
		return nil, err
	}
	var doc struct {
		DNAs []DNA `json:"dnas"`
	}
	if err := json.Unmarshal(b, &doc); err != nil {
		return nil, err
	}
	return doc.DNAs, nil
}

func main() {
	addr := flag.String("addr", ":8080", "listen address")
	styles := flag.String("styles", "styles/index.json", "path to styles/index.json (relative to repo root)")
	flag.Parse()

	dnas, err := loadDNAs(*styles)
	if err != nil {
		log.Fatalf("tzserve: cannot load %s: %v (run from the repo root)", *styles, err)
	}
	byID := make(map[string]DNA, len(dnas))
	for _, d := range dnas {
		byID[d.ID] = d
	}
	def, ok := byID["soft-minimal"]
	if !ok {
		def = dnas[0]
	}

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if r.URL.Path != "/" {
			http.NotFound(w, r)
			return
		}
		cur := def
		if slug := r.URL.Query().Get("dna"); slug != "" {
			if d, ok := byID[slug]; ok {
				cur = d
			}
		}
		w.Header().Set("Content-Type", "text/html; charset=utf-8")
		if err := pageTmpl.Execute(w, Page{
			Cur:      cur,
			P:        resolve(cur.Tokens),
			FontHref: fontHref(cur.Fonts),
			DNAs:     dnas,
		}); err != nil {
			log.Printf("tzserve: template error: %v", err)
		}
	})

	log.Printf("tzserve: serving %d DNAs on http://localhost%s  (try ?dna=acid-rave)", len(dnas), *addr)
	log.Fatal(http.ListenAndServe(*addr, nil))
}
