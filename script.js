let imgBox = document.querySelector(".imdBox");
let qrImage = document.querySelector("#qrImage");
let qrText = document.querySelector("#text");

let button = document.querySelector(".button");
button.addEventListener("click", generateQR);

function generateQR(){
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value
}