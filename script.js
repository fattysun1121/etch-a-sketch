const container = document.getElementById('container');
const createButton = document.getElementById('create');

createButton.onclick = () => {
    const columns = parseInt(prompt(`Please enter a number n in the range of 0 ~ 100 to create
        a n by n grid`));
    if (columns > 100 || typeof columns != 'number') {
        alert('Please enter a number within 0 to 100');
        return;
    }
    container.innerHTML = '';
    createGrid(columns);
};

function changeColor() {
    this.style.backgroundColor = "green";
}

function createGrid(n) {
    container.style['grid-template-columns'] = `repeat(${n}, auto`;
    for (let i = 0; i < n * n; i++) {
        const squareDiv = document.createElement('div');
        squareDiv.style.cssText += `border: 1px solid black; back-ground-color: white;
            padding: 18px 0;`;
        squareDiv.addEventListener('mouseenter', changeColor);
        container.appendChild(squareDiv);
    }
}

createGrid(16);
