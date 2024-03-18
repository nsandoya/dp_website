import { getProjectGallery } from "./allProjects.js"
import { init_banner, dynamicFooter, ddMenuMobile, navbarResponsive, offcanvasActiveItem } from "./layoutElements.js"

document.addEventListener('DOMContentLoaded', (event) => {
    init_banner()

    const tituloBanner = document.querySelector(".name");
    const titulosBanner = tituloBanner.querySelectorAll("h1");

    if(window.innerWidth <= 720){
        //console.log("screen width detectado");
        titulosBanner.forEach((item)=>{
            item.classList.add("display-2");
        });
    }else{
        titulosBanner.forEach((item)=>{
            item.classList.add("display-4");
        });
    }
});


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
        localStorage.setItem('projectsCategory', "narrative") 
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


