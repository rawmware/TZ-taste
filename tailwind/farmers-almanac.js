//tz-meta {"id":"tailwind-farmers-almanac","title":"Farmers Almanac Tailwind preset","category":"Tailwind","file":"tailwind/farmers-almanac.js","tags":["tailwind","farmers-almanac"],"description":"Tailwind theme preset for the Farmers Almanac style DNA.","dnas":["farmers-almanac"]}
/** TZ-taste DNA: Farmers Almanac — Tailwind preset. Extend your tailwind.config with this. */
module.exports = {
 "content": ["./src/**/*.{html,js,ts,jsx,tsx}"],
 "theme": {
  "extend": {
   "colors": {
    "tz-bg": "#f1e8d2",
    "tz-ink": "#2a2118",
    "tz-accent": "#a3331f",
    "tz-muted": "#7a6a52",
    "tz-line": "#2a21181f",
    "tz-surface": "#e7dab8"
   },
   "fontFamily": {
    "display": ["Pirata One"],
    "body": ["Spectral"],
    "mono": ["Courier Prime"]
   }
  }
 },
 "plugins": []
};
