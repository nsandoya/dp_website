import { getProjectGallery } from "./allProjects.js"
import { init_banner, dynamicFooter, ddMenuMobile, navbarResponsive, offcanvasActiveItem, titulosMobile, touchMobile } from "./layoutElements.js"

init_banner()
/* document.addEventListener('DOMContentLoaded', (event) => {

    
}); */

localStorage.setItem('projectsCategory', "narrative") 

dynamicFooter()

ddMenuMobile()

navbarResponsive()

offcanvasActiveItem()




// Generar galería de proyectos
let narrative = getProjectGallery("narrative")
narrative.renderProjects()


// Mostrar u ocultar título de proyecto
const projectTitle = document.querySelectorAll(".project-title-gallery")

projectTitle.forEach(item => {
    //console.log("Cacha los titulos?",item.innerHTML)
    // cambio de 'mouseover''mouseout' a 'touchstart''touchend'
    item.addEventListener('touchstart', ()=>{
        console.log("Cambio en el título (touch)")
        item.querySelector(".project-title-gallery h2").classList.add("project-title-transition");
        item.querySelector(".project-title-gallery h2").classList.remove("no-display-title");
        //item.style.transition = "all 0.3s cubic-bezier(.82,.42,.44,1) !important;"
    })
    item.addEventListener('touchend', ()=>{
        console.log("Cambio en el título (touch)")

        item.querySelector(".project-title-gallery h2").classList.add("no-display-title");
        /* item.querySelector(".project-title-gallery h2").classList.remove("project-title-transition"); */
    })

    
    item.addEventListener('click', ()=>{
        let titleProject = item.querySelector(".project-title-gallery h2")
        
        localStorage.setItem('project', titleProject.innerText) // Se crea una variable en el local storage, y se le asigna el título del proyecto como valor
        //localStorage.setItem('projectsCategory', "narrative") 
        localStorage.setItem('projectID', titleProject.dataset.idproject)
    })

})


const projects = document.querySelectorAll(".project")

projects.forEach(
    (project) => {
        project.addEventListener('click', ()=>{
            window.location.href = "./projects-narrative.html"
        })
    }
)


