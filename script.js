console.log(`==================getElementById==============`);
const elementCssTopic = document.getElementById("cssTopics");
console.log(elementCssTopic.innerHTML);
elementCssTopic.innerHTML = "Css imp topic"; // This will change the content

console.log(`==================getElementsByClassName==============`);
const topicsElement = document.getElementsByClassName('JsTopic'); // Removed the dot
console.log(topicsElement[0].innerHTML); // Access the first element
console.log(topicsElement[1].innerHTML); // Access the second element

console.log(`=================querySelectorAll()==============`);
const allElementJsTopics = document.querySelectorAll('.JsTopic');
for (let index = 0; index < allElementJsTopics.length; index++) {
    const element = allElementJsTopics[index].innerHTML;
    console.log(element);
}

// Changing href attribute
const elementFollowMe = document.querySelector('#followMe');
elementFollowMe.setAttribute('href', "https://www.linkedin.com/in/ananya-amzare-5331132a3/");

//creating new element
const elementLi =  document.createElement('li');
const elementTextNode = document.createElement("ES6 features");
elementLi.appendChild(elementTextNode);
const elementJsTopicList = document.querySelector('#JsTopicList');
elementJsTopicList.appendChild(elementLi);


//remove element 
const elementControlFlow = document.querySelector('#ControlFlow');
const elementJsTopic =  document.querySelector('#JsTopicList');
elementJsTopic.removeChild(elementControlFlow);

//creating new element
const elementSpan = document.createElement('span');
const elementTNFollowMe = document.createTextNode("follow me on social media");
elementSpan.appendChild(elementTNFollowMe);

// Apply css property or change
const elementListHeading = document.querySelector('#ListHeading');
elementListHeading.style.color = 'red';

//font-family in js fontFamily;

//dom event
//event handling
const elementMe = document.querySelector('#Me');
elementMe.addEventListener('mouseover', () =>{
    alert('hey im css');
});




































