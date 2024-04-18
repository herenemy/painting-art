import { postData } from "./services/post";

const forms = (state) => {
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
    fail: "assets/img/fail.png",
  };

  const clearInpurs = () => {
    input.forEach((item) => {
      item.value = "";
    });
    textArea.forEach((item) => {
      item.value = "";
    });
  };

  upload.forEach((item) => {
    item.addEventListener("input", () => {
      let nameLength = item.files[0].name.split(".")[0].length;
      let arr = [
        item.files[0].name.split(".")[0].substring(0, 6),
        item.files[0].name.split(".")[1],
      ];
      let dots;
      nameLength < 6 ? (dots = ".") : (dots = "...");

      const output = arr[0] + dots + arr[1];
      item.previousElementSibling.innerHTML = output;
    });
  });

  form.forEach((item) => {
    item.addEventListener("submit", (e) => {
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
        question: "assets/question.php",
      };
      let api;
      item.closest(".popup-design") || item.classList.contains("form_calc")
        ? (api = path.designer)
        : (api = path.question);

      let formData = new FormData(item);
      if (item.classList.contains("form_calc")) {
        for (let key in state) {
          formData.append(key, state[key]);
        }
      }

      console.log(state);
      console.log(formData);

      item.style.display = "none";

      postData(api, formData)
        .then((res) => {
          console.log(res);
          console.log(api);
          item.classList.add("animated", "fadeOutUp");
          statusImg.setAttribute("src", message.ok);
          statusText.textContent = message.success;
        })
        .catch((err) => {
          console.log(err);
          item.classList.add("animated", "fadeOutUp");
          statusImg.setAttribute("src", message.fail);
          statusText.textContent = message.failure;
        })
        .finally(() => {
          clearInpurs();
          setTimeout(() => {
            item.style.display = "block";
            item.classList.remove("fadeOutUp");
            item.classList.add("fadeInUp");
            statusMessage.remove();

            upload.forEach((item) => {
              item.previousElementSibling.innerText = "Файл не выбран";
            });
          }, 5000);
        });
    });
  });
};

export default forms;
