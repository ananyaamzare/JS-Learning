// Given array
const arrayFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];

// 1. Log the first and last element on console
console.log("First element:", arrayFruits[0]); // First element: Banana
console.log("Last element:", arrayFruits[arrayFruits.length - 1]); // Last element: Water Melon

// 2. Add element "Papaya" before the element 'Banana' and then log array on console
arrayFruits.unshift("Papaya");
console.log("After adding Papaya:", arrayFruits); // ["Papaya", "Banana", "Orange", "Apple", "Mango", "Water Melon"]

// 3. Remove 'Mango' from the array
const mangoIndex = arrayFruits.indexOf("Mango");
if (mangoIndex !== -1) {
  arrayFruits.splice(mangoIndex, 1);
}
console.log("After removing Mango:", arrayFruits); // ["Papaya", "Banana", "Orange", "Apple", "Water Melon"]

// 4. Add element or insert an element 'Pineapple' at the last position
arrayFruits.push("Pineapple");
console.log("After adding Pineapple:", arrayFruits); // ["Papaya", "Banana", "Orange", "Apple", "Water Melon", "Pineapple"]

// 5. Insert an element - 'Dragon Fruit' before "Water Melon"
const waterMelonIndex = arrayFruits.indexOf("Water Melon");
if (waterMelonIndex !== -1) {
  arrayFruits.splice(waterMelonIndex, 0, "Dragon Fruit");
}
console.log("After adding Dragon Fruit:", arrayFruits); // ["Papaya", "Banana", "Orange", "Apple", "Dragon Fruit", "Water Melon", "Pineapple"]

// 6. Replace an element 'Orange' with 'Kiwi'
const orangeIndex = arrayFruits.indexOf("Orange");
if (orangeIndex !== -1) {
  arrayFruits[orangeIndex] = "Kiwi";
}
console.log("After replacing Orange with Kiwi:", arrayFruits); // ["Papaya", "Banana", "Kiwi", "Apple", "Dragon Fruit", "Water Melon", "Pineapple"]

// 7. Log the elements starting from index 1 to 4
const subArray = arrayFruits.slice(1, 5);
console.log("Elements from index 1 to 4:", subArray); // ["Banana", "Kiwi", "Apple", "Dragon Fruit"]

// 8. Only select the last 3 elements and log on console: Use the length property
const lastThreeElements = arrayFruits.slice(arrayFruits.length - 3);
console.log("Last 3 elements:", lastThreeElements); // ["Dragon Fruit", "Water Melon", "Pineapple"]


console.log(`===========================Assingment 2=============================`)

// Given array
const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];

// 1. Find the total elements available or length and log on console
console.log("Total elements in arrayNumbers:", arrayNumbers.length); // Output: 11

// 2. Log the first element and last element in arrayNumbers and log on console
console.log("First element:", arrayNumbers[0]); // Output: 20
console.log("Last element:", arrayNumbers[arrayNumbers.length - 1]); // Output: 11

// 3. Log the third last element using length property and log on console
console.log("Third last element:", arrayNumbers[arrayNumbers.length - 3]); // Output: 60

// 4. Find all even numbers using for-in loop and log on console
console.log("Even numbers:");
for (let index in arrayNumbers) {
  if (arrayNumbers[index] % 2 === 0) {
    console.log(arrayNumbers[index]); // Output: 20, 40, 60, 2
  }
}

// 5. Find all odd numbers using for-in loop and log on console
console.log("Odd numbers:");
for (let index in arrayNumbers) {
  if (arrayNumbers[index] % 2 !== 0) {
    console.log(arrayNumbers[index]); // Output: 31, 25, 23, 11, 29, 9, 11
  }
}

// 6. Find all the even-positioned elements from arrayNumbers, sum them and log on console
let evenPositionSum = 0;
console.log("Even-positioned elements:");
for (let i = 0; i < arrayNumbers.length; i++) {
  if (i % 2 === 0) { // Even index positions
    console.log(arrayNumbers[i]);
    evenPositionSum += arrayNumbers[i];
  }
}
console.log("Sum of even-positioned elements:", evenPositionSum); // Output: 150

// 7. Find all the odd-positioned elements from arrayNumbers, sum them and log on console
let oddPositionSum = 0;
console.log("Odd-positioned elements:");
for (let i = 0; i < arrayNumbers.length; i++) {
  if (i % 2 !== 0) { // Odd index positions
    console.log(arrayNumbers[i]);
    oddPositionSum += arrayNumbers[i];
  }
}
console.log("Sum of odd-positioned elements:", oddPositionSum); // Output: 109

// 8. Find the sum of all elements from arrayNumbers and log on console
let totalSum = 0;
for (let number of arrayNumbers) {
  totalSum += number;
}
console.log("Sum of all elements:", totalSum); // Output: 261

// 9. Find the numbers which are multiple of 5 and log on console
console.log("Numbers which are multiples of 5:");
for (let number of arrayNumbers) {
  if (number % 5 === 0) {
    console.log(number); // Output: 20, 40, 25, 60
  }
}

// 10. Is number 115 available in arrayNumbers?
console.log("Is 115 available in arrayNumbers?", arrayNumbers.includes(115)); // Output: false

// 11. Is number 23 available in arrayNumbers?
console.log("Is 23 available in arrayNumbers?", arrayNumbers.includes(23)); // Output: true

// 12. Insert numbers 55, 66 before index 3 and log array on console
arrayNumbers.splice(3, 0, 55, 66);
console.log("Array after inserting 55, 66 before index 3:", arrayNumbers); 
// Output: [20, 31, 40, 55, 66, 25, 23, 11, 29, 9, 60, 2, 11]

// 13. Delete 3 elements starting from index 4 and log arrayNumbers on console
arrayNumbers.splice(4, 3);
console.log("Array after deleting 3 elements from index 4:", arrayNumbers); 
// Output: [20, 31, 40, 55, 23, 11, 29, 9, 60, 2, 11]

console.log(`----------------concat-----------------------`)

let array1 = [1,2];
let array2 = [3,4];
let array3 = array1.concat(array2);
console.log(array3);

console.log(`----------------join-----------------------`);
let result = array1.join(",");
console.log(result);

console.log(`-----------for of loop-----------------`);

for (const element of array3) {
    console.log(element);
}
 
console.log(`-----------resize the array-----------------`);
let array4 = [4,5,6,7,8,9];
array4.length = 3;
console.log(array4);

console.log(`-----------spread operator-----------------`);

let array5 = [4,5,6,7,8,9];
console.log(array5);
console.log(...array5);







