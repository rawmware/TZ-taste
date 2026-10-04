//tz-meta {"id":"tailwind-sewing-pattern","title":"Sewing Pattern Tailwind preset","category":"Tailwind","file":"tailwind/sewing-pattern.js","tags":["tailwind","sewing-pattern"],"description":"Tailwind theme preset for the Sewing Pattern style DNA.","dnas":["sewing-pattern"]}
/** TZ-taste DNA: Sewing Pattern — Tailwind preset. Extend your tailwind.config with this. */
module.exports = {
 "content": ["./src/**/*.{html,js,ts,jsx,tsx}"],
 "theme": {
  "extend": {
   "colors": {
    "tz-bg": "#f7f2e7",
    "tz-ink": "#33291f",
    "tz-accent": "#9c3d54",
    "tz-muted": "#97826a",
    "tz-line": "#33291f26",
    "tz-surface": "#ede2cb"
   },
   "fontFamily": {
    "display": ["DM Serif Display"],
    "body": ["Nunito Sans"],
    "mono": ["Space Mono"]
   }
  }
 },
 "plugins": []
};
