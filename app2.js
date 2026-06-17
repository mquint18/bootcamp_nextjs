import chalk from "chalk";

//Task 1

function greet(name, callback) {
  console.log("");
  console.log(chalk.red("Task 1"));
  console.log(chalk.red("Hello " + name));

  callback();
}

function welcome() {
  console.log("Welcome to Node.js");
}

greet("Michael", welcome);

//Task 2

function completeTask(callback) {
  console.log("");
  console.log(chalk.green("Task 2"));
  console.log(chalk.green("Task Completed"));

  callback();
}

function sendNote() {
  console.log(chalk.green("Sending Notification..."));
}

completeTask(sendNote);

//Task 3

console.log("");
console.log(chalk.yellow("Task 3"));
console.log(chalk.yellow("Program Started"));
setTimeout(() => {
  console.log(chalk.yellow("Data Loaded Successfully"));
}, 3000);

// Task 4

console.log("");
console.log("Task 4");

function registerStudent(name, callback) {
  console.log(chalk.bgYellow("Registering " + name));

  callback(name);
}

function welcomeStudent(name) {
  console.log("Welcome " + name);
}

registerStudent("John", welcomeStudent);

//Task 5

console.log("");
console.log("Task 5");

function orderFood(food, callback) {
  console.log("Preparin' da " + food + "...");

  setTimeout(() => {
    console.log("Da " + food + " is a'ready");
    callback(food);
  }, 5000);
}

function deliverFood(food) {
  console.log("I'm a deliverin' da " + food);
}

orderFood("pizza", deliverFood);

//Task 6

console.log("");
console.log("Task 6");

function downloadFile(callback) {
  console.log("Downloading File ... ");
  setTimeout(() => {
    console.log("Download Complete");
    callback();
  }, 4000);
}

function openFile() {
  console.log("Opening File...");
}

downloadFile(openFile);
