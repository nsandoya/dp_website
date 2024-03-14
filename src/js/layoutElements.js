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

// Footer dinámico
export function dynamicFooter(){
    window.onscroll = function(ev) {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            // El usuario ha llegado al final de la página, cambia el color de fondo del footer
            document.querySelector("footer").classList.remove("footer-hide-bg");
            document.querySelector(".email").classList.remove("footer-hide-text");
            let rrss = document.querySelectorAll(".rrss");
            rrss.forEach((item) =>{
                item.classList.remove("footer-text-initial")
            })
        }else{
            document.querySelector("footer").classList.add("footer-hide-bg");
            document.querySelector(".email").classList.add("footer-hide-text");
            let rrss = document.querySelectorAll(".rrss");
            rrss.forEach((item) =>{
                item.classList.add("footer-text-initial")
            })
        }
    };
    
}

