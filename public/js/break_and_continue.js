"use strict";


var userInput = prompt('Enter an odd number between 1 and 50');
console.log(userInput);

  for (var i = 1; i < 50; i++) {
	   if (i % 2 === 0) {
        continue;
	   }
    if (userInput === i) {
    	console.log('We have reached your number and will skip number: ' + i);
    } else {
    	console.log('Here is an odd number: ' + i);
    	continue;
    }
   	if (i >= 49) {
    	break;
    }
  }
