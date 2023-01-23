const wrapper_div = document.createElement('div');

wrapper_div.classList.add("wrapper");

wrapper_div.innerHTML = `
<div>
This is the wrapper div
</div>
` 
document.body.appendChild(wrapper_div);
console.log(wrapper_div);

// Creating  an unordered list
const ul = `<ul>
<li>One</li>
<li>Two</li>
<li>Three</li>
</ul>`
;
wrapper_div.innerHTML = ul;
// const list = document.createElement("ul");
// const elementOne = document.createElement('li');
// elementOne.textContent = 'ONE';


// create an image
const image = document.createElement("img");
// set the source to an image
image.src = './tiger.jpg';
// set the width to 250
image.width = 250;
// add a class of cute
image.classList.add('cute');
// add an alt of Cute Puppy
image.alt = 'Cute Puppy';
// Append that image to the wrapper
wrapper_div.append(image);

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `<div class='para_div'>
<p> Paragraph One</p>
<p> Paragraph Two</p>
</div>`;

const ulElement = wrapper_div.querySelector('ul');
//console.log(ulElement);
// put this div before the unordered list from above
ulElement.insertAdjacentHTML('beforebegin', myHTML);

// add a class to the second paragraph called warning
const para_div = document.querySelector('.para_div');
para_div.children[1].classList.add('warning');

// remove the first paragraph
para_div.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

function generatePlayerCard(name, age, height) {
    const html = 
        `<div class="playerCard">
            <h2>${name} — ${age}</h2>
            <p>They are ${height} and ${age} years old. In Dog years this person would be ${age*7}. That would be a tall dog!</p>
         </div>
        `;
    return html;
}
// make a new div with a class of cards
 let cardDiv = '';

// Have that function make 4 cards
// append those cards to the div
for (let i = 0; i < 4; i++) {
   cardDiv += generatePlayerCard(`akshay${i}`, 20 + i, 178 + i);
}
console.log(cardDiv);

// put the div into the DOM just before the wrapper element

wrapper_div.insertAdjacentHTML('beforebegin', cardDiv);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
const cardElements = document.querySelectorAll('.playerCard');
console.log(cardElements);
console.log(cardElements[2]);
const button = `<button>Delete</button>`;
for (let i = 0; i < 4; i++) {
    cardElements[i].insertAdjacentHTML('beforeend', button); 
}
// select all the buttons!
// make out delete function
// loop over them and attach a listener
function deleteCard(event) {
    const buttonClick = event.currentTarget;
    buttonClick.closest('.playerCard').remove();
};

const deleteButtons = document.querySelectorAll('button');
console.log(deleteButtons);

for (let i = 0; i < 4; i++) {
    deleteButtons[i].addEventListener('click', deleteCard);
}