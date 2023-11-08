// Get references to the input field and the generate button
const inputField = document.getElementById("qr-input");
const generateButton = document.getElementById("generate-btn");
const qrCode = document.querySelector(".qr-code");
const qrCodeContainer = document.querySelector(".qr-container");

// Define the API URL for generating QR codes
const qrCodeApiUrl = "https://api.qrserver.com/v1/create-qr-code/?size=340x340&data=";

// Add an event listener to the generate button
generateButton.addEventListener("click", function() {
    // Get the user input from the input field
    const userInput = inputField.value;

    // Construct the full QR code API URL with user input
    const qrCodeUrl = qrCodeApiUrl + encodeURIComponent(userInput);

    // Create an image element for the QR code
    const qrCodeImage = document.createElement("img");
    qrCodeImage.src = qrCodeUrl;

    // Clear any previous QR codes
    qrCode.innerHTML = "";

    // Display the QR code in the designated container
    qrCode.appendChild(qrCodeImage);

    // Show the qr-container
    qrCodeContainer.style.display = "flex";
});