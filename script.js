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
for (let i = 0; i < 10; i++) {
    let btn = document.createElement("button");
    btn.classList.add("num");
    btn.textContent = i;
    // grabs the width of the calculator div and divides it by 3
    btn.style.width = calculator.clientWidth / 3 + "px";
    btn.style.height = btn.style.width;
    calculator.appendChild(btn);
};