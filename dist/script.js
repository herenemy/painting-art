/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/calcPageWidth.js":
/*!*****************************************!*\
  !*** ./src/js/modules/calcPageWidth.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const calcScroll = () => {
  const div = document.createElement("div");
  div.style.width = "50px";
  div.style.height = "50px";
  div.style.overflowY = "scroll";
  div.style.visibility = "hidden";
  document.body.appendChild(div);
  const scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();
  return scrollWidth;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calcScroll);

/***/ }),

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _calcPageWidth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calcPageWidth */ "./src/js/modules/calcPageWidth.js");

const modals = () => {
  let btnPressed = false;
  function callModalWindow(triggerSelector, modalSelector, closeSelector, destroy = false) {
    const triggerNode = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      closeNode = document.querySelectorAll(closeSelector),
      scrollWidth = (0,_calcPageWidth__WEBPACK_IMPORTED_MODULE_0__["default"])();
    function showModal() {
      modal.style.display = "block";
      modal.classList.add("animated", "fadeIn");
      document.body.style.overflow = "hidden";
      document.body.style.marginRight = `${scrollWidth}px`;
    }
    function hideModal() {
      modal.style.display = "none";
      document.body.style.overflow = "";
      document.body.style.marginRight = `0px`;
      if (modalSelector === ".popup-gift") {
        document.querySelector(".fixed-gift").remove();
      }
    }
    triggerNode.forEach(item => {
      item.addEventListener("click", e => {
        e.preventDefault();
        btnPressed = true;
        item.classList.add("animated", "fadeIn");
        showModal();
        if (destroy) item.remove();
      });
    });
    closeNode.forEach(item => {
      item.addEventListener("click", hideModal);
    });
    modal.addEventListener("click", e => {
      if (e.target === modal) {
        hideModal();
      }
    });
    document.addEventListener("keydown", e => {
      if (e.key === "Escape") {
        hideModal();
      }
    });
  }
  function showModalByTime(selector, time) {
    setTimeout(() => {
      let display;
      document.querySelectorAll("[data-modal]").forEach(item => {
        if (getComputedStyle(item).display !== "none") {
          display = "block";
        }
      });
      if (!display) {
        document.querySelector(selector).style.display = "block";
        document.body.style.overflow = "hidden";
      }
    }, time);
  }
  function showModalByScroll(selector) {
    window.addEventListener("scroll", () => {
      if (!btnPressed && window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        document.querySelector(selector).click();
      }
    });
  }

  // function showGiftByScroll(selector) {
  //   document.querySelector(selector).style.display = "block";
  //   document.body.overflow = "hidden";
  // }

  // const consultation = document.querySelector(".consultation");
  // function showGiftModal(entries, observer) {
  //   const entry = entries[0];

  //   if (!entry.isIntersecting) return;
  //   if (!btnPressed) {
  //     showGiftByScroll(".popup-gift");
  //     console.log("hello world");
  //   }
  //   observer.unobserve(entry.target);
  // }

  // const consultationObserver = new IntersectionObserver(showGiftModal, {
  //   root: null,
  // });

  // consultationObserver.observe(consultation);

  callModalWindow(".button-design", ".popup-design", ".popup-close");
  callModalWindow(".button-consultation", ".popup-consultation", ".popup-close");
  callModalWindow(".fixed-gift", ".popup-gift", ".popup-close", true);
  showModalByScroll(".fixed-gift");
  // showModalByTime(".popup-consultation", 3000);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modals);

/***/ }),

/***/ "./src/js/modules/sliders.js":
/*!***********************************!*\
  !*** ./src/js/modules/sliders.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const sliders = (sliders, dir, prev, next) => {
  const items = document.querySelectorAll(sliders);
  let sliderIndex = 1;
  function showSlider(n) {
    if (n > items.length) sliderIndex = 1;
    if (n < 1) sliderIndex = items.length;
    items.forEach(item => {
      item.classList.add("animated");
      item.style.display = "none";
    });
    items[sliderIndex - 1].style.display = "block";
  }
  showSlider(sliderIndex);
  function plusSlide(n) {
    showSlider(sliderIndex += n);
  }
  let stopAutoScroll;
  function autoScroll() {
    if (dir === "vertical") {
      stopAutoScroll = setInterval(() => {
        plusSlide(1);
        items[sliderIndex - 1].classList.add("slideInDown");
      }, 3000);
    } else {
      stopAutoScroll = setInterval(() => {
        plusSlide(1);
        items[sliderIndex - 1].classList.add("slideInRight");
      }, 3000);
    }
  }
  autoScroll();
  items[0].parentNode.addEventListener("mouseenter", () => {
    clearInterval(stopAutoScroll);
  });
  items[0].parentNode.addEventListener("mouseleave", () => {
    autoScroll();
  });
  try {
    const btnPrev = document.querySelector(prev),
      btnNext = document.querySelector(next);
    btnPrev.addEventListener("click", () => {
      plusSlide(-1);
      items[sliderIndex - 1].classList.remove("slideInRight");
      items[sliderIndex - 1].classList.add("slideInLeft");
    });
    btnNext.addEventListener("click", () => {
      plusSlide(1);
      items[sliderIndex - 1].classList.remove("slideInLeft");
      items[sliderIndex - 1].classList.add("slideInRight");
    });
  } catch (error) {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliders);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modals */ "./src/js/modules/modals.js");
/* harmony import */ var _modules_sliders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sliders */ "./src/js/modules/sliders.js");


window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  (0,_modules_modals__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_sliders__WEBPACK_IMPORTED_MODULE_1__["default"])(".feedback-slider-item", "horizontal", ".main-prev-btn", ".main-next-btn");
  (0,_modules_sliders__WEBPACK_IMPORTED_MODULE_1__["default"])(".main-slider-item", "vertical");
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map