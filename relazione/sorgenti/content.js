/* Dati della relazione (versione sintetica, centrata sulle azioni).
   Fonti: Prospetto_Borse_Lavoro_S.ELISABETTA_2026.xlsx (al 04/08/2026)
          Resoconto_orientamento_aggiornato_al_27.07.xlsx (al 27/07/2026) */

module.exports = {

  borse: [
    { n: 1,  ben: "VINCENT Gift",     az: "Ditta MARLOT",            sede: "Raffadali",     set: "Ristorazione",  ini: "09/02/2026", fin: "08/05/2026", imp: "1.500,00", stato: "Conclusa — saldata" },
    { n: 2,  ben: "TRAORE Baba",      az: "Butera Alfonso",          sede: "S. Elisabetta", set: "Artigianato",   ini: "20/04/2026", fin: "17/07/2026", imp: "1.500,00", stato: "Conclusa — erogate 2 mensilità" },
    { n: 3,  ben: "CAMARA Ousmane",   az: "Fragapane",               sede: "Raffadali",     set: "Edilizia",      ini: "30/03/2026", fin: "29/06/2026", imp: "1.500,00", stato: "Conclusa — pagata" },
    { n: 4,  ben: "MARONG Ablie",     az: "Fragapane Trasporti",     sede: "Raffadali",     set: "Trasporti",     ini: "18/05/2026", fin: "17/08/2026", imp: "1.500,00", stato: "In corso" },
    { n: 5,  ben: "TALEEM Usama",     az: "Fragapane Bibite",        sede: "S. Elisabetta", set: "Commercio",     ini: "08/06/2026", fin: "07/09/2026", imp: "—",        stato: "Interrotta l'11/06/2026" },
    { n: 6,  ben: "HAWLADER Omar",    az: "Comune di S. Elisabetta", sede: "S. Elisabetta", set: "Ente pubblico", ini: "08/06/2026", fin: "07/09/2026", imp: "—",        stato: "Non avviata — ri-orientato (cfr. n. 10)" },
    { n: 7,  ben: "ISLAM Md Jahidul", az: "Comune di S. Elisabetta", sede: "S. Elisabetta", set: "Ente pubblico", ini: "08/06/2026", fin: "07/09/2026", imp: "—",        stato: "Non avviata — da ricollocare" },
    { n: 8,  ben: "MANNEH Abubacarr", az: "Ditta Galvano",           sede: "S. Elisabetta", set: "Artigianato",   ini: "29/06/2026", fin: "25/09/2026", imp: "1.500,00", stato: "In corso" },
    { n: 9,  ben: "KRUBALLY Sainey",  az: "Bar Ibis",                sede: "S. Elisabetta", set: "Commercio",     ini: "29/06/2026", fin: "27/09/2026", imp: "1.500,00", stato: "In corso" },
    { n: 10, ben: "HAWLADER Omar",    az: "Ditta Costa's",           sede: "Canicattì",     set: "Ristorazione",  ini: "03/08/2026", fin: "02/11/2026", imp: "1.500,00", stato: "In corso — avviata il 03/08" }
  ],

  rete: [
    { az: "Ditta MARLOT",            set: "Ristorazione",  sede: "Raffadali",     ben: "1", note: "Borsa conclusa + tirocinio in corso" },
    { az: "Butera Alfonso",          set: "Artigianato",   sede: "S. Elisabetta", ben: "1", note: "Percorso concluso" },
    { az: "Fragapane",               set: "Edilizia",      sede: "Raffadali",     ben: "1", note: "Percorso concluso" },
    { az: "Fragapane Trasporti",     set: "Trasporti",     sede: "Raffadali",     ben: "1", note: "Percorso in corso" },
    { az: "Fragapane Bibite",        set: "Commercio",     sede: "S. Elisabetta", ben: "1", note: "Percorso interrotto" },
    { az: "Comune di S. Elisabetta", set: "Ente pubblico", sede: "S. Elisabetta", ben: "2", note: "Convenzione da perfezionare" },
    { az: "Ditta Galvano",           set: "Artigianato",   sede: "S. Elisabetta", ben: "1", note: "Percorso in corso" },
    { az: "Bar Ibis",                set: "Commercio",     sede: "S. Elisabetta", ben: "1", note: "Percorso in corso" },
    { az: "Ditta Costa's",           set: "Ristorazione",  sede: "Canicattì",     ben: "1", note: "Apertura su nuovo bacino" }
  ],

  fasi: [
    ['1', 'Accoglienza e orientamento al territorio',
     'Primo contatto, restituzione del funzionamento del mercato del lavoro locale e dei servizi competenti',
     'Standard: entro 30 giorni dall’ingresso'],
    ['2', 'Incontro individuale di orientamento',
     'Biografia formativa e lavorativa, verifica documentale, livello linguistico, aspettative professionali',
     'Scheda individuale aperta — azione tracciata'],
    ['3', 'Redazione del curriculum vitae',
     'Costruzione in formato europeo, con valorizzazione delle esperienze non documentate da titoli',
     'CV consegnato — azione tracciata'],
    ['4', 'Regolarizzazione della posizione amministrativa',
     'Codice fiscale, SPID, DID, iscrizione al CPI, apertura del conto corrente',
     'Accesso alle misure di politica attiva'],
    ['5', 'Determinazione delle competenze',
     'Ricostruzione strutturata del bagaglio di competenze e rilevazione dei vincoli oggettivi',
     'Profilo professionale definito — azione tracciata'],
    ['6', 'Empowerment e preparazione al colloquio',
     'Ricerca attiva, simulazione del colloquio, contrattualistica, diritti e doveri, sicurezza',
     'Prevalentemente in forma di gruppo'],
    ['7', 'Scouting e matching',
     'Individuazione del soggetto ospitante coerente con profilo, logistica e prospettive del settore',
     'Abbinamento definito'],
    ['8', 'Attivazione della misura',
     'Convenzione, progetto formativo, coperture assicurative, obblighi formativi in materia di sicurezza',
     'Borsa lavoro o tirocinio avviato'],
    ['9', 'Tutoraggio in itinere',
     'Visite in azienda, raccordo con il tutor aziendale, registri di presenza, verifica degli obiettivi',
     'Intercettazione precoce dei disallineamenti'],
    ['10', 'Valutazione finale e transizione',
     'Valutazione congiunta, attestazione delle competenze, definizione dello sbocco',
     'Assunzione, tirocinio o ricerca attiva']
  ],

  criticita: [
    {
      t: "Tempi di presa in carico e posizioni non ancora raggiunte",
      e: "Fra ingresso in progetto e primo colloquio intercorrono mediamente 95 giorni, con mediana di 51: solo il 29,3% dei beneficiari è intercettato entro trenta giorni. Sette posizioni, tutte relative a ingressi compresi fra marzo e giugno 2026, non presentano ancora alcuna azione registrata.",
      a: "Il dato è imputabile al dimensionamento e non alla metodologia. Con venti nuovi ingressi nei primi sette mesi dell’anno e cinque ore settimanali di presidio, il servizio ha dovuto scegliere fra il mantenimento delle posizioni già in carico e l’intercettazione dei nuovi arrivi, privilegiando la prima: lo stock è stato presidiato, il flusso si è accumulato.",
      c: "Protocollo di primo contatto entro trenta giorni dall’ingresso, con calendarizzazione automatica all’atto della segnalazione da parte dell’équipe; recupero delle sette posizioni scoperte entro il 30 settembre 2026, con precedenza a quella in uscita dal progetto ad agosto."
    },
    {
      t: "Copertura contenuta della determinazione delle competenze",
      e: "La determinazione delle competenze è stata effettuata per il 38,0% dei beneficiari in carico. Il 44,0% dispone di colloquio e curriculum ma non della determinazione.",
      a: "Il dato ha duplice natura. Riflette una selezione metodologica coerente con il Manuale operativo SAI, che qualifica il bilancio di competenze come lo strumento più complesso del servizio e ne raccomanda l’impiego per i beneficiari con progetto professionale definito. Sconta al tempo stesso un arretrato dovuto al monte ore: uno strumento che richiede più incontri per beneficiario è strutturalmente il primo a essere razionato.",
      c: "Esplicitazione del criterio di attivazione dello strumento, così che la selettività risulti una scelta documentata anziché un esito implicito, e recupero prioritario sui beneficiari già istruiti e su quelli in uscita nel 2026. Obiettivo di copertura al 60% entro fine annualità."
    },
    {
      t: "Bassa conversione fra orientamento e inserimento",
      e: "L’82,0% dell’utenza è stato orientato, ma solo il 18,0% ha avuto accesso a una borsa lavoro. Ventidue beneficiari dispongono di colloquio e curriculum senza alcun inserimento attivato. La rete conta nove soggetti ospitanti, di cui tre riconducibili alla medesima denominazione imprenditoriale.",
      a: "Il collo di bottiglia non è nella fase istruttoria, che funziona, ma nella disponibilità di posti presso i soggetti ospitanti e nella capacità di scouting, alla quale la configurazione ordinaria destina una sola ora settimanale. Cinquanta beneficiari a fronte di nove imprese determinano una capacità di assorbimento largamente inferiore alla domanda potenziale.",
      c: "Riequilibrio dell’allocazione oraria a favore dello scouting nel periodo di presenza del collaboratore, con obiettivo di cinque nuovi soggetti ospitanti entro dicembre 2026 e costruzione di un albo delle imprese disponibili, con protocolli quadro che riducano i tempi di attivazione delle singole posizioni."
    },
    {
      t: "Criticità sui percorsi di inserimento attivati",
      e: "Due borse su dieci non sono state avviate, entrambe presso il Comune di Santa Elisabetta, unico soggetto pubblico della rete. Una terza è stata interrotta al terzo giorno dall’avvio.",
      a: "Il mancato avvio è a monte dell’inserimento e le cause non risultano allo stato chiarite; l’impatto è concentrato, poiché tutte le posizioni presso soggetti privati sono state regolarmente avviate. L’interruzione precoce indica invece un disallineamento non emerso in fase di matching: il beneficiario disponeva dell’intero percorso istruttorio, il che circoscrive il problema all’abbinamento e non alla presa in carico.",
      c: "Interlocuzione formale con il Comune per accertare le ragioni del mancato avvio e definire tempi certi di attivazione; in subordine, riallocazione su impresa privata entro il 15 settembre. Introduzione di un colloquio tripartito pre-inserimento fra beneficiario, tutor aziendale e orientatore, e di una settimana di prova osservativa."
    },
    {
      t: "Sotto-impegno della dotazione finanziaria",
      e: "Al 04/08/2026 risulta impegnato il 35,0% della dotazione borse lavoro (€ 10.500,00 su € 30.000,00) ed erogato il 13,3%. Il residuo disponibile ammonta a € 19.500,00.",
      a: "Concorrono a determinarlo la concentrazione delle attivazioni nel secondo trimestre, il mancato avvio di due posizioni e l’interruzione di una terza. Restano cinque mesi di annualità e una platea di ventidue beneficiari già istruiti, che costituisce una riserva immediatamente disponibile.",
      c: "Piano di impegno accelerato agosto-dicembre con obiettivo minimo di 6-8 nuove attivazioni, attingendo prioritariamente ai beneficiari già dotati di determinazione delle competenze, così da portare l’impegno complessivo oltre il 70% della dotazione."
    },
    {
      t: "Dimensionamento del monte ore",
      e: "Il servizio ha operato fino al 6 luglio 2026 con cinque ore settimanali a fronte di cinquanta beneficiari in carico, pari a 5,2 ore annue per persona. L’ingresso del collaboratore ha portato la capacità settimanale a venti ore.",
      a: "Cinque ore annue per beneficiario non consentono di presidiare simultaneamente i nuovi ingressi, l’aggiornamento delle posizioni in carico, lo scouting aziendale e l’amministrazione degli inserimenti. È il vincolo da cui discendono direttamente le criticità 1, 2 e 3. Il rafforzamento estivo ha prodotto un effetto immediato e misurabile sul volume di attività erogata (§ 4.3).",
      c: "Valutazione della prosecuzione dell’incarico di collaborazione oltre il 30 settembre 2026, in coincidenza con la fase di riprogrammazione e di impiego del residuo di dotazione, e sua considerazione nella costruzione del piano finanziario della successiva annualità."
    },
    {
      t: "Qualità dei sistemi di rilevazione",
      e: "I due archivi in uso non condividono una chiave identificativa e impiegano grafie difformi per i medesimi beneficiari. Il prospetto borse utilizza la colonna «Interruzione» per registrare lo stato dei pagamenti. Il resoconto orientamento presenta due date di ingresso malformate, una sequenza di aggiornamenti non cronologica, due posizioni con curriculum privo di colloquio a monte e nove prive della data di fine progetto.",
      a: "Nessuna delle anomalie incide sulla sostanza delle attività svolte, ma la sovrapposizione fra dati di stato e dati contabili e l’assenza di una chiave comune impediscono il calcolo automatico degli indicatori. Soprattutto, i registri non tracciano una parte rilevante dell’attività erogata, che risulta pertanto sottostimata in sede di rendicontazione.",
      c: "Adozione del format revisionato proposto al § 12.2, con chiave identificativa unica condivisa fra gli archivi, separazione fra stato del percorso e movimentazione economica, e introduzione del tracciamento delle azioni oggi non registrate."
    }
  ],

  indicatori: [
    { g: 'Utenza',      i: "Beneficiari in carico al servizio",              v: "50" },
    { g: 'Utenza',      i: "Ingressi in progetto nel 2026",                  v: "20" },
    { g: 'Utenza',      i: "Uscite previste entro il 31/12/2026",            v: "11" },
    { g: 'Azioni',      i: "Azioni di orientamento registrate",              v: "128" },
    { g: 'Azioni',      i: "di cui erogate nel 2026",                        v: "63" },
    { g: 'Azioni',      i: "Aggiornamenti su posizioni già in carico",       v: "25" },
    { g: 'Azioni',      i: "Azioni per beneficiario in carico",              v: "2,6" },
    { g: 'Copertura',   i: "Beneficiari raggiunti da almeno un’azione",      v: "86,0%" },
    { g: 'Copertura',   i: "Copertura del colloquio di orientamento",        v: "82,0%" },
    { g: 'Copertura',   i: "Copertura del curriculum vitae",                 v: "86,0%" },
    { g: 'Copertura',   i: "Copertura della determinazione delle competenze",v: "38,0%" },
    { g: 'Tempestività',i: "Tempo mediano ingresso → primo colloquio",       v: "51 gg" },
    { g: 'Tempestività',i: "Prese in carico entro 30 giorni",                v: "29,3%" },
    { g: 'Inserimenti', i: "Percorsi di borsa lavoro progettati",            v: "10" },
    { g: 'Inserimenti', i: "Tasso di avvio delle borse",                     v: "80,0%" },
    { g: 'Inserimenti', i: "Tasso di interruzione",                          v: "12,5%" },
    { g: 'Inserimenti', i: "Tasso di accesso alla borsa lavoro",             v: "18,0%" },
    { g: 'Inserimenti', i: "Tirocini extracurriculari formalizzati",         v: "1" },
    { g: 'Rete',        i: "Soggetti ospitanti attivati",                    v: "9" },
    { g: 'Risorse',     i: "Monte ore annuo del servizio",                   v: "444,5 h" },
    { g: 'Risorse',     i: "Ore disponibili per beneficiario",               v: "8,9 h" },
    { g: 'Risorse',     i: "Budget borse lavoro impegnato",                  v: "35,0%" }
  ],

  cronoprogramma: [
    { a: "Riprogrammazione della posizione interrotta prima dell’uscita dal progetto",             s: "Orientatrice",                 t: "06/08/2026", p: "Urgente" },
    { a: "Presa in carico del beneficiario in uscita dal progetto ad agosto",                       s: "Orientatrice",                 t: "14/08/2026", p: "Urgente" },
    { a: "Verifica di prosecuzione dell’incarico di collaborazione oltre il 30/09/2026",            s: "Coordinamento",                t: "15/09/2026", p: "Urgente" },
    { a: "Ricollocazione della posizione non avviata su nuovo soggetto ospitante",                  s: "Orientatrice + collaboratore", t: "15/09/2026", p: "Alta" },
    { a: "Colloqui di presa in carico delle sette posizioni prive di azioni registrate",            s: "Orientatrice + collaboratore", t: "30/09/2026", p: "Alta" },
    { a: "Interlocuzione con il Comune e perfezionamento della convenzione di ospitalità",          s: "Orientatrice + Coordinamento", t: "30/09/2026", p: "Alta" },
    { a: "Definizione del piano formativo (sicurezza, HACCP, alfabetizzazione L2)",                 s: "Orientatrice + Équipe",        t: "30/09/2026", p: "Alta" },
    { a: "Valutazione di trasformazione in tirocinio delle borse in scadenza",                      s: "Orientatrice + APL",           t: "30 gg prima di ogni scadenza", p: "Alta" },
    { a: "Recupero della determinazione delle competenze sui beneficiari già istruiti",             s: "Orientatrice",                 t: "31/12/2026", p: "Alta" },
    { a: "Attivazione di nuove borse sul residuo di € 19.500,00 (obiettivo 6-8 percorsi)",          s: "Orientatrice",                 t: "31/12/2026", p: "Alta" },
    { a: "Campagna di scouting per cinque nuovi soggetti ospitanti",                                s: "Orientatrice + collaboratore", t: "31/12/2026", p: "Media" },
    { a: "Adozione del format revisionato dei registri e della chiave identificativa unica",        s: "Orientatrice",                 t: "15/09/2026", p: "Media" }
  ]
};
