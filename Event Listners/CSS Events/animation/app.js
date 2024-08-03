const animatedBox = document.getElementById('animatedBox');

animatedBox.addEventListener('animationstart', (event) => {
    console.log('Animation started');
});

animatedBox.addEventListener('animationend', (event) => {
    console.log('Animation ended');
});

animatedBox.addEventListener('animationiteration', (event) => {
    console.log('Animation iteration completed');
});