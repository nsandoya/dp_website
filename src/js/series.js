import { Foto } from "./galeria.js"
import { Galeria } from "./galeria.js"
import { ddMenuMobile, navbarStillsResponsive, offcanvasActiveItem } from "./layoutElements.js"


localStorage.setItem('projectsCategory', "stills") 

// Navbar responsive
navbarStillsResponsive()
offcanvasActiveItem()
ddMenuMobile()

const stills = document.querySelector(".ddm-click")
stills.classList.add("n-active-offcanvas")

// Crear lista de fotos
const fotosLista = [
    new Foto({
        id: "1",
        name: "mep_1",
        /* year: 2024,
        place: "Daule" */
    }),
    new Foto({
        id: "2",
        name: "mep_2",
        /* year: 2023,
        place: "Tena" */

    }),
    new Foto({
        id: "3",
        name: "mep_3",
        /* year: 2022,
        place: "Riobamba" */

    }),
    new Foto({
        id: "4",
        name: "mep_4",
        /* year: 2021,
        place: "Cuenca" */

    }),
    new Foto({
        id: "5",
        name: "mep_5",
        /* year: 2021,
        place: "Quito" */

    }),
    new Foto({
        id: "6",
        name: "mep_6",
        /* year: 2023,
        place: "Sao Paulo" */

    }),
    new Foto({
        id: "7",
        name: "mep_7",
        /* year: 2018,
        place: "Guayaquil" */

    }),
    new Foto({
        id: "8",
        name: "mep_8",
        /* year: 2022,
        place: "Chicago" */
    }),
    new Foto({
        id: "9",
        name: "mep_9",
        /* year: 2020,
        place: "Guayaquil" */
    }),
    /* new Foto({
        id: "10",
        name: "por_un_momento",

    }), */
]

const fotosListaAct = []

function subirFotos(fotosLista, numeroDeFotos){
    for(let i = 1; i<=numeroDeFotos; i++){
        let foto = new Foto({
            id: i,
            name: `mep_${i}`
        })
        fotosLista.push(foto)
    }
}

subirFotos(fotosListaAct, 32)
console.log("fotos nuevas",fotosListaAct)
// Añadir urls a c/foto
fotosListaAct.forEach((foto)=>{
    foto.aggUrlSeries()
})
// Crear galería
const galeria = new Galeria({
    categoria: "Series"
})
// Añadir fotos a galería
galeria.aggFotos(...fotosListaAct)

const galleryContainer = document.querySelector(".gallery-gen")
galeria.renderFotos()

// Fx para navegar la galería
function prevSwipe(itemID, photoInfo, imgModal){
    //itemID = parseInt(itemID) > 1 ? parseInt(itemID) - 1 : galeria.fotos.length;
    console.log(itemID)
    let foto = galeria.fotos.filter(foto => foto.id == itemID);
    //let info = galeria.fotos.find(foto => `${foto.place}, ${foto.year}` == photoInfo)
    let fotoUsar = foto[0]
    //console.log(fotoUsar.url)
    photoInfo = `${fotoUsar.place} ${fotoUsar.year}` // Añadirle luego la coma 
    imgModal.src = fotoUsar.url
    pieDeFoto.innerHTML = photoInfo
    
}
function nextSwipe(itemID, photoInfo, imgModal){
    //itemID = parseInt(itemID) < galeria.fotos.length ? parseInt(itemID) + 1 : 1;
    console.log(itemID)
    let foto = galeria.fotos.filter(foto => foto.id == itemID);
    let fotoUsar = foto[0]
    console.log(fotoUsar.url)
    imgModal.src = fotoUsar.url

    photoInfo = `${fotoUsar.place} ${fotoUsar.year}` // Añadirle luego la coma 
    imgModal.src = fotoUsar.url
    pieDeFoto.innerHTML = photoInfo
    
}


// Modales
const modalDialog = document.querySelector("#modal-dialog");
const openModal = document.querySelectorAll(".openModal");


