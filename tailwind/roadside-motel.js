//tz-meta {"id":"tailwind-roadside-motel","title":"Roadside Motel Tailwind preset","category":"Tailwind","file":"tailwind/roadside-motel.js","tags":["tailwind","roadside-motel"],"description":"Tailwind theme preset for the Roadside Motel style DNA.","dnas":["roadside-motel"]}
/** TZ-taste DNA: Roadside Motel — Tailwind preset. Extend your tailwind.config with this. */
module.exports = {
 "content": ["./src/**/*.{html,js,ts,jsx,tsx}"],
 "theme": {
  "extend": {
   "colors": {
    "tz-bg": "#101c2c",
    "tz-ink": "#f3ead8",
    "tz-accent": "#e8b53a",
    "tz-muted": "#8d99a8",
    "tz-line": "#f3ead81f",
    "tz-surface": "#1a2a40"
   },
   "fontFamily": {
    "display": ["Yellowtail"],
    "body": ["Karla"],
    "mono": ["IBM Plex Mono"]
   }
  }
 },
 "plugins": []
};
