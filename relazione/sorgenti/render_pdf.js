/* HTML -> PDF con Chromium via CDP, per poter iniettare il piè di pagina numerato
   (il CLI --print-to-pdf non accetta template). */
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const CHROME = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';
const srcHtml = path.resolve(process.argv[2]);
const outPdf = path.resolve(process.argv[3]);
const PORT = 9333;

const FOOT = `
<div style="font-family:Arial,Helvetica,sans-serif;font-size:7.5pt;color:#7A7A7A;
            width:100%;padding:0 15mm;text-align:center;-webkit-print-color-adjust:exact;">
  Associazione Culturale Cometa ETS &nbsp;—&nbsp; documento riservato &nbsp;—&nbsp;
  pag. <span class="pageNumber"></span> di <span class="totalPages"></span>
</div>`;
const EMPTY = '<div></div>';

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function getJSON(url) {
  const r = await fetch(url);
  return r.json();
}

(async () => {
  const chrome = spawn(CHROME, [
    '--headless', '--disable-gpu', '--no-sandbox', '--hide-scrollbars',
    '--disable-dev-shm-usage', '--no-first-run',
    `--remote-debugging-port=${PORT}`, 'about:blank'
  ], { stdio: ['ignore', 'ignore', 'ignore'] });

  // attesa dell'endpoint di debug
  let ver = null;
  for (let i = 0; i < 60; i++) {
    try { ver = await getJSON(`http://127.0.0.1:${PORT}/json/version`); break; }
    catch { await sleep(250); }
  }
  if (!ver) { chrome.kill(); throw new Error('Chromium: endpoint CDP non disponibile'); }

  const tab = await getJSON(`http://127.0.0.1:${PORT}/json/new?about:blank`)
    .catch(async () => (await getJSON(`http://127.0.0.1:${PORT}/json/list`))[0]);

  const ws = new WebSocket(tab.webSocketDebuggerUrl);
  let id = 0;
  const pending = new Map();
  const events = [];

  ws.addEventListener('message', ev => {
    const msg = JSON.parse(ev.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      msg.error ? reject(new Error(JSON.stringify(msg.error))) : resolve(msg.result);
    } else if (msg.method) events.push(msg.method);
  });

  const send = (method, params = {}) => new Promise((resolve, reject) => {
    const mid = ++id;
    pending.set(mid, { resolve, reject });
    ws.send(JSON.stringify({ id: mid, method, params }));
  });

  await new Promise((res, rej) => {
    ws.addEventListener('open', res, { once: true });
    ws.addEventListener('error', rej, { once: true });
  });

  await send('Page.enable');
  await send('Page.navigate', { url: 'file://' + srcHtml });

  for (let i = 0; i < 80; i++) {
    if (events.includes('Page.loadEventFired')) break;
    await sleep(100);
  }
  await sleep(600); // assestamento del layout

  const { data } = await send('Page.printToPDF', {
    printBackground: true,
    preferCSSPageSize: true,      // rispetta @page, comprese le pagine orizzontali
    displayHeaderFooter: true,
    headerTemplate: EMPTY,
    footerTemplate: FOOT,
    marginTop: 0.67, marginBottom: 0.63, marginLeft: 0.59, marginRight: 0.59
  });

  fs.writeFileSync(outPdf, Buffer.from(data, 'base64'));
  ws.close();
  chrome.kill();
  console.log('PDF scritto:', outPdf, (fs.statSync(outPdf).size / 1024).toFixed(1) + ' KB');
  process.exit(0);
})().catch(e => { console.error('ERRORE:', e.message); process.exit(1); });
