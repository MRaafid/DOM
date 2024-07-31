// using tag
let b = document.querySelectorAll('section')
const newDiv = document.createElement('div');
// creates a div element and assigns it the variable newDiv
// same for all selectors
b[1].appendChild(newDiv);
newDiv.textContent = 'New content for the div';
// same step for using class

// if i want to apply for all
let c = document.querySelectorAll('.test_2')
c.forEach(element => {
    newDiv2 = document.createElement('div');
    element.appendChild(newDiv2);
    newDiv2.textContent = 'New content for the div';
});