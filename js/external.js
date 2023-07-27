"use strict";

console.log("Hello, this is a comment from the external JS File")

alert("Welmcome to my Website!")

let userResponse = prompt("What is your favorite color?")

alert(userResponse + " is my favorite color too!")

let littleMermaidDaysRented = prompt("How many days did you keep Little Mermaid?")
let littleMermaidDaysToNumbers = parseInt(littleMermaidDaysRented);
let brotherBearDaysRented = prompt("How many days did you keep Brother Bear?")
let brotherBearDaysToNumbers = parseInt(brotherBearDaysRented);
let herculesDaysRented = prompt("How many days did you keep Hercules?")
let herculesDaysToNumbers = parseInt(herculesDaysRented);
let totalAmountDue = (littleMermaidDaysToNumbers + brotherBearDaysToNumbers + herculesDaysToNumbers) * 3

console.log(totalAmountDue);

let googleRate = prompt("What does Google pay you per hour?")
let googleRatePerHour = parseInt(googleRate);
let amazonRate = prompt("What does Amazon pay you per hour?")
let amazonRatePerHour = parseInt(amazonRate);
let facebookRate = prompt("What does Facebook pay you per hour?")
let facebookRatePerHour = parseInt(facebookRate);
let hoursAtGoogle = prompt("How many hours did you work at Google this week?")
let workedAtGoogle = parseInt(hoursAtGoogle);
let hoursAtAmazon = prompt("How many hours did you work at Amazon?")
let workedAtAmazon = parseInt(hoursAtAmazon);
let hoursAtFacebook = prompt("How many hours did you work at Facebook?")
let workedAtFacebook = parseInt(hoursAtFacebook);
let totalPay = (googleRatePerHour * workedAtGoogle) + (amazonRatePerHour * workedAtAmazon) + (facebookRatePerHour * workedAtFacebook)

console.log(totalPay);

let isFull = confirm("Is the class full?")
let noConflict = confirm("Does this class fit into the student's schedule?")
let canEnroll = (isFull && noConflict)

console.log(canEnroll);

let hasMoreThanTwoItemsOrIsPremiumMember = confirm("Are there more than two items or is the person a Premium member?")
let isValid = confirm("Is offer still valid?")
let applyOffer = (hasMoreThanTwoItemsOrIsPremiumMember && isValid)

console.log(applyOffer);