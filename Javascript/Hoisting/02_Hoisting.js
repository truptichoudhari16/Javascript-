// 1) Var

// var a; Interpreter assuming declaration only at the top not Initialization
/*
console.log(a);
var a = 5; //Output : undefined

*/

// 2) let
/*
console.log(b);
let b = 5; //output ->  Cannot access 'b' before initialization
*/

//3) const

/*
console.log(c);
const c = 8; //output ->  Cannot access 'c' before initialization
*/

/****************Function Hoisting ************* */

/*
add();

function add() {
  console.log("Learning hoisting "); //output : Learning hoisting
}

*/

//add() -> assuming this type

// Function Expression -> Hoisting is not work for Function expression

/*
add();

var add = function () {
  console.log("Function Ecpression "); // Output : add is not a function
};

*/

/*****Arrow function **** */

add();

var add = () => {
  console.log("Arrow func"); //Output : TypeError: add is not a function
};
