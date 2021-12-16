//states
let firstNumber = "";
let secondNumber = "";
let operation = null;
let result = 0;

//variables
const operationButtons = document.querySelectorAll("#operationBtn");
const numberButtons = document.querySelectorAll("#numberBtn");
const equalButton = document.getElementById("equalsBtn");
const previousNumber = document.getElementById("previousOperand");
const currentNumber = document.getElementById("currentOperand");
const clearBtn = document.getElementById("clearBtn");
const deleteBtn = document.getElementById("deleteBtn");

//event listeners
equalButton.addEventListener("click", () => evaluate());
clearBtn.addEventListener("click", () => reloadScreen());
deleteBtn.addEventListener("click", () => deleteDigit());

numberButtons.forEach((button) => {
  button.addEventListener("click", () => appendNumber(button.textContent));
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => setOperation(button.textContent));
});

document.addEventListener("keydown", (event) => {
  if (
    event.key == "1" ||
    event.key == "2" ||
    event.key == "3" ||
    event.key == "4" ||
    event.key == "5" ||
    event.key == "6" ||
    event.key == "7" ||
    event.key == "8" ||
    event.key == "9" ||
    event.key == "0" ||
    event.key == "."
  ) {
    appendNumber(event.key);
  } else if (event.key == "+" || event.key == "-") {
    setOperation(event.key);
  } else if (event.key == "*") {
    setOperation("x");
  } else if (event.key == "/") {
    setOperation("÷");
  } else if (event.key == "Enter") {
    evaluate();
  } else if (event.key == "Backspace") {
    deleteDigit();
  }
});

//functions
const evaluate = () => {
  switch (operation) {
    case "+":
      result = parseFloat(firstNumber) + parseFloat(secondNumber);
      previousNumber.innerText = "";
      currentNumber.innerText = result;
      secondNumber = "";
      firstNumber = result.toString();
      operation = null;
      break;
    case "-":
      result = parseFloat(firstNumber) - parseFloat(secondNumber);
      previousNumber.innerText = "";
      currentNumber.innerText = result;
      secondNumber = "";
      firstNumber = result.toString();
      operation = null;
      break;
    case "x":
      result = parseFloat(firstNumber) * parseFloat(secondNumber);
      previousNumber.innerText = "";
      currentNumber.innerText = result;
      secondNumber = "";
      firstNumber = result.toString();
      operation = null;
      break;
    case "÷":
      result = parseFloat(firstNumber) / parseFloat(secondNumber);
      previousNumber.innerText = "";
      currentNumber.innerText = result;
      secondNumber = "";
      firstNumber = result.toString();
      operation = null;
      break;
  }
};

const deleteDigit = () => {
  if (operation == null) {
    firstNumber = firstNumber.substring(0, firstNumber.length - 1);
    currentNumber.innerText = firstNumber;
  }
  if (operation != null) {
    secondNumber = secondNumber.substring(0, secondNumber.length - 1);
    currentNumber.innerText = secondNumber;
  }
};

const reloadScreen = () => {
  firstNumber = "";
  secondNumber = "";
  operation = null;
  currentNumber.innerText = "";
  previousNumber.innerText = "";
};

const appendNumber = (digit) => {
  if (operation == null) {
    firstNumber = firstNumber.concat(digit);
    currentNumber.innerText = firstNumber;
  }
  if (operation != null) {
    secondNumber = secondNumber.concat(digit);
    previousNumber.innerText = firstNumber;
    currentNumber.innerText = secondNumber;
  }
};

const setOperation = (operationValue) => {
  if (firstNumber != "" && operation == null) {
    operation = operationValue;
    firstNumber = firstNumber.concat(operationValue);
    currentNumber.innerText = firstNumber;
  } else if (operation != null && firstNumber != "" && secondNumber != "") {
    evaluate(operationValue);
    firstNumber = firstNumber.concat(operationValue);
    currentNumber.innerText = firstNumber;
    operation = operationValue;
  }
};
