let arregloRegiones=[];

arregloRegiones["XV"]={
    nombre :"Arica y Parinacota",
    numeroRomano:"XV",
    descripcion:"La Región de Arica y Parinacota (XV) se ubica en el extremo norte del país, a una distancia aproximada de 2.000 kilómetros de la capital de Chile. Posee una superficie de 16.873,30 kilómetros cuadrados, equivalentes al 2,2% del territorio nacional. Según el Censo 2017 la población es de 226.068 habitantes y una densidad de 13,4 habitantes por kilómetro cuadrado. Limita al norte con la República del Perú, al sur con la región de Tarapacá, al este con la República de Bolivia y al oeste con el Océano Pacífico, abarcando desde los 17° 30' hasta los 19° 13' de latitud sur aproximadamente",
    atractivoTur:{
        nombre:"Morro de Arica",
        nombre:"Parque Nacional Lauca",
        nombre:"Museo Arqueologico San Miguel de Azapa"
    },
    imagen:"../img/arica.jpg"
}
arregloRegiones["I"]={
    nombre: "Tarapacá",
    numeroRomano: "I",
    descripcion: "Tarapacá es una región del norte de Chile, que limita con Bolivia. Cuenta con las salitreras Humberstone y Santa Laura, donde se conservan fábricas y edificios que ofrecen una mirada al patrimonio industrial y minero de la región. Al noreste, en el desierto de Atacama, está el diseño antropomórfico del Gigante de Atacama, en el Cerro Unitas. En la costa del Pacífico está Iquique, la capital regional famosa por sus playas.",
    atractivoTur: [
        {nombre: "Oficina Salitrera Santiago Humberstone"},
        {nombre: "Playa Cavancha"},
        {nombre: "Calle Baquedano"}
    ],
    imagen:"../img/tarapaca.jpg"
};

arregloRegiones["II"]={
    nombre: "Antofagasta",
    numeroRomano: "II",
    descripcion: "La Región de Antofagasta (II) se ubica en el norte entre los 21° 28’ hasta aproximadamente los 25° 55’ de latitud sur. La superficie regional presenta una longitud de 500 kilómetros aproximadamente, y abarca un área de 126.049,10 kilómetros cuadrados, equivalentes al 16,67% del territorio nacional. La región limita al norte con la Región de Tarapacá; al sur con la Región de Atacama; por el oeste limita con el Océano Pacífico y al este con la República Argentina. El paisaje de la Segunda Región es similar al de la Región de Tarapacá: ambas presentan clima árido, escasez hidrográfica, poca vegetación y un relieve similar al resto del país. Según el Censo 2017 la población alcanzaba los 607.534 habitantes y una densidad de 4,82 habitantes por kilómetro cuadrado.",
    atractivoTur: [
        {nombre: "Plaza Colón"},
        {nombre: "Barrio Histórico"},
        {nombre: "Parque Croacia"}
    ],
    imagen:"../img/antofa.jpg"
};

arregloRegiones["III"]={
    nombre: "Atacama",
    numeroRomano: "III",
    descripcion: "La región de Atacama (III) se localiza entre los 26° y 29°20´ de latitud sur. Está conformada por tres provincias y nueve comunas, encabezadas por la ciudad de Copiapó (capital regional). Posee una superficie de 75.176,20 kilómetros cuadrados, equivalentes al 9,94% del territorio nacional; limita al norte con la región de Antofagasta y al sur con la región de Coquimbo. Sus características naturales permiten definirla dentro del territorio nacional como una región transicional, puesto que las unidades de relieve básicas presentadas en las regiones del norte aquí comienzan a variar. Su clima y las condiciones hidrográficas permiten que la vegetación sea más abundante que las dos primeras regiones",
    atractivoTur: [
        {"nombre": "Bahía Inglesa"},
        {"nombre": "Desierto Florido"},
        {"nombre": "Playa la virgen"}
    ],
    imagen:"../img/atacama.jpg"
}

