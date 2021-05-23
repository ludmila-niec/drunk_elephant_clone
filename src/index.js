import "./styles/main.scss";
import { revealImages, bannerSlide, cursorBlink } from "./animation/hero";
import { animateOpenMenu, animateCloseMenu } from "./animation/menu";

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

// NAVBAR
const navbar = document.querySelector("#navbar");
const logoText = document.querySelector("#logo-brand-text");
const logoImg = document.querySelector("#logo-brand-img");

const bottomOffset = navbar.offsetTop + navbar.clientHeight;
console.log(bottomOffset);
window.addEventListener("scroll", changeLogo);

function changeLogo() {
  if (window.pageYOffset >= bottomOffset) {
    logoText.style.display = "none";
    logoImg.style.display = "inline";
  } else {
    logoText.style.display = "inline";
    logoImg.style.display = "none";
  }
}

// MENU OPEN/CLOSE
const bodyBackdrop = document.querySelector("#body-backdrop");
const menuContainer = document.querySelector("#menu-container");
const menuLinks = document.querySelectorAll(".menu__link");
const menuBtn = document.querySelector("#menu-btn");
const closeMenuBtn = document.querySelector("#menu-close-btn");

// OPEN MENU
menuBtn.addEventListener("click", openMenu);
// CLOSE MENU WITH BTN
closeMenuBtn.addEventListener("click", closeMenu);
// CLOSE CLICK OUTSIDE MENU
bodyBackdrop.addEventListener("click", closeMenu);

function openMenu() {
  // avoid scroll body
  document.querySelector("body").style.position = "fixed";
  bodyBackdrop.classList.add("backdrop--show");
  // animation
  animateOpenMenu(menuLinks, menuContainer);

}

function closeMenu() {
  // enable scroll body
  document.querySelector("body").style.position = "static";
  bodyBackdrop.classList.remove("backdrop--show");
  // animation
  animateCloseMenu(menuLinks, menuContainer);
}
