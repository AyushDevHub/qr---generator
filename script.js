let imgBox = document.querySelector(".imgBox");
let qrImage = document.querySelector("#qrImage");
let qrText = document.querySelector("#text");
let saveStorageElement = document.querySelector("#saveStorage");
let button = document.querySelector(".button");
button.addEventListener("click", generateQR);


function generateQR(){
    console.log("bUTTON CLICKED");
    if (qrText.value.length > 0) {              
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value
        imgBox.classList.add("show-img");
        saveData();
        showTask();
    } else {
        qrText.classList.add('error');
        setTimeout(()=>{
            qrText.classList.remove('error');
        },1000);
    }
}
function saveData(data){
    localStorage.setItem("qrImage",data);
    console.log("Data saved:", data);

}
function showTask() {
    const savedData = localStorage.getItem("qrImage");
    console.log("Retrieved data:", savedData);
}

showTask();
