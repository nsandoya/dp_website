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
        const galleryContainer = document.querySelector(".gallery-gen")
        galleryContainer.innerHTML = ""
        listaParaRender.forEach(
            (foto)=>{
                console.log(foto.id) 
                let fUrl = foto.url
                galleryContainer.innerHTML += `<div id=${foto.id} class="m col-sm-6 col-md-4 mt-2  img-gallery" style="background-image: url(${fUrl});">
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


// Modal para c/foto seleccionada
document.querySelectorAll(".m").forEach(function(e){
    e.addEventListener('click', function(sEvent){
        let master = this
        console.log("master element", master.innerHTML)
        let idFoto = this.id
        console.log("Foto seleccionada",idFoto)
        sEvent.stopPropagation();
        /* let this = this.parentElement; */
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
                /* this.id = fotoUsar.id */
            });

            document.getElementById("nextButton").addEventListener('click', function() {
                idFoto = parseInt(idFoto) < galeria.fotos.length ? parseInt(idFoto) + 1 : 1;
                console.log(idFoto)
                let foto = galeria.fotos.filter(foto => foto.id == idFoto);
                console.log(...foto)
                let fotoUsar = foto[0]
                /* console.log("Foto presente", document.getElementByClass(`${idFoto}`)) */
                document.getElementsByClassName(`${idFoto}`).src = fotoUsar.url;
                console.log(fotoUsar.url)

                /* this.id = fotoUsar.id */

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
            /* else{
            this.classList.remove("active");
            this.classList.remove("modal-container");
            this.innerHTML = ""
        } */
})



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