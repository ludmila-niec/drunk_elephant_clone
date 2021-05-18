import { slideXBox, slideYBox } from "./common";
import { gsap } from "gsap/dist/gsap.min.js";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.min.js";
gsap.registerPlugin(ScrollTrigger);

function fadeInContainer(container) {
  gsap.from(container, { opacity: 0, yPercent: 50, duration: 1 });
}

function slideContent(elements) {
  gsap.from(elements, {delay:1, opacity: 0, y: 75, stagger: 0.3 });
}

function moveBoxes(container, box1, box2, box3, box4, content) {
  let tl = gsap.timeline();
  tl.add(fadeInContainer(container));
  tl.add(slideContent(content))
  tl.add(slideXBox(box1, 100), "+=1.5");
  tl.add(slideYBox(box2, -100), "+=1.5");
  tl.add(slideYBox(box3, 100), "+=1.5");
  tl.add(slideXBox(box4, -100), "+=1.5");
}

export function animateFeatureProduct(
  section,
  container,
  box1,
  box2,
  box3,
  box4,
  content
) {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top bottom",
      end: "bottom 200px",
      scrub: 1,
      onEnter: () => moveBoxes(container, box1, box2, box3, box4, content),
    },
  });

  return tl;
}
