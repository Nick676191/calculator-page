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
let firstNum = "";
let operator;
let secondNum = "";

// creating an operate function
function operate(operator, numOne, numTwo) {
    return operator(numOne, numTwo);
};

// selecting all of the buttons and important div blocks inside of the calculator div
const calculator = document.querySelector(".calc-container");

const calcWindow = calculator.querySelector(".window");

const numField = calcWindow.querySelector(".show");

const btnContainer = calculator.querySelector(".btns");

const numContainer = btnContainer.querySelector(".numbers");
const numContainerWidth = btnContainer.clientWidth * (3/4);
numContainer.style.width = numContainerWidth + "px";

const operatorContainer = btnContainer.querySelector(".operators");

const clearButton = numContainer.querySelector(".clear");
const dimBtn = (numContainer.clientWidth / 3) - (1/6);
clearButton.style.width = numContainer.clientWidth + "px";
clearButton.style.height = dimBtn + "px";

const decBtn = numContainer.querySelector(".decimal");
decBtn.style.width = dimBtn + "px";
decBtn.style.height = dimBtn + "px";

const posNegButton = numContainer.querySelector(".pos-neg");
posNegButton.style.width = dimBtn + "px";
posNegButton.style.height = dimBtn + "px";

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
    numContainer.insertBefore(btn, decBtn);
};

// populate the display once a digit has been pressed
const digBtns = numContainer.querySelectorAll("#btn");
digBtns.forEach(digBtn => digBtn.addEventListener("click", (event) => {
    let numClicked = event.target.textContent;
    firstNum += numClicked;
    numField.textContent = firstNum;
}));

// grab the operator that was hit
const opBtns = operatorContainer.querySelectorAll("#oper");
opBtns.forEach(opBtn => opBtn.addEventListener("click", (event) => {
    let tokenList = event.target.classList;
    operator = tokenList[tokenList.length - 1];
}));