import { Galeria } from "./galeria.js"
import { Project } from "./galeria.js"
import { ProjectGallery } from "./galeria.js"

// Generar galerías de proyectos
const narrative = new ProjectGallery(
    {
        category: "Narrative"
    }
)
// Generar galería de proyectos
const commercial = new ProjectGallery(
    {
        categoria: "Commercial"
    }
)

// Añadir listas de proyectos a cada galeria
const narrativeProjectsList = [
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
narrative.addProjects(...narrativeProjectsList);

// Añadir listas de proyectos a cada galeria
const commercialProjectsList = [
    new Project({
        name: "nada_bello",
        title: "Nada bello"
    }),
    new Project({
        name: "junior",
        title: "Junior"
    }),
    new Project({
        name: "por_un_momento",
        title: "Por un momento"
    }),
    new Project({
        name: "las_maravillas",
        title: "Las maravillas"
    }),

]
commercial.addProjects(...commercialProjectsList)


function addID(projectsList){
    let id = 0;
    projectsList.forEach((project)=>{
        project.id = id;
        id += 1;
    })
}
addID(narrativeProjectsList)
addID(commercialProjectsList)


narrativeProjectsList.forEach((project)=>{
    project.addUrl()
})
commercialProjectsList.forEach((project)=>{
    project.addUrl()
})


console.log(narrative.projects)
console.log(commercial.projects)
// Generar galería de proyectos
//narrative.renderProjects()