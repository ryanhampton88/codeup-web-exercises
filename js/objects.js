(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    let person = {}
    person.firstName = "Ryan";
    person.lastName = "Hampton";

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function (){
        console.log("Hello from " + person.firstName + " " + person.lastName);
    }

    person.sayHello();

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function(element){
        if (shoppers.amount > 200) {
            let discountedPrice = shoppers.amount - (shoppers.amount * .12);
            console.log(shoppers.name + " - Total Amount: " + shoppers.amount + " | Discount: 12%" + " | Discounted Price: " + discountedPrice.toFixed(2));
        }
        if (shoppers.amount < 200) {
            //let discountedPrice = shoppers[i].amount - (shoppers[i].amount * .12);
            console.log(shoppers.name + " - Total Amount: " + shoppers.amount + " | There is no discount." + " | Total Due: " + shoppers.amount);
        }
    });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    // let books = [
    //     {
    //         title: "Harry Potter",
    //         author: {
    //             firstName: "J.K.",
    //             lastName: "Rowling"
    //         }
    //     },
    //     {
    //         title: "Rich Dad Poor Dad",
    //         author: {
    //             firstName: "Robert",
    //             lastName: "Kiyosaki"
    //         }
    //     },
    //     {
    //         title: "4-Hour Work Week",
    //         author: {
    //             firstName: "Tim",
    //             lastName: "Ferris"
    //         }
    //     },
    //     {
    //         title: "Think and Grow Rich",
    //         author: {
    //             firstName: "Napoleon",
    //             lastName: "Hill"
    //         }
    //     },
    //     {
    //         title: "Atomic Habits",
    //         author: {
    //             firstName: "James",
    //             lastName: "Clear"
    //         }
    //     }
    // ];
    let books =[];

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    for (let i = 0; i < books.length; i++) {
        console.log("Book # " + books.indexOf(books[i]));
        console.log("Title: " + books[i].title);
        console.log("Author: " + books[i].author.firstName + " " + books[i].author.lastName);
    }

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    books.createBook = function(title, firstName, lastName){
        books.push({title, firstName, lastName })
    }

    books.createBook("Harry Potter", "J.K.", "Rowling");
    books.createBook("Rich Dad Poor Dad", "Robert", "Kiyosaki");
    books.createBook("4-Hour Workweek", "Tim", "Ferris");
    books.createBook("Think and Grow Rich", "Napoleon", "Hill");
    books.createBook("Atomic Habits", "James", "Clear");

    books.createBook("How To Code", "Ryan", "Hampton");

    console.log(books);

books.showBookInfo = function(bookObject){
    for (let i = 0; i < books.length; i++) {
        if (books[i].title === bookObject || books[i].firstName === bookObject || books[i].lastName === bookObject || books.indexOf(books[i]) === bookObject) {
            console.log(books[i]);
            break;
        }
    }
}

books.showBookInfo(2);

})();