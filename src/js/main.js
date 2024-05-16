import { getProjectGallery } from "./allProjects.js"
import { init_banner, dynamicFooter, ddMenuMobile, navbarResponsive, offcanvasActiveItem} from "./layoutElements.js"

// Calcula la altura de la ventana gráfica
let vh = window.innerHeight * 0.01;
// Establece la propiedad --vh en el documento
document.documentElement.style.setProperty('--vh', `${vh}px`);

/* document.addEventListener("DOMContentLoaded", function() {
    //adjustBannerSize()
}) */
init_banner()

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
export function touchTitle(lastTouchedTitle,item){
    item.addEventListener('touchstart', ()=>{
        //console.log("Cambio en el título (touch)")
        let title = item.querySelector(".project-title-gallery h2");
        title.classList.add("project-title-transition");

        if (lastTouchedTitle && lastTouchedTitle !== title) {
            lastTouchedTitle.classList.add("no-display-title");
        }
        
        title.classList.remove("no-display-title");
        lastTouchedTitle = title;
    }/* , {passive: true} */)

}


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
    }/* , {passive: true} */)

    
    item.addEventListener('click', ()=>{
        let titleProject = item.querySelector(".project-title-gallery h2")
        
        localStorage.setItem('project', titleProject.innerText) // Se crea una variable en el local storage, y se le asigna el título del proyecto como valor
        //localStorage.setItem('projectsCategory', "narrative") 
        localStorage.setItem('projectID', titleProject.dataset.idproject)
    }/* , {passive: true} */)

})


const projects = document.querySelectorAll(".project")

projects.forEach(
    (project) => {
        project.addEventListener('click', ()=>{
            window.location.href = "./projects-narrative.html"
        })
    }
)


