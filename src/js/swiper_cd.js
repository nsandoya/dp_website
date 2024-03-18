// Obtén el modal
var modal = document.getElementById("myModal");

// Obtén el elemento que abre el modal
var btn = document.querySelector(".btn-modal");

// Obtén el elemento <span> que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Cuando el usuario haga clic en el botón, abre el modal 
function openModal() {
    console.log("click")
    modal.style.display = "block";
  
  // Inicializa Swiper cuando se abre el modal
  var mySwiper = new Swiper('.swiper-container', {
    // Opciones de Swiper
    slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
  });
}

btn.addEventListener('click', ()=>{
    openModal()
})

// Cuando el usuario haga clic en <span> (x), cierra el modal
span.onclick = function() {
  modal.style.display = "none";
}

        /* var swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        }); */