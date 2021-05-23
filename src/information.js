import { animateDivider } from "./animation/information";
const dividerContainer = document.querySelector("#information-divider");
const dividerColorBlock = document.querySelector(
  "#information-divider-color-block"
);

animateDivider(dividerContainer, dividerColorBlock);
