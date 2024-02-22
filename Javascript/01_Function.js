function sayMyName() {
  console.log("T");
  console.log("r");
  console.log("u");
  console.log("p");
  console.log("t");
  console.log("i");
}

//execution
sayMyName();

// add two numbers

//This is parameters
function addTwoNumbers(number1, number2) {
  console.log(number1 + number2);
}

//this is arguments
addTwoNumbers(3, 4); // 7

function addTwoNumb(number1, number2) {
  console.log(number1 + number2);
}

addTwoNumb(3, "4"); //34
addTwoNumb(2, null); // 2
addTwoNumb("2", "7"); // 27

// Add two Numbers with variables

function addTwoNum(number1, number2) {
  /*
  let result = number1 + number2;
  //  console.log("Triu"); This will worl here because assign before return value
  return result;
  console.log("Triu"); // ye work nahi karega yaha kyuki variable return krne ke baad koi work nhi hota hai
  */

  //short cut
  return number1 + number2;
}

const result = addTwoNum(7, 8);

console.log("Result:", result);

// showing message after user's login

function loginUserMessage(username) {
  if (username === undefined) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

//console.log(loginUserMessage("Trupti"));
console.log(loginUserMessage());

/*******************************----------------------***********/

//rest operator

function calculateCartPrices(...num1) {
  return num1;
}

console.log(calculateCartPrices(200, 400, 600, 8000)); //[ 200, 400, 600, 8000 ]

// using val1, val2

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

console.log(calculateCartPrice(200, 400, 600, 8000)); // [600, 8000 ]

//*****---------  Function with Objects ----------****/

const user = {
  username: "hitesh",
  price: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

handleObject(user);

// We can pass objects this type also
handleObject({
  username: "sam",
  price: 399,
});

//*****---------  Function with Arrays ----------****/
const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

console.log(returnSecondValue(myNewArray));

// we can also pass this
function returnSecondValue(getArray) {
  return getArray[1];
}

console.log(returnSecondValue([200, 400, 500, 1000]));
