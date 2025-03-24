// Show/Hide Extra Info in Hero Section
function toggleMoreInfo() {
    const info = document.getElementById("more-info");
    info.classList.toggle("hidden");
}

// Image Carousel
const carousel = document.querySelector(".carousel");
const images = document.querySelectorAll(".carousel img");
let index = 0;

document.getElementById("next").addEventListener("click", () => {
    index = (index + 1) % images.length;
    updateCarousel();
});

document.getElementById("prev").addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    updateCarousel();
});

function updateCarousel() {
    const width = images[0].clientWidth;
    carousel.style.transform = `translateX(${-index * width}px)`;
}
