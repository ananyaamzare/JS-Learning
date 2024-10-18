

let array = [4, 5, 4, 5, 8 ,5];

let mySet = new Set();
mySet.add(2);
mySet.add(4);
mySet.add(6);
mySet.add(7);
console.log(mySet);

mySet.add(4);
console.log(mySet);

let isAvailable = mySet.has(6);
console.log(isAvailable);

let is9Available = mySet.has(9);
console.log(is9Available);

console.log(`set size is ${mySet.size}`);

mySet.delete(4);
console.log(mySet);

//mySet.clear();

for (const element of mySet) {
    console.log(element);
}

let array1 = [4, 5, 4, 5, 8 ,5];
let setOfNumbers = new Set();
for (const value of array){
    setOfNumbers.add(value);
}
console.log(array);
console.log(setOfNumbers);

console.log(`removing duplicate element from array spred opreater`)
let arrayNew = [4,5,4,5,8,5,7,8,9,8];
arrayNew = [...new Set(arrayNew)];
console.log(arrayNew);
// console.log(newSet);

// add(value): Adds a value to the Set.
// delete(value): Removes a value from the Set.
// has(value): Checks if a value exists in the Set.
// clear(): Clears all elements from the Set.
// size: Returns the number of elements in the Set.





