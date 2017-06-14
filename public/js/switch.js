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
