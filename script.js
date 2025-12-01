// functions for basic arithmetic
function add(numOne, numTwo) {
    return numOne + numTwo
};

function subtract(numOne, numTwo) {
    return numOne - numTwo
};

function multiply(numOne, numTwo) {
    return numOne * numTwo
};

function divide(numOne, numTwo) {
    return numOne / numTwo
};

// creating variables for the calculator
let firstNum = "";
let operator;
let secondNum = "";
let finalCalc;
let operatorArr = [];

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
clearButton.style.width = (dimBtn * 2) + "px";
clearButton.style.height = dimBtn + "px";

const backBtn = numContainer.querySelector(".backspace");
backBtn.style.width = dimBtn + "px";
backBtn.style.height = dimBtn + "px";

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

// functions for some of the miscelanneous buttons like the backspace, decimal, and sign switching buttons
function backspace() {
    if (firstNum && operator) {
        secondNum = secondNum.slice(0, -1);
        numField.textContent = secondNum;
    } else if (!firstNum || !operator) {
        firstNum = firstNum.slice(0, -1);
        numField.textContent = firstNum;
    } else {
        return;
    };
};

function decimal() {
    if (firstNum && operator) {
        secondNum += ".";
        numField.textContent = secondNum;
    } else if (!firstNum || !operator) {
        firstNum += ".";
        numField.textContent = firstNum;
    } else {
        return;
    };
};

digBtns.forEach(digBtn => digBtn.addEventListener("click", (event) => {
    if (firstNum && operator) {
        secondNum += event.target.textContent;
        numField.textContent = secondNum;
    } else {
        firstNum += event.target.textContent;
        numField.textContent = firstNum;
    };
}));

backBtn.addEventListener("click", backspace);

decBtn.addEventListener("click", decimal);

function calculate(specOperator) {
    if (operator && firstNum && secondNum) {
        finalCalc = operate(window[specOperator], Number(firstNum), Number(secondNum));
        numField.textContent = finalCalc;
        firstNum = finalCalc + "";
        secondNum = "";
    } else {
        return;
    };
};

// grab the operator that was hit and then grab the second number after the operator was hit
const opBtns = operatorContainer.querySelectorAll("#oper");
opBtns.forEach(opBtn => opBtn.addEventListener("click", (event) => {
    let tokenList = event.target.classList;
    operator = tokenList[tokenList.length - 1];
    operatorArr.push(operator);
    if (operatorArr.length > 1) {
        calculate(operatorArr[operatorArr.length - 2]);
    };
}));

// doing the calculation once the equal button has been hit
eqBtn.addEventListener("click", () => {
    calculate(operator);
});

// clearing the calculator
clearButton.addEventListener("click", () => {
    firstNum = "";
    secondNum = "";
    finalCalc = "";
    operator = "";
    numField.textContent = "";
    operatorArr = [];
});