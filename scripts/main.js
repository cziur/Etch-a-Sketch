function createGrid(row) {
const gridContainer = document.querySelector('.gridContainer')
const total = (row * row) + row
const column = row + 1 // To make sure our grid is square and doesn't run across the whole page

for (let i = 0; i < total; i++) {
    const box = document.createElement('div');
    if (i % column === 0) {
        box.style.cssText = 'border: 0; height: 0; width: 100%;'
    } else {
    box.style.cssText = 'border: 1px solid black; height: 25px; width: 25px;'
    }

    gridContainer.appendChild(box)

    //Hover event
    box.addEventListener('mouseenter', function() {
        box.style.backgroundColor = 'black'
    });
    box.addEventListener('mouseleave', function() {
        box.style.backgroundColor = 'white;'
    });
}

}
createGrid(16, 16)

