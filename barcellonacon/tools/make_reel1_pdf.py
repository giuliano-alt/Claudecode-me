# -*- coding: utf-8 -*-
"""Reel 1 BarcellonaCon — PDF DA SET, formato iPhone (9:16, 320x568 pt).
Ordinato per blocco di ripresa, parlato in formato gobbo, take spuntabili."""

from reportlab.lib.colors import HexColor, white
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (BaseDocTemplate, Frame, HRFlowable, PageBreak,
                                PageTemplate, Paragraph, Spacer, Table,
                                TableStyle)

pdfmetrics.registerFont(TTFont("DVS", "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"))
pdfmetrics.registerFont(TTFont("DVS-Bold", "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"))

PAGE = (320, 568)
M = 18
ACCENT = HexColor("#D81B60")
BLUE = HexColor("#0B5FA5")
DARK = HexColor("#141414")
GRAY = HexColor("#6B6B6B")
LIGHT = HexColor("#F3F3F6")
GOLD = HexColor("#E8A400")

OUT = "/tmp/claude-0/-home-user-Claudecode-me/b8b01e4a-c858-5d88-a526-a95b6c8be5f4/scratchpad/BarcellonaCon_Reel1_DaSet.pdf"
W = PAGE[0] - 2 * M

S = {
    "h1": ParagraphStyle("h1", fontName="DVS-Bold", fontSize=20, leading=24, textColor=DARK),
    "sub": ParagraphStyle("sub", fontName="DVS", fontSize=10.5, leading=14, textColor=GRAY),
    "clip": ParagraphStyle("clip", fontName="DVS-Bold", fontSize=18, leading=22, textColor=ACCENT),
    "block": ParagraphStyle("block", fontName="DVS-Bold", fontSize=15, leading=19, textColor=BLUE),
    "lab": ParagraphStyle("lab", fontName="DVS-Bold", fontSize=8, leading=11, textColor=ACCENT, spaceBefore=9),
    "labb": ParagraphStyle("labb", fontName="DVS-Bold", fontSize=8, leading=11, textColor=BLUE, spaceBefore=9),
    "body": ParagraphStyle("body", fontName="DVS", fontSize=10, leading=14, textColor=DARK),
    "gobbo": ParagraphStyle("gobbo", fontName="DVS-Bold", fontSize=15, leading=21, textColor=DARK),
    "sm": ParagraphStyle("sm", fontName="DVS", fontSize=9, leading=12.5, textColor=DARK),
    "tiny": ParagraphStyle("tiny", fontName="DVS", fontSize=8, leading=11, textColor=GRAY),
}


def gobbo_box(text):
    t = Table([[Paragraph(text, S["gobbo"])]], colWidths=[W])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), LIGHT),
        ("LINEBEFORE", (0, 0), (0, -1), 4, ACCENT),
        ("TOPPADDING", (0, 0), (-1, -1), 10),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("RIGHTPADDING", (0, 0), (-1, -1), 8),
    ]))
    return t


def banner(text, color):
    t = Table([[Paragraph(f'<font color="#FFFFFF"><b>{text}</b></font>',
                          ParagraphStyle("b", fontName="DVS-Bold", fontSize=9.5, leading=13))]], colWidths=[W])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), color),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
    ]))
    return t


def sec(story, label, text, style="body", blue=False):
    story.append(Paragraph(label, S["labb" if blue else "lab"]))
    story.append(Paragraph(text, S[style]))


def bullets(story, items, mark="•", style="body", gap=5):
    for it in items:
        story.append(Paragraph(f"{mark}&nbsp;&nbsp;{it}", S[style]))
        story.append(Spacer(1, gap))


story = []

