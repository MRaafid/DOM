const draggableElement = document.querySelector('#draggable');
const dropzone = document.querySelector('#dropzone');

// dragstart event
draggableElement.addEventListener('dragstart', function(event) {
    event.dataTransfer.setData('text/plain', 'This text may be dragged');
});

// dragover event
dropzone.addEventListener('dragover', function(event) {
    event.preventDefault(); // Necessary to allow the drop
    dropzone.classList.add('highlight');
    console.log('Dragged element is over the drop zone');
});

// dragleave event (to remove the highlight if needed)
dropzone.addEventListener('dragleave', function(event) {
    dropzone.classList.remove('highlight');
    console.log('Dragged element left the drop zone');
});

// drop event to complete the drag and drop
dropzone.addEventListener('drop', function(event) {
    event.preventDefault();
    dropzone.classList.remove('highlight');
    console.log('Dropped successfully');
});