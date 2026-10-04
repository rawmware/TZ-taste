// TZ-taste palette deriver. Run: node scripts/palette-derive.mjs <accent-hex>
// Derives an 11-shade scale (50–950) by mixing the accent toward white for
// light shades and black for dark shades, in linear RGB. Prints hexes plus
// :root CSS vars. Exit 0.

const args = process.argv.slice(2);
if (args.includes("--help") || args.includes("-h")) {
  console.log(`usage: node scripts/palette-derive.mjs <accent-hex>

Derives an 11-shade scale (50-950) from one accent hex by mixing toward
white (light shades) and black (dark shades) in linear RGB.
Prints the hexes and a :root CSS vars block.`);
  process.exit(0);
}

function parseHex(h) {
  const m = /^#?([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.exec(h || "");
  if (!m) return null;
  let hex = m[1];
  if (hex.length === 3) hex = hex.split("").map((c) => c + c).join("");
  const n = parseInt(hex, 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

const srgbToLin = (c) => {
  const s = c / 255;
  return s <= 0.04045 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
};
const linToSrgb = (l) => {
  const s = l <= 0.0031308 ? 12.92 * l : 1.055 * Math.pow(l, 1 / 2.4) - 0.055;
  return Math.min(255, Math.max(0, Math.round(s * 255)));
};
const toHex = (c) => "#" + [c.r, c.g, c.b].map((v) => v.toString(16).padStart(2, "0")).join("");

function mix(accent, other, t) {
  const a = { r: srgbToLin(accent.r), g: srgbToLin(accent.g), b: srgbToLin(accent.b) };
  const o = { r: srgbToLin(other.r), g: srgbToLin(other.g), b: srgbToLin(other.b) };
  return toHex({
    r: linToSrgb(a.r + (o.r - a.r) * t),
    g: linToSrgb(a.g + (o.g - a.g) * t),
    b: linToSrgb(a.b + (o.b - a.b) * t),
  });
}

const accent = parseHex(args[0]);
if (!accent) {
  console.error(`error: expected a hex color, got "${args[0]}". Example: node scripts/palette-derive.mjs #b5461f`);
  process.exit(1);
}

const white = { r: 255, g: 255, b: 255 };
const black = { r: 0, g: 0, b: 0 };
// shade → mix target and amount: light shades mix toward white, dark toward black
const stops = [
  [50, white, 0.92], [100, white, 0.84], [200, white, 0.68],
  [300, white, 0.52], [400, white, 0.34], [500, null, 0],
  [600, black, 0.12], [700, black, 0.30], [800, black, 0.50],
  [900, black, 0.70], [950, black, 0.82],
];

console.log("shade   hex");
console.log("--------------");
const vars = [];
for (const [shade, target, t] of stops) {
  const hex = target ? mix(accent, target, t) : toHex(accent);
  console.log(`${String(shade).padEnd(7)} ${hex}`);
  vars.push(`  --accent-${shade}: ${hex};`);
}
console.log("\n:root {");
console.log(vars.join("\n"));
console.log("}");
process.exit(0);
