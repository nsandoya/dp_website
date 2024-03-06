
import { Galeria } from "./galeria.js"
import { Project } from "./galeria.js"
import { ProjectGallery } from "./galeria.js"
/* const video = document.querySelector(".video-container video")
const videoC = document.querySelector(".video-container")
const videoContainer = document.querySelector(".video-container") */
/* const c = document.querySelector(".imgContainer") */



// Generar galerías de proyectos
const narrative = new ProjectGallery(
    {
        category: "Narrative"
    }
)


// Añadir listas de proyectos a cada galeria
const projectsList = [
    new Project({
        name: "por_un_momento",
        title: "Por un momento"
    }),
    new Project({
        name: "junior",
        title: "Junior"
    }),
    new Project({
        name: "nada_bello",
        title: "Nada bello"
    }),
    new Project({
        name: "las_maravillas",
        title: "Las maravillas"
    }),
    new Project({
        name: "nuria",
        title: "Nuria"
    }),

]

narrative.addProjects(...projectsList);

// Añadir ids y urls a los proyectos creados
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
narrative.renderProjects()

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






/* projectTitle.addEventListener('mouseout', ()=>{
    projectTitle.classList.add("no-display-title")
}) */

/* c.addEventListener('mouseover', ()=>{
    c.classList.remove("displayImg")
    c.classList.add("nodisplayImg")
    videoC.classList.add("displayVideo")
    videoContainer.classList.remove("nodisplay")
    video.muted = true;
    video.play();

})
c.addEventListener('mouseout', ()=>{
    c.classList.add("displayImg")
    c.classList.remove("nodisplayImg")
    videoC.classList.remove("displayVideo")
    videoContainer.classList.add("nodisplay")

    video.pause();
    video.currentTime = 0;

}) */

/* c.addEventListener('click', ()=>{
    window.location.href = "./html/categoria.html"
}) */


