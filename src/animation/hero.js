import { slideXBox, slideYBox } from "./common";
import { gsap } from "gsap/dist/gsap.min.js";

export function revealImages(
  background,
  largeContainer,
  largeBlock,
  smallContainer,
  smallBlock
) {
  const tl = gsap.timeline();

  tl.add(slideXBox(background, 110)).from(
    largeContainer,
    {
      opacity: 0,
      yPercent: 100,
      scale: 1.2,
      duration: 0.8,
      ease: "power4.out",
    },
    "-=1.2"
  );
  tl.add(slideYBox(largeBlock, 100), "-=0.5")
    .from(
      smallContainer,
      {
        xPercent: 200,
        opacity: 0,
        scale: 1.2,
        duration: 1,
        ease: "power4.out",
      },
      "0"
    );
  tl.add(slideXBox(smallBlock, 200, { duration: 3 }), "-=1");
}

export function bannerSlide(element) {
  gsap.to(element, { xPercent: -100, duration: 50, repeat: -1, ease: "none" });
}

export function cursorBlink(caracter) {
  gsap.to(caracter, {
    opacity: 0,
    duration: 0.8,
    repeat: -1,
    ease: "none",
  });
}
