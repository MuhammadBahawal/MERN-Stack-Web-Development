"use strict";
// for installing type script use this command
// npm install -g typescript
// tsc --init
//for running type script us
//tsc
var Name = "Ali";
let age = 10;
console.log("Helo i am ", Name, "i am ", age, "old");
// type script types --- IGNORE ---
var Name = "Ali";
var num = 10;
var num2 = 20.5;
var isundefined = undefined;
var isNull = null;
var symbolValue = Symbol("unique");
var isMarried = true;
var isany = "any value";
// type script array
var numbers = [1, 2, 3, 4, 5];
var strings = ["apple", "banana", "cherry"];
var names = [1, 2, 3, "ali", "ahmed", "sara"];
// type script tuple
var person = ["Ali", 25];
// type script enum
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Green"] = "GREEN";
    Color["Blue"] = "BLUE";
})(Color || (Color = {}));
// type script object
var personObject = {
    name: "Ali",
    age: 25,
};
var obj = {
    Name: "ALi",
    age: 20,
    email: "ali@gmail.com"
};
console.log(obj);
let students = ["ali", "Ahmad", "asad"];
console.log(students);
// type script function
function add(a, b) {
    console.log("Sum is: ", a + b);
}
add(10, 10);
// const hello = (a:string,b:string):string =>{
//     return a+b;
// }
// hello("hello","Ali")
