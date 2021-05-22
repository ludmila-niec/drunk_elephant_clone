import { gsap } from "gsap/dist/gsap.min.js";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.min.js";
gsap.registerPlugin(ScrollTrigger);

// ANIMATE ON LOAD
function animateContent(title, content) {
  const tl = gsap.timeline();
  tl.from(title, { yPercent: 100, duration: 1.5 }).from(
    content,
    { xPercent: -100, ease: "elastic.out(1, 1)", duration: 3 },
    "-=1"
  );
}
export function animateProductsSection(section, content, title) {
  return gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top bottom",
      end: "bottom 200px",
      scrub: 1,
      onEnter: () => animateContent(title, content),
    },
  });
}

// CAROUSEL
export function animateSlide(element, value, options) {
  return gsap.to(element, {
    x: value,
    ease: "elastic.out(1, 1)",
    duration: 1,
    ...options,
  });
}

// DESKTOP SLIDE CAROUSEL
export function dragSlide(element, value) {
  return gsap.to(element, { x: -value, duration: 1 });
}

// CURSOR ANIMATION
export function animateCustomCursor(element, value) {
  gsap.to(element, {
    scale: value,
    ease: "elastic.out(1, 1)",
  });
}
