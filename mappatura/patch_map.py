"""Inserisce nel cap. 7 della Mappatura SAI Agrigento il focus sul territorio di
Santa Elisabetta e comuni contermini, con il censimento delle imprese.
Riproduce esattamente i pattern di paragrafo già presenti nel documento.
Va eseguito sulla copia scompattata del documento ORIGINALE."""

import sys
from xml.sax.saxutils import escape

sys.path.insert(0, '..')
from imprese import COMUNI, RETE

DOC = 'word/document.xml'

RPR_BODY = ('<w:rFonts w:ascii="Calibri" w:cs="Calibri" w:eastAsia="Calibri" w:hAnsi="Calibri"/>'
            '<w:b w:val="false"/><w:bCs w:val="false"/><w:i w:val="false"/><w:iCs w:val="false"/>'
            '<w:sz w:val="22"/><w:szCs w:val="22"/>')
RPR_BODY_B = ('<w:rFonts w:ascii="Calibri" w:cs="Calibri" w:eastAsia="Calibri" w:hAnsi="Calibri"/>'
              '<w:b/><w:bCs/><w:i w:val="false"/><w:iCs w:val="false"/>'
              '<w:sz w:val="22"/><w:szCs w:val="22"/>')
RPR_BODY_I = ('<w:rFonts w:ascii="Calibri" w:cs="Calibri" w:eastAsia="Calibri" w:hAnsi="Calibri"/>'
              '<w:b w:val="false"/><w:bCs w:val="false"/><w:i/><w:iCs/>'
              '<w:sz w:val="20"/><w:szCs w:val="20"/>')
RPR_LIST = ('<w:rFonts w:ascii="Calibri" w:cs="Calibri" w:eastAsia="Calibri" w:hAnsi="Calibri"/>'
            '<w:sz w:val="22"/><w:szCs w:val="22"/>')
RPR_LIST_B = ('<w:rFonts w:ascii="Calibri" w:cs="Calibri" w:eastAsia="Calibri" w:hAnsi="Calibri"/>'
              '<w:b/><w:bCs/><w:sz w:val="22"/><w:szCs w:val="22"/>')
RPR_H2 = ('<w:rFonts w:ascii="Calibri" w:cs="Calibri" w:eastAsia="Calibri" w:hAnsi="Calibri"/>'
          '<w:b/><w:bCs/><w:color w:val="2E5395"/><w:sz w:val="24"/><w:szCs w:val="24"/>')


def run(text, rpr):
    return f'<w:r><w:rPr>{rpr}</w:rPr><w:t xml:space="preserve">{escape(text)}</w:t></w:r>'


def rich(text, rpr_plain, rpr_bold):
    """Interpreta **grassetto** producendo run distinti."""
    out, buf, bold, i = [], '', False, 0
    while i < len(text):
        if text[i:i + 2] == '**':
            if buf:
                out.append(run(buf, rpr_bold if bold else rpr_plain))
                buf = ''
            bold = not bold
            i += 2
        else:
            buf += text[i]
            i += 1
    if buf:
        out.append(run(buf, rpr_bold if bold else rpr_plain))
    return ''.join(out)


def body(text):
    return ('<w:p><w:pPr><w:spacing w:after="160" w:line="276"/><w:jc w:val="both"/></w:pPr>'
            + rich(text, RPR_BODY, RPR_BODY_B) + '</w:p>')


def body_italic(text):
    return ('<w:p><w:pPr><w:spacing w:after="160" w:line="276"/><w:jc w:val="both"/></w:pPr>'
            + run(text, RPR_BODY_I) + '</w:p>')


def bullet(text):
    return ('<w:p><w:pPr><w:pStyle w:val="ListParagraph"/><w:numPr><w:ilvl w:val="0"/>'
            '<w:numId w:val="2"/></w:numPr><w:spacing w:after="60" w:line="276"/></w:pPr>'
            + rich(text, RPR_LIST, RPR_LIST_B) + '</w:p>')


def h2(text):
    return ('<w:p><w:pPr><w:pStyle w:val="Heading2"/><w:spacing w:after="160" w:before="240"/></w:pPr>'
            + run(text, RPR_H2) + '</w:p>')


TOT = sum(len(v) for _, _, v in COMUNI)

# ---------------------------------------------------------------- costruzione
xml = []
xml.append(h2('7.5 Il territorio di Santa Elisabetta e dei comuni contermini'))
xml.append(body(
    'Il progetto SAI oggetto della presente mappatura ha sede in **Santa Elisabetta**, comune di 2.208 abitanti su una '
    'superficie di 16,17 km² e il più piccolo del libero consorzio comunale di Agrigento per estensione territoriale. '
    'Una simile dimensione demografica non è in grado di esprimere una domanda di lavoro capace di assorbire i beneficiari '
    'in accoglienza: **l’area operativa del progetto non coincide con il territorio comunale** e si estende ai comuni '
    'contermini e ai poli maggiori dell’area. Il presente paragrafo ricostruisce tale perimetro di prossimità, che '
    'costituisce il bacino effettivo di scouting per l’attivazione di tirocini e borse lavoro.'))
