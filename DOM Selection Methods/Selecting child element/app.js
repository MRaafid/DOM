let a = document.querySelector('div')
let firstChild = a.children[0];
console.log(firstChild)           
// Output: <h1>Test 1</h1>

let secondChild = a.children[1];  
console.log(secondChild)         
// Output: <h1 style="color: blue;">Test 2</h1>

let thirdChild = a.children[2];  
console.log(thirdChild)
// Output: <h1 style="color: red;">Test 3</h1>

let lastChild = a.lastElementChild;
console.log(lastChild)               
// Output: <h1 style="color: green;">Test last</h1>
