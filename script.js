// select buttons DOM

const calcExt = document.getElementById("calcExt");
const display = document.getElementById("display");
const buttons = calcExt.querySelectorAll("button");

let firstOperand = "";
let secondOperand = "";
let operator = "";
let value = "";

const operators = ["add", "subtract", "multiply", "divide"];

//addition calculation - may need to make this for infinite numbers/arrays

const add = (a, b) => {
  let sum = a + b;
  return sum;
};

//add(3,2);

//subtract calculation - may need to make this for infinite numbers/arrays

const subtract = (a, b) => {
  let difference = a - b;
  return difference;
};

//subtract(3,2);

//multiply calculation

const multiply = (a, b) => {
  let product = a * b;
  return product;
};

//multiply(3,2);

//divide calculation

const divide = (a, b) => {
  let quotient = a / b;
  return quotient;
};

//divide(3,2);

//vars for both numbers and operator
//operate function that calls mathematic functions, takes operator and 2 numbers

function operate(num1, num2, operator) {
  let solution;
  let firstNum = parseInt(num1);
  let secondNum = parseInt(num2);
  switch (operator) {
    case "+":
      solution = add(firstNum, secondNum);
    case "-":
      solution = subtract(firstNum, secondNum);
    case "*":
      solution = multiply(firstNum, secondNum);
    case "/":
      solution = divide(firstNum, secondNum);
  }

  return solution;
}

//populate calculator display when clicking number buttons
function beginCalc() {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.id === "equal") {
        if (firstOperand.length > 0 && secondOperand.length > 0) {
          let result = operate(num1, num2, operator);
          display.textContent = result;
          firstOperand = `${result}`;
          secondOperand = "";
          operator = "";
          value = `${result}`;
        } else {
          display.textContent = "0";
          firstOperand = "";
          value = "";
        }
      }

      if (button.id === "clear") {
        firstOperand = "";
        secondOperand = "";
        value = "";
        operator = "";
        display.textContent = "0";
      }

      switch (button.id) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
          if (operators.includes(operator)) {
            secondOperand += button.textContent;
            value += button.textContent;
            display.textContent = value;
          } else {
            firstOperand += button.textContent;
            value += button.textContent;
            display.textContent = value;
          }

        case "+":
        case "-":
        case "*":
        case "/":
          if (firstOperand.length > 0) {
            operator = button.id;
            if (!value == "0") {
              value = "";
            }
          }
      }
    });
  });
}

beginCalc();
