
let navheader=`
<a class="navheader" href="index.html">Home</a>
<a class="navheader" href="contacto.html">Contactanos</a>
<a class="navheader" href="registro.html">Registrate</a>
<a class="navheader" href="cont_educativos.html">Educativos</a>
<a class="navheader" href="nosotros.html">Nosotros</a>`

document.querySelector("nav").innerHTML=navheader
let pestanias=[
    {
        id: 1,
        nombre:"Home",
    },

    {
        id: 3,
        nombre:"Nosotros",
    },

    {
        id: 5,
        nombre:"Educativos",
    },

    {
        id: 6,
        nombre:"Registro",
    },

    {
        id: 7,
        nombre:"Contactanos",
    }
]

let = titulo 
for (let i = 0; i < pestanias.length; i++) {
    titulo = titulo + `
    <title>Arbolado Urbano/${pestanias[i].nombre}</title> 
    `  
}

let data = [
    {
     Nombre_vulgar: "Pino marítimo ",
     Nombre_científico: "Pinus pinaster",
     Origen: "Exótica",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Pinus pinaster.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Pinus pinaster 2.jpg"
    },
    {
     Nombre_vulgar: "Plátano ",
     Nombre_científico: "Platanus acerifolia",
     Origen: "Exótica",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Platanus acerifolia.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Platanus acerifolia 2.jpg"
    },
    {
     Nombre_vulgar: "Acacia melanoxylon ",
     Nombre_científico: "Acacia melanoxylon",
     Origen: "Exótica",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Acacia melanoxylon.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Acacia melanoxylon 2.jpg"
    },
    {
     Nombre_vulgar: "Liquidambar ",
     Nombre_científico: "Liquidambar styraciflua",
     Origen: "Exótica",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Liquidambar styraciflua.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Liquidambar styraciflua 2.jpg"
    },
    {
     Nombre_vulgar: "Molle ",
     Nombre_científico: "Schinus fasciculatus",
     Origen: "Autóctona",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Schinus fasciculatus.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Schinus fasciculatus 2.jpg"
    },
    {
     Nombre_vulgar: "Azahar de monte ",
     Nombre_científico: "Aloysia gratissima",
     Origen: "Autóctona",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Aloysia gratissima.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Aloysia gratissima 2.jpg"
    },
    {
     Nombre_vulgar: "Zampa ",
     Nombre_científico: "Atriplex lampa",
     Origen: "Autóctona",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Atriplex lampa.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Atriplex lampa 2.jpg"
    },
    {
     Nombre_vulgar: "Calden ",
     Nombre_científico: "Prosopis caldenia",
     Origen: "Autóctona",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Prosopis caldenia.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Prosopis caldenia 2.jpg"
    },
    {
     Nombre_vulgar: "Espinillo ",
     Nombre_científico: "Acacia caven",
     Origen: "Autóctona",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Acacia caven.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Acacia caven 2.jpg"
    },
    {
     Nombre_vulgar: "Ciprés arizónica ",
     Nombre_científico: "Cupressus arizonica",
     Origen: "Exótica",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Cupressus arizonica.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Cupressus arizonica 2.jpg"
    },
    {
     Nombre_vulgar: "Ciprés lusitánica ",
     Nombre_científico: "Cupressus lusitánica",
     Origen: "Exótica",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Cupressus lusitánica.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Cupressus lusitánica 2.jpg"
    },
    {
     Nombre_vulgar: "Tuya ",
     Nombre_científico: "Thuja occidentalis",
     Origen: "Exótica",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Thuja occidentalis.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Thuja occidentalis 2.jpg"
    },
    {
     Nombre_vulgar: "Ciprés piramidal ",
     Nombre_científico: "Cupressus sempervirens",
     Origen: "Exótica",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Cupressus sempervirens.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Cupressus sempervirens 2.jpg"
    },
    {
     Nombre_vulgar: "Pino piñonero ",
     Nombre_científico: "Pinus pinea",
     Origen: "Exótica",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Pinus pinea.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Pinus pinea 2.jpg"
    },
    {
     Nombre_vulgar: "Pino brutia ",
     Nombre_científico: "Pinus brutia",
     Origen: "Exótica",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Pinus brutia.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Pinus brutia 2.jpg"
    },
    {
     Nombre_vulgar: "Pino de alepo ",
     Nombre_científico: "Pinus halepensis",
     Origen: "Exótica",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Pinus halepensis.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Pinus halepensis 2.jpg"
    },
    {
     Nombre_vulgar: "Eucalyptus corteza de hierro ",
     Nombre_científico: "Eucalyptus sideroxylon",
     Origen: "Exótica",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Eucalyptus sideroxylon.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Eucalyptus sideroxylon 2.jpg"
    },
    {
     Nombre_vulgar: "Eucalyptus medicinal ",
     Nombre_científico: "Eucalyptus cinerea",
     Origen: "Exótica",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Eucalyptus cinerea.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Eucalyptus cinerea 2.jpg"
    },
    {
     Nombre_vulgar: "Eucalyptus viminalis ",
     Nombre_científico: "Eucalyptus viminalis",
     Origen: "Exótica",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Eucalyptus viminalis.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Eucalyptus viminalis 2.jpg"
    },
    {
     Nombre_vulgar: "Eucalyptus rojo ",
     Nombre_científico: "Eucalyptus camaldulensis",
     Origen: "Exótica",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Eucalyptus camaldulensis.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Eucalyptus camaldulensis 2.jpg"
    },
    {
     Nombre_vulgar: "Cotoneaster ",
     Nombre_científico: "Cotoneaster horizontalis",
     Origen: "Exótica",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Cotoneaster horizontalis.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Cotoneaster horizontalis 2.jpg"
    },
    {
     Nombre_vulgar: "Crataegus ",
     Nombre_científico: "Crataegus monogyna",
     Origen: "Exótica",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Crataegus monogyna.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Crataegus monogyna 2.jpg"
    },
    {
     Nombre_vulgar: "Aguaribay ",
     Nombre_científico: "Schinus molle",
     Origen: "Autóctona",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Schinus molle.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Schinus molle 2.jpg"
    },
    {
     Nombre_vulgar: "Aromo ",
     Nombre_científico: "Acacia dealbata",
     Origen: "Exótica",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Acacia dealbata.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Acacia dealbata 2.jpg"
    },
    {
     Nombre_vulgar: "Sen de campo ",
     Nombre_científico: "Senna corymbosa",
     Origen: "Exótica",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Senna corymbosa.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Senna corymbosa 2.jpg"
    },
    {
     Nombre_vulgar: "Acacia visco ",
     Nombre_científico: "Acacia Visco",
     Origen: "Exótica",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Acacia Visco.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Acacia Visco 2.jpg"
    },
    {
     Nombre_vulgar: "Braquiquito ",
     Nombre_científico: "Brachychiton populneus",
     Origen: "Exótica",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Brachychiton populneus.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Brachychiton populneus 2.jpg"
    },
    {
     Nombre_vulgar: "Grevillea ",
     Nombre_científico: "Grevillea robusta",
     Origen: "Exótica",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Grevillea robusta.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Grevillea robusta 2.jpg"
    },
    {
     Nombre_vulgar: "Laurel de jardín ",
     Nombre_científico: "Nerium oleander",
     Origen: "Exótica",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Nerium oleander.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Nerium oleander 2.jpg"
    },
    {
     Nombre_vulgar: "Roble amareicano ",
     Nombre_científico: "Quercus rubra",
     Origen: "Exótica",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Quercus rubra.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Quercus rubra 2.jpg"
    },
    {
     Nombre_vulgar: "Roble de los pantanos ",
     Nombre_científico: "Quercus palustris",
     Origen: "Exótica",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Quercus palustris.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Quercus palustris 2.jpg"
    },
    {
     Nombre_vulgar: "Palmera",
     Foto1: "file:///c:/xampp/htdocs/tp/img/.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/ 2.jpg"
    },
    {
     Nombre_vulgar: "Sofora ",
     Nombre_científico: "Styphnolobium japonicum",
     Origen: "Exótica",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Styphnolobium japonicum.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Styphnolobium japonicum 2.jpg"
    },
    {
     Nombre_vulgar: "Vignoña",
     Foto1: "file:///c:/xampp/htdocs/tp/img/.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/ 2.jpg"
    },
    {
     Nombre_vulgar: "Alcornoque ",
     Nombre_científico: "Quercus suber",
     Origen: "Exótica",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Quercus suber.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Quercus suber 2.jpg"
    },
    {
     Nombre_vulgar: "Retama ",
     Nombre_científico: "Retama sphaerocarpa",
     Origen: "Exótica",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Retama sphaerocarpa.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Retama sphaerocarpa 2.jpg"
    },
    {
     Nombre_vulgar: "Ciprés leylandii ",
     Nombre_científico: "Cupressus leylandii",
     Origen: "Exótica",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Cupressus leylandii.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Cupressus leylandii 2.jpg"
    },
    {
     Nombre_vulgar: "Hibiscus ",
     Nombre_científico: "Hibiscus spp.",
     Origen: "Exótica",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Hibiscus spp..jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Hibiscus spp. 2.jpg"
    },
    {
     Nombre_vulgar: "Encina ",
     Nombre_científico: "Quercus ilex",
     Origen: "Exótica",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Quercus ilex.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Quercus ilex 2.jpg"
    },
    {
     Nombre_vulgar: "Casuarina ",
     Nombre_científico: "Casuarina equisetifolia",
     Origen: "Exótica",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Casuarina equisetifolia.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Casuarina equisetifolia 2.jpg"
    },
    {
     Nombre_vulgar: "Algarrobo blanco ",
     Nombre_científico: "Prosopis alba",
     Origen: "Autóctona",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Prosopis alba.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Prosopis alba 2.jpg"
    },
    {
     Nombre_vulgar: "Albaricoque ",
     Nombre_científico: "Ximenia americana",
     Origen: "Autóctona",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Ximenia americana.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Ximenia americana 2.jpg"
    },
    {
     Nombre_vulgar: "Acacia longifolia ",
     Nombre_científico: "Acacia longifolia",
     Origen: "Exótica",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Acacia longifolia.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Acacia longifolia 2.jpg"
    },
    {
     Nombre_vulgar: "Alpataco ",
     Nombre_científico: "Prosopis flexuosa var. depressa",
     Origen: "Autóctona",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Prosopis flexuosa var. depressa.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Prosopis flexuosa var. depressa 2.jpg"
    },
    {
     Nombre_vulgar: "Algarrobo ",
     Nombre_científico: "Prosopis flexuosa var. flexuosa",
     Origen: "Autóctona",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Prosopis flexuosa var. flexuosa.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Prosopis flexuosa var. flexuosa 2.jpg"
    },
    {
     Nombre_vulgar: "Brusquilla ",
     Nombre_científico: "Discaria americana",
     Origen: "Autóctona",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Discaria americana.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Discaria americana 2.jpg"
    },
    {
     Nombre_vulgar: "Aromo blanco ",
     Nombre_científico: "Leucaena leucocephala",
     Origen: "Exótica",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Leucaena leucocephala.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Leucaena leucocephala 2.jpg"
    },
    {
     Nombre_vulgar: "Barba de chivo ",
     Nombre_científico: "Caesalpinia gilliesii",
     Origen: "Autóctona",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Caesalpinia gilliesii.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Caesalpinia gilliesii 2.jpg"
    },
    {
     Nombre_vulgar: "Chañar ",
     Nombre_científico: "Geoffroea decorticans ",
     Origen: "Autóctona",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Geoffroea decorticans.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Geoffroea decorticans 2.jpg"
    },
    {
     Nombre_vulgar: "Ceibo ",
     Nombre_científico: "Erythrina cristagalli",
     Origen: "Autóctona",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Erythrina cristagalli.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Erythrina cristagalli 2.jpg"
    },
    {
     Nombre_vulgar: "Chaucha de piche ",
     Nombre_científico: "Prosopis humilis",
     Origen: "Autóctona",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Prosopis humilis.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Prosopis humilis 2.jpg"
    },
    {
     Nombre_vulgar: "Ibirá pitá ",
     Nombre_científico: "Peltophorun dubium",
     Origen: "Autóctona",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Peltophorun dubium.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Peltophorun dubium 2.jpg"
    },
    {
     Nombre_vulgar: "Guaran amarillo ",
     Nombre_científico: "Tecoma stans",
     Origen: "Autóctona",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Tecoma stans.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Tecoma stans 2.jpg"
    },
    {
     Nombre_vulgar: "Chañar brea ",
     Nombre_científico: "Cercidium praecox",
     Origen: "Autóctona",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Cercidium praecox.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Cercidium praecox 2.jpg"
    },
    {
     Nombre_vulgar: "Jacarandá ",
     Nombre_científico: "Jacaranda mimosifolia",
     Origen: "Autóctona",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Jacaranda mimosifolia.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Jacaranda mimosifolia 2.jpg"
    },
    {
     Nombre_vulgar: "Lapacho rosado ",
     Nombre_científico: "Tabebuia impetiginosa",
     Origen: "Autóctona",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Tabebuia impetiginosa.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Tabebuia impetiginosa 2.jpg"
    },
    {
     Nombre_vulgar: "Kiri ",
     Nombre_científico: "Paulownia tomentosa",
     Origen: "Exótica",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Paulownia tomentosa.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Paulownia tomentosa 2.jpg"
    },
    {
     Nombre_vulgar: "Jarilla macho ",
     Nombre_científico: "Larrea cuneifolia",
     Origen: "Autóctona",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Larrea cuneifolia.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Larrea cuneifolia 2.jpg"
    },
    {
     Nombre_vulgar: "Jarilla hembra ",
     Nombre_científico: "Larrea divaricata",
     Origen: "Autóctona",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Larrea divaricata.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Larrea divaricata 2.jpg"
    },
    {
     Nombre_vulgar: "Jarilla crespa ",
     Nombre_científico: "Larrea nitida",
     Origen: "Autóctona",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Larrea nitida.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Larrea nitida 2.jpg"
    },
    {
     Nombre_vulgar: "Molle ",
     Nombre_científico: "Schinus fasciculatus",
     Origen: "Autóctona",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Schinus fasciculatus.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Schinus fasciculatus 2.jpg"
    },
    {
     Nombre_vulgar: "Palo borracho blanco ",
     Nombre_científico: "Ceiba chodattii",
     Origen: "Autóctona",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Ceiba chodattii.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Ceiba chodattii 2.jpg"
    },
    {
     Nombre_vulgar: "Pichanilla ",
     Nombre_científico: "Senna aphylla",
     Origen: "Autóctona",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Senna aphylla.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Senna aphylla 2.jpg"
    },
    {
     Nombre_vulgar: "Nogal pecán ",
     Nombre_científico: "Carya illinoensis",
     Origen: "Exótica",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Carya illinoensis.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Carya illinoensis 2.jpg"
    },
    {
     Nombre_vulgar: "Molle ceniciento ",
     Nombre_científico: "Schinus jhonstonii",
     Origen: "Autóctona",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Schinus jhonstonii.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Schinus jhonstonii 2.jpg"
    },
    {
     Nombre_vulgar: "Piquillín ",
     Nombre_científico: "Condalia microphylla",
     Origen: "Autóctona",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Condalia microphylla.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Condalia microphylla 2.jpg"
    },
    {
     Nombre_vulgar: "Palo borracho rosado ",
     Nombre_científico: "Ceiba speciosa",
     Origen: "Autóctona",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Ceiba speciosa.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Ceiba speciosa 2.jpg"
    },
    {
     Nombre_vulgar: "Sombra de toro ",
     Nombre_científico: "Jodina rhombifolia",
     Origen: "Autóctona",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Jodina rhombifolia.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Jodina rhombifolia 2.jpg"
    },
    {
     Nombre_vulgar: "Piquillín de víbora ",
     Nombre_científico: "Lycium gilliessianum",
     Origen: "Autóctona",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Lycium gilliessianum.jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Lycium gilliessianum 2.jpg"
    },
    {
     Nombre_vulgar: "Solupe frutero ",
     Nombre_científico: "Ephedra ochreata ",
     Origen: "Autóctona",
     Foto1: "file:///c:/xampp/htdocs/tp/img/Ephedra ochreata .jpg",
     Foto2: "file:///c:/xampp/htdocs/tp/img/Ephedra ochreata  2.jpg"
    }
   ]


let personajes=`<h2><p>NUESTRAS ESPECIES</p></h2>`
for(let elemento of data){
    personajes= personajes+ `
    <h3 class="rojo" >${elemento.Nombre_vulgar } </h3> 
    <p class="ncient"> (${elemento.Nombre_científico }) </p> 
    <p class="ncient"> Tipo de origen: ${elemento.Origen } </p>   
    <p> <img class="img" src="${elemento.Foto1}"   alt="${elemento.Nombre_científico } "> </p>
    <p> <img class="img" src="${elemento.Foto2}"  alt="${""} "> </p>
    <p class="ncient">${elemento.Nombre_científico } </p>
    <hr>
    `
}
document.querySelector("#mainIndex").innerHTML=personajes
