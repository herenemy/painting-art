import calcScroll from "./calcPageWidth";

const modals = () => {
  let btnPressed = false;
  function callModalWindow(
    triggerSelector,
    modalSelector,
    closeSelector,
    destroy = false
  ) {
    const triggerNode = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      closeNode = document.querySelectorAll(closeSelector),
      scrollWidth = calcScroll();

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

    triggerNode.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        btnPressed = true;
        item.classList.add("animated", "fadeIn");
        showModal();
        if (destroy) item.remove();
      });
    });

    closeNode.forEach((item) => {
      item.addEventListener("click", hideModal);
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        hideModal();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        hideModal();
      }
    });
  }

  function showModalByTime(selector, time) {
    setTimeout(() => {
      let display;

      document.querySelectorAll("[data-modal]").forEach((item) => {
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
      if (
        !btnPressed &&
        window.scrollY + document.documentElement.clientHeight >=
          document.documentElement.scrollHeight
      ) {
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
  callModalWindow(
    ".button-consultation",
    ".popup-consultation",
    ".popup-close"
  );
  callModalWindow(".fixed-gift", ".popup-gift", ".popup-close", true);
  showModalByScroll(".fixed-gift");
  // showModalByTime(".popup-consultation", 3000);
};
export default modals;
