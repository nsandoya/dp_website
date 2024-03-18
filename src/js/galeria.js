/* import { oModal } from "./journey.js" */

// HTML elements
const galleryContainer = document.querySelector(".gallery-gen")
const galeriaGen = document.querySelector(".gallery-gen img")
const imgSlidewhow = document.querySelector(".modal-container img")

/* const modalDialog = document.querySelector("#modal-dialog");
const openModal = document.querySelectorAll(".openModal-dialog");
const closeModal = document.querySelector("#closeModal-dialog") */

let x = window.matchMedia("(min-width: 1000px)")
/* const modal = document.querySelector(".modal-container") */



export class Foto{
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
export class Project{
    constructor({id, name, title, year="", producer= "", role= "Director of Photography",url="", urlvideo=""}){
        this.id = id,
        this.name = name,
        this.title = title,
        this.year = year,
        this.producer = producer,
        this.role = role,
        this.url = url,
        this.urlvideo = urlvideo
    }

    addUrl(){
        this.url = `../src/img/${this.name}.png`
    }
}

export class ProjectGallery{
    constructor({projects=[], category}){
        this.projects = projects,
        this.category = category
    }

    addProjects(...projects){
        this.projects.push(...projects)
    }

    
    renderProjects(lista = this.projects){
        const contenedor = document.querySelector("main");
        
        
        contenedor.innerHTML = "";
        lista.forEach(
            (project)=>{
                console.log(project)
                let id = project.id
                let claseAux = ""
                if(project.title.toLowerCase() === "por un momento") {
                    claseAux = "pum"
                }else{
                    claseAux = ""
                }
                contenedor.innerHTML += `
                    <div id=${project.id} class="project-div project img-fluid ${claseAux} p-0 align-items-end img-container img-2" style="background-image: url(${project.url}); height: 100vh">
                        <div class="project-title-gallery container-fluid justify-content-center align-items-center" style="display: flex; height: 100%">
                            <h2 class="no-display-title project-title row mb-3 ms-3 text-light text-center text-uppercase display-1" style="font-family: 'BDSans-Black'; color: var(--main-color-white)" data-idProject='${project.id}'>
                                ${project.title}
                            </h2>
                        </div>
                    </div>
                `
             
                
            }
        )
    }
}



export class Galeria{
    constructor({fotos=[], categoria=""}){
        this.fotos = fotos,
        this.categoria = categoria
    }

    aggFotos(...foto){
        this.fotos.push(...foto);
    }

    renderFotos(listaParaRender = this.fotos){
        galleryContainer.innerHTML = "";
        listaParaRender.forEach(
            (foto)=>{
                console.log(foto.id) 
                
                galleryContainer.innerHTML += `<div id=${foto.id} class="openModal col-sm-1 col-md-4 mt-2 mx-1 img-gallery" data-info="${foto.place}, ${foto.year}" style="background-image: url(${foto.url});" >
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
    categoria: "Journey"
})
// Añadir fotos a galería
galeria.aggFotos(...fotosLista)

/* console.log(galeria.fotos) */
/* galeria.renderFotos() */

let current_img = ""
let imgModal = ""

