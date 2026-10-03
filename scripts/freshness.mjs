// TZ-taste freshness engine.
// Checks every curated source with a GitHub repo for new commits/releases,
// then writes sources/FRESHNESS.json + sources/FRESHNESS.md.
// Run: node scripts/freshness.mjs   (weekly via .github/workflows/freshness.yml)

import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const sources = JSON.parse(readFileSync(join(root, "sources", "sources.json"), "utf8"));

const HEADERS = {
  "User-Agent": "tz-taste-freshness/1.0",
  Accept: "application/vnd.github+json",
};
if (process.env.GITHUB_TOKEN) HEADERS.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

async function gh(path) {
  const res = await fetch(`https://api.github.com${path}`, { headers: HEADERS });
  if (!res.ok) throw new Error(`GitHub API ${res.status} for ${path}`);
  return res.json();
}

const results = [];
for (const s of sources.sources) {
  const entry = { id: s.id, name: s.name, url: s.url, license: s.license };
  if (!s.github) {
    entry.status = "manual — no repo to poll";
    results.push(entry);
    continue;
  }
  try {
    const [repo, commits] = await Promise.all([
      gh(`/repos/${s.github}`),
      gh(`/repos/${s.github}/commits?per_page=1`),
    ]);
    entry.last_commit = commits[0]?.commit?.committer?.date?.slice(0, 10) ?? "unknown";
    entry.stars = repo.stargazers_count;
    entry.status = "ok";
  } catch (e) {
    entry.status = `check failed: ${e.message}`;
  }
  results.push(entry);
  // be polite to the API
  await new Promise((r) => setTimeout(r, 800));
}

const checkedAt = new Date().toISOString().slice(0, 10);
writeFileSync(
  join(root, "sources", "FRESHNESS.json"),
  JSON.stringify({ checked_at: checkedAt, sources: results }, null, 2) + "\n"
);

const rows = results
  .map((r) => `| ${r.name} | ${r.license} | ${r.last_commit ?? "—"} | ${r.stars ?? "—"} | ${r.status} |`)
  .join("\n");

writeFileSync(
  join(root, "sources", "FRESHNESS.md"),
  `# Source freshness\n\nLast checked: **${checkedAt}** (weekly CI).\n\n| Source | License | Last commit | Stars | Status |\n|---|---|---|---|---|\n${rows}\n\n*Stars and commit dates are informational snapshots, not endorsements.*\n`
);

console.log(`Freshness check complete: ${results.length} sources → sources/FRESHNESS.json`);
