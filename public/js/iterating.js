(function(){
    "use strict";
    console.log("JS connected");
    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.
    var names = ['Dewayne', 'Kristy', 'Lola', 'MaryAlice'];

    // TODO: Create a log statement that will log the number of elements in the names array.
    console.log(names.length);
    // TODO: Create log statements that will print each of the names array elements individually.
    console.log('There are ' + names.length + ' names in the names array');
    console.log('The first name is: ' + names[0]);
    console.log('The second name is: ' + names[1]);
    console.log('The third name is: ' + names[2]);
    console.log('The fourth name is: ' + names[3]);

    console.log('Using for loop below');
    for(var i = 0; i < names.length; i++) {
      console.log('The name at index: ' + i + ' is: ' + names[i]);
    }

    names.forEach(function(element, index, array) {
      console.log('using forEach, the name at index ' + index + ' is : ' + element);
    });
})();
