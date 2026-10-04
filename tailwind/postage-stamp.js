//tz-meta {"id":"tailwind-postage-stamp","title":"Postage Stamp Tailwind preset","category":"Tailwind","file":"tailwind/postage-stamp.js","tags":["tailwind","postage-stamp"],"description":"Tailwind theme preset for the Postage Stamp style DNA.","dnas":["postage-stamp"]}
/** TZ-taste DNA: Postage Stamp — Tailwind preset. Extend your tailwind.config with this. */
module.exports = {
 "content": ["./src/**/*.{html,js,ts,jsx,tsx}"],
 "theme": {
  "extend": {
   "colors": {
    "tz-bg": "#f4f1e6",
    "tz-ink": "#2e2a24",
    "tz-accent": "#b03a2e",
    "tz-muted": "#8a7f6a",
    "tz-line": "#2e2a2426",
    "tz-surface": "#e6dfcc"
   },
   "fontFamily": {
    "display": ["Bodoni Moda"],
    "body": ["Libre Franklin"],
    "mono": ["IBM Plex Mono"]
   }
  }
 },
 "plugins": []
};
