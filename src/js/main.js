const video = document.querySelector(".video-container video")
const videoC = document.querySelector(".video-container")
const videoContainer = document.querySelector(".video-container")
const c = document.querySelector(".imgContainer")


/* c.addEventListener('mouseover', ()=>{
    c.classList.remove("displayImg")
    c.classList.add("nodisplayImg")
    videoC.classList.add("displayVideo")
    videoContainer.classList.remove("nodisplay")
    video.muted = true;
    video.play();

})
c.addEventListener('mouseout', ()=>{
    c.classList.add("displayImg")
    c.classList.remove("nodisplayImg")
    videoC.classList.remove("displayVideo")
    videoContainer.classList.add("nodisplay")

    video.pause();
    video.currentTime = 0;

}) */

c.addEventListener('click', ()=>{
    window.location.href = "./html/categoria.html"
})


