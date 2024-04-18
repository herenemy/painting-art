const pictureSize = () => {
  const wrapper = document.querySelector(".sizes-wrapper");

  wrapper.addEventListener("mouseover", showImgByHover.bind(this));

  wrapper.addEventListener("mouseout", hideImgByHover.bind(this));

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
      startingPrice = target
        .closest(".sizes-block")
        .querySelector(".starting-price"),
      finalPrice = target.closest(".sizes-block").querySelector(".final-price");

    size.style.display = action;
    startingPrice.style.display = action;
    finalPrice.style.display = action;
  }
};

export default pictureSize;
