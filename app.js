console.log("hello world");

// let myName = "michael";
// console.log(myName);

// const prompt = require("prompt-sync")();
// const name = prompt ("enter your name: ");
// console.log("Welcome", name);



//Synchronous - code runs like by line

console.log("1");
console.log('2');
console.log('3');


//async

console.log('start');
setTimeout(() => {
    console.log('download complete');
}, 3000);

console.log('end');


//callback - a funciton passed into another function

function greet(name, callback){
    console.log('Hello ' + name);

    callback();
}

function goodbye(){
    console.log("Good Bye");
}

greet("Michael", goodbye);
