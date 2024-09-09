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


function createEventListeners() {
    const buttons = {

        digits: {
            zeroBtn: document.querySelector("#0"),
            oneBtn: document.querySelector("#1"),
            twoBtn: document.querySelector("#2"),
            threeBtn: document.querySelector("#3"),
            fourBtn: document.querySelector("#4"),
            fiveBtn: document.querySelector("#5"),
            sixBtn: document.querySelector("#6"),
            sevenBtn: document.querySelector("#7"),
            eightBtn: document.querySelector("#8"),
            nineBtn: document.querySelector("#9"),
        },

        operators: {
            divideBtn: document.querySelector("#divide"),
            multiplyBtn: document.querySelector("#multiply"),
            subtractBtn: document.querySelector("#subtract"),
            addBtn: document.querySelector("#add"),
        },

        other: {
            clearBtn: document.querySelector("#clear"),
            equalsBtn: document.querySelector("#equals"),
            decimalBtn: document.querySelector("#decimal")
        }

    }
    
}



function main() {

}