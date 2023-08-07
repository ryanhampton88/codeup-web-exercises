function showMultiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(num +" * " + i  + " = " + num * i);
    }
}
showMultiplicationTable(7);

function isEvenOrOdd() {
    for (let i = 1; i <= 10; i++) {
        let random = Math.floor(Math.random() * (200 - 20 + 1) + 20);
        if (random % 2 === 0) {
            console.log(random + " is even");
        }
        if (random % 2 !== 0) {
            console.log(random + " is odd");
        }
    }
}

isEvenOrOdd();

for (let i = 1; i < 10; i++) {
    for (let j = 1; j <= i; j++) {
        console.log(i);
    }
}

for (let i = 100; i >= 5; i-=5) {
    console.log(i);
}