//if
// <, >, <=, >=, ==, !=, ===

const isUserLoggedIn = true;

if (2 == "2") {
  console.log("Executed");
}

// === -> strict equal for type checking
if (2 === "2") {
  console.log("Executed");
}

if (2 != 3) {
  console.log("Executed");
}

//if/else

const temperature = 41;

if (temperature === 40) {
  console.log("less than 50");
} else {
  console.log("Temperature is greater than 50");
}

//Block Scope

const score = 200;

if (score > 100) {
  let power = "fly";
  console.log(`User power : ${power}`);
}
// console.log(`User power : ${power}`);

//Nesting for multiple conditions

const balance = 1000;

if (balance < 500) {
  console.log("less than 500");
} else if (balance < 750) {
  console.log("less than 750");
} else if (balance < 900) {
  console.log("less t5han 900");
} else {
  console.log("less than 1200");
}

// Real Life Example

const userLoggedIn = true;
const debitCard = true;
const loggedInfromGoogle = false;
const loggedInFromEmail = true;

//Both have
if (userLoggedIn && debitCard && 2 == 2) {
  console.log("Allow to buy courses");
}

//Multiple checking
if (loggedInfromGoogle || loggedInFromEmail) {
  console.log("User Logged in");
}

//Nullish  Coalescing Operator (??) : It is for  null undefined

let val1;
val1 = 5 ?? 10;
console.log(val1);

let val2;
val2 = null ?? 10;
console.log(val2);

let val3;
val3 = undefined ?? 10;
console.log(val3);

let val4;
val4 = null ?? 10;
console.log(val4);

// Ternary Operator

//syntax

// condition ? true : false;

const iceTeaPrice = 100;

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
