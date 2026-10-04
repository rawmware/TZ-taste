//tz-meta {"id":"tailwind-locksmith-shop","title":"Locksmith Shop Tailwind preset","category":"Tailwind","file":"tailwind/locksmith-shop.js","tags":["tailwind","locksmith-shop"],"description":"Tailwind theme preset for the Locksmith Shop style DNA.","dnas":["locksmith-shop"]}
/** TZ-taste DNA: Locksmith Shop — Tailwind preset. Extend your tailwind.config with this. */
module.exports = {
 "content": ["./src/**/*.{html,js,ts,jsx,tsx}"],
 "theme": {
  "extend": {
   "colors": {
    "tz-bg": "#ece7db",
    "tz-ink": "#26221a",
    "tz-accent": "#a67c2e",
    "tz-muted": "#7d7461",
    "tz-line": "#26221a1f",
    "tz-surface": "#ded6c2"
   },
   "fontFamily": {
    "display": ["Big Shoulders Stencil Text"],
    "body": ["Karla"],
    "mono": ["JetBrains Mono"]
   }
  }
 },
 "plugins": []
};
