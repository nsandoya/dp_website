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
        categoria: "Commercials"
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
        name: "1_back_to_las_maravillas",
        title: "Back to Las maravillas",
        urlvideo: "https://player.vimeo.com/video/938401083?h=7b78ab705f"
    }),
    new Project({
        name: "2_long_legged_nuria_2",
        title: "Long-legged Nuria",
        urlvideo: "https://player.vimeo.com/video/938409349?h=2f7eaf0e8c"
        
    }),
    new Project({
        name: "3_don_goyo_feature_2",
        title: "Don Goyo Feature",
        urlvideo: "https://player.vimeo.com/video/938413044?h=7ce4f8437c"
    }),
    new Project({
        name: "4_las_fotos_del_obrero_2",
        title: "Las Fotos del Obrero",
        urlvideo: "https://player.vimeo.com/video/946381418?h=37c4ccda6f"
    }),
   /*  new Project({
        name: "nuria",
        title: "nuria",
        urlvideo: "https://player.vimeo.com/video/327855828?h=fef8973628"
    }), */

]
narrative.addProjects(...narrativeProjectsList);

// Añadir listas de proyectos a cada galeria
const commercialProjectsList = [
    new Project({
        name: "1_bco_gye_1ero_la_tri",
        title: "Banco Guayaquil <br> Primero la Tri",
        urlvideo: "https://player.vimeo.com/video/668456226?h=fc0202663b"
    }),
    new Project({
        name: "2_bco_gye_gptw",
        title: "Banco Guayaquil <br> GPTW",
        urlvideo: "https://player.vimeo.com/video/938675326?h=1e5ba195e0"
    }),
    new Project({
        name: "3_detector",
        title: "Detector",
        urlvideo: "https://player.vimeo.com/video/938689891?h=b1b483a4b2"
    }),
    new Project({
        name: "4_claro_olimpiadas",
        title: "Claro olimpiadas",
        urlvideo: "https://player.vimeo.com/video/938422142?h=22278db60b"
    }),
    new Project({
        name: "5_supermaxi",
        title: "Supermaxi",
        urlvideo: "https://player.vimeo.com/video/945389390?h=504912e306"
    }),
    new Project({
        name: "6_toni_frush_chica",
        title: "Toni Frush",
        urlvideo: "https://player.vimeo.com/video/938438692?h=715a276986"
    }),
    new Project({
        name: "7_crecos",
        title: "Crecos",
        urlvideo: "https://player.vimeo.com/video/938666807?h=87aa81f592"
    }),
    new Project({
        name: "8_crecos_dia_de_la_madre",
        title: "Crecos <br> Día de la madre",
        urlvideo: "https://player.vimeo.com/video/944677466?h=a242f80150"
    }),
    new Project({
        name: "9_casa_pica",
        title: "Casa Pica",
        urlvideo: "https://player.vimeo.com/video/938681334?h=04c6b7358c"
    }),
    new Project({
        name: "10_road_to_corona_sunset",
        title: "Road to Corona sunset",
        urlvideo: "https://player.vimeo.com/video/938673047?h=edfc258458"
    }),
    new Project({
        name: "11_crecos",
        title: "Crecos",
        urlvideo: "https://player.vimeo.com/video/938669002?h=7dcf67eeae"
    }),
    new Project({
        name: "12_crecos_dia_de_la_madre",
        title: "Crecos <br> Día de la madre",
        urlvideo: "https://player.vimeo.com/video/944687827?h=a80951db48"
    }),
    new Project({
        name: "13_plastiutil",
        title: "Plastiutil",
        urlvideo: "https://player.vimeo.com/video/938429700?h=151f09800e"
    }),
    new Project({
        name: "14_toni_frush_chico",
        title: "Toni Frush",
        urlvideo: "https://player.vimeo.com/video/938662715?h=9f1d43e546"
    }),

]
commercial.addProjects(...commercialProjectsList)

// Añadir listas de proyectos a cada galeria
const musicProjectsList = [
    new Project({
        name: "1_por_un_momento_2",
        title: "Por un momento",
        urlvideo: "https://player.vimeo.com/video/942527322?h=bbcc11900f"
    }),
    new Project({
        name: "2_gmi2",
        title: "GMI2",
        urlvideo: "https://player.vimeo.com/video/943470306?h=6cfbecd822"
    }),
    new Project({
        name: "3_nada_bello",
        title: "Nada bello",
        urlvideo: "https://player.vimeo.com/video/938913689?h=204c2a294d"
    }),
    new Project({
        name: "4_plan",
        title: "Plan",
        urlvideo: "https://player.vimeo.com/video/942536591?h=ad2ff7f408"
    }),
    new Project({
        name: "5_bebiendo_en_el_bar",
        title: "Bebiendo en el bar",
        urlvideo: "https://player.vimeo.com/video/943474917?h=b73c1efa1e"
    }),
    new Project({
        name: "6_te_llore",
        title: "Te lloré",
        urlvideo: "https://player.vimeo.com/video/943477502?h=002f7cedf2"
    }),
    new Project({
        name: "7_reflejos",
        title: "Reflejos",
        urlvideo: "https://player.vimeo.com/video/943484761?h=2e35f69f78"
    }),
    new Project({
        name: "8_en_tus_mares",
        title: "En tus mares",
        urlvideo: "https://player.vimeo.com/video/944257204?h=bfcee4ddd1"
    }),
    new Project({
        name: "9_no_rias_sin_mi",
        title: "No rías sin mí",
        urlvideo: "https://player.vimeo.com/video/944254899?h=43c989a6da"
    }),
    new Project({
        name: "10_ay_que_bueno",
        title: "Ay qué bueno",
        urlvideo: "https://player.vimeo.com/video/943903991?h=1eb30c877b"
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
    //console.log("titulo en la fx",projectsListName)
    let projectsList 
    switch (projectsListName) {
        case "narrative":
            projectsList = narrative.projects
            break;
        case "commercials":
            projectsList = commercial.projects
            break;
        case "music":
            projectsList = music.projects
            break;
    };
    //console.log("Lista obtenida",projectsList)
    return projectsList
}

export function getProjectGallery(projectName){
    projectName = projectName.toLowerCase()
    //console.log("titulo de la galería",projectName)
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
    //console.log("Galería obtenida",projectGallery)
    return projectGallery
}