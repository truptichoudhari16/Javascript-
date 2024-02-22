// Synchronous callback

function sum(a, b) {
  console.log(a + b);
}

function calculator(a, b, sumCallBack) {
  sumCallBack(a, b);
}

//callback
calculator(1, 2, sum);

// or

calculator(1, 2, (a, b) => {
  console.log(a + b);
});

// Asynchronous callback
const hello = () => {
  console.log("hello");
};

setTimeout(hello, 3000);

// Data from database ex ->

// function getData(dataId, getNextData) {
//   setTimeout(() => {
//     console.log("data", dataId);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// }

// passing as a callback -> This is nestedcallbacks
// Callback Hell

// getData(1, () => {
//   getData(2, () => {
//     getData(3, () => {
//       getData(4);
//     });
//   });
// });

// Thats why callback hell is a problem in javascript
// isako solve karane ke liye hamare pass ek concept hai usaka name promises
// promises ka concept ata hai callback hell vali problem ko solve krne ke liye

// using promise chain
/*
function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
    }, 2000);
  });
}

*/

// promise chain

/*
console.log("getting data1...");
getData(1)
  .then((res) => {
    console.log("getting data2....");
    return getData(2);
  })

  .then((res) => {
    console.log("getting data3...");
    return getData(3);
  })

  .then((res) => {
    console.log(res);
  });

 */

// but promise chaining is also not a good practice beacuse it is difficult to understand
// thats why we will using async await

// Async-await

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
    }, 2000);
  });
}

async function getAllData() {
  console.log("getting data1...");
  await getData(1);
  console.log("getting data2...");
  await getData(2);
  console.log("getting data3...");
  await getData(3);
  console.log("getting data4...");
  await getData(4);
}
