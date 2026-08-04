// Dati e contenuti della relazione — fonte: Prospetto_Borse_Lavoro_S.ELISABETTA_2026.xlsx
module.exports = {
  borse: [
    { n: 1,  id: "452329", ben: "VINCENT Gift",        ua: "Via Bixio 2",   az: "Ditta MARLOT",           sede: "Raffadali",      set: "Ristorazione",  ini: "09/02/2026", fin: "08/05/2026", mesi: "3", imp: "1.500,00", stato: "Conclusa — saldata" },
    { n: 2,  id: "490485", ben: "TRAORE Baba",         ua: "Corso Umberto", az: "Butera Alfonso",         sede: "S. Elisabetta",  set: "Artigianato",   ini: "20/04/2026", fin: "17/07/2026", mesi: "3", imp: "1.500,00", stato: "Conclusa — erogate 2 mensilità (€ 1.000)" },
    { n: 3,  id: "483276", ben: "CAMARA Ousmane",      ua: "Centro",        az: "Fragapane",              sede: "Raffadali",      set: "Edilizia",      ini: "30/03/2026", fin: "29/06/2026", mesi: "3", imp: "1.500,00", stato: "Conclusa — pagata" },
    { n: 4,  id: "453270", ben: "MARONG Abile",        ua: "n.d.",          az: "Fragapane Trasporti",    sede: "Raffadali",      set: "Trasporti",     ini: "18/05/2026", fin: "17/08/2026", mesi: "3", imp: "1.500,00", stato: "In corso" },
    { n: 5,  id: "497414", ben: "TALEEM Usama",        ua: "Corso Umberto", az: "Fragapane Bibite",       sede: "S. Elisabetta",  set: "Commercio",     ini: "08/06/2026", fin: "07/09/2026", mesi: "3", imp: "—",        stato: "Interrotta l'11/06/2026" },
    { n: 6,  id: "498810", ben: "HAWLADER Omar",       ua: "Via Galilei",   az: "Comune di S. Elisabetta",sede: "S. Elisabetta",  set: "Ente pubblico", ini: "08/06/2026", fin: "07/09/2026", mesi: "3", imp: "—",        stato: "Non avviata — beneficiario ri-orientato (cfr. n. 10)" },
    { n: 7,  id: "497822", ben: "ISLAM Md Jahiddul",   ua: "Via Galilei",   az: "Comune di S. Elisabetta",sede: "S. Elisabetta",  set: "Ente pubblico", ini: "08/06/2026", fin: "07/09/2026", mesi: "3", imp: "—",        stato: "Non avviata — da ricollocare" },
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

  criticita: [
    {
      t: "Mancato avvio delle borse presso l'Ente pubblico",
      e: "2 posizioni su 10 (HAWLADER Omar, ISLAM Md Jahiddul) risultano «non avviate» a fronte di una data di inizio programmata all'08/06/2026.",
      a: "Il dato segnala un blocco a monte dell'inserimento, riconducibile al mancato perfezionamento della convenzione con l'Ente ospitante o all'indisponibilità della sede nel periodo programmato. Trattandosi dell'unico soggetto pubblico della rete, l'impatto è concentrato e non compensato.",
      c: "Interlocuzione formale con il Comune per la definizione di un protocollo d'intesa con tempi certi di attivazione; in subordine, riallocazione immediata delle due posizioni su imprese private già in rete."
    },
    {
      t: "Interruzione precoce del percorso",
      e: "La borsa di TALEEM Usama, avviata l'08/06/2026, risulta interrotta l'11/06/2026 (durata effettiva 3 giorni).",
      a: "Una interruzione a distanza di tre giorni indica un disallineamento non emerso in fase di matching: aspettative sulla mansione, competenza linguistica insufficiente al contesto di vendita, o barriera logistica.",
      c: "Introduzione di un colloquio tripartito pre-inserimento (beneficiario / tutor aziendale / orientatore) e di una settimana di prova osservativa; colloquio di uscita strutturato per capitalizzare l'esperienza negativa."
    },
    {
      t: "Sotto-impegno della linea di budget",
      e: "Al 04/08/2026 risulta impegnato il 35,0% della dotazione (€ 10.500,00 su € 30.000,00) ed erogato il 13,3% (€ 4.000,00).",
      a: "Le attivazioni si sono concentrate nel secondo trimestre; il mancato avvio di due posizioni e l'interruzione di una terza hanno liberato capacità non ancora riprogrammata. Restano cinque mesi di annualità.",
      c: "Piano di impegno accelerato agosto-dicembre con obiettivo minimo di 6-8 nuove attivazioni, così da portare l'impegno complessivo oltre il 70% della dotazione."
    },
    {
      t: "Concentrazione della rete su pochi soggetti ospitanti",
      e: "Tre posizioni su dieci fanno capo a realtà riconducibili alla medesima denominazione (Fragapane: edilizia, trasporti, bibite).",
      a: "La concentrazione espone il servizio al rischio di dipendenza da un numero ristretto di interlocutori e riduce la varietà dell'offerta di mansioni proponibile ai beneficiari.",
      c: "Campagna di scouting con obiettivo di cinque nuove imprese ospitanti entro dicembre 2026, con priorità ai settori agricoltura, manutenzione del verde e logistica."
    },
    {
      t: "Onere della mobilità a carico dei beneficiari",
      e: "Quattro percorsi su dieci hanno sede fuori dal comune di residenza (Raffadali, circa 8 km; Canicattì, circa 30 km).",
      a: "Il costo e i tempi del trasporto pubblico extraurbano incidono in misura rilevante sull'importo mensile della borsa (€ 500,00) e costituiscono un fattore di rischio per la tenuta dei percorsi più distanti.",
      c: "Verifica della disponibilità di abbonamenti agevolati; valutazione dell'inserimento di una voce di rimborso spese di trasporto nella prossima riprogrammazione del piano finanziario."
    },
    {
      t: "Qualità e struttura del dato di monitoraggio",
      e: "Nel prospetto la colonna «Interruzione» è utilizzata per registrare lo stato dei pagamenti; la denominazione dell'impresa ospitante compare in un caso nella colonna «Unità abitativa»; ricorrono grafie difformi del medesimo soggetto ospitante; un record è privo dell'unità abitativa.",
      a: "La sovrapposizione fra dati di stato del percorso e dati contabili rende il prospetto non direttamente utilizzabile ai fini della rendicontazione e del monitoraggio degli indicatori.",
      c: "Adozione del format revisionato proposto al § 12.2, con separazione fra stato del percorso, motivo di interruzione e movimentazione economica."
    },
    {
      t: "Dimensionamento del monte ore",
      e: "Il servizio è presidiato da 5 ore settimanali di orientamento a fronte di 9 beneficiari presi in carico e 10 percorsi gestiti.",
      a: "Il rapporto ore/beneficiari lascia margini contenuti per il tutoraggio in itinere e per lo scouting. Il picco di attivazioni di giugno-agosto è stato correttamente presidiato mediante l'ingresso della figura di collaborazione.",
      c: "Valutazione della prosecuzione dell'incarico di collaborazione oltre il 30/09/2026, in corrispondenza della fase di riprogrammazione e di attivazione del residuo di budget."
    }
  ],

  indicatori: [
    { i: "Beneficiari presi in carico dal servizio",       f: "n. beneficiari distinti",                    v: "9" },
    { i: "Percorsi di inserimento progettati",             f: "n. borse lavoro programmate",                v: "10" },
    { i: "Percorsi effettivamente avviati",                f: "n. borse con avvio registrato",              v: "8" },
    { i: "Tasso di avvio",                                 f: "avviate / programmate",                      v: "80,0%" },
    { i: "Percorsi conclusi regolarmente",                 f: "n. borse giunte a termine",                  v: "3" },
    { i: "Percorsi in corso al 04/08/2026",                f: "n. borse attive",                            v: "4" },
    { i: "Tasso di interruzione",                          f: "interrotte / avviate",                       v: "12,5%" },
    { i: "Soggetti ospitanti attivati",                    f: "n. realtà in rete",                          v: "9" },
    { i: "Comuni interessati",                             f: "n. sedi comunali di svolgimento",            v: "3" },
    { i: "Tirocini extracurriculari formalizzati",         f: "n. tirocini attivati",                       v: "1" },
    { i: "Tasso di transizione borsa → tirocinio",         f: "tirocini / beneficiari presi in carico",     v: "11,1%" },
    { i: "Budget impegnato",                               f: "impegnato / dotazione",                      v: "35,0%" },
    { i: "Budget erogato",                                 f: "erogato / dotazione",                        v: "13,3%" }
  ],

  cronoprogramma: [
    { a: "Ricollocazione di ISLAM Md Jahiddul su nuovo soggetto ospitante",                          s: "Orientatrice + collaboratore", t: "entro il 15/09/2026" },
    { a: "Riprogrammazione della posizione di TALEEM Usama previo colloquio di ri-orientamento",       s: "Orientatrice",                 t: "entro il 30/09/2026" },
    { a: "Interlocuzione con il Comune e perfezionamento della convenzione per l'ospitalità",          s: "Orientatrice + Coordinamento", t: "entro il 30/09/2026" },
    { a: "Monitoraggio conclusione borse in scadenza (17/08, 25/09, 27/09, 02/11)",                    s: "Orientatrice",                 t: "in itinere" },
    { a: "Valutazione di trasformazione in tirocinio extracurriculare delle borse in scadenza",        s: "Orientatrice + APL",           t: "30 gg prima di ciascuna scadenza" },
    { a: "Campagna di scouting per cinque nuovi soggetti ospitanti",                                   s: "Orientatrice + collaboratore", t: "entro il 31/12/2026" },
    { a: "Attivazione di nuove borse a valere sul residuo di € 19.500,00 (obiettivo 6-8 percorsi)",     s: "Orientatrice",                 t: "entro il 31/12/2026" },
    { a: "Definizione del piano formativo individuale (sicurezza, HACCP, alfabetizzazione L2)",         s: "Orientatrice + Équipe",        t: "entro il 30/09/2026" },
    { a: "Adozione del format revisionato del prospetto di monitoraggio",                               s: "Orientatrice",                 t: "entro il 15/09/2026" },
    { a: "Verifica di prosecuzione dell'incarico di collaborazione oltre il 30/09/2026",                s: "Coordinamento di progetto",    t: "entro il 15/09/2026" }
  ]
};
