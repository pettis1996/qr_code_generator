const inputField = document.getElementById("qr-input");
const generateButton = document.getElementById("generate-btn");
const qrCode = document.querySelector(".qr-code");
const qrCodeContainer = document.querySelector(".qr-container");

const qrCodeApiUrl = "https://api.qrserver.com/v1/create-qr-code/?size=340x340&data=";

generateButton.addEventListener("click", function() {
    const userInput = inputField.value;

    const qrCodeUrl = qrCodeApiUrl + encodeURIComponent(userInput);

    const qrCodeImage = document.createElement("img");
    qrCodeImage.src = qrCodeUrl;

    qrCode.innerHTML = "";

    qrCode.appendChild(qrCodeImage);

    qrCodeContainer.style.display = "flex";
});