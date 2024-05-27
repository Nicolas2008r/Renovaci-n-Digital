document.addEventListener('DOMContentLoaded', function () {
    const searchIcon = document.querySelector('.search-icon');
    const searchBox = document.querySelector('.search-box');
    const contentContainer = document.querySelector('.content');
    const searchContainer = document.querySelector('.buscador');

    searchIcon.addEventListener('click', function (event) {
        searchIcon.style.display = 'none';
        searchBox.classList.add('active');
        event.stopPropagation(); 
    });

    searchContainer.addEventListener('click', function (event) {
        event.stopPropagation(); 
    });

    document.addEventListener('click', function (event) {
        const clickedElement = event.target;
        
        if (!contentContainer.contains(clickedElement)) {
            searchIcon.style.display = 'block'; 
            searchBox.classList.remove('active'); 
        }
    });
});

let slideIndex = 0;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
}

