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
        case "-":
            result = subtractNumbers(num1, num2);
        case "*":
            result = multiplyNumbers(num1, num2);
        case "/":
            result = divideNumbers(num1, num2);
    }
    return result;
}