import { gsap } from "gsap/dist/gsap.min.js";

// remove color blocks/images
export function slideXBox(box, value, options) {
  gsap.to(box, { delay: 0.6, xPercent: value, duration: 2, ...options });
}

export function slideYBox(box, value, options) {
  gsap.to(box, { delay: 0.6, yPercent: value, duration: 2, ...options });
}
export function fadeInYBox(box, value, options) {
  gsap.from(box, { delay: 0.6, yPercent: value, duration: 2, ...options });
}


