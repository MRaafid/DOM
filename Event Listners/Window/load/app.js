window.addEventListener('load', function() {
    console.log('The page has fully loaded.');
});

const image = document.querySelector('#exampleImage');
image.addEventListener('load', function() {
    console.log('The image has fully loaded.');
});