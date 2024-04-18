import { postTextData } from "./services/post";

const calc = (size, material, options, promocode, result, state) => {
  const sizeBlock = document.querySelector(size),
    materialBlock = document.querySelector(material),
    optionsBlock = document.querySelector(options),
    promocodeBlock = document.querySelector(promocode),
    resultBlock = document.querySelector(result);

  function calcSize() {
    let sum = Math.round(
      +sizeBlock.value * +materialBlock.value + +optionsBlock.value
    );
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

export default calc;
