// function add (a, b) {
//     return a + b;
// }

// console.log(add(4, 5));

// var toAdd = [9, 5];
// console.log(add(...toAdd));

// var groupA = ['chads', 'fruste'];
// var groupB = ['CIT'];
// var final = [...groupB, 3, ...groupA];

// console.log(final);

var person = ['Case', 12];
var personTwo = ['jex', 29];
// Hi Case, you are 12
function greet (name, age) {
    console.log("Hi " + name + ", you are " + age);
}

greet(...person);
greet(...personTwo);

var names = ['Mike', 'Ben'];
var final = ['Andrew', ...names];
// Hi Andrew
final.forEach(function (name) {
    console.log("Hi "+ name);
});