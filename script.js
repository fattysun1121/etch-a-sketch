const container = document.getElementById('container');
const createButton = document.getElementById('create');

createButton.onclick = () => {
    const columns = parseInt(prompt(`Please enter a number n in the range of 0 ~ 100 to create
        a n by n grid`));
    console.log(columns);
    if (columns > 100 || isNaN(columns)) {
        alert('Please enter a number within 0 to 100');

    } else {
        container.innerHTML = '';
        createGrid(columns);

    }


};

function changeColor() {
    let color = Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor = `#${color}`;
}

function createGrid(n) {
    const height = 868 / n;
    container.style['grid-template-columns'] = `repeat(${n}, auto`;
    for (let i = 0; i < n * n; i++) {
        const squareDiv = document.createElement('div');
        squareDiv.style.cssText += `border: 1px solid white; background-color: black;
            height: ${height}px;`;
        squareDiv.addEventListener('mouseenter', changeColor);
        container.appendChild(squareDiv);
    }
}

createGrid(16);
