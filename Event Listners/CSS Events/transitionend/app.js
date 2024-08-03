const box = document.getElementById('box');
const toggleButton = document.getElementById('toggle');

toggleButton.addEventListener('click', () => {
    box.classList.toggle('expanded');
});

box.addEventListener('transitionend', (event) => {
    console.log(`Transition ended for property: ${event.propertyName}`);
});