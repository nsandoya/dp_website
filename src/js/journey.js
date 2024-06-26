import { Foto } from "./galeria.js"
import { Galeria } from "./galeria.js"
import { ddMenuMobile, navbarStillsResponsive, offcanvasActiveItem, dynamicFooter } from "./layoutElements.js"

localStorage.setItem('projectsCategory', "stills") 

// Navbar responsive
navbarStillsResponsive()
offcanvasActiveItem()
dynamicFooter()

localStorage.setItem('projectsCategory', "stills") 


const stills = document.querySelector(".ddm-click")
stills.classList.add("n-active-offcanvas")



// Crear lista de fotos
const fotosLista = [
    new Foto({
        id: "1",
        name: "Banning",
        tag: "banning",
        //year: 2020,
        place: "CA"
    }),
    new Foto({
        id: "2",
        name: "Santa Monica",
        tag: "santa_monica",
        //year: 2022,
        place: "CA"

    }),
    new Foto({
        id: "3",
        name: "Santa Monica",
        tag: "santa_monica",
        //year: 2021,
        place: "CA"

    }),
    new Foto({
        id: "4",
        name: "Santa Monica",
        tag: "santa_monica",
        //year: 2024,
        place: "CA"

    }),
    new Foto({
        id: "5",
        name: "Mar del Plata",
        tag: "mar_del_plata",
        //year: 2023,
        place: "ARG"

    }),
    new Foto({
        id: "6",
        name: "Santa Barbara",
        tag: "santa_barbara",
        //year: 2022,
        place: "CA"

    }),
    new Foto({
        id: "7",
        name: "Los Angeles",
        tag: "los_angeles",
        //year: 2018,
        place: "CA"

    }),
    new Foto({
        id: "8",
        name: "San Bernardino",
        tag: "san_bernardino",
        //year: 2019,
        place: "CA"

    }),
    new Foto({
        id: "9",
        name: "Riverside",
        tag: "riverside",
        //year: 2021,
        place: "CA"

    }),
    new Foto({
        id: "10",
        name: "Santo Domingo",
        tag: "santo_domingo",
        place: "EC"
    }),
    new Foto({
        id: "11",
        name: "Sherman Oaks",
        tag: "sherman_oaks",
        place: "LA"
    }),
    new Foto({
        id: "12",
        name: "Van Nuys",
        tag: "van_nuys",
        place: "LA"
    }),
    new Foto({
        id: "13",
        name: "Van Nuys",
        tag: "van_nuys",
        place: "LA"
    }),
    new Foto({
        id: "14",
        name: "Santa Barbara",
        tag: "santa_barbara",
        place: "CA"
    }),
    new Foto({
        id: "15",
        name: "Los Ángeles",
        tag: "los_angeles",
        place: "CA"
    }),
    new Foto({
        id: "16",
        name: "Fontana",
        tag: "fontana",
        place: "CA"
    }),
    new Foto({
        id: "17",
        name: "San Bernardino",
        tag: "san_bernardino",
        place: "CA"
    }),
    new Foto({
        id: "18",
        name: "San Bernardino",
        tag: "san_bernardino",
        place: "CA"
    }),
    new Foto({
        id: "19",
        name: "Saõ Paulo",
        tag: "sao_paulo",
        place: "BRA"
    }),
    new Foto({
        id: "20",
        name: "Las Vegas",
        tag: "las_vegas",
        place: "NV"
    }),
    new Foto({
        id: "21",
        name: "Saõ Paulo",
        tag: "sao_paulo",
        place: "BRA"
    }),
    new Foto({
        id: "22",
        name: "Los Ángeles",
        tag: "los_angeles",
        place: "CA"
    }),
    new Foto({
        id: "23",
        name: "Guayaquil",
        tag: "guayaquil",
        place: "EC"
    }),
    new Foto({
        id: "24",
        name: "Los Ángeles",
        tag: "los_angeles",
        place: "CA"
    }),
    new Foto({
        id: "25",
        name: "Los Ángeles",
        tag: "los_angeles",
        place: "CA"
    }),
    new Foto({
        id: "26",
        name: "Los Ángeles",
        tag: "los_angeles",
        place: "CA"
    }),
    new Foto({
        id: "27",
        name: "Galapagos Island",
        tag: "galapagos",
        place: "EC"
    }),
    new Foto({
        id: "28",
        name: "Culebra",
        tag: "culebra",
        place: "PR"
    }),
    new Foto({
        id: "29",
        name: "Ocean Park",
        tag: "ocean_park",
        place: "PR"
    }),
    new Foto({
        id: "30",
        name: "Saõ Paulo",
        tag: "sao_paulo",
        place: "BRA"
    }),
    new Foto({
        id: "31",
        name: "Guayaquil",
        tag: "guayaquil",
        place: "EC"
    }),
    new Foto({
        id: "32",
        name: "Guayaquil",
        tag: "guayaquil",
        place: "EC"
    }),
]
// Añadir urls a c/foto
fotosLista.forEach((foto)=>{
    foto.aggUrlJourney();
    //console.log("url",foto.url)
})
// Crear galería
const galeria = new Galeria({
    categoria: "Journal"
})
// Añadir fotos a galería
galeria.aggFotos(...fotosLista)

