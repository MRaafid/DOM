let a = document.querySelector('button')
a.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

a.addEventListener('mousedown', function(event) {
    if(event.button === 1) {alert(`Middle Button clicked`)}
    else if (event.button === 2) {alert(`Right Button clicked`)}
    else {alert(`Left Button clicked`)}
});
