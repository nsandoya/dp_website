import { Project } from "./galeria.js"
import { ProjectGallery } from "./galeria.js"

// Generar galería de proyectos
const music = new ProjectGallery(
    {
        categoria: "Commercial"
    }
)

// Añadir listas de proyectos a cada galeria
const projectsList = [
    new Project({
        name: "las_maravillas",
        title: "Las maravillas"
    }),
    new Project({
        name: "nada_bello",
        title: "Nada bello"
    }),
    new Project({
        name: "por_un_momento",
        title: "Por un momento"
    }),
    
]

music.addProjects(...projectsList);


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
music.renderProjects()

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

    item.addEventListener('click', ()=>{
        let titleProject = item.querySelector(".project-title-gallery h2")
        /* let project = projectsList.filter(project => titleProject.innerText == project.title)*/
        
        localStorage.setItem('project', titleProject.innerText) // Se crea una variable en el local storage, y se le asigna el título del proyecto como valor
        localStorage.setItem('projectID', titleProject.dataset.idproject)
    
        let projectURL = projectsList.filter((project) => parseInt(titleProject.dataset.idproject) == project.id)
        let lista = JSON.stringify(projectsList)
        localStorage.setItem('projectURL', projectURL[0].urlvideo)
        localStorage.setItem('projectsList', lista)
    })
})

const projects = document.querySelectorAll(".project")

projects.forEach(
    (project) => {
        project.addEventListener('click', ()=>{
            window.location.href = "./projects-music.html"
        })
    }
)