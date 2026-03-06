document.addEventListener('DOMContentLoaded', () => {
    const first_project = document.getElementById('first_project');
    const second_project = document.getElementById('second_project');
    const third_project = document.getElementById('third_project');

    // force browser to recognise initial transform state before adding the visible class
    requestAnimationFrame(() => {
        first_project.classList.add('visible');
        second_project.classList.add('visible');
        second_project.style.transitionDelay = '0.3s'
        third_project.classList.add('visible');
        third_project.style.transitionDelay = '0.6s'
    });
});

// Simple slideshow functionality

function nextSlide(btn){

    const slider = btn.parentElement;
    const slides = slider.querySelectorAll(".slide");

    let activeIndex = 0;

    slides.forEach((slide, index) => {
        if(slide.classList.contains("active")){
            activeIndex = index;
        }
        slide.classList.remove("active");
    });

    activeIndex++;

    if(activeIndex >= slides.length){
        activeIndex = 0;
    }

    slides[activeIndex].classList.add("active");
}


function prevSlide(btn){

    const slider = btn.parentElement;
    const slides = slider.querySelectorAll(".slide");

    let activeIndex = 0;

    slides.forEach((slide, index) => {
        if(slide.classList.contains("active")){
            activeIndex = index;
        }
        slide.classList.remove("active");
    });

    activeIndex--;

    if(activeIndex < 0){
        activeIndex = slides.length - 1;
    }

    slides[activeIndex].classList.add("active");
}