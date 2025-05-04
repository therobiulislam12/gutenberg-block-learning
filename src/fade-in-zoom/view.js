let currentSlide = 0;

const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index){
    slides.forEach((slide, i) => {
        if(i === index){
            slide.classList.add('active');
        } else{
            slide.classList.remove('active');
        }
    })
}

function nextSlide(){
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function startSlide(){
    showSlide(currentSlide);
    setInterval(nextSlide, 5000);
}

document.addEventListener('DOMContentLoaded', startSlide);