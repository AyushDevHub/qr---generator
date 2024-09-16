let imgBox = document.querySelector(".imgBox");               /* Select the element with the class "imgBox" */
let qrImage = document.querySelector("#qrImage");             /* Select the image element with the ID "qrImage" */
let qrText = document.querySelector("#text");                 /* Select the input field with the ID "text" */
let saveStorageElement = document.querySelector("#saveStorage"); /* Select the element with the ID "saveStorage" (not used yet) */
let button = document.querySelector(".button");               /* Select the button element with the class "button" */
button.addEventListener("click", generateQR);                 /* Add a click event listener to the button that calls the generateQR function */

function generateQR() {
    console.log("BUTTON CLICKED");                            /* Log a message to the console when the button is clicked */
    if (qrText.value.length > 0) {                            /* Check if the input field has text */
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        /* Set the image source to a dynamically generated QR code using the text from the input field */
        imgBox.classList.add("show-img");                     /* Add the class "show-img" to imgBox to display the image */
        saveData(qrImage.src);                                /* Call the saveData function to store the generated QR code URL */
        showTask();                                           /* Call showTask function to retrieve and show the saved data */
    } else {
        qrText.classList.add('error');                        /* Add the "error" class to the input field if it is empty */
        setTimeout(() => {
            qrText.classList.remove('error');                 /* Remove the "error" class after 1 second */
        }, 1000);                                             /* 1000ms (1 second) timeout */
    }
}

function saveData(data) {
    localStorage.setItem("qrImage", data);                    /* Save the generated QR code URL in the local storage */
    console.log("Data saved:", data);                         /* Log the saved data to the console */
}

function showTask() {
    const savedData = localStorage.getItem("qrImage");        /* Retrieve the stored QR code URL from local storage */
    console.log("Retrieved data:", savedData);                /* Log the retrieved data to the console */
}

showTask();                                                   /* Call showTask to check if there is already stored QR code data on page load */
