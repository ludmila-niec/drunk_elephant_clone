import { gsap } from "gsap/dist/gsap.min.js";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.min.js";
gsap.registerPlugin(ScrollTrigger);
import { slideXBox } from "./common";

function revealImage(container, colorBlock) {
  const tl = gsap.timeline();
  tl.from(container, { xPercent: 100 });
  tl.add(slideXBox(colorBlock, -100));
}

function fadeInText(content) {
  gsap.from(content, { opacity: 0, y: 100, duration: 1, stagger: 0.5 });
}

// DIVIDER IMAGE
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

// ANIMATE CONTENT
export function animateContent(trigger, title, blocks) {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: trigger,
      start: "400px bottom",
      end: "center center",
      scrub: 1,
      snap: {
        snapTo: "labels",
        duration: { min: 1, max: 3 },
        delay: 0.2,
      },
    },
  });
  tl.addLabel("start")
    .from(title, { opacity: 0, y: 100, duration: 1 })
    .addLabel("blocks")
    .from(blocks, { opacity: 0, y: 100, duration: 1.5, stagger: 1 });
}


// ANIMATE SLIDER SECTION
export function animateSliderSection(trigger, title, img, content) {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: trigger,
      start: "top bottom",
      end: "bottom center",
      scrub: 1,
      snap: {
        snapTo: "labels",
        duration: { min: 1, max: 3 },
        delay: 0.2,
      },
    },
  });
  tl.addLabel("start")
    .from(title, { opacity: 0, y: 100, duration: 1 })
    .addLabel("img")
    .from(img, { opacity: 0, y: 100, duration: 1 }, "-=0.5")
    .addLabel("slider")
    .from(content, { opacity: 0, y: 100 }, "-=1");
}

// SLIDER FUNCTIONALITY

