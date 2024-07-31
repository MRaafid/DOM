// using id
let a = document.querySelector('#test')
const newDiv = document.createElement('div');
// creates a div element and assigns it the variable newDiv
// same for all selectors
a.appendChild(newDiv);
newDiv.textContent = 'New content for the div';
//this will add the content

// using tag
let b = document.querySelector('section')
const newDiv2 = document.createElement('div');
// creates a div element and assigns it the variable newDiv
// same for all selectors
b.appendChild(newDiv2);
newDiv2.textContent = 'New content for the div';

// using tag
let c = document.querySelector('.test_2')
const newDiv3 = document.createElement('div');
// creates a div element and assigns it the variable newDiv
// same for all selectors
c.appendChild(newDiv3);
newDiv3.textContent = 'New content for the div';
