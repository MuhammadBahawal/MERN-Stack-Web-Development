// for installing type script use this command
// npm install -g typescript
// tsc --init
//for running type script us
//tsc
var Name: string = "Ali";
let age: number = 10;
console.log("Helo i am ", Name, "i am ", age, "old");

// type script types --- IGNORE ---
var Name: string = "Ali";
var num: number = 10;
var num2: number = 20.5;
var isundefined: undefined = undefined;
var isNull: null = null;
var symbolValue: symbol = Symbol("unique");
var isMarried: boolean = true;
var isany: any = "any value";
// type script array
var numbers: number[] = [1, 2, 3, 4, 5];
var strings: string[] = ["apple", "banana", "cherry"];
var names: (number | string)[] = [1, 2, 3, "ali", "ahmed", "sara"];
// type script tuple
var person: [string, number] = ["Ali", 25];
// type script enum
enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}

// type script object
var personObject: { name: string; age: number } = {
  name: "Ali",
  age: 25,
};
type username = {
  Name:string,
  age: number,
  email?:string,
}

var obj:username={
  Name : "ALi",
  age : 20,
  email: "ali@gmail.com"
}
console.log(obj);

let students : string[] = ["ali","Ahmad","asad"]
console.log(students);

// type script function

function add(a: number, b: number){
  console.log("Sum is: ", a + b);
}
add(10,10)

// const hello = (a:string,b:string):string =>{
//     return a+b;
    
// }

// hello("hello","Ali")