xml.append(body(
    'Il perimetro comprende, oltre al comune sede, **Raffadali** (11.769 abitanti, a circa 4 km), **Aragona** (8.669), '
    '**Sant’Angelo Muxaro** (1.119) e **Joppolo Giancaxio** (1.064), cui si aggiungono i due poli di **Agrigento** '
    '(55.118) e **Canicattì** (34.249), raggiungibili con oneri di mobilità significativamente maggiori. I dati '
    'demografici sono riferiti alle stime ISTAT al 1° gennaio 2026.'))
xml.append(body(
    'La consistenza imprenditoriale dei singoli comuni restituisce con chiarezza la gerarchia dei bacini: a fronte delle '
    '**13 imprese registrate a Santa Elisabetta** si contano **117 imprese a Raffadali** e **128 ad Aragona**, mentre '
    'Joppolo Giancaxio e Sant’Angelo Muxaro si fermano rispettivamente a 9 e 6. Rapportata alla popolazione, la densità '
    'imprenditoriale è sostanzialmente allineata; in valore assoluto, tuttavia, sono Raffadali e Aragona a rendere '
    'praticabile un’attività di scouting continuativa. Il tessuto è composto in prevalenza da micro e piccole imprese a '
    'conduzione familiare, prive di una funzione strutturata di gestione del personale: ne consegue che l’attivazione di '
    'un tirocinio dipende dal rapporto fiduciario costruito con il titolare e non da una procedura di selezione, e che '
    'ciascuna impresa può ospitare di norma un solo beneficiario per volta.'))
xml.append(body(
    'Si avverte che il numero di **imprese registrate** indicato per ciascun comune è tratto dalla banca dati camerale e '
    'comprende in prevalenza società di capitali e di persone, mentre il numero di **attività censite** nel presente '
    'paragrafo include anche esercizi commerciali e di ristorazione rilevati da altri repertori: per i comuni di minore '
    'dimensione il secondo valore può pertanto risultare superiore al primo.'))
xml.append(body(
    f'Si riporta di seguito la ricognizione di **{TOT} imprese e attività** del perimetro di prossimità, ordinate per '
    'comune e, all’interno di ciascun comune, per comparto di appartenenza. La selezione privilegia i settori a maggiore '
    'potenziale di inserimento per i beneficiari — agroalimentare, ristorazione e panificazione, agricoltura, edilizia e '
    'impiantistica, commercio e logistica, servizi ambientali e alla persona. L’elenco non ha carattere esaustivo e '
    'costituisce una **base di scouting** da verificare presso la Camera di Commercio prima di ogni contatto operativo.'))

for nome, sub, voci in COMUNI:
    xml.append(body(f'**{nome}** ({sub}) — {len(voci)} attività censite:'))
    for v in voci:
        xml.append(bullet(v))

xml.append(body(
    f'La ricognizione censisce complessivamente **{TOT} attività** distribuite su cinque comuni. Sul piano delle '
    'opportunità di inserimento, quattro elementi meritano attenzione. Il primo è la consistenza del comparto '
    '**agroalimentare e della panificazione**: fra industria dolciaria, panifici, pasticcerie e lavorazione dei prodotti '
    'ittici il perimetro esprime una filiera completa, che comprende imprese di dimensione industriale — con classi di '
    'fatturato fino a 25-50 milioni di euro — dotate di una struttura organizzativa in grado di gestire tirocini in modo '
    'continuativo, diversamente dalla microimpresa prevalente.'))
xml.append(body(
    'Il secondo è la **densità della ristorazione a Raffadali**, che con oltre dieci fra ristoranti, pizzerie, bar e '
    'birrifici costituisce il comparto più accessibile in termini di competenze formali richieste e il più prossimo alla '
    'sede del progetto. Il terzo è il peso del comparto dei **servizi ambientali e dell’igiene urbana**, presidiato ad '
    'Aragona e a Joppolo Giancaxio da quattro imprese di dimensione medio-grande: settore a bassa barriera di ingresso e '
    'storicamente accessibile ai beneficiari dei progetti di accoglienza. Il quarto è la presenza di **due cooperative '
    'sociali** a Raffadali, interlocutori naturali di un progetto SAI sia come soggetti ospitanti sia come partner di rete.'))
xml.append(body(
    'Merita infine segnalazione il **pistacchio di Raffadali**, produzione tipica la cui area di coltivazione comprende '
    'le contrade di Santa Elisabetta, Joppolo Giancaxio e Sant’Angelo Muxaro oltre a quelle del comune capofila. La '
    'filiera — che va dalla coltivazione alla trasformazione dolciaria, presidiata da imprese storiche del territorio — '
    'rappresenta l’asse produttivo identitario dell’area e un ambito privilegiato per la costruzione di percorsi di '
    'inserimento stagionali e di qualificazione professionale. Va per contro rilevato che le produzioni agricole locali '
    'sono in larga parte gestite da conduttori diretti non organizzati in forma d’impresa e come tali difficilmente '
    'attivabili quali soggetti ospitanti: l’accesso strutturato al comparto agricolo richiede di rivolgersi anche alle '
    'realtà del polo di Canicattì, dove la filiera dell’uva da tavola e dell’ortofrutta esprime una domanda di manodopera '
    'stagionale documentata.'))

