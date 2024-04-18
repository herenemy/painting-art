import { getResource } from "./services/get";

const showMoreStyles = (buttonSelector, wrapper) => {
  const button = document.querySelector(buttonSelector),
    wrapperSelector = document.querySelector(wrapper);

  button.addEventListener("click", function () {
    getResource("http://localhost:3000/styles")
      .then((res) => createCards(res))
      .catch((err) => console.log(err))
      .finally(() => this.remove());

    function createCards(resource) {
      resource.forEach(({ src, title, link }) => {
        let card = document.createElement("div");
        card.classList.add(
          "animated",
          "fadeInUp",
          "col-sm-3",
          "col-sm-offset-0",
          "col-xs-10",
          "col-xs-offset-1"
        );

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

export default showMoreStyles;
