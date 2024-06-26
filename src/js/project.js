
import { getProjectsList } from "./allProjects.js"
import { ddMenuMobile, navbarStillsResponsive, offcanvasActiveItem } from "./layoutElements.js"

navbarStillsResponsive()
offcanvasActiveItem()


//const titleProject = document.querySelector(".projectTitle")
const titleProject = document.querySelector("#titulo")
const prev = document.querySelector("#prev")
const next = document.querySelector("#next")

let projectsListName = document.title;
//console.log("titulo de la pag", projectsListName)
let projectsList = getProjectsList(projectsListName)
let prLista = []
projectsList.forEach((pr)=>{
    prLista.push(pr)
})

let itemID = 0
if (localStorage.getItem('projectID')){
    itemID = localStorage.getItem('projectID'); 
}
//console.log(parseInt(itemID))
//console.log("Lista de proyectos", projectsList)

// No usar estas dos fx
function saveProjectTitle(){
    item.addEventListener('click', ()=>{
        let idProject = item.querySelector(".project-title-gallery h2")
        /* //console.log(idProject.innerText) */
        localStorage.setItem('project', idProject.innerText) // Se crea una variable en el local storage, y se le asigna el título del proyecto como valor

    })
}

function goToProject(){
    const projects = document.querySelectorAll(".project")

    projects.forEach(
        (project) => {
            project.addEventListener('click', ()=>{
                window.location.href = "./project.html"
            })
        }
    )
}

ddMenuMobile()

const videoContainer = document.querySelector("iframe")
function renderVideo(){
    let project = localStorage.getItem('project')
    //titleProject.innerText = project
    
    // Obtén los proyectos anterior y siguiente
    let idPrev = parseInt(itemID) > 0 ? parseInt(itemID) - 1 : prLista.length-1 ;
    let idNext = parseInt(itemID) < prLista.length ? parseInt(itemID) + 1 : 1;
    let prevProject = prLista[parseInt(idPrev)]
    let nextProject = prLista[parseInt(idNext)]

    // Cambia el texto de los botones con los títulos de los proyectos
    if (prevProject) {
        prev.innerHTML = `<i class="bi bi-caret-left-fill a-stills"></i><span >${prevProject.title}</span>`
    } else {
        prev.innerText = "No hay proyecto anterior"
    }

    if (nextProject) {
        next.innerHTML = `${nextProject.title} <i class="bi bi-caret-right-fill a-stills"></i>`
    } else {
        next.innerHTML = `${prLista[0].title} <i class="bi bi-caret-right-fill a-stills"></i>` // Esto es provisional, creo :v
    }

    let currentProject = prLista.find((item)=>item.id == itemID)
    let videoURL = currentProject.urlvideo

    // Esta parte permite insertar el nombre del proyecto en el título responsive, usando la etiqueta <br> (sin que aparezca literalmente en el texto)
    titleProject.innerHTML = ""
    let t = document.title
    /* if(currentProject.title != "Journal" || currentProject.title != "Series"){
        console.log("pag",currentProject.title)
        titleProject.insertAdjacentHTML("afterbegin", `<h2 class="d-sm-inline-block d-md-none projectTitle  text-uppercase fs-5 " style="font-family: 'BDSans-Black'; color: var(--main-color-golden); ">${t}</h2>`) 
    } */
    titleProject.insertAdjacentHTML("afterbegin", `<h2 class="d-sm-inline-block d-md-none projectTitle  text-uppercase fs-5 " style="font-family: 'BDSans-Black'; color: var(--main-color-golden); ">${currentProject.title}</h2>`) 

    //console.log("video container", videoContainer)
    
    videoContainer.src = videoURL

}

renderVideo()


prev.addEventListener('click', ()=>{
    itemID = parseInt(itemID) > 0 ? parseInt(itemID) - 1 : prLista.length-1 ;
    //console.log("Retrocede desde",itemID)
    let project = prLista[parseInt(itemID)] // Aquí cambiamos itemID - 1 por itemID
   
    if (project !== undefined) {
        localStorage.setItem('projectID',project.id)
        localStorage.setItem('project',project.title)
        localStorage.setItem('projectURL',project.urlvideo)
        renderVideo()
    } else {
        //console.log('No hay proyecto en el índice', itemID);
    }
})

next.addEventListener('click', ()=>{
    itemID = parseInt(itemID) < prLista.length - 1 ? parseInt(itemID) + 1 : 0;

    //console.log("Avanza desde",itemID)
    let project = prLista[parseInt(itemID)] // Aquí cambiamos itemID - 1 por itemID
    if (project !== undefined) {
        localStorage.setItem('projectID',project.id)
        localStorage.setItem('project',project.title)
        localStorage.setItem('projectURL',project.urlvideo)
        renderVideo()
    } else {
        //console.log('No hay proyecto en el índice', itemID);
    }
    
})