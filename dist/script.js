/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/accordion.js":
/*!*************************************!*\
  !*** ./src/js/modules/accordion.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const accordion = (accordionTitle, accordionBlock) => {
  const title = document.querySelectorAll(accordionTitle),
    block = document.querySelectorAll(accordionBlock);
  title.forEach(btn => {
    btn.addEventListener("click", function () {
      if (!this.classList.contains("active-style")) {
        title.forEach(item => {
          item.classList.remove("active-style");
        });
        block.forEach(item => {
          item.classList.remove("active-content");
          item.style.maxHeight = 0;
        });
      }
      this.classList.toggle("active-style");
      if (this.classList.contains("active-style")) {
        this.nextElementSibling.classList.add("active-content");
        this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";
      } else {
        this.nextElementSibling.classList.remove("active-content");
        this.nextElementSibling.style.maxHeight = 0;
      }
    });
  });

  // block.forEach((item) => {
  //   item.classList.add("animated", "fadeInUp");
  // });

  // title.forEach((btn) => {
  //   btn.addEventListener("click", function () {
  //     if (!this.classList.contains("active", "active-style")) {
  //       title.forEach((item) => {
  //         item.classList.remove("active", "active-style");
  //       });
  //     }
  //     this.classList.add("active", "active-style");
  //   });
  // });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordion);

/***/ }),

/***/ "./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const burger = (burgerTrigger, burgerMenu) => {
  const trigger = document.querySelector(burgerTrigger),
    menu = document.querySelector(burgerMenu);
  menu.style.display = "none";
  trigger.addEventListener("click", () => {
    if (menu.style.display == "none" && window.screen.availWidth < 993) {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  });
  window.addEventListener("resize", () => {
    if (window.screen.availWidth > 992) {
      menu.style.display = "none";
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burger);

/***/ }),

/***/ "./src/js/modules/calc.js":
/*!********************************!*\
  !*** ./src/js/modules/calc.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/post */ "./src/js/modules/services/post.js");

const calc = (size, material, options, promocode, result, state) => {
  const sizeBlock = document.querySelector(size),
    materialBlock = document.querySelector(material),
    optionsBlock = document.querySelector(options),
    promocodeBlock = document.querySelector(promocode),
    resultBlock = document.querySelector(result);
  function calcSize() {
    let sum = Math.round(+sizeBlock.value * +materialBlock.value + +optionsBlock.value);
    if (sizeBlock.value === "" || materialBlock.value === "") {
      resultBlock.textContent = "Пожалуйста, выберите размер и материал";
    } else {
      resultBlock.textContent = `${sum}₽`;
    }
    if (promocodeBlock.value === "IWANTPOPART") {
      sum = sum * 0.7;
    }
    state[0] = sizeBlock.value;
    state[1] = materialBlock.value;
    state[2] = optionsBlock.value;
    state[3] = sum;
    console.log(state);
  }
  sizeBlock.addEventListener("change", calcSize);
  materialBlock.addEventListener("change", calcSize);
  optionsBlock.addEventListener("change", calcSize);
  promocodeBlock.addEventListener("input", calcSize);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);

/***/ }),

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

/***/ "./src/js/modules/filter.js":
/*!**********************************!*\
  !*** ./src/js/modules/filter.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const filter = () => {
  const menu = document.querySelector(".portfolio-menu"),
    items = menu.querySelectorAll("li"),
    wrapper = document.querySelector(".portfolio-wrapper"),
    menuAll = wrapper.querySelectorAll(".all"),
    no = document.querySelector(".portfolio-no");
  menu.addEventListener("click", e => {
    const target = e.target;
    if (target.tagName == "LI") {
      items.forEach(btn => btn.classList.remove("active"));
      target.classList.add("active");
    }
    const dataImg = target.getAttribute("data-img");
    menuAll.forEach(item => {
      item.style.display = "none";
      if (target.classList.contains("granddad") || target.classList.contains("grandmother")) {
        no.style.display = "block";
      }
      if (item.classList.contains(dataImg)) {
        no.style.display = "none";
        item.style.display = "block";
        item.classList.add("animated", "fadeIn");
      }
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filter);

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
/* harmony import */ var _services_post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/post */ "./src/js/modules/services/post.js");