# ══════════ P1 — COPERTINA ══════════
story.append(Spacer(1, 6))
story.append(Paragraph("REEL 1 — «Con 35€»", S["h1"]))
story.append(Paragraph("BarcellonaCon · script da set · pronto per la registrazione", S["sub"]))
story.append(HRFlowable(width="100%", thickness=2.5, color=ACCENT, spaceBefore=8, spaceAfter=6))
sec(story, "DURATA FINALE", "<b>29 secondi</b> · 5 clip parlate + b-roll")
sec(story, "CTA DEL VIDEO", "Giveaway: <b>tagga 3 amici</b> → in palio 2 pass.<br/>Keyword <b>PASS</b> in DM = azione secondaria (solo scritta).")
sec(story, "QUANDO", "<b>Golden hour, ~19:45–21:00.</b><br/>Sole alle spalle di chi riprende: chi parla guarda verso il sole, sfondo mare.")
sec(story, "SI GIRA IN 2", "1 parla · 1 riprende.<br/>Camera <b>posteriore</b>, lente <b>1x</b>, <b>altezza occhi</b>, ~1 metro, telefono dritto (mai dal basso).")
sec(story, "DA PORTARE", "Braccialetto M2DE al polso · gimbal o mano ferma · outfit da sera · telefono carico + spazio libero")
story.append(Spacer(1, 8))
story.append(banner("PRIMA DI GIRARE LA CLIP 5: premio (2 pass) e giorno estrazione confermati col team", GOLD))
story.append(PageBreak())

# ══════════ P2 — ORDINE DI RIPRESA ══════════
story.append(Paragraph("Ordine di ripresa", S["h1"]))
story.append(Paragraph("Non si gira in ordine di clip: si gira per location.", S["sub"]))
story.append(HRFlowable(width="100%", thickness=2.5, color=BLUE, spaceBefore=8, spaceAfter=8))

story.append(banner("BLOCCO A · PASSEIG MARÍTIM (palme + mare)", BLUE))
story.append(Spacer(1, 6))
bullets(story, [
    "<b>CLIP 1</b> — hook · PP fisso <font color='#6B6B6B'>(+ 2ª variante A/B)</font>",
    "<b>CLIP 4</b> — i conti · PP fisso, girato largo",
    "<b>CLIP 5</b> — giveaway · PP fisso",
    "<b>CLIP 2</b> — camminata, serve spazio libero sul marciapiede",
    "<b>B-ROLL</b> — PPP del polso col braccialetto in controluce (3–4 sec)",
], mark="☐")
story.append(Paragraph("Stesso punto luce per 1-4-5: si gira tutto senza spostarsi, cambia solo il testo.", S["tiny"]))
story.append(Spacer(1, 12))

story.append(banner("BLOCCO B · ESTERNO CDLC (Passeig Marítim 32)", BLUE))
story.append(Spacer(1, 6))
bullets(story, [
    "<b>CLIP 3</b> — i club · MB angolo 3/4, <b>insegna leggibile</b> alle spalle",
], mark="☐")
story.append(Paragraph("È sulla stessa via del blocco A: ci si sposta a piedi in pochi minuti.", S["tiny"]))
story.append(PageBreak())

# ══════════ P3 — SETUP + RECITAZIONE ══════════
story.append(Paragraph("Setup telefono", S["h1"]))
story.append(HRFlowable(width="100%", thickness=2.5, color=ACCENT, spaceBefore=8, spaceAfter=6))
bullets(story, [
    "Verticale <b>9:16</b>, 4K se il telefono lo regge",
    "Camera <b>posteriore</b> (mai selfie), lente <b>1x</b>",
    "<b>Controluce</b>: tocca il viso sullo schermo e <b>blocca l'esposizione</b> (tieni premuto → AE/AF)",
    "Modalità aereo o notifiche silenziate",
], mark="☐", gap=6)

