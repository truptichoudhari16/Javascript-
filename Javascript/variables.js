// Variables in JS

const accountId = 144553;
let accountEmail = "tc@gmail.com";
var accountPassword = "12345";

// Bad Practice
accountCity = "Nagpur";

// accountId = 2; because this is cons keyword

accountEmail = "ranu@gmail.com";
accountPassword = "252546";

accountCity = "Pune";

let accountState;
console.log(accountId);

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

// Prefer not to use var
// because of issue in block scope anf functional scope
