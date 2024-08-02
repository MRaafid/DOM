let a = document.querySelector('div')
a.style.backgroundColor ='blue'
a.style.width ='500px';
a.style.height ='500px';
a.style.position ='relative';
a.style.left = '20%';
a.style.top ='50px';

a.addEventListener('mousemove', function(event) {
    event.preventDefault();
    a.style.backgroundColor ='red';
    console.log(`x:${event.clientX} and y:${event.clientY}`)
});