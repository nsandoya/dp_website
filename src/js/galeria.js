// HTML elements
const galleryContainer = document.querySelector(".gallery-gen")
const galeriaGen = document.querySelector(".gallery-gen img")
const imgSlidewhow = document.querySelector(".modal-container img")
let x = window.matchMedia("(min-width: 1000px)")
const modal = document.querySelector(".modal-container")

class Foto{
    constructor({id, name, year="", place= "", url}){
        this.id = id,
        this.name = name,
        this.year = year,
        this.place = place,
        this.url = url
    }

    aggUrl(){
        this.url = `../src/img/${this.name}.png`
    }
}

class Galeria{
    constructor({fotos=[], categoria=""}){
        this.fotos = fotos,
        this.categoria = categoria
    }

    aggFotos(...foto){
        this.fotos.push(...foto);
    }

    renderFotos(listaParaRender = this.fotos){
        galleryContainer.innerHTML = ""
        listaParaRender.forEach(
            (foto)=>{
                console.log(foto.id) 
                let fotoUrl = foto.url
                galleryContainer.innerHTML += `<div id=${foto.id} class="m col-sm-6 col-md-4 mt-2  img-gallery" style="background-image: url(${fUrl});" data-bs-toggle="modal" data-bs-target="#modal1" aria-hidden="true">
                <img src=${fotoUrl} class="noModal imgGallery" alt="">
                </div>`
        })
    }
}

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
    new Foto({
        id: "10",
        name: "por_un_momento",

    }),
]
// Añadir urls a c/foto
fotosLista.forEach((f)=>{
    f.aggUrl()
})
// Crear galería
const galeria = new Galeria({
    categoria: "Mirada en Pausa"
})
// Añadir fotos a galería
galeria.aggFotos(...fotosLista)

console.log(galeria.fotos)
galeria.renderFotos()

let current_img = ""
let imgModal = ""

// Para activar o no el modal de galería, según el tamaño de pantalla
/* const mediaQ = function (x) {
    if (x.matches) { // If media query matches
        modal.classList.add("noModal")
    }else{
        modal.classList.remove("noModal")
        
    }
  }


x.addEventListener('change', mediaQ)
mediaQ(x) */

let prevBtn = modal.querySelector("#prevButton")
    let nextBtn = modal.querySelector("#nextButton")
    let img = modal.querySelector("img")
    /* let tgt = e.target */

    // Agregar funcionalidad a los botones
    prevBtn.addEventListener('click', function() {
        current_img = parseInt(current_img) > 1 ? parseInt(current_img) - 1 : galeria.fotos.length;
        console.log(current_img)
        let foto = galeria.fotos.filter(foto => foto.id == current_img);
        console.log(...foto)
        let fotoUsar = foto[0]

        imgSlidewhow.src = fotoUsar.url
    });

    nextBtn.addEventListener('click', function() {
        current_img = parseInt(current_img) < galeria.fotos.length ? parseInt(current_img) + 1 : 1;
        console.log(current_img)
        let foto = galeria.fotos.filter(foto => foto.id == current_img);
        console.log(...foto)
        let fotoUsar = foto[0]
        
        imgSlidewhow.src = fotoUsar.url
    });


let g = document.querySelectorAll(".gallery-gen div")
console.log("divs generados", g)

g.forEach(imgDiv => {
    imgDiv.addEventListener('click', (event) =>{
        current_img = event.target.id
        console.log("Current id", current_img)

        let r = galeria.fotos.filter(
            foto => current_img == foto.id
        )

        let img = r[0] 
        let imgModal = modal.querySelector("img")
        imgModal.src = img.url
    })

    
})
