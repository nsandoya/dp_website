
import { Galeria } from "./galeria.js"
import { Project } from "./galeria.js"
import { ProjectGallery } from "./galeria.js"

/* const video = document.querySelector(".video-container video")
const videoC = document.querySelector(".video-container")
const videoContainer = document.querySelector(".video-container") */
/* const c = document.querySelector(".imgContainer") */

function init_banner(){
    const banner = document.querySelector(".init_banner")
    setTimeout(()=>{
        //banner.classList.remove("init_banner")
        banner.classList.add("init_banner_close")
        //banner.innerHTML=""
    }, 1000)
    
}
init_banner()

window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // El usuario ha llegado al final de la página, cambia el color de fondo del footer
        document.querySelector("footer").classList.remove("footer-hide-bg");
        document.querySelector(".email").classList.remove("footer-hide-text");
        let rrss = document.querySelectorAll(".rrss");
        rrss.forEach((item) =>{
            item.classList.remove("footer-text-initial")
        })
    }else{
        document.querySelector("footer").classList.add("footer-hide-bg");
        document.querySelector(".email").classList.add("footer-hide-text");
        let rrss = document.querySelectorAll(".rrss");
        rrss.forEach((item) =>{
            item.classList.add("footer-text-initial")
        })
    }
};

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
        title: "por un momento",
        urlvideo: "https://www.youtube.com/embed/1qnTlIzQ_DI?si=rebqJVINFN6uhHam"
    }),
    new Project({
        name: "junior",
        title: "junior",
        urlvideo: "https://player.vimeo.com/video/544380025?h=aa97d4f317"
        
    }),
    new Project({
        name: "nada_bello",
        title: "nada bello",
        urlvideo: "https://www.youtube.com/embed/qWlLdZ3_6aQ?si=ekPxTuapgRrYBMIk"
    }),
    new Project({
        name: "las_maravillas",
        title: "las maravillas",
        urlvideo: "https://player.vimeo.com/video/410875955?h=3e56b19d9d"
    }),
    new Project({
        name: "nuria",
        title: "nuria",
        urlvideo: "https://player.vimeo.com/video/327855828?h=fef8973628"
    }),

]


// Añadir ids y urls a los proyectos creados
function addID(){
    let id = 0;
    projectsList.forEach((project)=>{
        project.id = id;
        id += 1;
    })
}
addID()

narrative.addProjects(...projectsList);


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



/* const c = document.querySelectorAll(".project")
c.forEach(
    (item)=>{
        item.addEventListener('click')
    }
) */
const projects = document.querySelectorAll(".project")

projects.forEach(
    (project) => {
        project.addEventListener('click', ()=>{
            window.location.href = "./projects-narrative.html"
        })
    }
)
/* if(user){
    console.log(user);
    localStorage.setItem('isLogged', true) // Se crea una variable en el local storage, y se le asigna 'true' como valor
    localStorage.setItem('userName', userInput.value) // Se crea una variable en el local storage, y se le asigna el usuario como valor
    window.location.href = "./reproductor.html"
}else alert("Usuario/Contraseña incorrecto(s)") */




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


