//let  totalCones = Math.floor(Math.random() * 50 - 1) + 1;
let totalCones = 50;
let conesSold = 0;

do {
    conesSold = Math.floor(Math.random() * 5) + 1;
    if (conesSold <= totalCones) {
        totalCones -= conesSold;
        console.log(conesSold + " cones sold.");
    }
} while (conesSold < totalCones);

console.log("Cannot sell you " + conesSold + " if I only have " + totalCones + " cones.");

if (totalCones === 0) {
    console.log("Yay! I sold them all!");
}