arregloRegiones["IV"]={
    nombre: "Coquimbo",
    numeroRomano: "IV",
    descripcion: "La Región de Coquimbo es una de las dieciséis regiones que conforman Chile. Su capital es La Serena. Ubicada en el norte del país —Norte Chico—, limita al norte con la región de Atacama, al este con la provincia de San Juan en Argentina, al sur con la región de Valparaíso y al oeste con el océano Pacífico.",
    atractivoTur: [
        {nombre: "Fuerte Lambert"},
        {nombre: "Totoralillo"},
        {nombre: "Cruz Del Tercer Milenio"}
    ],
    imagen:"../img/coquimbo.jpg"
}

arregloRegiones["V"]={
    nombre: "Valparaíso",
    numeroRomano: "V",
    descripcion: "La región de Valparaíso se ubica en la zona central de Chile desde la costa del Pacífico hasta la cordillera de los Andes. Viña del Mar es una ciudad turística frente al océano, conocida por su casino y la playa de Reñaca. La región también incluye la remota Isla de Pascua, famosa por sus moáis, las monumentales estatuas de cabezas humanas. La capital portuaria, Valparaíso, tiene funiculares y casas coloridas en los cerros, incluida la antigua residencia del poeta chileno Pablo Neruda",
    atractivoTur: [
        {nombre: "Museo Vergara"},
        {nombre: "Cerro Concepción"},
        {nombre: "Jardín Botanico Nacional"},
    ],
    imagen:"../img/valpo.jpg"
}
arregloRegiones["XIII"]={
    nombre: "Metropolitana de Santiago",
    numeroRomano: "XIII",
    descripcion: "La Región Metropolitana de Santiago incluye a ciudad de Santiago, la capital de Chile, junto con áreas de la Cordillera de los Andes y la Cordillera de la Costa. Santiago, ubicada en el valle central, es conocida por su arquitectura neoclásica, como la de la Catedral Metropolitana del siglo XVIII en el centro colonial de la Plaza de Armas. En las afueras de la ciudad, se pueden encontrar viñas con vino del Valle del Maipo. Centros de esquí, como Valle Nevado, se ubican en los Andes.",
    atractivoTur: [
        {nombre: "Cerro San Cristóbal"},
        {nombre: "Cerro Santa Lucia"},
        {nombre: "Museo de la Memoria y los Derechos Humanos"}
    ],
    imagen:"../img/santiago.jpg"
}

arregloRegiones["VI"]={
    nombre: "Libertador Gral. Bernardo O'Higgins",
    numeroRomano: "VI",
    descripcion: "La Región del Libertador Bernardo O'Higgins (VI) se localiza en la macrozona central del país, aproximadamente entre los 34° y los 35° de latitud sur. Abarca una superficie de 16.387,00 km2, representando el 2,2% del territorio nacional continental. Sus límites son por el norte la Región Metropolitana de Santiago a los 33°50’ latitud sur, y por el sur la Región del Maule a los 34° 45’ latitud sur, al oeste con el Océano Pacífico y al este con la Cordillera de Los Andes. Posee el relieve característico de nuestra región, su clima es de carácter templado de tipo mediterráneo el que permite la existencia de una vegetación que necesita de tal clima para sobrevivir.",
    atractivoTur: [
        {nombre: "Colchagua Museum"},
        {nombre: "Playa Punta de Lobos"},
        {nombre: "MontGras"}
    ],
    imagen:"../img/ohiggins.jpg"
}

arregloRegiones["VII"]={
    nombre: "Maule",
            numeroRomano: "VII",
            descripcion: "El Maule es una importante región vitivinícola de la zona central de Chile. La cruza el río Maule, que fluye hacia el oeste desde los Andes a través del enorme lago Colbún. En la capital, Talca, está el Museo O'Higginiano y de Bellas Artes, dedicado a la historia y al arte en el edificio donde se firmó la Declaración de Independencia de Chile. La Reserva Nacional Radal Siete Tazas es famosa por sus formaciones rocosas, las piscinas color turquesa y las cascadas.",
            atractivoTur: [
                {nombre: "Jardín botanico de la Universidad de Talca"},
                {nombre: "Piedra de la Iglesia"},
                {nombre: "Río Achibueno"}
            ],
            imagen:"../img/maule.jpg"
}