const forms = state => {
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
      if (item.classList.contains("form_calc")) {
        for (let key in state) {
          formData.append(key, state[key]);
        }
      }
      console.log(state);
      console.log(formData);
      item.style.display = "none";
      (0,_services_post__WEBPACK_IMPORTED_MODULE_0__.postData)(api, formData).then(res => {
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
    if (def.length >= val.length) {
      val = def;
    }
    this.value = matrix.replace(/./g, function (a) {
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

/***/ "./src/js/modules/pictureSize.js":
/*!***************************************!*\
  !*** ./src/js/modules/pictureSize.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const pictureSize = () => {
  const wrapper = document.querySelector(".sizes-wrapper");
  wrapper.addEventListener("mouseover", showImgByHover.bind(undefined));
  wrapper.addEventListener("mouseout", hideImgByHover.bind(undefined));
  function showImgByHover(e) {
    const target = e.target;
    const imgNum = target.dataset.img;
    if (target && target.classList.contains(`size-${imgNum}`)) {
      const img = document.querySelector(`.size-${imgNum}`);
      img.classList.add("animated", "fadeIn");
      img.setAttribute("src", `assets/img/sizes-${imgNum}-1.png`);
      getText(target, "none");
    }
  }
  function hideImgByHover(e) {
    const target = e.target;
    const imgNum = target.dataset.img;
    if (target && target.classList.contains(`size-${imgNum}`)) {
      const img = document.querySelector(`.size-${imgNum}`);
      img.classList.remove("animated", "fadeIn");
      img.setAttribute("src", `assets/img/sizes-${imgNum}.png`);
      getText(target, "block");
    }
  }
  function getText(target, action) {
    let size = target.closest(".sizes-block").querySelector(".size"),
      startingPrice = target.closest(".sizes-block").querySelector(".starting-price"),
      finalPrice = target.closest(".sizes-block").querySelector(".final-price");
    size.style.display = action;
    startingPrice.style.display = action;
    finalPrice.style.display = action;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pictureSize);

/***/ }),

/***/ "./src/js/modules/services/get.js":
/*!****************************************!*\
  !*** ./src/js/modules/services/get.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getResource: () => (/* binding */ getResource)
/* harmony export */ });
const getResource = async url => {
  let res = await fetch(url);
  if (!res.ok) throw new Error(`Could not fetch ${url}. Status: ${res.status}`);
  return await res.json();
};

/***/ }),

/***/ "./src/js/modules/services/post.js":
/*!*****************************************!*\
  !*** ./src/js/modules/services/post.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   postData: () => (/* binding */ postData),
/* harmony export */   postTextData: () => (/* binding */ postTextData)
/* harmony export */ });
const postData = async (url, data) => {
  let res = await fetch(url, {
    method: "POST",
    body: data
  });
  console.log(res);
  if (!res.ok) throw new Error(`Could not fetch ${url}. Status: ${res.status}`);
  return await res.text();
};
const postTextData = async (url, data) => {
  let res = await fetch(url, {
    method: "POST",
    body: data
  });
  console.log(res);
  if (!res.ok) throw new Error(`Could not fetch ${url}. Status: ${res.status}`);
  return await res.json();
};


/***/ }),

/***/ "./src/js/modules/showMoreStyles.js":
/*!******************************************!*\
  !*** ./src/js/modules/showMoreStyles.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/get */ "./src/js/modules/services/get.js");

