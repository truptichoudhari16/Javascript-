// resolve

// let promise = new Promise((resolve, reject) => {
//   console.log("I am a promise");
//   resolve("success");
// });

//reject

// let promises = new Promise((resolve, reject) => {
//   console.log("I am a promise");
//   reject("some error occurred");
// });

// how to use promises

// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     resolve("success");
//   });
// };

// let promise = getPromise();
// promise.then((res) => {
//   console.log("Promise fulfilled", res);
// });

// promise.catch((err) => {
//   console.log("rejected", err);
// });

// promise chain

function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data1");
      resolve("success");
    }, 4000);
  });
}

function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data2");
      resolve("success");
    }, 4000);
  });
}

console.log("fetching data1....");
let p1 = asyncFunc1();
p1.then((res) => {
  console.log(res);

  console.log("fetching data2....");
  let p2 = asyncFunc2();
  p2.then((res) => {
    console.log(res);
  });
});
