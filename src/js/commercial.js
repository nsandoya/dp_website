import { getProjectGallery } from "./allProjects.js";
import { init_banner, dynamicFooter, ddMenuMobile, navbarResponsive, offcanvasActiveItem } from "./layoutElements.js"

//init_banner()

dynamicFooter()

ddMenuMobile()

navbarResponsive()

offcanvasActiveItem()


// Generar galería de proyectos
let commercial = getProjectGallery("commercial")
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

    item.addEventListener('click', ()=>{
        let titleProject = item.querySelector(".project-title-gallery h2")
        
        localStorage.setItem('project', titleProject.innerText) // Se crea una variable en el local storage, y se le asigna el título del proyecto como valor
        localStorage.setItem('projectsCategory', "commercial") 
        localStorage.setItem('projectID', titleProject.dataset.idproject)
    })

})

const projects = document.querySelectorAll(".project")

projects.forEach(
    (project) => {
        project.addEventListener('click', ()=>{
            window.location.href = "./projects-commercial.html"
        })
    }
)