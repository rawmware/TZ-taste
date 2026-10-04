//tz-meta {"id":"tailwind-apotheke","title":"Apotheke Tailwind preset","category":"Tailwind","file":"tailwind/apotheke.js","tags":["tailwind","apotheke"],"description":"Tailwind theme preset for the Apotheke style DNA.","dnas":["apotheke"]}
/** TZ-taste DNA: Apotheke — Tailwind preset. Extend your tailwind.config with this. */
module.exports = {
 "content": ["./src/**/*.{html,js,ts,jsx,tsx}"],
 "theme": {
  "extend": {
   "colors": {
    "tz-bg": "#f3f0e6",
    "tz-ink": "#26302a",
    "tz-accent": "#2e7d4f",
    "tz-muted": "#7a8272",
    "tz-line": "#26302a26",
    "tz-surface": "#e6e0cd"
   },
   "fontFamily": {
    "display": ["Cormorant Garamond"],
    "body": ["Newsreader"],
    "mono": ["Roboto Mono"]
   }
  }
 },
 "plugins": []
};
