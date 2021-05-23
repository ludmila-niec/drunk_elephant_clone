import { gsap } from "gsap/dist/gsap.min.js";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.min.js";
gsap.registerPlugin(ScrollTrigger);
import { slideXBox } from "./common";

function revealImage(container, colorBlock) {
  const tl = gsap.timeline();
  tl.from(container, { xPercent: 100 });
  tl.add(slideXBox(colorBlock, -100));
}

export function animateDivider(container, colorBlock) {
  gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top bottom",
      end: "bottom 200px",
      scrub: 1,
      onEnter: () => revealImage(container, colorBlock),
    },
  });
}
