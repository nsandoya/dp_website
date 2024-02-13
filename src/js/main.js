const video = document.querySelector(".video-container video")
const videoC = document.querySelector(".video-container")
const videoContainer = document.querySelector(".video-container")
/* const img = document.querySelector("#img-cover") */
const c = document.querySelector(".imgContainer")


c.addEventListener('mouseover', ()=>{
    /* img.classList.add("nodisplay") */
    c.classList.remove("displayImg")
    c.classList.add("nodisplayImg")
    videoC.classList.add("displayVideo")
    videoContainer.classList.remove("nodisplay")
    video.muted = true;
    video.play();

})
c.addEventListener('mouseout', ()=>{
    /* img.classList.remove("nodisplay") */
    c.classList.add("displayImg")
    c.classList.remove("nodisplayImg")
    videoC.classList.remove("displayVideo")
    videoContainer.classList.add("nodisplay")

    video.pause();
    video.currentTime = 0;

})