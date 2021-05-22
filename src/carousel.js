import {
  animateProductsSection,
  animateSlide,
  dragSlide,
} from "./animation/carousel";

const productsSection = document.querySelector("#products-section");
const productsTitle = document.querySelector("#products-title");
const carouselContent = document.querySelector("#carousel-content");
const sliderWrappers = document.querySelectorAll(".carousel__wrapper--large");
const slides = document.querySelectorAll(".product__wrapper");
let counter = 0;
let start;
let change;

// ANIMATION INTERSECTION OBSERVER ENTER
animateProductsSection(productsSection, carouselContent, productsTitle);

// MOBILE CAROUSEL
if (window.matchMedia("(max-width: 1199px)").matches) {
    const size = slides[0].clientWidth;
    carouselContent.addEventListener("touchstart", (e) => {
        start = e.touches[0].clientX;
    });
    
    carouselContent.addEventListener("touchmove", (e) => {
        let touch = e.touches[0].clientX;
        change = start - touch;
    });
    
    carouselContent.addEventListener("touchend", () => {
        if (change > 0) return nextSlide(slides, size);
    prevSlide (size);
  });
} else {
  // DESKTOP
  const size = sliderWrappers[0].clientWidth;
  carouselContent.addEventListener("dragstart", (e) => {
    start = e.clientX;
  });

  carouselContent.addEventListener("drag", (e) => {
    let touch = e.clientX;
    change = start - touch;
    dragSlide(carouselContent, change);
  });

  carouselContent.addEventListener("dragend", (e) => {
    const end = e.clientX;
    if (start > end) return nextSlide(sliderWrappers, size, { duration: 0.5 });
    prevSlide(size, { duration: 0.5 });
  });
}

// animations
function nextSlide(slides, size, options) {
  if (counter >= slides.length - 1) return;
  counter++;
  const movePx = -size * counter + "px";
  animateSlide(carouselContent, movePx, options);
}

function prevSlide(size, options) {
  if (counter <= 0) return;
  counter--;
  const movePx = -size * counter + "px";
  animateSlide(carouselContent, movePx, options);
}
