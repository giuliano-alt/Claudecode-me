# -*- coding: utf-8 -*-
"""Censimento imprese del perimetro di prossimità di Santa Elisabetta,
ordinato per comparto economico secondo la tassonomia del cap. 4 del documento.
Fonti: Aziende.it (base Registro Imprese) per le ragioni sociali; Virgilio Aziende,
PagineGialle e ufficiocamerale per gli esercizi di ristorazione, panificazione e
pasticceria e per gli indirizzi; ricognizione web agosto 2026.
L'indirizzo è riportato per le sole 15 posizioni per cui risulta rilevato da fonte
diretta: la banca dati camerale non lo espone nelle pagine di elenco. Nessuna voce
inventata, nessun indirizzo attribuito per inferenza."""

SETTORI = [

    ('Agricoltura, agroalimentare e indotto', [
        '**SICILY FOOD S.r.l.** (Aragona) – lavorazione e conservazione di prodotti ittici;',
        '**MANCUSO VINCENZO & C. S.r.l.** (Aragona) – produzione di gelati;',
        '**MANGIMIFICIO S. ANTONIO S.r.l.** (Aragona) – produzione di prodotti per l’alimentazione degli animali;',
        '**DI STEFANO DOLCIARIA S.r.l.** (Raffadali) – industria dolciaria;',
        '**F.LLI CUFFARO S.r.l.** (Raffadali) – commercio all’ingrosso di frutta e ortaggi;',
        '**LA MANDORLA di Curaba & Gentile S.r.l.** (Raffadali) – commercio all’ingrosso di frutta e ortaggi;',
        '**PRIMAGEL S.r.l.** (Aragona) – commercio all’ingrosso di prodotti alimentari;',
        '**ARGO.GEL S.r.l.** (Aragona) – commercio all’ingrosso di prodotti alimentari;',
        '**TANOGEL di Gaetano Mario Di Vincenzo** (Santa Elisabetta) – commercio all’ingrosso di prodotti surgelati;',
        '**F.LLI FRAGAPANE di Fragapane Francesco e C. S.n.c.** (Santa Elisabetta) – commercio all’ingrosso di prodotti alimentari;',
        '**GUSTO SICANO S.r.l. Società Benefit** (Joppolo Giancaxio) – commercio di prodotti alimentari tipici;',
        '**A.C.I.M. S.r.l. Società Agricola** (Sant’Angelo Muxaro) – attività agricola;',
        '**D’ANNA GIOVANNA Impresa Agricola** (Joppolo Giancaxio) – attività agricola;',
        '**Azienda agricola Terrazzino** (Raffadali) – mandorle, olive, olio e uva da vino;',
        '**Azienda agricola Vizzì Vincenzo** (Raffadali, via F 23 n. 9) – produzioni agricole;',
        '**CaruanaFruit** (Raffadali) – azienda agricola, agrumi e olio, vendita diretta e online;',
        '**Vinti Rag. Baldassare** (Raffadali, via Porta Agrigento 98) – commercio e riparazione di macchine agricole;',
        '**Rizzo Domenico** (Raffadali, via Cuneo 1/P) – commercio e riparazione di macchine agricole.',
    ]),

    ('Ristorazione, panificazione e pasticceria', [
        '**LE CUSPIDI S.r.l.** (Raffadali) – bar, pasticceria e gelateria, attiva dal 1960 e specializzata nella lavorazione del pistacchio di Raffadali;',
        '**L’ANTICO FORNO S.a.s. di Galvano Gianluca e Cuffaro Vincenza & C.** (Raffadali) – produzione di prodotti di panetteria freschi;',
        '**Panificio Criscenti** (Raffadali, via Tivoli 19) – panificazione;',
        '**F.lli Criscenti di Criscenti Francesco e Calogero S.n.c.** (Raffadali) – panificazione e pasticceria;',
        '**Excelsior S.n.c. di Tarallo Luigi** (Raffadali) – panificio e pasticceria;',
        '**Pasticceria Lionti** (Raffadali) – pasticceria artigianale, produzione fresca e secca;',
        '**Pasticceria Bar Europa di Angelo Miccichè** (Aragona, via Roma 187) – pasticceria e bar;',
        '**Terra Dunci** (Aragona) – panificazione artigianale, gastronomia e dolci;',
        '**S.I.S. Società Italiana Servizi S.r.l.** (Joppolo Giancaxio) – ristorazione con somministrazione;',
        '**RIZZO GAETANO** (Santa Elisabetta) – bar ed esercizi simili;',
        '**Ristorante Pizzeria Kometa** (Santa Elisabetta, contrada Merceri) – ristorazione;',
        '**Marlò Beef Bar** (Raffadali, via Cordova 34) – ristorazione;',
        '**Ristorante Dang Giapponese e Cinese** (Raffadali, via F22 n. 28) – ristorazione;',
        '**That’s Amore Pizzeria** (Raffadali, via F 16 n. 12) – pizzeria;',
        '**Pizzeria Mistick Pizza2** (Raffadali, piazza Progresso 38) – pizzeria;',
        '**Metabirrificio Il Mangione** (Raffadali, contrada Modaccamo 800) – birrificio e ristorazione;',
        '**Movida Cocktails Club** (Raffadali, piazza Progresso) – bar e intrattenimento;',
        '**Colletto Giuseppe** (Raffadali, via F 1 n. 2) – ristorazione.',
    ]),

    ('Turismo, ricettività e servizi al territorio', [
        '**VAL DI KAM S.r.l.s.** (Sant’Angelo Muxaro) – servizi turistici e di prenotazione, operatore di riferimento per il turismo rurale dei Sicani;',
        '**The Arabian Horse Ranch** (Santa Elisabetta, contrada Carbonio 6) – ristorazione e turismo equestre;',
        '**MONDOFREE** (Raffadali) – strutture ricettive per brevi soggiorni.',
    ]),

    ('Edilizia, impiantistica e carpenteria metallica', [
        '**LA PORTA INDUSTRIES S.r.l.** (Aragona) – fabbricazione di strutture metalliche;',
        '**AIRCOM S.r.l.** (Aragona) – fabbricazione di serramenti metallici;',
        '**ITALSERRAMENTI S.r.l.** (Aragona) – fabbricazione di serramenti metallici;',
        '**TECNO EDIL S.r.l.** (Aragona) – fabbricazione di serramenti metallici;',
        '**SITAL S.r.l.** (Aragona) – fabbricazione di serramenti metallici;',
        '**DF INFISSI S.r.l.** (Raffadali) – fabbricazione di serramenti metallici;',
        '**MILITELLO COSTRUZIONI S.r.l.** (Santa Elisabetta) – installazione di impianti elettrici;',
        '**CATUARA DAMIANO SALVATORE** (Santa Elisabetta) – costruzione di edifici;',
        '**BRUNO & FRETTO S.r.l.** (Raffadali) – costruzione di edifici;',
        '**EDIL F.G.M. S.r.l.** (Raffadali) – commercio di materiali da costruzione;',
        '**IMPRETECH S.r.l.** (Aragona) – costruzione di opere di ingegneria civile;',
        '**OMNISERVICE ENGINEERING S.r.l.** (Aragona) – costruzione di edifici;',
        '**T.I.M.E.T.I.C. S.r.l.** (Joppolo Giancaxio) – costruzione di edifici.',
    ]),

    ('Commercio e distribuzione', [
        '**MATTANA S.r.l.** (Raffadali) – commercio all’ingrosso;',
        '**F.LLI FRAGAPANE S.r.l.** (Santa Elisabetta, corso Umberto I 538) – commercio all’ingrosso di bevande;',
        '**FADIS S.r.l.** (Raffadali) – commercio al dettaglio in esercizi non specializzati;',
        '**FP MARKET S.r.l.** (Santa Elisabetta) – commercio al dettaglio alimentare, supermercato;',
        '**G.R. MARKET S.r.l.** (Raffadali) – commercio al dettaglio alimentare;',
        '**MILISCIA S.r.l.** (Raffadali) – commercio all’ingrosso non specializzato;',
        '**EURORAPPRESENTANZE VENDING S.r.l.** (Raffadali) – commercio e distribuzione automatica;',
        '**START OFF S.r.l.** (Raffadali) – commercio al dettaglio di elettrodomestici;',
        '**BARTOLOMEO ITALIAN DESIGN S.r.l.** (Raffadali) – commercio al dettaglio di mobili;',
        '**BARTOLOMEO ARREDA 2.0 S.r.l.** (Joppolo Giancaxio) – commercio al dettaglio di mobili;',
        '**ARCHIDESIGN S.r.l. Semplificata** (Joppolo Giancaxio) – commercio al dettaglio di articoli per l’arredamento;',
        '**ROSS GROUP S.r.l.** (Raffadali) – commercio al dettaglio di abbigliamento e calzature;',
        '**INTIMO IN S.r.l.s.** (Raffadali) – commercio al dettaglio di abbigliamento;',
        '**DIFFUSIONE EDITORIALE AGRIGENTINA S.r.l.** (Raffadali) – commercio all’ingrosso di libri e riviste;',
        '**HERBEKA S.r.l.** (Aragona) – commercio all’ingrosso di prodotti farmaceutici;',
        '**COVERI CL S.r.l.** (Aragona) – commercio all’ingrosso di metalli;',
        '**FRENDA GROUP S.r.l.** (Joppolo Giancaxio) – commercio all’ingrosso non specializzato;',
        '**DMOTORS S.r.l.** (Sant’Angelo Muxaro) – commercio di autoveicoli;',
        '**PRAKCINT S.r.l.s.** (Sant’Angelo Muxaro) – commercio al dettaglio in esercizi non specializzati;',
        '**CIMINO RAFFAELE** (Sant’Angelo Muxaro) – commercio al dettaglio ambulante.',
    ]),

    ('Trasporti e logistica', [
        '**ERANA AUT.CARB. S.r.l.** (Raffadali) – trasporto di merci su strada;',
        '**TABONE TRASPORTI S.r.l.** (Santa Elisabetta) – trasporto di merci su strada;',
        '**F.LLI CAMILLERI & ARGENTO S.r.l.** (Raffadali) – trasporto di passeggeri;',
        '**AUTOSERVIZI di Fragapane Pietro & C. S.n.c.** (Santa Elisabetta) – trasporto terrestre di passeggeri;',
        '**ATHENA BUS VIAGGI S.r.l.** (Joppolo Giancaxio) – trasporto di passeggeri e noleggio autobus.',
    ]),

    ('Servizi ambientali e igiene urbana', [
        '**ISEDA S.r.l.** (Aragona) – raccolta di rifiuti non pericolosi;',
        '**S.E.A.P. – Società Europea Appalti Pubblici S.r.l.** (Aragona) – Società Europea Appalti Pubblici S.r.l.** (Aragona) – raccolta di rifiuti non pericolosi;',
        '**TUTELA AMBIENTE S.r.l.** (Aragona) – raccolta di rifiuti non pericolosi;',
        '**EURODEMOLIZIONI S.r.l.** (Aragona) – demolizioni e trattamento dei rifiuti;',
        '**GIGLIONE SERVIZI ECOLOGICI S.r.l.** (Joppolo Giancaxio) – attività di risanamento e servizi ecologici.',
    ]),

    ('Servizi alla persona e comparto socio-sanitario', [
        '**SANITARIA DELFINO Società Cooperativa Sociale** (Raffadali) – assistenza sociale non residenziale;',
        '**Società Cooperativa Sociale IL SORRISO** (Raffadali) – servizi di supporto alle attività amministrative;',
        '**MEDICAL GAS CRIOGENICI S.r.l.** (Aragona) – fabbricazione di apparecchi medicali;',
        '**CENTRO DENTALE TABUSO S.r.l.** (Santa Elisabetta) – studio odontoiatrico;',
        '**FARMACIA FRAGAPANE MIRELLA** (Santa Elisabetta) – farmacia;',
        '**FARMACIA SCIMONELLI S.r.l.** (Sant’Angelo Muxaro) – farmacia.',
    ]),

    ('Artigianato, manifattura e servizi alle imprese', [
        '**MED CART GALVANO S.r.l.** (Raffadali) – fabbricazione di carta e imballaggi;',
        '**UNIPLAST SICILIA Società Cooperativa** (Aragona) – fabbricazione di imballaggi in materie plastiche;',
        '**TEKA S.r.l.** (Raffadali) – attività manifatturiera e di recupero;',
        '**CARROZZERIA F.LLI LOMBARDO S.n.c.** (Santa Elisabetta) – riparazione di carrozzerie di autoveicoli;',
        '**F.LLI COLUZZI di Coluzzi Giovanni e Coluzzi Davide S.n.c.** (Aragona) – riparazione di carrozzerie;',
        '**LA ROSA L’ARTE DELLA CERA S.r.l.s.** (Santa Elisabetta) – produzione e commercio di articoli in cera;',
        '**PENTA SERVIZI S.r.l.** (Aragona) – servizi di supporto alle imprese;',
        '**SAR CONSULTING S.r.l.** (Aragona) – consulenza imprenditoriale;',
        '**MILITELLO GIUSEPPE** (Santa Elisabetta) – elaborazione elettronica dei dati;',
        '**EUROFORM** (Aragona) – corsi di formazione e aggiornamento professionale, possibile interlocutore anche quale ente formativo.',
    ]),
]

