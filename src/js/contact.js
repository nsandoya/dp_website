
import { init_banner, dynamicFooter, offcanvasActiveItem } from "./layoutElements.js"

localStorage.setItem('projectsCategory', "contact") 

export function navbarStillsResponsive(){
    const header = document.querySelector("header")
    const pageTitle = document.title
    
    header.innerHTML = `
        <nav class="navbar bg-white navbar-expand-md fixed-top me-md-4" style="height: 50px;z-index: 1;">
        <div class="container-fluid">
            <div class="container-fluid">
            <div class="row">
                <div class="col-lg-2 col-md-0"></div>
                <div class="col-lg-7 col-md-9 text-center">
                <ul class="row collapse navbar-collapse align-text-center text-uppercase" style="color: var(--main-color-golden) !important; margin-bottom:0; margin-top:0.3rem">
                    <li class="col"><a href="/" class="narrative" style="color: var(--main-color-white);">Narrative</a></li>
                    <li class="col"><a href="./commercials" class="commercial" style="color: var(--main-color-white);">Commercials</a></li>
                    <li class="col"><a href="./music" class="music" style="color: var(--main-color-white);">Music</a></li>
                    <!-- <li class="col"><a href="">Stills</a></li> -->
                    <li class="dropdown" style="width: min-content !important; ">
                    <a class="stills dropdown-toggle text-uppercase" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style="color: var(--main-color-white);">
                        Stills
                    </a>
                    <ul class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown" style="opacity: 0.95;">
                        <li><a class="journal ms-3" href="./journal" style="color: var(--main-color-white);">Journal</a></li>
                        <li class="dropdown-divider" style="color: var(--main-color-white);"><hr></li>
                        <li><a class="series ms-3" href="./series" style="color: var(--main-color-white);">Series</a></li>
                    </ul>
                    </li>
                    
                    <li class="col"><a href="./contact" class="contact" style="color: var(--main-color-black);">Contact</a></li>
                </ul>
                </div>
                <div class="row col-lg-3 col-md-3 text-end">
                <section id="titulo" class="col-6 text-start ps-3">
                    <h2 class="d-sm-inline-block d-md-none projectTitle  text-uppercase fs-5 " style="font-family: 'BDSans-Black'; color: var(--main-color-white);">${pageTitle}</h2>
                
                </section>
                <!-- Botón que abre el offcanvas menu -->
                <button class="d-sm-inline-block d-md-none col border-0 pe-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-expanded="false" aria-label="Toggle navigation" style="background-color: transparent;">
                    <h1 class="fs-3 text-uppercase mb-4 mb-md-2 pe-0 text-end" style="font-family: 'BDSans-Black'; font-weight: lighter; line-height:1em; color: var(--main-color-yellow)"><i class="bi bi-list" style="color:var(--main-color-white)"></i></h1>
                </button>
                <!-- Botón que dirige al Home -->
                <a href="/">
                    <button class="d-none d-md-inline-block col border-0 pe-0" type="button" style="background-color: transparent;">
                    <h1 class="fs-3 text-uppercase mb-4 mb-md-2 pe-0 text-end" style="font-family: 'BDSans-Black'; font-weight: lighter; line-height:1em; color: var(--main-color-white)">DP</h1>
                    </button>
                </a>
                </div>
            </div>
            
            </div>
            
        </div>
        </nav>
    `

    const itemsNavbar = document.querySelectorAll("ul li a")
    const stills = document.querySelector(".stills")
    itemsNavbar.forEach((item)=>{
        ////console.log("titulo pagina", pageTitle)
        ////console.log(item)
        //item.classList.add()
        if(item.classList.contains(pageTitle.toLowerCase())){
            item.classList.add("n-active-black")
        }
    })

    const navbar = document.querySelector("nav")
    ////console.log("navbar", pageTitle.toLowerCase())
    if(pageTitle.toLowerCase() == "contact" ){
        navbar.classList.remove("bg-white")
        navbar.classList.add("bg-transparent")
        stills.classList.remove("n-active")

    }else if(pageTitle.toLowerCase() == "journal" || pageTitle.toLowerCase() == "series"){
        navbar.classList.remove("bg-transparent")
        navbar.classList.add("bg-white")
        stills.classList.add("n-active")
    }
    function navbarChanges(){
        if(window.innerWidth <= 720){
            ////console.log("ancho de pantalla", window.innerWidth)
            navbar.classList.remove("bg-white")
            navbar.classList.add("bg-transparent")
        }else if(window.innerWidth > 720 && pageTitle.toLowerCase() != "contact"){
            navbar.classList.remove("bg-transparent")
            navbar.classList.add("bg-white")
        }
    }
    window.addEventListener('DOMContentLoaded', ()=>{
        navbarChanges()
    })
    window.addEventListener('resize', ()=>{
        navbarChanges()
    })
    
}
// Submenu responsive
export function ddMenuMobile(){
    const ddmBtn = document.querySelector(".ddm-click");
    const ddmSubMenu = document.querySelector(".ddm-mobile");

    ddmBtn.addEventListener('click', ()=>{
        if (ddmSubMenu.classList.contains("ddm-mobile-d-none")){
            ddmSubMenu.classList.remove("ddm-mobile-d-none")
        }else{
            ddmSubMenu.classList.add("ddm-mobile-d-none")

        }
    })
}
navbarStillsResponsive()

dynamicFooter()

navbarStillsResponsive()

offcanvasActiveItem()

ddMenuMobile()