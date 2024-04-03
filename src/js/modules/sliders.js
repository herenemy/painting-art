const sliders = (sliders, dir, prev, next) => {
  const items = document.querySelectorAll(sliders);
  let sliderIndex = 1;

  function showSlider(n) {
    if (n > items.length) sliderIndex = 1;
    if (n < 1) sliderIndex = items.length;

    items.forEach((item) => {
      item.classList.add("animated");
      item.style.display = "none";
    });
    items[sliderIndex - 1].style.display = "block";
  }
  showSlider(sliderIndex);

  function plusSlide(n) {
    showSlider((sliderIndex += n));
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

export default sliders;
