
const titleProject = document.querySelector(".projectTitle")

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
    
    let videoURL = localStorage.getItem('projectURL')
    videoContainer.innerHTML = ""
    videoContainer.innerHTML += videoURL /* + `<button id="prev" class="mt-5">Prev</button> <button>Next</button>` */

}


renderVideo()



let projectsList = localStorage.getItem('projectsList')
/* console.log("proyectos", projectsList) */
projectsList = JSON.parse(projectsList)
let prLista = []
projectsList.forEach((pr)=>{
    prLista.push(pr)
})

const prev = document.querySelector("#prev")
let itemID = localStorage.getItem('projectID'); 
console.log(parseInt(itemID))


prev.addEventListener('click', ()=>{
    itemID = parseInt(itemID) > 1 ? parseInt(itemID) - 1 : prLista.length ;
    console.log("Retrocede",itemID)
    console.log("Proyecto anterior", prLista[parseInt(itemID)-1])
    let project = prLista[parseInt(itemID)-1]
    //let project = prLista.filter((pr)=> pr.id == parseInt(itemID))
    //let projectToUse = project[0]
    /* console.log(itemID)
    console.log(prLista[parseInt(itemID)])
    console.log(project[0].urlvideo)
*/
    localStorage.setItem('projectID',project.id)
    localStorage.setItem('project',project.title)
    localStorage.setItem('projectURL',project.urlvideo) 
    renderVideo()
    //loadVideoPlayer()
    //window.location.href = "./project.html"
    //console.log("url",projectToUse.urlvideo)
   /*  imgModal.src = fotoUsar.url */
    
})
/* next.addEventListener('click', ()=>{
    itemID = parseInt(itemID) < galeria.fotos.length ? parseInt(itemID) + 1 : 1;
    console.log(itemID)
    let foto = galeria.fotos.filter(foto => foto.id == itemID);
    let fotoUsar = foto[0]
    console.log(fotoUsar.url)
    imgModal.src = fotoUsar.url
    
}) */