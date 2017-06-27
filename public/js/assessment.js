(function() {
  'use strict';
console.log('connected');

  /* 1.
  Write a function named isNegative that accepts a number and returns true or false based on whether the input is negative.
  */
  function isNegative(input) {
    if(input < 0) {
      return true;
    } else {
      return false;
    }
  }
  console.log(isNegative(-21));

  /* 2.
  Write a function named average that accepts an array of numbers and returns the average of those numbers
  */
  function average(array) {
    var total = 0;
    for(var i = 0; i < array.length; i++) {
      total += array[i];
    }
    return total / array.length;
  }
  console.log(average([1,2,3]));

  /* 3.
  Write a function named countOdds that accepts an array of numbers and returns the number of odd numbers in the array.
  */
  function countOdds(array) {
    var total = 0;
    for(var i = 0; i < array.length; i++) {
      if(array[i] % 2 != 0) {
        total++;
      }
    }
    return total;
  }
  console.log(countOdds([1, 2, 1, 1]));

  /* 4.
  Write a function named convertNameToObject that accepts a string that contains a first name and last name separated by a space, and returns an object with properties firstName and lastName.
  */
  function convertNameToObject(string) {
    var name = string.split(" ");
    var nameObject = {
      firstName: name[0],
      lastName: name[1]
    };
    return nameObject;
  }
  console.log(convertNameToObject('Harry Potter'));

  /* 5.
  Write a function named fiveTo that accepts a number and returns an array of the integers from 5 up to (but not including) the passed number.
  */
  function fiveTo(number) {
    var array = [];
    if(number > 5) {
      for(var count = 5; count < number; count++) {
        array.push(count);
      }
      return array;
    } else {
      console.log('number must be greater than 5');
    }
  }
  console.log(fiveTo(15));

  /* 6.
  Write a function named upperCaseLastNames that accepts an array of objects where each object has properties firstName and lastName and returns the same array of objects with each last name capitalized.
  */
  var names = [
     {firstName: 'Harry', lastName: 'Potter'},
     {firstName: 'Ron', lastName: 'weasley'},
     {firstName: 'Hermione', lastName: 'granger'}
  ];

  function upperCaseLastNames(names) {
    names.forEach(function(name) {
      name.lastName = name.lastName.toUpperCase();
    });
    return names;
  }
  console.log(upperCaseLastNames(names));
  
}());
