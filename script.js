// JavaScript

const body = document.body;
//let sides = 16;

const resetButton = document.createElement('button');
resetButton.textContent = 'Reset';
resetButton.addEventListener('click', resetGrid);
body.appendChild(resetButton);

function resetGrid() {
  let sides = prompt('Change Gridsize');
  if (isNaN(sides)) {
    alert('Enter a Number!')
    sides = prompt('Change Gridsize');
  } else if (sides < 0 || sides > 200 ) {
    alert('Enter another Number!')
    sides = prompt('Change Gridsize');
  } else {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    createGrid(sides);
  }

}

function createGrid(sides) {

  const container = document.querySelector('#container');
  container.classList.add('container');
  container.style.display = 'grid';
  container.style.width = '660px';
  container.style.height = '660px';
  container.style.border = '1px solid black';
  container.style.gridTemplateColumns = `repeat(${sides}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${sides}, 1fr)`;
  body.appendChild(container);


  for (let i = 1; i <= sides; i++) {
    for (let j = 1; j <= sides; j++) {
    let grid = document.createElement('div');
    grid.style.gridColumn = `${i}`;
    grid.style.gridRow = `${j}`;
    grid.className = "grid";
    grid.style.backgroundColor = "whitesmoke";
    //grid.textContent = `i${i} j${j}`;

    grid.addEventListener('mouseover', changeColor)
    container.appendChild(grid);
    }
  }
}

function changeColor() {
  this.style.backgroundColor = randomColor();
}

function randomColor() {
  let color = Math.floor(0x1000000 * Math.random()).toString(16);
  return '#' + ('000000' + color).slice(-6);
}