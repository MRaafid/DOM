let a = document.querySelector('input')
let b = document.querySelector('p')

//form 
a.addEventListener('change',function(event)
    {
        b.textContent = `Hello! ${a.value}` 
    });

// select
let c = document.querySelector('select')
let d = document.querySelector('h1')
c.addEventListener('change',function(event)
    {
        d.textContent = `Your choice: ${c.value}` 
    });

const s = document.querySelector('button');

    s.addEventListener('change', function (event){
        alert('Form element value changed:', event.target.value);
    });
