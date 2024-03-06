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
    categoria: "Journey"
})
// Añadir fotos a galería
galeria.aggFotos(...fotosLista)

const galleryContainer = document.querySelector(".gallery-gen")
galeria.renderFotos()

// Modales
const modalDialog = document.querySelector("#modal-dialog");
const openModal = document.querySelectorAll(".openModal");

/* console.log(openModal) */
openModal.forEach(item=>{
    item.addEventListener('click', ()=>{
        console.log("item", item)
        let url = getComputedStyle(item).backgroundImage.slice(4, -1).replace(/"/g, "")
        console.log(url)
        modalDialog.innerHTML = `
            <img src=${url} alt="" style="width: 80vw; justify-self: center; align-self: center;">
            <button id="closeModal"  style="width: 100px; height: 50px;">Close</button>
        `
        modalDialog.showModal()
        
        const closeModal = document.querySelector("#closeModal")
        closeModal.addEventListener('click', (event)=>{
            modalDialog.close()
        })
    })
})

/* modalDialog.addEventListener('showModal', ()=>{
    const closeModal = document.querySelector("#closeModal")
        console.log("close",closeModal)
        closeModal.addEventListener('click', (event)=>{
            modalDialog.close()
        })
}) */

/* export function clModal(){
    modalDialog.close()
} */
/* const closeModal = document.querySelector("#closeModal")
console.log(closeModal)
closeModal.addEventListener('click', (event)=>{
    modalDialog.close()
}) */