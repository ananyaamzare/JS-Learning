


// 1. Using JSON.parse() and JSON.stringify():

let obj1 = {
    name: "Anu",
    address: {
      city: "Mumbai",
      zip: 400001
    }
  };
  let deepClone = JSON.parse(JSON.stringify(obj1));
  console.log(deepClone);


  // Using Recursion for Deep Cloning:
  function deepClone(obj) {
    if (obj === null || typeof obj !== "object") {
      return obj; // return the value if obj is not an object
    }
    let clone = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        clone[key] = deepClone(obj[key]); // Recursively clone each property
      }
    }
    return clone;
  }
  
  let originalObj = {
    name: "Vishal",
    address: {
      city: "Mumbai",
      zip: 400001
    }
  };
  
  // Here, I renamed the deepClone variable to clonedObj
  let clonedObj = deepClone(originalObj);
  console.log(clonedObj);
  
  
  



  