const draggable = document.getElementById('draggable');
const dropzone = document.getElementById('dropzone');

draggable.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', 'This text may be dragged');
});

draggable.addEventListener('dragend', (event) => {
    console.log('Drag operation ended');
    draggable.style.backgroundColor = 'lightgreen'; // Change color to indicate end of drag
});