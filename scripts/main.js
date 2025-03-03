function createGrid(x) {
    const gridContainer = document.querySelector('.gridContainer')
    

for (let row = 0; row < x; row++) {
    for (let column = 0; column < x; column++) {
    const box = document.createElement('div');
    if (row === column + 1)  {                 // Once i is equal to column variable, it will increase the width to 100% and flex wrap will wrap our boxes to the next line
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
createGrid(prompt('How many squares?'))

//Generate new grid button

// function newGrid() {
//     const button = document.querySelector('.getNewGrid')
//     const askUser = button.addEventListener('click', function() {
//         prompt('How many squares per side?')   
    

//     if (askUser < 3 || askUser > 100) {
//         alert('Try a more reasonable number')
//     } else {
//         createGrid(askUser)
//     }
// })
// }
// newGrid()

