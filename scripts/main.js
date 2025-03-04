const button = document.querySelector('.getNewGrid')
const gridContainer = document.querySelector('.gridContainer')
const userInput = prompt('How many squares per side?')

function createGrid(x) {
    
    

for (let row = 0; row < x; row++) {
    for (let column = 0; column < x; column++) {
    const box = document.createElement('div');
    box.classList.add('box')
    if (row % column + 1 === 0)  {
        box.style.cssText = 'border: 0; height: 0; width: 100%;'
    } else {
        box.style.cssText = `border: 1px solid black; height: ${960/x}px; width: ${960/x}px;`
    }


    gridContainer.appendChild(box)
    
    //Hover event
    box.addEventListener('mouseenter', function() {
        box.style.backgroundColor = 'black'
    });
}
}

}
if (userInput < 3 || userInput > 100) {
    alert('Try a more reasonable number')
    window.location.reload()
} else {
    createGrid(userInput)
}

// Generate new grid

const askUser = button.addEventListener('click', function() {
    window.location.reload()
    createGrid(userInput)
})

