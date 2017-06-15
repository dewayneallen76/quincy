"use strict";

// Don't change the next two lines!
// This creates two variables:
//     one with the colors of the rainbow, and another with a single randome
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

switch (color) {
    // TODO: create a case statement that will handle every color except indigo and violet
    // TODO: when a color is encountered log a message that tells the color, and an object of that color
    //       example: Blue is the color of the sky.
    case 'red':
      console.log('Blood is red');
      break;
    case 'orange':
      console.log('Oranges are orange');
      break;
    case 'yellow':
      console.log('Corn is yellow');
      break;
    case 'green':
      console.log('Money is green!');
      break;
    case 'blue':
      console.log('The sky is blue');
      break;
    default:
      console.log('I don\'t know anything by that color');
      break;

    // TODO: create a default case that will catch indigo and violet
    // TODO: for the default case, log: I do not know anything by that color.
}

/* Suppose your friend Isaac cannot decide between two options. He doesn't know if he should buy a car or a new house. Help him decide! Write a small JS program. The following line generates either a 0 or a 1 randomly.*/
 var flipACoin = Math.floor(Math.random()* 2);
/* Add an if statement to log a "Buy a car" to the console if the result is 0 and "Buy a house" if the result is 1. */

if(flipACoin == 0) {
  console.log('Buy a car');
} else {
  console.log('Buy a house');
}

// Could this program be written using a ternary operator?
flipACoin == 0 ? console.log('Buy a car') : console.log('Buy a House');

/* Suppose there's a promotion in Walmart, each customer is given a randomly generated "lucky number" between 0 and 6. If your lucky number is 0 you have no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2, discount is 25%, if it's 4, 50%, and if it's 5 you'll get all for free!. Write a JS program that logs to the console how much you will have to pay if your receipt is for $60. Every time you reload your page you should see a different result. Use a switch statement for this exercise. */

// The following line generates a random number between 0 and 5.

var luckyNumber = Math.floor(Math.random()* 6);
var total = 60;

switch(luckyNumber) {
  case 1:
    console.log("You get a 10% discount! Your total is $" + (total - (total * .10)));
    break;
  case 2:
    console.log("You get a 25% discount! Your total is $" + (total - (total * .25)));
    break;
  case 4:
    console.log("You get a 50% discount! Your total is $" + (total - (total * .50)));
    break;
  case 5:
    console.log("You get everything free!");
    break;
  default:
    console.log("You do not get a discount. Your total is $" + total);
    break;
}

/* Write some JavaScript that uses a confirm dialog to ask the user if they would like to enter a number. If they click 'Ok', prompt the user for a number, then use 3 separate alerts to tell the user:

whether the number is even or odd
what the number plus 100 is
if the number is negative or positive
if what the user enters is not a number, use an alert to tell them that, and do not display any of the above information. */

confirm('Would you like to enter a number?');

if(true) {
  var userInput = prompt('Please enter a number: ');
  userInput = parseInt(userInput);
    if(userInput % 2 == 0) {
      alert(userInput + ' is even');
      alert(userInput + ' plus 100 is ' + (userInput + 100));
    } else {
      alert(userInput + ' is odd');
      alert(userInput + ' plus 100 is ' + (userInput + 100));
    }
  } else {
    alert(userInput + 'is not a number');
}
