// Generar banner inicial
export function init_banner(){
    const banner = document.querySelector(".init_banner")
    setTimeout(()=>{
        //banner.classList.remove("init_banner")
        banner.classList.add("init_banner_close")
        //banner.innerHTML=""
    }, 800)
    
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


const header = document.querySelector("header")
const pageTitle = document.title
// Navbar responsive
export function navbarResponsive(){
    header.innerHTML = `
        <nav class="navbar navbar-dark navbar-expand-md bg-transparent fixed-top mt-2 me-md-4" style="z-index: 1;">
        <div class="container-fluid">
        <div class="container-fluid">
            <div class="row">
            <div class="col-lg-2 col-md-0"></div>
            <div class="col-lg-7 col-md-9 text-center">
                <ul class="row collapse navbar-collapse align-text-center text-uppercase" style="color: var(--main-color-white)">
                <li class="col "><a href="./index.html" class="narrative">Narrative</a></li>
                <li class="col "><a href="./commercial.html" class="commercial">Commercial</a></li>
                <li class="col "><a href="./music.html" class="music">Music</a></li>
                <!-- <li class="col "><a href="" class="stills">Stills</a></li> -->
                <li class="dropdown" style="width: min-content !important;">
                    <a class="dropdown-toggle text-uppercase" href="./index.html" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Stills
                    </a>
                    <ul class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown" style="opacity: 0.5;">
                    <li><a class="ms-3" href="./journey.html" style="color: var(--main-color-white);">Journey</a></li>
                    <li class="dropdown-divider" style="color: var(--main-color-white);"><hr></li>
                    <li><a class="ms-3" href="./series.html" style="color: var(--main-color-white);">Series</a></li>
                    </ul>
                </li>
                
                <li class="col "><a href="./contact.html" class="contact">Contact</a></li>
                </ul>
            </div>
            <div class="col-lg-3 col-md-3 text-end">
                <a class="navbar-brand  pt-0 d-none d-sm-none d-md-grid " href="#">
                <h1 class="fs-5 mb-0 text-uppercase mb-2" style="font-family: 'BDSans-Black'; font-weight: lighter; line-height:1em; color: var(--main-color-white)">Dominique</h1>
                <h1 class="fs-5 mb-0 text-uppercase text-end mb-2" style="font-family: 'BDSans-Black'; font-weight: lighter; line-height:1em; color: var(--main-color-white)">Pazmiño</h1>
                <h1 class="fs-5 mb-0 text-uppercase text-end mb-2" style="font-family: 'BDSans-Black'; font-weight: lighter; line-height:1em; color: var(--main-color-white)">Ríos</h1>
                <h3 class="fs-6 mb-0 fw-light text-uppercase text-end" style="font-family: 'Roboto-Light'; line-height:1.5em;letter-spacing: 0.25em; color:var(--main-color-yellow)">Cinemato<br>grapher</h3>
                </a> 
                <button class="navbar-toggler border-0 pe-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-expanded="false" aria-label="Toggle navigation">
                
                <!-- <span class="navbar-toggler-icon"></span> -->
                <h1 class="display-5 mb-0 text-uppercase mb-2 pe-0 text-end" style="font-family: 'BDSans-Black'; font-weight: lighter; line-height:1em; color: var(--main-color-yellow)">DP</h1>

                </button>
            </div>
            </div>
            
        </div>
        
        </div>
    </nav>
    `
    const itemsNavbar = document.querySelectorAll("ul li a")
    itemsNavbar.forEach((item)=>{
        console.log("titulo pagina", pageTitle)
        console.log(item)
        if(item.classList.contains(pageTitle.toLowerCase())){
            item.classList.add("n-active")
        }
    })


}

export function navbarStillsResponsive(){
    header.innerHTML = `
        <nav class="navbar  navbar-expand-md fixed-top me-md-4" style="height: 50px;z-index: 1;">
        <div class="container-fluid">
            <div class="container-fluid">
            <div class="row">
                <div class="col-lg-2 col-md-0"></div>
                <div class="col-lg-7 col-md-9 text-center">
                <ul class="row collapse navbar-collapse align-text-center text-uppercase" style="color: var(--main-color-black) !important; margin-bottom:0; margin-top:0.3rem">
                    <li class="col"><a href="./index.html" class="narrative" style="color: var(--main-color-black);">Narrative</a></li>
                    <li class="col"><a href="./commercial.html" class="commercial" style="color: var(--main-color-black);">Commercial</a></li>
                    <li class="col"><a href="./music.html" class="music" style="color: var(--main-color-black);">Music</a></li>
                    <!-- <li class="col"><a href="">Stills</a></li> -->
                    <li class="dropdown" style="width: min-content !important; ">
                    <a class="stills dropdown-toggle text-uppercase" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style="color: var(--main-color-black);">
                        Stills
                    </a>
                    <ul class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown" style="opacity: 0.95;">
                        <li><a class="journey ms-3" href="./journey.html" style="color: var(--main-color-white);">Journey</a></li>
                        <li class="dropdown-divider" style="color: var(--main-color-white);"><hr></li>
                        <li><a class="series ms-3" href="./series.html" style="color: var(--main-color-white);">Series</a></li>
                    </ul>
                    </li>
                    
                    <li class="col"><a href="./contact.html" class="contact" style="color: var(--main-color-black);">Contact</a></li>
                </ul>
                </div>
                <div class="row col-lg-3 col-md-3 text-end">
                <section id="titulo" class="col-6 text-start ps-3">
                    <h2 class="d-sm-inline-block d-md-none projectTitle  text-uppercase fs-5 " style="font-family: 'BDSans-Black'; color: var(--main-color-golden);">${pageTitle}</h2>
                
                </section>
                <!-- Botón que abre el offcanvas menu -->
                <button class="d-sm-inline-block d-md-none col border-0 pe-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-expanded="false" aria-label="Toggle navigation" style="background-color: transparent;">
                    <h1 class="fs-3 text-uppercase mb-4 mb-md-2 pe-0 text-end" style="font-family: 'BDSans-Black'; font-weight: lighter; line-height:1em; color: var(--main-color-yellow)">DP</h1>
                </button>
                <!-- Botón que dirige al Home -->
                <a href="./index.html">

                    <button class="d-none d-md-inline-block col border-0 pe-0" type="button" style="background-color: transparent;">
                    <h1 class="fs-3 text-uppercase mb-4 mb-md-2 pe-0 text-end" style="font-family: 'BDSans-Black'; font-weight: lighter; line-height:1em; color: var(--main-color-yellow)">DP</h1>
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
        console.log("titulo pagina", pageTitle)
        console.log(item)
        if(item.classList.contains(pageTitle.toLowerCase())){
            item.classList.add("n-active")
        }
    })

    const navbar = document.querySelector("nav")
    console.log("navbar", pageTitle.toLowerCase())
    if(pageTitle.toLowerCase() == "contact" ){
        navbar.classList.add("bg-transparent")
        stills.classList.remove("n-active")

    }else if(pageTitle.toLowerCase() == "journey" || pageTitle.toLowerCase() == "series"){
        navbar.classList.add("bg-white")
        stills.classList.add("n-active")
    }
}

// Footer dinámico
export function dynamicFooter(){
    window.onscroll = function(event) {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            // El usuario ha llegado al final de la página, cambia el color de fondo del footer
            document.querySelector(".f-select ").classList.remove("footer-hide-bg");
            document.querySelector(".email").classList.remove("footer-hide-text");
            let rrss = document.querySelectorAll(".rrss");
            rrss.forEach((item) =>{
                item.classList.remove("footer-text-initial")
            })
        }else{
            document.querySelector(".f-select").classList.add("footer-hide-bg");
            document.querySelector(".email").classList.add("footer-hide-text");
            let rrss = document.querySelectorAll(".rrss");
            rrss.forEach((item) =>{
                item.classList.add("footer-text-initial")
            })
        }
    };
    
}

export function offcanvasActiveItem(){
    const offcanvas = document.querySelector(".offcanvas")
    const offcanvasItems = offcanvas.querySelectorAll("ul li a")
    console.log("offcanvas", offcanvasItems)
    offcanvasItems.forEach((item)=>{
        if(item.innerHTML == pageTitle){
            console.log("item offcanvas", item.innerHTML)
            item.classList.add("n-active-offcanvas")
        }
    })
}
