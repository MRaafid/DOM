window.addEventListener('scroll', function() {
    console.log('Scroll position:', window.scrollY);
});
document.getElementById('scrollable').addEventListener('scroll', function(event) {
    console.log('Scrolled to:', this.scrollTop);
});