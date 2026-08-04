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
    ['Beneficiari in carico', '50 posizioni (46 singoli, 4 in nuclei familiari)'],
    ['Linea di intervento borse lavoro', 'Dotazione € 30.000,00 da Piano Finanziario'],
    ['Periodo osservato', '1° gennaio – 4 agosto 2026'],
    ['Dati aggiornati al', 'Orientamento: 27/07/2026 — Borse lavoro: 04/08/2026'],
    ['Redatta da', 'Consulente all’orientamento al lavoro'],
    ['Destinatari', 'Coordinamento di progetto — Ente titolare — Servizio Centrale SAI']
  ],
  privacy: {
    title: 'Trattamento dei dati personali',
    text: 'Il presente documento contiene dati personali di cinquanta beneficiari titolari di protezione internazionale e richiedenti asilo, trattati ai sensi del Reg. UE 2016/679 e del D.Lgs. 196/2003 come modificato dal D.Lgs. 101/2018, per le sole finalità di monitoraggio e rendicontazione del progetto. La circolazione è riservata ai soggetti istituzionalmente coinvolti nella gestione del progetto. Per qualunque uso divulgativo o per la trasmissione a soggetti terzi si raccomanda la sostituzione dei nominativi con i soli numeri di protocollo.'
  },
  toc: [
    ['1', 'Dati identificativi e oggetto della relazione', 0],
    ['2', 'Nota metodologica, fonti ed elementi da integrare', 0],
    ['3', 'Quadro normativo e di riferimento', 0],
    ['4', 'Struttura organizzativa del servizio', 0],
    ['4.1', 'Figure di riferimento e funzioni', 1],
    ['4.2', 'Monte ore e sua articolazione', 1],
    ['4.3', 'Organizzazione settimanale del presidio', 1],
    ['4.4', 'Effetti misurabili del rafforzamento estivo', 1],
    ['5', 'Metodologia dell’intervento: le fasi del percorso', 0],
    ['6', 'L’utenza in carico', 0],
    ['6.1', 'Dimensione e composizione', 1],
    ['6.2', 'Dinamica degli ingressi', 1],
    ['6.3', 'Beneficiari in uscita nel 2026', 1],
    ['7', 'Le azioni di orientamento erogate', 0],
    ['7.1', 'Quadro complessivo', 1],
    ['7.2', 'Colloqui individuali di orientamento', 1],
    ['7.3', 'Redazione e aggiornamento dei curriculum vitae', 1],
    ['7.4', 'Determinazione delle competenze', 1],
    ['7.5', 'Tempi di presa in carico', 1],
    ['7.6', 'Adempimenti amministrativi propedeutici', 1],
    ['7.7', 'Laboratori e attività di gruppo', 1],
    ['7.8', 'Ricerca attiva e invio delle candidature', 1],
    ['7.9', 'Mediazione linguistica applicata al lavoro', 1],
    ['7.10', 'Prospetto analitico individuale', 1],
    ['8', 'Le borse lavoro', 0],
    ['8.1', 'Prospetto analitico dei percorsi', 1],
    ['8.2', 'Stato di avanzamento', 1],
    ['8.3', 'Analisi settoriale e territoriale', 1],
    ['8.4', 'Quadro economico della linea di intervento', 1],
    ['8.5', 'Dall’orientamento all’inserimento: la struttura dell’imbuto', 1],
    ['9', 'Tirocini, esiti occupazionali e formazione', 0],
    ['9.1', 'Tirocinio extracurriculare attivato', 1],
    ['9.2', 'Esiti occupazionali', 1],
    ['9.3', 'Percorsi in attivazione o riprogrammazione', 1],
    ['9.4', 'Percorsi di formazione', 1],
    ['10', 'Implementazione della rete territoriale', 0],
    ['11', 'Criticità rilevate e azioni correttive', 0],
    ['12', 'Indicatori di monitoraggio', 0],
    ['13', 'Programmazione agosto – dicembre 2026', 0],
    ['14', 'Conclusioni', 0]
  ]
};

const C = 'center', R = 'right';

