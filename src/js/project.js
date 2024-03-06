
/* let prAnt = prLista[parseInt(itemID)-1]
let prSig = prLista[parseInt(itemID)+1]

console.log("Pr ant", prAnt, "Pr sig", prSig) */

const titleProject = document.querySelector(".projectTitle")
const prev = document.querySelector("#prev")
const next = document.querySelector("#next")

let projectsList = localStorage.getItem('projectsList')
projectsList = JSON.parse(projectsList)
let prLista = []
projectsList.forEach((pr)=>{
    prLista.push(pr)
})

let itemID = localStorage.getItem('projectID'); 
console.log(parseInt(itemID))


function saveProjectTitle(){
    item.addEventListener('click', ()=>{
        let idProject = item.querySelector(".project-title-gallery h2")
        /* console.log(idProject.innerText) */
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

const videoContainer = document.querySelector("iframe")
function renderVideo(){
    let project = localStorage.getItem('project')
    titleProject.innerText = project
    
    // Obtén los proyectos anterior y siguiente
    let idPrev = parseInt(itemID) > 0 ? parseInt(itemID) - 1 : prLista.length-1 ;
    let idNext = parseInt(itemID) < prLista.length ? parseInt(itemID) + 1 : 1;
    let prevProject = prLista[parseInt(idPrev)]
    let nextProject = prLista[parseInt(idNext)]

    // Cambia el texto de los botones con los títulos de los proyectos
    if (prevProject) {
        prev.innerHTML = `<i class="bi bi-caret-left-fill a-stills"></i> ${prevProject.title}`
    } else {
        prev.innerText = "No hay proyecto anterior"
    }

    if (nextProject) {
        next.innerHTML = `${nextProject.title} <i class="bi bi-caret-right-fill a-stills"></i>`
    } else {
        next.innerHTML = `${prLista[0].title} <i class="bi bi-caret-right-fill a-stills"></i>` // Esto es provisional, creo :v
        //next.innerText = "No hay proyecto siguiente"
    }


    let videoURL = localStorage.getItem('projectURL')
    console.log(videoContainer, "link a cargar", videoURL)
    videoContainer.src = videoURL
    //videoContainer.innerHTML = ""
    //videoContainer.insertAdjacentHTML("beforeend", videoURL)
    //videoContainer.innerHTML += videoURL /* + `<button id="prev" class="mt-5">Prev</button> <button>Next</button>` */

}

renderVideo()


prev.addEventListener('click', ()=>{
    itemID = parseInt(itemID) > 0 ? parseInt(itemID) - 1 : prLista.length-1 ;
    console.log("Retrocede desde",itemID)
    let project = prLista[parseInt(itemID)] // Aquí cambiamos itemID - 1 por itemID
   
    if (project !== undefined) {
        localStorage.setItem('projectID',project.id)
        localStorage.setItem('project',project.title)
        localStorage.setItem('projectURL',project.urlvideo)
        renderVideo()
    } else {
        console.log('No hay proyecto en el índice', itemID);
    }
})

next.addEventListener('click', ()=>{
    itemID = parseInt(itemID) < prLista.length - 1 ? parseInt(itemID) + 1 : 0;

    console.log("Avanza desde",itemID)
    let project = prLista[parseInt(itemID)] // Aquí cambiamos itemID - 1 por itemID
    /* console.log("proyecto signt", project.title) */
    if (project !== undefined) {
        localStorage.setItem('projectID',project.id)
        localStorage.setItem('project',project.title)
        localStorage.setItem('projectURL',project.urlvideo)
        renderVideo()
    } else {
        console.log('No hay proyecto en el índice', itemID);
    }
    /* console.log(itemID)
    let foto = galeria.fotos.filter(foto => foto.id == itemID);
    let fotoUsar = foto[0]
    console.log(fotoUsar.url)
    imgModal.src = fotoUsar.url
     */
})