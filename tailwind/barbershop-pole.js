//tz-meta {"id":"tailwind-barbershop-pole","title":"Barbershop Pole Tailwind preset","category":"Tailwind","file":"tailwind/barbershop-pole.js","tags":["tailwind","barbershop-pole"],"description":"Tailwind theme preset for the Barbershop Pole style DNA.","dnas":["barbershop-pole"]}
/** TZ-taste DNA: Barbershop Pole — Tailwind preset. Extend your tailwind.config with this. */
module.exports = {
 "content": ["./src/**/*.{html,js,ts,jsx,tsx}"],
 "theme": {
  "extend": {
   "colors": {
    "tz-bg": "#f6f3ea",
    "tz-ink": "#232323",
    "tz-accent": "#b3312a",
    "tz-muted": "#8a857a",
    "tz-line": "#23232326",
    "tz-surface": "#eae4d3"
   },
   "fontFamily": {
    "display": ["Alfa Slab One"],
    "body": ["Source Sans 3"],
    "mono": ["Space Mono"]
   }
  }
 },
 "plugins": []
};
