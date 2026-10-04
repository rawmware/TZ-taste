//tz-meta {"id":"tailwind-bike-repair","title":"Bike Repair Tailwind preset","category":"Tailwind","file":"tailwind/bike-repair.js","tags":["tailwind","bike-repair"],"description":"Tailwind theme preset for the Bike Repair style DNA.","dnas":["bike-repair"]}
/** TZ-taste DNA: Bike Repair — Tailwind preset. Extend your tailwind.config with this. */
module.exports = {
 "content": ["./src/**/*.{html,js,ts,jsx,tsx}"],
 "theme": {
  "extend": {
   "colors": {
    "tz-bg": "#e9e6dd",
    "tz-ink": "#232323",
    "tz-accent": "#d99a1f",
    "tz-muted": "#6f6a5e",
    "tz-line": "#2323231f",
    "tz-surface": "#d9d4c6"
   },
   "fontFamily": {
    "display": ["Chakra Petch"],
    "body": ["Public Sans"],
    "mono": ["JetBrains Mono"]
   }
  }
 },
 "plugins": []
};
