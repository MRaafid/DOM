let a = document.querySelector('div')
let h1 = document.createElement('h1')
a.appendChild(h1)
a.style.backgroundColor ='blue'
a.style.width ='500px';
a.style.height ='500px';
a.style.position ='relative';
a.style.left = '20%';
a.style.top ='50px';
h1.style.textAlign = 'center'
h1.style.position ='relative';
h1.style.top ='40%';
document.addEventListener('keydown', function(event) {
    event.preventDefault();
    console.log(event.code)
    if(event.code === 'Enter')
        {
            h1.textContent = 'You have pressed enter'
        }
    else if (event.code === 'Space')
        {
            h1.textContent = 'You have pressed Space'
        }
});