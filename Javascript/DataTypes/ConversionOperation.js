//1) Number
let score = 33;

console.log(typeof score);
console.log(typeof score);

//2) string "33" => 33
let scores = "33";

console.log(typeof scores);
console.log(typeof scores);

// conversion in number

// Number
let valueNumber = Number(scores);
console.log(typeof valueNumber);
console.log(valueNumber); // 33 is a number

// "56abd" -> NAN => Not a Number
let marks = "56abd";
console.log(typeof marks);

// string to number

let valueNumbers = Number(marks);
console.log(typeof valueNumbers);
console.log(valueNumbers);

//null
let run = null;
console.log(typeof run);

// object to number

let valueNumberss = Number(run);
console.log(typeof valueNumberss);
console.log(valueNumberss);

//undefined
let win = undefined;
console.log(typeof win);

// undefined to number
let valueNumbersss = Number(win);
console.log(typeof valueNumbersss);
console.log(valueNumbersss);

// boolean to number
// true => 1
let boolean = true;
console.log(typeof boolean);

// boolean true  to number
let valueNumberssss = Number(boolean);
console.log(typeof valueNumberssss);
console.log(valueNumberssss);

// false => 0
let booleans = false;
console.log(typeof booleans);

// boolean false  to number
let valueNumbersssss = Number(booleans);
console.log(typeof valueNumbersssss);
console.log(valueNumbersssss);

// 1 to true

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 0 to false

let isLoggedOut = 0;

let booleanIsLoggedOut = Boolean(isLoggedOut);
console.log(booleanIsLoggedOut);

// number to string
let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

//********************Operations *****************//

let value = 3;
let negValue = -value;
console.log(negValue);

// string addition
let str1 = "hello";
let str2 = "Trupti";

let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(((3 + 4) * 5) % 3);

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;

// Prefix & postfix
let gameCounter = 100;
++gameCounter;

console.log(gameCounter);

let games = 100;
games++;

console.log(games);

// Comparison of Data types

console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined > 0);

// === strict check

// not same
console.log("2" === 2);
