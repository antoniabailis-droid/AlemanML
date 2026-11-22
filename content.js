
/*
  ALEMAN ML
  Contenido de aprendizaje
  25 bloques · 250 tarjetas
  Idioma de reconocimiento y pronunciación: de-DE
*/

const ALEMAN_BLOCKS = [

{
  id: 1,
  title: "Números cardinales",
  type: "vocabulary",
  cards: [
    {es:"Cero, uno, dos",de:"Null, eins, zwei"},
    {es:"Tres, cuatro, cinco",de:"Drei, vier, fünf"},
    {es:"Seis, siete, ocho",de:"Sechs, sieben, acht"},
    {es:"Nueve, diez, once",de:"Neun, zehn, elf"},
    {es:"Doce, trece, catorce",de:"Zwölf, dreizehn, vierzehn"},
    {es:"Quince, dieciséis, diecisiete",de:"Fünfzehn, sechzehn, siebzehn"},
    {es:"Dieciocho, diecinueve, veinte",de:"Achtzehn, neunzehn, zwanzig"},
    {es:"Treinta, cuarenta, cincuenta",de:"Dreißig, vierzig, fünfzig"},
    {es:"Sesenta, setenta, ochenta",de:"Sechzig, siebzig, achtzig"},
    {es:"Noventa, cien, mil",de:"Neunzig, hundert, tausend"}
  ]
},

{
  id: 2,
  title: "Números ordinales",
  type: "vocabulary",
  cards: [
    {es:"Primero",de:"Erste"},
    {es:"Segundo",de:"Zweite"},
    {es:"Tercero",de:"Dritte"},
    {es:"Cuarto",de:"Vierte"},
    {es:"Quinto",de:"Fünfte"},
    {es:"Sexto",de:"Sechste"},
    {es:"Séptimo",de:"Siebte"},
    {es:"Octavo",de:"Achte"},
    {es:"Noveno",de:"Neunte"},
    {es:"Décimo",de:"Zehnte"}
  ]
},

{
  id: 3,
  title: "Verbos básicos",
  type: "verb",
  cards: [
    {es:"Yo trabajo",inf:"arbeiten",de:"Ich arbeite"},
    {es:"Yo vivo",inf:"wohnen",de:"Ich wohne"},
    {es:"Yo tengo",inf:"haben",de:"Ich habe"},
    {es:"Yo quiero",inf:"möchten",de:"Ich möchte"},
    {es:"Yo necesito",inf:"brauchen",de:"Ich brauche"},
    {es:"Yo puedo",inf:"können",de:"Ich kann"},
    {es:"Yo tengo que",inf:"müssen",de:"Ich muss"},
    {es:"Yo voy",inf:"gehen",de:"Ich gehe"},
    {es:"Yo vengo",inf:"kommen",de:"Ich komme"},
    {es:"Yo sé",inf:"wissen",de:"Ich weiß"}
  ]
},

{
  id: 4,
  title: "Primera evolución de frases",
  type: "phrase",
  cards: [
    {es:"Hoy trabajo",de:"Ich arbeite heute"},
    {es:"Vivo en Alemania",de:"Ich wohne in Deutschland"},
    {es:"Tengo un paquete",de:"Ich habe ein Paket"},
    {es:"Quiero ir a casa",de:"Ich möchte nach Hause gehen"},
    {es:"Necesito ayuda",de:"Ich brauche Hilfe"},
    {es:"Puedo hablar alemán",de:"Ich kann Deutsch sprechen"},
    {es:"Tengo que trabajar",de:"Ich muss arbeiten"},
    {es:"Voy a casa",de:"Ich gehe nach Hause"},
    {es:"Vengo enseguida",de:"Ich komme gleich"},
    {es:"No lo sé",de:"Ich weiß es nicht"}
  ]
},

{
  id: 5,
  title: "Direcciones, posiciones y opuestos",
  type: "vocabulary",
  cards: [
    {es:"Arriba – Abajo",de:"Oben – Unten"},
    {es:"Derecha – Izquierda",de:"Rechts – Links"},
    {es:"Delante – Detrás",de:"Vorne – Hinten"},
    {es:"Dentro – Fuera",de:"Drinnen – Draußen"},
    {es:"Cerca – Lejos",de:"Nah – Weit"},
    {es:"Subir – Bajar",de:"Hochgehen – Runtergehen"},
    {es:"Entrar – Salir",de:"Reingehen – Rausgehen"},
    {es:"Abrir – Cerrar",de:"Öffnen – Schließen"},
    {es:"Encima – Debajo",de:"Darüber – Darunter"},
    {es:"Rápido – Lento",de:"Schnell – Langsam"}
  ]
},

{
  id: 6,
  title: "Movimiento y acciones",
  type: "verb",
  cards: [
    {es:"Subir",inf:"hochgehen",de:"Ich gehe hoch"},
    {es:"Bajar",inf:"runtergehen",de:"Ich gehe runter"},
    {es:"Entrar",inf:"reingehen",de:"Ich gehe rein"},
    {es:"Salir",inf:"rausgehen",de:"Ich gehe raus"},
    {es:"Girar",inf:"abbiegen",de:"Ich biege ab"},
    {es:"Seguir / continuar",inf:"weitergehen",de:"Ich gehe weiter"},
    {es:"Abrir",inf:"öffnen",de:"Ich öffne"},
    {es:"Cerrar",inf:"schließen",de:"Ich schließe"},
    {es:"Buscar",inf:"suchen",de:"Ich suche"},
    {es:"Encontrar",inf:"finden",de:"Ich finde"}
  ]
},

{
  id: 7,
  title: "Direcciones y movimiento",
  type: "phrase",
  cards: [
    {es:"Suba, por favor",de:"Gehen Sie bitte hoch"},
    {es:"Baje, por favor",de:"Gehen Sie bitte runter"},
    {es:"Entre, por favor",de:"Kommen Sie bitte rein"},
    {es:"Salga, por favor",de:"Gehen Sie bitte raus"},
    {es:"Gire a la derecha",de:"Biegen Sie rechts ab"},
    {es:"Gire a la izquierda",de:"Biegen Sie links ab"},
    {es:"Siga recto",de:"Gehen Sie geradeaus"},
    {es:"¿Está cerca o lejos?",de:"Ist es nah oder weit?"},
    {es:"Está muy cerca",de:"Es ist ganz nah"},
    {es:"Está bastante lejos",de:"Es ist ziemlich weit"}
  ],
  dialogue: [
    ["¿Por dónde tengo que ir?","Wo muss ich langgehen?"],
    ["Por aquí, por favor","Hier entlang, bitte"],
    ["¿A la derecha?","Nach rechts?"],
    ["Sí, exactamente","Ja, genau"],
    ["No, a la izquierda","Nein, nach links"],
    ["¿Tengo que subir?","Muss ich hochgehen?"],
    ["Sí, suba","Ja, gehen Sie hoch"],
    ["No, baje","Nein, gehen Sie runter"]
  ]
},

{
  id: 8,
  title: "Lugares y edificios",
  type: "vocabulary",
  cards: [
    {es:"La entrada",de:"Der Eingang"},
    {es:"La salida",de:"Der Ausgang"},
    {es:"La calle",de:"Die Straße"},
    {es:"La esquina",de:"Die Ecke"},
    {es:"El edificio",de:"Das Gebäude"},
    {es:"La puerta",de:"Die Tür"},
    {es:"La escalera",de:"Die Treppe"},
    {es:"El ascensor",de:"Der Aufzug"},
    {es:"La planta baja",de:"Das Erdgeschoss"},
    {es:"El segundo piso",de:"Der zweite Stock"}
  ]
},

{
  id: 9,
  title: "Ubicación y orientación",
  type: "verb",
  cards: [
    {es:"Estar / encontrarse",inf:"sich befinden",de:"Ich befinde mich hier"},
    {es:"Estar de pie",inf:"stehen",de:"Ich stehe hier"},
    {es:"Estar tumbado",inf:"liegen",de:"Es liegt hier"},
    {es:"Poner / colocar",inf:"stellen",de:"Ich stelle es hierhin"},
    {es:"Dejar / colocar",inf:"legen",de:"Ich lege es hierhin"},
    {es:"Vivir",inf:"wohnen",de:"Ich wohne hier"},
    {es:"Esperar",inf:"warten",de:"Ich warte hier"},
    {es:"Mostrar",inf:"zeigen",de:"Ich zeige es Ihnen"},
    {es:"Preguntar",inf:"fragen",de:"Ich frage Sie"},
    {es:"Encontrarse / reunirse",inf:"sich treffen",de:"Ich treffe mich hier"}
  ]
},

{
  id: 10,
  title: "Lugares y ubicaciones",
  type: "phrase",
  cards: [
    {es:"¿Dónde está la entrada?",de:"Wo ist der Eingang?"},
    {es:"La entrada está allí",de:"Der Eingang ist dort"},
    {es:"¿Dónde está el ascensor?",de:"Wo ist der Aufzug?"},
    {es:"El ascensor está a la derecha",de:"Der Aufzug ist rechts"},
    {es:"¿En qué piso vive usted?",de:"In welchem Stock wohnen Sie?"},
    {es:"Vivo en el segundo piso",de:"Ich wohne im zweiten Stock"},
    {es:"¿Dónde está la escalera?",de:"Wo ist die Treppe?"},
    {es:"La escalera está a la izquierda",de:"Die Treppe ist links"},
    {es:"¿Dónde está el edificio?",de:"Wo befindet sich das Gebäude?"},
    {es:"El edificio está en la esquina",de:"Das Gebäude ist an der Ecke"}
  ],
  dialogue: [
    ["¿Dónde está el ascensor?","Wo ist der Aufzug?"],
    ["El ascensor está a la derecha","Der Aufzug ist rechts"],
    ["¿En qué piso vive usted?","In welchem Stock wohnen Sie?"],
    ["Vivo en el segundo piso","Ich wohne im zweiten Stock"],
    ["¿Dónde está la escalera?","Wo ist die Treppe?"],
    ["La escalera está a la izquierda","Die Treppe ist links"]
  ]
},

{
  id: 11,
  title: "Objetos y lugares de entrega",
  type: "vocabulary",
  cards: [
    {es:"El paquete",de:"Das Paket"},
    {es:"El buzón",de:"Der Briefkasten"},
    {es:"El garaje",de:"Die Garage"},
    {es:"El jardín",de:"Der Garten"},
    {es:"La llave",de:"Der Schlüssel"},
    {es:"La ventana",de:"Das Fenster"},
    {es:"El timbre",de:"Die Klingel"},
    {es:"El pasillo",de:"Der Flur"},
    {es:"El bote de basura",de:"Die Mülltonne"},
    {es:"La puerta de entrada",de:"Die Haustür"}
  ]
},

{
  id: 12,
  title: "Entrega y colocación",
  type: "verb",
  cards: [
    {es:"Entregar",inf:"zustellen",de:"Ich stelle das Paket zu"},
    {es:"Recibir",inf:"annehmen",de:"Ich nehme das Paket an"},
    {es:"Dejar / colocar",inf:"abstellen",de:"Ich stelle das Paket ab"},
    {es:"Poner encima",inf:"legen",de:"Ich lege es darauf"},
    {es:"Poner detrás",inf:"stellen",de:"Ich stelle es dahinter"},
    {es:"Llevar",inf:"bringen",de:"Ich bringe das Paket"},
    {es:"Recoger",inf:"abholen",de:"Ich hole das Paket ab"},
    {es:"Firmar",inf:"unterschreiben",de:"Ich unterschreibe hier"},
    {es:"Esperar",inf:"warten",de:"Ich warte auf Sie"},
    {es:"Devolver",inf:"zurückgeben",de:"Ich gebe das Paket zurück"}
  ]
},

{
  id: 13,
  title: "Entregas y dónde dejar paquetes",
  type: "phrase",
  cards: [
    {es:"Tengo un paquete para usted",de:"Ich habe ein Paket für Sie"},
    {es:"¿Puede recibir el paquete?",de:"Können Sie das Paket annehmen?"},
    {es:"¿Dónde puedo dejar el paquete?",de:"Wo kann ich das Paket abstellen?"},
    {es:"Puede dejarlo aquí",de:"Sie können es hier abstellen"},
    {es:"Déjelo sobre el bote de basura",de:"Stellen Sie es auf die Mülltonne"},
    {es:"Déjelo detrás del bote de basura",de:"Stellen Sie es hinter die Mülltonne"},
    {es:"Déjelo junto a la puerta",de:"Stellen Sie es neben die Tür"},
    {es:"¿Puedo dejarlo en el garaje?",de:"Kann ich es in der Garage abstellen?"},
    {es:"Sí, puede dejarlo allí",de:"Ja, Sie können es dort abstellen"},
    {es:"No, déjelo dentro",de:"Nein, stellen Sie es hinein"}
  ],
  dialogue: [
    ["¿Puede recibir el paquete?","Können Sie das Paket annehmen?"],
    ["Sí, naturalmente","Ja, natürlich"],
    ["¿Dónde puedo dejar el paquete?","Wo kann ich das Paket abstellen?"],
    ["Detrás del bote de basura, por favor","Hinter der Mülltonne, bitte"],
    ["¿Lo dejo aquí?","Soll ich es hier abstellen?"],
    ["Sí, exactamente","Ja, genau"]
  ]
},

{
  id: 14,
  title: "Personas y comunicación",
  type: "vocabulary",
  cards: [
    {es:"El vecino / La vecina",de:"Der Nachbar / Die Nachbarin"},
    {es:"El cliente / La clienta",de:"Der Kunde / Die Kundin"},
    {es:"El compañero / La compañera",de:"Der Kollege / Die Kollegin"},
    {es:"El hombre / La mujer",de:"Der Mann / Die Frau"},
    {es:"La persona",de:"Die Person"},
    {es:"El niño / La niña",de:"Das Kind"},
    {es:"La familia",de:"Die Familie"},
    {es:"El nombre",de:"Der Name"},
    {es:"El idioma / La lengua",de:"Die Sprache"},
    {es:"La conversación",de:"Das Gespräch"}
  ]
},

{
  id: 15,
  title: "Frases automáticas",
  type: "phrase",
  cards: [
    {es:"¡Cuidado, que es pesado!",de:"Vorsicht, das ist schwer!"},
    {es:"¿Le ayudo?",de:"Soll ich Ihnen helfen?"},
    {es:"No he entendido",de:"Ich habe das nicht verstanden"},
    {es:"Ahora sí, he entendido",de:"Jetzt habe ich es verstanden"},
    {es:"Un momento, por favor",de:"Einen Moment, bitte"},
    {es:"Sí, claro",de:"Ja, natürlich"},
    {es:"Aquí tiene su paquete",de:"Hier ist Ihr Paket"},
    {es:"Ya voy",de:"Ich komme gleich"},
    {es:"Espere aquí, por favor",de:"Warten Sie bitte hier"},
    {es:"¿Puede ayudarme?",de:"Können Sie mir helfen?"}
  ]
},

{
  id: 16,
  title: "Entrega y comunicación con vecinos",
  type: "phrase",
  cards: [
    {es:"Buenos días, tengo un paquete para usted",de:"Guten Morgen, ich habe ein Paket für Sie"},
    {es:"¿Está usted en casa?",de:"Sind Sie zu Hause?"},
    {es:"Sí, estoy en casa",de:"Ja, ich bin zu Hause"},
    {es:"¿Puede abrirme la puerta?",de:"Können Sie mir die Tür öffnen?"},
    {es:"Un momento, ya voy",de:"Einen Moment, ich komme gleich"},
    {es:"Aquí tiene su paquete",de:"Hier ist Ihr Paket"},
    {es:"Muchas gracias",de:"Vielen Dank"},
    {es:"De nada",de:"Gern geschehen"},
    {es:"¿Puedo dejarlo aquí?",de:"Kann ich es hier abstellen?"},
    {es:"Sí, déjelo ahí, por favor",de:"Ja, stellen Sie es bitte dort ab"}
  ],
  dialogue: [
    ["Buenos días, tengo un paquete para usted","Guten Morgen, ich habe ein Paket für Sie"],
    ["Un momento, ya voy","Einen Moment, ich komme gleich"],
    ["Aquí tiene su paquete","Hier ist Ihr Paket"],
    ["Muchas gracias","Vielen Dank"],
    ["De nada","Gern geschehen"]
  ]
},

{
  id: 17,
  title: "Tiempo y horarios",
  type: "vocabulary",
  cards: [
    {es:"Hoy",de:"Heute"},
    {es:"Mañana",de:"Morgen"},
    {es:"Ayer",de:"Gestern"},
    {es:"Ahora",de:"Jetzt"},
    {es:"Después / Más tarde",de:"Später"},
    {es:"Pronto",de:"Bald"},
    {es:"Temprano",de:"Früh"},
    {es:"Tarde",de:"Spät"},
    {es:"La hora",de:"Die Uhrzeit"},
    {es:"Enseguida / Dentro de poco",de:"Gleich"}
  ]
},

{
  id: 18,
  title: "Tiempo y organización",
  type: "verb",
  cards: [
    {es:"Llegar",inf:"ankommen",de:"Ich komme gleich an"},
    {es:"Salir / Partir",inf:"losfahren",de:"Ich fahre jetzt los"},
    {es:"Volver",inf:"zurückkommen",de:"Ich komme später zurück"},
    {es:"Esperar",inf:"warten",de:"Ich warte einen Moment"},
    {es:"Empezar",inf:"anfangen",de:"Ich fange jetzt an"},
    {es:"Terminar",inf:"aufhören",de:"Ich höre jetzt auf"},
    {es:"Necesitar tiempo",inf:"brauchen",de:"Ich brauche noch etwas Zeit"},
    {es:"Tener tiempo",inf:"Zeit haben",de:"Ich habe jetzt Zeit"},
    {es:"Apresurarse",inf:"sich beeilen",de:"Ich muss mich beeilen"},
    {es:"Retrasarse",inf:"sich verspäten",de:"Ich verspäte mich heute"}
  ]
},

{
  id: 19,
  title: "Horarios, retrasos y organización",
  type: "phrase",
  cards: [
    {es:"Llego enseguida",de:"Ich komme gleich"},
    {es:"Estoy llegando",de:"Ich bin gleich da"},
    {es:"Hoy voy con retraso",de:"Ich verspäte mich heute"},
    {es:"Necesito un poco más de tiempo",de:"Ich brauche noch etwas Zeit"},
    {es:"¿Puede esperar un momento?",de:"Können Sie einen Moment warten?"},
    {es:"Vuelvo más tarde",de:"Ich komme später zurück"},
    {es:"Ya he terminado",de:"Ich bin fertig"},
    {es:"¿A qué hora vuelve?",de:"Um wie viel Uhr kommen Sie zurück?"},
    {es:"¿Puedo venir mañana?",de:"Kann ich morgen kommen?"},
    {es:"Nos vemos más tarde",de:"Bis später"}
  ]
},

{
  id: 20,
  title: "Problemas e incidencias de entrega",
  type: "vocabulary",
  cards: [
    {es:"El problema",de:"Das Problem"},
    {es:"El error",de:"Der Fehler"},
    {es:"El daño / Desperfecto",de:"Der Schaden"},
    {es:"Roto / Estropeado",de:"Kaputt"},
    {es:"Perdido / Extraviado",de:"Verloren"},
    {es:"La dirección",de:"Die Adresse"},
    {es:"El número de casa",de:"Die Hausnummer"},
    {es:"La firma",de:"Die Unterschrift"},
    {es:"El vecino / La vecina",de:"Der Nachbar / Die Nachbarin"},
    {es:"La devolución",de:"Die Rücksendung"}
  ]
},

{
  id: 21,
  title: "Verbos e incidencias",
  type: "verb",
  cards: [
    {es:"Buscar",inf:"suchen",de:"Ich suche die Adresse"},
    {es:"Encontrar",inf:"finden",de:"Ich finde die Adresse nicht"},
    {es:"No tengo ese paquete",inf:"haben",de:"Ich habe dieses Paket nicht"},
    {es:"El paquete está dañado",inf:"sein",de:"Das Paket ist beschädigt"},
    {es:"Comprobar",inf:"überprüfen",de:"Ich überprüfe die Adresse"},
    {es:"Firmar",inf:"unterschreiben",de:"Sie müssen hier unterschreiben"},
    {es:"Mostrar",inf:"zeigen",de:"Ich zeige Ihnen das Problem"},
    {es:"Avisar / Informar",inf:"melden",de:"Ich melde das Problem"},
    {es:"Devolver",inf:"zurückgeben",de:"Ich gebe das Paket zurück"},
    {es:"Necesitar",inf:"brauchen",de:"Ich brauche Ihre Hilfe"}
  ]
},

{
  id: 22,
  title: "Incidencias y soluciones",
  type: "phrase",
  cards: [
    {es:"No tengo ese paquete",de:"Ich habe dieses Paket nicht"},
    {es:"El paquete está dañado",de:"Das Paket ist beschädigt"},
    {es:"Esta no es la dirección correcta",de:"Das ist nicht die richtige Adresse"},
    {es:"No encuentro el número de casa",de:"Ich finde die Hausnummer nicht"},
    {es:"No hay nadie en casa",de:"Niemand ist zu Hause"},
    {es:"¿Puede firmar aquí?",de:"Können Sie hier unterschreiben?"},
    {es:"Necesito su ayuda",de:"Ich brauche Ihre Hilfe"},
    {es:"¿Dónde puedo dejar el paquete?",de:"Wo kann ich das Paket abstellen?"},
    {es:"Tengo que comunicar el problema",de:"Ich muss das Problem melden"},
    {es:"¿Qué podemos hacer?",de:"Was können wir machen?"}
  ],
  dialogue: [
    ["Esta no es la dirección correcta","Das ist nicht die richtige Adresse"],
    ["Oh, un momento, por favor","Oh, einen Moment, bitte"],
    ["¿Qué podemos hacer?","Was können wir machen?"],
    ["Le ayudo","Ich helfe Ihnen"]
  ]
},

{
  id: 23,
  title: "Vida diaria y comunicación",
  type: "vocabulary",
  cards: [
    {es:"El supermercado",de:"Der Supermarkt"},
    {es:"La tienda",de:"Das Geschäft"},
    {es:"El dinero",de:"Das Geld"},
    {es:"El precio",de:"Der Preis"},
    {es:"El recibo / Comprobante",de:"Der Kassenbon"},
    {es:"El billete de transporte",de:"Die Fahrkarte"},
    {es:"La parada",de:"Die Haltestelle"},
    {es:"La estación",de:"Der Bahnhof"},
    {es:"La cita",de:"Der Termin"},
    {es:"El documento",de:"Das Dokument"}
  ]
},

{
  id: 24,
  title: "Verbos y autonomía diaria",
  type: "verb",
  cards: [
    {es:"Comprar",inf:"kaufen",de:"Ich möchte das kaufen"},
    {es:"Pagar",inf:"bezahlen",de:"Ich möchte bezahlen"},
    {es:"Costar",inf:"kosten",de:"Wie viel kostet das?"},
    {es:"Buscar",inf:"suchen",de:"Ich suche einen Supermarkt"},
    {es:"Encontrar",inf:"finden",de:"Ich finde den Bahnhof nicht"},
    {es:"Preguntar dónde está la parada de autobús",inf:"fragen",de:"Wo ist die Bushaltestelle?"},
    {es:"Llegar",inf:"ankommen",de:"Wann komme ich an?"},
    {es:"Reservar una cita",inf:"vereinbaren",de:"Ich möchte einen Termin vereinbaren"},
    {es:"Necesitar",inf:"brauchen",de:"Ich brauche dieses Dokument"},
    {es:"Mostrar",inf:"zeigen",de:"Können Sie mir das zeigen"}
  ]
},

{
  id: 25,
  title: "Conversaciones y autonomía diaria",
  type: "phrase",
  cards: [
    {es:"Disculpe, ¿dónde está la parada de autobús?",de:"Entschuldigung, wo ist die Bushaltestelle?"},
    {es:"La parada está a la derecha, junto a la esquina",de:"Die Haltestelle ist rechts, neben der Ecke"},
    {es:"¿Este autobús va a la estación?",de:"Fährt dieser Bus zum Bahnhof?"},
    {es:"Sí, tiene que bajar en la próxima parada",de:"Ja, Sie müssen an der nächsten Haltestelle aussteigen"},
    {es:"¿Cuánto cuesta esto?",de:"Wie viel kostet das?"},
    {es:"Quiero comprar esto y pagar con tarjeta",de:"Ich möchte das kaufen und mit Karte bezahlen"},
    {es:"Buenos días, tengo una cita",de:"Guten Morgen, ich habe einen Termin"},
    {es:"¿A qué hora es su cita?",de:"Um wie viel Uhr ist Ihr Termin?"},
    {es:"Disculpe, no he entendido. ¿Puede repetirlo?",de:"Entschuldigung, ich habe das nicht verstanden. Können Sie das wiederholen?"},
    {es:"Muchas gracias por su ayuda. Que tenga un buen día",de:"Vielen Dank für Ihre Hilfe. Einen schönen Tag noch!"}
  ],
  conversations: {
    bus: [
      ["Disculpe, ¿este autobús va a la estación?","Entschuldigung, fährt dieser Bus zum Bahnhof?"],
      ["Sí, tiene que bajar en la próxima parada","Ja, Sie müssen an der nächsten Haltestelle aussteigen"],
      ["¡Muchas gracias!","Vielen Dank!"],
      ["De nada","Gern geschehen"]
    ],
    shop: [
      ["Buenos días. ¿Cuánto cuesta esto?","Guten Tag. Wie viel kostet das?"],
      ["Cuesta diez euros","Das kostet zehn Euro"],
      ["Quiero comprarlo","Ich möchte das kaufen"],
      ["¿Desea pagar con tarjeta?","Möchten Sie mit Karte bezahlen?"],
      ["Sí, por favor","Ja, bitte"]
    ],
    neighbor: [
      ["Buenos días, tengo un paquete para usted","Guten Morgen, ich habe ein Paket für Sie"],
      ["Un momento, ya voy","Einen Moment, ich komme gleich"],
      ["Aquí tiene su paquete","Hier ist Ihr Paket"],
      ["Muchas gracias","Vielen Dank"],
      ["De nada. Que tenga un buen día","Gern geschehen. Einen schönen Tag noch!"]
    ]
  }
}

];

/* Acceso global para el motor de la aplicación */
window.ALEMAN_BLOCKS = ALEMAN_BLOCKS;

/* Comprobación básica del contenido */
console.info(
  "Aleman ML: contenido cargado",
  ALEMAN_BLOCKS.length,
  "bloques",
  ALEMAN_BLOCKS.reduce((total, block) => total + block.cards.length, 0),
  "tarjetas"
);