const draggableElement = document.querySelector('#draggable');

draggableElement.addEventListener('drag', function(event) {
    console.log('Element is being dragged');
});