story.append(Spacer(1, 10))
story.append(Paragraph("Come recitare", S["h1"]))
story.append(HRFlowable(width="100%", thickness=2.5, color=ACCENT, spaceBefore=8, spaceAfter=6))
bullets(story, [
    "<b>Guarda la lente</b>, non lo schermo",
    "Tono: <b>«do una dritta a un amico»</b>. Mai da venditore, mai urlare",
    "Parla il <b>10% più lento</b> del naturale",
    "Gesti piccoli, <b>una mano sola</b>",
    "<b>2–3 take per clip</b>, si sceglie in montaggio",
    "Gira <b>un filo più largo</b>: il punch-in si fa dopo",
])
story.append(PageBreak())

# ══════════ CLIP PAGES ══════════
def clip_page(num, tempo, blocco, shot, gobbo, regia, overlay, extra=None):
    story.append(Paragraph(f"CLIP {num} <font color='#6B6B6B'>·</font> {tempo}", S["clip"]))
    story.append(Paragraph(blocco, S["tiny"]))
    story.append(HRFlowable(width="100%", thickness=1.5, color=ACCENT, spaceBefore=4, spaceAfter=2))
    sec(story, "INQUADRATURA", shot)
    story.append(Paragraph("LEGGI COSÌ&nbsp;&nbsp;<font color='#6B6B6B' size='7'>( / = pausa · rosa = calca la parola )</font>", S["lab"]))
    story.append(Spacer(1, 3))
    story.append(gobbo_box(gobbo))
    sec(story, "COME LO DICI", regia)
    story.append(Paragraph("TAKE", S["lab"]))
    story.append(Paragraph("☐&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;☐&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;☐&nbsp;&nbsp;3", S["body"]))
    story.append(Paragraph(f"<font color='#6B6B6B' size='7.5'>Dopo (montaggio): {overlay}</font>", S["tiny"]))
    if extra:
        story.append(Spacer(1, 5))
        story.append(banner(extra, GOLD))
    story.append(PageBreak())


A = "BLOCCO A · Passeig Marítim"
B = "BLOCCO B · esterno CDLC"

clip_page(
    1, "0–4”", A,
    "<b>PP</b> (testa e spalle), 1x, altezza occhi, frontale, ~1 m. Palme alle spalle, luce calda sul viso.",
    "«Tutti dicono che Barcellona è cara. / <font color='#D81B60'>Sicuri?</font> / "
    "Con <font color='#D81B60'>35 euro</font> qui esci tutte le sere… / per una <font color='#D81B60'>settimana</font>.»",
    "Finto scetticismo su «tutti dicono»: mezzo sopracciglio su, micro scuotimento di testa. "
    "Pausa netta prima di «Sicuri?» — è lì che si ferma lo scroll.",
    "overlay «BARCELLONA È CARA» dal primo frame, poi reveal “35€ = 1 SETTIMANA”; punch-in su «35 euro».",
    extra="Girare anche la 2ª variante di hook (A/B): costa 2 minuti, può salvare il lancio",
)

clip_page(
    4, "15–21”", A,
    "<b>PP</b>, stesso punto della clip 1. Girato <b>largo</b>: il punch-in si fa in montaggio.",
    "«E ora fai due conti: / trentacinque euro diviso sette sere… / "
    "fa <font color='#D81B60'>cinque euro a serata</font>. / A Barcellona.»",
    "Serio, sopracciglia su nel finale. <b>Pausa piena prima di «cinque euro»</b>: è il reveal del video, "
    "non correre. «A Barcellona» staccato, quasi buttato lì.",
    "counter animato “35€ ÷ 7 = 5€ A SERA”, riser + cassa sul reveal.",
)

