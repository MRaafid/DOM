const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('focus', () => {
        // Add the 'highlight' class on focus
        input.classList.add('highlight');
    });

    input.addEventListener('blur', () => {
        // Remove the 'highlight' class when the field loses focus
        input.classList.remove('highlight');
    });
});
