let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//   console.log("btn1 was clicked");
//   let a = 25;
//   a++;
//   console.log(a); //26
// };

// Event Object on onclick

btn1.onclick = (evt) => {
  console.log(evt);
  console.log(evt.type);
  console.log(evt.target);
  console.log(evt.clientX, evt.clientY);
};

// let div2 = document.querySelector("#div2");
// div2.onmouseover = () => {
//   console.log("you are inside second div ");
// };

// Event object on mouseover

let div2 = document.querySelector("#div2");
div2.onmouseover = (evt) => {
  console.log(evt);
  console.log(evt.type);
  console.log(evt.target);
  console.log(evt.clientX, evt.clientY);
};

// Event Listener -> Better way to handle our events

//addEventListner

let btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", (evt) => {
  console.log(" Event Listener button  was clicked - hanlder 1");
  console.log(evt);
  console.log(evt.type);
  console.log(evt.target);
  console.log(evt.clientX, evt.clientY);
});

btn2.addEventListener("click", () => {
  console.log("btn 2 was clicked - handler 2");
});

// pass as a variable then it will remove
const handler3 = () => {
  console.log("btn 2 was clicked - handler 3");
};

btn2.addEventListener("click", handler3);

btn2.addEventListener("click", () => {
  console.log("btn 2 was clicked - handler 4");
});

// removeEventListner

btn2.removeEventListener("click", handler3);
