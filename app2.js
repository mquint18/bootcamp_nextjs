
//Task 1

function greet(name, callback){
    console.log('');
    console.log('Task 1');
    console.log('Hello ' + name);

    callback();
}

function welcome(){
   
    console.log('Welcome to Node.js');
}

greet('Michael', welcome);


//Task 2

function completeTask(callback){
    console.log('');
    console.log('Task 2');
    console.log('Task Completed');

    callback();
}

function sendNote() {
    console.log('Sending Notification...');
}

completeTask(sendNote);


//Task 3

 console.log('');
 console.log('Task 3');
 console.log('Program Started');
setTimeout(() => {
    console.log('Data Loaded Successfully');
}, 3000);


// Task 4

console.log('');
console.log('Task 4');

function registerStudent(name, callback){
    console.log('Registering '+ name);

    callback(name);
}

function welcomeStudent(name){
    console.log('Welcome ' + name);
}

registerStudent("John", welcomeStudent);

//Task 5

console.log('');
console.log('Task 5');

function orderFood(food, callback) {
    console.log("Preparin' da " + food + "...");

    setTimeout(() => {
    console.log("Da " + food + " is a'ready");
    callback(food);
}, 5000);
}

function deliverFood(food){
    console.log("I'm a deliverin' da " + food);
}

orderFood('pizza', deliverFood);

//Task 6

console.log('');
console.log('Task 6');

function downloadFile(callback) {
    console.log("Downloading File ... ");
    setTimeout(() =>{
        console.log('Download Complete')
        callback();
    
    },4000)
}

function openFile() {
    console.log('Opening File...');
}

downloadFile(openFile);