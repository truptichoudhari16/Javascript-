//Following two lines will run successfully due to hoisting
console.log(a);

greet();
function greet() {
  console.log("Good morning"); // Good Morning
}

var a = 9; //Declaration hoisted to the top but initialization is not
console.log(a);

// Note : I have learn about hoisting in let & var (Notes -> Copy)
