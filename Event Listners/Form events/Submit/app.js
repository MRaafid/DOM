a = document.getElementById('myForm');
a.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting to demonstrate the event.
    alert('Form submitted!');
});