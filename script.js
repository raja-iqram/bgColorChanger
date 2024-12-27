const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')


buttons.forEach( (button) =>{
    button.addEventListener('click', function(e){
        if(e.target.id){
            body.style.backgroundColor = `${e.target.id}`
        }
    });
})

// Function for clear Button

const clearButton = document.getElementById('Clear')

clearButton.addEventListener('click', (clear)=>{
    if(clear.target){
        body.style.background =""
    }
})
