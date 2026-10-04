//tz-meta {"id":"tailwind-matchbook-cover","title":"Matchbook Cover Tailwind preset","category":"Tailwind","file":"tailwind/matchbook-cover.js","tags":["tailwind","matchbook-cover"],"description":"Tailwind theme preset for the Matchbook Cover style DNA.","dnas":["matchbook-cover"]}
/** TZ-taste DNA: Matchbook Cover — Tailwind preset. Extend your tailwind.config with this. */
module.exports = {
 "content": ["./src/**/*.{html,js,ts,jsx,tsx}"],
 "theme": {
  "extend": {
   "colors": {
    "tz-bg": "#efe6d4",
    "tz-ink": "#262019",
    "tz-accent": "#b3402a",
    "tz-muted": "#8d7f63",
    "tz-line": "#2620192b",
    "tz-surface": "#e2d4b6"
   },
   "fontFamily": {
    "display": ["Limelight"],
    "body": ["Josefin Sans"],
    "mono": ["Inconsolata"]
   }
  }
 },
 "plugins": []
};
