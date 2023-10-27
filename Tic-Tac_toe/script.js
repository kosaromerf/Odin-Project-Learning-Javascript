const squares = document.querySelectorAll(".square");

const statusText = document.getElementById("announcer");

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

let running = false;

startGame();

function startGame() {
  squares.forEach((e) => e.addEventListener("click", makeMove));
  statusText.innerHTML = `Player ${currentPlayer} needs to move`;
  resultText.innerHTML = "";
}

function makeMove() {
  const squareIndex = this.getAttribute("index");
  if (cells[squareIndex] != "") {
    return;
  }
  updateSquare(this, squareIndex);
}

function updateSquare(square, index) {
  cells[index] = currentPlayer;
  square.innerHTML = currentPlayer;
}

function changeDifficulty() {}

function endGame() {}

function changeTime() {}

function changeAnnouncement() {}

function changeResult() {}
