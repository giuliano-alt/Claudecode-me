# -*- coding: utf-8 -*-
"""Reel Tossa de Mar — PDF DA SET, formato iPhone (9:16, 320x568 pt)."""

from reportlab.lib.colors import HexColor
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (BaseDocTemplate, Frame, HRFlowable, PageBreak,
                                PageTemplate, Paragraph, Spacer, Table, TableStyle)

pdfmetrics.registerFont(TTFont("DVS", "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"))
pdfmetrics.registerFont(TTFont("DVS-Bold", "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"))

PAGE = (320, 568)
M = 18
W = PAGE[0] - 2 * M
SEA = HexColor("#0E7C9B")      # turchese Costa Brava
DEEP = HexColor("#0A4C66")
CORAL = HexColor("#E2452F")
DARK = HexColor("#141414")
GRAY = HexColor("#6B6B6B")
LIGHT = HexColor("#EFF6F8")
GOLD = HexColor("#E8A400")

OUT = "/tmp/claude-0/-home-user-Claudecode-me/b8b01e4a-c858-5d88-a526-a95b6c8be5f4/scratchpad/BarcellonaCon_Tossa_DaSet.pdf"

S = {
    "h1": ParagraphStyle("h1", fontName="DVS-Bold", fontSize=19, leading=23, textColor=DARK),
    "sub": ParagraphStyle("sub", fontName="DVS", fontSize=10, leading=13.5, textColor=GRAY),
    "clip": ParagraphStyle("clip", fontName="DVS-Bold", fontSize=18, leading=22, textColor=SEA),
    "lab": ParagraphStyle("lab", fontName="DVS-Bold", fontSize=8, leading=11, textColor=SEA, spaceBefore=9),
    "labc": ParagraphStyle("labc", fontName="DVS-Bold", fontSize=8, leading=11, textColor=CORAL, spaceBefore=9),
    "body": ParagraphStyle("body", fontName="DVS", fontSize=9.8, leading=13.5, textColor=DARK),
    "gobbo": ParagraphStyle("gobbo", fontName="DVS-Bold", fontSize=14.5, leading=20, textColor=DARK),
    "sm": ParagraphStyle("sm", fontName="DVS", fontSize=9, leading=12.5, textColor=DARK),
    "tiny": ParagraphStyle("tiny", fontName="DVS", fontSize=7.8, leading=10.5, textColor=GRAY),
}


def gobbo_box(text):
    t = Table([[Paragraph(text, S["gobbo"])]], colWidths=[W])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), LIGHT),
        ("LINEBEFORE", (0, 0), (0, -1), 4, SEA),
        ("TOPPADDING", (0, 0), (-1, -1), 10), ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
        ("LEFTPADDING", (0, 0), (-1, -1), 10), ("RIGHTPADDING", (0, 0), (-1, -1), 8),
    ]))
    return t


def banner(text, color):
    t = Table([[Paragraph(f'<font color="#FFFFFF"><b>{text}</b></font>',
                          ParagraphStyle("b", fontName="DVS-Bold", fontSize=9.3, leading=12.5))]], colWidths=[W])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), color),
        ("TOPPADDING", (0, 0), (-1, -1), 5), ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
    ]))
    return t


story = []


def sec(label, text, style="body", coral=False):
    story.append(Paragraph(label, S["labc" if coral else "lab"]))
    story.append(Paragraph(text, S[style]))


def bullets(items, mark="•", style="body", gap=5):
    for it in items:
        story.append(Paragraph(f"{mark}&nbsp;&nbsp;{it}", S[style]))
        story.append(Spacer(1, gap))


