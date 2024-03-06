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
        let url = getComputedStyle(item).backgroundImage.slice(4, -1).replace(/"/g, "")
        modalDialog.classList.remove("nodisplay")
        modalDialog.showModal()

        modalDialog.innerHTML = `
            <button id="closeModal"  style="width: 100px; height: 50px;">X</button>
            <img id="img-modal" src=${url} alt="" style="width: 70%; max-width: 60%; justify-self: center; align-self: center; border-radius: 10px">
            <p style="color: white; justify-self:center;">Quito, 2022</p>
            <button id="prev">prev</button>
            <button id="next">next</button>

        `

        const prev = document.querySelector("#prev")
        const next = document.querySelector("#next")
        const imgModal = document.querySelector("#img-modal")

        let itemID = item.id; 
        prev.addEventListener('click', ()=>{
            itemID = parseInt(itemID) > 1 ? parseInt(itemID) - 1 : galeria.fotos.length;
            console.log(itemID)
            let foto = galeria.fotos.filter(foto => foto.id == itemID);
            let fotoUsar = foto[0]
            console.log(fotoUsar.url)
            imgModal.src = fotoUsar.url
            
        })
        next.addEventListener('click', ()=>{
            itemID = parseInt(itemID) < galeria.fotos.length ? parseInt(itemID) + 1 : 1;
            console.log(itemID)
            let foto = galeria.fotos.filter(foto => foto.id == itemID);
            let fotoUsar = foto[0]
            console.log(fotoUsar.url)
            imgModal.src = fotoUsar.url
            
        })
        
        const closeModal = document.querySelector("#closeModal")
        closeModal.addEventListener('click', (event)=>{
            modalDialog.close()
            modalDialog.innerHTML = ""
            modalDialog.classList.add("nodisplay")

        

        
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