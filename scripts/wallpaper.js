// Gallery Slider v1
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n); // Incrementation de slideIndex
}

function currentSlide(n){
    showSlides(slideIndex = n); // Position slide
}
function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {slideIndex = 1;}
    if (n < 1) {slideIndex = slides.length;}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        console.log(slideIndex);
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex -1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


// Music Play

const playBtn = document.getElementById("play-music");
let music = document.getElementById("music");

playBtn.addEventListener("click", () => {
    if (music.paused) {music.play(); music.loop = true}
    else {music.pause();}
})

// Restart Music
playBtn.addEventListener("dblclick", () => {
    if (music.play) {music.currentTime = 0;}
})

// STOP
playBtn.addEventListener("contextmenu", () => {
    music.pause();
    music.currentTime = 0;
})