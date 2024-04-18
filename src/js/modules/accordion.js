const accordion = (accordionTitle, accordionBlock) => {
  const title = document.querySelectorAll(accordionTitle),
    block = document.querySelectorAll(accordionBlock);

  title.forEach((btn) => {
    btn.addEventListener("click", function () {
      if (!this.classList.contains("active-style")) {
        title.forEach((item) => {
          item.classList.remove("active-style");
        });
        block.forEach((item) => {
          item.classList.remove("active-content");
          item.style.maxHeight = 0;
        });
      }
      this.classList.toggle("active-style");

      if (this.classList.contains("active-style")) {
        this.nextElementSibling.classList.add("active-content");
        this.nextElementSibling.style.maxHeight =
          this.nextElementSibling.scrollHeight + 80 + "px";
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

export default accordion;
