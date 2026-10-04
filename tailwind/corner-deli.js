//tz-meta {"id":"tailwind-corner-deli","title":"Corner Deli Tailwind preset","category":"Tailwind","file":"tailwind/corner-deli.js","tags":["tailwind","corner-deli"],"description":"Tailwind theme preset for the Corner Deli style DNA.","dnas":["corner-deli"]}
/** TZ-taste DNA: Corner Deli — Tailwind preset. Extend your tailwind.config with this. */
module.exports = {
 "content": ["./src/**/*.{html,js,ts,jsx,tsx}"],
 "theme": {
  "extend": {
   "colors": {
    "tz-bg": "#f7f3e8",
    "tz-ink": "#2e2620",
    "tz-accent": "#c0392b",
    "tz-muted": "#7c6f5f",
    "tz-line": "#2e26201f",
    "tz-surface": "#efe7d3"
   },
   "fontFamily": {
    "display": ["Bebas Neue"],
    "body": ["Karla"],
    "mono": ["Special Elite"]
   }
  }
 },
 "plugins": []
};
