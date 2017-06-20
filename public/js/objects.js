(function(){
    "use strict";

    /**
     * TODO:
     * Create person object, store it in a variable named person
     */
    var person = {
      firstName : "Dewayne",
      lastName : "Allen",
      "sayHello": function() {
        console.log("Hello from " + this.firstName + " " + this.lastName );
      }
    };

    /**
     * TODO:
     * Create firstName and lastName properties in your person object, and
     * assign your name to them
     */

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * person.sayHello() // returns "Hello from Rick Sanchez!"
     */
     person.sayHello();
    /** TODO: Remember this problem from before?
     *
     * HEB has an offer for the shoppers that buy products amounting to more
     * than $200. Write a JS program, using conditionals, that logs to the
     * browser, how much does Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
    var discount;
    var finalAmount;
    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];


    shoppers.forEach(function(shopper) {
      if(shopper.amount > 200) {
        discount = 0.35;
        finalAmount = shopper.amount - (shopper.amount * discount)
      } else {
        discount = 0;
        finalAmount = shopper.amount;
      }
      console.log(shopper.name + " spent $" + parseFloat(shopper.amount) + " and received a discount of: " +  parseFloat(discount) + " and the new total is: $" + parseFloat(finalAmount));
    });

    // todo:
    // Create an array of objects that represent books.
    // Each book should have a title and an author property.
    // The author property should be an object with a firstName and lastName.
    // Be creative and add at least 5 books to the array
    var books = [
      {
        bookNumber : 1,
        title : "American Gods",
        author : {
          firstName : "Neil",
          lastName : "Gaiman"
        }
      },
      {
        bookNumber : 2,
        title : "Heart-Shaped Box",
        author : {
          firstName : "Joe",
          lastName : "Hill"
        }
      },
      {
        bookNumber : 3,
        title : "Mr. Mercedes",
        author : {
          firstName : "Stephen",
          lastName : "King"
        }
      },
      {
        bookNumber : 4,
        title : "A Game of Thrones",
        author : {
          firstName : "George R.R.",
          lastName : "Martin"
        }
      },
      {
        bookNumber : 5,
        title : "The First Quarry",
        author : {
          firstName : "Max Alan",
          lastName : "Collins"
        }
      }
    ];

    // log out the books array
    console.log(books);

    // todo:
    // Loop through the array of books using .forEach and print out the specified information about each one.
    // start loop here
    books.forEach(function(book) {
        console.log("Book #" + book.bookNumber);
        console.log("Title: " + book.title);
        console.log("Author: " + book.author.firstName + " " + book.author.lastName);
        console.log("---");
    // end loop here
    });

})();
