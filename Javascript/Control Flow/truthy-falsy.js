const userEmail = [];

if (userEmail) {
  console.log("got user email");
} else {
  console.log("Don't have user email");
}

//falsy values

// false, 0 , -0, BigInt 0n, "",  null, undefined, NaN

//truthy values

// "0" , 'false', " " , [], {}, function(){}

// check is array  empty ?

if (userEmail.length === 0) {
  console.log("Array is empty");
}

//check is object  empty ?
const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}
