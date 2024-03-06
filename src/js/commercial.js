import { Project } from "./galeria.js"
import { ProjectGallery } from "./galeria.js"

// Generar galería de proyectos
const commercial = new ProjectGallery(
    {
        categoria: "Commercial"
    }
)

// Añadir listas de proyectos a cada galeria
const projectsList = [
    new Project({
        name: "nada_bello",
        title: "Nada bello"
    }),
    new Project({
        name: "junior",
        title: "Junior"
    }),
    new Project({
        name: "por_un_momento",
        title: "Por un momento"
    }),
    new Project({
        name: "las_maravillas",
        title: "Las maravillas"
    }),

]

commercial.addProjects(...projectsList);


function addID(){
    let id = 0;
    projectsList.forEach((project)=>{
        project.id = id;
        id += 1;
    })
}
addID()

projectsList.forEach((project)=>{
    project.addUrl()
})

// Generar galería de proyectos
commercial.renderProjects()

// Mostrar u ocultar título de proyecto
const projectTitle = document.querySelectorAll(".project-title-gallery")

projectTitle.forEach(item => {
    console.log(item.innerHTML)
    item.addEventListener('mouseover', ()=>{
        item.querySelector(".project-title-gallery h2").classList.remove("no-display-title")
    })
    item.addEventListener('mouseout', ()=>{
        item.querySelector(".project-title-gallery h2").classList.add("no-display-title")
    })

})