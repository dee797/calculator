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
        case "+":
            result = addNumbers(num1, num2);
            break
        case "-":
            result = subtractNumbers(num1, num2);
            break
        case "*":
            result = multiplyNumbers(num1, num2);
            break
        case "/":
            result = divideNumbers(num1, num2);
            break
    }

    if (!Number.isInteger(result)) result = Math.round(result * 1000000000) / 1000000000

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



function main() {
    const buttons = getButtons();
    const display = document.querySelector("body .display");

    let firstNum;
    let operator;
    let secondNum;

    createEventListeners();

    function createEventListeners() {
        for (const button of buttons["digits"]) {
            button.addEventListener("click", () => {
                displayInputs(button.id);
            });
        }

        for (const button of buttons["operators"]) {
            button.addEventListener("click", () => {
                const result = displayResult()

                if (!display.textContent.includes(" ")) displayInputs(button.value);
                else if (result !== "") display.textContent = result + button.value;
            });
        }

        buttons.other[0].addEventListener("click", () => {
            display.textContent = "";
        });

        buttons.other[1].addEventListener("click", () => {
            if (!display.textContent.includes(".")) displayInputs(buttons.other[1].value);
        });

        buttons.other[2].addEventListener("click", () => {
            const result = displayResult();
            if (result !== "") display.textContent = result;
        });
    }



    function displayResult() {
        const arr = display.textContent.split(" ");
        let result = "";

        if (arr.length === 3 && arr[2] !== "") {
            firstNum = parseFloat(arr[0]);
            operator = arr[1];
            secondNum = parseFloat(arr[2]);
            result = operate(firstNum, operator, secondNum);
        }

        return result;
    }
}



main();