xml.append(h2('7.6 La rete di imprese già attivata dal progetto'))
xml.append(body(
    'Alla data della presente mappatura il progetto ha attivato **nove soggetti ospitanti**, distribuiti su tre comuni e '
    'sei comparti economici. Si tratta delle realtà che hanno effettivamente accolto un beneficiario nell’ambito di un '
    'percorso di borsa lavoro o di tirocinio, e che costituiscono pertanto la rete territoriale operativa del progetto.'))
for r in RETE:
    xml.append(bullet(r))
xml.append(body(
    'La distribuzione riflette la gerarchia dei bacini sopra descritta: cinque soggetti a Santa Elisabetta, tre a '
    'Raffadali e uno a Canicattì. Il rapporto fra la dimensione dell’utenza in carico e la dimensione della rete '
    'costituisce il vincolo strutturale dell’intervento: poiché le imprese dell’area possono ospitare di norma un solo '
    'beneficiario per volta, **l’ampliamento della base di imprese ospitanti costituisce la leva a più elevato impatto '
    f'sul tasso di inserimento**, più ancora dell’incremento delle risorse finanziarie disponibili. Il censimento di {TOT} '
    'attività riportato al paragrafo precedente costituisce la base operativa di tale ampliamento.'))
xml.append(body(
    'Si segnala infine che due dei soggetti ospitanti già in rete risultano verosimilmente riconducibili a imprese censite '
    'al § 7.5 — **F.LLI FRAGAPANE S.r.l.** per il commercio all’ingrosso di bevande e **AUTOSERVIZI di Fragapane Pietro & '
    'C. S.n.c.** per i trasporti, entrambe con sede a Santa Elisabetta. Se ne raccomanda la verifica e l’allineamento '
    'della denominazione nei registri di progetto, oggi compilati con denominazioni di uso corrente anziché con la '
    'ragione sociale.'))
xml.append(body_italic(
    'Fonti dei dati d’impresa: banca dati Aziende.it su base Registro Imprese; Virgilio Aziende e PagineGialle per gli '
    'esercizi di ristorazione, panificazione e pasticceria; ricognizione web condotta nell’agosto 2026. Dati demografici '
    'ISTAT al 1° gennaio 2026. Ragioni sociali, codici ATECO, classi di fatturato e recapiti vanno verificati presso la '
    'Camera di Commercio di Agrigento prima di ogni utilizzo in sede di rendicontazione o di contatto formale con le '
    'imprese; l’elenco può contenere posizioni cessate o variate.'))

NEW = ''.join(xml)

# ---------------------------------------------------------------- inserimento
s = open(DOC, encoding='utf-8').read()

OLD74 = ('Le esperienze di rivitalizzazione dei borghi e il fabbisogno di manodopera agricola e di servizi alla persona '
         'rappresentano, per i progetti di accoglienza, un ambito di sperimentazione di percorsi abitativi e lavorativi integrati.')
NEW74 = (OLD74 + ' All’area va ricondotto anche il sistema di prossimità che gravita su Santa Elisabetta, comprendente '
         'Raffadali, Aragona, Joppolo Giancaxio e Sant’Angelo Muxaro, che per consistenza imprenditoriale e contiguità '
         'territoriale costituisce il bacino operativo effettivo del progetto: ad esso è dedicato il paragrafo che segue.')
assert s.count(OLD74) == 1, f'ancora § 7.4 non univoca: {s.count(OLD74)}'
assert '&' not in NEW74 and '<' not in NEW74, 'NEW74 richiede escaping XML'
s = s.replace(OLD74, NEW74)

ANCHOR = ('<w:p><w:pPr><w:pStyle w:val="Heading1"/><w:spacing w:after="200" w:before="320"/></w:pPr><w:r><w:rPr>'
          '<w:rFonts w:ascii="Calibri" w:cs="Calibri" w:eastAsia="Calibri" w:hAnsi="Calibri"/><w:b/><w:bCs/>'
          '<w:color w:val="1F3864"/><w:sz w:val="28"/><w:szCs w:val="28"/></w:rPr>'
          '<w:t xml:space="preserve">8. Analisi SWOT in chiave di inserimento socio-lavorativo</w:t></w:r></w:p>')
assert s.count(ANCHOR) == 1, f'ancora cap. 8 non univoca: {s.count(ANCHOR)}'
s = s.replace(ANCHOR, NEW + ANCHOR)

open(DOC, 'w', encoding='utf-8').write(s)

print(f'inserite {TOT} attività su {len(COMUNI)} comuni + {len(RETE)} soggetti già in rete')
print('nuovi paragrafi:', len(xml))
