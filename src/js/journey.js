import { Foto } from "./galeria.js"
import { Galeria } from "./galeria.js"
import { ddMenuMobile, navbarStillsResponsive, offcanvasActiveItem } from "./layoutElements.js"

// Navbar responsive
navbarStillsResponsive()
offcanvasActiveItem()

const stills = document.querySelector(".ddm-click")
stills.classList.add("n-active-offcanvas")

// Crear lista de fotos
const fotosLista = [
    new Foto({
        id: "1",
        name: "junior",
        year: 2020,
        place: "Guayaquil"
    }),
    new Foto({
        id: "2",
        name: "nuria",
        year: 2022,
        place: "Manabi"

    }),
    new Foto({
        id: "3",
        name: "las_maravillas",
        year: 2021,
        place: "Quito"

    }),
    new Foto({
        id: "4",
        name: "nada_bello",
        year: 2024,
        place: "Ambato"

    }),
    new Foto({
        id: "5",
        name: "por_un_momento",
        year: 2023,
        place: "Guayaquil"

    }),
    new Foto({
        id: "6",
        name: "junior",
        year: 2022,
        place: "Posorja"

    }),
    new Foto({
        id: "7",
        name: "nuria",
        year: 2018,
        place: "Cuenca"

    }),
    new Foto({
        id: "8",
        name: "las_maravillas",
        year: 2019,
        place: "Guayaquil"

    }),
    new Foto({
        id: "9",
        name: "nada_bello",
        year: 2021,
        place: "Manta"

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

// Offcanvas menu
ddMenuMobile()

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
            <button id="closeModal"  style="width: 100px; height: 50px;"><i class="bi bi-x-lg"></i></button>
            <div style="display:grid; grid-template-columns: 1fr; grid-template-rows: fit-content 1fr">

            <img id="img-modal" src=${url} alt="" style="width: 80%; max-width: 85%; justify-self: center; align-self: end; border-radius: 10px">
            
            <span id="pieDeFoto" class="text-white text-center text-uppercase mt-3">${item.getAttribute('data-info')}</span>
            </div>

            <button class="prev"><i class="bi bi-caret-left-fill icon-size"></i></button>
            <button class="next"><i class="bi bi-caret-right-fill icon-size"></i></button>
            
        `

        
        const prev = document.querySelector(".prev")
        const next = document.querySelector(".next")
        const imgModal = document.querySelector("#img-modal")
        const pieDeFoto = document.querySelector("#pieDeFoto")
        
        let coords = imgModal.getBoundingClientRect();
        console.log("position", coords.bottom)

        let itemID = item.id; 
        let photoInfo = item.getAttribute('data-info')
        prev.addEventListener('click', ()=>{
            itemID = parseInt(itemID) > 1 ? parseInt(itemID) - 1 : galeria.fotos.length;
            console.log(itemID)
            let foto = galeria.fotos.filter(foto => foto.id == itemID);
            //let info = galeria.fotos.find(foto => `${foto.place}, ${foto.year}` == photoInfo)
            let fotoUsar = foto[0]
            //console.log(fotoUsar.url)
            photoInfo = `${fotoUsar.place}, ${fotoUsar.year}`
            imgModal.src = fotoUsar.url
            pieDeFoto.innerHTML = photoInfo
            
        })
        next.addEventListener('click', ()=>{
            itemID = parseInt(itemID) < galeria.fotos.length ? parseInt(itemID) + 1 : 1;
            console.log(itemID)
            let foto = galeria.fotos.filter(foto => foto.id == itemID);
            let fotoUsar = foto[0]
            console.log(fotoUsar.url)
            imgModal.src = fotoUsar.url

            photoInfo = `${fotoUsar.place}, ${fotoUsar.year}`
            imgModal.src = fotoUsar.url
            pieDeFoto.innerHTML = photoInfo
            
        })
        
        const closeModal = document.querySelector("#closeModal")
        closeModal.addEventListener('click', (event)=>{
            modalDialog.close()
            modalDialog.innerHTML = ""
            modalDialog.classList.add("nodisplay")

        

        
        })
    })
})

