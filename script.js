const gridContainer = document.querySelector(".container");
for (let i = 0; i < 16; i++) {
    const div_row = document.createElement("div");
    div_row.setAttribute("style", "display: flex;")
    for (let j = 0; j < 16; j++) {
        const div_square = document.createElement("div");
        div_square.setAttribute("style", "background-color: white; border-style: solid; width: 30px; height: 30px; margin: 0.5px;");
        div_square.addEventListener("mouseenter", () => {
            div_square.setAttribute("style", "background-color: black; border-style: solid; width: 30px; height: 30px; margin: 0.5px;");
        })
        div_row.append(div_square);
    }
    gridContainer.append(div_row);
}