# ═════ P1 COPERTINA ═════
story.append(Spacer(1, 4))
story.append(Paragraph("TOSSA DE MAR", S["h1"]))
story.append(Paragraph("BarcellonaCon · reel escursione · script da set", S["sub"]))
story.append(HRFlowable(width="100%", thickness=2.5, color=SEA, spaceBefore=8, spaceAfter=6))
sec("OBIETTIVO", "Riempire il bus di <b>mercoledì 5 agosto</b>. Non follower: <b>prenotazioni in DM</b>.")
sec("DURATA", "<b>33 secondi</b> · 5 clip + b-roll di Tossa")
sec("KEYWORD DM", "<b>TOSSA</b>")
sec("COSA SI VENDE", "Non la gita culturale: <b>una giornata di mare migliore</b> + le foto dell'estate + aperitivo col DJ. Il borgo è scenografia, non argomento.")
sec("DOVE SI GIRA", "<b>Clip 1</b> — Platja de la Barceloneta, nell'ora di punta<br/><b>Clip 3-4-5</b> — Passeig Marítim, mare dietro<br/><b>Clip 2 + inserti</b> — b-roll girato a Tossa")
sec("QUANDO", "<b>17:00–19:00</b> per la Barceloneta (spiaggia piena = il contrasto funziona), poi golden hour per la CTA.")
story.append(Spacer(1, 8))
story.append(banner("Serve b-roll VERO di Tossa: è l'unica parte non negoziabile del reel", GOLD))
story.append(PageBreak())

# ═════ P2 L'IDEA ═════
story.append(Paragraph("Come funziona questo video", S["h1"]))
story.append(HRFlowable(width="100%", thickness=2.5, color=SEA, spaceBefore=8, spaceAfter=6))
story.append(Paragraph(
    "Chi guarda è venuto a Barcellona per <b>mare e serate</b>. «Escursione al borgo medievale» nella sua testa "
    "suona come <i>gita scolastica</i>. È l'obiezione da battere, e si batte nei primi 10 secondi.", S["body"]))
story.append(Spacer(1, 8))
story.append(Paragraph("Il video risponde in quest'ordine:", S["body"]))
story.append(Spacer(1, 6))
bullets([
    "<b>Spiaggia migliore</b> — Barceloneta piena vs acqua trasparente (il bisogno che ha già)",
    "<b>Le foto dell'estate</b> — il castello sul mare è il posto più fotogenico a un'ora da qui",
    "<b>Cocktail + DJ + rientro in serata</b> — la prova che non è roba da vecchi, e che <b>la serata non la perde</b>",
], mark="→", gap=7)
story.append(Spacer(1, 6))
story.append(banner("Il prezzo si dice SOLO alla fine: prima si fa desiderare il posto", CORAL))
story.append(PageBreak())

# ═════ P3 ORDINE DI RIPRESA ═════
story.append(Paragraph("Ordine di ripresa", S["h1"]))
story.append(Paragraph("Si gira per location, non in ordine di clip.", S["sub"]))
story.append(HRFlowable(width="100%", thickness=2.5, color=DEEP, spaceBefore=8, spaceAfter=8))
story.append(banner("BLOCCO A · PLATJA DE LA BARCELONETA (ore 17–19)", DEEP))
story.append(Spacer(1, 6))
bullets(["<b>CLIP 1</b> — l'hook, in mezzo alla folla <font color='#6B6B6B'>(+ hook B e C)</font>"], mark="☐")
story.append(Spacer(1, 10))
story.append(banner("BLOCCO B · PASSEIG MARÍTIM (golden hour)", DEEP))
story.append(Spacer(1, 6))
bullets([
    "<b>CLIP 3</b> — come funziona la giornata",
    "<b>CLIP 4</b> — aperitivo + «la serata non la perdi»",
    "<b>CLIP 5</b> — prezzo e CTA",
], mark="☐")
story.append(Spacer(1, 10))
story.append(banner("BLOCCO C · A TOSSA (b-roll, vedi lista dedicata)", DEEP))
story.append(Spacer(1, 6))
bullets(["<b>CLIP 2</b> + tutti gli inserti · voce fuori campo registrata a parte, al chiuso"], mark="☐")
story.append(PageBreak())

