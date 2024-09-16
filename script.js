let imgBox = document.querySelector(".imgBox");
let qrImage = document.querySelector("#qrImage");
let qrText = document.querySelector("#text");
let saveStorageElement = document.querySelector("#saveStorage");
let button = document.querySelector(".button");
button.addEventListener("click", generateQR);
window.addEventListener("load", showTask);

function generateQR() {
  console.log("BUTTON CLICKED");
  if (qrText.value.length > 0) {
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;

    imgBox.classList.add("show-img");
    saveData(qrImage.src);
    showTask();
  } else {
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
  }
}

function saveData(data) {
  localStorage.setItem("qrImage", data);
  console.log("Data saved:", data);
}

function showTask() {
  const savedData = localStorage.getItem("qrImage");
  if (savedData) {
    imgBox.classList.add("show-img");
    qrImage.src = savedData;
  }
  console.log("Retrieved data:", savedData);
}

showTask();
