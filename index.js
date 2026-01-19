// Simple slideshow functionality

let currentIndex = 0;

function prevSlide(){
    const slides = document.getElementsByClassName("slide");
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[currentIndex].style.display = "block";
}

function nextSlide(){
    const slides = document.getElementsByClassName("slide");
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[currentIndex].style.display = "block";
}