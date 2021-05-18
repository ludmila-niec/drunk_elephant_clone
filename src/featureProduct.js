import { animateFeatureProduct } from "./animation/featureProduct";
// FEATURE PRODUCT ELEMENTS
const featureProductSection = document.querySelector("#feature-products");
const featureProductContainer = document.querySelector(
  "#feature-product-container"
);
const productFeatureBox1 = document.querySelector("#feature-product-box-1");
const productFeatureBox2 = document.querySelector("#feature-product-box-2");
const productFeatureBox3 = document.querySelector("#feature-product-box-3");
const productFeatureBox4 = document.querySelector("#feature-product-box-4");
const productFeatureTextAnimate = ".feature__product-animate";

// FEATURE PRODUCT ANIMATION
animateFeatureProduct(
  featureProductSection,
  featureProductContainer,
  productFeatureBox1,
  productFeatureBox2,
  productFeatureBox3,
  productFeatureBox4,
  productFeatureTextAnimate
);
