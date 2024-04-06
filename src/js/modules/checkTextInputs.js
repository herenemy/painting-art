const checkTextInputs = (selector) => {
  const inputs = document.querySelectorAll(selector);

  inputs.forEach((input) => {
    input.addEventListener("keypress", (e) => {
      let textMessage;
      if (e.key.match(/[^а-яё 0-9]/gi)) {
        e.preventDefault();

        if (document.querySelector(".input-lang-validation")) return;
        textMessage = document.createElement("div");
        textMessage.textContent = "Введите текст на Русском!";
        textMessage.classList.add("input-lang-validation");
        if (input.getAttribute("name") === "name") {
          document
            .querySelector(".input-wrapper")
            .insertAdjacentElement("beforebegin", textMessage);
        } else {
          input.insertAdjacentElement("afterend", textMessage);
        }
      }
    });
  });
};
export default checkTextInputs;
