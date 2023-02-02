// Solved

// Take 2 arguments and return their sum
const add = function(num1, num2) {
  return num1 + num2;
};

// Solved

// Take 2 arguments and return their subtraction
const subtract = function(num1, num2) {
	return num1 - num2;
};

// Solved

// Take an array and add all the numbers in the array
const sum = function(array) {
	return array.reduce((callbackFunction, currentValue) => callbackFunction + currentValue, 0);
};

// Solved

// Takes an array and gives the multiplication of all the values
const multiply = function(array) {
  return array.length ? array.reduce((callbackFunction, currentValue) => callbackFunction * currentValue): 0;
};

// Solved

// Take 2 arguments and raise one to the power of the other
const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

// Solved

// Takes an argument and finds its factorial
const factorial = function(arg) {
	if (arg === 0) {
    return 1;
  }

  let product = 1;
  for (let i=arg;i>0;i--){
    product *= i;
  }

  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
