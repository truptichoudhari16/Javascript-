//Singleton -> It is created as an object

/************----Object using Literals--------************/

// Declaring symbol -> use symbol as a  key
const mySym = Symbol("key1");

//Object Literal -> {} = bu using this object literals we can create objects

const JsUser = {
  name: "Trupti",
  "full name": "Trupti Choudhari",
  //   syntax of symbol ->
  [mySym]: "mykey1",
  age: 19,
  location: "Nagpur",
  email: "tc@gmailcom",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Friday"],
};

/*
// How to access Objects
console.log(JsUser.email);

// Good Practice
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

*/

//How to change values
// JsUser.email = "ct@google.com";

//How to lock object -> then no one  can change it value
// Object.freeze(JsUser);
// JsUser.email = "triu@gmail.com";
// console.log(JsUser);

/************----------**********/

// function in object
JsUser.greeting = function () {
  console.log("Hello Js user");
};
console.log(JsUser.greeting());
console.log(JsUser.greeting);

// Object ke ander ke name ko reference karana hai
JsUser.greetingTwo = function () {
  console.log(`Hello JS User , ${this.name}`);
};

console.log(JsUser.greetingTwo());
console.log(JsUser.greetingTwo);
