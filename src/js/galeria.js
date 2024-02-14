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



document.querySelectorAll(".m").forEach(function(e){
    e.addEventListener('click', function(sEvent){
        let idFoto = this.id
        console.log(idFoto)
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
            this.innerHTML = `<img src="${fotoParaModal.url}" class="imgGallery img-gallery" alt="">`
        
        }else{
            this.classList.remove("active");
            this.classList.remove("modal-container");
            this.innerHTML = ""
        }
    })
})
