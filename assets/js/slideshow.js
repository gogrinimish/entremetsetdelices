const images = [
    'assets/images/IMG_0835.jpg',
    'assets/images/IMG_0839.jpg',
    'assets/images/IMG_1664.jpg'
    // Add all your image paths here
];

let currentSlide = 0;

async function loadSlideshow() {
    const slidesContainer = document.querySelector('.slides');
    images.forEach((image, index) => {
        const slide = document.createElement('div');
        slide.className = `slide ${index === 0 ? 'active' : ''}`;
        slide.innerHTML = `<img src="${image}" alt="Slide ${index + 1}">`;
        slidesContainer.appendChild(slide);
    });
}

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    if (!slides.length) return;

    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

function startSlideshow() {
    setInterval(() => changeSlide(1), 5000);
}

// Initialize slideshow when page loads
document.addEventListener('DOMContentLoaded', () => {
    loadSlideshow().then(startSlideshow);
});