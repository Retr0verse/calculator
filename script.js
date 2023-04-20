//addition calculation - may need to make this for infinite numbers/arrays

const add = function (a, b) {
  let sum = a + b;
  return sum;
};

//add(3,2);

//subtract calculation - may need to make this for infinite numbers/arrays

const subtract = function (a, b) {
  let difference = a - b;
  return difference;
};

//subtract(3,2);

//multiply calculation

const multiply = function (a, b) {
  let product = a * b;
  return product;
};

//multiply(3,2);

//divide calculation

const divide = function (a, b) {
  let quotient = a / b;
  return quotient;
};

//divide(3,2);

//vars for both numbers and operator
//operate function that calls mathematic functions, takes operator and 2 numbers

const operate = function (num1, num2, operator) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
  }
};
