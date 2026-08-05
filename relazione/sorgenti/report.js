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
    ['Beneficiari in carico', '50 posizioni'],
    ['Azioni di orientamento documentate', '128'],
    ['Linea di intervento borse lavoro', 'Dotazione € 30.000,00 da Piano Finanziario'],
    ['Dati aggiornati al', 'Orientamento: 27/07/2026 — Borse lavoro: 04/08/2026'],
    ['Redatta da', 'Consulente all’orientamento al lavoro'],
    ['Destinatari', 'Coordinamento di progetto — Ente titolare — Servizio Centrale SAI']
  ],
  privacy: {
    title: 'Trattamento dei dati personali',
    text: 'Il presente documento espone in forma aggregata i dati relativi a cinquanta beneficiari titolari di protezione internazionale e richiedenti asilo. I nominativi compaiono nel solo prospetto dei percorsi di inserimento retribuiti, per il quale sono necessari ai fini della rendicontazione. Il trattamento avviene ai sensi del Reg. UE 2016/679 e del D.Lgs. 196/2003 come modificato dal D.Lgs. 101/2018, per le sole finalità di monitoraggio e rendicontazione del progetto. La circolazione è riservata ai soggetti istituzionalmente coinvolti nella gestione del progetto.'
  },
  toc: [
    ['1', 'Dati identificativi e oggetto della relazione', 0],
    ['2', 'Nota metodologica e fonti', 0],
    ['3', 'Quadro normativo e di riferimento', 0],
    ['4', 'Struttura organizzativa del servizio', 0],
    ['4.1', 'Figure di riferimento e funzioni', 1],
    ['4.2', 'Monte ore e articolazione del presidio', 1],
    ['4.3', 'Effetti misurabili del rafforzamento estivo', 1],
    ['5', 'Metodologia dell’intervento', 0],
    ['6', 'Le azioni realizzate a favore dei beneficiari', 0],
    ['6.1', 'Quadro complessivo delle azioni', 1],
    ['6.2', 'Gli incontri individuali di orientamento', 1],
    ['6.3', 'La redazione e l’aggiornamento dei curriculum', 1],
    ['6.4', 'La determinazione delle competenze', 1],
    ['6.5', 'Tempestività e continuità della presa in carico', 1],
    ['6.6', 'Le azioni di accompagnamento non tracciate', 1],
    ['7', 'Le borse lavoro', 0],
    ['7.1', 'Prospetto dei percorsi attivati', 1],
    ['7.2', 'Stato di avanzamento e analisi', 1],
    ['7.3', 'Quadro economico della linea di intervento', 1],
    ['7.4', 'Dall’orientamento all’inserimento', 1],
    ['8', 'Tirocini, esiti occupazionali e formazione', 0],
    ['9', 'La rete territoriale', 0],
    ['10', 'Criticità rilevate e azioni correttive', 0],
    ['11', 'Indicatori di monitoraggio', 0],
    ['12', 'Programmazione agosto – dicembre 2026', 0],
    ['13', 'Conclusioni', 0]
  ]
};

const C = 'center', R = 'right';

