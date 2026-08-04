const fs = require('fs');
const { meta, blocks } = require('./report.js');

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// **grassetto**, *corsivo*, [[segnaposto]]
function inline(text) {
  return esc(text)
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\[\[([^\]]+)\]\]/g, '<span class="flag">$1</span>')
    .replace(/(^|[\s(])\*([^*]+)\*/g, '$1<em>$2</em>');
}

const slug = n => 'sez-' + String(n).replace(/\./g, '-');

function statoClass(s) {
  const x = s.toLowerCase();
  if (x.startsWith('conclusa')) return 'ok';
  if (x.startsWith('in corso')) return 'run';
  if (x.startsWith('interrotta')) return 'stop';
  if (x.startsWith('non avviata')) return 'wait';
  return '';
}

function renderTable(spec) {
  const cls = ['dt', spec.small ? 'sm' : '', spec.head ? '' : 'nohead'].filter(Boolean).join(' ');
  const cg = '<colgroup>' + spec.cols.map(f => `<col style="width:${(f * 100).toFixed(2)}%">`).join('') + '</colgroup>';
  const th = spec.head
    ? '<thead><tr>' + spec.head.map((h, i) =>
        `<th class="${(spec.align || [])[i] || ''}">${inline(h)}</th>`).join('') + '</tr></thead>'
    : '';
  const tb = '<tbody>' + spec.rows.map(r => '<tr>' + r.map((c, i) => {
    const a = (spec.align || [])[i] || '';
    const b = spec.boldFirst && i === 0 ? ' lbl' : '';
    return `<td class="${a}${b}">${inline(String(c))}</td>`;
  }).join('') + '</tr>').join('') + '</tbody>';

  const table = `<div class="tw"><table class="${cls}">${cg}${th}${tb}</table></div>`;

  if (!spec.cards) return table;

  const cards = '<div class="cards">' + spec.cards.map(c => `
    <article class="card">
      <div class="card-h">
        <div><h4>${inline(c.title)}</h4><span class="sub">${esc(c.sub)}</span></div>
        <span class="badge ${statoClass(c.badge)}">${esc(c.badge)}</span>
      </div>
      <dl>${c.fields.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join('')}</dl>
    </article>`).join('') + '</div>';

  return cards + table;
}

function renderBox(b) {
  return `<aside class="box ${b.kind}">
    ${b.title ? `<h4>${inline(b.title)}</h4>` : ''}
    ${b.lines.map(l => `<p>${inline(l)}</p>`).join('')}
  </aside>`;
}

let html = '';
let openLand = false;
for (const b of blocks) {
  if (b.land === 'start') { html += '<div class="landscape">'; openLand = true; continue; }
  if (b.land === 'end') { html += '</div>'; openLand = false; continue; }

  if (b.h === 1) html += `<h2 id="${slug(b.n)}" class="s1"><span class="num">${esc(b.n)}</span>${inline(b.t)}</h2>`;
  else if (b.h === 2) html += `<h3 id="${slug(b.n)}" class="s2"><span class="num2">${esc(b.n)}</span>${inline(b.t)}</h3>`;
  else if (b.h === 3) html += `<h4 class="s3">${inline(b.t)}</h4>`;
  else if (b.p !== undefined) html += `<p${b.accent ? ' class="fix"' : ''}>${inline(b.p)}</p>`;
  else if (b.note) html += `<p class="note">${inline(b.note)}</p>`;
  else if (b.ul) html += '<ul>' + b.ul.map(x => `<li>${inline(x)}</li>`).join('') + '</ul>';
  else if (b.table) html += renderTable(b.table);
  else if (b.box) html += renderBox(b.box);
  else if (b.signature) html += `<div class="sign"><div>${esc(b.signature[0])}</div><div><span>${esc(b.signature[1])}</span><span class="line"></span></div></div>`;
}
if (openLand) html += '</div>';

const toc = meta.toc.map(([n, txt, lvl]) =>
  `<li class="${lvl ? 'l1' : 'l0'}"><a href="#${slug(n)}"><span>${esc(n)}</span>${esc(txt)}</a></li>`).join('');

