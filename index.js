let dropArea = document.getElementById("container");
let fileInput = document.getElementById("fileInput");

function checkFile(file) {
  console.log(file.size);
  if (file.size <= 1000000) {
    console.log(file.name);
  } else {
    console.log("Картинка превышает размер 1 Мб");
  }
}
container.addEventListener("dragenter", (event) => {
  event.preventDefault();
  container.classList.add("grey-fon");
  let file = event.dataTransfer.files[0];
  checkFile(file);
});

container.addEventListener("dragover", (event) => {
  event.preventDefault();
});

container.addEventListener("dragleave", (event) => {
  container.classList.remove("grey-fon");
});

container.addEventListener("drop", (event) => {
  event.preventDefault();
  container.classList.remove("grey-fon");
  let file = event.dataTransfer.files[0];
  checkFile(file);
});

container.addEventListener("change", (event) => {
  let file = event.target.files[0];
  checkFile(file);
});

let inputBase = document.getElementById("inputBase");
let parBase = document.getElementById("textBase");

inputBase.addEventListener("change", function () {
  let result = window.btoa(inputBase.value);
  parBase.textContent = result;
});
