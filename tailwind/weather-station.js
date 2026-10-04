//tz-meta {"id":"tailwind-weather-station","title":"Weather Station Tailwind preset","category":"Tailwind","file":"tailwind/weather-station.js","tags":["tailwind","weather-station"],"description":"Tailwind theme preset for the Weather Station style DNA.","dnas":["weather-station"]}
/** TZ-taste DNA: Weather Station — Tailwind preset. Extend your tailwind.config with this. */
module.exports = {
 "content": ["./src/**/*.{html,js,ts,jsx,tsx}"],
 "theme": {
  "extend": {
   "colors": {
    "tz-bg": "#e9eae4",
    "tz-ink": "#23282b",
    "tz-accent": "#c05b2e",
    "tz-muted": "#6f777c",
    "tz-line": "#23282b26",
    "tz-surface": "#dbddd2"
   },
   "fontFamily": {
    "display": ["Barlow Condensed"],
    "body": ["Barlow"],
    "mono": ["IBM Plex Mono"]
   }
  }
 },
 "plugins": []
};