arregloRegiones["XVI"]={
    nombre: "Ñuble",
    numeroRomano: "XVI",
    descripcion: "La Región del Ñuble se localiza cercana al límite sur de la zona central, específicamente entre los 36º00' y los 37º12' de latitud sur. Limita al norte con la Región del Maule, al sur con la Región del Biobío, al oeste con el Océano Pacífico y al este con la República Argentina. Consta con una superficie aproximada de 13.178 km2 representando a la región con menor extensión del país. El paisaje regional presenta las unidades longitudinales clásicas de la zona central de Chile, con presencia de algunos elementos propios como lo es la presencia de una precordillera, de gran relevancia en la configuración espacial de Ñuble.",
    atractivoTur: [
        {nombre: "Termas de Chillán"},
        {nombre: "Portezuelo"},
        {nombre: "Casa Museo Violeta Parra"}
    ],
    imagen:"../img/nuble.jpg"
}

arregloRegiones["VIII"]={
    nombre: "Biobío",
            numeroRomano: "VIII",
            descripcion: "La Región del Biobío es una de las dieciséis regiones en que se divide la República de Chile. Su capital es Concepción. Ubicada en el centro del país, limita al norte con la Región de Ñuble, al este con la provincia del Neuquén en Argentina, al sur con la Región de La Araucanía y al oeste con el océano Pacífico.",
            atractivoTur: [
                {nombre: "Parque Nacional Laguna del Laja"},
                {nombre: "Universidad de Concepcion"},
                {nombre: "Monitor Huáscar"}
            ],
            imagen:"../img/biobio.jpg"
}

arregloRegiones["IX"]={
    nombre: "Araucanía",
    numeroRomano: "IX",
    descripcion: "La región de la Araucanía, en el centro de Chile, abarca un terreno que varía desde la costa del Pacífico en el oeste hasta los volcanes y las montañas de los Andes en el este. Al sureste está la región de Los Lagos de Chile, con lagos de agua dulce y bosques lluviosos templados. Las reservas de la naturaleza, como el Parque Nacional Huerquehue y el Parque Nacional Conguillío, protegen los ecosistemas con lagos, ríos y bosques de araucarias.",
    atractivoTur: [
        {nombre: "Termas Geometricas"},
        {nombre: "Salto de la Princesa"},
        {nombre: "Reserva Nacional Malalcahuello - Nalcas"}
    ],
    imagen:"../img/araucania.jpg"
}

arregloRegiones["XIV"]={
    nombre: "Los Ríos",
    numeroRomano: "XIV",
    descripcion: "Los Ríos es una región del sur de Chile que se extiende desde la frontera con Argentina, en la cordillera de los Andes, por las vastas llanuras hasta la frondosa cordillera de la Costa y el océano Pacífico. Su capital regional es la ciudad universitaria de Valdivia, que se ubica en la confluencia de 3 ríos cerca de la costa. Isla Teja, su isla en un río, tiene el Museo Van der Maele, con exhibiciones de historia, y el moderno Museo de Arte Contemporáneo.",
    atractivoTur: [
        {nombre: "Saltos del Huilo-Huilo"},
        {nombre: "Mercado Fluvial de Valdivia"},
        {nombre: "Parque Oncol"}
    ],
    imagen:"../img/los-rios.jpg"
}