clip_page(
    5, "21–29”", A,
    "<b>PP</b> che stringe a <b>PPP</b> in montaggio. Sfondo semplice: mare o palme.",
    "«E puoi anche <font color='#D81B60'>averlo gratis</font>! / "
    "Tagga <font color='#D81B60'>tre amici</font> sotto al video — / "
    "venerdì peschiamo un commento, / e due pass <font color='#D81B60'>ve li regaliamo noi</font>.»",
    "Qui il tono serio della clip 4 <b>si apre in un sorriso vero su «gratis»</b> e resta caldo fino alla fine: "
    "il contrasto è ciò che rende il regalo credibile. <b>Sguardo tenuto in lente 2 secondi dopo l'ultima parola</b> (serve per il loop).",
    "“TAGGA 3 AMICI ↓” → “IN PALIO 2 PASS GRATIS”; ultimi 2”: “Non vuoi aspettare? ‘PASS’ in DM”.",
    extra="Di' il giorno VERO dell'estrazione: se pubblichi lunedì, «venerdì» è giusto",
)

clip_page(
    2, "4–8”", A,
    "<b>MB</b> (dalla vita in su) <b>in camminata</b>; l'operatore arretra alla stessa velocità, 1x.",
    "«Ecco il <font color='#D81B60'>nostro pass</font>: / un braccialetto, / sette giorni, / "
    "<font color='#D81B60'>cinque club</font>.»",
    "Su «ecco il nostro pass» <b>il polso col braccialetto sale verso la lente</b>: il prodotto si mostra, "
    "non si descrive. Elenco scandito, un piccolo stacco tra i tre numeri.",
    "overlay a comparsa ritmata “1 BRACCIALETTO” → “7 GIORNI” → “5 CLUB”.",
    extra="Subito dopo: b-roll PPP del polso col braccialetto in controluce (3–4 sec)",
)

clip_page(
    3, "8–15”", B,
    "<b>MB fisso</b>, angolo 3/4, <b>insegna del CDLC leggibile</b> alle spalle.",
    "«E non devi capire dove andare: / ogni sera c'è il <font color='#D81B60'>club giusto</font> — / "
    "lunedì <font color='#D81B60'>qui</font>, / martedì foam party, / "
    "e nel weekend i <font color='#D81B60'>tre più pieni</font> della città.»",
    "Complice, ritmo alto. <b>Piccolo cenno con la testa verso l'insegna su «qui»</b>: "
    "il “qui” funziona solo se l'insegna è nel quadro.",
    "flash calendario “LUN” · “MAR (foam)” · “VEN–SAB” + 2 lampi da 1” di repertorio festa.",
)

# ══════════ CHECKLIST FINALE ══════════
story.append(Paragraph("Prima di smontare", S["h1"]))
story.append(Paragraph("Controlla queste 6 cose: rifare un take dopo costa una serata.", S["sub"]))
story.append(HRFlowable(width="100%", thickness=2.5, color=ACCENT, spaceBefore=8, spaceAfter=8))
bullets(story, [
    "Clip 5 — <b>lo sguardo tenuto 2 secondi</b> c'è almeno in un take?",
    "Clip 3 — l'<b>insegna del CDLC</b> si legge davvero?",
    "Tutti i take — la <b>faccia non è scura</b> in controluce?",
    "Clip 1 — <b>2 varianti di hook</b> girate?",
    "B-roll — <b>polso col braccialetto</b> girato?",
    "Audio — riascolta 10 secondi: <b>il vento non copre la voce?</b>",
], mark="☐", gap=8)
story.append(PageBreak())

# ══════════ DOPO IL SET — MONTAGGIO ══════════
story.append(Paragraph("Dopo il set · montaggio", S["h1"]))
story.append(HRFlowable(width="100%", thickness=2.5, color=BLUE, spaceBefore=8, spaceAfter=6))
sec(story, "MUSICA", "Suono <b>in tendenza quella settimana</b> (Creative Center TikTok, controllalo il giorno prima). Volume <b>20–30% sotto la voce</b>.", blue=True)
sec(story, "RITMO", "Tagli secchi <b>sul beat</b>, un cambio ogni 1,5–2,5 sec.", blue=True)
sec(story, "SOTTOTITOLI", "Automatici CapCut, font grande, <b>fascia alta-centrale</b> (il 15% in basso è coperto dall'interfaccia). Evidenzia “35€”, “5 club”, “5€ a serata”.", blue=True)
sec(story, "MOMENTO-FIRMA", "Il counter della clip 4 (“35€ ÷ 7 = 5€ A SERA”) va animato bene: <b>è il frame che la gente screenshotta</b> e manda in chat di gruppo.", blue=True)
sec(story, "LOOP", "L'ultimo frame (sguardo in lente, palme dietro) somiglia al primo: il rewatch parte senza cucitura.", blue=True)
sec(story, "COPERTINA", "Frame della clip 1 con «BARCELLONA È CARA» + sotto, piccolo, “35€ = 7 NOTTI”.", blue=True)
story.append(PageBreak())