const blocks = [

  /* ============ 1 ============ */
  { h: 1, n: '1', t: 'Dati identificativi e oggetto della relazione' },
  { p: 'La presente relazione dà conto della strutturazione e dello stato di attuazione del servizio di **orientamento e accompagnamento all’inserimento lavorativo** nell’ambito del progetto SAI **PROG-684-PR — Santa Elisabetta**, gestito dall’Associazione Culturale Cometa ETS, con riferimento all’annualità 2026.' },
  { p: 'Il documento copre l’**intero perimetro del servizio** e non i soli percorsi di inserimento retribuiti. Il servizio ha in carico **cinquanta beneficiari**, per i quali ha erogato nel periodo di osservazione centoventotto azioni documentate fra colloqui di orientamento, redazione e aggiornamento dei curriculum e determinazione delle competenze, oltre agli adempimenti amministrativi propedeutici, alle attività di gruppo, alla ricerca attiva e alla mediazione linguistica applicata al contesto lavorativo. Le dieci borse lavoro e il tirocinio extracurriculare attivati costituiscono l’esito terminale di questo processo e riguardano una quota minoritaria dell’utenza: leggerli isolatamente restituirebbe una rappresentazione parziale e sottostimata dell’attività svolta.' },
  { p: 'Il documento è articolato in quattro parti. La prima descrive l’**assetto organizzativo** del servizio — figure professionali, monte ore, articolazione operativa e metodologia di presa in carico. La seconda restituisce l’**utenza in carico e le azioni erogate** in suo favore. La terza espone gli **inserimenti realizzati**: borse lavoro, tirocinio, esiti occupazionali, formazione e rete territoriale. La quarta propone una **lettura valutativa** dei risultati, con l’analisi delle criticità, il set di indicatori di monitoraggio e la programmazione per il periodo residuo dell’annualità.' },
  { p: 'L’obiettivo del servizio, coerentemente con quanto previsto dal sistema SAI, non si esaurisce nell’attivazione di misure di inserimento, ma consiste nell’accompagnare ciascun beneficiario verso una condizione di autonomia lavorativa sostenibile oltre la durata dell’accoglienza. La borsa lavoro va pertanto letta come strumento intermedio all’interno di un percorso, e non come esito finale: è in questa chiave che vengono qui valorizzate le transizioni verso il tirocinio extracurriculare e verso il rapporto di lavoro ordinario.' },

  /* ============ 2 ============ */
  { h: 1, n: '2', t: 'Nota metodologica, fonti ed elementi da integrare' },
  { h: 3, t: 'Fonti utilizzate' },
  { ul: [
    '**Resoconto orientamento aggiornato al 27/07/2026** — registro delle attività di orientamento, contenente cinquanta posizioni con numero di protocollo, data di ingresso e di fine progetto, e tracciamento delle date di colloquio di orientamento, redazione del curriculum e determinazione delle competenze, comprensivo dei successivi aggiornamenti. Tutti i dati dei §§ 6, 7 e 12 derivano da questa fonte.',
    '**Prospetto Borse Lavoro S. Elisabetta 2026, aggiornato al 04/08/2026** — registro dei percorsi di inserimento retribuiti, con soggetto ospitante, sede, settore, date, durata, importo impegnato e annotazioni di stato. Alimenta i §§ 8 e 10.',
    '**Informazioni sull’organico e sull’operatività del servizio** trasmesse dal Coordinamento di progetto: figure impiegate, monte ore settimanale, decorrenza degli incarichi e perimetro delle attività erogate (§§ 4 e 7.6-7.9).',
    '**Manuale operativo SAI, edizione 2025**, del Servizio Centrale, per la denominazione dei servizi, la tassonomia degli strumenti di orientamento e i riferimenti normativi richiamati al § 3.'
  ] },

  { h: 3, t: 'Criterio espositivo e limiti' },
  { p: 'Il documento distingue rigorosamente fra ciò che risulta **documentato** dalle fonti sopra indicate, ciò che costituisce **impianto metodologico del servizio** e ciò che è **proposta di programmazione** formulata dal consulente. Le sezioni descrittive del modello operativo (§ 5) e quelle programmatiche (§ 9.4 e § 13) sono presentate come tali e non vanno intese come attività già rendicontate.' },
  { p: 'Va precisato che le attività descritte ai §§ 7.6-7.9 — adempimenti amministrativi, attività di gruppo, ricerca attiva, mediazione linguistica — sono **effettivamente erogate dal servizio** ma non dispongono di un tracciamento quantitativo dedicato: il registro rileva le sole tre azioni strutturate. Ne consegue che il dato di centoventotto azioni costituisce una **stima per difetto** del volume di attività complessivamente svolto. La proposta di revisione del § 13.2 è diretta anche a colmare questa lacuna.' },
  { p: 'Le due fonti hanno inoltre date di aggiornamento diverse — 27 luglio per l’orientamento, 4 agosto per le borse lavoro — e non condividono una chiave identificativa comune: l’incrocio fra i due archivi è stato effettuato per nominativo, con riconciliazione manuale delle grafie difformi. Il resoconto orientamento reca in intestazione la data del 20/07/2026 ma contiene azioni registrate fino al 27/07/2026, coerentemente con la denominazione del file.' },

  { box: {
    kind: 'warn',
    title: 'Elementi da integrare a cura del Servizio',
    lines: [
      'I punti seguenti sono contrassegnati nel testo dalla dicitura [[da integrare]] e richiedono il completamento da parte del Servizio prima della trasmissione formale della relazione:',
      '•  elenco nominativo dei beneficiari assunti con contratto di lavoro nel 2026, con tipologia contrattuale, soggetto datoriale e decorrenza (§ 9.2);',
      '•  elenco dei corsi di formazione frequentati dai beneficiari nell’annualità, con ente erogatore, periodo e attestati conseguiti (§ 9.4);',
      '•  estremi della lettera di incarico del collaboratore all’orientamento (§ 4.1);',
      '•  estremi delle convenzioni sottoscritte con i soggetti ospitanti e delle relative coperture assicurative (§ 10.1);',
      '•  denominazione del Centro per l’Impiego territorialmente competente e del CPIA di riferimento (§ 10.2).'
    ]
  } },

  /* ============ 3 ============ */
  { h: 1, n: '3', t: 'Quadro normativo e di riferimento' },
  { p: 'Il servizio si colloca all’interno del sistema di accoglienza integrata disciplinato dall’**art. 1-sexies del D.L. 30 dicembre 1989, n. 416**, convertito con modificazioni dalla L. 39/1990, come da ultimo modificato dal **D.L. 21 ottobre 2020, n. 130**, convertito con modificazioni dalla **L. 173/2020**, che ha istituito il Sistema di Accoglienza e Integrazione (SAI) in sostituzione del precedente SIPROIMI.' },
  { p: 'Il decreto ministeriale di riferimento per il funzionamento del sistema, richiamato dal Manuale operativo SAI nella sua edizione 2025, è il **DM 18 novembre 2019**, il cui art. 5 pone in capo all’ente locale titolare del finanziamento l’obbligo di «un costante monitoraggio e controllo sull’attuazione dei progetti, sull’erogazione dei servizi di accoglienza e sulla corretta gestione amministrativa». La presente relazione si inscrive in tale obbligo di monitoraggio.' },
  { p: 'L’**orientamento e accompagnamento all’inserimento lavorativo** figura fra i servizi che l’ente attuatore è tenuto a garantire, ed è oggetto di una sezione dedicata del Manuale operativo SAI. Il Manuale ne articola gli strumenti in una tassonomia che il presente documento assume come griglia espositiva: orientamento al territorio, curriculum vitae, bilancio di competenze, certificazione delle competenze, istruzione degli adulti, formazione professionale, tirocinio formativo e di orientamento, **borsa lavoro**, apprendistato, ricerca del lavoro, preparazione al colloquio di lavoro e lavoro autonomo.' },
  { p: 'Due indicazioni del Manuale rilevano in modo diretto per la lettura dei dati esposti nel seguito. La prima è che, indipendentemente dal titolo di soggiorno posseduto e dalle limitazioni che la normativa può porre all’accesso a determinate misure, restano **sempre attivabili in favore di tutti gli accolti** le misure propedeutiche: apprendimento della lingua italiana, ricostruzione e certificazione delle competenze, compilazione del curriculum vitae, accompagnamento alla conoscenza delle modalità di ricerca del lavoro e preparazione ai colloqui. È questa la ragione per cui la copertura del colloquio e del curriculum è, ed è corretto che sia, sensibilmente più ampia di quella degli inserimenti retribuiti.' },
  { p: 'La seconda riguarda la **borsa lavoro**, che il Manuale qualifica come «strumento di transizione che può agevolare l’ingresso nel mercato lavorativo attraverso un’esperienza di formazione in azienda, con caratteristiche molto simili al tirocinio formativo», al quale «potrà seguire l’instaurazione di un rapporto di lavoro», raccomandando la stipula di accordi scritti a tutela del borsista e la copertura assicurativa. Il § 9.1 documenta un caso in cui questa transizione si è effettivamente realizzata.' },
  { p: 'Il **bilancio di competenze** è descritto dal Manuale come «uno degli strumenti più complessi» del servizio, finalizzato alla ricostruzione del bagaglio personale del beneficiario e affidato a una figura esperta. Tale qualificazione rileva ai fini della lettura del dato di copertura esposto al § 7.4.' },
  { p: 'L’attivazione dei **tirocini extracurriculari** è retta dalle Linee guida approvate in sede di Conferenza permanente Stato-Regioni — da ultimo con l’Accordo del 17 maggio 2023, che ha aggiornato quello del 25 maggio 2017 — e dalla disciplina di recepimento della Regione Siciliana. Completano il quadro il **D.Lgs. 81/2008** in materia di formazione obbligatoria alla salute e sicurezza sul lavoro, il **D.Lgs. 286/1998** quanto ai titoli di soggiorno che consentono l’accesso al lavoro, e il **Reg. UE 2016/679** per il trattamento dei dati personali dei beneficiari.' },
  { note: 'I riferimenti sono indicati nella versione vigente alla data di redazione; se ne raccomanda la verifica puntuale rispetto agli obblighi assunti con la convenzione di progetto.' },

  /* ============ 4 ============ */
  { h: 1, n: '4', t: 'Struttura organizzativa del servizio' },
  { p: 'Il servizio è strutturato su **due figure professionali**, con una configurazione che prevede un presidio stabile per l’intera annualità e un rafforzamento temporaneo in corrispondenza del picco operativo del periodo estivo. Il § 4.4 documenta gli effetti misurabili di tale scelta.' },

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
  { h: 3, t: 'Orientatrice al lavoro — Tiziana Graceffa' },
  { p: 'Titolare del servizio, ne presidia l’intero ciclo, dalla presa in carico alla valutazione degli esiti. In particolare:' },
  { ul: [
    '**presa in carico** del beneficiario e conduzione dei colloqui individuali di orientamento;',
    '**determinazione delle competenze** e ricostruzione del profilo professionale, con emersione delle competenze acquisite nel Paese di origine e lungo il percorso migratorio;',
    '**redazione e aggiornamento del curriculum vitae**, con revisione periodica in funzione delle esperienze maturate;',
    '**progettazione individualizzata** del percorso di inserimento, in raccordo con l’équipe multidisciplinare e con il progetto educativo individuale;',
    '**scouting aziendale** e attività di matching fra profilo del beneficiario e fabbisogni delle imprese del territorio;',
    '**istruttoria e gestione amministrativa** delle borse lavoro: convenzioni con i soggetti ospitanti, progetti formativi, coperture assicurative, registri presenze, liquidazione delle mensilità;',
    '**tutoraggio in itinere**, con visite in azienda e raccordo con il tutor aziendale;',
    '**rapporti istituzionali** con Centri per l’Impiego, Agenzie per il Lavoro, enti promotori di tirocinio, enti di formazione e CPIA;',
    '**monitoraggio e rendicontazione**, con aggiornamento dei registri di servizio e produzione della documentazione richiesta ai fini della rendicontazione SAI.'
  ] },
  { h: 3, t: 'Collaboratore orientatore al lavoro — Giuseppe Lo Presti Seminerio' },
  { p: 'L’incarico, con decorrenza **7 luglio 2026** e scadenza **30 settembre 2026** per **15 ore settimanali**, è stato attivato in corrispondenza della fase di maggiore intensità operativa dell’annualità. La funzione è di supporto operativo all’orientatrice, con particolare riferimento a:' },
  { ul: [
    '**affiancamento nei colloqui** individuali e conduzione delle attività di gruppo;',
    '**accompagnamento fisico** dei beneficiari presso i soggetti ospitanti, i Centri per l’Impiego e gli uffici pubblici, con funzione di mediazione pratica;',
    '**supporto documentale**: redazione e aggiornamento dei curriculum vitae, attivazione dell’identità digitale, dichiarazione di immediata disponibilità al lavoro, pratiche connesse al titolo di soggiorno;',
    '**monitoraggio in azienda** dei percorsi in corso e raccolta dei registri di presenza;',
    '**recupero dell’arretrato** sulle prese in carico non ancora effettuate e sulle determinazioni delle competenze;',
    '**supporto alla tenuta** della documentazione di servizio e all’aggiornamento dei prospetti di monitoraggio.'
  ] },

  { h: 2, n: '4.2', t: 'Monte ore e sua articolazione' },
  { p: 'Il monte ore complessivo si compone di una quota stabile, garantita per l’intera annualità dall’orientatrice, e di una quota aggiuntiva concentrata nel trimestre luglio-settembre.' },
  { table: {
    cols: [0.27, 0.15, 0.17, 0.16, 0.25],
    head: ['Figura', 'Ore settimanali', 'Settimane nel periodo', 'Ore nel periodo', 'Base di calcolo'],
    rows: [
      ['Tiziana Graceffa', '5,0', '30,7', '≈ 153', '01/01/2026 – 04/08/2026'],
      ['Tiziana Graceffa', '5,0', '52,0', '260,0', 'Proiezione annua 2026'],
      ['Giuseppe Lo Presti Seminerio', '15,0', '12,3', '184,5', '07/07/2026 – 30/09/2026'],
      ['Giuseppe Lo Presti Seminerio', '15,0', '4,0', '60,0', 'Quota maturata al 04/08/2026'],
      ['**Totale annuo del servizio**', '', '', '**444,5**', 'Somma delle due proiezioni']
    ],
    align: [null, C, C, C, null]
  } },
  { p: 'Il periodo di incarico del collaboratore, compreso fra il 7 luglio e il 30 settembre 2026, corrisponde a **86 giorni di calendario**, pari a **12,3 settimane**: il monte ore complessivo dell’incarico ammonta pertanto a **184,5 ore**, di cui 60 già maturate alla data della presente relazione.' },
  { p: 'Nel trimestre di sovrapposizione la capacità settimanale del servizio passa da 5 a **20 ore**, con una moltiplicazione per quattro del presidio disponibile. Sul piano annuo, il monte ore complessivo è di **444,5 ore**, corrispondenti a **8,9 ore per beneficiario in carico**; considerando la sola orientatrice, il rapporto scende a **5,2 ore per beneficiario**, comprensive di colloqui, determinazione delle competenze, redazione dei curriculum, scouting, gestione amministrativa e tutoraggio.' },
  { p: 'Quest’ultimo dato è la chiave di lettura di gran parte delle criticità esposte al § 11: **cinque ore all’anno per beneficiario** non consentono, simultaneamente, di presidiare i nuovi ingressi, mantenere aggiornate le posizioni in carico, condurre lo scouting aziendale e gestire l’amministrazione degli inserimenti. Le scelte operative documentate nel seguito — copertura ampia sugli strumenti propedeutici, copertura selettiva sulla determinazione delle competenze, tempi di primo contatto dilatati — vanno lette come effetti di questo vincolo, non come carenze di impostazione.' },

  { h: 2, n: '4.3', t: 'Organizzazione settimanale del presidio' },
  { p: 'Le cinque ore settimanali dell’orientatrice sono articolate secondo lo schema seguente, che alterna attività a diretto contatto con i beneficiari e attività di back office:' },
  { table: {
    cols: [0.13, 0.45, 0.42],
    head: ['Ore', 'Attività', 'Modalità'],
    rows: [
      ['2,0', 'Colloqui individuali di orientamento e determinazione delle competenze', 'Su appuntamento, presso la sede di progetto'],
      ['1,0', 'Scouting aziendale e cura dei rapporti con la rete territoriale', 'Contatti telefonici, visite alle imprese'],
      ['1,0', 'Tutoraggio e monitoraggio dei percorsi in corso', 'Visite in azienda, raccordo con i tutor aziendali'],
      ['1,0', 'Gestione amministrativa, documentale e di rendicontazione', 'Back office'],
      ['**5,0**', '**Totale settimanale**', '']
    ],
    align: [C, null, null]
  } },
  { p: 'Nel trimestre luglio-settembre le quindici ore aggiuntive del collaboratore sono destinate prioritariamente al recupero dell’arretrato sulle prese in carico, agli accompagnamenti esterni e al monitoraggio in azienda — le attività più onerose in termini di tempo e le prime a essere compresse nella configurazione ordinaria.' },

  { h: 2, n: '4.4', t: 'Effetti misurabili del rafforzamento estivo' },
  { p: 'L’ingresso del collaboratore produce un effetto immediato e quantificabile sul volume di attività erogata, documentato dalla distribuzione mensile delle azioni registrate nel 2026.' },
  { table: {
    cols: [0.20, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10],
    head: ['Mese 2026', 'Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Tot'],
    rows: [
      ['Azioni registrate', '12', '17', '7', '6', '2', '2', '17', '63']
    ],
    align: [null, C, C, C, C, C, C, C, C],
    headAlign: [null, C, C, C, C, C, C, C, C],
    boldFirst: true
  } },
  { p: 'Il dato di luglio merita una lettura ravvicinata: delle **17 azioni** registrate nel mese, **16 sono successive al 7 luglio**, data di decorrenza dell’incarico di collaborazione. Rapportando i volumi ai giorni effettivi, il bimestre maggio-giugno registra 4 azioni in 61 giorni, mentre il periodo dal 7 al 27 luglio ne registra 16 in 20 giorni: la produttività giornaliera del servizio passa da 0,07 a 0,80 azioni, con un incremento di oltre dodici volte a fronte di una quadruplicazione delle ore disponibili.' },
  { p: 'Il confronto va assunto con la cautela che impone la brevità del periodo osservato: tre settimane non costituiscono una serie storica, e il resoconto è aggiornato al 27 luglio, sicché il mese non è integralmente rappresentato. Nondimeno la coincidenza fra la data di decorrenza dell’incarico e la ripresa dell’attività è netta, e il fatto che l’incremento sia **più che proporzionale** rispetto alle ore aggiunte suggerisce che il servizio, nella configurazione a cinque ore, operasse al di sotto della propria soglia di efficienza: una quota rilevante del tempo disponibile era assorbita da attività non comprimibili — amministrazione, rendicontazione, gestione degli inserimenti in corso — lasciando un margine residuo minimo per il contatto diretto con i beneficiari.' },
  { p: 'Il dato costituisce l’argomento tecnico più solido a sostegno della **prosecuzione dell’incarico di collaborazione oltre il 30 settembre 2026**, richiamata al § 13.' },

  /* ============ 5 ============ */
  { h: 1, n: '5', t: 'Metodologia dell’intervento: le fasi del percorso' },
  { p: 'Il servizio adotta un modello per fasi successive, ciascuna con esiti verificabili, che consente di ricostruire in ogni momento il punto del percorso in cui ciascun beneficiario si colloca. Le fasi 2, 3 e 5 corrispondono alle tre azioni tracciate nel registro di servizio e quantificate al § 7.' },
  { h: 3, t: 'Fase 1 — Accoglienza e orientamento al territorio' },
  { p: 'Primo contatto successivo all’ingresso in accoglienza, con restituzione al beneficiario del funzionamento del mercato del lavoro locale, dei servizi competenti e dei vincoli connessi al titolo di soggiorno. Standard di riferimento assunto dal servizio: entro trenta giorni dall’ingresso. Il § 7.5 misura lo scostamento effettivo da tale standard.' },
  { h: 3, t: 'Fase 2 — Colloquio individuale di orientamento' },
  { p: 'Ricostruzione della biografia formativa e lavorativa, verifica della posizione documentale rispetto all’accesso al lavoro, rilevazione del livello di competenza linguistica ed emersione delle aspettative professionali. Esito: apertura della scheda individuale e registrazione della data nel resoconto di servizio. Il colloquio è ripetuto e aggiornato quando mutano le condizioni del beneficiario.' },
  { h: 3, t: 'Fase 3 — Redazione del curriculum vitae' },
  { p: 'Costruzione del curriculum in formato europeo, con particolare attenzione alla valorizzazione delle esperienze non documentate da titoli. Il Manuale operativo SAI segnala che il curriculum, se costruito con attenzione, svolge esso stesso una funzione ricostruttiva prossima a quella del bilancio di competenze. Il documento è aggiornato a ogni esperienza rilevante: il § 7.3 dà conto del numero di aggiornamenti effettuati.' },
  { h: 3, t: 'Fase 4 — Regolarizzazione della posizione amministrativa' },
  { p: 'Accompagnamento agli adempimenti che condizionano l’accesso alle misure di politica attiva: codice fiscale, identità digitale, dichiarazione di immediata disponibilità, iscrizione al Centro per l’Impiego, apertura del rapporto di conto corrente. La mancata cura di questa fase costituisce la più frequente causa di ritardo nell’avvio dei percorsi.' },
  { h: 3, t: 'Fase 5 — Determinazione delle competenze' },
  { p: 'Ricostruzione strutturata del bagaglio di competenze possedute, comprensive di quelle acquisite in contesti non formali e informali, con rilevazione parallela dei vincoli oggettivi: livello di italiano L2, possesso della patente, disponibilità alla mobilità, scadenza del titolo di soggiorno, obblighi di cura familiari. È lo strumento più oneroso del servizio e richiede più incontri.' },
  { h: 3, t: 'Fase 6 — Empowerment e preparazione al colloquio' },
  { p: 'Attività individuali e di gruppo su tecniche di ricerca attiva, simulazione del colloquio di selezione, elementi di contrattualistica e busta paga, diritti e doveri del lavoratore, nozioni di sicurezza. È la fase che più incide sulla tenuta autonoma del beneficiario dopo l’uscita dall’accoglienza.' },
  { h: 3, t: 'Fase 7 — Scouting e matching' },
  { p: 'Individuazione del soggetto ospitante coerente con il profilo e con l’obiettivo professionale definito. Il matching considera la disponibilità dell’impresa, la sostenibilità logistica della sede, la presenza di un tutor aziendale effettivamente disponibile e la coerenza della mansione con le prospettive occupazionali del settore.' },
  { h: 3, t: 'Fase 8 — Attivazione della misura' },
  { p: 'Formalizzazione della borsa lavoro o del tirocinio: sottoscrizione della convenzione, redazione del progetto formativo individuale, attivazione delle coperture assicurative, assolvimento degli obblighi formativi in materia di sicurezza, comunicazioni obbligatorie ove previste.' },
  { h: 3, t: 'Fase 9 — Tutoraggio in itinere' },
  { p: 'Monitoraggio periodico mediante visite in azienda, colloqui con il beneficiario e raccordo con il tutor aziendale, con raccolta dei registri di presenza e verifica degli obiettivi formativi. È la fase che consente di intercettare precocemente i segnali di disallineamento, prima che esitino in un’interruzione.' },
  { h: 3, t: 'Fase 10 — Valutazione finale e transizione' },
  { p: 'Valutazione congiunta dell’esperienza con il beneficiario e con il soggetto ospitante, rilascio dell’attestazione delle competenze acquisite e definizione dello sbocco: assunzione diretta, attivazione di un tirocinio extracurriculare, prosecuzione della ricerca attiva. Il caso illustrato al § 9.1 documenta il funzionamento di questa fase.' },

  /* ============ 6 ============ */
  { h: 1, n: '6', t: 'L’utenza in carico' },
  { h: 2, n: '6.1', t: 'Dimensione e composizione' },
  { p: 'Alla data del 27 luglio 2026 il servizio ha in carico **cinquanta posizioni**, di cui quarantasei riferite a beneficiari singoli e quattro a componenti di nuclei familiari. Si tratta della platea complessiva sulla quale il servizio è chiamato a operare, indipendentemente dallo stadio del percorso raggiunto da ciascuno.' },
  { table: {
    cols: [0.42, 0.14, 0.14, 0.30],
    head: ['Composizione dell’utenza', 'N.', 'Quota', 'Note'],
    rows: [
      ['Beneficiari singoli', '46', '92,0%', 'Posizioni individuali'],
      ['Componenti di nuclei familiari', '4', '8,0%', 'Posizioni nn. 47-50 del prospetto § 7.10'],
      ['**Totale posizioni in carico**', '**50**', '**100,0%**', '']
    ],
    align: [null, C, C, null]
  } },

  { h: 2, n: '6.2', t: 'Dinamica degli ingressi' },
  { p: 'La distribuzione degli ingressi per anno restituisce un servizio in crescita costante, con un’utenza che si è più che raddoppiata rispetto alla coorte iniziale.' },
  { table: {
    cols: [0.22, 0.16, 0.16, 0.46],
    head: ['Anno di ingresso', 'N.', 'Quota', 'Osservazioni'],
    rows: [
      ['2024', '8', '16,0%', 'Coorte più risalente, con percorsi in fase avanzata'],
      ['2025', '22', '44,0%', 'Anno di maggiore afflusso'],
      ['2026', '20', '40,0%', 'Al 27/07; sette posizioni non ancora prese in carico'],
      ['**Totale**', '**50**', '**100,0%**', '']
    ],
    align: [null, C, C, null]
  } },
  { p: 'I venti ingressi registrati nei primi sette mesi del 2026 corrispondono a un flusso medio di quasi **tre nuovi beneficiari al mese**, a fronte di un servizio dimensionato, fino a luglio, su cinque ore settimanali. È questo squilibrio fra flusso in ingresso e capacità di presa in carico a generare l’arretrato documentato al § 7.5, non una carenza nella qualità dell’intervento erogato.' },

  { h: 2, n: '6.3', t: 'Beneficiari in uscita nel 2026' },
  { p: 'Undici beneficiari concludono il percorso di accoglienza entro il 31 dicembre 2026. Per ciascuno di essi la finestra utile a completare il percorso di orientamento e a consolidare l’autonomia lavorativa è ormai definita, il che rende prioritaria una verifica individuale dello stato di avanzamento.' },
  { table: {
    cols: [0.14, 0.24, 0.62],
    head: ['Fine progetto', 'Beneficiario', 'Stato del percorso di orientamento'],
    rows: D.scadenze2026,
    align: [C, null, null],
    small: true
  } },
  { p: 'Il quadro evidenzia tre situazioni di particolare attenzione. **SANGARE Madou** esce dal progetto il 15 agosto 2026 senza che risulti effettuata alcuna azione di orientamento: è la posizione con il più elevato grado di urgenza dell’intero portafoglio. **TALEEM Usama** esce il 7 agosto con una borsa interrotta al terzo giorno e nessuna riprogrammazione perfezionata. **TRAORE Baba** e **CAMARA Ousmane** hanno concluso regolarmente la borsa lavoro e costituiscono i candidati naturali alla trasformazione in tirocinio secondo il modello del § 9.1, da attivare prima dell’uscita.' },
  { p: 'Le uscite successive si distribuiscono su nove posizioni nel 2027, diciassette nel 2028 e quattro nel 2029; **nove posizioni risultano prive della data di fine progetto**, circostanza che impedisce la programmazione delle azioni di accompagnamento all’uscita e che si raccomanda di sanare.' },

  /* ============ 7 ============ */
  { h: 1, n: '7', t: 'Le azioni di orientamento erogate' },
  { h: 2, n: '7.1', t: 'Quadro complessivo' },
  { p: 'Il registro di servizio traccia tre azioni strutturate — colloquio di orientamento, redazione del curriculum, determinazione delle competenze — rilevandone sia l’erogazione iniziale sia i successivi aggiornamenti. Complessivamente risultano registrate **128 azioni**.' },
  { table: {
    cols: [0.30, 0.13, 0.13, 0.14, 0.30],
    head: ['Azione', 'Beneficiari', 'Copertura', 'Azioni totali', 'di cui aggiornamenti'],
    rows: [
      ['Colloquio di orientamento', '41', '82,0%', '48', '7'],
      ['Curriculum vitae', '43', '86,0%', '61', '18'],
      ['Determinazione delle competenze', '19', '38,0%', '19', '—'],
      ['**Totale azioni registrate**', '', '', '**128**', '**25**']
    ],
    align: [null, C, C, C, C],
    headAlign: [null, C, C, C, C]
  } },
  { p: 'Quarantatré beneficiari su cinquanta (**86,0%**) sono stati raggiunti da almeno un’azione; la media è di **2,6 azioni per beneficiario in carico**, che sale a 3,0 se calcolata sui soli beneficiari effettivamente attivati. I venticinque aggiornamenti registrati — un quinto del totale — documentano che il servizio non si limita alla presa in carico iniziale ma **mantiene le posizioni in aggiornamento nel tempo**, rivedendo curriculum e colloqui al mutare delle condizioni del beneficiario.' },
  { p: 'La distribuzione per anno mostra una progressione coerente con la crescita dell’utenza: 13 azioni nel 2024, **52 nel 2025**, **63 nei primi sette mesi del 2026**. Il volume del solo 2026 parziale supera già quello dell’intero 2025.' },
  { p: 'Si ribadisce quanto anticipato al § 2: il dato di 128 azioni **non esaurisce l’attività svolta**, poiché il registro non traccia gli accompagnamenti amministrativi, le attività di gruppo, la ricerca attiva e la mediazione linguistica descritti ai §§ 7.6-7.9. Il volume complessivo di attività è pertanto superiore a quello qui quantificato.' },

  { h: 2, n: '7.2', t: 'Colloqui individuali di orientamento' },
  { p: 'Il colloquio individuale è lo strumento di ingresso del servizio e presenta una copertura dell’**82,0%** (41 beneficiari su 50). Sono stati condotti **48 colloqui**, di cui 7 configurati come aggiornamenti di posizioni già in carico: sette beneficiari hanno cioè beneficiato di un secondo colloquio a distanza di tempo, a seguito del mutare delle condizioni personali o dell’avvicinarsi di un’opportunità di inserimento.' },
  { p: 'Nel 2026 sono stati condotti **21 colloqui**, a fronte dei 20 dell’intero 2025 e dei 7 del 2024. Le nove posizioni prive di colloquio corrispondono ai sette beneficiari non ancora presi in carico (§ 11.2) e a due posizioni che presentano curriculum senza colloquio a monte, verosimilmente per una lacuna di registrazione (§ 11.10).' },

  { h: 2, n: '7.3', t: 'Redazione e aggiornamento dei curriculum vitae' },
  { p: 'Il curriculum registra la copertura più elevata dell’intero servizio, **86,0%** (43 beneficiari su 50), e il maggior volume di azioni: **61 in totale, di cui 18 aggiornamenti**. Diciotto aggiornamenti su quarantatré posizioni significano che oltre un terzo dei curriculum è stato rivisto almeno una volta, e in tre casi due o più volte.' },
  { p: 'Il dato è qualitativamente significativo. L’aggiornamento del curriculum non è un adempimento formale: presuppone un contatto con il beneficiario, la rilevazione di un’esperienza nuova da inserire e una rielaborazione condivisa del profilo. Costituisce pertanto un **indicatore indiretto della continuità della relazione di servizio** oltre il momento della presa in carico, ed è coerente con l’indicazione del Manuale operativo SAI secondo cui il curriculum, se costruito con attenzione, svolge una funzione ricostruttiva prossima a quella del bilancio di competenze.' },
  { p: 'Nel 2026 sono state registrate **30 azioni sul curriculum**, contro le 25 dell’intero 2025: è la voce che cresce più rapidamente e quella su cui si concentra prevalentemente l’attività di luglio successiva all’ingresso del collaboratore.' },

  { h: 2, n: '7.4', t: 'Determinazione delle competenze' },
  { p: 'La determinazione delle competenze risulta effettuata per **19 beneficiari su 50**, pari al **38,0%**, senza aggiornamenti registrati. È la copertura più contenuta fra le tre azioni tracciate, e va letta secondo una duplice chiave.' },
  { p: 'La prima è **metodologica**. Il Manuale operativo SAI qualifica il bilancio di competenze come «uno degli strumenti più complessi» del servizio, richiedente una figura esperta e più incontri strutturati. Il servizio lo attiva pertanto in modo selettivo, a valle del colloquio e del curriculum, per i beneficiari che presentano un progetto professionale definito o che sono candidati a un inserimento a breve termine. In questa prospettiva il 38,0% non misura una lacuna, ma l’esito di un filtro intenzionale.' },
  { p: 'La seconda è **di capacità**. Ventidue beneficiari (44,0%) dispongono di colloquio e curriculum ma non della determinazione: è la platea di posizioni istruite in cui lo strumento non è stato attivato. Che tale platea ecceda in numero i beneficiari che lo strumento hanno ricevuto indica che, accanto alla selezione metodologica, opera un vincolo di monte ore. Con cinque ore settimanali, uno strumento che richiede più incontri per beneficiario è strutturalmente il primo a essere razionato.' },
  { p: 'Le due letture non si escludono e conducono alla medesima raccomandazione, formulata al § 11.3: **esplicitare il criterio di attivazione dello strumento** — così che la selettività diventi una scelta documentata anziché un esito implicito — e recuperare prioritariamente le posizioni già istruite, a partire dagli undici beneficiari in uscita nel 2026.' },
  { p: 'Si segnala infine che i **19 beneficiari con determinazione delle competenze coincidono esattamente con quelli dotati del percorso completo** (colloquio, curriculum e determinazione): non si registra alcun caso di determinazione effettuata in assenza degli strumenti propedeutici, il che conferma il rispetto della sequenza metodologica.' },

  { h: 2, n: '7.5', t: 'Tempi di presa in carico' },
  { p: 'L’intervallo fra ingresso in progetto e primo colloquio di orientamento costituisce l’indicatore più severo fra quelli rilevabili dal registro di servizio.' },
  { table: {
    cols: [0.46, 0.18, 0.36],
    head: ['Indicatore', 'Valore', 'Lettura'],
    rows: [
      ['Tempo minimo', '3 giorni', 'Presa in carico immediata'],
      ['Tempo mediano', '51 giorni', 'Valore rappresentativo del comportamento tipico'],
      ['Tempo medio', '95 giorni', 'Appesantito dai casi più risalenti'],
      ['Tempo massimo', '359 giorni', 'SARDER Ibrahim: ingresso 22/07/2025, colloquio 16/07/2026'],
      ['Prese in carico entro 30 giorni', '12 su 41 — 29,3%', 'Al di sotto dello standard assunto dal servizio'],
      ['Prese in carico entro 60 giorni', '23 su 41 — 56,1%', ''],
      ['Prese in carico entro 90 giorni', '27 su 41 — 65,9%', 'Un terzo delle posizioni oltre il trimestre']
    ],
    align: [null, C, null]
  } },
  { p: 'La divaricazione fra mediana (51 giorni) e media (95 giorni) indica una distribuzione asimmetrica: il comportamento tipico del servizio è sensibilmente migliore di quanto la media suggerisca, ma un gruppo ristretto di casi molto lunghi ne appesantisce il valore. I cinque casi oltre i duecento giorni — ALADIN Md, TIE’NE’ Ibrahim, DIALLO Moussa, MARONG Ablie e SARDER Ibrahim — riguardano in prevalenza ingressi del 2024 e del 2025, precedenti all’attuale assetto del servizio.' },
  { p: 'Il dato va imputato al dimensionamento e non alla metodologia: con venti nuovi ingressi nei primi sette mesi del 2026 e cinque ore settimanali di presidio, il servizio ha dovuto scegliere fra il mantenimento delle posizioni in carico e l’intercettazione dei nuovi arrivi, privilegiando la prima. Il § 11.1 propone l’adozione di un protocollo di primo contatto entro trenta giorni, sostenibile solo a condizione che il rafforzamento dell’organico sia mantenuto.' },

  { h: 2, n: '7.6', t: 'Adempimenti amministrativi propedeutici' },
  { p: 'Il servizio assicura l’accompagnamento agli adempimenti che condizionano l’accesso alle misure di politica attiva: **iscrizione al Centro per l’Impiego**, rilascio della **dichiarazione di immediata disponibilità al lavoro**, attivazione dell’**identità digitale SPID**, attribuzione del codice fiscale, apertura del rapporto di conto corrente per l’accredito delle indennità, pratiche connesse al titolo di soggiorno.' },
  { p: 'Si tratta di attività a elevato assorbimento di tempo — richiedono nella generalità dei casi l’accompagnamento fisico del beneficiario presso gli uffici e una funzione di mediazione pratica — e a bassa visibilità nella rendicontazione, poiché non producono un documento intestato al servizio. Sono tuttavia condizione necessaria di ogni inserimento successivo: la mancata cura di questa fase costituisce la più frequente causa di ritardo nell’avvio dei percorsi.' },
  { p: 'L’attività non dispone allo stato di un tracciamento quantitativo dedicato. Se ne raccomanda l’introduzione secondo il format proposto al § 13.2, che ne consentirebbe la valorizzazione in sede di rendicontazione.' },

  { h: 2, n: '7.7', t: 'Laboratori e attività di gruppo' },
  { p: 'Accanto ai colloqui individuali il servizio conduce **attività di orientamento in forma collettiva**: incontri di gruppo sul funzionamento del mercato del lavoro locale, simulazioni del colloquio di selezione, moduli informativi su contrattualistica, busta paga, diritti e doveri del lavoratore, nozioni di base in materia di sicurezza sul lavoro e informazione sui rischi connessi al lavoro irregolare.' },
  { p: 'La modalità di gruppo presenta, in un servizio dimensionato su cinquanta beneficiari e un monte ore contenuto, un **rapporto costo-beneficio nettamente favorevole**: consente di raggiungere simultaneamente più beneficiari sui contenuti standardizzabili, liberando il colloquio individuale per ciò che richiede una relazione personale. Il Manuale operativo SAI colloca del resto la preparazione al colloquio di lavoro e la conoscenza delle modalità di ricerca fra le misure attivabili in favore di tutti gli accolti, indipendentemente dal titolo di soggiorno.' },
  { p: 'Si raccomanda la calendarizzazione strutturata dei moduli di gruppo — con registro delle presenze — quale strumento di recupero della copertura sui beneficiari non ancora raggiunti individualmente, sfruttando il trimestre di presenza del collaboratore.' },

  { h: 2, n: '7.8', t: 'Ricerca attiva e invio delle candidature' },
  { p: 'Il servizio supporta i beneficiari nella **ricerca attiva di opportunità occupazionali**: individuazione delle offerte, predisposizione e invio delle candidature, contatti diretti con le imprese per conto del beneficiario, preparazione ai colloqui di selezione e accompagnamento nella fase di primo contatto con il potenziale datore di lavoro.' },
  { p: 'L’attività si colloca a valle della redazione del curriculum e opera su una platea più ampia di quella degli inserimenti formalizzati: rispetto ai ventidue beneficiari dotati di colloquio e curriculum ma privi di inserimento attivato (§ 8.5), la ricerca attiva costituisce il principale canale di servizio disponibile. È inoltre l’attività destinata ad assumere rilievo crescente per i beneficiari in uscita dal progetto, per i quali l’autonomia nella ricerca è precondizione della tenuta post-accoglienza.' },
  { p: 'Anche in questo caso l’attività non è tracciata quantitativamente. La registrazione del numero di candidature inviate e degli esiti costituirebbe l’indicatore più direttamente rappresentativo dell’efficacia del servizio, e ne è raccomandata l’introduzione.' },

  { h: 2, n: '7.9', t: 'Mediazione linguistica applicata al lavoro' },
  { p: 'Il servizio assicura **affiancamento linguistico nei contesti lavorativi**: traduzione e spiegazione della documentazione contrattuale, mediazione nei rapporti con il tutor aziendale, alfabetizzazione al lessico professionale specifico del settore di inserimento, supporto nella comprensione delle disposizioni in materia di sicurezza.' },
  { p: 'La funzione è direttamente connessa alla **tenuta dei percorsi di inserimento**. L’interruzione documentata al § 8.2 — un beneficiario inserito nel commercio, con percorso cessato al terzo giorno — è compatibile con una difficoltà di natura linguistico-relazionale in un contesto di vendita al pubblico, benché le cause non risultino formalmente accertate. Il rafforzamento della mediazione nella fase di avvio, e non solo in quella di preparazione, costituisce la misura preventiva più efficace rispetto a questa tipologia di rischio.' },
  { p: 'L’attività si raccorda con i percorsi di alfabetizzazione presso il CPIA richiamati al § 9.4, dei quali costituisce l’applicazione al contesto lavorativo specifico.' },

  { land: 'start' },
  { h: 2, n: '7.10', t: 'Prospetto analitico individuale' },
  { p: 'Il prospetto riporta la totalità delle cinquanta posizioni in carico, con lo stato di avanzamento di ciascuna rispetto alle tre azioni tracciate. La notazione **(+n)** indica il numero di aggiornamenti successivi alla prima erogazione.' },
  { table: {
    cols: [0.034, 0.055, 0.225, 0.095, 0.095, 0.120, 0.120, 0.110, 0.146],
    head: ['N.', 'Prot.', 'Beneficiario', 'Ingresso', 'Fine prog.', 'Colloquio', 'Curriculum', 'Competenze', 'Borsa lavoro'],
    rows: D.utenza.map(u => [u.n, u.prot, u.nome, u.ing, u.fine, u.col, u.cv, u.comp, u.borsa]),
    align: [C, C, null, C, C, C, C, C, null],
    headAlign: [C, C, null, C, C, C, C, C, null],
    small: true, long: true
  } },
  { note: 'Fonte: Resoconto orientamento, dati al 27/07/2026. Le posizioni nn. 47-50 si riferiscono a componenti di nuclei familiari. La colonna «Borsa lavoro» è ricavata dall’incrocio con il Prospetto Borse Lavoro al 04/08/2026, effettuato per nominativo.' },
  { land: 'end' },

  /* ============ 8 ============ */
  { h: 1, n: '8', t: 'Le borse lavoro' },
  { p: 'La borsa lavoro costituisce lo strumento di inserimento retribuito interno al progetto. Nell’annualità 2026 sono stati progettati dieci percorsi in favore di nove beneficiari distinti, pari al 18,0% dell’utenza in carico.' },

  { land: 'start' },
  { h: 2, n: '8.1', t: 'Prospetto analitico dei percorsi' },
  { table: {
    cols: [0.034, 0.062, 0.144, 0.089, 0.137, 0.082, 0.082, 0.069, 0.069, 0.041, 0.076, 0.115],
    head: ['N.', 'ID', 'Beneficiario', 'Unità abitativa', 'Soggetto ospitante', 'Sede', 'Settore', 'Inizio', 'Fine', 'Mesi', 'Importo €', 'Stato del percorso'],
    rows: D.borse.map(b => [b.n, b.id, b.ben, b.ua, b.az, b.sede, b.set, b.ini, b.fin, b.mesi, b.imp, b.stato]),
    align: [C, C, null, null, null, null, null, C, C, C, R, null],
    headAlign: [C, C, null, null, null, null, null, C, C, C, R, null],
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
  { note: 'Fonte: Prospetto Borse Lavoro, dati al 04/08/2026. Le posizioni nn. 6 e 10 fanno capo al medesimo beneficiario (ID 498810): la seconda costituisce ri-orientamento a seguito del mancato avvio della prima.' },
  { land: 'end' },

  { h: 2, n: '8.2', t: 'Stato di avanzamento' },
  { table: {
    cols: [0.27, 0.09, 0.64],
    head: ['Stato', 'N.', 'Percorsi'],
    rows: [
      ['Conclusi regolarmente', '3', 'VINCENT Gift (08/05), CAMARA Ousmane (29/06), TRAORE Baba (17/07)'],
      ['In corso alla data', '4', 'MARONG Ablie (fino al 17/08), MANNEH Abubacarr (fino al 25/09), KRUBALLY Sainey (fino al 27/09), HAWLADER Omar (fino al 02/11)'],
      ['Interrotti', '1', 'TALEEM Usama — interruzione l’11/06/2026'],
      ['Non avviati', '2', 'HAWLADER Omar e ISLAM Md Jahidul, entrambi presso il Comune'],
      ['**Totale**', '**10**', '']
    ],
    align: [null, C, null]
  } },
  { p: 'Il **tasso di avvio** si attesta all’**80,0%**, valore soddisfacente ma che sconta interamente il blocco delle due posizioni presso l’Ente pubblico. Il **tasso di interruzione**, calcolato sui soli percorsi avviati, è pari al **12,5%** (una posizione su otto), dato contenuto e in linea con quanto fisiologicamente atteso in misure di questa natura.' },
  { p: 'Va segnalato che **nessuno dei percorsi conclusi si è interrotto anticipatamente**: le tre posizioni giunte a termine hanno completato per intero le tre mensilità previste. L’unica interruzione registrata è intervenuta al terzo giorno dall’avvio, configurandosi come mancato ambientamento più che come abbandono di un percorso avviato. Tutte le posizioni presso soggetti privati sono state regolarmente avviate.' },

  { h: 2, n: '8.3', t: 'Analisi settoriale e territoriale' },
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
  { p: 'Sul piano territoriale, sei percorsi si svolgono nel comune di **Santa Elisabetta**, tre a **Raffadali** (circa 8 km) e uno a **Canicattì** (circa 30 km). L’apertura sul bacino di Canicattì, intervenuta nell’agosto 2026, rappresenta un ampliamento significativo del raggio di azione verso un contesto economico più ampio, ma introduce un fattore di attenzione sul piano della mobilità dei beneficiari (§ 11.9).' },

  { h: 2, n: '8.4', t: 'Quadro economico della linea di intervento' },
  { p: 'La linea dispone di una dotazione di **€ 30.000,00** da Piano Finanziario approvato. Il valore unitario standard della borsa è pari a **€ 1.500,00** per tre mensilità, corrispondenti a **€ 500,00 mensili**.' },
  { table: {
    cols: [0.46, 0.18, 0.13, 0.23],
    head: ['Voce', 'Importo €', 'Quota', 'Note'],
    rows: [
      ['Dotazione da Piano Finanziario', '30.000,00', '100,0%', 'Linea borse lavoro'],
      ['Importo impegnato', '10.500,00', '35,0%', '7 borse × € 1.500,00'],
      ['di cui erogato e documentato', '4.000,00', '13,3%', 'VINCENT 1.500 + CAMARA 1.500 + TRAORE 1.000'],
      ['di cui da erogare su impegni assunti', '6.500,00', '21,7%', 'Percorsi in corso e saldi'],
      ['**Residuo disponibile**', '**19.500,00**', '**65,0%**', 'Riprogrammabile su nuove attivazioni']
    ],
    align: [null, R, C, null],
    headAlign: [null, R, C, null]
  } },
  { p: 'Il residuo di **€ 19.500,00** corrisponde, a valori unitari invariati, a una capacità teorica di **tredici ulteriori percorsi trimestrali**. Poiché una borsa attivata entro settembre può completare le tre mensilità entro la chiusura dell’annualità, e poiché il servizio dispone di una platea di ventidue beneficiari già istruiti e privi di inserimento, esiste un margine concreto per un recupero sostanziale del livello di impegno.' },

  { h: 2, n: '8.5', t: 'Dall’orientamento all’inserimento: la struttura dell’imbuto' },
  { p: 'L’incrocio fra i due archivi consente di ricostruire la progressione dei beneficiari lungo il percorso di servizio, dalla presa in carico all’inserimento formalizzato.' },
  { table: {
    cols: [0.40, 0.13, 0.13, 0.34],
    head: ['Stadio del percorso', 'N.', 'Quota', 'Osservazioni'],
    rows: [
      ['Beneficiari in carico', '50', '100,0%', 'Platea complessiva del servizio'],
      ['con curriculum vitae', '43', '86,0%', 'Strumento a copertura più ampia'],
      ['con colloquio di orientamento', '41', '82,0%', 'Due posizioni presentano CV senza colloquio'],
      ['con determinazione delle competenze', '19', '38,0%', 'Attivazione selettiva — cfr. § 7.4'],
      ['con borsa lavoro attivata', '9', '18,0%', 'Dieci percorsi su nove beneficiari'],
      ['con tirocinio extracurriculare', '1', '2,0%', 'Transizione documentata al § 9.1'],
      ['con contratto di lavoro', '[[da int.]]', '[[da int.]]', 'Dato da acquisire — cfr. § 9.2']
    ],
    align: [null, C, C, null]
  } },
  { p: 'La progressione non è rigorosamente monotona: il curriculum registra una copertura superiore al colloquio per effetto di due posizioni istruite senza colloquio a monte, verosimile lacuna di registrazione segnalata al § 11.10.' },
  { p: 'La lettura complessiva restituisce un servizio con **presa in carico ampia e conversione contenuta**. L’82% dell’utenza è stato orientato, ma solo il 18% ha avuto accesso a un inserimento retribuito: **ventidue beneficiari dispongono di colloquio e curriculum senza alcun inserimento attivato**. Il collo di bottiglia non si colloca dunque nella fase istruttoria, che funziona, ma nella disponibilità di posti presso i soggetti ospitanti e nella capacità di scouting — attività alla quale la configurazione ordinaria del servizio destina una sola ora settimanale.' },
  { p: 'Ne discende un’indicazione operativa netta: nel periodo residuo dell’annualità il **rendimento marginale più elevato non si ottiene ampliando ulteriormente la presa in carico, ma convertendo in inserimenti la platea già istruita**. I ventidue beneficiari in attesa costituiscono una riserva immediatamente disponibile, che il residuo di € 19.500,00 è ampiamente capiente ad assorbire.' },

  /* ============ 9 ============ */
  { h: 1, n: '9', t: 'Tirocini, esiti occupazionali e formazione' },
  { h: 2, n: '9.1', t: 'Tirocinio extracurriculare attivato' },
  { table: {
    cols: [0.29, 0.71],
    head: null,
    rows: [
      ['Beneficiario', 'VINCENT Gift — ID 452329 — prot. 51 (nucleo familiare)'],
      ['Soggetto ospitante', 'Ditta MARLOT — Raffadali (AG) — settore ristorazione'],
      ['Soggetto promotore', 'APL UIL CST — Agenzia per il Lavoro'],
      ['Periodo', 'Dal 01/06/2026 al 30/11/2026 — sei mesi'],
      ['Percorso di orientamento', 'Colloquio 15/01/2026 (aggiornato 23/04/2026), curriculum 10/02/2026, determinazione delle competenze 04/06/2026'],
      ['Percorso pregresso', 'Borsa lavoro presso il medesimo soggetto ospitante, dal 09/02/2026 all’08/05/2026, regolarmente conclusa e saldata']
    ],
    boldFirst: true
  } },
  { p: 'Il caso documenta per intero la sequenza che il servizio assume come modello di riferimento. Il beneficiario è stato preso in carico con colloquio a gennaio, dotato di curriculum a febbraio, inserito in borsa lavoro da febbraio a maggio; conclusasi positivamente l’esperienza e consolidato il rapporto fiduciario con l’impresa, il percorso è proseguito con un tirocinio extracurriculare di durata doppia, promosso da un’Agenzia per il Lavoro accreditata. La determinazione delle competenze, effettuata a giugno, è intervenuta a valle dell’esperienza in azienda, a certificazione di quanto appreso.' },
  { p: 'La transizione produce tre effetti convergenti. In primo luogo determina un **alleggerimento della dotazione di progetto**, poiché l’indennità e le coperture assicurative gravano sui soggetti ospitante e promotore anziché sul budget SAI, liberando risorse per nuove attivazioni. In secondo luogo colloca il beneficiario in un **rapporto formalizzato secondo la disciplina ordinaria**, dotato di riconoscibilità esterna e di valore certificativo spendibile nel mercato del lavoro. In terzo luogo, la durata semestrale e la continuità presso la medesima impresa configurano una **prospettiva concreta di assunzione** al termine del tirocinio — esito che il Manuale operativo SAI indica come sbocco naturale della borsa lavoro.' },
  { p: 'Si raccomanda l’assunzione di questa sequenza quale **standard operativo del servizio**: per ciascuna borsa in scadenza la valutazione di trasformabilità in tirocinio dovrebbe essere avviata sistematicamente nei trenta giorni antecedenti la conclusione, in raccordo con il soggetto promotore. I candidati immediati sono TRAORE Baba e CAMARA Ousmane, entrambi con borsa conclusa e uscita dal progetto nel 2026.' },

  { h: 2, n: '9.2', t: 'Esiti occupazionali' },
  { p: 'Il Coordinamento di progetto segnala che nell’annualità 2026 **alcuni beneficiari hanno conseguito un rapporto di lavoro** al di fuori delle misure interne al progetto. Il dato costituisce l’esito di maggior rilievo dell’intero servizio, in quanto misura il conseguimento dell’obiettivo finale dell’accoglienza integrata — l’autonomia lavorativa — e non il semplice accesso a una misura di sostegno.' },
  { p: '[[Sezione da completare a cura del Servizio con l’elenco nominativo dei beneficiari assunti, la tipologia contrattuale, il soggetto datoriale, la decorrenza e l’eventuale percorso di orientamento che ha condotto all’assunzione.]] La tabella seguente ne fornisce lo schema:' },
  { table: {
    cols: [0.22, 0.20, 0.20, 0.14, 0.24],
    head: ['Beneficiario', 'Datore di lavoro', 'Tipologia contrattuale', 'Decorrenza', 'Percorso pregresso nel servizio'],
    rows: [
      ['[[da integrare]]', '[[da integrare]]', '[[da integrare]]', '[[da int.]]', '[[da integrare]]'],
      ['[[da integrare]]', '[[da integrare]]', '[[da integrare]]', '[[da int.]]', '[[da integrare]]']
    ],
    small: true
  } },
  { p: 'Una volta acquisito il dato sarà possibile calcolare il **tasso di inserimento occupazionale** — rapporto fra beneficiari assunti e beneficiari in carico — che costituisce l’indicatore di esito più rilevante ai fini della valutazione del servizio e che si raccomanda di inserire stabilmente nel set del § 12. Si raccomanda inoltre di estendere la rilevazione ai **beneficiari usciti dal progetto**, mediante un follow-up a sei e dodici mesi dall’uscita: è la sola modalità che consente di verificare la tenuta dell’autonomia raggiunta oltre la durata dell’accoglienza.' },

  { h: 2, n: '9.3', t: 'Percorsi in attivazione o riprogrammazione' },
  { ul: [
    '**HAWLADER Omar (prot. 639)** — a seguito del mancato avvio della borsa programmata presso il Comune, ri-orientato verso la Ditta Costa’s di Canicattì, con avvio del percorso il **3 agosto 2026** e conclusione prevista il 2 novembre 2026. Unico caso di riprogettazione già perfezionata.',
    '**ISLAM Md Jahidul (prot. 637)** — posizione presso il Comune non avviata; il beneficiario, preso in carico con colloquio e curriculum il 13-16 luglio 2026, è **in attesa di ricollocazione** su nuovo soggetto ospitante. Priorità operativa immediata del servizio.',
    '**TALEEM Usama (prot. 634)** — percorso interrotto l’11 giugno 2026; dispone di colloquio, curriculum e determinazione delle competenze. È **in uscita dal progetto il 7 agosto 2026**: la riprogrammazione va perfezionata entro tale data o accompagnata da un progetto di uscita.',
    '**Borse in scadenza** — le quattro borse in corso giungono a conclusione fra il 17 agosto e il 2 novembre 2026; per ciascuna è avviata la valutazione di trasformabilità in tirocinio secondo il modello del § 9.1.',
    '**Ventidue beneficiari istruiti e non inseriti** — dispongono di colloquio e curriculum e costituiscono la platea prioritaria per l’impiego del residuo di dotazione (§ 8.5).'
  ] },

  { h: 2, n: '9.4', t: 'Percorsi di formazione' },
  { p: 'Il Coordinamento di progetto segnala che **alcuni beneficiari hanno frequentato percorsi formativi** nel corso dell’annualità. L’attività non è tracciata nel registro di orientamento, che rileva le sole tre azioni strutturate. [[Sezione da completare a cura del Servizio con l’elenco dei corsi erogati, i beneficiari coinvolti, l’ente erogatore, il periodo e gli attestati conseguiti.]]' },
  { table: {
    cols: [0.26, 0.22, 0.20, 0.14, 0.18],
    head: ['Corso', 'Beneficiari', 'Ente erogatore', 'Periodo', 'Attestato'],
    rows: [
      ['[[da integrare]]', '[[da integrare]]', '[[da integrare]]', '[[da int.]]', '[[da int.]]'],
      ['[[da integrare]]', '[[da integrare]]', '[[da integrare]]', '[[da int.]]', '[[da int.]]']
    ],
    small: true
  } },
  { p: 'Nell’ambito della funzione consulenziale si segnalano di seguito le azioni formative che, alla luce dei profili presi in carico e dei settori di inserimento attivati, appaiono prioritarie per il periodo residuo dell’annualità:' },
  { table: {
    cols: [0.30, 0.45, 0.25],
    head: ['Azione formativa', 'Destinatari e motivazione', 'Priorità'],
    rows: [
      ['Formazione generale e specifica in materia di salute e sicurezza (D.Lgs. 81/2008)', 'Tutti i beneficiari inseriti; obbligo di legge presupposto all’avvio di ogni percorso, con specifica per settore di rischio', 'Alta — obbligo'],
      ['HACCP — igiene e sicurezza alimentare', 'Beneficiari inseriti in ristorazione e commercio alimentare (4 posizioni su 10); requisito richiesto dalle imprese del settore', 'Alta'],
      ['Alfabetizzazione L2 e certificazione livello A2 presso CPIA', 'Beneficiari con competenza linguistica insufficiente al contesto lavorativo; fattore di rischio per la tenuta dei percorsi (§ 7.9)', 'Alta'],
      ['Conseguimento della patente di guida cat. B', 'Beneficiari inseriti fuori dal comune di residenza; incide sull’autonomia negli spostamenti e sull’occupabilità', 'Media'],
      ['Patentino per la conduzione di carrelli elevatori', 'Beneficiari inseriti in edilizia, trasporti e logistica; qualifica a elevata spendibilità immediata', 'Media'],
      ['Percorsi professionalizzanti a valere sugli avvisi della Regione Siciliana', 'Beneficiari con progetto professionale definito; da programmare in funzione delle finestre di avviso', 'Da verificare']
    ],
    small: true
  } },
  { p: 'Si raccomanda in particolare la **verifica sistematica dell’assolvimento degli obblighi formativi in materia di sicurezza** per tutti i percorsi in corso, trattandosi di adempimento di legge la cui omissione espone il progetto e i soggetti ospitanti a responsabilità.' },

  /* ============ 10 ============ */
  { h: 1, n: '10', t: 'Implementazione della rete territoriale' },
  { p: 'La costruzione della rete costituisce la precondizione di ogni inserimento e rappresenta, in un contesto di piccoli comuni dell’entroterra agrigentino, l’attività a più elevata intensità relazionale fra quelle svolte dal servizio. Nell’annualità sono stati attivati **nove soggetti ospitanti** distribuiti su tre comuni e sei settori economici.' },
  { h: 3, t: '10.1  Soggetti ospitanti attivati' },
  { table: {
    cols: [0.25, 0.16, 0.16, 0.07, 0.36],
    head: ['Soggetto ospitante', 'Settore', 'Sede', 'Ben.', 'Stato della collaborazione'],
    rows: D.rete.map(r => [r.az, r.set, r.sede, r.ben, r.note]),
    align: [null, null, null, C, null],
    headAlign: [null, null, null, C, null]
  } },
  { h: 3, t: '10.2  Soggetti istituzionali e attori dei servizi per il lavoro' },
  { ul: [
    '**Comune di Santa Elisabetta** — Ente titolare del progetto e, nell’annualità, anche soggetto ospitante per due posizioni. Il doppio ruolo rende particolarmente rilevante il perfezionamento della collaborazione operativa richiamato al § 11.4.',
    '**APL UIL CST — Agenzia per il Lavoro** — soggetto promotore del tirocinio extracurriculare attivato (§ 9.1). Il raccordo con un’Agenzia accreditata rappresenta l’acquisizione di maggior valore strutturale dell’annualità, in quanto consente di accedere a strumenti di politica attiva ordinari, esterni al perimetro finanziario del progetto.',
    '**Centro per l’Impiego territorialmente competente** — per l’iscrizione dei beneficiari, il rilascio della dichiarazione di immediata disponibilità e l’accesso alle misure regionali (§ 7.6). [[Denominazione da integrare.]]',
    '**CPIA — Centro Provinciale per l’Istruzione degli Adulti** — per i percorsi di alfabetizzazione e per il conseguimento del titolo conclusivo del primo ciclo, prerequisito di accesso a numerosi percorsi formativi regionali (§ 9.4). [[Sede di riferimento da integrare.]]'
  ] },
  { h: 3, t: '10.3  Azioni di implementazione realizzate' },
  { ul: [
    '**Scouting diretto** presso le imprese del territorio, con presentazione dello strumento della borsa lavoro e degli obblighi in capo al soggetto ospitante;',
    '**estensione del bacino territoriale** oltre i confini comunali, con il coinvolgimento di realtà di Raffadali e, dall’agosto 2026, di Canicattì;',
    '**diversificazione settoriale**, con la copertura di sei settori economici distinti, che consente di proporre a un’utenza di cinquanta persone un ventaglio di mansioni coerente con profili eterogenei;',
    '**coinvolgimento di un’Agenzia per il Lavoro accreditata** in qualità di soggetto promotore, con conseguente accesso alla strumentazione ordinaria di politica attiva;',
    '**fidelizzazione dei soggetti ospitanti**, come attesta il caso della Ditta MARLOT, che ha proseguito la collaborazione oltre la conclusione della borsa lavoro mediante l’accoglimento del successivo tirocinio.'
  ] },
  { h: 3, t: '10.4  Considerazioni sulla rete' },
  { p: 'La rete presenta un buon grado di articolazione settoriale ma una **concentrazione da presidiare**: tre posizioni su dieci fanno capo a realtà riconducibili alla medesima denominazione imprenditoriale, operanti peraltro in settori diversi. Se da un lato ciò testimonia la solidità del rapporto costruito con un interlocutore disponibile, dall’altro espone il servizio a una dipendenza che è opportuno ridurre.' },
  { p: 'Il rapporto fra dimensione dell’utenza e dimensione della rete costituisce il vincolo strutturale del servizio: **cinquanta beneficiari a fronte di nove soggetti ospitanti** determinano una capacità di assorbimento largamente inferiore alla domanda potenziale. L’ampliamento della base di imprese è pertanto la leva a più elevato impatto sul tasso di inserimento, più ancora dell’incremento delle risorse finanziarie disponibili, che risultano ad oggi impegnate solo per un terzo.' },

  /* ============ 11 ============ */
  { h: 1, n: '11', t: 'Criticità rilevate e azioni correttive' },
  { p: 'L’analisi delle risultanze consente di isolare dieci aree di criticità, ciascuna di seguito ricondotta all’evidenza che la sostiene, alla lettura interpretativa e all’azione correttiva proposta. Le prime tre attengono alla presa in carico, le successive quattro agli inserimenti, le ultime tre alla sostenibilità del servizio e ai suoi strumenti.' },
  ...D.criticita.flatMap((c, i) => [
    { h: 3, t: `11.${i + 1}  ${c.t}` },
    { p: `**Evidenza.** ${c.e}`, tight: true },
    { p: `**Analisi.** ${c.a}`, tight: true },
    { p: `**Azione correttiva.** ${c.c}`, accent: true }
  ]),

  /* ============ 12 ============ */
  { h: 1, n: '12', t: 'Indicatori di monitoraggio' },
  { p: 'Si propone l’adozione stabile del set di indicatori di seguito riportato, con rilevazione trimestrale, quale strumento di autovalutazione del servizio e di documentazione dei risultati in sede di rendicontazione. Gli indicatori sono raggruppati per area.' },
  { table: {
    cols: [0.13, 0.35, 0.32, 0.20],
    head: ['Area', 'Indicatore', 'Modalità di calcolo', 'Valore alla data'],
    rows: D.indicatori.map(x => [x.g, x.i, x.f, x.v]),
    align: [null, null, null, C],
    headAlign: [null, null, null, C],
    small: true
  } },
  { note: 'Dati di orientamento al 27/07/2026; dati di inserimento e di budget al 04/08/2026.' },
  { p: 'Il quadro restituisce un servizio **efficace nella fase istruttoria** — copertura dell’82% sul colloquio, dell’86% sul curriculum, 128 azioni registrate, rete di nove soggetti ospitanti — e con una **capacità dimostrata di produrre transizioni qualificate**, come attesta il tirocinio formalizzato. I margini di miglioramento si concentrano su tre fronti: la **tempestività** della presa in carico, la **conversione** fra istruttoria e inserimento, e l’**impiego della dotazione finanziaria**, ferma al 35%.' },
  { p: 'Si raccomanda l’integrazione del set con il **tasso di inserimento occupazionale** (§ 9.2) e con indicatori di volume sulle attività oggi non tracciate: accompagnamenti amministrativi, partecipanti alle attività di gruppo, candidature inviate.' },

  /* ============ 13 ============ */
  { h: 1, n: '13', t: 'Programmazione agosto – dicembre 2026' },
  { h: 2, n: '13.1', t: 'Cronoprogramma delle azioni' },
  { table: {
    cols: [0.46, 0.22, 0.20, 0.12],
    head: ['Azione', 'Soggetto responsabile', 'Termine', 'Priorità'],
    rows: D.cronoprogramma.map(x => [x.a, x.s, x.t, x.p]),
    align: [null, null, null, C],
    headAlign: [null, null, null, C],
    small: true
  } },
  { p: 'Le tre azioni classificate come urgenti hanno termini compresi entro il mese di agosto e riguardano posizioni individuali con uscita imminente dal progetto o decisioni organizzative a effetto immediato. Il loro slittamento comporterebbe la perdita definitiva della finestra utile di intervento.' },

  { h: 2, n: '13.2', t: 'Revisione dei sistemi di rilevazione' },
  { p: 'I due prospetti in uso assolvono la funzione di registro ma non consentono né il calcolo diretto degli indicatori né la riconciliazione contabile, e non tracciano una parte rilevante delle attività erogate. Si propone la seguente struttura, articolata su un archivio unico a chiave identificativa condivisa:' },
  { table: {
    cols: [0.24, 0.76],
    head: ['Blocco', 'Colonne'],
    rows: [
      ['Anagrafica', 'ID beneficiario (chiave unica condivisa fra gli archivi) · Numero di protocollo · Nominativo · Unità abitativa · Data di ingresso · Data di fine progetto'],
      ['Orientamento', 'Colloquio: data prima erogazione e date aggiornamenti · Curriculum: idem · Determinazione competenze: idem · Operatore che ha erogato'],
      ['Adempimenti', 'Codice fiscale · SPID · DID · Iscrizione CPI · Conto corrente · Titolo di soggiorno e scadenza'],
      ['Attività non individuali', 'Partecipazione ad attività di gruppo (data e modulo) · Candidature inviate (data, impresa, esito) · Interventi di mediazione linguistica'],
      ['Formazione', 'Corso · Ente erogatore · Periodo · Attestato conseguito'],
      ['Inserimento', 'Tipo di misura (borsa lavoro / tirocinio / contratto) · Soggetto ospitante · P. IVA · Sede · Settore · Data inizio · Data fine prevista · Data fine effettiva'],
      ['Economia', 'Importo impegnato · Importo erogato · Residuo da erogare · Estremi del mandato di pagamento'],
      ['Stato ed esito', 'Stato del percorso · Motivo di interruzione · Esito finale · Follow-up a 6 e 12 mesi dall’uscita'],
      ['Documentazione', 'Convenzione · Progetto formativo · Copertura assicurativa · Formazione sicurezza assolta · Note']
    ],
    boldFirst: true,
    small: true
  } },
  { p: 'L’adozione consentirebbe di generare automaticamente gli indicatori del § 12, di disporre in ogni momento del quadro di impegno e di erogazione, e soprattutto di **valorizzare in rendicontazione la quota di attività oggi non tracciata**, che il § 2 segnala come strutturalmente sottostimata.' },

  /* ============ 14 ============ */
  { h: 1, n: '14', t: 'Conclusioni' },
  { p: 'Il servizio di orientamento e accompagnamento all’inserimento lavorativo del progetto SAI PROG-684-PR di Santa Elisabetta si presenta, alla data della presente relazione, come un dispositivo **strutturato, metodologicamente coerente e operativamente efficace nella fase istruttoria**, che opera tuttavia in condizioni di sotto-dimensionamento rispetto all’utenza in carico.' },
  { p: 'Sul piano dei risultati, l’annualità registra **cinquanta beneficiari in carico**, **128 azioni di orientamento documentate** — colloqui, curriculum, determinazioni delle competenze — con coperture dell’82% e dell’86% sui due strumenti propedeutici, **dieci percorsi di borsa lavoro** progettati per nove beneficiari, **nove soggetti ospitanti** attivati su tre comuni e sei settori, **un tirocinio extracurriculare formalizzato** presso un’Agenzia per il Lavoro accreditata e alcuni rapporti di lavoro conseguiti, la cui puntuale rilevazione è raccomandata al § 9.2. Il servizio non si limita ad allocare misure: accompagna transizioni e mantiene le posizioni in aggiornamento nel tempo, come documentano i venticinque aggiornamenti registrati.' },
  { p: 'Il vincolo dominante è quello **delle risorse professionali disponibili**. Cinque ore settimanali per cinquanta beneficiari equivalgono a 5,2 ore annue per persona, insufficienti a presidiare simultaneamente i nuovi ingressi, l’aggiornamento delle posizioni in carico, lo scouting aziendale e l’amministrazione degli inserimenti. Da questo vincolo discendono direttamente le tre criticità di maggior peso: i tempi di presa in carico (mediana di 51 giorni, 29% entro il mese), le sette posizioni non ancora raggiunte e la copertura contenuta della determinazione delle competenze. L’ingresso del collaboratore per quindici ore settimanali ha prodotto un effetto immediato e misurabile — sedici delle diciassette azioni di luglio sono successive al 7 del mese — che costituisce l’argomento tecnico più solido a sostegno della **prosecuzione dell’incarico oltre il 30 settembre 2026**.' },
  { p: 'Il secondo nodo è la **conversione fra istruttoria e inserimento**. Ventidue beneficiari dispongono di colloquio e curriculum senza alcun inserimento attivato, a fronte di un residuo di dotazione di € 19.500,00 e di una rete di soli nove soggetti ospitanti. Il collo di bottiglia non è finanziario né istruttorio, ma risiede nella capacità di scouting, alla quale la configurazione ordinaria destina un’ora settimanale. Nel periodo residuo il rendimento marginale più elevato si ottiene convertendo in inserimenti la platea già istruita e ampliando la base di imprese ospitanti, non estendendo ulteriormente la presa in carico.' },
  { p: 'Si raccomanda infine, quale indirizzo strategico per il periodo residuo e per la programmazione della successiva annualità, l’assunzione della **sequenza colloquio → curriculum → determinazione delle competenze → borsa lavoro → tirocinio extracurriculare → rapporto di lavoro** quale standard operativo esplicito del servizio, con verifica sistematica del passaggio di stadio per ciascun beneficiario. Il caso documentato al § 9.1 dimostra che la sequenza funziona; si tratta di renderla la regola anziché l’eccezione. È il modo in cui una misura di accoglienza produce autonomia anziché dipendenza.' },

  { signature: ['Santa Elisabetta, 4 agosto 2026', 'Il Consulente all’orientamento al lavoro'] },

  { box: {
    kind: 'info',
    title: 'Allegati alla presente relazione',
    lines: [
      '**All. 1** — Resoconto orientamento aggiornato al 27/07/2026 (documento gestionale di origine).',
      '**All. 2** — Prospetto Borse Lavoro S. Elisabetta 2026 aggiornato al 04/08/2026 (documento gestionale di origine).',
      '**All. 3** — Elenco dei beneficiari assunti con contratto di lavoro nel 2026. [[Da allegare a cura del Servizio.]]',
      '**All. 4** — Elenco dei percorsi formativi erogati e attestati conseguiti. [[Da allegare a cura del Servizio.]]',
      '**All. 5** — Convenzioni sottoscritte con i soggetti ospitanti e coperture assicurative. [[Da allegare a cura del Servizio.]]',
      '**All. 6** — Progetto formativo e convenzione del tirocinio extracurriculare VINCENT Gift / Ditta MARLOT. [[Da allegare a cura del Servizio.]]',
      '**All. 7** — Attestazioni della formazione in materia di salute e sicurezza. [[Da allegare a cura del Servizio.]]'
    ]
  } }
];

module.exports = { meta, blocks };
