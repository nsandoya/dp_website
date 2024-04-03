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
// Generar galería de proyectos
const music = new ProjectGallery(
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
        title: "Nada bello",
        urlvideo: "https://www.youtube.com/embed/qWlLdZ3_6aQ?si=ekPxTuapgRrYBMIk"
    }),
    new Project({
        name: "junior",
        title: "Junior",
        urlvideo: "https://player.vimeo.com/video/544380025?h=aa97d4f317"
    }),
    new Project({
        name: "por_un_momento",
        title: "por un momento",
        urlvideo: "https://www.youtube.com/embed/1qnTlIzQ_DI?si=rebqJVINFN6uhHam"
    }),
    new Project({
        name: "las_maravillas",
        title: "Las maravillas",
        urlvideo: "https://player.vimeo.com/video/410875955?h=3e56b19d9d"
    }),

]
commercial.addProjects(...commercialProjectsList)

// Añadir listas de proyectos a cada galeria
const musicProjectsList = [
    new Project({
        name: "las_maravillas",
        title: "Las maravillas",
        urlvideo: "https://player.vimeo.com/video/410875955?h=3e56b19d9d?title=0"
    }),
    new Project({
        name: "nada_bello",
        title: "Nada bello",
        urlvideo: "https://www.youtube.com/embed/qWlLdZ3_6aQ?si=ekPxTuapgRrYBMIk"
    }),
    new Project({
        name: "por_un_momento",
        title: "por un momento",
        urlvideo: "https://www.youtube.com/embed/1qnTlIzQ_DI?si=rebqJVINFN6uhHam"
    }),
    
]
music.addProjects(...musicProjectsList)


function addID(projectsList){
    let id = 0;
    projectsList.forEach((project)=>{
        project.id = id;
        id += 1;
    })
}
addID(narrativeProjectsList)
addID(commercialProjectsList)
addID(musicProjectsList)


narrativeProjectsList.forEach((project)=>{
    project.addUrl()
})
commercialProjectsList.forEach((project)=>{
    project.addUrl()
})
musicProjectsList.forEach((project)=>{
    project.addUrl()
})


export function getProjectsList(projectsListName){
    projectsListName = projectsListName.toLowerCase()
    console.log("titulo en la fx",projectsListName)
    let projectsList 
    switch (projectsListName) {
        case "narrative":
            projectsList = narrative.projects
            break;
        case "commercial":
            projectsList = commercial.projects
            break;
        case "music":
            projectsList = music.projects
            break;
    };
    console.log("Lista obtenida",projectsList)
    return projectsList
}

export function getProjectGallery(projectName){
    projectName = projectName.toLowerCase()
    console.log("titulo de la galería",projectName)
    let projectGallery 
    switch (projectName) {
        case "narrative":
            projectGallery = narrative
            break;
        case "commercial":
            projectGallery = commercial
            break;
        case "music":
            projectGallery = music
            break;
    };
    console.log("Galería obtenida",projectGallery)
    return projectGallery
}