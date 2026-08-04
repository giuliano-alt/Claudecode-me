const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, Table, TableRow,
  TableCell, WidthType, BorderStyle, ShadingType, PageOrientation, PageBreak, Header,
  Footer, PageNumber, LevelFormat, VerticalAlign
} = require('docx');

const { meta, blocks } = require('./report.js');

const NAVY = '1F3864', ACCENT = '2E5C8A', RULE = 'B4C3D8', ZEBRA = 'F1F5FA', FLAG = 'B45309';
const BODY = 'Times New Roman', HEAD = 'Arial';
const W_PORT = 9638, W_LAND = 14570;

const t = (text, o = {}) => new TextRun({
  text, font: o.font || BODY, size: o.size || 21, bold: !!o.bold,
  italics: !!o.italics, color: o.color
});

// **grassetto**, *corsivo*, [[segnaposto]]
function runs(text, o = {}) {
  const out = [];
  const re = /(\*\*[^*]+\*\*|\[\[[^\]]+\]\]|\*[^*]+\*)/g;
  let last = 0, m;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(t(text.slice(last, m.index), o));
    const tok = m[0];
    if (tok.startsWith('**')) out.push(t(tok.slice(2, -2), { ...o, bold: true }));
    else if (tok.startsWith('[[')) out.push(t(tok.slice(2, -2), { ...o, bold: true, italics: true, color: FLAG }));
    else out.push(t(tok.slice(1, -1), { ...o, italics: true }));
    last = m.index + tok.length;
  }
  if (last < text.length) out.push(t(text.slice(last), o));
  return out;
}

const para = (text, o = {}) => new Paragraph({
  children: runs(text, o),
  alignment: o.align || AlignmentType.JUSTIFIED,
  spacing: { before: o.before || 0, after: o.after === undefined ? 140 : o.after, line: 276 }
});

const spacer = (h = 140) => new Paragraph({ spacing: { after: h }, children: [t('')] });

