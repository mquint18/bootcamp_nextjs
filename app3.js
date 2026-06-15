const add = require("./math");
console.log(add(4, 7));

const calc = require("./calculator");

console.log(calc.add(4, 8));
console.log(calc.subtract(9, 8));
console.log(calc.multiply(4, 5));
console.log(calc.divide(30, 5));

const fs = require("fs");
fs.writeFileSync("notes.txt", "Hello World");
