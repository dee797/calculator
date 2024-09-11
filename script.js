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

    addEvents();


    function addEvents() {
        for (const button of buttons["digits"]) {
            button.addEventListener("click", () => {
                displayInputs(button.id);
            });
        }

        for (const button of buttons["operators"]) {
            button.addEventListener("click", () => {
                const result = getResult()

                if (!display.textContent.includes(" ") && display.textContent !== "") displayInputs(button.value);
                else if (result !== "") display.textContent = result + button.value;
            });
        }


        buttons.other[0].addEventListener("click", () => {
            let content = display.textContent;

            if (content.endsWith(" ")) {
                content = content.slice(0, content.length - 3);
                display.textContent = content;
            } else if (content !== "") {
                content = content.slice(0, content.length - 1);
                display.textContent = content;
            }
        })

        buttons.other[1].addEventListener("click", () => {
            display.textContent = "";
        });

        buttons.other[2].addEventListener("click", () => {
            const arr = display.textContent.split(" ");

            if (arr[1] === undefined && !arr[0].includes(".")) arr[0] += buttons.other[2].value;
            if (arr[2] !== undefined && !arr[2].includes(".")) arr[2] += buttons.other[2].value;

            display.textContent = arr.join(" ");
        });

        buttons.other[3].addEventListener("click", () => {
            const result = getResult();
            if (result !== "") display.textContent = result;
        });


        addEventListener("keydown", event => {
            const keyPress = event.key;
            for (const key in buttons) {
                for (const button of buttons[key]) {
                    if (button.id.includes(keyPress) || button.value.includes(keyPress)) {
                        button.dispatchEvent(new MouseEvent("click", {view: window}));
                    }
                }
            }
        });
    }



    function getResult() {
        const arr = display.textContent.split(" ");
        let result = "";

        if (arr.length === 3 && arr[2] !== "") {
            firstNum = parseFloat(arr[0]);
            operator = arr[1];
            secondNum = parseFloat(arr[2]);

            if (operator === "/" && secondNum === 0) {
                alert("Error: Cannot divide by 0.");
                buttons.other[1].dispatchEvent(new MouseEvent("click", {view: window}));
            } else {
                result = operate(firstNum, operator, secondNum);
            }
        }

        return result;
    }
}



main();