/* TZ-taste demo site — data-driven from the repo's own indexes.
   The site always reflects the library: styles, patterns, sources load from JSON. */
(function () {
  "use strict";

  var toastEl = document.getElementById("toast");
  var toastTimer = null;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove("show"); }, 2200);
  }

  function copyText(text, msg) {
    function done() { toast(msg || "Copied to clipboard"); }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, function () { fallback(); });
    } else { fallback(); }
    function fallback() {
      var ta = document.createElement("textarea");
      ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); done(); } catch (e) { toast("Copy failed — select manually"); }
      document.body.removeChild(ta);
    }
  }

  var AGENT_BRIEF = "Use https://github.com/rawmware/TZ-taste as a reference to build: [your brief]. Follow its AGENT.md protocol and pick one style DNA before writing any code.";

  // Data lives at the repo root, but Pages only publishes /docs — so on
  // github.io we read the JSON straight from the repo via raw.githubusercontent
  // (fork-friendly: owner/repo are derived from the URL). Locally, use ../.
  var DATA_BASE = (function () {
    var h = location.hostname, p = location.pathname.split("/").filter(Boolean);
    if (/\.github\.io$/.test(h) && p.length) {
      return "https://raw.githubusercontent.com/" + h.replace(/\.github\.io$/, "") + "/" + p[0] + "/main/";
    }
    return "../";
  })();

  document.querySelectorAll('[data-copy="agent-brief"]').forEach(function (btn) {
    btn.addEventListener("click", function () { copyText(AGENT_BRIEF, "Agent brief copied — paste it into any AI"); });
  });

  function wrapSnippet(snippet) {
    return '<!doctype html><html><head><meta charset="utf-8">' +
      '<meta name="viewport" content="width=device-width,initial-scale=1">' +
      '<style>body{margin:0;min-height:100%}</style></head><body>' +
      snippet + "</body></html>";
  }

  var FONT_STACKS = {
    "Fraunces": '"Fraunces",Georgia,serif',
    "Newsreader": 'Georgia,serif',
    "Space Mono": '"Space Mono",monospace',
    "Archivo": '"Archivo",Arial,sans-serif',
    "Archivo Black": '"Archivo Black",Arial,sans-serif',
    "Anton": '"Anton",Arial,sans-serif',
    "Cormorant Garamond": '"Cormorant Garamond",Georgia,serif',
    "Outfit": '"Outfit",sans-serif',
    "Instrument Sans": '"Instrument Sans",sans-serif',
    "Space Grotesk": '"Space Grotesk",sans-serif',
    "JetBrains Mono": '"JetBrains Mono",monospace',
    "IBM Plex Mono": '"IBM Plex Mono",monospace',
    "Unbounded": '"Unbounded",sans-serif',
    "Shippori Mincho": '"Shippori Mincho",serif',
    "Zen Kaku Gothic New": '"Zen Kaku Gothic New",sans-serif',
    "Source Serif 4": '"Source Serif 4",Georgia,serif'
  };
  function stack(name) { return FONT_STACKS[name] || "sans-serif"; }

  /* ---------- transformer demo ---------- */
  var switchBtn = document.getElementById("taste-switch");
  var slopPanel = document.getElementById("slop-panel");
  var tastePanel = document.getElementById("taste-panel");
  var switchLabel = switchBtn.querySelector(".switch-label");
  switchBtn.addEventListener("click", function () {
    var on = switchBtn.getAttribute("aria-pressed") === "true";
    switchBtn.setAttribute("aria-pressed", String(!on));
    slopPanel.classList.toggle("hidden", !on ? true : false);
    tastePanel.classList.toggle("hidden", !on ? false : true);
    switchLabel.textContent = !on ? "← Back to slop" : "Apply taste →";
    toast(!on ? "Taste applied — same brief, one DNA" : "Back to default AI output");
  });
  document.querySelectorAll(".dna-chips .chip").forEach(function (chip) {
    chip.addEventListener("click", function () {
      document.querySelectorAll(".dna-chips .chip").forEach(function (c) { c.classList.remove("active"); });
      chip.classList.add("active");
      tastePanel.setAttribute("data-dna", chip.getAttribute("data-dna"));
      if (tastePanel.classList.contains("hidden")) { switchBtn.click(); }
    });
  });

  /* ---------- style DNAs ---------- */
  function tokensCss(d) {
    var t = d.tokens;
    var lines = ["--bg:" + t.bg + ";", "--ink:" + t.ink + ";", "--accent:" + t.accent + ";",
      "--muted:" + t.muted + ";", "--line:" + t.line + ";"];
    if (t.surface) lines.splice(1, 0, "--surface:" + t.surface + ";");
    return "/* " + d.name + " — TZ-taste style DNA */\n:root{\n  " + lines.join("\n  ") + "\n}\n" +
      "/* Type: " + d.fonts.display + " / " + d.fonts.body + " / " + d.fonts.mono + " */";
  }

  fetch(DATA_BASE + "styles/index.json")
    .then(function (r) { if (!r.ok) throw 0; return r.json(); })
    .then(function (idx) {
      var grid = document.getElementById("dna-grid");
      grid.innerHTML = "";
      idx.dnas.forEach(function (d) {
        var card = document.createElement("article");
        card.className = "dna-card";
        var sw = ["bg", "ink", "accent", "muted"].map(function (k) {
          return '<i style="background:' + d.tokens[k] + '" title="' + k + " " + d.tokens[k] + '"></i>';
        }).join("");
        card.innerHTML =
          '<div class="dna-preview" style="background:' + d.tokens.bg + ";color:" + d.tokens.ink + '">' +
            '<span class="tag">' + d.tags.slice(0, 2).join(" · ") + "</span>" +
            '<div class="aa" style="font-family:' + stack(d.fonts.display) + '">Aa</div>' +
            '<div class="sample" style="font-family:' + stack(d.fonts.display) + '">Interfaces with intent.</div>' +
          "</div>" +
          '<div class="dna-body"><h3>' + d.name + '</h3><p class="dna-vibe">“' + d.vibe + '”</p>' +
          '<div class="swatches">' + sw + "</div>" +
          '<p class="dna-fonts">' + d.fonts.display + " / " + d.fonts.body + " / " + d.fonts.mono + "</p>" +
          '<div class="dna-actions"><button class="btn-line" data-tokens>Copy tokens</button>' +
          '<a class="btn-line" href="https://github.com/rawmware/TZ-taste/blob/main/' + d.file + '" target="_blank" rel="noopener">Full DNA →</a></div></div>';
        card.querySelector("[data-tokens]").addEventListener("click", function () {
          copyText(tokensCss(d), d.name + " tokens copied");
        });
        grid.appendChild(card);
      });
    })
    .catch(function () {
      document.getElementById("dna-grid").innerHTML =
        '<p class="loading">Couldn’t load the live index — <a href="https://github.com/rawmware/TZ-taste/tree/main/styles">browse the DNAs on GitHub →</a></p>';
    });

  /* ---------- patterns ---------- */
  var patternCache = {};
  function getPattern(file) {
    if (!patternCache[file]) {
      patternCache[file] = fetch(DATA_BASE + file).then(function (r) {
        if (!r.ok) throw 0; return r.text();
      });
    }
    return patternCache[file];
  }

  var modal = document.getElementById("preview-modal");
  var pmFrame = document.getElementById("pm-frame");
  var pmTitle = document.getElementById("pm-title");
  var pmSource = document.getElementById("pm-source");
  var currentPatternFile = null;

  function openPreview(p) {
    currentPatternFile = p.file;
    pmTitle.textContent = p.title;
    pmSource.href = "https://github.com/rawmware/TZ-taste/blob/main/" + p.file;
    getPattern(p.file).then(function (html) {
      pmFrame.srcdoc = wrapSnippet(html);
      if (typeof modal.showModal === "function") modal.showModal();
      else { toast("Preview needs a modern browser — use View source"); }
    }).catch(function () { toast("Couldn’t load the preview"); });
  }
  document.getElementById("pm-close").addEventListener("click", function () { modal.close(); });
  modal.addEventListener("click", function (e) { if (e.target === modal) modal.close(); });
  document.getElementById("pm-copy").addEventListener("click", function () {
    if (!currentPatternFile) return;
    getPattern(currentPatternFile).then(function (html) {
      copyText(html, "Pattern code copied");
    });
  });

  fetch(DATA_BASE + "patterns/index.json")
    .then(function (r) { if (!r.ok) throw 0; return r.json(); })
    .then(function (idx) {
      var grid = document.getElementById("pattern-grid");
      var filters = document.getElementById("pattern-filters");
      grid.innerHTML = "";
      var cats = ["All"];
      idx.patterns.forEach(function (p) { if (cats.indexOf(p.category) < 0) cats.push(p.category); });
      cats.forEach(function (c, i) {
        var b = document.createElement("button");
        b.className = "fchip" + (i === 0 ? " active" : "");
        b.textContent = c;
        b.addEventListener("click", function () {
          filters.querySelectorAll(".fchip").forEach(function (x) { x.classList.remove("active"); });
          b.classList.add("active");
          renderPatterns(c);
        });
        filters.appendChild(b);
      });
      function card(p) {
        var el = document.createElement("article");
        el.className = "pattern-card";
        el.innerHTML =
          '<div class="pattern-thumb"><iframe title="" tabindex="-1" aria-hidden="true"></iframe></div>' +
          '<div class="pattern-body"><p class="pattern-cat">' + p.category + "</p><h3>" + p.title + "</h3>" +
          '<p class="pattern-desc">' + p.description + "</p>" +
          '<div class="pattern-tags">' + p.tags.map(function (t) { return "<span>" + t + "</span>"; }).join("") + "</div>" +
          '<div class="pattern-actions"><button class="btn-line" data-preview>Live preview</button>' +
          '<button class="btn-line" data-copycode>Copy code</button></div></div>';
        el.querySelector("[data-preview]").addEventListener("click", function () { openPreview(p); });
        el.querySelector("[data-copycode]").addEventListener("click", function () {
          getPattern(p.file).then(function (html) { copyText(html, p.title + " code copied"); });
        });
        getPattern(p.file).then(function (html) {
          el.querySelector("iframe").srcdoc = wrapSnippet(html);
        }).catch(function () {});
        return el;
      }
      function renderPatterns(cat) {
        grid.innerHTML = "";
        idx.patterns
          .filter(function (p) { return cat === "All" || p.category === cat; })
          .forEach(function (p) { grid.appendChild(card(p)); });
      }
      renderPatterns("All");
    })
    .catch(function () {
      document.getElementById("pattern-grid").innerHTML =
        '<p class="loading">Couldn’t load the live index — <a href="https://github.com/rawmware/TZ-taste/tree/main/patterns">browse patterns on GitHub →</a></p>';
    });

  /* ---------- prompts (driven by prompts/index.json) ---------- */
  fetch(DATA_BASE + "prompts/index.json")
    .then(function (r) { if (!r.ok) throw 0; return r.json(); })
    .then(function (idx) {
      var plist = document.getElementById("prompt-list");
      plist.innerHTML = "";
      idx.prompts.forEach(function (pr) {
        var el = document.createElement("div");
        el.className = "prompt-card";
        el.innerHTML = "<div><h3>" + pr.title + "</h3><p>" + (pr.description || "") + "</p></div>";
        var btn = document.createElement("button");
        btn.className = "btn-line";
        btn.textContent = "Copy prompt";
        btn.addEventListener("click", function () {
          fetch(DATA_BASE + pr.file)
            .then(function (r) { if (!r.ok) throw 0; return r.text(); })
            .then(function (md) { copyText(md, pr.title + " prompt copied"); })
            .catch(function () { toast("Couldn’t load the prompt file"); });
        });
        el.appendChild(btn);
        plist.appendChild(el);
      });
    })
    .catch(function () {
      document.getElementById("prompt-list").innerHTML =
        '<p class="loading">Couldn’t load the live index — <a href="https://github.com/rawmware/TZ-taste/tree/main/prompts">browse prompts on GitHub →</a></p>';
    });

  /* ---------- generic gallery: 3D scenes, templates, DNA showcases ----------
     Cards carry a styled tile (no live iframes — too heavy at this scale);
     clicking opens the shared preview modal with the full file as srcdoc. */
  function makeGallery(opts) {
    var cache = {};
    function get(file) {
      if (!cache[file]) {
        cache[file] = fetch(DATA_BASE + file).then(function (r) {
          if (!r.ok) throw 0; return r.text();
        });
      }
      return cache[file];
    }
    function openItem(item) {
      currentPatternFile = item.file;
      pmTitle.textContent = item.title;
      pmSource.href = "https://github.com/rawmware/TZ-taste/blob/main/" + item.file;
      get(item.file).then(function (html) {
        pmFrame.srcdoc = html; /* full standalone pages — no wrapper */
        if (typeof modal.showModal === "function") modal.showModal();
        else { toast("Preview needs a modern browser — use View source"); }
      }).catch(function () { toast("Couldn’t load the preview"); });
    }
    fetch(DATA_BASE + opts.index)
      .then(function (r) { if (!r.ok) throw 0; return r.json(); })
      .then(function (idx) {
        var items = idx[opts.key] || [];
        var grid = document.getElementById(opts.grid);
        var filters = opts.filters ? document.getElementById(opts.filters) : null;
        grid.innerHTML = "";
        function card(item) {
          var el = document.createElement("article");
          el.className = "pattern-card";
          var glyph = (item.title || "?").trim().charAt(0);
          el.innerHTML =
            '<div class="g-tile" aria-hidden="true"><span>' + glyph + "</span></div>" +
            '<div class="pattern-body"><p class="pattern-cat">' + opts.label + "</p><h3>" + item.title + "</h3>" +
            '<p class="pattern-desc">' + (item.description || "") + "</p>" +
            '<div class="pattern-actions"><button class="btn-line" data-open>' + opts.cta + "</button></div></div>";
          el.querySelector("[data-open]").addEventListener("click", function () { openItem(item); });
          return el;
        }
        function render(cat) {
          grid.innerHTML = "";
          items
            .filter(function (p) { return !opts.categoryKey || cat === "All" || p[opts.categoryKey] === cat; })
            .forEach(function (p) { grid.appendChild(card(p)); });
        }
        if (filters && opts.categoryKey) {
          var cats = ["All"];
          items.forEach(function (p) {
            var c = p[opts.categoryKey];
            if (c && cats.indexOf(c) < 0) cats.push(c);
          });
          cats.forEach(function (c, i) {
            var b = document.createElement("button");
            b.className = "fchip" + (i === 0 ? " active" : "");
            b.textContent = c;
            b.addEventListener("click", function () {
              filters.querySelectorAll(".fchip").forEach(function (x) { x.classList.remove("active"); });
              b.classList.add("active");
              render(c);
            });
            filters.appendChild(b);
          });
        }
        render("All");
      })
      .catch(function () {
        document.getElementById(opts.grid).innerHTML =
          '<p class="loading">Couldn’t load the live index — <a href="https://github.com/rawmware/TZ-taste/tree/main/' +
          opts.dir + '">browse on GitHub →</a></p>';
      });
  }

  makeGallery({ index: "three-d/index.json", key: "scenes", grid: "scenes-grid",
    label: "3D scene", cta: "Launch scene", dir: "three-d" });
  makeGallery({ index: "templates/index.json", key: "templates", grid: "templates-grid",
    filters: "template-filters", categoryKey: "category",
    label: "Template", cta: "Live preview", dir: "templates" });
  makeGallery({ index: "showcase/index.json", key: "showcases", grid: "showcase-grid",
    label: "DNA showcase", cta: "View demo", dir: "showcase" });
  makeGallery({ index: "generative/index.json", key: "generative", grid: "generative-grid",
    label: "Generative", cta: "Open piece", dir: "generative" });
  makeGallery({ index: "emails/index.json", key: "emails", grid: "emails-grid",
    label: "Email", cta: "Preview email", dir: "emails" });
  makeGallery({ index: "app-ui/index.json", key: "app_ui", grid: "appui-grid",
    label: "App UI", cta: "Live preview", dir: "app-ui" });

  /* ---------- sources ---------- */
  Promise.all([
    fetch(DATA_BASE + "sources/sources.json").then(function (r) { if (!r.ok) throw 0; return r.json(); }),
    fetch(DATA_BASE + "sources/FRESHNESS.json").then(function (r) { return r.ok ? r.json() : null; }).catch(function () { return null; })
  ]).then(function (res) {
    var data = res[0], fresh = res[1];
    var table = document.getElementById("source-table");
    var freshMap = {};
    if (fresh && fresh.sources) {
      fresh.sources.forEach(function (f) { freshMap[f.id] = f; });
      var note = document.getElementById("freshness-note");
      if (note) note.textContent = "Last freshness check: " + fresh.checked_at + " · CI re-checks weekly.";
    }
    var html = '<div class="source-row head"><span>Source</span><span>What you get</span><span>License</span><span>Updated</span></div>';
    data.sources.forEach(function (s) {
      var f = freshMap[s.id] || {};
      var tag = s.cost === "free" ? "" : " " + s.cost;
      html += '<div class="source-row"><span class="source-name"><a href="' + s.url +
        '" target="_blank" rel="noopener">' + s.name + " ↗</a></span>" +
        '<span class="source-what">' + s.what + "</span>" +
        '<span class="license-tag' + tag + '">' + s.license + "</span>" +
        '<span class="fresh">' + (f.last_commit || "weekly") + "</span></div>";
    });
    table.innerHTML = html;
  }).catch(function () {
    document.getElementById("source-table").innerHTML =
      '<p class="loading" style="padding:24px">Couldn’t load the live index — <a href="https://github.com/rawmware/TZ-taste/tree/main/sources">browse sources on GitHub →</a></p>';
  });
})();
