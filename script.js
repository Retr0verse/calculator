// select buttons DOM

const calcExt = document.getElementById("calcExt");
const display = document.getElementById("display");
const totalBtns = calcExt.querySelectorAll("button");

let firstOperand = "";
let secondOperand = "";
let operator = "";
let value = "";

const operators = ["add", "subtract", "multiply", "divide"];

//vars for both numbers and operator
//operate function that calls mathematic functions, takes operator and 2 numbers

function operate(operator, num1, num2) {
  let solution;
  let firstNum = parseInt(num1);
  let secondNum = parseInt(num2);
  switch (operator) {
    case "add":
      solution = add(firstNum, secondNum);
      break;
    case "subtract":
      solution = subtract(firstNum, secondNum);
      break;
    case "multiply":
      solution = multiply(firstNum, secondNum);
      break;
    case "divide":
      solution = divide(firstNum, secondNum);
      break;
  }

  return solution;
}

//addition calculation - may need to make this for infinite numbers/arrays

function add(a, b) {
  return a + b;
}

//add(3,2);

//subtract calculation - may need to make this for infinite numbers/arrays

function subtract(a, b) {
  return a - b;

}

//subtract(3,2);

//multiply calculation

function multiply(a, b) {
 return a * b;

}

//multiply(3,2);

//divide calculation

function divide(a, b) {
  return b === 0 ? 0 : a / b;

}

//divide(3,2);

//populate calculator display when clicking number buttons
function beginCalc() {
  totalBtns.forEach(button => {
    button.addEventListener("click", () => {
      if (button.id === "equal") {
        if (firstOperand.length > 0 && secondOperand.length > 0) {
          let result = operate(operator, firstOperand, secondOperand);
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
            break;
        case "add":
        case "subtract":
        case "multiply":
        case "divide":
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
