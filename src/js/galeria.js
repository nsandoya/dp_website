
// HTML elements
const galleryContainer = document.querySelector(".gallery-gen")
const galeriaGen = document.querySelector(".gallery-gen img")
const imgSlidewhow = document.querySelector(".modal-container img")

export class Foto{
    constructor({id, name, tag, year="", place= "", url}){
        this.id = id,
        this.name = name,
        this.tag = tag,
        this.year = year,
        this.place = place,
        this.url = url
    }

    aggUrl(){
        this.url = `../src/img/${this.name}.webp`
    }
    aggUrlJourney(){
        this.url = `../src/img/journal/${this.id}_${this.tag}.webp`
    }
    aggUrlSeries(){
        this.url = `../src/img/mirada_en_pausa/${this.name}.webp`
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
                //console.log(project)
                let id = project.id
                let claseAux = ""
                if(project.title.toLowerCase() === "por un momento" || project.title.toLowerCase() === "back to las maravillas") {
                    claseAux = "pum"
                }else{
                    claseAux = ""
                }

                contenedor.innerHTML += `
                    <div id=${project.id} class="project-div project img-fluid ${claseAux} p-0 align-items-end img-container img-2" style="background-image: url(${project.url}); height: 100vh;">
                        <div class="project-title-gallery container-fluid  align-items-center justify-content-center" style="display: flex; height: 100%; ">
                            
                                <h2 class="project-title no-display-title row mb-3 ms-0 ms-md-3 text-center text-uppercase display-1" style="font-family: 'BDSans-Black'; font-size: 2.5rem; color: var(--main-color-white);" data-idProject='${project.id}' >
                            
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
                //console.log(foto.id) 
                
                galleryContainer.innerHTML += `<div id=${foto.id} class="openModal col-sm-1 col-md-4 mt-2 mx-1 img-gallery" data-info="${foto.name}, ${foto.place}" style="background-image: url(${foto.url});" >           
                </div>`
                /* Añadirle luego la comita a data-info! */
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


let current_img = ""
let imgModal = ""

