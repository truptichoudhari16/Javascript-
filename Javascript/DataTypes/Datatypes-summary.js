/*
Primitive Datatypes 

7 types ->
1) String
2) Number
3) Boolean
4) null
5) undefined
6) symbol
7) BigInt

Reference (Non Primitive) Datatypes
1) Array
2) object
3) Function
*/

// Number Type
const score = 100;
const scoreValue = 100.3;

// Boolean Type
const isLoggedIn = false;

//null type
const outsideTemp = null;

//undefined type
let userEmail;

//symbol type
const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

//BigInt type
const bigNumber = 5469875226668688n;

//Array Type
const heros = ["Trupti, Dipti, Nidhi"];

//object type
// objects are in curly barackets

let myObj = {
  name: "Triu",
  age: 22,
};

//Function type
// treating as a varaible
const myFunction = function () {
  console.log("Hello World");
};

// we can identify datatype by using typeof
