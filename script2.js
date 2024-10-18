
//1. Element ko Access Karna (getElementById, getElementsByClassName):
// 1. ID se element ko access karna
const heading = document.getElementById('mainHeading');
heading.innerHTML = "DOM Concepts are Fun!"; // Text ko change kar diya

// 2. Class se elements ko access karna
const items = document.getElementsByClassName('listItem');
items[0].innerHTML = "Updated Item 1"; // First list item ko change kiya

// 3. Multiple elements access karo (for loop ke sath)
for (let i = 0; i < items.length; i++) {
    console.log(items[i].innerHTML); // Sab items ko print karna
}
//2. Event Handling (addEventListener):
// Button click hone par text change karna
const btn = document.getElementById('changeTextBtn');
btn.addEventListener('click', function() {
    heading.innerHTML = "You clicked the button!"; // Button click hone par text change
});

//3. Attributes ko Change Karna (setAttribute, getAttribute):
// Link ka href change karna
const link = document.getElementById('myLink');
link.setAttribute('href', 'https://www.linkedin.com'); // Link ko update kar diya

//4. querySelector and querySelectorAll:
// 1. Single element select karo using querySelector
const para = document.querySelector('.description');
para.innerHTML = "This text is updated with querySelector";

// 2. All elements select karo using querySelectorAll
const allItems = document.querySelectorAll('.listItem');
allItems.forEach((item, index) => {
    item.innerHTML = `New Item ${index + 1}`; // Har item ko update kar rahe hain
});
