# ═════ P4 SETUP ═════
story.append(Paragraph("Setup e recitazione", S["h1"]))
story.append(HRFlowable(width="100%", thickness=2.5, color=SEA, spaceBefore=8, spaceAfter=6))
sec("CAMERA", "Verticale <b>9:16</b>, camera <b>posteriore</b>, lente <b>1x</b>, <b>altezza occhi</b>, telefono dritto. Gomiti appoggiati alle costole o gimbal.")
sec("LUCE", "Controluce: tocca il viso sullo schermo e <b>blocca l'esposizione</b> (tieni premuto → AE/AF).")
sec("AUDIO", "Alla Barceloneta il rumore di fondo <b>va bene</b> (autenticità). La voce fuori campo della clip 2 va registrata <b>al chiuso</b>, in silenzio.")
sec("POSTURA (vale sempre)", "Peso sul piede arretrato · spalle aperte · <b>mento appena in basso</b> · guarda la lente, non lo schermo.")
sec("VOCE", "Parla il <b>10% più lento</b> del naturale. Tono: dritta a un amico, mai da venditore.")
sec("TAKE", "<b>2–3 per clip.</b> Gira <b>un filo più largo</b>: il punch-in si fa in montaggio.")
story.append(PageBreak())

# ═════ CLIP PAGES ═════
def clip_page(num, tempo, blocco, shot, gobbo, corpo, overlay, extra=None):
    story.append(Paragraph(f"CLIP {num} <font color='#6B6B6B'>·</font> {tempo}", S["clip"]))
    story.append(Paragraph(blocco, S["tiny"]))
    story.append(HRFlowable(width="100%", thickness=1.5, color=SEA, spaceBefore=4, spaceAfter=2))
    sec("INQUADRATURA", shot)
    story.append(Paragraph("LEGGI COSÌ&nbsp;&nbsp;<font color='#6B6B6B' size='7'>( / = pausa · azzurro = calca )</font>", S["lab"]))
    story.append(Spacer(1, 3))
    story.append(gobbo_box(gobbo))
    sec("CORPO, GESTI, FACCIA", corpo, coral=True)
    story.append(Paragraph("TAKE", S["lab"]))
    story.append(Paragraph("☐&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;☐&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;☐&nbsp;&nbsp;3", S["body"]))
    story.append(Paragraph(f"<font color='#6B6B6B' size='7.5'>Dopo (montaggio): {overlay}</font>", S["tiny"]))
    if extra:
        story.append(Spacer(1, 5))
        story.append(banner(extra, GOLD))
    story.append(PageBreak())


clip_page(
    1, "0–4”", "BLOCCO A · Platja de la Barceloneta",
    "<b>MB</b> (dalla vita in su), 1x, ~1,5 m. In piedi <b>dentro la folla</b>: ombrelloni e gente devono leggersi bene dietro. Corpo a 3/4, la spiaggia si apre alle spalle.",
    "«Questa è la <font color='#0E7C9B'>Barceloneta</font>. / E questa… / è a <font color='#0E7C9B'>un'ora da qui</font>.»",
    "Faccia <b>piatta, quasi annoiata</b>: la noia È l'argomento, non recitare entusiasmo. "
    "Su «Questa è la Barceloneta»: <b>mano aperta, palmo in su, che sventaglia all'indietro verso la folla</b> — "
    "la mano entra ed esce dal quadro, non resta sospesa. <b>Mai puntare il dito</b> verso le persone: legge aggressivo. "
    "Poi micro-sollevamento di sopracciglia su «E questa…».",
    "overlay “BARCELLONA, OGGI”. Il taglio cade sul <b>silenzio</b> dopo «questa…», non sulla parola.",
    extra="Chiudi la bocca e resta fermo mezzo secondo dopo l'ultima parola: lì cade lo stacco",
)

clip_page(
    2, "4–10”", "BLOCCO C · b-roll Tossa + voce fuori campo",
    "<b>B-roll</b>: mura del castello sul mare (largo, 0.5x, orizzonte dritto) → acqua turchese dall'alto → dettaglio piedi/mani nell'acqua. <b>Voce registrata a parte</b>, al chiuso.",
    "«Tossa de Mar. / Acqua trasparente, / un castello medievale <font color='#0E7C9B'>a picco sul mare</font>. / "
    "Le <font color='#0E7C9B'>foto migliori dell'estate</font> le fai qui.»",
    "Voce <b>calma, quasi sottovoce</b>. Non enfatizzare: le immagini stanno già gridando, la voce deve fare il contrario. "
    "Respira prima di «Le foto migliori».",
    "primi 2” senza overlay (lascia respirare), poi “TOSSA DE MAR · 1h DA BARCELLONA”. La musica <b>cambia</b> sullo stacco.",
)

