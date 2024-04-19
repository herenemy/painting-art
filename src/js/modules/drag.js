const drag = () => {
  const uploadFiles = document.querySelectorAll('[name="upload"]');

  ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
    uploadFiles.forEach((input) => {
      input.addEventListener(eventName, (e) => preventDefault(e), false);
    });
  });

  function preventDefault(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  function highlight(e) {
    e.currentTarget.closest(".file_upload").style.border = "5px solid yellow";
    e.currentTarget.closest(".file_upload").style.backgroundColor = "#ccc";
    console.log("its here");
  }

  function unhighlight(e) {
    e.currentTarget.closest(".file_upload").style.border = "none";
    e.currentTarget.closest(".file_upload").style.backgroundColor = "#fff";
    console.log("out");
  }

  ["dragenter", "dragover"].forEach((eventName) => {
    uploadFiles.forEach((input) => {
      input.addEventListener(eventName, () => highlight(input), false);
    });
  });

  ["dragleave", "drop"].forEach((eventName) => {
    uploadFiles.forEach((input) => {
      input.addEventListener(eventName, () => unhighlight(input), false);
    });
  });
};

export default drag;
