
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

/* itemID = parseInt(itemID) > 0 ? parseInt(itemID) - 1 : prLista.length-1 ;
console.log("Retrocede desde",itemID)
let project = prLista[parseInt(itemID)]
prev.innerText = prLista[parseInt(itemID) -1].title
next.innerText = prLista[parseInt(itemID) +1].title */

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

const videoContainer = document.querySelector(".gallery-gen")
function renderVideo(){
    let project = localStorage.getItem('project')
    titleProject.innerText = project
    //prev.innerText = prLista[parseInt(itemID)-1].titulo

    let videoURL = localStorage.getItem('projectURL')
    videoContainer.innerHTML = ""
    videoContainer.innerHTML += videoURL /* + `<button id="prev" class="mt-5">Prev</button> <button>Next</button>` */

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
 //let project = prLista.filter((pr)=> pr.id == parseInt(itemID))
    //let projectToUse = project[0]
    /* console.log(itemID)
    console.log(prLista[parseInt(itemID)])
    console.log(project[0].urlvideo)
*/  

/* next.addEventListener('click', ()=>{
    itemID = parseInt(itemID) < galeria.fotos.length ? parseInt(itemID) + 1 : 1;
    console.log(itemID)
    let foto = galeria.fotos.filter(foto => foto.id == itemID);
    let fotoUsar = foto[0]
    console.log(fotoUsar.url)
    imgModal.src = fotoUsar.url
    
}) */