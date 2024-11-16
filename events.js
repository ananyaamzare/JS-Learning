// //The change in the state of an object is known as event

// // event are fired to notify code of "intresting chenge" that may affect code execution.

// // mouse event (click, double click etc)
// // keyboard event (keypress , keyup, keydown)
// // from event (submit etc)
// // print event &many more

// let btn1 = document.querySelector("#btn1");

// btn1.onclick = (evt) => {
//   console.log(evt); //26
//   console.log(evt.type);
//   console.log(evt.target);
//   console.log(evt.clientX, evt.clientY); // for postioning
// };

// let div = document.querySelector("div");
// div.onmouseover = () => {
//   console.log("you are inside div");
// };

// //event object

// let btn1 = document.querySelector("div");

// div.mouseover = (evt) => {
//   console.log(evt); //26
//   console.log(evt.type);
//   console.log(evt.target);
//   console.log(evt.clientX, evt.clientY); // for postioning
// };

// //event Listener
// // Node.addEventListener (even , callback); //syntax

// btn1.addEventListener("click", () => {
//   console.log("btn1 was click");
//   console.log(evt);
//   console.log(evt.type);
// });

//for removeing event listener
//noderemoveEventListner(event, callback)

btn1.addEventListener("click", () => {
  console.log("btn1 was click hand1");
});

btn1.addEventListener("click", () => {
  console.log("btn1 was click hand 2");
});

btn1.addEventListener("click", () => {
  console.log("btn1 was click hand3");
});

btn1.addEventListener("click", () => {
  console.log("btn1 was click hand 4");
});

// for removing 3

btn1.removeEventListener("click",)