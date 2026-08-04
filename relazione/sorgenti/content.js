/* Dati della relazione.
   Fonti: Prospetto_Borse_Lavoro_S.ELISABETTA_2026.xlsx (al 04/08/2026)
          Resoconto_orientamento_aggiornato_al_27.07.xlsx (al 27/07/2026) -> utenza.js */

const utenza = require('./utenza.js');

module.exports = {
  utenza,

  borse: [
    { n: 1,  id: "452329", ben: "VINCENT Gift",        ua: "Via Bixio 2",   az: "Ditta MARLOT",           sede: "Raffadali",      set: "Ristorazione",  ini: "09/02/2026", fin: "08/05/2026", mesi: "3", imp: "1.500,00", stato: "Conclusa — saldata" },
    { n: 2,  id: "490485", ben: "TRAORE Baba",         ua: "Corso Umberto", az: "Butera Alfonso",         sede: "S. Elisabetta",  set: "Artigianato",   ini: "20/04/2026", fin: "17/07/2026", mesi: "3", imp: "1.500,00", stato: "Conclusa — erogate 2 mensilità (€ 1.000)" },
    { n: 3,  id: "483276", ben: "CAMARA Ousmane",      ua: "Centro",        az: "Fragapane",              sede: "Raffadali",      set: "Edilizia",      ini: "30/03/2026", fin: "29/06/2026", mesi: "3", imp: "1.500,00", stato: "Conclusa — pagata" },
    { n: 4,  id: "453270", ben: "MARONG Ablie",        ua: "n.d.",          az: "Fragapane Trasporti",    sede: "Raffadali",      set: "Trasporti",     ini: "18/05/2026", fin: "17/08/2026", mesi: "3", imp: "1.500,00", stato: "In corso" },
    { n: 5,  id: "497414", ben: "TALEEM Usama",        ua: "Corso Umberto", az: "Fragapane Bibite",       sede: "S. Elisabetta",  set: "Commercio",     ini: "08/06/2026", fin: "07/09/2026", mesi: "3", imp: "—",        stato: "Interrotta l'11/06/2026" },
    { n: 6,  id: "498810", ben: "HAWLADER Omar",       ua: "Via Galilei",   az: "Comune di S. Elisabetta",sede: "S. Elisabetta",  set: "Ente pubblico", ini: "08/06/2026", fin: "07/09/2026", mesi: "3", imp: "—",        stato: "Non avviata — beneficiario ri-orientato (cfr. n. 10)" },
    { n: 7,  id: "497822", ben: "ISLAM Md Jahidul",    ua: "Via Galilei",   az: "Comune di S. Elisabetta",sede: "S. Elisabetta",  set: "Ente pubblico", ini: "08/06/2026", fin: "07/09/2026", mesi: "3", imp: "—",        stato: "Non avviata — da ricollocare" },
    { n: 8,  id: "494525", ben: "MANNEH Abubacarr",    ua: "Via Galilei",   az: "Ditta Galvano",          sede: "S. Elisabetta",  set: "Artigianato",   ini: "29/06/2026", fin: "25/09/2026", mesi: "3", imp: "1.500,00", stato: "In corso" },
    { n: 9,  id: "483386", ben: "KRUBALLY Sainey",     ua: "Via Galilei",   az: "Bar Ibis",               sede: "S. Elisabetta",  set: "Commercio",     ini: "29/06/2026", fin: "27/09/2026", mesi: "3", imp: "1.500,00", stato: "In corso" },
    { n: 10, id: "498810", ben: "HAWLADER Omar",       ua: "Via Galilei",   az: "Ditta Costa's",          sede: "Canicattì",      set: "Ristorazione",  ini: "03/08/2026", fin: "02/11/2026", mesi: "3", imp: "1.500,00", stato: "In corso — avviata il 03/08/2026" }
  ],

  rete: [
    { az: "Ditta MARLOT",            set: "Ristorazione",  sede: "Raffadali",     ben: "1", note: "Borsa lavoro conclusa + tirocinio extracurriculare in corso" },
    { az: "Butera Alfonso",          set: "Artigianato",   sede: "S. Elisabetta", ben: "1", note: "Percorso concluso" },
    { az: "Fragapane",               set: "Edilizia",      sede: "Raffadali",     ben: "1", note: "Percorso concluso" },
    { az: "Fragapane Trasporti",     set: "Trasporti",     sede: "Raffadali",     ben: "1", note: "Percorso in corso" },
    { az: "Fragapane Bibite",        set: "Commercio",     sede: "S. Elisabetta", ben: "1", note: "Percorso interrotto" },
    { az: "Comune di S. Elisabetta", set: "Ente pubblico", sede: "S. Elisabetta", ben: "2", note: "Convenzione da perfezionare — nessun avvio" },
    { az: "Ditta Galvano",           set: "Artigianato",   sede: "S. Elisabetta", ben: "1", note: "Percorso in corso" },
    { az: "Bar Ibis",                set: "Commercio",     sede: "S. Elisabetta", ben: "1", note: "Percorso in corso" },
    { az: "Ditta Costa's",           set: "Ristorazione",  sede: "Canicattì",     ben: "1", note: "Nuovo inserimento — apertura su nuovo bacino" }
  ],

  scadenze2026: [
    ['07/08/2026', 'TALEEM Usama',            'Borsa interrotta l’11/06 — percorso da riprogrammare prima dell’uscita'],
    ['11/08/2026', 'KARABENTA Mama',          'Colloquio e CV effettuati; determinazione competenze non svolta'],
    ['11/08/2026', 'TRAORE Baba',             'Borsa conclusa il 17/07 — valutare trasformazione in tirocinio'],
    ['15/08/2026', 'SANGARE Madou',           'Nessuna azione registrata — presa in carico da programmare con urgenza'],
    ['18/08/2026', 'SANNEH Lamin',            'Colloquio 26/03, CV 21/07; determinazione competenze non svolta'],
    ['02/09/2026', 'DIALLO Boubacar',         'Colloquio e CV del 20/07; percorso da completare'],
    ['06/10/2026', 'CAMARA Ousmane',          'Borsa conclusa il 29/06 — valutare trasformazione in tirocinio'],
    ['06/10/2026', 'KEITA Nouhoum',           'Percorso completo (colloquio, CV, competenze); nessun inserimento attivato'],
    ['27/11/2026', 'SAAD MOHAMED Abdirahman', 'Nessuna azione registrata — presa in carico da programmare'],
    ['28/12/2026', 'BAMBA Moussa',            'Percorso completo; nessun inserimento attivato'],
    ['31/12/2026', 'DIALLO Moussa',           'Percorso completo; nessun inserimento attivato']
  ],

  scoperti: [
    ['SANGARE Madou',           '643', '23/03/2026', '126', '15/08/2026'],
    ['HOSSAIN Md Emon',         '644', '27/03/2026', '122', '10/12/2028'],
    ['EMENE Abiola',            '56',  '24/04/2026', '94',  'n.d.'],
    ['ITISBOR Juliet',          '57',  '24/04/2026', '94',  'n.d.'],
    ['DOUMBA Moussa',           '646', '27/04/2026', '91',  '01/01/2028'],
    ['SAAD MOHAMED Abdirahman', '651', '27/05/2026', '61',  '27/11/2026'],
    ['SHAKER Mohamed Eid M.',   '652', '10/06/2026', '47',  '30/05/2029']
  ],

  criticita: [
    {
      t: "Tempi di presa in carico superiori allo standard",
      e: "Fra ingresso in progetto e primo colloquio di orientamento intercorrono mediamente 95 giorni, con valore mediano di 51 giorni. Solo il 29% dei beneficiari (12 su 41) è stato intercettato entro trenta giorni; cinque casi superano i duecento giorni, con un massimo di 359.",
      a: "Il dato non è imputabile a una carenza metodologica ma al dimensionamento del servizio: con cinque ore settimanali a fronte di cinquanta beneficiari in carico, la disponibilità media annua è di 5,2 ore per persona, insufficiente a garantire un primo contatto tempestivo su tutti i nuovi ingressi. La media è inoltre appesantita dai casi più risalenti, precedenti all’attuale assetto del servizio.",
      c: "Adozione di un protocollo di primo contatto entro trenta giorni dall’ingresso, con calendarizzazione automatica del colloquio all’atto della segnalazione da parte dell’équipe; monitoraggio trimestrale dell’indicatore."
    },
    {
      t: "Sette beneficiari privi di azioni registrate",
      e: "Sette posizioni non presentano alcuna azione di orientamento: SANGARE Madou, HOSSAIN Md Emon, EMENE Abiola, ITISBOR Juliet, DOUMBA Moussa, SAAD MOHAMED Abdirahman, SHAKER Mohamed Eid Masoud. Si tratta di ingressi compresi fra marzo e giugno 2026, con anzianità di permanenza fra 47 e 126 giorni alla data del resoconto.",
      a: "Le prese in carico risultano programmate e non ancora effettuate. La concentrazione dei sette casi negli ingressi più recenti conferma che il servizio, nella configurazione a cinque ore, riusciva a presidiare lo stock ma non il flusso: i nuovi arrivi si accumulavano in attesa. Due posizioni presentano tuttavia un’anzianità superiore ai centoventi giorni, che eccede quanto giustificabile con la sola programmazione.",
      c: "Calendarizzazione dei sette colloqui entro il 30 settembre 2026, con precedenza a SANGARE Madou, la cui uscita dal progetto è prevista per il 15 agosto 2026, e ai due nuclei familiari. Il rafforzamento dell’organico rende l’obiettivo sostenibile."
    },
    {
      t: "Copertura contenuta della determinazione delle competenze",
      e: "La determinazione delle competenze risulta effettuata per 19 beneficiari su 50, pari al 38,0%. Ventidue beneficiari (44,0%) dispongono di colloquio e curriculum ma non della determinazione.",
      a: "Il dato ha duplice natura. Da un lato riflette una selezione metodologica coerente con il Manuale operativo SAI, che qualifica il bilancio di competenze come lo strumento più complesso del servizio e ne raccomanda l’impiego per i beneficiari con progetto professionale definito o prossimi all’inserimento. Dall’altro sconta un arretrato determinato dal monte ore ridotto, poiché lo strumento richiede più incontri e una elaborazione strutturata.",
      c: "Definizione di un criterio esplicito di attivazione dello strumento — da applicare a tutti i beneficiari con progetto professionale definito, in scadenza di progetto o candidati a un inserimento — e recupero prioritario sui ventidue beneficiari già dotati di colloquio e curriculum. Obiettivo di copertura al 60% entro la chiusura dell’annualità."
    },
    {
      t: "Mancato avvio delle borse presso l’Ente pubblico",
      e: "Due posizioni su dieci (HAWLADER Omar, ISLAM Md Jahidul) risultano «non avviate» a fronte di una data di inizio programmata all’08/06/2026, entrambe presso il Comune di Santa Elisabetta.",
      a: "Il blocco è a monte dell’inserimento e le cause non risultano allo stato chiarite. Trattandosi dell’unico soggetto pubblico della rete, l’impatto è concentrato e non compensato: tutte le posizioni presso soggetti privati sono state regolarmente avviate.",
      c: "Interlocuzione formale con il Comune per accertare le ragioni del mancato avvio e definire un protocollo con tempi certi di attivazione; in subordine, e comunque entro il 15 settembre, riallocazione della posizione di ISLAM Md Jahidul su impresa privata già in rete."
    },
    {
      t: "Interruzione precoce di un percorso di inserimento",
      e: "La borsa di TALEEM Usama, avviata l’08/06/2026 presso Fragapane Bibite, risulta interrotta l’11/06/2026, con durata effettiva di tre giorni.",
      a: "Una interruzione a tre giorni dall’avvio indica un disallineamento non emerso in fase di matching: aspettative sulla mansione, competenza linguistica insufficiente al contesto di vendita, o barriera logistica. Il beneficiario disponeva di colloquio, curriculum e determinazione delle competenze, il che esclude una presa in carico superficiale e circoscrive il problema alla fase di abbinamento.",
      c: "Introduzione di un colloquio tripartito pre-inserimento fra beneficiario, tutor aziendale e orientatore, e di una settimana di prova osservativa; colloquio di uscita strutturato per capitalizzare l’esperienza. La posizione va riprogrammata prima del 7 agosto 2026, data di uscita dal progetto."
    },
    {
      t: "Sotto-impegno della linea di budget",
      e: "Al 04/08/2026 risulta impegnato il 35,0% della dotazione borse lavoro (€ 10.500,00 su € 30.000,00) ed erogato il 13,3% (€ 4.000,00).",
      a: "Le attivazioni si sono concentrate nel secondo trimestre; il mancato avvio di due posizioni e l’interruzione di una terza hanno liberato capacità non ancora riprogrammata. Restano cinque mesi di annualità e ventidue beneficiari dotati di colloquio e curriculum ma privi di inserimento, che costituiscono una platea già istruita.",
      c: "Piano di impegno accelerato agosto-dicembre con obiettivo minimo di 6-8 nuove attivazioni, attingendo prioritariamente ai beneficiari già dotati di determinazione delle competenze, così da portare l’impegno complessivo oltre il 70% della dotazione."
    },
    {
      t: "Bassa conversione fra orientamento e inserimento",
      e: "Su cinquanta beneficiari in carico, nove hanno avuto accesso a una borsa lavoro (18,0%) e uno a un tirocinio extracurriculare (2,0%). Ventidue beneficiari dispongono di colloquio e curriculum senza alcun inserimento attivato.",
      a: "Il rapporto fra istruttoria e inserimento indica che il collo di bottiglia non è nella presa in carico, che copre l’82% dell’utenza, ma nella disponibilità di posti presso i soggetti ospitanti e nella capacità di scouting, comprimibile a cinque ore settimanali. La platea di beneficiari pronti eccede stabilmente le opportunità disponibili.",
      c: "Riequilibrio dell’allocazione oraria a favore dello scouting nel periodo di presenza del collaboratore; obiettivo di cinque nuovi soggetti ospitanti entro dicembre 2026, con priorità ai settori agricoltura, manutenzione del verde e logistica."
    },
    {
      t: "Concentrazione della rete su pochi soggetti ospitanti",
      e: "Tre posizioni su dieci fanno capo a realtà riconducibili alla medesima denominazione (Fragapane: edilizia, trasporti, bibite).",
      a: "La concentrazione espone il servizio al rischio di dipendenza da un numero ristretto di interlocutori e riduce la varietà delle mansioni proponibile a un’utenza di cinquanta persone con profili eterogenei.",
      c: "Campagna di scouting strutturata, con costruzione di un albo dei soggetti ospitanti disponibili e definizione di protocolli quadro che riducano i tempi di attivazione delle singole posizioni."
    },
    {
      t: "Onere della mobilità a carico dei beneficiari",
      e: "Quattro percorsi di inserimento su dieci hanno sede fuori dal comune di residenza: tre a Raffadali (circa 8 km) e uno a Canicattì (circa 30 km).",
      a: "Il costo e i tempi del trasporto pubblico extraurbano incidono in misura rilevante su un’indennità mensile di € 500,00 e costituiscono un fattore di rischio per la tenuta dei percorsi più distanti, oltre a limitare il bacino di imprese effettivamente proponibili.",
      c: "Verifica della disponibilità di abbonamenti agevolati; valutazione dell’inserimento di una voce di rimborso spese di trasporto nella prossima riprogrammazione del piano finanziario."
    },
    {
      t: "Qualità e struttura dei sistemi di rilevazione",
      e: "Nel prospetto borse la colonna «Interruzione» registra lo stato dei pagamenti; la denominazione di un soggetto ospitante compare nella colonna «Unità abitativa»; ricorrono grafie difformi del medesimo soggetto. Nel resoconto orientamento due date di ingresso sono compilate come «22/072025», una sequenza di aggiornamenti del curriculum non rispetta l’ordine cronologico, due beneficiari risultano dotati di curriculum senza colloquio a monte e nove posizioni sono prive della data di fine progetto. I due archivi impiegano inoltre grafie diverse per i medesimi beneficiari.",
      a: "La sovrapposizione fra dati di stato e dati contabili, e l’assenza di una chiave identificativa comune ai due archivi, impediscono il calcolo automatico degli indicatori e rendono onerosa ogni riconciliazione. Nessuna delle anomalie incide sulla sostanza delle attività svolte.",
      c: "Adozione del format revisionato proposto al § 13.2, con chiave identificativa unica per beneficiario condivisa fra i due archivi e separazione fra stato del percorso, motivo di interruzione e movimentazione economica."
    }
  ],

  indicatori: [
    { g: 'Utenza',      i: "Beneficiari in carico al servizio",              f: "n. posizioni monitorate",                        v: "50" },
    { g: 'Utenza',      i: "di cui in nuclei familiari",                     f: "n. posizioni in nucleo",                         v: "4" },
    { g: 'Utenza',      i: "Ingressi in progetto nel 2026",                  f: "n. nuovi ingressi",                              v: "20" },
    { g: 'Utenza',      i: "Uscite previste entro il 31/12/2026",            f: "n. fine progetto nell’anno",                     v: "11" },
    { g: 'Azioni',      i: "Azioni di orientamento registrate",              f: "colloqui + CV + determinazioni",                 v: "128" },
    { g: 'Azioni',      i: "Azioni erogate nel 2026",                        f: "azioni con data 2026",                           v: "63" },
    { g: 'Azioni',      i: "Azioni per beneficiario in carico",              f: "azioni / beneficiari",                           v: "2,6" },
    { g: 'Copertura',   i: "Copertura del colloquio di orientamento",        f: "beneficiari con colloquio / in carico",          v: "82,0%" },
    { g: 'Copertura',   i: "Copertura del curriculum vitae",                 f: "beneficiari con CV / in carico",                 v: "86,0%" },
    { g: 'Copertura',   i: "Copertura della determinazione delle competenze",f: "beneficiari con determinazione / in carico",     v: "38,0%" },
    { g: 'Copertura',   i: "Beneficiari con almeno un’azione",               f: "beneficiari attivati / in carico",               v: "86,0%" },
    { g: 'Copertura',   i: "Beneficiari con percorso completo",              f: "colloquio + CV + determinazione / in carico",    v: "38,0%" },
    { g: 'Tempestività',i: "Tempo mediano ingresso → primo colloquio",       f: "mediana dei giorni intercorsi",                  v: "51 gg" },
    { g: 'Tempestività',i: "Prese in carico entro 30 giorni",                f: "colloqui entro 30 gg / colloqui effettuati",     v: "29,3%" },
    { g: 'Tempestività',i: "Prese in carico entro 90 giorni",                f: "colloqui entro 90 gg / colloqui effettuati",     v: "65,9%" },
    { g: 'Inserimenti', i: "Percorsi di inserimento progettati",             f: "n. borse lavoro programmate",                    v: "10" },
    { g: 'Inserimenti', i: "Tasso di avvio delle borse",                     f: "avviate / programmate",                          v: "80,0%" },
    { g: 'Inserimenti', i: "Tasso di interruzione",                          f: "interrotte / avviate",                           v: "12,5%" },
    { g: 'Inserimenti', i: "Tasso di accesso alla borsa lavoro",             f: "beneficiari con borsa / in carico",              v: "18,0%" },
    { g: 'Inserimenti', i: "Tirocini extracurriculari formalizzati",         f: "n. tirocini attivati",                           v: "1" },
    { g: 'Rete',        i: "Soggetti ospitanti attivati",                    f: "n. realtà in rete",                              v: "9" },
    { g: 'Rete',        i: "Comuni interessati",                             f: "n. sedi comunali di svolgimento",                v: "3" },
    { g: 'Risorse',     i: "Monte ore annuo del servizio",                   f: "ore orientatrice + collaboratore",               v: "444,5 h" },
    { g: 'Risorse',     i: "Ore disponibili per beneficiario",               f: "monte ore annuo / beneficiari in carico",        v: "8,9 h" },
    { g: 'Risorse',     i: "Budget borse lavoro impegnato",                  f: "impegnato / dotazione",                          v: "35,0%" },
    { g: 'Risorse',     i: "Budget borse lavoro erogato",                    f: "erogato / dotazione",                            v: "13,3%" }
  ],

  cronoprogramma: [
    { a: "Colloqui di presa in carico dei sette beneficiari privi di azioni registrate",             s: "Orientatrice + collaboratore", t: "entro il 30/09/2026", p: "Alta" },
    { a: "Presa in carico prioritaria di SANGARE Madou, in uscita dal progetto il 15/08/2026",       s: "Orientatrice",                 t: "entro il 14/08/2026", p: "Urgente" },
    { a: "Riprogrammazione della posizione di TALEEM Usama prima dell’uscita dal progetto",           s: "Orientatrice",                 t: "entro il 06/08/2026", p: "Urgente" },
    { a: "Ricollocazione di ISLAM Md Jahidul su nuovo soggetto ospitante",                            s: "Orientatrice + collaboratore", t: "entro il 15/09/2026", p: "Alta" },
    { a: "Interlocuzione con il Comune e perfezionamento della convenzione per l’ospitalità",         s: "Orientatrice + Coordinamento", t: "entro il 30/09/2026", p: "Alta" },
    { a: "Recupero della determinazione delle competenze sui 22 beneficiari già istruiti",            s: "Orientatrice",                 t: "entro il 31/12/2026", p: "Alta" },
    { a: "Valutazione di trasformazione in tirocinio delle borse in scadenza (17/08, 25/09, 27/09, 02/11)", s: "Orientatrice + APL",     t: "30 gg prima di ciascuna scadenza", p: "Alta" },
    { a: "Colloqui di orientamento all’uscita per gli 11 beneficiari in scadenza nel 2026",           s: "Orientatrice",                 t: "60 gg prima di ciascuna uscita", p: "Media" },
    { a: "Campagna di scouting per cinque nuovi soggetti ospitanti",                                  s: "Orientatrice + collaboratore", t: "entro il 31/12/2026", p: "Media" },
    { a: "Attivazione di nuove borse a valere sul residuo di € 19.500,00 (obiettivo 6-8 percorsi)",    s: "Orientatrice",                 t: "entro il 31/12/2026", p: "Alta" },
    { a: "Definizione del piano formativo individuale (sicurezza, HACCP, alfabetizzazione L2)",        s: "Orientatrice + Équipe",        t: "entro il 30/09/2026", p: "Alta" },
    { a: "Adozione del protocollo di primo contatto entro 30 giorni dall’ingresso",                    s: "Orientatrice + Coordinamento", t: "entro il 15/09/2026", p: "Media" },
    { a: "Adozione del format revisionato dei prospetti e della chiave identificativa unica",          s: "Orientatrice",                 t: "entro il 15/09/2026", p: "Media" },
    { a: "Verifica di prosecuzione dell’incarico di collaborazione oltre il 30/09/2026",               s: "Coordinamento di progetto",    t: "entro il 15/09/2026", p: "Urgente" }
  ]
};
