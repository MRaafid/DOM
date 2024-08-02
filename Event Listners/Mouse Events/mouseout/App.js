let a = document.querySelector('div')
a.style.backgroundColor ='red'
a.style.width ='500px';
a.style.height ='500px';
a.style.position ='relative';
a.style.left = '20%';
a.style.top ='50px';

a.addEventListener('mouseover', function(event) {
    event.preventDefault();
    a.style.backgroundColor ='blue';
    console.log(`x:${event.clientX} and y:${event.clientY}`)
});

a.addEventListener('mouseout', function(event){
    a.style.backgroundColor ='green'
})