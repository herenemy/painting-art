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

/***/ "./src/js/modules/checkTextInputs.js":
/*!*******************************************!*\
  !*** ./src/js/modules/checkTextInputs.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const checkTextInputs = selector => {
  const inputs = document.querySelectorAll(selector);
  inputs.forEach(input => {
    input.addEventListener("keypress", e => {
      let textMessage;
      if (e.key.match(/[^а-яё 0-9]/gi)) {
        e.preventDefault();
        if (document.querySelector(".input-lang-validation")) return;
        textMessage = document.createElement("div");
        textMessage.textContent = "Введите текст на Русском!";
        textMessage.classList.add("input-lang-validation");
        if (input.getAttribute("name") === "name") {
          document.querySelector(".input-wrapper").insertAdjacentElement("beforebegin", textMessage);
        } else {
          input.insertAdjacentElement("afterend", textMessage);
        }
      }
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkTextInputs);

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const forms = () => {
  const form = document.querySelectorAll("form"),
    input = document.querySelectorAll("input"),
    textArea = document.querySelectorAll("textarea"),
    upload = document.querySelectorAll('[name="upload"]');
  const message = {
    success: "Спасибо! Скоро мы свяжемся с вами.",
    loading: "Загрузка...",
    failure: "Что то пошло не так",
    spinner: "assets/img/spinner.gif",
    ok: "assets/img/ok.png",
    fail: "assets/img/fail.png"
  };
  const clearInpurs = () => {
    input.forEach(item => {
      item.value = "";
    });
    textArea.forEach(item => {
      item.value = "";
    });
  };
  upload.forEach(item => {
    item.addEventListener("input", () => {
      let nameLength = item.files[0].name.split(".")[0].length;
      let arr = [item.files[0].name.split(".")[0].substring(0, 6), item.files[0].name.split(".")[1]];
      let dots;
      nameLength < 6 ? dots = "." : dots = "...";
      const output = arr[0] + dots + arr[1];
      item.previousElementSibling.innerHTML = output;
    });
  });
  const postData = async (url, data) => {
    const res = await fetch(url, {
      method: "POST",
      body: data
    });
    return await res.text();
  };
  form.forEach(item => {
    item.addEventListener("submit", e => {
      e.preventDefault();
      let statusMessage = document.createElement("div");
      statusMessage.classList.add("status");
      statusMessage.style.textAlign = "center";
      item.parentNode.appendChild(statusMessage);
      let statusImg = document.createElement("img");
      statusImg.classList.add("animated", "fadeInUp");
      statusImg.setAttribute("src", message.spinner);
      statusMessage.appendChild(statusImg);
      let statusText = document.createElement("p");
      statusText.classList.add("animated", "fadeInUp");
      statusText.textContent = message.loading;
      statusMessage.appendChild(statusText);
      let path = {
        designer: "assets/server.php",
        question: "assets/question.php"
      };
      let api;
      item.closest(".popup-design") || item.classList.contains("form_calc") ? api = path.designer : api = path.question;
      let formData = new FormData(item);
      item.style.display = "none";
      postData(api, formData).then(res => {
        console.log(res);
        console.log(api);
        item.classList.add("animated", "fadeOutUp");
        statusImg.setAttribute("src", message.ok);
        statusText.textContent = message.success;
      }).catch(err => {
        console.log(err);
        item.classList.add("animated", "fadeOutUp");
        statusImg.setAttribute("src", message.fail);
        statusText.textContent = message.failure;
      }).finally(() => {
        clearInpurs();
        setTimeout(() => {
          item.style.display = "block";
          item.classList.remove("fadeOutUp");
          item.classList.add("fadeInUp");
          statusMessage.remove();
          upload.forEach(item => {
            item.previousElementSibling.innerText = "Файл не выбран";
          });
        }, 5000);
      });
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./src/js/modules/mask.js":
/*!********************************!*\
  !*** ./src/js/modules/mask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const mask = selector => {
  const setCursorPosition = (pos, elem) => {
    elem.focus();
    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      let range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select();
    }
  };
  function createMask(event) {
    let matrix = "+7 (___) ___-__-__",
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, "");
    if (def >= val.length) {
      val = def;
    }
    this.value = matrix.replace(/./g, function (a) {
      console.log("hello");
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
    });
    if (event.type === "blur") {
      if (this.value.length == 2) {
        this.value = "";
      }
    } else {
      setCursorPosition(this.value.length, this);
    }
  }
  const inputs = document.querySelectorAll(selector);
  inputs.forEach(input => {
    input.addEventListener("input", createMask);
    input.addEventListener("focus", createMask);
    input.addEventListener("blur", createMask);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mask);

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
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mask */ "./src/js/modules/mask.js");
/* harmony import */ var _modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/checkTextInputs */ "./src/js/modules/checkTextInputs.js");





window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  (0,_modules_modals__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_sliders__WEBPACK_IMPORTED_MODULE_1__["default"])(".feedback-slider-item", "horizontal", ".main-prev-btn", ".main-next-btn");
  (0,_modules_sliders__WEBPACK_IMPORTED_MODULE_1__["default"])(".main-slider-item", "vertical");
  (0,_modules_forms__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_modules_mask__WEBPACK_IMPORTED_MODULE_3__["default"])('[name="phone"]');
  (0,_modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="name"]');
  (0,_modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="message"]');
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map