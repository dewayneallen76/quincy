"use strict";
console.log('Connected');

var x = 1;

while (x < 65536) {
  x = x * 2;
  console.log(x);
}

/* An ice cream seller can't go home until she sells all of her cones. Write a JS program that generates a random number between 50 and 100 representing the amount of cones to sell. Your code should generate numbers between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. This is how you get the random numbers. */

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;

console.log("I have " + allCones  + " cones to sell.");


do {
  // This is how you get a random number between 1 and 5
  var cones = Math.floor(Math.random() * 5) + 1;
	if (allCones >= cones){
		console.log("Someone bought " + cones + " cones.")
		allCones = allCones - cones
		console.log(allCones + " are left.")
	} else {
		console.log("I do not have enough cones.");
  }
}
while (allCones >= 1)
	console.log("I have sold all of the cones.");
