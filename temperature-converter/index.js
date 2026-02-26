let numberInput = document.getElementById("number-input");
let submitBtn = document.getElementById("submit-btn");
let cToF = document.getElementById("cToF");
let fToC = document.getElementById("fToC");
let cToK = document.getElementById("cToK");
let kToC = document.getElementById("kToC");
let fToK = document.getElementById("fToK");
let kToF = document.getElementById("kToF");

let resultDisplay = document.getElementById("result");
let temp;

submitBtn.onclick = function() {
    let inputValue = Number(numberInput.value);

    if (numberInput.value === "") {
        resultDisplay.textContent = "You didn't put any number";
    } else if (isNaN(inputValue)) {
        resultDisplay.textContent = "Please enter a valid number";
    }

    else if (cToF.checked) {
        temp = (inputValue * 9 / 5) + 32;
        resultDisplay.textContent = temp.toFixed(1) + "°F";
    }

    else if (fToC.checked) {
        temp = (inputValue - 32) * 5 / 9;
        resultDisplay.textContent = temp.toFixed(1) + "°C";
    }

    else if (cToK.checked) {
        temp = inputValue + 273.15;
        resultDisplay.textContent = temp.toFixed(1) + "K";
    }

    else if (kToC.checked) {
        temp = inputValue - 273.15;
        resultDisplay.textContent = temp.toFixed(1) + "°C";
    }

    else if (fToK.checked) {
        temp = (inputValue - 32) * 5 / 9 + 273.15;
        resultDisplay.textContent = temp.toFixed(1) + "K";
    }

    else if (kToF.checked) {
        temp = (inputValue - 273.15) * 9 / 5 + 32;
        resultDisplay.textContent = temp.toFixed(1) + "°F";
    }

    else {
        resultDisplay.textContent = "Please select one of the choices";
    }
}