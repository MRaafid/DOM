let a = document.querySelector('input')
let b = document.querySelector('p')
a.addEventListener('input',function(event)
    {
        b.textContent = `Hello! ${a.value}` 
    })

let c = document.querySelector('#test');
let d = document.querySelector('h1')
c.addEventListener('input',function(event)
    {
        d.textContent = `${c.value}` 
    })
