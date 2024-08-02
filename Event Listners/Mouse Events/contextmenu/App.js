let a = document.querySelector('button')
a.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    alert(`Button clicked`); 
});