const showMoreStyles = (buttonSelector, wrapper) => {
  const button = document.querySelector(buttonSelector),
    wrapperSelector = document.querySelector(wrapper);
  button.addEventListener("click", function () {
    (0,_services_get__WEBPACK_IMPORTED_MODULE_0__.getResource)("http://localhost:3000/styles").then(res => createCards(res)).catch(err => console.log(err)).finally(() => this.remove());
    function createCards(resource) {
      resource.forEach(({
        src,
        title,
        link
      }) => {
        let card = document.createElement("div");
        card.classList.add("animated", "fadeInUp", "col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1");
        let cardHTML = `
        <div class=styles-block>
          <img src=${src} alt>
          <h4>${title}</h4>
          <a href="#${link}">Подробнее</a>
        </div>
       `;
        card.innerHTML = cardHTML;
        wrapperSelector.appendChild(card);
      });
    }
  });

  // button.addEventListener("click", (e) => {
  //   showStyle(e);
  // });

  // const showStyle = (e) => {
  //   e.preventDefault();

  //   styles.forEach((card) => {
  //     card.classList.add("animated", "fadeInUp");
  //     card.classList.remove("hidden-lg", "hidden-md", "hidden-sm", "hidden-xs");
  //     card.classList.add(
  //       "col-sm-3",
  //       "col-sm-offset-0",
  //       "col-xs-10",
  //       "col-xs-offset-1"
  //     );
  //   });

  //   button.remove();
  // };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showMoreStyles);

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

/***/ }),

/***/ "./src/js/modules/smoothScroll.js":
/*!****************************************!*\
  !*** ./src/js/modules/smoothScroll.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const smoothScroll = (menuItem, scrollBtn) => {
  const menuNode = document.querySelectorAll(menuItem),
    scrollToTopBtn = document.querySelector(scrollBtn);
  menuNode.forEach(item => {
    item.addEventListener("click", e => {
      e.preventDefault();
      const target = e.target;
      if (target.closest(".burger-menu")) {
        let href;
        target.tagName == "LI" ? href = target.querySelector("a").getAttribute("href") : href = target.getAttribute("href");
        document.querySelector(href).scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });
  function observeMain(entries) {
    if (!entries[0].isIntersecting) scrollToTopBtn.style.opacity = "1";else scrollToTopBtn.style.opacity = "0";
  }
  const mainSectionObserver = new IntersectionObserver(observeMain);
  mainSectionObserver.observe(document.querySelector(".main"));
  scrollToTopBtn.addEventListener("click", () => {
    document.querySelector(".header").scrollIntoView({
      behavior: "smooth"
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smoothScroll);

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
/* harmony import */ var _modules_showMoreStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/showMoreStyles */ "./src/js/modules/showMoreStyles.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ "./src/js/modules/calc.js");
/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/filter */ "./src/js/modules/filter.js");
/* harmony import */ var _modules_pictureSize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/pictureSize */ "./src/js/modules/pictureSize.js");
/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/accordion */ "./src/js/modules/accordion.js");
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/burger */ "./src/js/modules/burger.js");
/* harmony import */ var _modules_smoothScroll__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/smoothScroll */ "./src/js/modules/smoothScroll.js");












window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  let formState = {
    // size,
    // material,
    // options,
    // price,
  };
  (0,_modules_modals__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_sliders__WEBPACK_IMPORTED_MODULE_1__["default"])(".feedback-slider-item", "horizontal", ".main-prev-btn", ".main-next-btn");
  (0,_modules_sliders__WEBPACK_IMPORTED_MODULE_1__["default"])(".main-slider-item", "vertical");
  (0,_modules_mask__WEBPACK_IMPORTED_MODULE_3__["default"])('[name="phone"]');
  (0,_modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="name"]');
  (0,_modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="message"]');
  (0,_modules_showMoreStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(".button-styles", "#styles .row");
  (0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__["default"])("#size", "#material", "#options", ".promocode", ".calc-price", formState);
  (0,_modules_forms__WEBPACK_IMPORTED_MODULE_2__["default"])(formState);
  (0,_modules_filter__WEBPACK_IMPORTED_MODULE_7__["default"])();
  (0,_modules_pictureSize__WEBPACK_IMPORTED_MODULE_8__["default"])();
  (0,_modules_accordion__WEBPACK_IMPORTED_MODULE_9__["default"])(".accordion-heading", ".accordion-block");
  (0,_modules_burger__WEBPACK_IMPORTED_MODULE_10__["default"])(".burger", ".burger-menu");
  (0,_modules_smoothScroll__WEBPACK_IMPORTED_MODULE_11__["default"])(".burger-menu", ".pageup");
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map