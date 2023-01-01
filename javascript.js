let gridSize = 16;
let pen = "black";

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

    if (pen === "eraser") {
        pen = "black";
    }
    hoverColor();
}

function removeGrid() {
    let container = document.querySelector(".sketch-container");
    while (container.firstChild) {
        container.firstChild.remove();
    }
}

function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";

    for (let i=0; i<6; i++) {
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}

const clearBtn = document.querySelector("#clear-btn");
clearBtn.addEventListener('click', (e) => {
    clearGrid();
})

function clearGrid() {
    let cells = document.querySelectorAll(".gridSquare");
    cells.forEach(cell => {
        cell.style.backgroundColor = "";
        cell.style.opacity = "";
    })

    if (pen === "eraser") {
        pen = "black";
        return pen;
    }
}

const rainbowBtn = document.querySelector("#rainbow-btn");
rainbowBtn.addEventListener('click', (e) => {
    pen = "rainbow";
})

const grayscaleBtn = document.querySelector("#grayscale-btn");
grayscaleBtn.addEventListener('click', (e) => {
    pen = "grayscale";
})

const blackBtn = document.querySelector("#black-btn");
blackBtn.addEventListener('click', (e) => {
    pen = "black";
})

const eraserBtn = document.querySelector("#eraser-btn");
eraserBtn.addEventListener('click', (e) => {
    pen = "eraser";
})

function hoverColor() {
    let cells = document.querySelectorAll('.gridSquare');
    cells.forEach(cell => {
        cell.addEventListener("mouseover", function(e) {
            if (pen === "black") {
                cell.style.backgroundColor = "black";
                cell.style.opacity = 2;
            } else if (pen === "rainbow") {
                let color = getRandomColor();
                cell.style.background = `${color}`;
                cell.style.opacity = 2;
            } else if (pen === "grayscale") {
                if (cell.style.opacity === "2") {
                    cell.style.opacity = "";
                }
                cell.style.backgroundColor = "#141414";
                if (cell.style.opacity <= 0.9) {
                    cell.style.opacity = +cell.style.opacity + 0.1;
                } 
            } else if (pen === "eraser") {
                cell.style.backgroundColor = "";
                cell.style.opacity = "";
            }
        });
    });
}

createGrid(gridSize);
hoverColor();
