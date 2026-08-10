/* Bozza del capitolo "Focus territoriale" da inserire nella Mappatura SAI Agrigento.
   Numerazione dei paragrafi da adattare a quella del documento di destinazione. */

const C = 'center', R = 'right';

const meta = {
  bare: true,
  toc: [],
  runningHead: 'Mappatura SAI Agrigento — Focus territoriale: Santa Elisabetta e area di riferimento — bozza',
  footer: 'Bozza per inserimento — Focus territoriale Santa Elisabetta'
};

const blocks = [

  { h: 1, n: 'X', t: 'Focus territoriale: Santa Elisabetta e area di riferimento' },
  { box: {
    kind: 'warn',
    title: 'Nota per l’inserimento',
    lines: [
      'Il presente testo è una **bozza destinata al capitolo «Focus territoriale»** della Mappatura SAI Agrigento. La numerazione dei paragrafi (X.1, X.2 …) va sostituita con quella del documento di destinazione.',
      'Le aziende elencate al § X.3 sono le **sole** di cui si dispone di riscontro documentale diretto, in quanto hanno ospitato un beneficiario del progetto. Non costituiscono un censimento del tessuto imprenditoriale locale: i §§ X.1 e X.2 ne descrivono la struttura su base statistica, senza nominare imprese non verificate.',
      'I dati sul numero di imprese registrate provengono da fonte secondaria e vanno **verificati presso la Camera di Commercio** prima della trasmissione formale del documento.'
    ]
  } },

  /* ---------- X.1 ---------- */
  { h: 2, n: 'X.1', t: 'Il contesto demografico e territoriale' },
  { p: '**Santa Elisabetta** è un comune di **2.208 abitanti** su una superficie di **16,17 km²**, con una densità di 137 abitanti per km² e un’altitudine di 421 metri sul livello del mare. È il **comune più piccolo per superficie territoriale** del libero consorzio comunale di Agrigento. Il centro sorge a breve distanza da Raffadali, dal quale storicamente dipende: fu fondato nel 1620 per iniziativa del signore di Raffadali e popolato in larga parte da famiglie provenienti da quel comune.' },
  { p: 'La dimensione demografica è l’elemento che condiziona in misura maggiore l’attività del servizio di orientamento al lavoro. Un bacino di poco più di duemila residenti non è in grado di esprimere una domanda di lavoro capace di assorbire il numero di beneficiari in accoglienza: **l’area di riferimento operativa del servizio non coincide con il territorio comunale** e si estende necessariamente ai centri limitrofi e ai due poli maggiori dell’area, il capoluogo e Canicattì.' },
  { table: {
    cols: [0.28, 0.16, 0.16, 0.40],
    head: ['Comune', 'Abitanti', 'Superficie', 'Rilievo per il servizio'],
    rows: [
      ['**Santa Elisabetta**', '2.208', '16,17 km²', 'Sede del progetto; bacino di prossimità'],
      ['Raffadali', '11.769', '22,30 km²', 'Primo bacino di riferimento — circa 4 km'],
      ['Agrigento', '55.118', '243,57 km²', 'Capoluogo; servizi per il lavoro e CPI'],
      ['Canicattì', '34.249', '91,86 km²', 'Secondo polo economico dell’area'],
      ['Aragona', '8.669', '74,77 km²', 'Bacino intermedio verso il capoluogo'],
      ['Sant’Angelo Muxaro', '1.119', '64,52 km²', 'Comune confinante — circa 5 km'],
      ['Joppolo Giancaxio', '1.064', '19,14 km²', 'Comune confinante — circa 5 km']
    ],
    align: [null, C, C, null],
    headAlign: [null, C, C, null]
  } },
  { note: 'Popolazione e superficie: stime ISTAT al 1° gennaio 2026. Le distanze sono espresse in linea d’aria e vanno intese come indicative: la percorrenza stradale effettiva è superiore.' },
  { p: 'La gerarchia dei bacini è netta. **Raffadali**, a pochi chilometri e con una popolazione cinque volte superiore, costituisce il primo mercato accessibile e di fatto l’estensione naturale del territorio comunale. **Agrigento** e **Canicattì**, con una popolazione rispettivamente venticinque e quindici volte quella di Santa Elisabetta, rappresentano i poli in grado di offrire varietà di mansioni e presenza di imprese strutturate, al prezzo di un onere di mobilità significativamente maggiore. I comuni confinanti minori — Sant’Angelo Muxaro e Joppolo Giancaxio, entrambi sotto i 1.200 abitanti — non aggiungono capacità di assorbimento apprezzabile.' },

  /* ---------- X.2 ---------- */
  { h: 2, n: 'X.2', t: 'Il tessuto imprenditoriale' },
  { p: 'Il numero di imprese registrate restituisce con chiarezza lo squilibrio fra il comune sede del progetto e il primo bacino limitrofo: **163 imprese a Santa Elisabetta a fronte di 842 a Raffadali**, oltre cinque volte tanto. Rapportato alla popolazione, il dato indica una densità imprenditoriale sostanzialmente allineata fra i due comuni; in valore assoluto, tuttavia, è la sola scala di Raffadali a rendere praticabile una attività di scouting continuativa.' },
  { p: 'Sul piano della composizione settoriale, l’**agricoltura** costituisce l’attività prevalente dell’economia agrigentina, assorbendo circa il **28% delle attività produttive** provinciali. A Santa Elisabetta le produzioni caratteristiche sono **pistacchi, mandorle e cereali**. Il settore primario, e con esso l’indotto della trasformazione e della commercializzazione dei prodotti agricoli, rappresenta pertanto il comparto a più elevato potenziale di assorbimento dell’area, ad oggi non presidiato dalla rete del progetto.' },
  { p: 'Il tessuto è composto in prevalenza da **imprese di piccolissima dimensione**, spesso a conduzione familiare e prive di una funzione strutturata di gestione del personale. Questa caratteristica ha due conseguenze dirette sull’attività di orientamento. La prima è che l’attivazione di una borsa lavoro o di un tirocinio dipende dal rapporto fiduciario costruito con il titolare, e non da una procedura di selezione: **il lavoro di rete è quindi relazionale e non replicabile per via amministrativa**. La seconda è che ogni singola impresa può ospitare, di norma, un solo beneficiario per volta, il che rende il numero di soggetti ospitanti in rete — e non la dotazione finanziaria disponibile — il vero fattore limitante degli inserimenti.' },
  { note: 'I dati sul numero di imprese registrate e sulla composizione settoriale provinciale provengono da fonti secondarie e vanno verificati presso la Camera di Commercio competente prima della trasmissione formale del documento.' },

  /* ---------- X.3 ---------- */
  { h: 2, n: 'X.3', t: 'Le aziende della rete attivata' },
  { p: 'Il progetto ha attivato nell’annualità 2026 **nove soggetti ospitanti**, distribuiti su tre comuni e sei settori economici. Si tratta delle imprese e degli enti che hanno effettivamente accolto un beneficiario nell’ambito di un percorso di borsa lavoro o di tirocinio, e che costituiscono pertanto la rete territoriale operativa del servizio.' },
  { table: {
    cols: [0.24, 0.16, 0.16, 0.09, 0.35],
    head: ['Soggetto ospitante', 'Settore', 'Sede', 'Ben.', 'Stato della collaborazione'],
    rows: [
      ['**Butera Alfonso**',          'Artigianato',   'S. Elisabetta', '1', 'Percorso concluso'],
      ['**Ditta Galvano**',           'Artigianato',   'S. Elisabetta', '1', 'Percorso in corso'],
      ['**Bar Ibis**',                'Commercio',     'S. Elisabetta', '1', 'Percorso in corso'],
      ['**Fragapane Bibite**',        'Commercio',     'S. Elisabetta', '1', 'Percorso interrotto'],
      ['**Comune di S. Elisabetta**', 'Ente pubblico', 'S. Elisabetta', '2', 'Convenzione da perfezionare — nessun avvio'],
      ['**Ditta MARLOT**',            'Ristorazione',  'Raffadali',     '1', 'Borsa conclusa + tirocinio extracurriculare in corso'],
      ['**Fragapane**',               'Edilizia',      'Raffadali',     '1', 'Percorso concluso'],
      ['**Fragapane Trasporti**',     'Trasporti',     'Raffadali',     '1', 'Percorso in corso'],
      ['**Ditta Costa’s**',           'Ristorazione',  'Canicattì',     '1', 'Nuovo inserimento — apertura su nuovo bacino']
    ],
    align: [null, null, null, C, null],
    headAlign: [null, null, null, C, null],
    small: true
  } },
  { note: 'Fonte: Prospetto Borse Lavoro del progetto SAI PROG-684-PR, dati al 4 agosto 2026. La colonna «Ben.» indica il numero di beneficiari ospitati nell’annualità.' },
  { p: 'La distribuzione territoriale della rete riflette la gerarchia dei bacini descritta al § X.1: **cinque soggetti a Santa Elisabetta**, **tre a Raffadali** e **uno a Canicattì**. Quest’ultimo, attivato nell’agosto 2026, rappresenta la prima apertura del progetto sul secondo polo economico dell’area e costituisce un precedente operativo di rilievo per l’ampliamento della rete.' },
  { p: 'Sul piano settoriale i nove soggetti coprono **artigianato** e **commercio** con due posizioni ciascuno, **ristorazione** con due, **ente pubblico** con due, **edilizia** e **trasporti** con una. Va segnalato che tre delle posizioni fanno capo a realtà riconducibili alla **medesima denominazione imprenditoriale**, operanti peraltro in settori distinti: il dato testimonia la solidità del rapporto costruito con un interlocutore disponibile, ma espone il progetto a una dipendenza da un numero ristretto di soggetti.' },
  { p: 'Il **Comune di Santa Elisabetta** merita una considerazione specifica, in quanto unico soggetto pubblico della rete e al tempo stesso Ente titolare del progetto. Entrambe le posizioni programmate presso di esso non sono state avviate, mentre tutte le posizioni presso soggetti privati lo sono state regolarmente: la criticità è concentrata sul versante della collaborazione istituzionale e richiede un intervento mirato.' },

  /* ---------- X.4 ---------- */
  { h: 2, n: 'X.4', t: 'Lettura per il servizio di orientamento al lavoro' },
  { p: 'Il confronto fra la dimensione dell’utenza e la dimensione della rete restituisce il vincolo strutturale dell’intervento: **cinquanta beneficiari in carico a fronte di nove soggetti ospitanti attivati**. Poiché le imprese dell’area, per dimensione media, possono ospitare di norma un solo beneficiario per volta, la capacità di assorbimento della rete risulta largamente inferiore alla domanda potenziale.' },
  { p: 'Ne discende che **l’ampliamento della base di imprese ospitanti costituisce la leva a più elevato impatto sul tasso di inserimento**, più ancora dell’incremento delle risorse finanziarie disponibili. Le tre direttrici di sviluppo che il quadro territoriale suggerisce sono le seguenti.' },
  { table: {
    cols: [0.26, 0.42, 0.32],
    head: ['Direttrice', 'Motivazione', 'Azione proposta'],
    rows: [
      ['Consolidamento su Raffadali',
       'Primo bacino accessibile, con oltre cinquecento imprese in più rispetto al comune sede e onere di mobilità contenuto',
       'Scouting sistematico; obiettivo di tre nuovi soggetti ospitanti'],
      ['Apertura al settore agricolo e all’indotto',
       'Comparto prevalente dell’economia provinciale, oggi del tutto assente dalla rete; produzioni locali di pistacchi, mandorle e cereali',
       'Contatto con aziende agricole e cooperative di trasformazione; verifica della stagionalità'],
      ['Presidio del polo di Canicattì',
       'Secondo polo economico dell’area, con presenza di imprese strutturate; già aperto con un primo inserimento',
       'Consolidamento del rapporto avviato; verifica preventiva della sostenibilità degli spostamenti']
    ],
    small: true
  } },
  { p: 'Il tema della **mobilità** attraversa tutte e tre le direttrici e va affrontato in via preliminare. Quattro dei dieci percorsi attivati nell’annualità hanno sede fuori dal comune di residenza del beneficiario. Su un’indennità mensile di € 500,00, il costo e i tempi del trasporto pubblico extraurbano incidono in misura non trascurabile e costituiscono, al tempo stesso, un fattore di rischio per la tenuta dei percorsi più distanti e un limite oggettivo al bacino di imprese effettivamente proponibili. La verifica della disponibilità di abbonamenti agevolati e la valutazione di una voce di rimborso spese di trasporto nella riprogrammazione del piano finanziario sono pertanto condizioni abilitanti dell’ampliamento della rete, e non misure accessorie.' }
];

module.exports = { meta, blocks };