clip_page(
    3, "10–18”", "BLOCCO B · Passeig Marítim",
    "<b>MB</b> frontale, mare dietro, 1x, altezza occhi. In montaggio si alterna con b-roll da 1,5” (costa dal finestrino · spiaggia · vicoli).",
    "«<font color='#0E7C9B'>Mercoledì 5</font> ci andiamo in bus da Barcellona: / partenza alle dieci, / "
    "la costa dal finestrino, / e poi la giornata è tua — / spiaggia, borgo, pranzo dove ti pare.»",
    "Postura frontale e aperta. <b>Conta sulle dita</b> le tre cose finali (spiaggia / borgo / pranzo): "
    "il gesto a tre è la struttura più memorizzabile che esista nel parlato. "
    "Mano all'altezza del petto, <b>mai sotto il mento</b>. Ritmo da elenco, veloce, senza enfasi commerciale.",
    "righe che si costruiscono: “MER 5 AGOSTO” → “BUS A/R” → “GIORNATA LIBERA”, un taglio per voce.",
)

clip_page(
    4, "18–25”", "BLOCCO B · Passeig Marítim",
    "<b>MB</b>, stessa posizione della clip 3. In apertura, b-roll del chiringuito (cocktail, sabbia, cassa del DJ).",
    "«Nel pomeriggio aperitivo in chiringuito: / <font color='#0E7C9B'>cocktail incluso</font> e DJ, coi piedi nella sabbia. / "
    "Poi il bus ti riporta indietro — / la serata a Barcellona / <font color='#0E7C9B'>non la perdi</font>.»",
    "Qui <b>ti sciogli</b>: sorriso vero, spalle basse, tono da «e la parte bella è questa». "
    "<b>Pausa piena prima di «non la perdi»</b> e sguardo dritto in lente: è la frase che smonta l'obiezione, "
    "deve suonare come una rassicurazione tra amici, non come uno slogan.",
    "“APERITIVO IN CHIRINGUITO” → “COCKTAIL INCLUSO + DJ”. Musica su sul b-roll, giù sul parlato.",
)

clip_page(
    5, "25–33”", "BLOCCO B · Passeig Marítim, golden hour",
    "<b>PP</b> che stringe a <b>PPP</b> col punch-in in montaggio. Sfondo pulito, mare.",
    "«Cinquantacinque euro, / bus e cocktail dentro. / Ma i posti sul bus <font color='#0E7C9B'>sono quelli</font>. / "
    "Scrivi ‘<font color='#0E7C9B'>TOSSA</font>’ in DM / e ti dico se ce n'è ancora.»",
    "Corpo fermo, <b>niente gesti</b>: dopo una clip piena di mani, l'immobilità pesa. Ritmo rallentato del 10%, "
    "tono asciutto e informativo — <b>la scarsità funziona solo se detta senza pressione</b>. "
    "<b>Sguardo tenuto in lente 2 secondi dopo l'ultima parola</b> (serve per il loop).",
    "“55€ · BUS + COCKTAIL INCLUSI” → “‘TOSSA’ IN DM” fino alla fine. Nessun effetto: qui la sobrietà vende.",
)

# ═════ HOOK A/B ═════
story.append(Paragraph("Hook alternativi", S["h1"]))
story.append(Paragraph("Girali sul posto: costano 2 minuti e possono salvare il video.", S["sub"]))
story.append(HRFlowable(width="100%", thickness=2.5, color=CORAL, spaceBefore=8, spaceAfter=8))
story.append(Paragraph("<b>HOOK B</b> — più aggressivo, fa discutere nei commenti", S["lab"]))
story.append(Spacer(1, 3))
story.append(gobbo_box("«Se mercoledì sei ancora alla Barceloneta, / stai <font color='#0E7C9B'>sbagliando vacanza</font>.»"))
story.append(Spacer(1, 10))
story.append(Paragraph("<b>HOOK C</b> — più soft, punta tutto sull'immagine", S["lab"]))
story.append(Spacer(1, 3))
story.append(gobbo_box("«Un'ora da Barcellona, / e il mare diventa <font color='#0E7C9B'>questo</font>.»"))
story.append(PageBreak())

