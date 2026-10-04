// TZ-taste index builder.
// Scans content dirs for <!--tz-meta {...} --> headers and regenerates every
// index.json + manifest counts. Run: node scripts/build-indexes.mjs
// This is how parallel contributors avoid index conflicts: files carry metadata,
// indexes are derived.

import { readFileSync, writeFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const today = new Date().toISOString().slice(0, 10);

const INDEXES = [
  { dir: "styles", key: "dnas", index: "styles/index.json",
    usage: "Agents: pick exactly ONE dna. Load only that file. Never load all." },
  { dir: "patterns", key: "patterns", index: "patterns/index.json",
    usage: "Each file is a standalone snippet: markup plus a <style> block. Copy both into your page. Classes are tz- prefixed to avoid collisions." },
  { dir: "three-d", key: "scenes", index: "three-d/index.json",
    usage: "Each file is a standalone Three.js scene (CDN import). Copy the whole file or lift the scene code. All original, MIT." },
  { dir: "templates", key: "templates", index: "templates/index.json",
    usage: "Complete standalone landing pages. Open in a browser, view source, adapt. All original, MIT." },
  { dir: "prompts", key: "prompts", index: "prompts/index.json",
    usage: "Copy-paste build prompts. Fill the [BRACKETS], paste into any AI builder." },
  { dir: "showcase", key: "showcases", index: "showcase/index.json",
    usage: "One live demo page per style DNA. Open in a browser to see the DNA working. Classes are tz- prefixed." },
  { dir: "docs", key: "docs", index: "docs/index.json",
    usage: "Prose guides for humans and agents. Not code." },
  { dir: "generative", key: "generative", index: "generative/index.json",
    usage: "Interactive generative-art pages (vanilla canvas, zero deps). Open in a browser, lift the technique." },
  { dir: "tokens", key: "tokens", index: "tokens/index.json",
    usage: "W3C-format design tokens, one file per style DNA. Machine-readable color/type." },
  { dir: "tailwind", key: "presets", index: "tailwind/index.json",
    usage: "Tailwind theme presets, one per style DNA. Extend tailwind.config with one." },
  { dir: "react", key: "react_components", index: "react/index.json",
    usage: "React (TSX) component ports of the best patterns. Props-driven, zero extra deps." },
  { dir: "vue", key: "vue_components", index: "vue/index.json",
    usage: "Vue SFC ports of the best patterns. Scoped styles, zero extra deps." },
  { dir: "svelte", key: "svelte_components", index: "svelte/index.json",
    usage: "Svelte component ports of the best patterns. Scoped styles, zero extra deps." },
  { dir: "python", key: "python_pages", index: "python/index.json",
    usage: "Python page builders (stdlib only). Run: python3 python/<page>.py > out.html" },
  { dir: "astro", key: "astro_components", index: "astro/index.json",
    usage: "Astro component ports of the best patterns. Scoped styles, zero extra deps." },
  { dir: "emails", key: "emails", index: "emails/index.json",
    usage: "Table-based HTML email templates, inline CSS, Outlook-safe. Real email engineering." },
  { dir: "app-ui", key: "app_ui", index: "app-ui/index.json",
    usage: "App-interface patterns (dashboards, kanban, tables). Same conventions as patterns/." },
  { dir: "swiftui", key: "swiftui_views", index: "swiftui/index.json",
    usage: "SwiftUI view ports of the best patterns. Self-contained files with #Preview." },
  { dir: "starters", key: "starters", index: "starters/index.json", recursive: true,
    usage: "Runnable project starters (Next.js, Nuxt, SvelteKit, Astro), each wired to one DNA." },
  { dir: "go", key: "go_pages", index: "go/index.json",
    usage: "Go page programs (stdlib only). Run: go run go/<page>.go > out.html; tzserve.go serves any DNA." },
  { dir: "ruby", key: "ruby_pages", index: "ruby/index.json",
    usage: "Ruby ERB page builder (stdlib only). Run: ruby ruby/tz_build.rb --dna=<slug> --out=out.html" },
  { dir: "kotlin", key: "kotlin_components", index: "kotlin/index.json",
    usage: "Jetpack Compose-style Kotlin components, one DNA each." },
  { dir: "dart", key: "dart_widgets", index: "dart/index.json",
    usage: "Flutter widget ports of the best patterns. Self-contained with previews." },
  { dir: "php", key: "php_pages", index: "php/index.json",
    usage: "PHP page scripts (zero deps). Run: php php/<page>.php > out.html; TzBuild.php is the CLI builder." },
  { dir: "csharp", key: "csharp_pages", index: "csharp/index.json",
    usage: "C# Razor page templates for ASP.NET, one DNA each." },
  { dir: "rust", key: "rust_pages", index: "rust/index.json",
    usage: "Rust page renderers (zero deps). Compile: rustc rust/<page>.rs && ./<page> > out.html" },
  { dir: "java", key: "java_pages", index: "java/index.json",
    usage: "Java Thymeleaf/Spring page templates, one DNA each." },
  { dir: "elixir", key: "elixir_components", index: "elixir/index.json",
    usage: "Phoenix HEEx function components, one DNA each." },
  { dir: "vscode", key: "vscode_themes", index: "vscode/index.json",
    usage: "VS Code color themes, one per style DNA. Copy into your settings or an extension." },
  { dir: "wallpapers", key: "wallpapers", index: "wallpapers/index.json",
    usage: "Generative SVG wallpapers, one per style DNA. Open in a browser, set as desktop." },
];

function metaOf(file) {
  const text = readFileSync(file, "utf8");
  let m = text.match(/<!--tz-meta\s+(\{.*?\})\s*-->/s)
       || text.match(/\/\/tz-meta\s+(\{.*?\})/)
       || text.match(/^#<%# tz-meta\s+(\{.*?\})\s*%>/m)
       || text.match(/^@\*tz-meta\s+(\{.*?\})\s*\*@/m);
  if (m) { try { return JSON.parse(m[1]); } catch { return null; } }
  if (file.endsWith(".json")) {
    try {
      const j = JSON.parse(text);
      if (j._tzmeta) return j._tzmeta;
      if (j["tz-taste"] && typeof j["tz-taste"] === "object") {
        const t = j["tz-taste"];
        const rel = file.startsWith(root) ? file.slice(root.length + 1) : file;
        return { id: "starter-" + rel.split("/")[1], title: t.description || rel,
          file: rel, dnas: t.dna ? [t.dna] : [], description: t.description || "" };
      }
      return null;
    } catch { return null; }
  }
  return null;
}

const counts = {};
function walkFiles(dirPath, out) {
  for (const f of readdirSync(dirPath).sort()) {
    if (f === "index.json" || f.startsWith(".")) continue;
    const full = join(dirPath, f);
    let stat;
    try { stat = statSync(full); } catch { continue; }
    if (stat.isDirectory()) { walkFiles(full, out); continue; }
    if (!stat.isFile()) continue;
    out.push(full);
  }
}
for (const { dir, key, index, usage, recursive } of INDEXES) {
  const dirPath = join(root, dir);
  if (!existsSync(dirPath)) { console.log(`skip ${dir} (missing)`); continue; }
  const entries = [];
  const files = [];
  if (recursive) walkFiles(dirPath, files);
  else for (const f of readdirSync(dirPath).sort()) {
    if (f === "index.json" || f.startsWith(".")) continue;
    const full = join(dirPath, f);
    let stat;
    try { stat = (await import("node:fs")).statSync(full); } catch { continue; }
    if (!stat.isFile()) continue;
    files.push(full);
  }
  for (const full of files) {
    const rel = full.slice(root.length + 1);
    const meta = metaOf(full);
    if (!meta) { console.log(`WARN: ${rel} has no tz-meta header`); continue; }
    entries.push(meta);
  }
  entries.sort((a, b) => String(a.id).localeCompare(String(b.id)));
  writeFileSync(join(root, index),
    JSON.stringify({ count: entries.length, updated: today, usage, [key]: entries }, null, 1) + "\n");
  counts[key] = entries.length;
  console.log(`${index}: ${entries.length} entries`);
}

// manifest counts
const mPath = join(root, "manifest.json");
if (existsSync(mPath)) {
  const m = JSON.parse(readFileSync(mPath, "utf8"));
  m.counts = {
    style_dnas: counts.dnas ?? 0,
    patterns: counts.patterns ?? 0,
    scenes_3d: counts.scenes ?? 0,
    templates: counts.templates ?? 0,
    prompts: counts.prompts ?? 0,
    showcases: counts.showcases ?? 0,
    generative: counts.generative ?? 0,
    tokens: counts.tokens ?? 0,
    tailwind_presets: counts.presets ?? 0,
    emails: counts.emails ?? 0,
    app_ui: counts.app_ui ?? 0,
    swiftui_views: counts.swiftui_views ?? 0,
    starters: counts.starters ?? 0,
  };
  m.updated = today;
  writeFileSync(mPath, JSON.stringify(m, null, 1) + "\n");
  console.log("manifest.json counts updated");
}
