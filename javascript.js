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

function updateGridSize() {
    removeGrid();
    
    let gridSize = document.getElementById("gridUserInput").value;
    gridSize = parseInt(gridSize);
    createGrid(gridSize);
}

function removeGrid() {
    let container = document.querySelector(".sketch-container");
    while (container.firstChild) {
        container.firstChild.remove();
    }
}


createGrid(gridSize);