arregloRegiones["X"]={
    nombre: "Los Lagos",
    numeroRomano: "X",
    descripcion: "Los Lagos es una región del sur de Chile conocida por sus bosques, las montañas de los Andes y los lagos. La capital regional, Puerto Montt, es un puerto ajetreado con una catedral neoclásica de madera. Entre los volcanes activos cercanos, se encuentran el Osorno, con su cono cubierto por un glaciar, y el Calbuco. Al sur, la isla de Chiloé es conocida por sus iglesias de madera y los fiordos donde se ven ballenas. La ciudad capital, Castro, tiene casas coloridas construidas sobre pilotes.",
    atractivoTur: [
        {nombre: "Muelle de almas"},
        {nombre: "Alerce Andino Parque Nacional"},
        {nombre: "Montaña de los Cóndores"},
    ],
    imagen:"../img/los-lagos.jpg"
}

arregloRegiones["XI"]={
    nombre: "Aysén del Gral. Carlos Ibáñez del Campo",
    numeroRomano: "XI",
    descripcion: "La región de Aysén es un área escasamente poblada del sur de Chile, con grandes glaciares, fiordos y montañas nevadas. El Parque Nacional Laguna San Rafael abarca los Campos de Hielo Norte de la Patagonia, que tiene numerosos glaciares en los lagos interiores y ríos. Las cumbres de las montañas incluyen el cerro Castillo, de 2,675 m de altura y terreno serrado, ubicado dentro de una reserva natural del mismo nombre. ",
    atractivoTur: [
        {nombre: "Parque Natural Cumbre de Cipreses"},
        {nombre: "Valle Lunar"},
        {nombre: "Parque Nacional Queular"}
    ],
    imagen:"../img/aysen.jpg"
}

arregloRegiones["XII"]={
    nombre: "Magallanes y de la Antártica Chilena",
    numeroRomano: "XII",
    descripcion: "La Región de Magallanes (XII) se encuentra ubicada en el extremo sur del territorio nacional, siendo la más extensa del país. Abarca los territorios sudamericano y antártico. Su sector sudamericano se localiza en la parte sudoccidental del continente desde los 48°36' a los 56°30' de latitud sur y entre los meridianos 66°25' y 75°40' de longitud oeste. Posee una superficie de 1.382.291,10 km2, correspondiendo 132.291,10 km2 a su parte continental y por el Territorio Chileno Antártico, 1.250.000 km2 representando en total al 68,9% de la superficie nacional. A su vez el área sudamericana representa el 17,5% de la superficie nacional, ocupando el primer lugar en superficie seguida por las regiones de Antofagasta y Aysén del General Carlos Ibáñez del Campo.",
    atractivoTur: [
        {nombre: "Glacier Grey"},
        {nombre: "Nao Victoria Museo"},
        {nombre: "Lago Nordenskjold"}
    ],
    imagen:"../img/magallanes.jpg"
}

let NumeroRegion = document.getElementById("region");
let descripciones = document.getElementById("descripcion");
let atractivos = document.getElementById("atractivo");
let tarjeta = document.getElementById("tarjeta");
let color = document.getElementById("color");
let imagen = document.getElementById("imagen")


tarjeta.hidden=true;

let posicionActual = "II";
function IndicaRegion(elemento){
    var element = document.getElementById("tarjeta");
    posicionActual = elemento.attributes.title.value;
    tarjeta.hidden=false;
    element.classList.remove("slide-out-bck-center");
    element.classList.add("fade-in");
    tarjeta.hidden=false
    NumeroRegion.innerText = arregloRegiones[elemento.attributes.title.value].nombre;
    descripciones.innerText = arregloRegiones[elemento.attributes.title.value].descripcion;
    imagen.src=arregloRegiones[elemento.attributes.title.value].imagen;
    atractivos.innerText = arregloRegiones[elemento.attributes.title.value].atractivoTur.map(x => x.nombre)
    
}

function ocultar(){
    var element = document.getElementById("tarjeta");
    element.classList.remove("fade-in");
    element.classList.add("slide-out-bck-center");
}
function abrirMod(){
    var element = document.getElementById("tarjetaMOD");
    element.classList.remove("d-none");
}

let prueba= document.getElementById("Ctitulo");
function cambiame(){
    console.log(arregloRegiones.XV.nombre);
    arregloRegiones[posicionActual].nombre = prueba.value;

}