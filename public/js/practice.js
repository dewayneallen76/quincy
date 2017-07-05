(function() {
  'use strict';
  console.log('connected');
  /*
  Write a function to get a string to have the following output:
  accum("abcd");    // "A-Bb-Ccc-Dddd"
  accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
  accum("cwAt");    // "C-Ww-Aaa-Tttt"
  */

  function mumble(string) {
    var array = [];
    for(var i = 0; i < string.length; i++) {
      var characterArray = string.charAt(i).repeat(i + 1).toUpperCase(i - 1).split(" ");
      array += characterArray;
    }
    console.log(array);
  }

  console.log(mumble("abcd"));

/*  Write a function that accepts a string, and returns true if it is in the form of a phone number.
Assume that any integer from 0-9 in any of the spots will produce a valid phone number.

Only worry about the following format:
(123) 456-7890 (don't forget the space after the close parentheses) */
  function validPhoneNumber(phoneNumber) {
    if(phoneNumber.length === 14 && phoneNumber.charAt(9) === "-") {
      return true;
    } else {
      return false;
    }
  }
  console.log(validPhoneNumber("(423) 462-2558"));


}());
