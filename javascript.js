let gridSize = 16;

const sketchContainer = document.querySelector('.sketch-container');

function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        let row = document.createElement("div");
        sketchContainer.appendChild(row);
        row.className = "row";

        for (let j = 0; j < gridSize; j++) {
            let square = document.createElement("div");
            row.appendChild(square);
            square.className = "gridSquare";
            square.style.width = "100%";
            let height = (500 / parseInt(gridSize)) - (2); 
            square.style.height = `${height}px`;
        }
    }
}

document.querySelector('#gridBtn').addEventListener('click', inputGridSize);

function inputGridSize() {
    let gridSize = prompt("Enter a grid size (max 100)", "");
    gridSize = parseInt(`${gridSize}`);
    while (!(Number.isInteger(gridSize)) || (gridSize < 1) || (gridSize > 100)) {
        gridSize = prompt("Please enter an integer between 1-100");
        gridSize = parseInt(`${gridSize}`);
    }

    return parseInt(`${gridSize}`);
    console.log(`${gridSize}`);
}

createGrid(gridSize);