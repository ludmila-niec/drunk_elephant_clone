import { gsap } from "gsap/dist/gsap.min.js";
import { slideXBox } from "./common";

// openMenu
export function animateOpenMenu(links, container) {
    const tl = gsap.timeline();
    tl.add(slideXBox(container, 100, { delay: 0.2, duration: 0.5 })).fromTo(
      links,
      { opacity: 0 },
      {delay: 0.5, opacity: 1, stagger: 0.1 }
    );
  }
  
  // closeMenu
  export function animateCloseMenu(links, container) {
    const tl = gsap.timeline();
    tl.to(links, { opacity: 0 }).add(
      slideXBox(container, -100, { delay: 0.5, duration: 0.5 })
    );
  }