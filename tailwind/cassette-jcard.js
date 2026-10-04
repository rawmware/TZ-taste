//tz-meta {"id":"tailwind-cassette-jcard","title":"Cassette J-Card Tailwind preset","category":"Tailwind","file":"tailwind/cassette-jcard.js","tags":["tailwind","cassette-jcard"],"description":"Tailwind theme preset for the Cassette J-Card style DNA.","dnas":["cassette-jcard"]}
/** TZ-taste DNA: Cassette J-Card — Tailwind preset. Extend your tailwind.config with this. */
module.exports = {
 "content": ["./src/**/*.{html,js,ts,jsx,tsx}"],
 "theme": {
  "extend": {
   "colors": {
    "tz-bg": "#f2ede0",
    "tz-ink": "#1e1c18",
    "tz-accent": "#c2452d",
    "tz-muted": "#75705f",
    "tz-line": "#1e1c1826",
    "tz-surface": "#e3dac2"
   },
   "fontFamily": {
    "display": ["Archivo Black"],
    "body": ["Archivo"],
    "mono": ["Courier Prime"]
   }
  }
 },
 "plugins": []
};
