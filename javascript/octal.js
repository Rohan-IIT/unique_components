function performSurpriseSubtraction() {
    const inputElement = document.getElementById("numberInput");
    const userInput = inputElement.value;
    const octalNumber = "0" + userInput;
    const result = octalNumber - 6;

    const consoleElement = document.getElementById("custom-console");
    const logMessage = document.createElement("p");
    logMessage.textContent = `You performed a subtraction with input: ${userInput}. In the background, we added a leading zero to make it an octal number and then subtracted 8 from it. Result: ${result}`;
    consoleElement.appendChild(logMessage);
}