/* console.log(openModal) */
openModal.forEach(item=>{
    item.addEventListener('click', ()=>{
        let width = "85%"

        let url = getComputedStyle(item).backgroundImage.slice(4, -1).replace(/"/g, "")
        modalDialog.classList.remove("nodisplay")
        modalDialog.showModal()

        modalDialog.innerHTML = `
            <button id="closeModal"  style="width: 100px; height: 50px;"><i class="bi bi-x-lg"></i></button>
            <div style="display:grid; grid-template-columns: 1fr; grid-template-rows: fit-content 1fr">

            <img id="img-modal" src=${url} alt="" style="max-height: 100vh;
            width: auto; max-width: 85%; justify-self: center; align-self: end; border-radius: 10px; transition: all 1s ease-in">
            
            <span id="pieDeFoto" class="text-white text-center text-uppercase mt-3">${item.getAttribute('data-info')}</span>
            </div>

            <button class="prev"><i class="bi bi-caret-left-fill icon-size"></i></button>
            <button class="next"><i class="bi bi-caret-right-fill icon-size"></i></button>
            
        `

        /* console.log("alto de pantalla",window.innerHeight)
        let height = window.innerHeight
        height = height * 10 / 100
        let img = document.querySelector("#img-modal")
        console.log("alto de imagen",getComputedStyle(img).height)
        if(height < 1000){

            width = window.innerWidth
            width = width * 10 / 100
            console.log("ancho de pantalla", width)
        } */
        
        const prev = document.querySelector(".prev")
        const next = document.querySelector(".next")
        const imgModal = document.querySelector("#img-modal")
        const pieDeFoto = document.querySelector("#pieDeFoto")
        
        

        let itemID = item.id; 
        let photoInfo = item.getAttribute('data-info')
        prev.addEventListener('click', ()=>{
            itemID = parseInt(itemID) > 1 ? parseInt(itemID) - 1 : galeria.fotos.length;
            prevSwipe(itemID, photoInfo, imgModal)
            /* itemID = parseInt(itemID) > 1 ? parseInt(itemID) - 1 : galeria.fotos.length;
            console.log(itemID)
            let foto = galeria.fotos.filter(foto => foto.id == itemID);
            //let info = galeria.fotos.find(foto => `${foto.place}, ${foto.year}` == photoInfo)
            let fotoUsar = foto[0]
            //console.log(fotoUsar.url)
            photoInfo = `${fotoUsar.place}, ${fotoUsar.year}`
            imgModal.src = fotoUsar.url
            pieDeFoto.innerHTML = photoInfo */
            
        })
        next.addEventListener('click', ()=>{
            itemID = parseInt(itemID) < galeria.fotos.length ? parseInt(itemID) + 1 : 1;
            nextSwipe(itemID, photoInfo, imgModal)

            /* itemID = parseInt(itemID) < galeria.fotos.length ? parseInt(itemID) + 1 : 1;
            console.log(itemID)
            let foto = galeria.fotos.filter(foto => foto.id == itemID);
            let fotoUsar = foto[0]
            console.log(fotoUsar.url)
            imgModal.src = fotoUsar.url

            photoInfo = `${fotoUsar.place}, ${fotoUsar.year}`
            imgModal.src = fotoUsar.url
            pieDeFoto.innerHTML = photoInfo */
            
        })
        
       
        const closeModal = document.querySelector("#closeModal")
        closeModal.addEventListener('click', (event)=>{
            modalDialog.close()
            modalDialog.innerHTML = ""
            modalDialog.classList.add("nodisplay")        
        })
        

       /*  let startX = 0;  // Variable para almacenar la posición inicial del toque
        let threshold = 100;  // Distancia mínima para considerar el gesto como deslizamiento

        // Agrega event listeners para los eventos de toque
        imgModal.addEventListener('touchstart', e => {
            startX = e.changedTouches[0].clientX;
        });

        imgModal.addEventListener('touchend', e => {
            let endX = e.changedTouches[0].clientX;
            let diffX = startX - endX;

            // Si la diferencia es mayor que el umbral, considera el gesto como deslizamiento
            if (Math.abs(diffX) > threshold) {
                if (diffX > 0) {
                    // Deslizamiento hacia la izquierda, muestra la siguiente imagen
                    //nextSwipe(itemID, photoInfo, imgModal);
                    itemID = parseInt(itemID) < galeria.fotos.length ? parseInt(itemID) + 1 : 1;
                    console.log(itemID)
                    let foto = galeria.fotos.filter(foto => foto.id == itemID);
                    let fotoUsar = foto[0]
                    console.log(fotoUsar.url)
                    imgModal.src = fotoUsar.url

                    photoInfo = `${fotoUsar.place}, ${fotoUsar.year}`
                    imgModal.src = fotoUsar.url
                    pieDeFoto.innerHTML = photoInfo
                } else {
                    // Deslizamiento hacia la derecha, muestra la imagen anterior
                    //prevSwipe(itemID, photoInfo, imgModal);
                    itemID = parseInt(itemID) > 1 ? parseInt(itemID) - 1 : galeria.fotos.length;
                    console.log(itemID)
                    let foto = galeria.fotos.filter(foto => foto.id == itemID);
                    //let info = galeria.fotos.find(foto => `${foto.place}, ${foto.year}` == photoInfo)
                    let fotoUsar = foto[0]
                    //console.log(fotoUsar.url)
                    photoInfo = `${fotoUsar.place}, ${fotoUsar.year}`
                    imgModal.src = fotoUsar.url
                    pieDeFoto.innerHTML = photoInfo

                }
            }
        }); */
        // Crea una nueva instancia de Hammer en tu imagen modal
        var hammertime = new Hammer(imgModal);

        // Agrega un listener para el evento swipeleft
        hammertime.on('swipeleft', function(e) {
            // Muestra la siguiente imagen
            itemID = parseInt(itemID) < galeria.fotos.length ? parseInt(itemID) + 1 : 1;
                nextSwipe(itemID, photoInfo, imgModal)

                    /* console.log(itemID)
                    let foto = galeria.fotos.filter(foto => foto.id == itemID);
                    let fotoUsar = foto[0]
                    console.log(fotoUsar.url)
                    imgModal.src = fotoUsar.url

                    photoInfo = `${fotoUsar.place}, ${fotoUsar.year}`
                    imgModal.src = fotoUsar.url
                    pieDeFoto.innerHTML = photoInfo */
        });

        // Agrega un listener para el evento swiperight
        hammertime.on('swiperight', function(e) {
            // Muestra la imagen anterior
            itemID = parseInt(itemID) > 1 ? parseInt(itemID) - 1 : galeria.fotos.length;
            prevSwipe(itemID, photoInfo, imgModal)
                    /* console.log(itemID)
                    let foto = galeria.fotos.filter(foto => foto.id == itemID);
                    //let info = galeria.fotos.find(foto => `${foto.place}, ${foto.year}` == photoInfo)
                    let fotoUsar = foto[0]
                    //console.log(fotoUsar.url)
                    photoInfo = `${fotoUsar.place}, ${fotoUsar.year}`
                    imgModal.src = fotoUsar.url
                    pieDeFoto.innerHTML = photoInfo */
        });
    })
})