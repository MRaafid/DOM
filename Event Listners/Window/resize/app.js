window.addEventListener('resize', function() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    a = document.getElementById('size')
    a.textContent = `Window size: ${width}x${height}`;
});