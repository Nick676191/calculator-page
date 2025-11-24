// functions for basic arithmetic
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

// selecting all of the buttons and important div blocks inside of the calculator div
const calculator = document.querySelector(".calc-container");

const calcWindow = calculator.querySelector(".window");

const numField = calcWindow.querySelector(".show");
// numField.textContent = popDisplay();

const btnContainer = calculator.querySelector(".btns");

const numContainer = btnContainer.querySelector(".numbers");
const numContainerWidth = btnContainer.clientWidth * (3/4);
numContainer.style.width = numContainerWidth + "px";

const operatorContainer = btnContainer.createElement("div");

const clearButton = numContainer.querySelector(".clear");
clearButton.style.width = numContainer.clientWidth + "px";
clearButton.style.height = firstBut.style.height;

const decBtn = numContainer.querySelector(".decimal");
decBtn.style.width = firstBut.style.width;
decBtn.style.height = firstBut.style.height;

const posNegButton = numContainer.querySelector(".pos-neg");
posNegButton.style.width = firstBut.style.width;
posNegButton.style.height = firstBut.style.height;

// selecting the operator buttons
const eqBtn = operatorContainer.querySelector(".equal");

const operBtns = operatorContainer.querySelectorAll("#oper");

// creating all of the digit buttons for the calculator
for (let i = 0; i < 10; i++) {
    let btn = document.createElement("button");
    btn.classList.add("num");
    btn.id = "btn";
    btn.textContent = i;
    // grabs the width of the calculator div and divides it by 3
    // subtracting a 1/6 for rounding error, the box-sizing is border box so the margin/padding shouldn't affect the width of the buttons in the container
    const btnWidth = (numContainer.clientWidth / 3) - (1/6);
    btn.style.width = btnWidth + "px";
    btn.style.height = btn.style.width;
    numContainer.appendChild(btn);
};

// populate the display once a digit has been pressed
function popDisplay() {
    const digBtns = numContainer.querySelectorAll("#btn");
    digBtns.forEach(digBtn => digBtn.addEventListener("click", (digBtn) => {
        return digBtn.textContent;
    }));
};