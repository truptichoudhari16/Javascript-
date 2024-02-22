//  Objects using singleton or with the help of constructor

// Both are same
const tinderUsers = new Object();
const tinderUser = {};

(tinderUser.id = "123abs"),
  (tinderUser.name = "Triu"),
  (tinderUser.isLoggedIn = false);

// console.log(tinderUser);
// console.log(tinderUsers);

// Object inside  Objects -> nested objects

const regularUser = {
  email: "triu@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Trupti",
      lastname: "Choudhari",
    },
  },
};

// access objects  using .

console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname.firstname);
console.log(regularUser.fullname.userfullname.lastname);

// Combine the objects
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// const obj3 = { obj1, obj2 };
// const obj3 = Object.assign({}, obj1, obj2);

const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

// database se jab values aati hai
// Aaarays of object

const users = [
  {
    id: 1,
    email: "t@gmail.com",
  },

  {
    id: 1,
    email: "t@gmail.com",
  },

  {
    id: 1,
    email: "t@gmail.com",
  },
];

users[1].email;
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

// Property hai ya nahi given name ki
console.log(tinderUser.hasOwnProperty("isLogged"));
