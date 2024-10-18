



let array = [11,"6ft", "AA","MH",true, false];
console.log(array);

let map = new Map();
map.set("rollNo", 11);
map.set("height", "6ft");
map.set("name","AA");// name is key , AA is value // key is only string and value can be anything
map.set("isMarried",true);
map.set("haveKid","No");
map.set("skills",["Angular", "react", "js", "html&css","docker","kb"] )
console.table(map);
console.log(map.size);

let stateValue = map.get("state");
console.log(stateValue);


console.log(`---------SKILLS------------`);
let skills = map.get("skills");
for (const skill of skills) {
    console.log(skill);
}


let isHeightKeyIsAvailable = map.has("height");
console.log(isHeightKeyIsAvailable);

map.delete("haveKid");
// console.table(map);

console.log(map.keys());
console.log(map.values());

map.set("rollNo", 22);
console.table(map);

console.log(`---------travers---------`);

let keys = map.keys();
for (const key of keys) {
    console.log(`${key} ==> ${map.get(key)}`);
}








