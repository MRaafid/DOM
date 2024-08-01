let a = document.querySelector('button')
a.addEventListener('click', function(event) {
    alert(`Button clicked`); 
    if (event.button === 2) 
        {
            event.preventDefault();
        }
});
