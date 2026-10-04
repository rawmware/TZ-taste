// TZ-taste modular type scale. Run: node scripts/type-scale.mjs [--base 16] [--ratio 1.25]
// Prints a modular scale table (xs through display) in px and rem.
// Exit 0.

const args = process.argv.slice(2);
if (args.includes("--help") || args.includes("-h")) {
  console.log(`usage: node scripts/type-scale.mjs [--base 16] [--ratio 1.25]

Prints a modular type scale from xs to display, in px and rem.
--base   body size in px (default 16)
--ratio  scale ratio (default 1.25)`);
  process.exit(0);
}

function num(flag, def) {
  const i = args.indexOf(flag);
  if (i < 0) return def;
  const v = Number(args[i + 1]);
  if (!Number.isFinite(v) || v <= 0) {
    console.error(`error: ${flag} must be a positive number, got "${args[i + 1]}"`);
    process.exit(1);
  }
  return v;
}

const base = num("--base", 16);
const ratio = num("--ratio", 1.25);

const steps = [
  ["xs", -2], ["sm", -1], ["base", 0], ["lg", 1],
  ["xl", 2], ["2xl", 3], ["3xl", 4], ["4xl", 5], ["display", 6],
];

console.log(`modular scale — base ${base}px, ratio ${ratio}`);
console.log("step      px        rem");
console.log("--------------------------");
for (const [name, exp] of steps) {
  const px = base * Math.pow(ratio, exp);
  const rem = px / 16;
  console.log(`${name.padEnd(9)} ${px.toFixed(2).padStart(7)}  ${rem.toFixed(3)}`);
}
process.exit(0);
