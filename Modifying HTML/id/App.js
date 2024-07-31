let a = document.getElementById('test')
const newDiv = document.createElement('div');
// creates a div element and assigns it the variable newDiv
// same for all selectors
a.appendChild(newDiv);
newDiv.textContent = 'New content for the div';
//this will add the content
