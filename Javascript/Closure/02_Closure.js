message = "Good Global";

function hello1() {
  message = "Good Morning";
  {
    let message = "Good afternoon";
    console.log("Hello 1 :" + message);
  }
  console.log(message);
}

hello1();
//Output :Hello 1 :Good afternoon
//Good Morning

// Lexical Scoping
function returnFunc() {
  const x = () => {
    let a = 1;
    console.log(a);

    const y = () => {
      console.log(a);

      const z = () => {
        console.log(a);
      };
      z();
    };
    a = 99;
    y();
  };
  return x;
}

let a = returnFunc();
a();
