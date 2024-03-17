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

// Navbar responsive
export function navbarResponsive(){
    const header = document.querySelector("header")
    header.innerHTML = `
        <nav class="navbar navbar-dark navbar-expand-md bg-transparent fixed-top mt-2 me-md-4" style="z-index: 1;">
        <div class="container-fluid">
        <div class="container-fluid">
            <div class="row">
            <div class="col-lg-2 col-md-0"></div>
            <div class="col-lg-7 col-md-9 text-center">
                <ul class="row collapse navbar-collapse align-text-center text-uppercase" style="color: var(--main-color-white)">
                <li class="col"><a href="./index.html" class="n-active">Narrative</a></li>
                <li class="col"><a href="./commercial.html">Commercial</a></li>
                <li class="col"><a href="./music.html" >Music</a></li>
                <!-- <li class="col"><a href="">Stills</a></li> -->
                <li class="dropdown" style="width: min-content !important;">
                    <a class="dropdown-toggle text-uppercase" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Stills
                    </a>
                    <ul class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown" style="opacity: 0.5;">
                    <li><a class="ms-3" href="./journey.html" style="color: var(--main-color-white);">Journey</a></li>
                    <li class="dropdown-divider" style="color: var(--main-color-white);"><hr></li>
                    <li><a class="ms-3" href="#" style="color: var(--main-color-white);">Series</a></li>
                    </ul>
                </li>
                
                <li class="col"><a href="">Contact</a></li>
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
}

// Footer dinámico
export function dynamicFooter(){
    window.onscroll = function(ev) {
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

