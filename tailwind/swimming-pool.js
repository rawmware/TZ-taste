//tz-meta {"id":"tailwind-swimming-pool","title":"Swimming Pool Tailwind preset","category":"Tailwind","file":"tailwind/swimming-pool.js","tags":["tailwind","swimming-pool"],"description":"Tailwind theme preset for the Swimming Pool style DNA.","dnas":["swimming-pool"]}
/** TZ-taste DNA: Swimming Pool — Tailwind preset. Extend your tailwind.config with this. */
module.exports = {
 "content": ["./src/**/*.{html,js,ts,jsx,tsx}"],
 "theme": {
  "extend": {
   "colors": {
    "tz-bg": "#e9f4f2",
    "tz-ink": "#123a3f",
    "tz-accent": "#e03e2d",
    "tz-muted": "#5c7a7d",
    "tz-line": "#123a3f1f",
    "tz-surface": "#d8ebe8"
   },
   "fontFamily": {
    "display": ["Archivo Black"],
    "body": ["Karla"],
    "mono": ["Space Mono"]
   }
  }
 },
 "plugins": []
};
