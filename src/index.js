import "./styles/main.scss";
import { revealImages, bannerSlide, cursorBlink } from "./animation/hero";

// HERO ELEMENTS
const whiteBlock = document.querySelector("#hero-gradient-white");
const largeImgContainer = document.querySelector("#lg-img-container");
const largeImgBlock = document.querySelector("#lg-img-block");
const smallImgContainer = document.querySelector("#sm-img-container");
const smallImgBlock = document.querySelector("#sm-img-block");

// ANIMATE HERO SECTION ON LOAD
revealImages(
  whiteBlock,
  largeImgContainer,
  largeImgBlock,
  smallImgContainer,
  smallImgBlock
);

// BANNER ANIMATION
const bannerText = document.querySelector("#banner-text-move");
const cursorBanner = document.querySelector("#cursor-banner-animate");

bannerSlide(bannerText);
cursorBlink(cursorBanner);

