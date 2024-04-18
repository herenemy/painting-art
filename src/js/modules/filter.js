const filter = () => {
  const menu = document.querySelector(".portfolio-menu"),
    items = menu.querySelectorAll("li"),
    wrapper = document.querySelector(".portfolio-wrapper"),
    menuAll = wrapper.querySelectorAll(".all"),
    no = document.querySelector(".portfolio-no");

  menu.addEventListener("click", (e) => {
    const target = e.target;

    if (target.tagName == "LI") {
      items.forEach((btn) => btn.classList.remove("active"));
      target.classList.add("active");
    }

    const dataImg = target.getAttribute("data-img");
    menuAll.forEach((item) => {
      item.style.display = "none";
      if (
        target.classList.contains("granddad") ||
        target.classList.contains("grandmother")
      ) {
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

export default filter;
