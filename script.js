 let counter = document.getElementById('counter')
 let increment = document.getElementById('increment')
 let decrement = document.getElementById('decrement')


//  initial state 
let count = 0;

increment.addEventListener('click',()=>{
    count++;
    counter.innerText = count;
})
decrement.addEventListener('click',()=>{
    count--;
    counter.innerText = count;
})