# ═════ SHOT LIST TOSSA ═════
story.append(Paragraph("Shot list a Tossa", S["h1"]))
story.append(Paragraph("Ogni clip 3–5 sec · orizzonte dritto · esposizione bloccata sui volti", S["sub"]))
story.append(HRFlowable(width="100%", thickness=2.5, color=DEEP, spaceBefore=8, spaceAfter=8))
bullets([
    "Le <b>mura della Vila Vella</b> viste dalla spiaggia (pietra + mare: il colpo d'occhio)",
    "<b>Acqua turchese dall'alto</b>, dal camminamento delle mura",
    "<b>Dettaglio piedi o mani nell'acqua</b> (vende la limpidezza meglio di qualsiasi panoramica)",
    "<b>Vicoli del borgo</b> coi fiori — bastano 3 secondi",
    "<b>Costa dal finestrino</b> del bus",
    "<b>Chiringuito</b>: cocktail in mano, sabbia, gente, cassa del DJ",
    "<b>Panorama della baia dall'alto</b> → è la copertina del reel",
], mark="☐", gap=7)
story.append(Spacer(1, 4))
story.append(banner("Senza girato di Tossa: foto in alta risoluzione con push-in lento, max 2 sec l'una", GOLD))
story.append(PageBreak())

# ═════ PRIMA DI SMONTARE ═════
story.append(Paragraph("Prima di smontare", S["h1"]))
story.append(HRFlowable(width="100%", thickness=2.5, color=CORAL, spaceBefore=8, spaceAfter=8))
bullets([
    "Clip 1 — <b>la folla si legge davvero</b> dietro di te?",
    "Clip 1 — c'è un take col <b>mezzo secondo di silenzio finale</b>?",
    "Clip 5 — <b>sguardo tenuto 2 secondi</b> in almeno un take?",
    "Tutti — la <b>faccia non è scura</b> in controluce?",
    "Hook B e C girati?",
    "Audio — riascolta 10 secondi: <b>il vento non copre la voce?</b>",
], mark="☐", gap=8)
story.append(PageBreak())

# ═════ MONTAGGIO ═════
story.append(Paragraph("Montaggio", S["h1"]))
story.append(HRFlowable(width="100%", thickness=2.5, color=SEA, spaceBefore=8, spaceAfter=6))
sec("IL TAGLIO CHE VALE TUTTO", "Barceloneta → Tossa: mezzo secondo di silenzio, poi <b>stacco secco</b>. Niente transizioni, niente dissolvenze: il contrasto funziona se è brutale.")
sec("MUSICA", "Traccia in tendenza della settimana. <b>Entra piena sullo stacco</b> su Tossa — deve <i>cambiare</i> lì, non partire da zero. Poi 20–30% sotto la voce.")
sec("SOTTOTITOLI", "CapCut, font grande, <b>fascia alta-centrale</b>. Evidenzia “MERCOLEDÌ 5”, “55€”, “COCKTAIL INCLUSO”.")
sec("COPERTINA", "Il panorama della baia + “1 ORA DA BARCELLONA” e sotto, piccolo, “MER 5 AGOSTO · 55€”. In griglia deve leggersi come <b>una destinazione</b>, non come un annuncio.")
sec("LOOP", "Chiudi sul PPP con lo sguardo in lente: il rewatch riparte dalla Barceloneta piena e il contrasto si rinnova.")
story.append(PageBreak())

# ═════ PUBBLICAZIONE ═════
story.append(Paragraph("Pubblicazione", S["h1"]))
story.append(Paragraph("Un solo video non riempie un bus.", S["sub"]))
story.append(HRFlowable(width="100%", thickness=2.5, color=SEA, spaceBefore=8, spaceAfter=6))
sec("MER 29 / GIO 30 · ore 18–19", "<b>Questo reel.</b> Serve a far scoprire l'escursione.")
sec("OGNI GIORNO · stories", "Countdown posti (“restano 12 posti”), screenshot di DM reali, foto di Tossa. Sticker DM + countdown nativo alla data.")
sec("LUN 3 / MAR 4 · ore 18–19", "<b>Last call</b>: taglio da 15 secondi dello stesso girato con hook nuovo (“Ultimi posti per mercoledì”). <b>La maggior parte delle prenotazioni arriva nelle ultime 48 ore.</b>")
sec("SEMPRE", "Risposta ai DM <b>entro 10 minuti</b> · cross-post su IG Reels con <b>geotag Tossa de Mar</b> (porta ricerca organica sulla destinazione).")
story.append(PageBreak())

