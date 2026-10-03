// Export only this public app into the existing private site's static route.
const fs=require('node:fs'),path=require('node:path');
const site=path.resolve(__dirname,'../production');
const publicRepo=path.resolve(__dirname,'../365-days-of-programming-starting-09-28-2026-');
const target=path.join(site,'dist/365-days/projects/day-006');
fs.mkdirSync(target,{recursive:true});
for(const name of ['index.html','style.css','app.js','catalog.json','llms.txt','LICENSE'])fs.copyFileSync(path.join(__dirname,name),path.join(target,name));
const html=fs.readFileSync(path.join(__dirname,'index.html'),'utf8').replace('<head>','<head><base href="/365-days/projects/day-006/">');
fs.writeFileSync(path.join(site,'dist/365-days/projects/day-006.html'),html);
const entry={day:6,date:'2026-10-03',title:'TZ Taste — Your Design Reference Studio',kind:'Website / Design tools',summary:'Explore working visual examples, save your own references, and export a design brief with reusable code. Free, local, and open source.',status:'published',sourcePath:'days/day-006',demoUrl:'https://rawmware.com/365-days/projects/day-006',notes:['Nine original HTML/CSS studies include live previews and source downloads.','Personal references, screenshots, favorites, and preferences stay in your browser; export a backup to move them between devices.','Markdown briefs, a public JSON catalog, and llms.txt let designers, developers, and AI tools reference the work without an AI service.']};
for(const file of [path.join(site,'docs/challenge.json'),path.join(publicRepo,'challenge.json')]){
 const data=JSON.parse(fs.readFileSync(file,'utf8'));data.entries=data.entries.filter(x=>x.day!==6);data.entries.push(entry);fs.writeFileSync(file,JSON.stringify(data,null,2)+'\n');
}
require('node:child_process').execFileSync(process.execPath,['build-challenge.cjs'],{cwd:site,stdio:'inherit'});
const archive=path.join(site,'dist/365-days.html');fs.writeFileSync(archive,fs.readFileSync(archive,'utf8').replace('</head>','<link rel="stylesheet" href="/archive-refresh.css"><script src="/archive-refresh.js" defer></script></head>'));
