let id = document.getElementById('test');
console.log(id);
// Output: <p id="test_1"> Hi there</p>
//finds and prints the mentionde id
// if not found output will be null
let clss = document.getElementsByClassName('test_2');
console.log(clss);
//get all the elements with mentioned class
// if not found output will be null
let name = document.getElementsByName('username')
console.log(name);
//used in forms
//output: <input type="text" name="username" value="John">
let element = document.querySelector('.test_2'); // for class
let elemnt = document.querySelector('#test_1');  // for Id
let elements = document.querySelectorAll('.test_2');
let elment = document.querySelector('button').closest('div');
let children = document.getElementById('parentId').children;
let parent = document.getElementById('myId').parentNode;
let parnt = document.getElementById('myId').parentNode;