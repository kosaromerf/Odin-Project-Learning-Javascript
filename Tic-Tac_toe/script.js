const squares = document.querySelectorAll(".square");

const resultText = document.getElementById("result");

const restartButton = document.getElementById("restart");
const changePlayerButton = document.getElementById("changeplayer");
const removeTimeButton = document.getElementById("interval");
const easyButton = document.getElementById("easy");
const hardButton = document.getElementById("hard");
const unbeatableButton = document.getElementById("unbeatable");

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let currentPlayer = "X";

let cells = ["", "", "", "", "", "", "", "", ""];

let running = true;

startGame();

function startGame() {
  running = true;
  squares.forEach((e) => e.addEventListener("click", makeMove));
  restartButton.addEventListener("click", resetGame);
  endGame();
}

function makeMove() {
  if (running) {
    const squareIndex = this.getAttribute("index");
    if (cells[squareIndex] != "") {
      return;
    }
    updateSquare(this, squareIndex);
    changePlayer();
    changeResult();
    endGame();
  }
}

function updateSquare(square, index) {
  cells[index] = currentPlayer;
  square.innerHTML = currentPlayer;
}

function changePlayer() {
  currentPlayer == "X" ? (currentPlayer = "O") : (currentPlayer = "X");
}

function resetGame() {
  cells = ["", "", "", "", "", "", "", "", ""];
  squares.forEach((e) => (e.innerHTML = ""));
  currentPlayer = "X";
  running = true;
  changeResult();
  endGame();
}

function changeResult() {
  resultText.textContent = `Player ${currentPlayer}'s move`;
}

function endGame() {
  for (let i = 0; i < winConditions.length; i++) {
    if (
      cells[winConditions[i][0]] == "X" &&
      cells[winConditions[i][1]] == "X" &&
      cells[winConditions[i][2]] == "X"
    ) {
      running = false;
      resultText.textContent = `Player X won the game`;
      break;
    } else if (
      cells[winConditions[i][0]] == "O" &&
      cells[winConditions[i][1]] == "O" &&
      cells[winConditions[i][2]] == "O"
    ) {
      running = false;
      resultText.textContent = `Player O won the game`;
      break;
    } else if (cells.indexOf("") == -1) {
      running = false;
      resultText.textContent = `Draw`;
      break;
    } else {
      continue;
    }
  }
}

function changeDifficulty() {}
function changeTime() {}
