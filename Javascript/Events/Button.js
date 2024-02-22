let modeBtn = document.querySelector("#mode");
let currMode = "light"; //change to dark
let body = document.querySelector("body");

modeBtn.addEventListener("click", () => {
  console.log("you are trying to change mode");
});

modeBtn.addEventListener("click", () => {
  if (currMode === "light") {
    currMode = "dark";
    // document.querySelector("body").style.backgroundColor = "black";
    body.classList.add("dark");
    body.classList.remove("light");
  } else {
    currMode = "light";
    // document.querySelector("body").style.backgroundColor = "white";
    body.classList.add("light");
    body.classList.remove("dark");
  }

  console.log(currMode);
});
