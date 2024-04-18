const smoothScroll = (menuItem, scrollBtn) => {
  const menuNode = document.querySelectorAll(menuItem),
    scrollToTopBtn = document.querySelector(scrollBtn);

  menuNode.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const target = e.target;

      if (target.closest(".burger-menu")) {
        let href;
        target.tagName == "LI"
          ? (href = target.querySelector("a").getAttribute("href"))
          : (href = target.getAttribute("href"));

        document.querySelector(href).scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  function observeMain(entries) {
    if (!entries[0].isIntersecting) scrollToTopBtn.style.opacity = "1";
    else scrollToTopBtn.style.opacity = "0";
  }

  const mainSectionObserver = new IntersectionObserver(observeMain);
  mainSectionObserver.observe(document.querySelector(".main"));

  scrollToTopBtn.addEventListener("click", () => {
    document.querySelector(".header").scrollIntoView({ behavior: "smooth" });
  });
};

export default smoothScroll;