# ═════ TESTI PRONTI ═════
story.append(Paragraph("Testi pronti", S["h1"]))
story.append(HRFlowable(width="100%", thickness=2.5, color=SEA, spaceBefore=8, spaceAfter=6))
sec("CAPTION", "Mercoledì 5 agosto: Tossa de Mar. Bus da Barcellona, giornata libera tra spiaggia e borgo medievale, aperitivo in chiringuito col DJ. 55€ — bus A/R e cocktail inclusi. Scrivi “TOSSA” in DM: i posti sul bus sono limitati. #tossademar #barcellona #costabrava #estate2026 #vacanze", "sm")
sec("COMMENTO FISSATO", "Come funziona: partenza ore 10 (meeting point in DM), giornata libera tra spiaggia e borgo, pranzo libero (potete anche portarvelo), aperitivo in chiringuito incluso: 1 cocktail + DJ set. Rientro allo stesso punto. 55€ a persona. “TOSSA” in DM per il posto.", "sm")
sec("DM SALVATO (keyword TOSSA)", "Ciao! Mercoledì 5 agosto, Tossa de Mar: in quanti siete? Vi blocco i posti sul bus e vi mando il meeting point. 55€ a testa, bus A/R + cocktail al chiringuito inclusi. Il resto della giornata è libero.", "sm")
sec("«QUANTO CI SI METTE?»", "Circa un'ora di bus lungo la costa — si parte alle 10 e la giornata è tutta lì.", "sm")
sec("«SI PUÒ PORTARE IL PRANZO?»", "Sì! Il paese è pieno di ristorantini, ma se preferite portarvi il pranzo va benissimo.", "sm")
story.append(PageBreak())

# ═════ DA VERIFICARE ═════
story.append(Paragraph("Da verificare prima di pubblicare", S["h1"]))
story.append(HRFlowable(width="100%", thickness=2.5, color=CORAL, spaceBefore=8, spaceAfter=8))
bullets([
    "<b>La data</b>: la locandina dice 29 luglio. Se la corsa è il 5 agosto, aggiornare la grafica prima che esca il reel.",
    "<b>“Un'ora di bus”</b>: Tossa è a ~90 km. Se sono 1h20–1h30, dire <b>“poco più di un'ora”</b> — meglio sottopromettere che farsi correggere nei commenti.",
    "<b>“Ritorno 18:00”</b>: arrivo a Barcellona o partenza da Tossa? Nel video non si dice (la frase regge in entrambi i casi), ma nei DM va detto preciso.",
    "<b>Orario dell'aperitivo</b> in chiringuito, per rispondere nei DM.",
    "<b>Quanti posti ha il bus</b>: serve per il countdown nelle stories, e la scarsità deve essere vera.",
], mark="☐", gap=8)
story.append(Spacer(1, 4))
story.append(banner("Se intendevi DOMANI (mer 29): clip 3 «Domani ci andiamo…» e clip 5 «…in DM stasera»", GOLD))


def footer(canvas, doc):
    canvas.saveState()
    canvas.setFont("DVS", 7.5)
    canvas.setFillColor(GRAY)
    canvas.drawCentredString(PAGE[0] / 2, 10, f"BarcellonaCon · Tossa de Mar · pag. {doc.page}")
    canvas.restoreState()


doc = BaseDocTemplate(OUT, pagesize=PAGE, leftMargin=M, rightMargin=M, topMargin=14, bottomMargin=22,
                      title="BarcellonaCon - Tossa de Mar - script da set", author="BarcellonaCon")
doc.addPageTemplates([PageTemplate(id="p", frames=[Frame(M, 22, W, PAGE[1] - 36, id="f")], onPage=footer)])
doc.build(story)
print("OK ->", OUT)
