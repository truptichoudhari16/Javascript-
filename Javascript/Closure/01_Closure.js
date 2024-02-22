// function func1() {
//   let a = 5;
//   console.log(a);

//   function func2() {
//     let a = 6;
//     console.log(a);
//   }
//   func2();
// }
// func1();

//  Output : 5 6

// closure give access to an outer function scope from an inner function
/*
function fun1() {
  let a = 5;

  function fun2() {
    console.log(a);
  }
  a = 8; // closure reference return krta hai value return nahi hoti

  return fun2;
}

const abc = fun1();
abc();

// Output : 8

*/

// Nested closure
function fun1() {
  let a = 5;

  function fun2() {
    let a = 9;
    console.log(a);

    function fun3() {
      console.log(a);
    }
    fun3();
  }
  a = 8;
  return fun2;
}
const abc = fun1();
abc();
