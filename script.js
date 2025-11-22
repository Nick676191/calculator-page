let add = function(numOne, numTwo) {
    return numOne + numTwo
};

let subtract = function(numOne, numTwo) {
    return numOne - numTwo
};

let multiply = function(numOne, numTwo) {
    return numOne * numTwo
};

let divide = function(numOne, numTwo) {
    return numOne / numTwo
};

// creating variables for the calculator
let firstNum;
let operator;
let secondNum;

// creating an operate function
function operate(operator, numOne, numTwo) {
    return operator(numOne, numTwo);
};

// creating all of the buttons inside of the calculator div
const calculator = document.querySelector(".calc-container");

const calcWindow = document.createElement("div");
calcWindow.classList.add("window");
calculator.appendChild(calcWindow);

const btnContainer = document.createElement("div");
btnContainer.classList.add("btns");
calculator.appendChild(btnContainer);

const numContainer = document.createElement("div");
numContainer.classList.add("numbers");
btnContainer.appendChild(numContainer);

const operatorContainer = document.createElement("div");
operatorContainer.classList.add("operators");
btnContainer.appendChild(operatorContainer);

for (let i = 0; i < 10; i++) {
    let btn = document.createElement("button");
    btn.classList.add("num");
    btn.textContent = i;
    // grabs the width of the calculator div and divides it by 3
    btn.style.width = calculator.clientWidth / 3 + "px";
    btn.style.height = btn.style.width;
    numContainer.appendChild(btn);
};