# ripartizione territoriale, per la nota di sintesi
PER_COMUNE = [
    ('Santa Elisabetta', '2.208 abitanti', '13 imprese registrate', 16),
    ('Raffadali', '11.769 abitanti', '117 imprese registrate', 41),
    ('Aragona', '8.669 abitanti', '128 imprese registrate', 26),
    ('Joppolo Giancaxio', '1.064 abitanti', '9 imprese registrate', 9),
    ('Sant’Angelo Muxaro', '1.119 abitanti', '6 imprese registrate', 6),
]

RETE = [
    '**Ditta MARLOT** (Raffadali) – ristorazione: borsa lavoro conclusa e successivo tirocinio extracurriculare, promosso da Agenzia per il Lavoro accreditata;',
    '**Butera Alfonso** (Santa Elisabetta) – artigianato: percorso concluso;',
    '**Ditta Galvano** (Santa Elisabetta) – artigianato: percorso in corso;',
    '**Bar Ibis** (Santa Elisabetta) – commercio: percorso in corso;',
    '**Fragapane Bibite** (Santa Elisabetta) – commercio all’ingrosso di bevande: percorso interrotto;',
    '**Fragapane** (Raffadali) – edilizia: percorso concluso;',
    '**Fragapane Trasporti** (Raffadali) – trasporti: percorso in corso;',
    '**Ditta Costa’s** (Canicattì) – ristorazione: percorso avviato nell’agosto 2026, prima apertura del progetto sul polo canicattinese;',
    '**Comune di Santa Elisabetta** – ente pubblico: due posizioni programmate, convenzione da perfezionare.',
]

if __name__ == '__main__':
    tot = ateco = 0
    for nome, voci in SETTORI:
        c = sum(1 for v in voci if 'ATECO' in v)
        print(f'{nome:48} {len(voci):3d} voci | ATECO {c:3d}')
        tot += len(voci)
        ateco += c
    print(f'{"TOTALE":48} {tot:3d} voci | ATECO {ateco:3d}')
    assert tot == sum(n for *_, n in PER_COMUNE), 'totale settori ≠ totale comuni'
    print('coerenza settori/comuni: ok')
