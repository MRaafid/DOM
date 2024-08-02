const draggableElement = document.querySelector('#draggable');
const dropzone = document.querySelector('#dropzone');

// dragstart event
draggableElement.addEventListener('dragstart', function(event) {
    event.dataTransfer.setData('text/plain', 'This text may be dragged');
});

// dragenter event
dropzone.addEventListener('dragenter', function(event) {
    event.preventDefault(); // Necessary to allow a drop
    dropzone.classList.add('highlight');
    console.log('Dragged element entered the drop zone');
});

// dragleave event (to remove the highlight if needed)
dropzone.addEventListener('dragleave', function(event) {
    dropzone.classList.remove('highlight');
    console.log('Dragged element left the drop zone');
});