# ══════════ PUBBLICAZIONE ══════════
story.append(Paragraph("Pubblicazione", S["h1"]))
story.append(HRFlowable(width="100%", thickness=2.5, color=ACCENT, spaceBefore=8, spaceAfter=6))
sec(story, "CAPTION", "Tutti dicono che Barcellona è cara. Poi fai i conti: 35€ = 7 notti di fila. E per 2 di voi… GRATIS: tagga 3 amici nei commenti, venerdì estraiamo un commento e regaliamo 2 pass. Non vuoi aspettare l'estrazione? “PASS” in DM. (Giveaway non affiliato a TikTok/Instagram — vincitore annunciato in stories) #barcellona #estate2026 #vacanze #viaggi #discoteca", "sm")
sec(story, "COMMENTO FISSATO", "REGOLE: tagga 3 amici in un commento = partecipi. Estrazione venerdì in stories: in palio 2 pass (7 notti, 5 club). Vuoi andare sul sicuro? “PASS” in DM con date e quanti siete — risposta in 10 minuti. Domani: la serata n.1 dell'estate", "sm")
sec(story, "RISPOSTA A OGNI COMMENTO-TAG", "Fatto, siete dentro! Se intanto volete il programma della vostra settimana: “PASS” in DM con le date.<br/><font color='#6B6B6B' size='7.5'>Ogni risposta raddoppia i commenti e trasforma un partecipante in lead.</font>", "sm")
sec(story, "SE ARRIVA IL «IN LISTA ENTRI GRATIS»", "In lista gratis entri solo in certi club, solo entro certi orari, e devi sapere quali. Col pass non ci pensi: 7 sere, 5 club, sempre in quello giusto.", "sm")
sec(story, "DM SALVATO (keyword PASS)", "Ciao! Due cose e siamo a posto: che date siete a Barcellona e in quanti? Vi blocco i braccialetti e vi mando il programma sera per sera. Ingresso ogni sera entro l'1:00, braccialetto personale.", "sm")
story.append(Spacer(1, 8))
story.append(banner("Ore 18–19 · commenti dei colleghi nei primi 10 min · rispondi ai DM entro 10 min · cross-post IG", ACCENT))
story.append(Spacer(1, 6))
story.append(Paragraph("Giveaway: estrazione <b>filmata in stories</b> col vincitore taggato. Pagina nuova + premio = servono prove pubbliche, altrimenti sa di scam.", S["tiny"]))


def footer(canvas, doc):
    canvas.saveState()
    canvas.setFont("DVS", 7.5)
    canvas.setFillColor(GRAY)
    canvas.drawCentredString(PAGE[0] / 2, 10, f"BarcellonaCon · Reel 1 · pag. {doc.page}")
    canvas.restoreState()


doc = BaseDocTemplate(OUT, pagesize=PAGE, leftMargin=M, rightMargin=M, topMargin=14, bottomMargin=22,
                      title="BarcellonaCon - Reel 1 - script da set", author="BarcellonaCon")
frame = Frame(M, 22, W, PAGE[1] - 36, id="f")
doc.addPageTemplates([PageTemplate(id="p", frames=[frame], onPage=footer)])
doc.build(story)
print("OK ->", OUT)
