"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
function analyzeColor (colorName) {

    if (colorName == "red") {
        return "Apples are " + colorName;
    } else if (colorName == "blue") {
        return "The sky is " + colorName;
    } else if (colorName == "yellow") {
        return "Bananas are " + colorName;
    } else if (colorName == "green") {
        return "Money is " + colorName;
    } else {
        return "I do not know anything of this color.";
    }
}

let userColor = prompt("What is your favorite color?")
let result = analyzeColor(userColor);

console.log(result);


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

result = analyzeColor(randomColor);
console.log(result);


/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
let userColor = prompt("What is your favorite color?")

switch (userColor) {
    case "red":
        console.log("Apples are " + userColor);
        break;
    case "blue":
        console.log("The sky is " + userColor);
        break;
    case "yellow":
        console.log("Bananas are " + userColor);
        break;
    case "green":
        console.log("Money is " + userColor);
        break;
    default:
        console.log("I don't anything by that color");
        break;
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

function analyzeColor (colorName) {
    alert(userColor);
}

let userColor = prompt("What is your favorite color?")
let result = analyzeColor(userColor);


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal (x, totalAmount) {
    if (x === 0) {
        alert("You didn't get a discount. You total is " + totalAmount);
    }  else if (x === 1) {
        totalAmount = totalAmount - (totalAmount * .1);
        alert("Your total after the discount is " + totalAmount);
    }  else if (x === 2) {
        totalAmount = totalAmount - (totalAmount * .25);
        alert("Your total after the discount is " + totalAmount);
    }  else if (x === 3) {
        totalAmount = totalAmount - (totalAmount * .35);
        alert("Your total after the discount is " + totalAmount);
    }  else if (x === 4) {
        totalAmount = totalAmount - (totalAmount * .5);
        alert("Your total after the discount is " + totalAmount);
    }  else if (x === 5) {
        totalAmount = 0;
        alert("Everything is FREE!!!");
    }
}

let totalPrice = 100;
let discountOption = 4;
calculateTotal(discountOption, totalPrice);



/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
let totalBill = prompt("What is your total bill?");
alert("Your lucky number is " + luckyNumber);
alert("Your total before discounts is " + totalBill);
calculateTotal(luckyNumber, totalBill);


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

confirm("Would you like to enter a number?");
let userNumber = prompt("Enter a number:");

if (!isNaN(userNumber)) {
    let parsedNumber = parseFloat(userNumber);
    if (userNumber % 2 === 0) {
        alert("Your number is even.");
    } else {
        alert("Your number is odd.");
    }
    alert(`Your number plus 100 is: ${parsedNumber + 100}`);

    if (parsedNumber >= 0) {
        alert("Your number is positive.")
    } else {
        alert("Your number is negative.")
    }
}


