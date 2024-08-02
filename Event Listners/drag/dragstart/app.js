document.querySelector('.draggable').addEventListener('dragstart', function(event) {
    console.log('Drag started!');
    // You can set data to be transferred during the drag operation
    event.dataTransfer.setData('text/plain', 'This text may be dragged');
});