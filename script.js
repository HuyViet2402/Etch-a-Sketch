const gridContainer = document.querySelector(".container");
const inputColor = document.querySelector("#favcolor");

function removeGrid() {
    while(gridContainer.hasChildNodes()) {
        while(gridContainer.firstChild.hasChildNodes()) {
            gridContainer.firstChild.removeChild(gridContainer.firstChild.firstChild)
        }
        gridContainer.removeChild(gridContainer.firstChild)
    }
}

function generateGrid(n) {
    for (let i = 0; i < n; i++) {
        const div_row = document.createElement("div");
        div_row.setAttribute("style", "display: flex;")
        for (let j = 0; j < n; j++) {
            const div_square = document.createElement("div");
            div_square.setAttribute("style", "background-color: white; border-style: solid; width: 30px; height: 30px; margin: 0.5px;");
            div_square.addEventListener("mouseenter", () => {
                let color = inputColor.value;
                div_square.setAttribute("style", "background-color:" + color.toString() + "; border-style: solid; width: 30px; height: 30px; margin: 0.5px;");
            })
            div_row.append(div_square);
        }
        gridContainer.append(div_row);
    }
}


const confirmGridButton = document.querySelector("button");
const gridDimensionInput = document.querySelector("#grid");

let inputDimensionValue = 0;
confirmGridButton.addEventListener("click", () => {
    inputDimensionValue = parseInt(gridDimensionInput.value);
    if(!(Number.isInteger(inputDimensionValue)) || inputDimensionValue < 0 || inputDimensionValue > 100) {
        alert("Wrong input, must be integer, larger than 0 and less than 100. Try again");
        console.log(inputDimensionValue)
    }
    else {
        removeGrid()
        generateGrid(inputDimensionValue)
    }
})

generateGrid(16)