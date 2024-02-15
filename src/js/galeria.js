// HTML elements
const galleryContainer = document.querySelector(".gallery-gen")
const galeriaGen = document.querySelector(".gallery-gen img")
const modal = document.querySelector(".modal-container")
const imgSlidewhow = document.querySelector(".modal-container img")

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
        /* const galleryContainer = document.querySelector(".gallery-gen") */
        galleryContainer.innerHTML = ""
        listaParaRender.forEach(
            (foto)=>{
                console.log(foto.id) 
                let fUrl = foto.url
                galleryContainer.innerHTML += `<div id=${foto.id} class="m col-sm-6 col-md-4 mt-2  img-gallery" style="background-image: url(${fUrl});" data-bs-toggle="modal" data-bs-target="#modal1" aria-hidden="true">
                <img src=${fUrl} class="noModal imgGallery" alt="">
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

/* let closeArea = modal.querySelector(".modal::after")
closeArea.addEventListener('click', function(){
    if(modal.classList.contains("active")){
        modal.classList.remove("active") 
        modal.classList.add("noModal") 
    }
}) */

/* modal.addEventListener('click', (e)=>{
    let prevBtn = modal.querySelector("#prevButton")
    let nextBtn = modal.querySelector("#nextButton")
    let img = modal.querySelector("img")
    let tgt = e.target
    const closeBtn = modal.querySelector("#closeButton")

    closeBtn.addEventListener('click', function(){
        if(modal.classList.contains("active")){
            modal.classList.remove("active") 
            modal.classList.add("noModal") 
        }
    })
    

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
})


let g = document.querySelectorAll(".gallery-gen div")
console.log("divs generados", g)

g.forEach(imgDiv => {
    imgDiv.addEventListener('click', (event) =>{
        if(!modal.classList.contains("active")){
            modal.classList.remove("noModal")
            modal.classList.add("active")
            
        }

        current_img = event.target.id
        console.log("Current id", current_img)

        let r = galeria.fotos.filter(
            foto => current_img == foto.id
        )

        let img = r[0] 
        let imgModal = modal.querySelector("img")
        imgModal.src = img.url
    })

    
}) */



// Modal para c/foto seleccionada
/* document.querySelectorAll(".m").forEach(function(e){
    e.addEventListener('click', function(sEvent){
        let master = this
        console.log("master element", master.innerHTML)
        let idFoto = this.id
        console.log("Foto seleccionada",idFoto)
        sEvent.stopPropagation();
        
        if(!this.classList.contains("active")){
            this.classList.add("modal-container");
            this.classList.add("active");

            let r = galeria.fotos.filter(
                foto => idFoto == foto.id
            )

            console.log("resultado", ...r)
            let fotoParaModal = r[0]
            this.innerHTML = `<button id="prevButton"><</button>
            <img src="${fotoParaModal.url}" class="${idFoto} imgGallery img-gallery" alt="">
            <button id="nextButton">></button>`    

            // Agregar funcionalidad a los botones
            document.getElementById("prevButton").addEventListener('click', function() {
                idFoto = parseInt(idFoto) > 1 ? parseInt(idFoto) - 1 : galeria.fotos.length;
                console.log(idFoto)
                let foto = galeria.fotos.filter(foto => foto.id == idFoto);
                console.log(...foto)
                let fotoUsar = foto[0]
                console.log("Foto presente", document.getElementsByClassName(`${idFoto}` ))
                document.getElementsByClassName(`${idFoto}`).src = fotoUsar.url;
                console.log(fotoUsar.url)
                
            });

            document.getElementById("nextButton").addEventListener('click', function() {
                idFoto = parseInt(idFoto) < galeria.fotos.length ? parseInt(idFoto) + 1 : 1;
                console.log(idFoto)
                let foto = galeria.fotos.filter(foto => foto.id == idFoto);
                console.log(...foto)
                let fotoUsar = foto[0]
                
                document.getElementsByClassName(`${idFoto}`).src = fotoUsar.url;
                console.log(fotoUsar.url)
            });

            document.querySelector(".imgGallery").addEventListener('click', function(e) {
                if (!e.target === this) {
                    this.classList.remove("active");
                    this.classList.remove("imgGallery");
                    this.innerHTML = ""
                    }
                        })
                    }
                });
            
}) */



/* const prevBtn = document.querySelector("#prevButton");
            prevBtn.addEventListener('click', ()=>{
                console.log("index original", idFoto)
                idFoto = parseInt(this.id)
                idFoto -= 1
                console.log("nuevo index", idFoto) 
            })
const nextBtn = document.querySelector("#prevButton");
nextBtn.addEventListener('click', ()=>{
    console.log("index original", idFoto)
    idFoto = parseInt(this.id)
    idFoto += 1
    console.log("nuevo index", idFoto) 
}) */