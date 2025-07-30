let num1;
let num2;
let currentNumber;
let operation;
let result;
const displayedNumber = document.getElementById("calculator-header");
const clearButton = document.getElementById("clear");
const operations = document.querySelectorAll(".operant");
const equalSign = document.getElementById("equal");
const digit0 = document.getElementById("0");
const digit1 = document.getElementById("1");
const digit2 = document.getElementById("2");
const digit3 = document.getElementById("3");
const digit4 = document.getElementById("4");
const digit5 = document.getElementById("5");
const digit6 = document.getElementById("6");
const digit7 = document.getElementById("7");
const digit8 = document.getElementById("8");
const digit9 = document.getElementById("9");
const digits = [
  digit0,
  digit1,
  digit2,
  digit3,
  digit4,
  digit5,
  digit6,
  digit7,
  digit8,
  digit9,
];

const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const multipy = function (num1, num2) {
  return num1 * num2;
};

const divide = function (num1, num2) {
  return num1 / num2;
};

const operate = function (num1, operation, num2) {
  let outcome;
  switch (operation) {
    case "+":
      outcome = add(num1, num2);
      break;
    case "-":
      outcome = subtract(num1, num2);
      break;
    case "*":
      outcome = multipy(num1, num2);
      break;
    case "/":
      outcome = divide(num1, num2);
      console.log(`division: ${num1} ${num2}`)
      break;
  }
  return outcome;
};

digits.forEach((digit, idx) => {
  digit.addEventListener("click", () => {
    displayedNumber.textContent = displayedNumber.textContent.concat(idx);
    currentNumber = displayedNumber.textContent;
  });
});

const clearDisplay = () => {
  if (currentNumber) {
    displayedNumber.textContent = "";
    currentNumber = "";
  } else {
    clearCache();
  }
};

clearButton.addEventListener("click", clearDisplay);

operations.forEach((operant) => {
  operant.addEventListener("click", (e) => {
    if(num1){

    }
    switch (e.target.id) {
      case "multiplication":
        currentNumber = displayedNumber.textContent;
        num1 = parseFloat(currentNumber);
        clearDisplay();
        operation = "*";
        break;
      case "division":
        currentNumber = displayedNumber.textContent;
        num1 = parseFloat(currentNumber);
        clearDisplay();
        operation = "/";
        break;
      case "addition":
        currentNumber = displayedNumber.textContent;
        num1 = parseFloat(currentNumber);
        clearDisplay();
        operation = "+";
        break;
      case "subtraction":
        currentNumber = displayedNumber.textContent;
        num1 = parseFloat(currentNumber);
        clearDisplay();
        operation = "-";
        break;
    }
  });
});

const clearCache = () => {
  num2 = "";
  operation = "";
  result = null;
};

equalSign.addEventListener("click", () => {
  num2 = parseFloat(currentNumber);

  if (num1 && num2 && operation) {
    console.log(`line 128 ${num1} ${operation} ${num2}`)
    result = Math.round(operate(num1, operation, num2)*10000)/10000;
    displayedNumber.textContent = result;
    console.log(`num1 = ${num1}`);
    num1 = parseFloat(result);
    console.log(`num1 = ${num1}`);
    clearCache();
  }
});