const NOBORDER = { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' };
const thin = (c) => ({ style: BorderStyle.SINGLE, size: 4, color: c || RULE });
const A = { center: AlignmentType.CENTER, right: AlignmentType.RIGHT };

function tableOf(spec, width) {
  const cols = spec.cols.map(f => Math.round(f * width));
  cols[cols.length - 1] += width - cols.reduce((a, b) => a + b, 0); // arrotondamento
  const size = spec.small ? 16 : 17;
  const trs = [];
  const ha = spec.headAlign || spec.align || [];
  if (spec.head) {
    trs.push(new TableRow({
      tableHeader: true,
      children: spec.head.map((h, i) => new TableCell({
        width: { size: cols[i], type: WidthType.DXA },
        shading: { type: ShadingType.CLEAR, fill: NAVY, color: 'auto' },
        verticalAlign: VerticalAlign.CENTER,
        margins: { top: 70, bottom: 70, left: 100, right: 100 },
        borders: { top: thin(NAVY), bottom: thin(NAVY), left: thin(NAVY), right: thin(NAVY) },
        children: [new Paragraph({
          alignment: A[ha[i]] || AlignmentType.LEFT,
          spacing: { after: 0, line: 240 },
          children: [t(h, { font: HEAD, size: size - 1, bold: true, color: 'FFFFFF' })]
        })]
      }))
    }));
  }
  spec.rows.forEach((r, ri) => {
    trs.push(new TableRow({
      children: r.map((cx, i) => new TableCell({
        width: { size: cols[i], type: WidthType.DXA },
        shading: ri % 2 === 1 ? { type: ShadingType.CLEAR, fill: ZEBRA, color: 'auto' } : undefined,
        verticalAlign: VerticalAlign.CENTER,
        margins: { top: 70, bottom: 70, left: 100, right: 100 },
        borders: { top: thin(), bottom: thin(), left: thin(), right: thin() },
        children: [new Paragraph({
          alignment: A[(spec.align || [])[i]] || AlignmentType.LEFT,
          spacing: { after: 0, line: 240 },
          children: runs(String(cx), { size, bold: spec.boldFirst && i === 0 })
        })]
      }))
    }));
  });
  return new Table({ columnWidths: cols, width: { size: width, type: WidthType.DXA }, rows: trs });
}

function boxOf(spec, width) {
  const warn = spec.kind === 'warn';
  const kids = [];
  if (spec.title) kids.push(new Paragraph({
    spacing: { after: 90, line: 240 },
    children: [t(spec.title, { font: HEAD, size: 19, bold: true, color: warn ? FLAG : NAVY })]
  }));
  spec.lines.forEach((x, i) => kids.push(new Paragraph({
    alignment: AlignmentType.JUSTIFIED,
    spacing: { after: i === spec.lines.length - 1 ? 0 : 90, line: 264 },
    children: runs(x, { size: 19 })
  })));
  return new Table({
    columnWidths: [width], width: { size: width, type: WidthType.DXA },
    rows: [new TableRow({ children: [new TableCell({
      width: { size: width, type: WidthType.DXA },
      shading: { type: ShadingType.CLEAR, fill: warn ? 'FDF6EC' : 'F5F7FA', color: 'auto' },
      margins: { top: 160, bottom: 160, left: 200, right: 200 },
      borders: {
        top: thin(warn ? 'E8D5B7' : RULE), bottom: thin(warn ? 'E8D5B7' : RULE),
        right: thin(warn ? 'E8D5B7' : RULE),
        left: { style: BorderStyle.SINGLE, size: 18, color: warn ? FLAG : NAVY }
      },
      children: kids
    })] })]
  });
}

/* ---- renderer dei blocchi ---- */
function render(bs, width) {
  const out = [];
  for (const b of bs) {
    if (b.land) continue;
    if (b.h === 1) {
      out.push(new Paragraph({
        heading: HeadingLevel.HEADING_1,
        spacing: { before: 360, after: 180 },
        border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: NAVY, space: 6 } },
        children: [t(`${b.n}. ${b.t.toUpperCase()}`, { font: HEAD, size: 26, bold: true, color: NAVY })]
      }));
    } else if (b.h === 2) {
      out.push(new Paragraph({
        heading: HeadingLevel.HEADING_2, spacing: { before: 260, after: 120 },
        children: [t(`${b.n} ${b.t}`, { font: HEAD, size: 23, bold: true, color: ACCENT })]
      }));
    } else if (b.h === 3) {
      out.push(new Paragraph({
        heading: HeadingLevel.HEADING_3, spacing: { before: 180, after: 100 },
        children: [t(b.t, { font: HEAD, size: 21, bold: true, color: '333333' })]
      }));
    } else if (b.p !== undefined) {
      out.push(para(b.p, { after: b.tight ? 90 : (b.accent ? 200 : 140) }));
    } else if (b.note) {
      out.push(new Paragraph({
        alignment: AlignmentType.JUSTIFIED, spacing: { after: 140, line: 264 },
        children: runs(b.note, { size: 18, italics: true, color: '5A5A5A' })
      }));
    } else if (b.ul) {
      b.ul.forEach(x => out.push(new Paragraph({
        numbering: { reference: 'punti', level: 0 },
        children: runs(x), alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 90, line: 276 }
      })));
      out.push(spacer(40));
    } else if (b.table) {
      out.push(tableOf(b.table, width));
      out.push(spacer(160));
    } else if (b.box) {
      out.push(spacer(60));
      out.push(boxOf(b.box, width));
      out.push(spacer(160));
    } else if (b.signature) {
      out.push(spacer(500));
      out.push(tableOf({
        cols: [0.5, 0.5], head: null,
        rows: [[b.signature[0], b.signature[1]], ['', ''], ['', '_______________________________']],
        align: [null, 'center']
      }, width));
      out.push(spacer(300));
    }
  }
  return out;
}

/* ---- suddivisione in sezioni portrait / landscape ---- */
const parts = [];
let cur = { land: false, bs: [] };
for (const b of blocks) {
  if (b.land === 'start') { parts.push(cur); cur = { land: true, bs: [] }; continue; }
  if (b.land === 'end') { parts.push(cur); cur = { land: false, bs: [] }; continue; }
  cur.bs.push(b);
}
parts.push(cur);

