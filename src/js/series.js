import { Foto } from "./galeria.js"
import { Galeria } from "./galeria.js"

// Crear lista de fotos
const fotosLista = [
    new Foto({
        id: "1",
        name: "junior",
    }),
    new Foto({
        id: "2",
        name: "nuria",

    }),
    new Foto({
        id: "3",
        name: "las_maravillas",

    }),
    new Foto({
        id: "4",
        name: "nada_bello",

    }),
    new Foto({
        id: "5",
        name: "por_un_momento",

    }),
    new Foto({
        id: "6",
        name: "junior",

    }),
    new Foto({
        id: "7",
        name: "nuria",

    }),
    new Foto({
        id: "8",
        name: "las_maravillas",

    }),
    new Foto({
        id: "9",
        name: "nada_bello",

    }),
    /* new Foto({
        id: "10",
        name: "por_un_momento",

    }), */
]
// Añadir urls a c/foto
fotosLista.forEach((foto)=>{
    foto.aggUrl()
})
// Crear galería
const galeria = new Galeria({
    categoria: "Series"
})
// Añadir fotos a galería
galeria.aggFotos(...fotosLista)

console.log(galeria.fotos)
const galleryContainer = document.querySelector(".gallery-gen")
galeria.renderFotos()