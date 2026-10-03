const {chromium}=require('C:/Users/rjcot/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert=require('node:assert/strict');
(async()=>{const browser=await chromium.launch({channel:'chrome',headless:true});try{
 const page=await browser.newPage({viewport:{width:1440,height:1000}});const errors=[];page.on('pageerror',e=>errors.push(e.message));
 const base=process.argv[2]||'http://127.0.0.1:4181';
 await page.goto(base+'/365-days/projects/day-006');await page.locator('.card').last().waitFor();assert.equal(await page.locator('.card').count(),9);
 await page.getByRole('button',{name:'Preview Quiet studio',exact:true}).click();assert(await page.locator('#detail').evaluate(e=>e.open));await page.locator('#save-item').click();await page.getByRole('button',{name:'Close preview'}).click();
 await page.reload();await page.locator('.card').last().waitFor();await page.locator('#saved').click();assert.equal(await page.locator('.card').count(),1);await page.locator('#saved').click();
 await page.locator('#search').fill('violet');assert.equal(await page.locator('.card').count(),1);await page.locator('#search').fill('');
 await page.locator('#add').click();await page.locator('[name=title]').fill('My reference');await page.locator('[name=url]').fill('https://example.com');await page.locator('[name=notes]').fill('Large headings and quiet colors');await page.locator('#reference-form button').click();assert.equal(await page.locator('.card').count(),10);
 await page.locator('[name=project]').fill('Test project');await page.locator('#preferences button[type=submit]').click();const dl=page.waitForEvent('download');await page.locator('#brief').click();assert.equal((await dl).suggestedFilename(),'tz-taste-brief.md');
 await page.screenshot({path:__dirname+'/desktop.png'});
 await page.setViewportSize({width:390,height:844});assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));await page.screenshot({path:__dirname+'/mobile.png'});
 await page.goto(base+'/365-days');await page.locator('.recent-card').first().waitFor();assert.equal(await page.locator('.recent-card').count(),6);assert.equal(await page.locator('.month-folder[data-month="2026-10"]').getAttribute('open'),'');assert((await page.locator('.recent-card').first().getAttribute('href')).endsWith('day-006'));
 assert.deepEqual(errors,[]);console.log('PASS: previews, persistence, search, custom reference, brief download, mobile overflow, six archive links, October open; no page errors.');
}finally{await browser.close()}})().catch(e=>{console.error(e);process.exitCode=1});
