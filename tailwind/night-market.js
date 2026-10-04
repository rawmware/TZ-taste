//tz-meta {"id":"tailwind-night-market","title":"Night Market Tailwind preset","category":"Tailwind","file":"tailwind/night-market.js","tags":["tailwind","night-market"],"description":"Tailwind theme preset for the Night Market style DNA.","dnas":["night-market"]}
/** TZ-taste DNA: Night Market — Tailwind preset. Extend your tailwind.config with this. */
module.exports = {
 "content": ["./src/**/*.{html,js,ts,jsx,tsx}"],
 "theme": {
  "extend": {
   "colors": {
    "tz-bg": "#161009",
    "tz-ink": "#f5ead6",
    "tz-accent": "#e8722a",
    "tz-muted": "#a8967a",
    "tz-line": "#f5ead61f",
    "tz-surface": "#221a10"
   },
   "fontFamily": {
    "display": ["Fraunces"],
    "body": ["Mulish"],
    "mono": ["JetBrains Mono"]
   }
  }
 },
 "plugins": []
};
