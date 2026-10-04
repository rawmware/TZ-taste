//tz-meta {"id":"tailwind-postcard-rack","title":"Postcard Rack Tailwind preset","category":"Tailwind","file":"tailwind/postcard-rack.js","tags":["tailwind","postcard-rack"],"description":"Tailwind theme preset for the Postcard Rack style DNA.","dnas":["postcard-rack"]}
/** TZ-taste DNA: Postcard Rack — Tailwind preset. Extend your tailwind.config with this. */
module.exports = {
 "content": ["./src/**/*.{html,js,ts,jsx,tsx}"],
 "theme": {
  "extend": {
   "colors": {
    "tz-bg": "#f6efdd",
    "tz-ink": "#3d2f22",
    "tz-accent": "#c9402e",
    "tz-muted": "#8a755a",
    "tz-line": "#3d2f221f",
    "tz-surface": "#efe3c8"
   },
   "fontFamily": {
    "display": ["Bungee"],
    "body": ["Karla"],
    "mono": ["Courier Prime"]
   }
  }
 },
 "plugins": []
};
