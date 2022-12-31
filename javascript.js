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
    hoverColor();
}

function removeGrid() {
    let container = document.querySelector(".sketch-container");
    while (container.firstChild) {
        container.firstChild.remove();
    }
}

function hoverColor() {
    let cells = document.querySelectorAll(".gridSquare");

    cells.forEach(cell => {
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "black";
            cell.style.border = "black solid 1px";
        })
    })
}

function hoverRandomColor(gridSize) {
    cells = document.querySelectorAll(".gridSquare");
    rows = document.querySelectorAll(".row");

    for (let j = 0; j < gridSize; j++) {
        randomColor = getRandomColor();
        let parent = cells.
        rows[j].cells[j].style.backgroundColor = `${randomColor}`;
    }
}

function hoverRainbow() {
    let cells = document.querySelectorAll(".gridSquare");
    cells.forEach(cell => cell.addEventListener("mouseover", (e) => { 
        let color = getRandomColor();
        cell.style.background = `${color}`;
        cell.style.border = `${color} solid 1px`;
    }))

}

function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";

    for (let i=0; i<6; i++) {
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
    console.log(color);
}


// function hoverRainbowColor(e) {
//     let randomColor = getRandomColor();
//     e.target.style.backgroundColor = randomColor;
// }

createGrid(gridSize);
hoverRainbow();
