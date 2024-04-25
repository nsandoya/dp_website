import { getProjectGallery } from "./allProjects.js"
import { init_banner, dynamicFooter, ddMenuMobile, navbarResponsive, offcanvasActiveItem, touchTitle } from "./layoutElements.js"


dynamicFooter()

ddMenuMobile()

navbarResponsive()

offcanvasActiveItem()


// Generar galería de proyectos
let music = getProjectGallery("music")
music.renderProjects();

localStorage.setItem('projectsCategory', "music") 



// Mostrar u ocultar título de proyecto
const projectTitle = document.querySelectorAll(".project-title-gallery")

let lastTouchedTitle = null;
projectTitle.forEach(item => {
    item.addEventListener('touchstart', ()=>{
        //console.log("Cambio en el título (touch)")
        let title = item.querySelector(".project-title-gallery h2");
        title.classList.add("project-title-transition");

        if (lastTouchedTitle && lastTouchedTitle !== title) {
            lastTouchedTitle.classList.add("no-display-title");
        }
        
        title.classList.remove("no-display-title");
        lastTouchedTitle = title;
    })
    

    item.addEventListener('click', ()=>{
        let titleProject = item.querySelector(".project-title-gallery h2")
        localStorage.setItem('project', titleProject.innerText) // Se crea una variable en el local storage, y se le asigna el título del proyecto como valor
        localStorage.setItem('projectID', titleProject.dataset.idproject)
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