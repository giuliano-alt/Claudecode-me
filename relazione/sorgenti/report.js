/* Sorgente unica della relazione. Consumata da build_docx.js e build_html.js.
   Markup inline: **grassetto**, *corsivo*, [[segnaposto da integrare]].
   Le larghezze di colonna sono frazioni della larghezza utile (somma = 1). */

const D = require('./content.js');

const meta = {
  ente: 'ASSOCIAZIONE CULTURALE COMETA ETS',
  progetto: 'Progetto SAI · PROG-684-PR · Santa Elisabetta (AG)',
  titolo: 'RELAZIONE TECNICA',
  sotto1: 'SERVIZIO DI ORIENTAMENTO',
  sotto2: 'E ACCOMPAGNAMENTO ALL’INSERIMENTO LAVORATIVO',
  claim: 'Annualità 2026 — stato di attuazione al 4 agosto 2026',
  runningHead: 'SAI PROG-684-PR Santa Elisabetta — Relazione servizio orientamento al lavoro — Annualità 2026',
  footer: 'Associazione Culturale Cometa ETS — documento riservato',
  frontespizio: [
    ['Ente attuatore', 'Associazione Culturale Cometa ETS'],
    ['Progetto', 'PROG-684-PR — SAI Santa Elisabetta'],
    ['Annualità di riferimento', '2026'],
    ['Servizio oggetto della relazione', 'Orientamento e accompagnamento all’inserimento lavorativo'],
    ['Linea di intervento', 'Borse lavoro e tirocini — dotazione € 30.000,00'],
    ['Periodo osservato', '1° gennaio – 4 agosto 2026'],
    ['Dati aggiornati al', '4 agosto 2026'],
    ['Redatta da', 'Consulente all’orientamento al lavoro'],
    ['Destinatari', 'Coordinamento di progetto — Ente titolare — Servizio Centrale SAI']
  ],
  privacy: {
    title: 'Trattamento dei dati personali',
    text: 'Il presente documento contiene dati personali di beneficiari titolari di protezione internazionale e richiedenti asilo, trattati ai sensi del Reg. UE 2016/679 e del D.Lgs. 196/2003 come modificato dal D.Lgs. 101/2018, per le sole finalità di monitoraggio e rendicontazione del progetto. La circolazione è riservata ai soggetti istituzionalmente coinvolti nella gestione del progetto. Per usi divulgativi si raccomanda la sostituzione dei nominativi con i soli codici identificativi.'
  },
  toc: [
    ['1', 'Dati identificativi e oggetto della relazione', 0],
    ['2', 'Nota metodologica, fonti ed elementi da integrare', 0],
    ['3', 'Quadro normativo e di riferimento', 0],
    ['4', 'Struttura organizzativa del servizio', 0],
    ['4.1', 'Figure di riferimento e funzioni', 1],
    ['4.2', 'Monte ore e sua articolazione', 1],
    ['4.3', 'Organizzazione settimanale del presidio', 1],
    ['5', 'Metodologia dell’intervento: le fasi del percorso', 0],
    ['6', 'Azioni realizzate a favore dei beneficiari', 0],
    ['7', 'Le borse lavoro: prospetto analitico e analisi', 0],
    ['7.1', 'Prospetto analitico dei percorsi', 1],
    ['7.2', 'Stato di avanzamento', 1],
    ['7.3', 'Analisi settoriale e territoriale', 1],
    ['7.4', 'Quadro economico della linea di intervento', 1],
    ['8', 'Implementazione della rete territoriale', 0],
    ['9', 'Tirocini e percorsi di formazione', 0],
    ['10', 'Criticità rilevate e azioni correttive', 0],
    ['11', 'Indicatori di monitoraggio', 0],
    ['12', 'Programmazione agosto – dicembre 2026', 0],
    ['13', 'Conclusioni', 0]
  ]
};

const C = 'center', R = 'right';

