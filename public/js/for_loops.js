"use strict";

/* Write the JS code to prompt the user for a number between 1 and 10, then log to the console the multiplication table for that number. */

var userInput = prompt('Enter a number between 1 and 10');
var answer;

for(var i = 1; i <= 10; i++) {
  answer = userInput * i;
  console.log(userInput + ' x ' + i + ' = ' + answer );
}

/* Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. */

for(var x = 1; x <= 10; x++) {

  var randomOddEven = Math.floor(Math.random() * 180) + 20;
  switch(randomOddEven % 2) {
    case 1:
      console.log(randomOddEven + ' is an odd number');
      break;
    case 0:
      console.log(randomOddEven + ' is an even number');
      break;
  }
}
/* Display numbers 1-10 in the following format:
1
22
333
4444
...
0000000000 */

var number;
var repeatedNumber;
for (var i = 1; i <= 10 ; i++) {
	number = i.toString();
	if (i === 10) {
		number = "0"
	}
repeatedNumber = number.repeat(i);
	console.log(repeatedNumber);
}

// Display numbers from 100 to 5 decrementing by 5
for(x = 100; x >=5; x-=5) {
  console.log(x);
}
