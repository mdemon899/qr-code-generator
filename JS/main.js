// Calling variables from DOM
let generateBtn = document.querySelector("#generateBtn");
let imgBox = document.querySelector("#imgBox");
let qrImg = document.querySelector("#qrImg");
let inputBox = document.querySelector("#input_Box");

generateBtn.addEventListener("click", () => {
  if (inputBox.value.length > 0) {
    qrImg.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      inputBox.value;
    imgBox.classList.add("showImg");
  } else {
    inputBox.classList.add("error");
    setTimeout(() => {
      inputBox.classList.remove("error");
    }, 1000);
  }
});
