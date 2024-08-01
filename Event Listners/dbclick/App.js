let a = document.querySelector('button')
a.addEventListener('dblclick', function(event) {
    alert(`Button clicked`); 
    if (event.button === 2) 
        {
            event.preventDefault();
        }
});
