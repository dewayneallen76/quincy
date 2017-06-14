"use strict";

// Don't change the next two lines!
// These creates two variables for you:
//     one with the colors of the rainbow
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

var favorite = 'blue'; // TODO: change this to your favorite color from the list

// TODO: Create a block of if/else statements to check for every color except indigo and violet.
if(color === 'red' || color === 'orange' || color === 'yellow' || color === 'green' || color === 'blue') {
  console.log(color);
} else {
  console.log("We don't like indigo or violet");
}

// TODO: When a color is encountered log a message that tells the color, and an object of that color.
//       Example: Blue is the color of the sky.

if(color === 'red') {
  console.log(color + ' is the color of some apples');
} else if(color === 'orange') {
  console.log(color + ' is the color of an orange');
} else if(color === 'yellow') {
  console.log(color + ' is the color of corn');
} else if(color === 'green') {
  console.log(color + ' is the color of money!');
} else if(color === 'blue') {
  console.log(color + ' is the color of the sky');
  // TODO: Have a final else that will catch indigo and violet.
  // TODO: In the else, log: I do not know anything by that color.
} else {
  console.log('I do not know anything by the color ' + color);
}


// TODO: Using the ternary operator, conditionally log a statement that
//       says whether the random color matches your favorite color.
color === favorite ? console.log("My favorite color") : console.log("Not my favorite color");
