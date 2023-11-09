const gridSize: number = 15;

let gameCells: boolean[][] = [];

// populate all cells dead

for (let i = 0; i < gridSize; i++) {
  gameCells[i] = [];
  for (let j = 0; j < gridSize; j++) {
    gameCells[i][j] = false;
  }
}

gameCells[1][2] = true;
gameCells[2][3] = true;
gameCells[3][1] = true;
gameCells[3][2] = true;
gameCells[3][3] = true;

function sleep(delay:number) { // why no sleep function?
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

function checkNeighbours(x: number, y: number) {
  let numberOfNeighbours: number = 0;

  if (x !== 0 && gameCells[x - 1][y]) { // check up if safe
    numberOfNeighbours++;
  }

  if (y !== 0 && gameCells[x][y - 1]) { // check left if safe
    numberOfNeighbours++;
  }

  if (x !== gridSize - 1 && gameCells[x + 1][y]) { // check right if safe
    numberOfNeighbours++;
  }

  if (y !== gridSize - 1 && gameCells[x][y + 1]) { // check down if safe
    numberOfNeighbours++;
  }

  if (gameCells[x][y]) {
    if (numberOfNeighbours == 3 || numberOfNeighbours == 2) {
      gameCells[x][y] = false;
    }
  } else if (!gameCells[x][y] && numberOfNeighbours == 3) {
    gameCells[x][y] = true;
  }
}

function printGrid() {
  let rowString:String = "";

  for (let i = 0; i < gridSize; i++) {

    for (let j = 0; j < gridSize; j++) {

      if (gameCells[i][j]) {
        rowString += " X ";
      } else {
        rowString += " - ";
      }
    }

    console.log(rowString);
    rowString = ""; // Reset rowString for the next row
  }
  console.log(""); // new line for each generation
}

function play() {

  for (let i = 0; i < gridSize; i++) {

    for (let j = 0; j < gridSize; j++) {

      checkNeighbours(i, j); // Call checkNeighbours to update the game state
    }

  }

  printGrid();
 }

// Start game
printGrid();


while (true) {
  //console.table(gameCells);
  sleep(1000);
  play();
}
