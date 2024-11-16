// Object Cloning in JavaScript:
// Object cloning ka matlab hota hai ek object ki exact copy banana. Isme original object ke data ko ek naye object me copy kiya jata hai. Object cloning ki do tarike hote hain:

// Shallow Clone (Upar-upar se copy karna)
// Deep Clone (Andar tak sab kuch copy karna)


// let obj1 = {
//     name: "raj",
//     address: {
//       city: "Delhi"
//     }
//   };
  
//   let shallowClone = { ...obj1 };  // Using spread operator for shallow copy
  
//   shallowClone.address.city = "Mumbai"; // Changing cloned object's city
  
//   console.log(obj1.address.city); // Output: "Mumbai" (original object also changes)



//   let obj = {
//   name: "ketak",
//   address: {
//     city: "Delhi"
//   }
// };

// let deepClone = JSON.parse(JSON.stringify(obj));  // Deep copy using JSON

// deepClone.address.city = "Mumbai"; // Changing cloned object's city

// console.log(obj.address.city); // Output: "Delhi" (original object remains unchanged)

// let Aa = {
//     name:"sasha",
    
//     fav  : {
//         color : "white" ,
//     }
// }

// let deepClone = JSON.parse (JSON.stringify(Aa));

// deepClone.fav.color = "black";

// console.log(Aa.fav.color);

// let b = { name: "Vishal" };

// // Shallow clone
// let a = b;

// a.name = "Rahul";  // Changing the name in `a`

// console.log(b.name);  // Output: "Rahul"
// console.log(a.name);  // Output: "Rahul"


// let b = { name: "Vishal" };

// // Deep clone using JSON method
// let a = JSON.parse(JSON.stringify(b));

// a.name = "Rahul";  // Changing the name in `a`

// console.log(b.name);  // Output: "Vishal"
// console.log(a.name);  // Output: "Rahul"

// json // object into into string //josn.stringify
//object to json fromat json.parse















