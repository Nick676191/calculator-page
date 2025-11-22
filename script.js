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
const numContainerWidth = btnContainer.clientWidth * (3/4);
numContainer.style.width = numContainerWidth + "px";
btnContainer.appendChild(numContainer);

const operatorContainer = document.createElement("div");
operatorContainer.classList.add("operators");
btnContainer.appendChild(operatorContainer);

for (let i = 0; i < 10; i++) {
    let btn = document.createElement("button");
    btn.classList.add("num");
    btn.textContent = i;
    // grabs the width of the calculator div and divides it by 3
    // subtracting a 1/6 for rounding error, the box-sizing is border box so the margin/padding shouldn't affect the width of the buttons in the container
    const btnWidth = (numContainer.clientWidth / 3) - (1/6);
    btn.style.width = btnWidth + "px";
    btn.style.height = btn.style.width;
    numContainer.appendChild(btn);
};

const clearButton = document.createElement("button");
const firstBut = document.querySelector(".num");
clearButton.classList.add("clear");
clearButton.style.width = numContainer.clientWidth + "px";
clearButton.style.height = firstBut.style.height;
clearButton.textContent = "clear";
numContainer.insertBefore(clearButton, firstBut);

const decBtn = document.createElement("button");
decBtn.classList.add("decimal");
decBtn.style.width = firstBut.style.width;
decBtn.style.height = firstBut.style.height;
decBtn.textContent = ".";
numContainer.appendChild(decBtn);

const posNegButton = document.createElement("button");
posNegButton.classList.add("pos-neg");
posNegButton.style.width = firstBut.style.width;
posNegButton.style.height = firstBut.style.height;
posNegButton.textContent = "+/-"
numContainer.appendChild(posNegButton);