const galleryContainer = document.querySelector(".gallery-gen")
galeria.renderFotos()

// Offcanvas menu
ddMenuMobile()

// Fx para navegar la galería
function prevSwipe(itemID, photoInfo, imgModal){
    //console.log(itemID)
    let foto = galeria.fotos.filter(foto => foto.id == itemID);
    //let info = galeria.fotos.find(foto => `${foto.place}, ${foto.year}` == photoInfo)
    let fotoUsar = foto[0]
    //console.log(fotoUsar.url)
    photoInfo = `${fotoUsar.name}, ${fotoUsar.place}`
    imgModal.src = fotoUsar.url
    pieDeFoto.innerHTML = photoInfo
    
}
function nextSwipe(itemID, photoInfo, imgModal){
    //console.log(itemID)
    let foto = galeria.fotos.filter(foto => foto.id == itemID);
    let fotoUsar = foto[0]
    //console.log(fotoUsar.url)
    imgModal.src = fotoUsar.url

    photoInfo = `${fotoUsar.name}, ${fotoUsar.place}`
    imgModal.src = fotoUsar.url
    pieDeFoto.innerHTML = photoInfo
    
}


// Modales
const modalDialog = document.querySelector("#modal-dialog");
const openModal = document.querySelectorAll(".openModal");


openModal.forEach(item=>{
    item.addEventListener('click', ()=>{
        let url = getComputedStyle(item).backgroundImage.slice(4, -1).replace(/"/g, "")
        modalDialog.classList.remove("nodisplay")
        modalDialog.showModal()

        modalDialog.innerHTML = `
            <button id="closeModal"  style="width: 100px; height: 50px;"><i class="bi bi-x-lg"></i></button>
            <div style="display:grid; grid-template-columns: 1fr; grid-template-rows: fit-content 1fr">

            <img id="img-modal" src=${url} alt="" style="max-height: 90vh;
            width: auto; max-width: 85%; justify-self: center; align-self: end; border-radius: 10px; transition: all 1s ease-in">
            
            <span id="pieDeFoto" class="text-white text-center text-uppercase mt-3">${item.getAttribute('data-info')}</span>
            </div>

            <button class="prev"><i class="bi bi-caret-left-fill icon-size"></i></button>
            <button class="next"><i class="bi bi-caret-right-fill icon-size"></i></button>
            
        `

        
        const prev = document.querySelector(".prev")
        const next = document.querySelector(".next")
        const imgModal = document.querySelector("#img-modal")
        const pieDeFoto = document.querySelector("#pieDeFoto")
        
        

        let itemID = item.id; 
        let photoInfo = item.getAttribute('data-info')
        prev.addEventListener('click', ()=>{
            itemID = parseInt(itemID) > 1 ? parseInt(itemID) - 1 : galeria.fotos.length;
            prevSwipe(itemID, photoInfo, imgModal)
            
        }, {passive: true})
        next.addEventListener('click', ()=>{
            itemID = parseInt(itemID) < galeria.fotos.length ? parseInt(itemID) + 1 : 1;
            nextSwipe(itemID, photoInfo, imgModal)
            
        }, {passive: true})
        
       
        const closeModal = document.querySelector("#closeModal")
        closeModal.addEventListener('click', (event)=>{
            modalDialog.close()
            modalDialog.innerHTML = ""
            modalDialog.classList.add("nodisplay")        
        }, {passive: true})
        

       
        // Crea una nueva instancia de Hammer en tu imagen modal
        var hammertime = new Hammer(imgModal);

        // Agrega un listener para el evento swipeleft
        hammertime.on('swipeleft', function(e) {
            // Muestra la siguiente imagen
            itemID = parseInt(itemID) < galeria.fotos.length ? parseInt(itemID) + 1 : 1;
                nextSwipe(itemID, photoInfo, imgModal)

        });

        // Agrega un listener para el evento swiperight
        hammertime.on('swiperight', function(e) {
            // Muestra la imagen anterior
            itemID = parseInt(itemID) > 1 ? parseInt(itemID) - 1 : galeria.fotos.length;
            prevSwipe(itemID, photoInfo, imgModal)
                  
        });
    }, {passive: true})
})

