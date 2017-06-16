(function() {
"use strict";

var myNameIs = "Dewayne";
/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 *  > sayHello("codeup") // returns "Hello, codeup!"
 */

function sayHello(name) {
  console.log("Hello, " + name + "!")
}

sayHello("Dewayne");

/**
 * TODO:
 * Call the function 'sayHello' passing the variable 'myNameIs' as a parameter.
 * Store the result of the function call in a variable named 'helloMessage'.
 * console.log 'helloMessage' to check your work
 */

var helloMessage = sayHello(myNameIs);
console.log(helloMessage);

// Don't modify the following line, it generates a random number between 1 and
// 100 and stores it in a variable named random
var random = Math.floor((Math.random() * 100) + 1);

/**
 * TODO:
 * Create a function called 'isOdd' that takes a number as a parameter.
 * The function should use the ternary operator to return a message.
 * The message should contain the number being checked, and whether or not the
 * number is odd
 *
 * Example
 *  > isOdd(42) // returns "42 is not odd!"
 *
 * Call the function 'isOdd' passing the variable 'random' as a parameter.
 * console.log *outside of the function* to check your work
 */

function isOdd(numberToTest) {
  return (numberToTest % 2 === 1) ? console.log( numberToTest + " is odd.") : console.log(numberToTest + " is even.");
}

console.log(isOdd(random));
/**
 * TODO: Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant
 *
 * the function should accept a tip percentage and the total of the bill, and
 * return the amount to tip
 *
 * Example
 *  > calculateTip(0.20, 20) // returns 4
 */

function calculateTip(tipPercentage, billTotal) {
  var tipPercentage = tipPercentage
  var tipAmount = tipPercentage * billTotal;
  tipAmount = tipAmount.toFixed(2);
  return parseFloat(tipAmount);
}

console.log(calculateTip(0.20, 46.88));

/**
 * TODO: use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

// var tipAmount = 0.20;
//
// var userBillAmount = prompt("How much was your bill?");
//
// alert("A 20% tip will be this amount : " + calculateTip(tipAmount, userBillAmount));

/* Write a function called `identity(input)` that takes in an argument called input and returns that input.*/

function identity(input) {
  return input;
}
console.log(identity(8));


/* Write a function called `getRandomNumber(min, max)` that returns a random number between min and max values sent to that funciton call. */

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
console.log(getRandomNumber(1,100));

/* Write a function called `first(input)` that returns the first character in the provided string.  */

function first(input) {
  return input.charAt(0);
}
console.log(first("dewayne"));

/* Write a fuction called `last(input)` that returns the last character of a string */

function last(input) {
  var stringLength = input.length;
  return input.charAt(stringLength - 1);
}
console.log(last("dewayne"));

/* Write a function called `rest(input)` that returns everything but the first character of a string. */

function rest(input) {
  return input.substring(1);
}
console.log(rest("dewayne"));


/* Write a function called `reverse(input)` that takes a string and returns it reversed */

function reverse(input) {
  return input.split('').reverse().join('');
}
console.log(reverse("dewayne"));


/* Write a function called `isNumeric(input)` that takes an input and returns a boolean if the input is numeric. */

function isNumeric(input) {
  !isNaN(input) ? console.log(true) : console.log(input);
}
console.log(isNumeric("this is the input"));

/* Write a function called `count(input)` that takes in a string and returns the number of characters. */

function count(input) {
  return input.length;
}
console.log(count("Dewayne"));

/* Write a function called `add(a, b)` that returns the sum of a and b */

function add(a, b) {
  return a + b;
}
console.log(add(5, 4));


/* Write a function called `subtract(a, b)` that return the difference between the two inputs. */

function subtract(a, b) {
  return a - b;
}
console.log(subtract(4, 2));

/* Write multiply(a, b) that returns the product */

function multiply(a, b) {
  return a * b;
}
console.log(multiply(5, 3));

/* Write a divide(numerator, denominator) function that returns a divided by b */

function divide(a, b) {
  (a === 0 || b === 0) ? console.log("can't divide by 0") : console.log(a / b);
}
console.log(divide(16 , 4));

/* Write a remainder(number, divisor) function that returns the remainder left over when dividing `number` by the `divisor` */

function remainder(a, b) {
  return a % b;
}
console.log(remainder(5, 3));

/* Write the function `square(a)` that takes in a number and returns the number multiplied by itself. */

function square(a) {
  return a * a;
}
console.log(square(4));

}());