const blocks = [

  /* ============ 1 ============ */
  { h: 1, n: '1', t: 'Dati identificativi e oggetto della relazione' },
  { p: 'La presente relazione dà conto della strutturazione e dello stato di attuazione del servizio di **orientamento e accompagnamento all’inserimento lavorativo** nell’ambito del progetto SAI **PROG-684-PR — Santa Elisabetta**, gestito dall’Associazione Culturale Cometa ETS, con riferimento all’annualità 2026.' },
  { p: 'Il documento è centrato sulle **azioni messe in atto dal servizio** e restituisce i dati dell’utenza in forma prevalentemente aggregata. Il servizio ha in carico **cinquanta beneficiari**, in favore dei quali ha erogato **centoventotto azioni documentate** fra incontri individuali di orientamento, redazione e aggiornamento dei curriculum e determinazione delle competenze, oltre agli adempimenti amministrativi propedeutici, alle attività di gruppo, alla ricerca attiva e alla mediazione linguistica applicata al contesto lavorativo.' },
  { p: 'Le dieci borse lavoro e il tirocinio extracurriculare attivati costituiscono l’esito terminale di questo processo e riguardano una quota minoritaria dell’utenza: leggerli isolatamente restituirebbe una rappresentazione parziale e sottostimata dell’attività svolta. L’obiettivo del servizio, coerentemente con quanto previsto dal sistema SAI, non si esaurisce nell’attivazione di misure di inserimento, ma consiste nell’accompagnare ciascun beneficiario verso una condizione di autonomia lavorativa sostenibile oltre la durata dell’accoglienza.' },

  /* ============ 2 ============ */
  { h: 1, n: '2', t: 'Nota metodologica e fonti' },
  { ul: [
    '**Resoconto orientamento aggiornato al 27/07/2026** — registro delle attività di orientamento su cinquanta posizioni, con tracciamento delle date di colloquio, redazione del curriculum e determinazione delle competenze, comprensivo degli aggiornamenti successivi. Alimenta i §§ 6 e 11.',
    '**Prospetto Borse Lavoro aggiornato al 04/08/2026** — registro dei percorsi di inserimento retribuiti, con soggetto ospitante, sede, settore, date, importo impegnato e stato. Alimenta i §§ 7 e 9.',
    '**Informazioni sull’organico e sull’operatività del servizio** trasmesse dal Coordinamento di progetto (§§ 4 e 6.6).',
    '**Manuale operativo SAI, edizione 2025**, del Servizio Centrale, per la denominazione dei servizi, la tassonomia degli strumenti e i riferimenti normativi (§ 3).'
  ] },
  { p: 'Il documento distingue fra ciò che risulta **documentato** dalle fonti, ciò che costituisce **impianto metodologico** del servizio (§ 5) e ciò che è **proposta di programmazione** del consulente (§§ 8, 12). Va precisato che le azioni descritte al § 6.6 sono effettivamente erogate ma prive di tracciamento quantitativo: il dato di centoventotto azioni costituisce pertanto una **stima per difetto** del volume di attività complessivamente svolto.' },
  { p: 'Le due fonti hanno date di aggiornamento diverse e non condividono una chiave identificativa: l’incrocio è stato effettuato per nominativo, con riconciliazione manuale delle grafie difformi.' },

  { box: {
    kind: 'warn',
    title: 'Elementi da integrare a cura del Servizio',
    lines: [
      'I punti seguenti sono contrassegnati nel testo dalla dicitura [[da integrare]] e vanno completati prima della trasmissione formale:',
      '•  elenco dei beneficiari assunti con contratto di lavoro nel 2026, con tipologia contrattuale e decorrenza (§ 8.2);',
      '•  elenco dei corsi di formazione frequentati, con ente erogatore, periodo e attestati conseguiti (§ 8.3);',
      '•  estremi delle convenzioni sottoscritte con i soggetti ospitanti e delle relative coperture assicurative (§ 9);',
      '•  denominazione del Centro per l’Impiego territorialmente competente e del CPIA di riferimento (§ 9).'
    ]
  } },

  /* ============ 3 ============ */
  { h: 1, n: '3', t: 'Quadro normativo e di riferimento' },
  { p: 'Il servizio si colloca nel sistema di accoglienza integrata disciplinato dall’**art. 1-sexies del D.L. 416/1989**, convertito dalla L. 39/1990, come modificato dal **D.L. 130/2020**, convertito dalla **L. 173/2020**, che ha istituito il Sistema di Accoglienza e Integrazione in sostituzione del precedente SIPROIMI. Il decreto ministeriale di riferimento, richiamato dal Manuale operativo SAI nella sua edizione 2025, è il **DM 18 novembre 2019**, il cui art. 5 pone in capo all’ente locale titolare l’obbligo di «un costante monitoraggio e controllo sull’attuazione dei progetti, sull’erogazione dei servizi di accoglienza e sulla corretta gestione amministrativa»: obbligo nel quale la presente relazione si inscrive.' },
  { p: 'L’**orientamento e accompagnamento all’inserimento lavorativo** figura fra i servizi che l’ente attuatore è tenuto a garantire ed è oggetto di una sezione dedicata del Manuale, che ne articola gli strumenti in una tassonomia qui assunta come griglia espositiva: orientamento al territorio, curriculum vitae, bilancio di competenze, certificazione delle competenze, istruzione degli adulti, formazione professionale, tirocinio, **borsa lavoro**, apprendistato, ricerca del lavoro, preparazione al colloquio e lavoro autonomo.' },
  { p: 'Due indicazioni del Manuale rilevano per la lettura dei dati esposti nel seguito. La prima è che, indipendentemente dal titolo di soggiorno posseduto, restano **sempre attivabili in favore di tutti gli accolti** le misure propedeutiche — apprendimento della lingua, ricostruzione delle competenze, compilazione del curriculum, preparazione ai colloqui: è la ragione per cui la copertura degli strumenti di orientamento è, ed è corretto che sia, più ampia di quella degli inserimenti retribuiti. La seconda riguarda la **borsa lavoro**, qualificata come «strumento di transizione che può agevolare l’ingresso nel mercato lavorativo attraverso un’esperienza di formazione in azienda», al quale «potrà seguire l’instaurazione di un rapporto di lavoro». Il § 8.1 documenta un caso in cui questa transizione si è realizzata.' },
  { p: 'Completano il quadro le Linee guida sui **tirocini extracurriculari** approvate in sede di Conferenza Stato-Regioni — da ultimo con l’Accordo del 17 maggio 2023 — e la disciplina di recepimento della Regione Siciliana; il **D.Lgs. 81/2008** per la formazione obbligatoria in materia di sicurezza; il **D.Lgs. 286/1998** quanto ai titoli di soggiorno che consentono l’accesso al lavoro; il **Reg. UE 2016/679** per il trattamento dei dati.' },

  /* ============ 4 ============ */
  { h: 1, n: '4', t: 'Struttura organizzativa del servizio' },
  { h: 2, n: '4.1', t: 'Figure di riferimento e funzioni' },
  { table: {
    cols: [0.25, 0.21, 0.16, 0.38],
    head: ['Nominativo', 'Ruolo', 'Impegno', 'Periodo di riferimento'],
    rows: [
      ['Tiziana Graceffa', 'Orientatrice al lavoro — titolare del servizio', '5 ore settimanali', 'Intera annualità 2026'],
      ['Giuseppe Lo Presti Seminerio', 'Collaboratore orientatore al lavoro', '15 ore settimanali', 'Dal 07/07/2026 al 30/09/2026']
    ],
    boldFirst: true
  } },
  { p: 'L’**orientatrice al lavoro** presidia l’intero ciclo del servizio: presa in carico e conduzione degli incontri individuali; determinazione delle competenze e ricostruzione del profilo professionale; redazione e aggiornamento dei curriculum; progettazione individualizzata in raccordo con l’équipe multidisciplinare; scouting aziendale e matching; istruttoria e gestione amministrativa delle borse lavoro, comprensiva di convenzioni, progetti formativi, coperture assicurative e liquidazione delle mensilità; tutoraggio in itinere con visite in azienda; rapporti istituzionali con Centri per l’Impiego, Agenzie per il Lavoro, enti promotori e CPIA; monitoraggio e rendicontazione.' },
  { p: 'Il **collaboratore orientatore al lavoro**, con incarico dal 7 luglio al 30 settembre 2026 per quindici ore settimanali, fornisce supporto operativo nella fase di maggiore intensità: affiancamento negli incontri individuali e conduzione delle attività di gruppo; accompagnamento dei beneficiari presso soggetti ospitanti, Centri per l’Impiego e uffici pubblici; supporto documentale su curriculum, identità digitale e pratiche connesse al titolo di soggiorno; monitoraggio in azienda; recupero dell’arretrato sulle prese in carico; tenuta della documentazione di servizio.' },

  { h: 2, n: '4.2', t: 'Monte ore e articolazione del presidio' },
  { table: {
    cols: [0.30, 0.16, 0.18, 0.16, 0.20],
    head: ['Figura', 'Ore sett.', 'Settimane', 'Ore', 'Periodo'],
    rows: [
      ['Tiziana Graceffa', '5,0', '52,0', '260,0', 'Annualità 2026'],
      ['Giuseppe Lo Presti Seminerio', '15,0', '12,3', '184,5', '07/07 – 30/09/2026'],
      ['**Totale annuo del servizio**', '', '', '**444,5**', '']
    ],
    align: [null, C, C, C, null],
    headAlign: [null, C, C, C, null]
  } },
  { p: 'Nel trimestre di sovrapposizione la capacità settimanale passa da 5 a **20 ore**. Sul piano annuo il monte ore complessivo corrisponde a **8,9 ore per beneficiario in carico**; considerando la sola orientatrice, il rapporto scende a **5,2 ore per beneficiario**, comprensive di incontri individuali, determinazione delle competenze, curriculum, scouting, gestione amministrativa e tutoraggio.' },
  { p: 'Quest’ultimo dato è la chiave di lettura di gran parte delle criticità esposte al § 10: **cinque ore all’anno per beneficiario** non consentono, simultaneamente, di presidiare i nuovi ingressi, mantenere aggiornate le posizioni in carico, condurre lo scouting e gestire l’amministrazione degli inserimenti. Le scelte operative documentate nel seguito — copertura ampia sugli strumenti propedeutici, copertura selettiva sulla determinazione delle competenze, tempi di primo contatto dilatati — vanno lette come effetti di questo vincolo, non come carenze di impostazione.' },
  { p: 'Le cinque ore ordinarie sono articolate in **due ore di incontri individuali**, **un’ora di scouting aziendale** e cura dei rapporti con la rete, **un’ora di tutoraggio** sui percorsi in corso e **un’ora di gestione amministrativa e documentale**. Le quindici ore aggiuntive del trimestre estivo sono destinate prioritariamente al recupero dell’arretrato sulle prese in carico, agli accompagnamenti esterni e al monitoraggio in azienda.' },

  { h: 2, n: '4.3', t: 'Effetti misurabili del rafforzamento estivo' },
  { p: 'L’ingresso del collaboratore produce un effetto immediato e quantificabile sul volume di attività erogata, documentato dalla distribuzione mensile delle azioni registrate nel 2026.' },
  { table: {
    cols: [0.20, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10],
    head: ['Mese 2026', 'Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Tot'],
    rows: [['Azioni registrate', '12', '17', '7', '6', '2', '2', '17', '63']],
    align: [null, C, C, C, C, C, C, C, C],
    headAlign: [null, C, C, C, C, C, C, C, C],
    boldFirst: true
  } },
  { p: 'Delle **17 azioni** registrate a luglio, **16 sono successive al 7 del mese**, data di decorrenza dell’incarico di collaborazione. Rapportando i volumi ai giorni effettivi, il bimestre maggio-giugno registra 4 azioni in 61 giorni, mentre il periodo dal 7 al 27 luglio ne registra 16 in 20 giorni: la produttività giornaliera passa da 0,07 a 0,80 azioni, con un incremento di oltre dodici volte a fronte di una quadruplicazione delle ore disponibili.' },
  { p: 'Il confronto va assunto con la cautela che impone la brevità del periodo osservato — tre settimane non costituiscono una serie storica, e il resoconto è aggiornato al 27 luglio. Nondimeno la coincidenza fra la decorrenza dell’incarico e la ripresa dell’attività è netta, e il fatto che l’incremento sia **più che proporzionale** rispetto alle ore aggiunte suggerisce che il servizio, nella configurazione a cinque ore, operasse al di sotto della propria soglia di efficienza: una quota rilevante del tempo era assorbita da attività non comprimibili, lasciando un margine residuo minimo per il contatto diretto con i beneficiari. Il dato costituisce l’argomento tecnico più solido a sostegno della **prosecuzione dell’incarico oltre il 30 settembre 2026**.' },

  /* ============ 5 ============ */
  { h: 1, n: '5', t: 'Metodologia dell’intervento' },
  { p: 'Il servizio adotta un modello per fasi successive, ciascuna con esiti verificabili, che consente di ricostruire in ogni momento il punto del percorso in cui ciascun beneficiario si colloca. Le fasi 2, 3 e 5 corrispondono alle azioni tracciate nel registro di servizio e quantificate al § 6.' },
  { table: {
    cols: [0.05, 0.24, 0.45, 0.26],
    head: ['', 'Fase', 'Contenuto', 'Esito'],
    rows: D.fasi,
    align: [C, null, null, null],
    headAlign: [C, null, null, null],
    small: true
  } },

  /* ============ 6 ============ */
  { h: 1, n: '6', t: 'Le azioni realizzate a favore dei beneficiari' },
  { h: 2, n: '6.1', t: 'Quadro complessivo delle azioni' },
  { p: 'Il servizio ha in carico **cinquanta posizioni**, di cui quarantasei riferite a beneficiari singoli e quattro a componenti di nuclei familiari. Gli ingressi si distribuiscono in otto nel 2024, ventidue nel 2025 e venti nei primi sette mesi del 2026: un flusso medio di quasi **tre nuovi beneficiari al mese** nell’anno in corso, a fronte di un servizio dimensionato fino a luglio su cinque ore settimanali. Undici beneficiari concludono il percorso di accoglienza entro il 31 dicembre 2026.' },
  { p: 'Il registro traccia tre azioni strutturate — incontro individuale di orientamento, redazione del curriculum, determinazione delle competenze — rilevandone sia l’erogazione iniziale sia i successivi aggiornamenti. Complessivamente risultano registrate **128 azioni**.' },
  { table: {
    cols: [0.32, 0.14, 0.14, 0.16, 0.24],
    head: ['Azione', 'Beneficiari', 'Copertura', 'Azioni totali', 'di cui aggiornamenti'],
    rows: [
      ['Incontro individuale di orientamento', '41', '82,0%', '48', '7'],
      ['Curriculum vitae', '43', '86,0%', '61', '18'],
      ['Determinazione delle competenze', '19', '38,0%', '19', '—'],
      ['**Totale azioni registrate**', '', '', '**128**', '**25**']
    ],
    align: [null, C, C, C, C],
    headAlign: [null, C, C, C, C]
  } },
  { p: 'Quarantatré beneficiari su cinquanta (**86,0%**) sono stati raggiunti da almeno un’azione; la media è di **2,6 azioni per beneficiario in carico**, che sale a 3,0 sui soli beneficiari attivati. I venticinque aggiornamenti — un quinto del totale — documentano che il servizio non si limita alla presa in carico iniziale ma **mantiene le posizioni in aggiornamento nel tempo**. La distribuzione per anno mostra una progressione coerente con la crescita dell’utenza: 13 azioni nel 2024, **52 nel 2025**, **63 nei primi sette mesi del 2026** — il volume del solo 2026 parziale supera già quello dell’intero anno precedente.' },

  { h: 2, n: '6.2', t: 'Gli incontri individuali di orientamento' },
  { p: 'L’incontro individuale è lo strumento di ingresso del servizio e il momento in cui si costruisce la relazione con il beneficiario. Ha per oggetto la ricostruzione della biografia formativa e lavorativa, la verifica della posizione documentale rispetto all’accesso al lavoro, la rilevazione del livello di competenza linguistica, l’emersione delle aspettative professionali e la restituzione del funzionamento del mercato del lavoro locale — comprese le informazioni sui rischi connessi al lavoro irregolare.' },
  { p: 'Sono stati condotti **48 incontri** in favore di **41 beneficiari**, con una copertura dell’**82,0%**. Sette incontri sono configurati come **aggiornamenti** di posizioni già in carico: sette beneficiari hanno cioè beneficiato di un secondo colloquio a distanza di tempo, a seguito del mutare delle condizioni personali o dell’avvicinarsi di un’opportunità di inserimento. Nel 2026 ne sono stati condotti **21**, a fronte dei 20 dell’intero 2025 e dei 7 del 2024.' },
  { p: 'Le nove posizioni prive di incontro corrispondono a sette beneficiari non ancora presi in carico, con ingressi compresi fra marzo e giugno 2026 (§ 10.1), e a due posizioni che presentano curriculum senza colloquio a monte, verosimile lacuna di registrazione (§ 10.7).' },

  { h: 2, n: '6.3', t: 'La redazione e l’aggiornamento dei curriculum' },
  { p: 'Il curriculum registra la copertura più elevata del servizio, **86,0%** (43 beneficiari), e il maggior volume di azioni: **61 in totale, di cui 18 aggiornamenti**. Oltre un terzo dei curriculum è stato dunque rivisto almeno una volta, e in tre casi due o più volte.' },
  { p: 'Il dato è qualitativamente significativo. L’aggiornamento non è un adempimento formale: presuppone un contatto con il beneficiario, la rilevazione di un’esperienza nuova da inserire e una rielaborazione condivisa del profilo. Costituisce pertanto un **indicatore indiretto della continuità della relazione di servizio** oltre il momento della presa in carico, ed è coerente con l’indicazione del Manuale operativo SAI secondo cui il curriculum, se costruito con attenzione, svolge una funzione ricostruttiva prossima a quella del bilancio di competenze.' },
  { p: 'Nel 2026 sono state registrate **30 azioni sul curriculum**, contro le 25 dell’intero 2025: è la voce che cresce più rapidamente e quella su cui si concentra prevalentemente l’attività successiva all’ingresso del collaboratore.' },

  { h: 2, n: '6.4', t: 'La determinazione delle competenze' },
  { p: 'La determinazione delle competenze consiste nella ricostruzione strutturata del bagaglio posseduto, comprensivo delle competenze acquisite in contesti non formali e informali nel Paese di origine o lungo il percorso migratorio — spesso non documentate da titoli e per questo sistematicamente sottostimate — con rilevazione parallela dei vincoli oggettivi: livello di italiano L2, possesso della patente, disponibilità alla mobilità, scadenza del titolo di soggiorno, obblighi di cura familiari.' },
  { p: 'Risulta effettuata per **19 beneficiari (38,0%)**, senza aggiornamenti registrati: è la copertura più contenuta fra le tre azioni tracciate. Il dato va letto secondo una duplice chiave. La prima è **metodologica**: il Manuale operativo SAI qualifica il bilancio di competenze come «uno degli strumenti più complessi» del servizio, richiedente una figura esperta e più incontri strutturati, e il servizio lo attiva pertanto in modo selettivo, a valle del colloquio e del curriculum, per i beneficiari con progetto professionale definito o candidati a un inserimento a breve termine. La seconda è **di capacità**: il 44,0% dei beneficiari dispone di colloquio e curriculum ma non della determinazione, e che tale platea ecceda in numero quella dei beneficiari che lo strumento hanno ricevuto indica che, accanto alla selezione metodologica, opera un vincolo di monte ore.' },
  { p: 'Si segnala che i diciannove beneficiari con determinazione delle competenze **coincidono esattamente con quelli dotati del percorso completo**: non si registra alcun caso di determinazione effettuata in assenza degli strumenti propedeutici, il che conferma il rispetto della sequenza metodologica.' },

  { h: 2, n: '6.5', t: 'Tempestività e continuità della presa in carico' },
  { p: 'L’intervallo fra ingresso in progetto e primo incontro di orientamento costituisce l’indicatore più severo fra quelli rilevabili dal registro.' },
  { table: {
    cols: [0.44, 0.20, 0.36],
    head: ['Indicatore', 'Valore', 'Lettura'],
    rows: [
      ['Tempo mediano', '51 giorni', 'Rappresentativo del comportamento tipico'],
      ['Tempo medio', '95 giorni', 'Appesantito dai casi più risalenti'],
      ['Prese in carico entro 30 giorni', '29,3%', 'Al di sotto dello standard assunto'],
      ['Prese in carico entro 60 giorni', '56,1%', ''],
      ['Prese in carico entro 90 giorni', '65,9%', 'Un terzo delle posizioni oltre il trimestre']
    ],
    align: [null, C, null],
    headAlign: [null, C, null]
  } },
  { p: 'La divaricazione fra mediana e media indica una distribuzione asimmetrica: il comportamento tipico del servizio è sensibilmente migliore di quanto la media suggerisca, ma cinque casi oltre i duecento giorni — riferiti in prevalenza a ingressi del 2024 e del 2025, precedenti all’attuale assetto — ne appesantiscono il valore. Il dato va imputato al dimensionamento e non alla metodologia: con venti nuovi ingressi nei primi sette mesi del 2026 e cinque ore settimanali, il servizio ha dovuto scegliere fra il mantenimento delle posizioni in carico e l’intercettazione dei nuovi arrivi.' },

  { h: 2, n: '6.6', t: 'Le azioni di accompagnamento non tracciate' },
  { p: 'Accanto alle tre azioni registrate, il servizio eroga quattro tipologie di intervento prive di tracciamento quantitativo dedicato, la cui omissione dai registri comporta una sottostima del volume di attività in sede di rendicontazione.' },
  { p: '**Adempimenti amministrativi propedeutici.** Iscrizione al Centro per l’Impiego, dichiarazione di immediata disponibilità, attivazione dell’identità digitale, codice fiscale, apertura del conto corrente per l’accredito delle indennità, pratiche connesse al titolo di soggiorno. Sono attività a elevato assorbimento di tempo — richiedono nella generalità dei casi l’accompagnamento fisico del beneficiario e una funzione di mediazione pratica — e a bassa visibilità, poiché non producono un documento intestato al servizio. Costituiscono tuttavia condizione necessaria di ogni inserimento successivo: la loro mancata cura è la più frequente causa di ritardo nell’avvio dei percorsi.' },
  { p: '**Laboratori e attività di gruppo.** Incontri collettivi sul funzionamento del mercato del lavoro locale, simulazioni del colloquio di selezione, moduli informativi su contrattualistica, busta paga, diritti e doveri del lavoratore e nozioni di sicurezza. In un servizio dimensionato su cinquanta beneficiari e un monte ore contenuto la modalità di gruppo presenta un **rapporto costo-beneficio nettamente favorevole**: raggiunge simultaneamente più beneficiari sui contenuti standardizzabili, liberando l’incontro individuale per ciò che richiede una relazione personale.' },
  { p: '**Ricerca attiva e invio delle candidature.** Individuazione delle offerte, predisposizione e invio delle candidature, contatti diretti con le imprese per conto del beneficiario, preparazione ai colloqui di selezione. L’attività opera su una platea più ampia di quella degli inserimenti formalizzati: rispetto ai ventidue beneficiari istruiti e privi di inserimento (§ 7.4), la ricerca attiva costituisce il principale canale di servizio disponibile, ed è destinata ad assumere rilievo crescente per i beneficiari in uscita dal progetto.' },
  { p: '**Mediazione linguistica applicata al lavoro.** Traduzione e spiegazione della documentazione contrattuale, mediazione nei rapporti con il tutor aziendale, alfabetizzazione al lessico professionale del settore di inserimento, supporto nella comprensione delle disposizioni di sicurezza. La funzione è direttamente connessa alla **tenuta dei percorsi**: l’unica interruzione registrata nell’annualità — un beneficiario inserito nel commercio, con percorso cessato al terzo giorno — è compatibile con una difficoltà di natura linguistico-relazionale in un contesto di vendita al pubblico, benché le cause non risultino formalmente accertate.' },
  { p: 'Si raccomanda l’introduzione del tracciamento di queste azioni secondo il format proposto al § 12.2, che ne consentirebbe la valorizzazione in rendicontazione.' },

  /* ============ 7 ============ */
  { h: 1, n: '7', t: 'Le borse lavoro' },
  { h: 2, n: '7.1', t: 'Prospetto dei percorsi attivati' },
  { p: 'Nell’annualità 2026 sono stati progettati dieci percorsi di borsa lavoro in favore di nove beneficiari distinti, pari al 18,0% dell’utenza in carico. Il valore unitario standard è di € 1.500,00 per tre mensilità.' },
  { table: {
    cols: [0.035, 0.155, 0.150, 0.100, 0.100, 0.088, 0.088, 0.084, 0.200],
    head: ['N.', 'Beneficiario', 'Soggetto ospitante', 'Sede', 'Settore', 'Inizio', 'Fine', 'Importo €', 'Stato'],
    rows: D.borse.map(b => [b.n, b.ben, b.az, b.sede, b.set, b.ini, b.fin, b.imp, b.stato]),
    align: [C, null, null, null, null, C, C, R, null],
    headAlign: [C, null, null, null, null, C, C, R, null],
    small: true,
    cards: D.borse.map(b => ({
      title: `${b.n}. ${b.ben}`,
      sub: b.set,
      badge: b.stato.split(' — ')[0],
      fields: [
        ['Soggetto ospitante', b.az], ['Sede', b.sede],
        ['Periodo', `${b.ini} – ${b.fin}`],
        ['Importo', b.imp === '—' ? '—' : `€ ${b.imp}`],
        ['Stato', b.stato]
      ]
    }))
  } },
  { note: 'Fonte: Prospetto Borse Lavoro, dati al 04/08/2026. Le posizioni nn. 6 e 10 fanno capo al medesimo beneficiario: la seconda costituisce ri-orientamento a seguito del mancato avvio della prima.' },

  { h: 2, n: '7.2', t: 'Stato di avanzamento e analisi' },
  { table: {
    cols: [0.30, 0.10, 0.60],
    head: ['Stato', 'N.', 'Note'],
    rows: [
      ['Conclusi regolarmente', '3', 'Tutte le mensilità previste completate'],
      ['In corso alla data', '4', 'Conclusioni fra il 17/08 e il 02/11/2026'],
      ['Interrotti', '1', 'Interruzione al terzo giorno dall’avvio'],
      ['Non avviati', '2', 'Entrambi presso il Comune di Santa Elisabetta'],
      ['**Totale**', '**10**', '']
    ],
    align: [null, C, null],
    headAlign: [null, C, null]
  } },
  { p: 'Il **tasso di avvio** si attesta all’**80,0%**, valore soddisfacente ma che sconta interamente il blocco delle due posizioni presso l’Ente pubblico: tutte le posizioni presso soggetti privati sono state regolarmente avviate. Il **tasso di interruzione**, calcolato sui soli percorsi avviati, è pari al **12,5%**, dato contenuto e in linea con quanto fisiologicamente atteso. Nessuno dei percorsi conclusi si è interrotto anticipatamente.' },
  { p: 'Sul piano settoriale i percorsi si distribuiscono su **sei settori**: ristorazione e artigianato con due posizioni ciascuno, commercio con due, ente pubblico con due, edilizia e trasporti con una. Sul piano territoriale sei percorsi si svolgono a **Santa Elisabetta**, tre a **Raffadali** (circa 8 km) e uno a **Canicattì** (circa 30 km): l’apertura su quest’ultimo bacino, intervenuta nell’agosto 2026, amplia il raggio di azione del servizio ma introduce un fattore di attenzione sulla mobilità dei beneficiari, il cui costo incide su un’indennità mensile di € 500,00.' },

  { h: 2, n: '7.3', t: 'Quadro economico della linea di intervento' },
  { table: {
    cols: [0.44, 0.18, 0.13, 0.25],
    head: ['Voce', 'Importo €', 'Quota', 'Note'],
    rows: [
      ['Dotazione da Piano Finanziario', '30.000,00', '100,0%', 'Linea borse lavoro'],
      ['Importo impegnato', '10.500,00', '35,0%', '7 borse × € 1.500,00'],
      ['di cui erogato e documentato', '4.000,00', '13,3%', 'Su tre percorsi conclusi'],
      ['di cui da erogare su impegni assunti', '6.500,00', '21,7%', 'Percorsi in corso e saldi'],
      ['**Residuo disponibile**', '**19.500,00**', '**65,0%**', 'Riprogrammabile']
    ],
    align: [null, R, C, null],
    headAlign: [null, R, C, null]
  } },
  { p: 'Il residuo di **€ 19.500,00** corrisponde, a valori unitari invariati, a una capacità teorica di **tredici ulteriori percorsi trimestrali**. Poiché una borsa attivata entro settembre può completare le tre mensilità entro la chiusura dell’annualità, e poiché il servizio dispone di una platea di ventidue beneficiari già istruiti e privi di inserimento, esiste un margine concreto per un recupero sostanziale del livello di impegno.' },

  { h: 2, n: '7.4', t: 'Dall’orientamento all’inserimento' },
  { p: 'L’incrocio fra i due archivi consente di ricostruire la progressione dei beneficiari lungo il percorso di servizio.' },
  { table: {
    cols: [0.42, 0.13, 0.13, 0.32],
    head: ['Stadio del percorso', 'N.', 'Quota', 'Osservazioni'],
    rows: [
      ['Beneficiari in carico', '50', '100,0%', 'Platea complessiva del servizio'],
      ['con curriculum vitae', '43', '86,0%', 'Strumento a copertura più ampia'],
      ['con incontro di orientamento', '41', '82,0%', 'Due posizioni con CV senza colloquio'],
      ['con determinazione delle competenze', '19', '38,0%', 'Attivazione selettiva — cfr. § 6.4'],
      ['con borsa lavoro attivata', '9', '18,0%', 'Dieci percorsi su nove beneficiari'],
      ['con tirocinio extracurriculare', '1', '2,0%', 'Transizione documentata al § 8.1'],
      ['con contratto di lavoro', '[[da int.]]', '[[da int.]]', 'Dato da acquisire — cfr. § 8.2']
    ],
    align: [null, C, C, null],
    headAlign: [null, C, C, null]
  } },
  { p: 'La lettura complessiva restituisce un servizio con **presa in carico ampia e conversione contenuta**. L’82% dell’utenza è stato orientato, ma solo il 18% ha avuto accesso a un inserimento retribuito: **ventidue beneficiari dispongono di colloquio e curriculum senza alcun inserimento attivato**. Il collo di bottiglia non si colloca dunque nella fase istruttoria, che funziona, ma nella disponibilità di posti presso i soggetti ospitanti e nella capacità di scouting, attività alla quale la configurazione ordinaria destina una sola ora settimanale.' },
  { p: 'Ne discende un’indicazione operativa netta: nel periodo residuo il **rendimento marginale più elevato non si ottiene ampliando ulteriormente la presa in carico, ma convertendo in inserimenti la platea già istruita**. I ventidue beneficiari in attesa costituiscono una riserva immediatamente disponibile, che il residuo di dotazione è ampiamente capiente ad assorbire.' },

  /* ============ 8 ============ */
  { h: 1, n: '8', t: 'Tirocini, esiti occupazionali e formazione' },
  { h: 3, t: '8.1  Tirocinio extracurriculare attivato' },
  { table: {
    cols: [0.29, 0.71],
    head: null,
    rows: [
      ['Beneficiario', 'VINCENT Gift'],
      ['Soggetto ospitante', 'Ditta MARLOT — Raffadali (AG) — settore ristorazione'],
      ['Soggetto promotore', 'APL UIL CST — Agenzia per il Lavoro'],
      ['Periodo', 'Dal 01/06/2026 al 30/11/2026 — sei mesi'],
      ['Percorso pregresso', 'Presa in carico a gennaio 2026, curriculum a febbraio, borsa lavoro presso il medesimo soggetto ospitante da febbraio a maggio, regolarmente conclusa e saldata; determinazione delle competenze a giugno, a valle dell’esperienza in azienda']
    ],
    boldFirst: true
  } },
  { p: 'Il caso documenta per intero la sequenza che il servizio assume come modello di riferimento. La borsa lavoro, misura interna al progetto, ha svolto la funzione di **strumento di ingresso e di verifica reciproca**; conclusasi positivamente e consolidato il rapporto fiduciario con l’impresa, il percorso è proseguito con una misura di politica attiva **ordinaria**, promossa da un’Agenzia per il Lavoro accreditata e di durata doppia rispetto alla borsa.' },
  { p: 'La transizione produce tre effetti convergenti: **alleggerisce la dotazione di progetto**, poiché indennità e coperture assicurative gravano sui soggetti ospitante e promotore anziché sul budget SAI; colloca il beneficiario in un **rapporto formalizzato secondo la disciplina ordinaria**, dotato di valore certificativo spendibile nel mercato del lavoro; configura una **prospettiva concreta di assunzione** al termine del tirocinio, esito che il Manuale operativo SAI indica come sbocco naturale della borsa lavoro.' },
  { p: 'Si raccomanda l’assunzione di questa sequenza quale **standard operativo del servizio**: per ciascuna borsa in scadenza la valutazione di trasformabilità in tirocinio dovrebbe essere avviata sistematicamente nei trenta giorni antecedenti la conclusione, in raccordo con il soggetto promotore. I candidati immediati sono i due beneficiari con borsa già conclusa e uscita dal progetto nel 2026.' },

  { h: 3, t: '8.2  Esiti occupazionali' },
  { p: 'Il Coordinamento di progetto segnala che nell’annualità **alcuni beneficiari hanno conseguito un rapporto di lavoro** al di fuori delle misure interne al progetto. Il dato costituisce l’esito di maggior rilievo dell’intero servizio, in quanto misura il conseguimento dell’obiettivo finale dell’accoglienza integrata — l’autonomia lavorativa — e non il semplice accesso a una misura di sostegno.' },
  { p: '[[Sezione da completare a cura del Servizio con l’elenco dei beneficiari assunti, la tipologia contrattuale, il soggetto datoriale e la decorrenza.]]' },
  { table: {
    cols: [0.24, 0.22, 0.22, 0.16, 0.16],
    head: ['Beneficiario', 'Datore di lavoro', 'Tipologia contrattuale', 'Decorrenza', 'Percorso pregresso'],
    rows: [
      ['[[da integrare]]', '[[da integrare]]', '[[da integrare]]', '[[da int.]]', '[[da int.]]'],
      ['[[da integrare]]', '[[da integrare]]', '[[da integrare]]', '[[da int.]]', '[[da int.]]']
    ],
    small: true
  } },
  { p: 'Una volta acquisito il dato sarà possibile calcolare il **tasso di inserimento occupazionale**, indicatore di esito più rilevante ai fini della valutazione del servizio, da inserire stabilmente nel set del § 11. Si raccomanda inoltre di estendere la rilevazione ai **beneficiari usciti dal progetto**, mediante un follow-up a sei e dodici mesi dall’uscita: è la sola modalità che consente di verificare la tenuta dell’autonomia raggiunta oltre la durata dell’accoglienza.' },

  { h: 3, t: '8.3  Percorsi di formazione' },
  { p: 'Il Coordinamento segnala che **alcuni beneficiari hanno frequentato percorsi formativi** nel corso dell’annualità. L’attività non è tracciata nel registro di orientamento, che rileva le sole azioni strutturate. [[Sezione da completare a cura del Servizio con l’elenco dei corsi erogati, i beneficiari coinvolti, l’ente erogatore, il periodo e gli attestati conseguiti.]]' },
  { p: 'Nell’ambito della funzione consulenziale si segnalano di seguito le azioni formative che, alla luce dei profili presi in carico e dei settori di inserimento attivati, appaiono prioritarie per il periodo residuo:' },
  { table: {
    cols: [0.30, 0.48, 0.22],
    head: ['Azione formativa', 'Destinatari e motivazione', 'Priorità'],
    rows: [
      ['Salute e sicurezza sul lavoro (D.Lgs. 81/2008)', 'Tutti i beneficiari inseriti; obbligo di legge presupposto all’avvio di ogni percorso, con specifica per settore di rischio', 'Alta — obbligo'],
      ['HACCP — igiene e sicurezza alimentare', 'Beneficiari inseriti in ristorazione e commercio alimentare (4 posizioni su 10); requisito richiesto dalle imprese', 'Alta'],
      ['Alfabetizzazione L2 e certificazione A2 presso CPIA', 'Beneficiari con competenza linguistica insufficiente al contesto lavorativo; fattore di rischio per la tenuta dei percorsi', 'Alta'],
      ['Patente di guida cat. B e patentino carrelli elevatori', 'Beneficiari inseriti fuori dal comune di residenza o nei settori edilizia, trasporti e logistica', 'Media'],
      ['Percorsi professionalizzanti regionali', 'Beneficiari con progetto professionale definito; da programmare sulle finestre di avviso', 'Da verificare']
    ],
    small: true
  } },
  { p: 'Si raccomanda in particolare la **verifica sistematica dell’assolvimento degli obblighi formativi in materia di sicurezza** per tutti i percorsi in corso, trattandosi di adempimento di legge la cui omissione espone il progetto e i soggetti ospitanti a responsabilità.' },

  /* ============ 9 ============ */
  { h: 1, n: '9', t: 'La rete territoriale' },
  { p: 'La costruzione della rete costituisce la precondizione di ogni inserimento e rappresenta, in un contesto di piccoli comuni dell’entroterra agrigentino, l’attività a più elevata intensità relazionale fra quelle svolte dal servizio. Nell’annualità sono stati attivati **nove soggetti ospitanti** su tre comuni e sei settori economici.' },
  { table: {
    cols: [0.25, 0.16, 0.16, 0.07, 0.36],
    head: ['Soggetto ospitante', 'Settore', 'Sede', 'Ben.', 'Stato della collaborazione'],
    rows: D.rete.map(r => [r.az, r.set, r.sede, r.ben, r.note]),
    align: [null, null, null, C, null],
    headAlign: [null, null, null, C, null],
    small: true
  } },
  { p: 'Accanto alle imprese, il servizio ha consolidato il raccordo con il **Comune di Santa Elisabetta**, Ente titolare del progetto e nell’annualità anche soggetto ospitante; con **APL UIL CST**, Agenzia per il Lavoro promotrice del tirocinio attivato — acquisizione di maggior valore strutturale dell’annualità, in quanto consente di accedere a strumenti di politica attiva ordinari, esterni al perimetro finanziario del progetto; con il **Centro per l’Impiego** territorialmente competente per iscrizioni e dichiarazioni di immediata disponibilità [[denominazione da integrare]]; e con il **CPIA** per i percorsi di alfabetizzazione [[sede da integrare]].' },
  { p: 'Le azioni di implementazione realizzate comprendono lo **scouting diretto** presso le imprese del territorio, l’**estensione del bacino** oltre i confini comunali, la **diversificazione settoriale** su sei settori distinti, il **coinvolgimento di un’Agenzia accreditata** in qualità di soggetto promotore e la **fidelizzazione dei soggetti ospitanti**, come attesta il caso della Ditta MARLOT, che ha proseguito la collaborazione oltre la conclusione della borsa mediante l’accoglimento del successivo tirocinio.' },
  { p: 'Il rapporto fra dimensione dell’utenza e dimensione della rete costituisce il vincolo strutturale del servizio: **cinquanta beneficiari a fronte di nove soggetti ospitanti** determinano una capacità di assorbimento largamente inferiore alla domanda potenziale. L’ampliamento della base di imprese è pertanto la leva a più elevato impatto sul tasso di inserimento, più ancora dell’incremento delle risorse finanziarie, ad oggi impegnate solo per un terzo.' },

  /* ============ 10 ============ */
  { h: 1, n: '10', t: 'Criticità rilevate e azioni correttive' },
  { p: 'L’analisi consente di isolare sette aree di criticità, ciascuna ricondotta all’evidenza che la sostiene, alla lettura interpretativa e all’azione correttiva proposta.' },
  ...D.criticita.flatMap((c, i) => [
    { h: 3, t: `10.${i + 1}  ${c.t}` },
    { p: `**Evidenza.** ${c.e}`, tight: true },
    { p: `**Analisi.** ${c.a}`, tight: true },
    { p: `**Azione correttiva.** ${c.c}`, accent: true }
  ]),

  /* ============ 11 ============ */
  { h: 1, n: '11', t: 'Indicatori di monitoraggio' },
  { p: 'Si propone l’adozione stabile del set seguente, con rilevazione trimestrale, quale strumento di autovalutazione del servizio e di documentazione dei risultati in sede di rendicontazione.' },
  { table: {
    cols: [0.16, 0.60, 0.24],
    head: ['Area', 'Indicatore', 'Valore alla data'],
    rows: D.indicatori.map(x => [x.g, x.i, x.v]),
    align: [null, null, C],
    headAlign: [null, null, C],
    small: true
  } },
  { note: 'Dati di orientamento al 27/07/2026; dati di inserimento e di budget al 04/08/2026.' },
  { p: 'Il quadro restituisce un servizio **efficace nella fase istruttoria** — coperture dell’82% e dell’86% sugli strumenti propedeutici, 128 azioni documentate, rete di nove soggetti ospitanti — e con una **capacità dimostrata di produrre transizioni qualificate**, come attesta il tirocinio formalizzato. I margini di miglioramento si concentrano su tre fronti: la **tempestività** della presa in carico, la **conversione** fra istruttoria e inserimento e l’**impiego della dotazione finanziaria**, ferma al 35%. Si raccomanda l’integrazione del set con il tasso di inserimento occupazionale (§ 8.2) e con indicatori di volume sulle azioni oggi non tracciate.' },

  /* ============ 12 ============ */
  { h: 1, n: '12', t: 'Programmazione agosto – dicembre 2026' },
  { h: 3, t: '12.1  Cronoprogramma delle azioni' },
  { table: {
    cols: [0.48, 0.22, 0.18, 0.12],
    head: ['Azione', 'Soggetto responsabile', 'Termine', 'Priorità'],
    rows: D.cronoprogramma.map(x => [x.a, x.s, x.t, x.p]),
    align: [null, null, C, C],
    headAlign: [null, null, C, C],
    small: true
  } },
  { p: 'Le tre azioni classificate come urgenti hanno termini entro il mese di agosto e riguardano posizioni con uscita imminente dal progetto o decisioni organizzative a effetto immediato: il loro slittamento comporterebbe la perdita definitiva della finestra utile di intervento.' },

  { h: 3, t: '12.2  Revisione dei registri di servizio' },
  { p: 'I due prospetti in uso assolvono la funzione di registro ma non consentono il calcolo diretto degli indicatori né la riconciliazione contabile, e non tracciano una parte rilevante delle azioni erogate. Si propone un archivio unico a chiave identificativa condivisa, articolato nei blocchi seguenti:' },
  { table: {
    cols: [0.26, 0.74],
    head: ['Blocco', 'Contenuto'],
    rows: [
      ['Anagrafica', 'ID beneficiario (chiave unica) · Protocollo · Nominativo · Data di ingresso · Data di fine progetto'],
      ['Orientamento', 'Incontro individuale, curriculum e determinazione delle competenze: data di prima erogazione, date degli aggiornamenti, operatore'],
      ['Adempimenti', 'Codice fiscale · SPID · DID · Iscrizione CPI · Conto corrente · Titolo di soggiorno e scadenza'],
      ['Azioni non individuali', 'Partecipazione ad attività di gruppo · Candidature inviate ed esiti · Interventi di mediazione linguistica'],
      ['Formazione', 'Corso · Ente erogatore · Periodo · Attestato conseguito'],
      ['Inserimento', 'Tipo di misura · Soggetto ospitante · Sede · Settore · Date di inizio, fine prevista e fine effettiva'],
      ['Economia', 'Importo impegnato · Importo erogato · Residuo · Estremi del mandato di pagamento'],
      ['Stato ed esito', 'Stato del percorso · Motivo di interruzione · Esito finale · Follow-up a 6 e 12 mesi dall’uscita']
    ],
    boldFirst: true,
    small: true
  } },
  { p: 'L’adozione consentirebbe di generare automaticamente gli indicatori del § 11, di disporre in ogni momento del quadro di impegno e di erogazione e soprattutto di **valorizzare in rendicontazione la quota di attività oggi non tracciata**.' },

  /* ============ 13 ============ */
  { h: 1, n: '13', t: 'Conclusioni' },
  { p: 'Il servizio di orientamento e accompagnamento all’inserimento lavorativo del progetto SAI PROG-684-PR di Santa Elisabetta si presenta come un dispositivo **strutturato, metodologicamente coerente ed efficace nella fase istruttoria**, che opera tuttavia in condizioni di sotto-dimensionamento rispetto all’utenza in carico.' },
  { p: 'L’annualità registra **cinquanta beneficiari in carico** e **128 azioni di orientamento documentate**, con coperture dell’82% e dell’86% sui due strumenti propedeutici e venticinque aggiornamenti su posizioni già in carico — indice di una relazione di servizio mantenuta nel tempo e non esaurita nella presa in carico iniziale. A queste si affiancano gli adempimenti amministrativi, le attività di gruppo, la ricerca attiva e la mediazione linguistica, che i registri non rilevano e che rendono il dato una stima per difetto. Sul versante degli inserimenti: **dieci percorsi di borsa lavoro** per nove beneficiari, **nove soggetti ospitanti** su tre comuni e sei settori, **un tirocinio extracurriculare** presso un’Agenzia per il Lavoro accreditata e alcuni rapporti di lavoro conseguiti, la cui puntuale rilevazione è raccomandata al § 8.2.' },
  { p: 'Il vincolo dominante è quello **delle risorse professionali disponibili**. Cinque ore settimanali per cinquanta beneficiari equivalgono a 5,2 ore annue per persona, insufficienti a presidiare simultaneamente i nuovi ingressi, l’aggiornamento delle posizioni in carico, lo scouting aziendale e l’amministrazione degli inserimenti. Da questo vincolo discendono direttamente le criticità di maggior peso: i tempi di presa in carico, le sette posizioni non ancora raggiunte e la copertura contenuta della determinazione delle competenze. L’ingresso del collaboratore per quindici ore settimanali ha prodotto un effetto immediato e misurabile — sedici delle diciassette azioni di luglio sono successive al 7 del mese — che costituisce l’argomento più solido a sostegno della **prosecuzione dell’incarico oltre il 30 settembre 2026**.' },
  { p: 'Il secondo nodo è la **conversione fra istruttoria e inserimento**. Ventidue beneficiari dispongono di colloquio e curriculum senza alcun inserimento attivato, a fronte di un residuo di dotazione di € 19.500,00 e di una rete di soli nove soggetti ospitanti. Il collo di bottiglia non è finanziario né istruttorio, ma risiede nella capacità di scouting, alla quale la configurazione ordinaria destina un’ora settimanale. Nel periodo residuo il rendimento più elevato si ottiene convertendo in inserimenti la platea già istruita e ampliando la base di imprese, non estendendo ulteriormente la presa in carico.' },
  { p: 'Si raccomanda infine, quale indirizzo strategico per il periodo residuo e per la programmazione della successiva annualità, l’assunzione della **sequenza incontro di orientamento → curriculum → determinazione delle competenze → borsa lavoro → tirocinio → rapporto di lavoro** quale standard operativo esplicito, con verifica sistematica del passaggio di stadio per ciascun beneficiario. Il caso documentato al § 8.1 dimostra che la sequenza funziona: si tratta di renderla la regola anziché l’eccezione. È il modo in cui una misura di accoglienza produce autonomia anziché dipendenza.' },

  { signature: ['Santa Elisabetta, 4 agosto 2026', 'Il Consulente all’orientamento al lavoro'] },

  { box: {
    kind: 'info',
    title: 'Allegati alla presente relazione',
    lines: [
      '**All. 1** — Resoconto orientamento aggiornato al 27/07/2026.',
      '**All. 2** — Prospetto Borse Lavoro aggiornato al 04/08/2026.',
      '**All. 3** — Elenco dei beneficiari assunti con contratto di lavoro nel 2026. [[Da allegare.]]',
      '**All. 4** — Elenco dei percorsi formativi erogati e attestati conseguiti. [[Da allegare.]]',
      '**All. 5** — Convenzioni con i soggetti ospitanti e coperture assicurative. [[Da allegare.]]',
      '**All. 6** — Progetto formativo e convenzione del tirocinio extracurriculare. [[Da allegare.]]'
    ]
  } }
];

module.exports = { meta, blocks };
