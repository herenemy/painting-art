import modals from "./modules/modals";
import sliders from "./modules/sliders";
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkTextInputs from "./modules/checkTextInputs";
import showMoreStyles from "./modules/showMoreStyles";
import calc from "./modules/calc";
import filter from "./modules/filter";
import pictureSize from "./modules/pictureSize";
import accordion from "./modules/accordion";
import burger from "./modules/burger";
import smoothScroll from "./modules/smoothScroll";

window.addEventListener("DOMContentLoaded", () => {
  "use strict";
  let formState = {
    // size,
    // material,
    // options,
    // price,
  };
  modals();
  sliders(
    ".feedback-slider-item",
    "horizontal",
    ".main-prev-btn",
    ".main-next-btn"
  );
  sliders(".main-slider-item", "vertical");
  mask('[name="phone"]');
  checkTextInputs('[name="name"]');
  checkTextInputs('[name="message"]');
  showMoreStyles(".button-styles", "#styles .row");
  calc(
    "#size",
    "#material",
    "#options",
    ".promocode",
    ".calc-price",
    formState
  );
  forms(formState);
  filter();
  pictureSize();
  accordion(".accordion-heading", ".accordion-block");
  burger(".burger", ".burger-menu");
  smoothScroll(".burger-menu", ".pageup");
});
