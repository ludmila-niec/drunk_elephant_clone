import {
  animateDivider,
  animateContent,
  animateSliderSection,
} from "./animation/information";
import { animateSlide } from "./animation/carousel";
const dividerContainer = document.querySelector("#information-divider");
const dividerColorBlock = document.querySelector(
  "#information-divider-color-block"
);

// ANIMATION DIVIDER
animateDivider(dividerContainer, dividerColorBlock);

// FADE IN CONTENT
const infoContainer = document.querySelector("#information-section");
const titleInfo = document.querySelector("#information-title");
const blockContents = document.querySelectorAll(".information__box");
animateContent(infoContainer, titleInfo, blockContents);
// FADE IN SLIDER CONTENT
const hashtagContent = document.querySelector("#hashtag-trigger");
const hashtagTitle = document.querySelector("#hashtag-title");
const hashtagLips = document.querySelector("#hashtag-lips");
const reviewContainer = document.querySelector("#information-review-container");
animateSliderSection(
  hashtagContent,
  hashtagTitle,
  hashtagLips,
  reviewContainer
);

// SLIDER FUNCTIONALITY
const arrowLeft = document.querySelector("#info-arrow-left");
const arrowRight = document.querySelector("#info-arrow-right");
const reviewWrapper = document.querySelector("#review-wrapper");
const reviewsList = document.querySelectorAll(".reviews__content");
let counter = 0;
const size = reviewWrapper.clientWidth;

arrowLeft.addEventListener("click", () => {
  console.log("left click");
  prevSlide();
});
arrowRight.addEventListener("click", () => {
  console.log("right click");
  nextSlide();
});

function nextSlide() {
  if (counter >= reviewsList.length - 1) return;
  counter++;
  const movePx = -size * counter + "px";
  animateSlide(reviewWrapper, movePx);
}

function prevSlide() {
  if (counter <= 0) return;
  counter--;
  const movePx = -size * counter + "px";
  animateSlide(reviewWrapper, movePx);
}