/* ---- copertina e indice ---- */
const cover = [
  new Paragraph({ spacing: { after: 0 }, alignment: AlignmentType.CENTER,
    children: [t(meta.ente, { font: HEAD, size: 24, bold: true, color: NAVY })] }),
  new Paragraph({ spacing: { after: 700, before: 60 }, alignment: AlignmentType.CENTER,
    border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: NAVY, space: 8 } },
    children: [t(meta.progetto, { font: HEAD, size: 19, color: ACCENT })] }),
  new Paragraph({ spacing: { after: 160 }, alignment: AlignmentType.CENTER,
    children: [t(meta.titolo, { font: HEAD, size: 44, bold: true, color: NAVY })] }),
  new Paragraph({ spacing: { after: 120 }, alignment: AlignmentType.CENTER,
    children: [t(meta.sotto1, { font: HEAD, size: 30, bold: true, color: '333333' })] }),
  new Paragraph({ spacing: { after: 500 }, alignment: AlignmentType.CENTER,
    children: [t(meta.sotto2, { font: HEAD, size: 30, bold: true, color: '333333' })] }),
  new Paragraph({ spacing: { after: 800 }, alignment: AlignmentType.CENTER,
    children: [t(meta.claim, { size: 24, italics: true, color: ACCENT })] }),
  tableOf({ cols: [0.31, 0.69], head: null, rows: meta.frontespizio, boldFirst: true }, W_PORT),
  spacer(600),
  boxOf({ kind: 'warn', title: meta.privacy.title, lines: [meta.privacy.text] }, W_PORT),

  new Paragraph({ children: [new PageBreak()] }),
  new Paragraph({
    heading: HeadingLevel.HEADING_1, spacing: { before: 0, after: 180 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: NAVY, space: 6 } },
    children: [t('INDICE', { font: HEAD, size: 26, bold: true, color: NAVY })]
  }),
  ...meta.toc.map(([n, txt, lvl]) => new Paragraph({
    spacing: { after: 70, line: 240 }, alignment: AlignmentType.LEFT,
    indent: { left: lvl ? 500 : 0 },
    children: [t(`${n}.  ${txt}`, { size: 21, bold: !lvl })]
  })),
  new Paragraph({ children: [new PageBreak()] })
];

const hdr = new Header({ children: [new Paragraph({
  alignment: AlignmentType.RIGHT, spacing: { after: 60 },
  border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: RULE, space: 4 } },
  children: [t(meta.runningHead, { font: HEAD, size: 15, color: '7A7A7A' })]
})] });

const ftr = new Footer({ children: [new Paragraph({
  alignment: AlignmentType.CENTER, spacing: { before: 60 },
  border: { top: { style: BorderStyle.SINGLE, size: 4, color: RULE, space: 4 } },
  children: [
    t(meta.footer + '  —  pag. ', { font: HEAD, size: 15, color: '7A7A7A' }),
    new TextRun({ children: [PageNumber.CURRENT], font: HEAD, size: 15, color: '7A7A7A' }),
    t(' di ', { font: HEAD, size: 15, color: '7A7A7A' }),
    new TextRun({ children: [PageNumber.TOTAL_PAGES], font: HEAD, size: 15, color: '7A7A7A' })
  ]
})] });

const MARGIN = { top: 1134, right: 1134, bottom: 1134, left: 1134 };

const sections = parts.filter(p => p.bs.length).map((pt, i) => ({
  properties: {
    page: {
      margin: MARGIN,
      ...(pt.land ? { size: { orientation: PageOrientation.LANDSCAPE } } : {})
    }
  },
  headers: i === 0 ? undefined : { default: hdr },
  footers: { default: ftr },
  children: i === 0
    ? [...cover, ...render(pt.bs, W_PORT)]
    : render(pt.bs, pt.land ? W_LAND : W_PORT)
}));

const doc = new Document({
  creator: 'Consulente all’orientamento al lavoro',
  title: 'Relazione tecnica — Servizio di orientamento al lavoro — SAI PROG-684-PR Santa Elisabetta 2026',
  description: 'Strutturazione del servizio di orientamento al lavoro, borse lavoro, rete territoriale, tirocini e formazione. Annualità 2026.',
  numbering: { config: [{ reference: 'punti', levels: [
    { level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT,
      style: { paragraph: { indent: { left: 360, hanging: 250 } } } },
    { level: 1, format: LevelFormat.BULLET, text: '–', alignment: AlignmentType.LEFT,
      style: { paragraph: { indent: { left: 720, hanging: 250 } } } }
  ] }] },
  styles: { default: { document: { run: { font: BODY, size: 21 }, paragraph: { spacing: { line: 276 } } } } },
  sections
});

Packer.toBuffer(doc).then(buf => {
  const out = process.argv[2] || 'relazione.docx';
  fs.writeFileSync(out, buf);
  console.log('DOCX scritto:', out, (buf.length / 1024).toFixed(1) + ' KB —', sections.length, 'sezioni');
});
