// Syntax of declaring array

const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["Amita", "Salman", "Ranvir"];

const myArr2 = new Array(1, 2, 3, 4);

// printing
// console.log(myArr[3]);

//**************** Methods of Arrays ***************************

// 1)Push
myArr.push(6);
myArr.push(7);

// 2)pop
myArr.pop();

//3) unshift -> time consuming operation because all valus are shifted from 1 . Add element in the begining
// myArr.unshift(9);

//4) shift -> It's work like a pop . Remove element from front .
myArr.shift();

// 5) includes -> include or not it will show output as a boolean value true or false . if value is included then true otherwise false
// console.log(myArr.includes(9));

// 6) indexOf -> We can ask index
// console.log(myArr.indexOf(3));
// console.log(myArr);

// 7) join() -> Adds all the elements of an array into a string

/*
const newArr = myArr.join();

console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

*/

//slice, splice

/*
console.log("A", myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);

console.log("B", myArr);

const myn2 = myArr.splice(1, 3);
console.log(myn2);

console.log("C", myArr);

*/

/****************** More about Arrays ***********/

const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

//1) push -> Appends new elements to the end of an array, and returns the new length of the array.
// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

//2) concat ->  Combines two or more arrays.
// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

// 3) spread

const all_new_heros = [...marvel_heros, ...dc_heros];

// console.log(all_new_heros);

// 4) flat -> used for array ke ander array ke array
// Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

// 5) from -> Convert in array

console.log(Array.isArray("Trupti"));
console.log(Array.from("Trupti"));

//6)  Print Empty array => []
console.log(Array.from({ name: "trupti" })); //Intresting case for interview

// 7) of

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
