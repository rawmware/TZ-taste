//tz-meta {"id":"tailwind-fishing-tackle","title":"Fishing Tackle Tailwind preset","category":"Tailwind","file":"tailwind/fishing-tackle.js","tags":["tailwind","fishing-tackle"],"description":"Tailwind theme preset for the Fishing Tackle style DNA.","dnas":["fishing-tackle"]}
/** TZ-taste DNA: Fishing Tackle — Tailwind preset. Extend your tailwind.config with this. */
module.exports = {
 "content": ["./src/**/*.{html,js,ts,jsx,tsx}"],
 "theme": {
  "extend": {
   "colors": {
    "tz-bg": "#f2efe6",
    "tz-ink": "#23301f",
    "tz-accent": "#d9480f",
    "tz-muted": "#6d7360",
    "tz-line": "#23301f1f",
    "tz-surface": "#e4ddc9"
   },
   "fontFamily": {
    "display": ["Oswald"],
    "body": ["Work Sans"],
    "mono": ["Space Mono"]
   }
  }
 },
 "plugins": []
};