const page = `<!doctype html>
<html lang="it">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Relazione servizio orientamento al lavoro — SAI PROG-684-PR Santa Elisabetta 2026</title>
<style>
:root{
  --navy:#1F3864; --accent:#2E5C8A; --rule:#D6DEEA; --zebra:#F4F7FB;
  --ink:#1B1D21; --muted:#5C6470; --bg:#FFFFFF; --card:#FBFCFE;
  --flag:#B45309; --flagbg:#FDF6EC; --flagline:#EAD9BC;
  --ok:#1B7F4B; --okbg:#E7F5ED; --run:#1F5FA8; --runbg:#E8F0FA;
  --stop:#B3261E; --stopbg:#FBEBEA; --wait:#8A6100; --waitbg:#FCF3E0;
}
@media (prefers-color-scheme: dark){
  :root{
    --navy:#9FBBE4; --accent:#7FA3D2; --rule:#333A45; --zebra:#1B1F26;
    --ink:#E6E8EC; --muted:#9AA3B0; --bg:#121519; --card:#1A1E24;
    --flag:#E0A458; --flagbg:#241D12; --flagline:#4A3A20;
    --ok:#6FD69B; --okbg:#12291D; --run:#8FB8EC; --runbg:#141F2E;
    --stop:#F09189; --stopbg:#2B1614; --wait:#E2BE72; --waitbg:#271F0F;
  }
}
*{box-sizing:border-box}
html{-webkit-text-size-adjust:100%}
body{
  margin:0; background:var(--bg); color:var(--ink);
  font:400 16.5px/1.65 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  text-rendering:optimizeLegibility;
}
.wrap{max-width:860px; margin:0 auto; padding:22px 18px 70px}

/* --- copertina --- */
.cover{border-bottom:3px solid var(--navy); padding-bottom:26px; margin-bottom:26px}
.cover .ente{font-size:.82rem; font-weight:700; letter-spacing:.09em; color:var(--navy); text-transform:uppercase}
.cover .prog{font-size:.8rem; color:var(--accent); margin-top:4px; padding-bottom:14px; border-bottom:1px solid var(--rule)}
.cover h1{font-size:clamp(1.6rem,6.2vw,2.5rem); line-height:1.15; margin:20px 0 6px; color:var(--navy); letter-spacing:-.01em}
.cover .sub{font-size:clamp(.98rem,3.4vw,1.22rem); font-weight:600; color:var(--ink); margin:0}
.cover .claim{margin-top:14px; font-style:italic; color:var(--accent); font-size:.95rem}

/* --- frontespizio --- */
.meta{margin:22px 0 0; border-top:1px solid var(--rule)}
.meta div{display:flex; gap:12px; padding:8px 0; border-bottom:1px solid var(--rule); font-size:.9rem}
.meta dt,.meta b{flex:0 0 42%; font-weight:700; color:var(--muted)}
.meta span{flex:1}

/* --- indice --- */
.toc{margin:26px 0 8px; padding:18px 18px 14px; background:var(--zebra); border-radius:10px}
.toc h3{margin:0 0 10px; font-size:.78rem; letter-spacing:.11em; text-transform:uppercase; color:var(--navy)}
.toc ol{list-style:none; margin:0; padding:0}
.toc li{margin:0}
.toc a{display:flex; gap:10px; padding:5px 0; color:var(--ink); text-decoration:none; font-size:.92rem; border-bottom:1px solid transparent}
.toc a:hover{color:var(--accent)}
.toc a span{flex:0 0 2.6em; color:var(--accent); font-weight:700; font-variant-numeric:tabular-nums}
.toc .l0>a{font-weight:600}
.toc .l1>a{padding-left:1.6em; font-size:.87rem; color:var(--muted)}

/* --- titoli --- */
h2.s1{
  display:flex; gap:12px; align-items:baseline;
  font-size:clamp(1.14rem,4.4vw,1.42rem); line-height:1.25; color:var(--navy);
  margin:44px 0 14px; padding-bottom:9px; border-bottom:2px solid var(--navy);
  scroll-margin-top:14px;
}
h2.s1 .num{flex:0 0 auto; font-variant-numeric:tabular-nums; opacity:.55}
h3.s2{font-size:clamp(1rem,3.6vw,1.13rem); color:var(--accent); margin:30px 0 10px; scroll-margin-top:14px}
h3.s2 .num2{margin-right:8px; opacity:.6; font-variant-numeric:tabular-nums}
h4.s3{font-size:.99rem; color:var(--ink); margin:22px 0 7px}

p{margin:0 0 12px; text-align:justify; hyphens:auto}
p.note{font-size:.85rem; color:var(--muted); font-style:italic}
p.fix{border-left:3px solid var(--accent); padding-left:12px; background:var(--zebra); padding:9px 12px; border-radius:0 6px 6px 0; margin-bottom:18px}
ul{margin:0 0 14px; padding-left:1.15em}
li{margin:0 0 7px; text-align:justify}
strong{font-weight:700}
.flag{color:var(--flag); font-weight:700; font-style:italic}

/* --- tabelle --- */
.tw{overflow-x:auto; -webkit-overflow-scrolling:touch; margin:0 0 20px; border-radius:8px}
table.dt{width:100%; min-width:520px; border-collapse:collapse; font-size:.86rem}
table.dt.sm{font-size:.8rem; min-width:640px}
.landscape table.dt{min-width:940px}
table.dt th{
  background:var(--navy); color:#fff; text-align:left; font-weight:700;
  padding:8px 9px; font-size:.79rem; line-height:1.3; vertical-align:middle;
}
table.dt td{padding:7px 9px; border:1px solid var(--rule); vertical-align:top; line-height:1.45}
table.dt tbody tr:nth-child(even){background:var(--zebra)}
table.dt td.center,table.dt th.center{text-align:center}
table.dt td.right,table.dt th.right{text-align:right; font-variant-numeric:tabular-nums}
table.dt td.lbl{font-weight:700; color:var(--muted)}
table.dt.nohead td:first-child{background:var(--zebra)}

/* --- card mobile --- */
.cards{display:none}
.card{background:var(--card); border:1px solid var(--rule); border-radius:11px; padding:13px 14px; margin:0 0 11px}
.card-h{display:flex; justify-content:space-between; align-items:flex-start; gap:10px; margin-bottom:10px}
.card h4{margin:0; font-size:.99rem; color:var(--navy); line-height:1.3}
.card .sub{font-size:.76rem; color:var(--muted); font-variant-numeric:tabular-nums}
.badge{flex:0 0 auto; font-size:.68rem; font-weight:700; padding:3px 8px; border-radius:20px; text-align:center; max-width:9.5em; line-height:1.3}
.badge.ok{background:var(--okbg); color:var(--ok)}
.badge.run{background:var(--runbg); color:var(--run)}
.badge.stop{background:var(--stopbg); color:var(--stop)}
.badge.wait{background:var(--waitbg); color:var(--wait)}
.card dl{display:grid; grid-template-columns:auto 1fr; gap:5px 12px; margin:0; font-size:.85rem}
.card dt{color:var(--muted); font-weight:600}
.card dd{margin:0}

/* --- riquadri --- */
.box{background:var(--zebra); border:1px solid var(--rule); border-left:4px solid var(--navy);
     border-radius:0 8px 8px 0; padding:14px 16px; margin:18px 0 22px}
.box h4{margin:0 0 8px; font-size:.92rem; color:var(--navy)}
.box p{margin:0 0 7px; font-size:.88rem; text-align:left}
.box p:last-child{margin-bottom:0}
.box.warn{background:var(--flagbg); border-color:var(--flagline); border-left-color:var(--flag)}
.box.warn h4{color:var(--flag)}

/* --- firma --- */
.sign{display:flex; justify-content:space-between; gap:20px; margin:52px 0 30px; font-size:.9rem; flex-wrap:wrap}
.sign>div:last-child{text-align:center}
.sign .line{display:block; margin-top:40px; border-top:1px solid var(--ink); min-width:230px}

.pagefoot{margin-top:40px; padding-top:14px; border-top:1px solid var(--rule);
          font-size:.76rem; color:var(--muted); text-align:center}

/* --- mobile (solo a schermo: in stampa la larghezza A4 ricadrebbe in questa soglia) --- */
@media screen and (max-width:760px){
  .wrap{padding:18px 14px 60px}
  body{font-size:16px}
  p,li{text-align:left}
  .landscape .cards{display:block}
  .landscape .tw{display:none}
  .meta div{flex-direction:column; gap:2px}
  .meta dt,.meta b{flex:none}
  table.dt{min-width:430px; font-size:.82rem}
}

/* --- stampa / PDF --- */
@page{size:A4 portrait; margin:17mm 15mm 16mm}
@page land{size:A4 landscape; margin:14mm 12mm}
@media print{
  :root{
    --navy:#1F3864; --accent:#2E5C8A; --rule:#B4C3D8; --zebra:#F1F5FA;
    --ink:#000; --muted:#4A4A4A; --bg:#fff; --card:#fff;
    --flag:#B45309; --flagbg:#FDF6EC; --flagline:#E8D5B7;
  }
  body{font:400 10.2pt/1.48 "Times New Roman",Georgia,serif; color:#000; background:#fff}
  .wrap{max-width:none; margin:0; padding:0}
  .cover{min-height:0; page-break-after:always; border-bottom:none; text-align:center; padding-top:24mm}
  .cover p{text-align:center}
  .cover .prog{border-bottom:1px solid var(--rule); padding-bottom:10pt}
  .cover .box p{text-align:justify}
  .cover h1{font-size:30pt; margin:26pt 0 8pt}
  .cover .sub{font-size:15pt}
  .cover .claim{font-size:11pt; margin-top:18pt}
  .meta{margin-top:34pt; text-align:left}
  .meta div{font-size:9.5pt; padding:5pt 0}
  .toc{page-break-after:always; background:none; padding:0; margin:0}
  .toc a{font-size:10.5pt}
  .toc a:hover{color:inherit}
  h2.s1,h3.s2,h4.s3{page-break-after:avoid; break-after:avoid-page; font-family:Arial,Helvetica,sans-serif}
  h2.s1{font-size:13.5pt; margin:20pt 0 9pt; page-break-before:auto}
  h3.s2{font-size:11.5pt; margin:14pt 0 6pt}
  h4.s3{font-size:10.5pt; margin:11pt 0 4pt}
  p,li{orphans:3; widows:3}
  .cards{display:none !important}
  .tw{overflow:visible; display:block !important}
  table.dt{min-width:0 !important; width:100%; font-size:8.4pt; page-break-inside:avoid}
  table.dt.sm{font-size:7.8pt}
  table.dt th{font-size:8pt; font-family:Arial,Helvetica,sans-serif; padding:4pt 4pt;
              -webkit-print-color-adjust:exact; print-color-adjust:exact}
  table.dt td{padding:3.5pt 4pt}
  table.dt tbody tr{page-break-inside:avoid}
  .box,.sign{page-break-inside:avoid}
  .box{-webkit-print-color-adjust:exact; print-color-adjust:exact}
  table.dt tbody tr:nth-child(even){-webkit-print-color-adjust:exact; print-color-adjust:exact}
  .landscape{page:land; page-break-before:always; page-break-after:always}
  .landscape table.dt{font-size:8pt}
  .pagefoot{display:none}
  a{color:inherit; text-decoration:none}
}
</style>
</head>
<body>
<div class="wrap">

<header class="cover">
  <div class="ente">${esc(meta.ente)}</div>
  <div class="prog">${esc(meta.progetto)}</div>
  <h1>${esc(meta.titolo)}</h1>
  <p class="sub">${esc(meta.sotto1)}<br>${esc(meta.sotto2)}</p>
  <div class="claim">${esc(meta.claim)}</div>
  <div class="meta">
    ${meta.frontespizio.map(([k, v]) => `<div><b>${esc(k)}</b><span>${esc(v)}</span></div>`).join('')}
  </div>
  ${renderBox({ kind: 'warn', title: meta.privacy.title, lines: [meta.privacy.text] })}
</header>

<nav class="toc">
  <h3>Indice</h3>
  <ol>${toc}</ol>
</nav>

<main>
${html}
</main>

<div class="pagefoot">${esc(meta.footer)}</div>
</div>
</body>
</html>`;

const out = process.argv[2] || 'relazione.html';
fs.writeFileSync(out, page);
console.log('HTML scritto:', out, (Buffer.byteLength(page) / 1024).toFixed(1) + ' KB');
