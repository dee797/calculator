'use strict';

function addNumbers(num1, num2) {
    return num1 + num2;
}

function subtractNumbers(num1, num2) {
    return num1 - num2;
}

function multiplyNumbers(num1, num2) {
    return num1 * num2;
}

function divideNumbers(num1, num2) {
    return num1 / num2;
}

function operate(num1, operator, num2) {
    let result;
    switch (operator) {
        case "add":
            result = addNumbers(num1, num2);
        case "subtract":
            result = subtractNumbers(num1, num2);
        case "multiply":
            result = multiplyNumbers(num1, num2);
        case "divide":
            result = divideNumbers(num1, num2);
    }
    return result;
}


function getButtons() {
    const buttons = {
        digits: document.querySelectorAll(".digit"),
        operators: document.querySelectorAll(".operator"),
        other: document.querySelectorAll(".other")
    }

    return buttons;
}


function displayInputs(input) {
    const display = document.querySelector("body .display");
    let displayContent = display.textContent;

    if (displayContent.length < 15) {
        displayContent += input;
        display.textContent = displayContent;
    }
}



function createEventListeners() {
    const buttons = getButtons();

    for (const button of buttons["digits"]) {
        button.addEventListener("click", () => {
            displayInputs(button.id);
        });
    }

    for (const button of buttons["operators"]) {
        button.addEventListener("click", () => {
            displayInputs(button.value);
        });
    }
}



function main() {
    getButtons();
    createEventListeners();

    let firstNum;
    let operator;
    let secondNum;

}


main();