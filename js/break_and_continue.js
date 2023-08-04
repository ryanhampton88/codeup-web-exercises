let userInput;
do {
    userInput = parseInt(prompt("Enter a number between 1 and 50:"));
} while (userInput < 1 || userInput > 50 || userInput % 2 === 0);

console.log("Number to skip: " + userInput);

for (let i = 1; i <= 50; i+=2) {
    if (i === userInput) {
        console.log("Yikes! Skipping Number: " + userInput);
        continue;
    }
    console.log("Here is an odd number: " + i);
}

