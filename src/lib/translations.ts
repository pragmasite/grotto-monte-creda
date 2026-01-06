export type Language = "it" | "de";

export const translations = {
  it: {
    nav: {
      services: "Servizi",
      gallery: "Galleria",
      hours: "Orari",
      contact: "Contatto",
      call: "Chiama",
      profession: "RISTORANTE TRADIZIONALE",
      about: "Chi siamo",
    },
    hero: {
      badge: "CUCINA TICINESE AUTENTICA",
      title1: "Sapori Tradizionali",
      title2: "nel Cuore del Ticino",
      description: "Immerso nel verde ai piedi dei Denti della Vecchia, il Grotto Monte Creda offre piatti fatti in casa con prodotti locali.",
      sendEmail: "Invia email",
      location: "Villa Luganese, Svizzera",
      callNow: "Chiama ora",
      viewServices: "Scopri di più",
    },
    about: {
      label: "Chi siamo",
      title1: "Tradizione e Qualità",
      title2: "dal Cuore del Ticino",
      p1: "Il Grotto Monte Creda si trova a Villa Luganese, circondato dal verde ai piedi dei Denti della Vecchia. Offriamo cucina tradizionale ticinese con piatti fatti in casa e prodotti locali di prima qualità.",
      p2: "Con un grande parcheggio, una terrazza panoramica, una sala banchetti per eventi e un'area giochi per i più piccoli, siamo il luogo ideale per ogni occasione. La prenotazione è gradita.",
      stat1Value: "15+",
      stat1: "Anni di esperienza",
      stat2Value: "4.9",
      stat2: "Valutazione clienti",
      stat3Value: "100%",
      stat3: "Prodotti locali",
      features: [
        { title: "Terrazza Panoramica", description: "Vista mozzafiato sulle montagne ticinesi" },
        { title: "Sala Banchetti", description: "Spazio per eventi e celebrazioni" },
        { title: "Area Giochi", description: "Divertimento per i più piccoli" },
        { title: "Grande Parcheggio", description: "Comodo accesso per tutti gli ospiti" },
      ],
    },
    services: {
      label: "Le nostre specialità",
      title: "Cucina Tradizionale Ticinese",
      description: "Scopri le nostre specialità stagionali preparate con passione e ingredienti locali selezionati.",
      items: [
        { title: "Grigliata", description: "Carni alla griglia preparate con maestria, perfette per le serate estive" },
        { title: "Funghi Freschi", description: "Specialità stagionali con funghi locali durante l'estate" },
        { title: "Selvaggina", description: "Piatti di cacciagione tradizionali nella stagione invernale" },
        { title: "Sella di Capriolo", description: "Specialità invernale preparata secondo ricetta tradizionale" },
        { title: "Piatti Ticinesi", description: "Cucina tipica ticinese con ricette fatte in casa" },
        { title: "Prodotti Locali", description: "Solo ingredienti freschi e di qualità dal territorio" },
      ],
    },
    gallery: {
      label: "Le nostre foto",
      title: "Galleria",
      description: "Scopri l'atmosfera unica del Grotto Monte Creda e le nostre specialità culinarie.",
      images: [
        "Terrazza panoramica",
        "Grotto esterno",
        "Sala interna",
        "Ambiente rustico",
        "Cantina salumi",
        "Grigliate fresche",
        "Selezione vini",
      ],
    },
    hours: {
      label: "Disponibilità",
      title: "Orari di Apertura",
      header: "Orari di apertura",
      today: "Oggi",
      closed: "Chiuso",
      open: "Aperto",
      days: ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"],
    },
    contact: {
      label: "Contatto",
      title1: "Vieni a Trovarci",
      title2: "al Grotto Monte Creda",
      description: "Siamo aperti da mercoledì a domenica. La prenotazione è gradita per garantirti il miglior servizio possibile.",
      phone: "Telefono",
      email: "Email",
      address: "Indirizzo",
      cta: "Prenota il tuo tavolo",
      callNow: "Chiama ora",
      location: "Posizione",
    },
    footer: {
      tagline: "Cucina Tradizionale Ticinese",
      description: "Il Grotto Monte Creda vi accoglie in un'atmosfera autentica ticinese, circondata dalla natura, con specialità locali e una calorosa ospitalità.",
      navigation: "Navigazione",
      about: "Chi siamo",
      copyright: "Tutti i diritti riservati.",
    },
    disclaimer: {
      title: "Anteprima del sito",
      items: [
        "Questo sito web è una bozza di anteprima",
        "Non è indicizzato su Google",
        "Potrebbe contenere errori o imprecisioni",
      ],
      button: "Ho capito",
    },
  },
  de: {
    nav: {
      services: "Dienstleistungen",
      gallery: "Galerie",
      hours: "Öffnungszeiten",
      contact: "Kontakt",
      call: "Anrufen",
      profession: "TRADITIONELLES RESTAURANT",
      about: "Über uns",
    },
    hero: {
      badge: "AUTHENTISCHE TESSINER KÜCHE",
      title1: "Traditionelle Aromen",
      title2: "im Herzen des Tessins",
      description: "Umgeben von Grün am Fuße der Denti della Vecchia bietet das Grotto Monte Creda hausgemachte Gerichte mit lokalen Produkten.",
      sendEmail: "E-Mail senden",
      location: "Villa Luganese, Schweiz",
      callNow: "Jetzt anrufen",
      viewServices: "Mehr erfahren",
    },
    about: {
      label: "Über uns",
      title1: "Tradition und Qualität",
      title2: "aus dem Herzen des Tessins",
      p1: "Das Grotto Monte Creda befindet sich in Villa Luganese, umgeben von Grün am Fuße der Denti della Vecchia. Wir bieten traditionelle Tessiner Küche mit hausgemachten Gerichten und erstklassigen lokalen Produkten.",
      p2: "Mit einem großen Parkplatz, einer Panoramaterrasse, einem Bankettsaal für Veranstaltungen und einem Spielbereich für die Kleinsten sind wir der ideale Ort für jeden Anlass. Reservierung erwünscht.",
      stat1Value: "15+",
      stat1: "Jahre Erfahrung",
      stat2Value: "4.9",
      stat2: "Kundenbewertung",
      stat3Value: "100%",
      stat3: "Lokale Produkte",
      features: [
        { title: "Panoramaterrasse", description: "Atemberaubende Aussicht auf die Tessiner Berge" },
        { title: "Bankettsaal", description: "Raum für Veranstaltungen und Feiern" },
        { title: "Spielbereich", description: "Spaß für die Kleinsten" },
        { title: "Großer Parkplatz", description: "Bequemer Zugang für alle Gäste" },
      ],
    },
    services: {
      label: "Unsere Spezialitäten",
      title: "Traditionelle Tessiner Küche",
      description: "Entdecken Sie unsere saisonalen Spezialitäten, zubereitet mit Leidenschaft und ausgewählten lokalen Zutaten.",
      items: [
        { title: "Grill", description: "Meisterhaft gegrilltes Fleisch, perfekt für Sommerabende" },
        { title: "Frische Pilze", description: "Saisonale Spezialitäten mit lokalen Pilzen im Sommer" },
        { title: "Wildfleisch", description: "Traditionelle Wildgerichte in der Wintersaison" },
        { title: "Rehsattel", description: "Winterspezialität nach traditionellem Rezept zubereitet" },
        { title: "Tessiner Gerichte", description: "Typische Tessiner Küche mit hausgemachten Rezepten" },
        { title: "Lokale Produkte", description: "Nur frische und hochwertige Zutaten aus der Region" },
      ],
    },
    gallery: {
      label: "Unsere Fotos",
      title: "Galerie",
      description: "Entdecken Sie die einzigartige Atmosphäre des Grotto Monte Creda und unsere kulinarischen Spezialitäten.",
      images: [
        "Panoramaterrasse",
        "Außenbereich Grotto",
        "Innenraum",
        "Rustikales Ambiente",
        "Wurstkeller",
        "Frische Grilladen",
        "Weinauswahl",
      ],
    },
    hours: {
      label: "Verfügbarkeit",
      title: "Öffnungszeiten",
      header: "Öffnungszeiten",
      today: "Heute",
      closed: "Geschlossen",
      open: "Geöffnet",
      days: ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"],
    },
    contact: {
      label: "Kontakt",
      title1: "Besuchen Sie uns",
      title2: "im Grotto Monte Creda",
      description: "Wir sind von Mittwoch bis Sonntag geöffnet. Eine Reservierung ist erwünscht, um Ihnen den besten Service zu garantieren.",
      phone: "Telefon",
      email: "E-Mail",
      address: "Adresse",
      cta: "Reservieren Sie Ihren Tisch",
      callNow: "Jetzt anrufen",
      location: "Standort",
    },
    footer: {
      tagline: "Traditionelle Tessiner Küche",
      description: "Das Grotto Monte Creda empfängt Sie in authentischer Tessiner Atmosphäre, umgeben von Natur, mit lokalen Spezialitäten und herzlicher Gastfreundschaft.",
      navigation: "Navigation",
      about: "Über uns",
      copyright: "Alle Rechte vorbehalten.",
    },
    disclaimer: {
      title: "Website-Vorschau",
      items: [
        "Diese Website ist eine Entwurfsvorschau",
        "Sie ist nicht bei Google indexiert",
        "Sie kann Fehler oder Ungenauigkeiten enthalten",
      ],
      button: "Verstanden",
    },
  },
};

export interface Translations {
  nav: { services: string; gallery: string; hours: string; contact: string; call: string; profession: string; about: string };
  hero: { badge: string; title1: string; title2: string; description: string; sendEmail: string; location: string; callNow: string; viewServices: string };
  about: { label: string; title1: string; title2: string; p1: string; p2: string; stat1Value: string; stat1: string; stat2Value: string; stat2: string; stat3Value: string; stat3: string; features: Array<{ title: string; description: string }> };
  services: { label: string; title: string; description: string; items: Array<{ title: string; description: string }> };
  gallery: { label: string; title: string; description: string; images: string[] };
  hours: { label: string; title: string; header: string; today: string; closed: string; open: string; days: string[] };
  contact: { label: string; title1: string; title2: string; description: string; phone: string; email: string; address: string; cta: string; callNow: string; location: string };
  footer: { tagline: string; description: string; navigation: string; about: string; copyright: string };
  disclaimer: { title: string; items: string[]; button: string };
}
