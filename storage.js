// In JavaScript, storage refers to the browser's ability to store data locally on the user's device. There are two main types of storage:

// localStorage: Stores data with no expiration time. The data persists even after the browser is closed and reopened.
// sessionStorage: Stores data for one session. The data is cleared when the page is closed or the browser session ends.


// 1. localStorage:
// Stores key-value pairs.
// Data is stored permanently (until the user manually clears it or you remove it via code).


/// Storing data
// localStorage.setItem("name", "Amit");

// // Retrieving data
// let name = localStorage.getItem("name");
// console.log(name);  // Output: "Amit"

// // Removing data
// localStorage.removeItem("name");

// // Clearing all data
// localStorage.clear();

let body=document.querySelector("body");
let name1=document.querySelector("#name");
name1.addEventListener("input",()=>{
    let nam=name1.value ;
})

localStorage.setItem('name1',nam);
sessionStorage.setItem("names",nam);
let para=document.createElement("p");
para.innerHTML=localStorage.getItem('name1');
let para1=document.createElement("p");
para1.innerHTML=sessionStorage.getItem('names');
body.append(para);
body.append(para1);