const blocks = [

  { h: 1, n: '1', t: 'Dati identificativi e oggetto della relazione' },
  { p: 'La presente relazione dà conto della strutturazione e dello stato di attuazione del servizio di orientamento e accompagnamento all’inserimento lavorativo nell’ambito del progetto SAI **PROG-684-PR — Santa Elisabetta**, gestito dall’Associazione Culturale Cometa ETS, con riferimento all’annualità 2026 e ai dati disponibili alla data del 4 agosto 2026.' },
  { p: 'Il documento è articolato in tre parti fra loro complementari. La prima descrive l’**assetto organizzativo** del servizio: le figure professionali impiegate, il monte ore contrattualizzato e la sua articolazione operativa, nonché la metodologia di presa in carico adottata. La seconda restituisce le **azioni effettivamente realizzate** a favore dei beneficiari, con il prospetto analitico dei percorsi di inserimento attivati e la ricostruzione della rete territoriale costruita. La terza propone una **lettura valutativa** dei risultati, l’analisi delle criticità emerse con le relative azioni correttive e la programmazione per il periodo residuo dell’annualità.' },
  { p: 'L’obiettivo del servizio, coerentemente con quanto previsto dal sistema SAI, non si esaurisce nell’attivazione di misure di inserimento, ma consiste nell’accompagnare ciascun beneficiario verso una condizione di autonomia lavorativa sostenibile oltre la durata dell’accoglienza. La borsa lavoro va pertanto letta come strumento intermedio all’interno di un percorso, e non come esito finale: è in questa chiave che vengono qui valorizzate le transizioni verso il tirocinio extracurriculare e verso il rapporto di lavoro ordinario.' },

  { h: 1, n: '2', t: 'Nota metodologica, fonti ed elementi da integrare' },
  { h: 3, t: 'Fonti utilizzate' },
  { ul: [
    '**Prospetto Borse Lavoro S. Elisabetta 2026** — documento gestionale interno contenente dieci record di percorso, con indicazione di beneficiario, unità abitativa, soggetto ospitante, sede, settore, date di avvio e conclusione, durata, importo impegnato e annotazioni di stato. Tutti i dati quantitativi riportati ai §§ 7, 8 e 11 derivano da questa fonte.',
    '**Informazioni sull’organico del servizio** trasmesse dal Coordinamento di progetto, relative alle figure impiegate, al monte ore settimanale e alla decorrenza degli incarichi (§ 4).',
    '**Quadro normativo di settore** e prassi operative del sistema SAI (§ 3).'
  ] },
  { h: 3, t: 'Criterio espositivo' },
  { p: 'Il documento distingue rigorosamente fra ciò che risulta **documentato** dalle fonti sopra indicate e ciò che costituisce **impianto metodologico del servizio** o **proposta di programmazione** formulata dal consulente. Le sezioni descrittive del modello operativo (§ 5) e quelle programmatiche (§ 9.3 e § 12) sono presentate come tali e non vanno intese come attività già rendicontate.' },
  { box: {
    kind: 'warn',
    title: 'Elementi da integrare a cura del Servizio',
    lines: [
      'I punti seguenti sono contrassegnati nel testo dalla dicitura [[da integrare]] e richiedono il completamento da parte del Servizio prima della trasmissione formale della relazione:',
      '•  monte ore settimanale contrattualizzato del collaboratore all’orientamento ed estremi della lettera di incarico;',
      '•  numero puntuale dei colloqui individuali erogati, desumibile dal registro colloqui;',
      '•  elenco dei corsi di formazione frequentati dai beneficiari nell’annualità, con attestati conseguiti;',
      '•  estremi delle convenzioni sottoscritte con i soggetti ospitanti e delle relative coperture assicurative;',
      '•  denominazione del Centro per l’Impiego territorialmente competente e del CPIA di riferimento.'
    ]
  } },

  { h: 1, n: '3', t: 'Quadro normativo e di riferimento' },
  { p: 'Il servizio di orientamento al lavoro si colloca all’interno del sistema di accoglienza integrata disciplinato dall’**art. 1-sexies del D.L. 30 dicembre 1989, n. 416**, convertito con modificazioni dalla L. 39/1990, come da ultimo modificato dal **D.L. 130/2020**, convertito con modificazioni dalla **L. 173/2020**, che ha istituito il Sistema di Accoglienza e Integrazione (SAI) in sostituzione del precedente SIPROIMI.' },
  { p: 'Le **Linee Guida SAI**, allegate al decreto del Ministro dell’Interno di riparto del Fondo nazionale per le politiche e i servizi dell’asilo, annoverano l’«orientamento e accompagnamento all’inserimento lavorativo» fra i **servizi minimi obbligatori** che l’ente attuatore è tenuto a garantire. Tale servizio comprende, in particolare: l’orientamento alla normativa italiana in materia di lavoro; la ricostruzione delle competenze e delle esperienze pregresse; l’accompagnamento all’iscrizione ai Centri per l’Impiego; l’informazione sulle opportunità formative e di tirocinio; il sostegno alla ricerca attiva; il monitoraggio dell’inserimento.' },
  { p: 'Sul piano operativo e contabile si è fatto riferimento al **Manuale Operativo SAI** del Servizio Centrale e al **Manuale Unico di Rendicontazione SAI**, con specifico riguardo alla disciplina delle borse lavoro quali misure di politica attiva interne al progetto, distinte per natura e regime dai tirocini extracurriculari.' },
  { p: 'L’attivazione dei **tirocini extracurriculari** è retta dalle Linee guida approvate in sede di Conferenza permanente Stato-Regioni — da ultimo con l’Accordo del 17 maggio 2023, che ha aggiornato quello del 25 maggio 2017 — e dalla disciplina di recepimento della Regione Siciliana, che regola durata, indennità minima, obblighi del soggetto promotore e del soggetto ospitante.' },
  { p: 'Completano il quadro il **D.Lgs. 81/2008** in materia di formazione obbligatoria alla salute e sicurezza sul lavoro, il **D.Lgs. 286/1998** (Testo Unico Immigrazione) quanto ai titoli di soggiorno che consentono l’accesso al lavoro, e il **Reg. UE 2016/679** per il trattamento dei dati personali dei beneficiari.' },
  { note: 'I riferimenti sopra richiamati sono indicati nella loro versione vigente alla data di redazione; se ne raccomanda la verifica puntuale rispetto agli obblighi assunti con la convenzione di progetto.' },

  { h: 1, n: '4', t: 'Struttura organizzativa del servizio' },
  { p: 'Il servizio di orientamento al lavoro è strutturato su **due figure professionali**, con una configurazione che prevede un presidio stabile per l’intera annualità e un rafforzamento temporaneo in corrispondenza del picco di attivazioni del periodo estivo.' },

  { h: 2, n: '4.1', t: 'Figure di riferimento e funzioni' },
  { table: {
    cols: [0.25, 0.21, 0.16, 0.38],
    head: ['Nominativo', 'Ruolo', 'Impegno', 'Periodo di riferimento'],
    rows: [
      ['Tiziana Graceffa', 'Orientatrice al lavoro — titolare del servizio', '5 ore settimanali', 'Intera annualità 2026'],
      ['Giuseppe Lo Presti Seminerio', 'Collaboratore orientatore al lavoro', '[[da integrare]]', 'Dal 07/07/2026 al 30/09/2026']
    ],
    boldFirst: true
  } },
  { h: 3, t: 'Orientatrice al lavoro — Tiziana Graceffa' },
  { p: 'Titolare del servizio, ne presidia l’intero ciclo, dalla presa in carico alla valutazione degli esiti. In particolare:' },
  { ul: [
    '**presa in carico** del beneficiario e conduzione dei colloqui individuali di orientamento;',
    '**bilancio di competenze** e ricostruzione del profilo professionale, con emersione delle competenze acquisite nel Paese di origine e lungo il percorso migratorio;',
    '**progettazione individualizzata** del percorso di inserimento, in raccordo con l’équipe multidisciplinare e con il progetto educativo individuale;',
    '**scouting aziendale** e attività di matching fra profilo del beneficiario e fabbisogni delle imprese del territorio;',
    '**istruttoria e gestione amministrativa** delle borse lavoro: convenzioni con i soggetti ospitanti, progetti formativi, coperture assicurative, registri presenze, liquidazione delle mensilità;',
    '**tutoraggio in itinere**, con visite in azienda e raccordo con il tutor aziendale;',
    '**rapporti istituzionali** con Centri per l’Impiego, Agenzie per il Lavoro, enti promotori di tirocinio, enti di formazione;',
    '**monitoraggio e rendicontazione**, con aggiornamento del prospetto di servizio e produzione della documentazione richiesta ai fini della rendicontazione SAI.'
  ] },
  { h: 3, t: 'Collaboratore orientatore al lavoro — Giuseppe Lo Presti Seminerio' },
  { p: 'L’incarico, con decorrenza **7 luglio 2026** e scadenza **30 settembre 2026**, è stato attivato in corrispondenza della fase di maggiore intensità operativa dell’annualità: nel solo trimestre giugno-agosto 2026 risultano infatti programmate sei posizioni su dieci. La funzione è di supporto operativo all’orientatrice, con particolare riferimento a:' },
  { ul: [
    '**affiancamento nei colloqui** individuali e di gruppo;',
    '**accompagnamento fisico** dei beneficiari presso i soggetti ospitanti, i Centri per l’Impiego e gli uffici pubblici, con funzione di mediazione pratica;',
    '**supporto documentale**: redazione e aggiornamento dei curriculum vitae, attivazione dell’identità digitale, dichiarazione di immediata disponibilità al lavoro, pratiche connesse al titolo di soggiorno;',
    '**monitoraggio in azienda** dei percorsi in corso e raccolta dei registri di presenza;',
    '**supporto alla tenuta** della documentazione di servizio e all’aggiornamento del prospetto di monitoraggio.'
  ] },

  { h: 2, n: '4.2', t: 'Monte ore e sua articolazione' },
  { p: 'Il monte ore complessivo del servizio si compone di una quota stabile, garantita per l’intera annualità dall’orientatrice, e di una quota aggiuntiva concentrata nel trimestre luglio-settembre.' },
  { table: {
    cols: [0.27, 0.16, 0.17, 0.15, 0.25],
    head: ['Figura', 'Ore settimanali', 'Settimane nel periodo', 'Ore nel periodo', 'Base di calcolo'],
    rows: [
      ['Tiziana Graceffa', '5,0', '30,7', '≈ 153', '01/01/2026 – 04/08/2026'],
      ['Tiziana Graceffa', '5,0', '52,0', '260', 'Proiezione annua 2026'],
      ['Giuseppe Lo Presti Seminerio', '[[da int.]]', '12,3', '[[da integrare]]', '07/07/2026 – 30/09/2026'],
      ['Giuseppe Lo Presti Seminerio', '[[da int.]]', '4,0', '[[da integrare]]', 'Quota già maturata al 04/08/2026']
    ],
    align: [null, C, C, C, null]
  } },
  { p: 'Il periodo di incarico del collaboratore, compreso fra il 7 luglio e il 30 settembre 2026, corrisponde a **86 giorni di calendario**, pari a **12,3 settimane** ovvero a circa **2,8 mesi**; alla data della presente relazione ne risultano decorse quattro settimane. Il monte ore complessivo dell’incarico è pertanto pari al prodotto fra le ore settimanali contrattualizzate e il coefficiente 12,3: il dato sarà definito una volta acquisiti gli estremi della lettera di incarico.' },
  { p: 'Nella proiezione annua, la sola orientatrice assicura **260 ore** di servizio, corrispondenti a una media di **21,7 ore mensili**. Rapportato ai nove beneficiari presi in carico nell’annualità, ciò equivale a una disponibilità media di circa **28,9 ore per beneficiario**, comprensive di colloqui, attività di scouting, gestione amministrativa e tutoraggio: un valore che colloca il servizio in una condizione di sostenibilità solo a fronte di una organizzazione rigorosa delle attività, come illustrato al paragrafo seguente.' },

  { h: 2, n: '4.3', t: 'Organizzazione settimanale del presidio' },
  { p: 'Per rendere compatibile l’ampiezza delle funzioni con il monte ore disponibile, le cinque ore settimanali dell’orientatrice sono articolate secondo lo schema che segue, che alterna attività a diretto contatto con i beneficiari e attività di back office:' },
  { table: {
    cols: [0.14, 0.46, 0.40],
    head: ['Ore', 'Attività', 'Modalità'],
    rows: [
      ['2,0', 'Colloqui individuali di orientamento e bilancio di competenze', 'Su appuntamento, presso la sede di progetto'],
      ['1,0', 'Scouting aziendale e cura dei rapporti con la rete territoriale', 'Contatti telefonici, visite alle imprese'],
      ['1,0', 'Tutoraggio e monitoraggio dei percorsi in corso', 'Visite in azienda, raccordo con i tutor aziendali'],
      ['1,0', 'Gestione amministrativa, documentale e di rendicontazione', 'Back office'],
      ['**5,0**', '**Totale settimanale**', '']
    ],
    align: [C, null, null]
  } },
  { p: 'Nel trimestre luglio-settembre l’apporto del collaboratore consente di raddoppiare, di fatto, la capacità di presidio, con effetto principalmente sulle attività di accompagnamento e di monitoraggio in azienda — le più onerose in termini di tempo e le prime a essere compresse in una configurazione a sole cinque ore. Non è casuale che proprio in tale trimestre si concentri il maggior numero di attivazioni dell’annualità.' },

  { h: 1, n: '5', t: 'Metodologia dell’intervento: le fasi del percorso' },
  { p: 'Il servizio adotta un modello per fasi successive, ciascuna con esiti verificabili, che consente di ricostruire in ogni momento il punto del percorso in cui ciascun beneficiario si colloca. Il modello è descritto di seguito nella sua articolazione operativa.' },
  { h: 3, t: 'Fase 1 — Accoglienza e primo colloquio conoscitivo' },
  { p: 'Da svolgersi entro trenta giorni dall’ingresso in accoglienza. Ha per oggetto la ricostruzione della biografia formativa e lavorativa, la verifica della posizione documentale rispetto all’accesso al lavoro, la rilevazione del livello di competenza linguistica e la restituzione al beneficiario del funzionamento del mercato del lavoro locale. Esito: apertura della scheda individuale di orientamento.' },
  { h: 3, t: 'Fase 2 — Bilancio di competenze' },
  { p: 'Ricostruzione strutturata delle competenze possedute, comprensive di quelle acquisite in contesti non formali e informali nel Paese di origine o lungo il percorso migratorio, spesso non documentate da titoli e per questo sistematicamente sottostimate. Si rilevano in parallelo i vincoli oggettivi: livello di italiano L2, possesso della patente di guida, disponibilità alla mobilità, scadenza del titolo di soggiorno, obblighi di cura familiari.' },
  { h: 3, t: 'Fase 3 — Patto di servizio e piano individualizzato' },
  { p: 'Definizione condivisa dell’obiettivo professionale e delle azioni necessarie a conseguirlo, con indicazione dei tempi e degli impegni reciproci. Il piano è sottoscritto dal beneficiario e integrato nel progetto educativo individuale, in raccordo con l’équipe multidisciplinare. Esito: patto di servizio sottoscritto.' },
  { h: 3, t: 'Fase 4 — Empowerment e alfabetizzazione al lavoro' },
  { p: 'Attività di gruppo e individuali su: redazione del curriculum vitae in formato europeo; tecniche di ricerca attiva; simulazione del colloquio di selezione; elementi essenziali di contrattualistica, busta paga e diritti e doveri del lavoratore; nozioni di base in materia di sicurezza sul lavoro. È la fase che più incide sulla tenuta autonoma del beneficiario dopo l’uscita dall’accoglienza.' },
  { h: 3, t: 'Fase 5 — Regolarizzazione della posizione amministrativa' },
  { p: 'Accompagnamento agli adempimenti che condizionano l’accesso alle misure di politica attiva: attribuzione del codice fiscale, attivazione dell’identità digitale, rilascio della dichiarazione di immediata disponibilità, iscrizione al Centro per l’Impiego, apertura del rapporto di conto corrente per l’accredito dell’indennità. La mancata cura di questa fase costituisce la più frequente causa di ritardo nell’avvio dei percorsi.' },
  { h: 3, t: 'Fase 6 — Scouting e matching' },
  { p: 'Individuazione del soggetto ospitante coerente con il profilo e con l’obiettivo professionale definito. Il matching non si limita alla disponibilità dell’impresa, ma considera la sostenibilità logistica della sede, la presenza di un tutor aziendale effettivamente disponibile e la coerenza della mansione con le prospettive occupazionali del settore.' },
  { h: 3, t: 'Fase 7 — Attivazione della misura' },
  { p: 'Formalizzazione della borsa lavoro o del tirocinio: sottoscrizione della convenzione, redazione del progetto formativo individuale con indicazione degli obiettivi di apprendimento, attivazione delle coperture assicurative, assolvimento degli obblighi formativi in materia di sicurezza, comunicazioni obbligatorie ove previste.' },
  { h: 3, t: 'Fase 8 — Tutoraggio in itinere' },
  { p: 'Monitoraggio periodico mediante visite in azienda, colloqui con il beneficiario e raccordo con il tutor aziendale, con raccolta dei registri di presenza e verifica del rispetto degli obiettivi formativi. È la fase che consente di intercettare precocemente i segnali di disallineamento, prima che questi esitino in un’interruzione.' },
  { h: 3, t: 'Fase 9 — Valutazione finale e transizione' },
  { p: 'Valutazione congiunta dell’esperienza con il beneficiario e con il soggetto ospitante, rilascio dell’attestazione delle competenze acquisite e definizione dello sbocco: assunzione diretta, attivazione di un tirocinio extracurriculare, prosecuzione della ricerca attiva. Il caso illustrato al § 9.1 documenta il funzionamento di questa fase.' },

  { h: 1, n: '6', t: 'Azioni realizzate a favore dei beneficiari' },
  { p: 'Nell’annualità 2026, alla data del 4 agosto, il servizio ha prodotto le risultanze quantitative di seguito riepilogate, tutte documentate dal prospetto di monitoraggio.' },
  { table: {
    cols: [0.50, 0.14, 0.36],
    head: ['Azione', 'Valore', 'Riferimento'],
    rows: [
      ['Beneficiari presi in carico dal servizio', '9', 'Nominativi distinti — § 7.1'],
      ['Percorsi di inserimento progettati', '10', 'Comprensivi di un ri-orientamento — § 7.1'],
      ['Percorsi effettivamente avviati', '8', '§ 7.2'],
      ['Percorsi conclusi regolarmente', '3', '§ 7.2'],
      ['Percorsi in corso alla data', '4', '§ 7.2'],
      ['Soggetti ospitanti attivati', '9', '§ 8.1'],
      ['Comuni interessati dai percorsi', '3', 'S. Elisabetta, Raffadali, Canicattì'],
      ['Settori economici coinvolti', '6', '§ 7.3'],
      ['Tirocini extracurriculari formalizzati', '1', '§ 9.1'],
      ['Ri-orientamenti a seguito di mancato avvio', '1', '§ 9.2']
    ],
    align: [null, C, null]
  } },
  { p: 'A queste risultanze si affiancano le azioni ordinarie del servizio — colloqui individuali di orientamento, bilanci di competenze, redazione e aggiornamento dei curriculum vitae, accompagnamenti al Centro per l’Impiego, attivazione delle identità digitali, mediazione con i soggetti ospitanti, visite di monitoraggio — la cui quantificazione puntuale è desumibile dal registro dei colloqui e dai fogli firma del servizio. [[Dato da integrare a cura del Servizio.]]' },
  { p: 'Merita segnalazione, sul piano qualitativo, il fatto che i dieci percorsi progettati facciano capo a **nove beneficiari distinti**: un beneficiario è stato infatti oggetto di **due progettazioni successive**, a seguito del mancato avvio della prima. La capacità di riprogettare in tempi brevi un percorso non andato a buon fine, anziché registrarne semplicemente il fallimento, costituisce un indicatore significativo della reattività del servizio.' },

  { land: 'start' },
  { h: 1, n: '7', t: 'Le borse lavoro: prospetto analitico e analisi' },
  { h: 2, n: '7.1', t: 'Prospetto analitico dei percorsi' },
  { p: 'Il prospetto che segue riporta la totalità dei percorsi di inserimento progettati nell’annualità 2026, ordinati per data di avvio.' },
  { table: {
    landscape: true,
    cols: [0.034, 0.062, 0.144, 0.089, 0.137, 0.082, 0.082, 0.069, 0.069, 0.041, 0.076, 0.115],
    head: ['N.', 'ID', 'Beneficiario', 'Unità abitativa', 'Soggetto ospitante', 'Sede', 'Settore', 'Inizio', 'Fine', 'Mesi', 'Importo €', 'Stato del percorso'],
    rows: D.borse.map(b => [b.n, b.id, b.ben, b.ua, b.az, b.sede, b.set, b.ini, b.fin, b.mesi, b.imp, b.stato]),
    align: [C, C, null, null, null, null, null, C, C, C, R, null],
    small: true,
    cards: D.borse.map(b => ({
      title: `${b.n}. ${b.ben}`,
      sub: `ID ${b.id}`,
      badge: b.stato.split(' — ')[0],
      fields: [
        ['Soggetto ospitante', b.az], ['Sede', b.sede], ['Settore', b.set],
        ['Unità abitativa', b.ua], ['Periodo', `${b.ini} – ${b.fin}`],
        ['Durata', `${b.mesi} mesi`], ['Importo', b.imp === '—' ? '—' : `€ ${b.imp}`],
        ['Stato', b.stato]
      ]
    }))
  } },
  { note: 'Fonte: prospetto gestionale di progetto, dati al 04/08/2026. Le posizioni nn. 6 e 10 fanno capo al medesimo beneficiario (ID 498810): la seconda costituisce ri-orientamento a seguito del mancato avvio della prima.' },
  { land: 'end' },

  { h: 2, n: '7.2', t: 'Stato di avanzamento' },
  { p: 'Alla data del 4 agosto 2026 i dieci percorsi progettati si distribuiscono come segue.' },
  { table: {
    cols: [0.27, 0.09, 0.64],
    head: ['Stato', 'N.', 'Percorsi'],
    rows: [
      ['Conclusi regolarmente', '3', 'VINCENT Gift (08/05), CAMARA Ousmane (29/06), TRAORE Baba (17/07)'],
      ['In corso alla data', '4', 'MARONG Abile (fino al 17/08), MANNEH Abubacarr (fino al 25/09), KRUBALLY Sainey (fino al 27/09), HAWLADER Omar (fino al 02/11)'],
      ['Interrotti', '1', 'TALEEM Usama — interruzione l’11/06/2026'],
      ['Non avviati', '2', 'HAWLADER Omar e ISLAM Md Jahiddul, entrambi presso il Comune'],
      ['**Totale**', '**10**', '']
    ],
    align: [null, C, null]
  } },
  { p: 'Ne discendono tre indicatori di sintesi. Il **tasso di avvio** — rapporto fra percorsi avviati e percorsi programmati — si attesta all’**80,0%**, valore da considerarsi soddisfacente ma che sconta interamente il blocco delle due posizioni presso l’Ente pubblico. Il **tasso di interruzione**, calcolato sui soli percorsi avviati, è pari al **12,5%** (una posizione su otto): un dato contenuto e in linea con quanto fisiologicamente atteso in misure di questa natura. Il **tasso di conclusione regolare** è pari al 37,5% delle avviate, con l’avvertenza che quattro percorsi risultano ancora in svolgimento e concorreranno al dato definitivo di fine annualità.' },
  { p: 'Va segnalato che **nessuno dei percorsi conclusi si è interrotto anticipatamente**: le tre posizioni giunte a termine hanno completato per intero le tre mensilità previste. L’unica interruzione registrata è intervenuta al terzo giorno dall’avvio, configurandosi come mancato ambientamento più che come abbandono di un percorso avviato.' },

  { h: 2, n: '7.3', t: 'Analisi settoriale e territoriale' },
  { p: 'La distribuzione dei percorsi per settore economico restituisce un quadro articolato, che riflette la struttura produttiva del territorio.' },
  { table: {
    cols: [0.33, 0.09, 0.58],
    head: ['Settore', 'N.', 'Soggetti ospitanti'],
    rows: [
      ['Ristorazione', '2', 'Ditta MARLOT (Raffadali), Ditta Costa’s (Canicattì)'],
      ['Artigianato', '2', 'Butera Alfonso, Ditta Galvano (S. Elisabetta)'],
      ['Commercio', '2', 'Fragapane Bibite, Bar Ibis (S. Elisabetta)'],
      ['Ente pubblico', '2', 'Comune di Santa Elisabetta'],
      ['Edilizia', '1', 'Fragapane (Raffadali)'],
      ['Trasporti', '1', 'Fragapane Trasporti (Raffadali)']
    ],
    align: [null, C, null]
  } },
  { p: 'Sul piano territoriale, sei percorsi si svolgono nel comune di **Santa Elisabetta**, tre a **Raffadali** (circa 8 km) e uno a **Canicattì** (circa 30 km). L’apertura sul bacino di Canicattì, intervenuta nell’agosto 2026, rappresenta un ampliamento significativo del raggio di azione del servizio verso un contesto economico più ampio, ma introduce al tempo stesso un fattore di attenzione sul piano della mobilità dei beneficiari, trattato al § 10.' },
  { p: 'Un dato merita specifica considerazione: **entrambe le posizioni presso l’unico soggetto pubblico della rete risultano non avviate**, mentre tutte le posizioni presso soggetti privati sono state avviate. Il dato, per quanto riferito a numeri contenuti, indica una criticità concentrata sul versante della collaborazione istituzionale, che richiede un intervento mirato.' },

  { h: 2, n: '7.4', t: 'Quadro economico della linea di intervento' },
  { p: 'La linea di intervento dispone di una dotazione di **€ 30.000,00** da Piano Finanziario approvato. Il valore unitario standard della borsa lavoro è pari a **€ 1.500,00** per tre mensilità, corrispondenti a **€ 500,00 mensili**.' },
  { table: {
    cols: [0.48, 0.19, 0.14, 0.19],
    head: ['Voce', 'Importo €', 'Quota', 'Note'],
    rows: [
      ['Dotazione da Piano Finanziario', '30.000,00', '100,0%', 'Linea borse lavoro'],
      ['Importo impegnato', '10.500,00', '35,0%', '7 borse × € 1.500,00'],
      ['di cui erogato e documentato', '4.000,00', '13,3%', 'VINCENT 1.500 + CAMARA 1.500 + TRAORE 1.000'],
      ['di cui da erogare su impegni assunti', '6.500,00', '21,7%', 'Percorsi in corso e saldi'],
      ['**Residuo disponibile**', '**19.500,00**', '**65,0%**', 'Riprogrammabile su nuove attivazioni']
    ],
    align: [null, R, C, null]
  } },
  { p: 'Il quadro evidenzia un **sotto-impegno della dotazione**: a poco più di due terzi dell’annualità trascorsi risulta impegnato appena il 35,0% delle risorse disponibili. Concorrono a determinarlo il mancato avvio di due posizioni, l’interruzione precoce di una terza e la concentrazione delle attivazioni nel secondo trimestre.' },
  { p: 'Il residuo di **€ 19.500,00** corrisponde, a valori unitari invariati, a una capacità teorica di **tredici ulteriori percorsi trimestrali**. Poiché una borsa attivata entro il mese di settembre può completare le tre mensilità entro la chiusura dell’annualità, esiste un margine concreto per un recupero sostanziale del livello di impegno: è su questo presupposto che si fonda il piano di attivazione proposto al § 12.' },

  { h: 1, n: '8', t: 'Implementazione della rete territoriale' },
  { p: 'La costruzione della rete territoriale costituisce la precondizione di ogni inserimento lavorativo e rappresenta, in un contesto di piccoli comuni dell’entroterra agrigentino, l’attività a più elevata intensità relazionale fra quelle svolte dal servizio. Nell’annualità 2026 sono stati attivati **nove soggetti ospitanti** distribuiti su tre comuni e sei settori economici.' },
  { h: 2, n: '8.1', t: 'Soggetti ospitanti attivati' },
  { table: {
    cols: [0.25, 0.16, 0.16, 0.07, 0.36],
    head: ['Soggetto ospitante', 'Settore', 'Sede', 'Ben.', 'Stato della collaborazione'],
    rows: D.rete.map(r => [r.az, r.set, r.sede, r.ben, r.note]),
    align: [null, null, null, C, null]
  } },
  { h: 2, n: '8.2', t: 'Soggetti istituzionali e attori del sistema dei servizi per il lavoro' },
  { p: 'Accanto alle imprese ospitanti, il servizio ha costruito o consolidato il raccordo con i seguenti attori:' },
  { ul: [
    '**Comune di Santa Elisabetta** — Ente titolare del progetto e, nell’annualità, anche soggetto ospitante per due posizioni. Il doppio ruolo rende particolarmente rilevante il perfezionamento della collaborazione operativa richiamato al § 10.',
    '**APL UIL CST — Agenzia per il Lavoro** — soggetto promotore del tirocinio extracurriculare attivato a favore di un beneficiario (§ 9.1). Il raccordo con un’Agenzia per il Lavoro accreditata rappresenta l’acquisizione di maggior valore strutturale dell’annualità, in quanto consente di accedere a strumenti di politica attiva ordinari, esterni al perimetro finanziario del progetto.',
    '**Centro per l’Impiego territorialmente competente** — per l’iscrizione dei beneficiari, il rilascio della dichiarazione di immediata disponibilità e l’accesso alle misure regionali. [[Denominazione da integrare.]]',
    '**CPIA — Centro Provinciale per l’Istruzione degli Adulti** — per i percorsi di alfabetizzazione e per il conseguimento del titolo conclusivo del primo ciclo, prerequisito di accesso a numerosi percorsi formativi regionali. [[Sede di riferimento da integrare.]]'
  ] },
  { h: 2, n: '8.3', t: 'Azioni di implementazione realizzate' },
  { ul: [
    '**Scouting diretto** presso le imprese del territorio, con presentazione dello strumento della borsa lavoro e degli obblighi in capo al soggetto ospitante;',
    '**estensione del bacino territoriale** oltre i confini comunali, con il coinvolgimento di realtà di Raffadali e, dall’agosto 2026, di Canicattì;',
    '**diversificazione settoriale**, con la copertura di sei settori economici distinti, che consente di proporre ai beneficiari un ventaglio di mansioni coerente con profili eterogenei;',
    '**coinvolgimento di un’Agenzia per il Lavoro accreditata** in qualità di soggetto promotore, con conseguente accesso alla strumentazione ordinaria di politica attiva;',
    '**fidelizzazione dei soggetti ospitanti**, come attesta il caso della Ditta MARLOT, che ha proseguito la collaborazione oltre la conclusione della borsa lavoro mediante l’accoglimento del successivo tirocinio.'
  ] },
  { h: 2, n: '8.4', t: 'Considerazioni sulla rete' },
  { p: 'La rete costruita presenta un buon grado di articolazione settoriale ma una **concentrazione da presidiare**: tre posizioni su dieci fanno capo a realtà riconducibili alla medesima denominazione imprenditoriale, operanti peraltro in settori diversi. Se da un lato ciò testimonia la solidità del rapporto costruito con un interlocutore disponibile, dall’altro espone il servizio a una dipendenza che è opportuno ridurre mediante l’ampliamento della base di imprese ospitanti.' },
  { p: 'Il tema della **mobilità** costituisce il secondo fattore di attenzione: quattro percorsi su dieci si svolgono fuori dal comune di residenza. Su un’indennità mensile di € 500,00, il costo del trasporto pubblico extraurbano incide in misura non trascurabile e può compromettere la tenuta dei percorsi più distanti.' },

  { h: 1, n: '9', t: 'Tirocini e percorsi di formazione' },
  { h: 2, n: '9.1', t: 'Tirocinio extracurriculare attivato' },
  { p: 'Nell’annualità è stato formalizzato un tirocinio extracurriculare, che costituisce l’esito di maggior rilievo conseguito dal servizio.' },
  { table: {
    cols: [0.29, 0.71],
    head: null,
    rows: [
      ['Beneficiario', 'VINCENT Gift — ID 452329'],
      ['Soggetto ospitante', 'Ditta MARLOT — Raffadali (AG) — settore ristorazione'],
      ['Soggetto promotore', 'APL UIL CST — Agenzia per il Lavoro'],
      ['Periodo', 'Dal 01/06/2026 al 30/11/2026 — sei mesi'],
      ['Percorso pregresso', 'Borsa lavoro presso il medesimo soggetto ospitante, dal 09/02/2026 all’08/05/2026, regolarmente conclusa e saldata']
    ],
    boldFirst: true
  } },
  { p: 'Il caso documenta il funzionamento della sequenza che il servizio assume come modello di riferimento: la borsa lavoro, misura interna al progetto e finanziata sulla dotazione SAI, ha svolto la funzione di **strumento di ingresso e di verifica reciproca**; conclusasi positivamente e consolidato il rapporto fiduciario con l’impresa, il percorso è proseguito con una misura di politica attiva **ordinaria**, promossa da un’Agenzia per il Lavoro accreditata e di durata doppia rispetto alla borsa.' },
  { p: 'La transizione produce tre effetti convergenti. In primo luogo determina un **alleggerimento della dotazione di progetto**, poiché l’indennità di tirocinio e le coperture assicurative gravano sui soggetti ospitante e promotore anziché sul budget SAI, liberando risorse per nuove attivazioni. In secondo luogo colloca il beneficiario in un **rapporto formalizzato secondo la disciplina ordinaria**, dotato di riconoscibilità esterna e di valore certificativo spendibile nel mercato del lavoro. In terzo luogo, la durata semestrale e la continuità presso la medesima impresa configurano una **prospettiva concreta di assunzione** al termine del tirocinio.' },
  { p: 'Si raccomanda l’assunzione di questa sequenza quale **standard operativo del servizio**: per ciascuna borsa lavoro in scadenza, la valutazione di trasformabilità in tirocinio extracurriculare dovrebbe essere avviata sistematicamente nei trenta giorni antecedenti la conclusione, in raccordo con il soggetto promotore.' },

  { h: 2, n: '9.2', t: 'Percorsi in fase di attivazione o riprogrammazione' },
  { ul: [
    '**HAWLADER Omar (ID 498810)** — a seguito del mancato avvio della borsa programmata presso il Comune, il beneficiario è stato ri-orientato verso la Ditta Costa’s di Canicattì, con avvio del percorso il **3 agosto 2026** e conclusione prevista il 2 novembre 2026. Si tratta dell’unico caso di riprogettazione già perfezionata.',
    '**ISLAM Md Jahiddul (ID 497822)** — posizione presso il Comune non avviata; il beneficiario è **in attesa di ricollocazione** su nuovo soggetto ospitante. Costituisce la priorità operativa immediata del servizio (§ 12).',
    '**TALEEM Usama (ID 497414)** — percorso interrotto l’11 giugno 2026; è prevista la riprogrammazione previo colloquio di ri-orientamento volto a ricostruire le ragioni del mancato ambientamento e a ridefinire l’obiettivo professionale.',
    '**Percorsi in scadenza** — le quattro borse in corso giungono a conclusione fra il 17 agosto e il 2 novembre 2026; per ciascuna è avviata la valutazione di trasformabilità in tirocinio secondo il modello del § 9.1.'
  ] },

  { h: 2, n: '9.3', t: 'Percorsi di formazione' },
  { p: 'L’attività formativa erogata ai beneficiari nell’annualità non risulta documentata nel prospetto di monitoraggio del servizio, che rileva le sole misure di inserimento. [[Sezione da integrare a cura del Servizio con l’elenco dei corsi frequentati e degli attestati conseguiti.]]' },
  { p: 'Nell’ambito della funzione consulenziale si segnalano di seguito le azioni formative che, alla luce dei profili presi in carico e dei settori di inserimento attivati, appaiono prioritarie e se ne raccomanda la programmazione per il periodo residuo dell’annualità:' },
  { table: {
    cols: [0.31, 0.44, 0.25],
    head: ['Azione formativa', 'Destinatari e motivazione', 'Priorità'],
    rows: [
      ['Formazione generale e specifica in materia di salute e sicurezza (D.Lgs. 81/2008)', 'Tutti i beneficiari inseriti; obbligo di legge presupposto all’avvio di ogni percorso, con specifica per settore di rischio', 'Alta — obbligo'],
      ['HACCP — igiene e sicurezza alimentare', 'Beneficiari inseriti in ristorazione e commercio alimentare (4 posizioni su 10); requisito richiesto dalle imprese del settore', 'Alta'],
      ['Alfabetizzazione L2 e certificazione livello A2 presso CPIA', 'Beneficiari con competenza linguistica insufficiente al contesto lavorativo; fattore di rischio per la tenuta dei percorsi', 'Alta'],
      ['Conseguimento della patente di guida cat. B', 'Beneficiari inseriti fuori dal comune di residenza; incide sull’autonomia negli spostamenti e sull’occupabilità', 'Media'],
      ['Patentino per la conduzione di carrelli elevatori', 'Beneficiari inseriti in edilizia, trasporti e logistica; qualifica a elevata spendibilità immediata', 'Media'],
      ['Percorsi professionalizzanti a valere sugli avvisi della Regione Siciliana', 'Beneficiari con progetto professionale definito; da programmare in funzione delle finestre di avviso', 'Da verificare']
    ],
    small: true
  } },
  { p: 'Si raccomanda in particolare la **verifica sistematica dell’assolvimento degli obblighi formativi in materia di sicurezza** per tutti i percorsi in corso, trattandosi di adempimento di legge la cui omissione espone il progetto e i soggetti ospitanti a responsabilità.' },

  { h: 1, n: '10', t: 'Criticità rilevate e azioni correttive' },
  { p: 'L’analisi delle risultanze consente di isolare sette aree di criticità, ciascuna delle quali è di seguito ricondotta all’evidenza che la sostiene, alla lettura interpretativa e all’azione correttiva proposta.' },
  ...D.criticita.flatMap((c, i) => [
    { h: 3, t: `10.${i + 1}  ${c.t}` },
    { p: `**Evidenza.** ${c.e}`, tight: true },
    { p: `**Analisi.** ${c.a}`, tight: true },
    { p: `**Azione correttiva.** ${c.c}`, accent: true }
  ]),

  { h: 1, n: '11', t: 'Indicatori di monitoraggio' },
  { p: 'Si propone l’adozione stabile del set di indicatori di seguito riportato, con rilevazione trimestrale, quale strumento di autovalutazione del servizio e di documentazione dei risultati in sede di rendicontazione.' },
  { table: {
    cols: [0.46, 0.34, 0.20],
    head: ['Indicatore', 'Modalità di calcolo', 'Valore al 04/08/2026'],
    rows: D.indicatori.map(x => [x.i, x.f, x.v]),
    align: [null, null, C]
  } },
  { p: 'Il quadro complessivo restituisce un servizio **operativamente efficace nella fase di attivazione** — tasso di avvio all’80%, interruzioni contenute al 12,5%, rete di nove soggetti ospitanti costruita in meno di sette mesi — e con una **capacità dimostrata di produrre transizioni qualificate**, come attesta il tirocinio formalizzato. Gli indicatori economici segnalano per contro il margine di miglioramento più consistente, coincidente con l’impiego del residuo di dotazione nel periodo che resta.' },

  { h: 1, n: '12', t: 'Programmazione agosto – dicembre 2026' },
  { h: 2, n: '12.1', t: 'Cronoprogramma delle azioni' },
  { table: {
    cols: [0.54, 0.26, 0.20],
    head: ['Azione', 'Soggetto responsabile', 'Termine'],
    rows: D.cronoprogramma.map(x => [x.a, x.s, x.t]),
    small: true
  } },
  { h: 2, n: '12.2', t: 'Revisione del format del prospetto di monitoraggio' },
  { p: 'Il prospetto attualmente in uso assolve la funzione di registro delle attivazioni ma non consente né il calcolo diretto degli indicatori né la riconciliazione contabile, in quanto sovrappone in un’unica colonna informazioni di stato del percorso e informazioni di movimentazione economica. Si propone la seguente struttura di colonne, che separa i due piani informativi:' },
  { table: {
    cols: [0.25, 0.75],
    head: ['Blocco', 'Colonne'],
    rows: [
      ['Anagrafica', 'ID beneficiario · Nominativo · Unità abitativa'],
      ['Collocazione', 'Soggetto ospitante · Codice fiscale / P. IVA · Sede di svolgimento · Settore · Tipo di misura (borsa lavoro / tirocinio)'],
      ['Tempistiche', 'Data inizio · Data fine prevista · Data fine effettiva · Mensilità previste · Mensilità effettive'],
      ['Economia', 'Importo impegnato · Importo erogato · Residuo da erogare · Estremi del mandato di pagamento'],
      ['Stato', 'Stato del percorso (programmato / avviato / in corso / concluso / interrotto / non avviato) · Motivo di interruzione · Esito finale'],
      ['Documentazione', 'Convenzione · Progetto formativo · Copertura assicurativa · Formazione sicurezza assolta · Note']
    ],
    boldFirst: true
  } },
  { p: 'L’adozione del format consentirebbe di generare automaticamente gli indicatori del § 11 e di disporre, in ogni momento, del quadro di impegno e di erogazione della linea di intervento.' },

  { h: 1, n: '13', t: 'Conclusioni' },
  { p: 'Il servizio di orientamento al lavoro del progetto SAI PROG-684-PR di Santa Elisabetta si presenta, alla data del 4 agosto 2026, come un dispositivo **strutturato e operativamente efficace**, presidiato da una figura professionale stabile per cinque ore settimanali e rafforzato, nel trimestre di maggiore intensità operativa, da una figura di collaborazione. La scelta di concentrare il rafforzamento nel periodo luglio-settembre si è rivelata coerente con l’andamento effettivo delle attivazioni.' },
  { p: 'Sul piano dei risultati, l’annualità registra **nove beneficiari presi in carico**, **dieci percorsi progettati** di cui otto avviati, **nove soggetti ospitanti** attivati su tre comuni e sei settori economici, e **un tirocinio extracurriculare formalizzato** presso un’Agenzia per il Lavoro accreditata. Quest’ultimo esito, unitamente alla capacità dimostrata di riprogettare in tempi brevi un percorso non avviato, costituisce l’indicatore più significativo della qualità dell’intervento: il servizio non si limita ad allocare misure, ma accompagna transizioni.' },
  { p: 'Le criticità rilevate sono circoscritte e affrontabili nel periodo residuo. Il **sotto-impegno della dotazione**, con il 65,0% delle risorse ancora disponibile, costituisce l’elemento di maggiore attenzione, ma è anche quello su cui il margine di recupero è più ampio: il residuo di € 19.500,00 consente l’attivazione di ulteriori percorsi in numero ampiamente sufficiente a riportare l’impegno su livelli fisiologici entro la chiusura dell’annualità. Il **blocco delle posizioni presso l’Ente pubblico** richiede una interlocuzione istituzionale mirata, mentre la **concentrazione della rete** su pochi interlocutori va affrontata con una campagna di scouting strutturata.' },
  { p: 'Si raccomanda infine, quale indirizzo strategico per il periodo residuo e per la programmazione della successiva annualità, l’assunzione della **sequenza borsa lavoro → tirocinio extracurriculare → rapporto di lavoro** quale standard operativo del servizio. Tale impostazione consente di impiegare la dotazione di progetto come leva di ingresso, trasferendo progressivamente il sostegno del percorso sugli strumenti ordinari di politica attiva e liberando risorse per nuove prese in carico: è il modo in cui una misura di accoglienza produce autonomia anziché dipendenza.' },

  { signature: ['Santa Elisabetta, 4 agosto 2026', 'Il Consulente all’orientamento al lavoro'] },

  { box: {
    kind: 'info',
    title: 'Allegati alla presente relazione',
    lines: [
      '**All. 1** — Prospetto Borse Lavoro S. Elisabetta 2026 (documento gestionale di origine).',
      '**All. 2** — Registro dei colloqui di orientamento. [[Da allegare a cura del Servizio.]]',
      '**All. 3** — Convenzioni sottoscritte con i soggetti ospitanti. [[Da allegare a cura del Servizio.]]',
      '**All. 4** — Progetto formativo e convenzione del tirocinio extracurriculare VINCENT Gift / Ditta MARLOT. [[Da allegare a cura del Servizio.]]',
      '**All. 5** — Attestazioni della formazione in materia di salute e sicurezza. [[Da allegare a cura del Servizio.]]'
    ]
  } }
];

module.exports = { meta, blocks };
