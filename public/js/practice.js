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


}());
