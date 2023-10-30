const squares = document.querySelectorAll(".square");

const resultText = document.getElementById("result");

const restartButton = document.getElementById("restart");
const changePlayerButton = document.getElementById("changeplayer");
const removeTimeButton = document.getElementById("interval");
const multiPlayers = document.getElementById("2players");
const easyButton = document.getElementById("easy");
const hardButton = document.getElementById("hard");
const unbeatableButton = document.getElementById("unbeatable");
let player1;
let player2;
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
/*

new section starts here

*/
function players(name, sing) {
  return {
    name: name,
    sing: sing,
  };
}

/*

new section ends here

*/
let currentPlayer = {};

let cells = ["", "", "", "", "", "", "", "", ""];

let running = false;
let twoPlayers = false;
let easy = false;
let unbeatable = false;

choseOpponent();

function getName() {
  player1 = players(prompt("Please enter your name"), "X");
  if (twoPlayers) {
    player2 = players(prompt("Please enter your name"), "O");
  } else {
    player2 = { name: "PC", sing: "O" };
  }
  currentPlayer = { name: player1.name, sing: player1.sing };
}

function choseOpponent() {
  multiPlayers.addEventListener("click", function () {
    easy = false;
    twoPlayers = true;
  });
  easyButton.addEventListener("click", function () {
    easy = true;
    twoPlayers = false;
  });

  multiPlayers.addEventListener("click", getName);
  multiPlayers.addEventListener("click", startGame);
  multiPlayers.addEventListener("click", resetGame);
  multiPlayers.addEventListener("click", changeResult);

  easyButton.addEventListener("click", getName);
  easyButton.addEventListener("click", startGame);
  easyButton.addEventListener("click", resetGame);
  easyButton.addEventListener("click", changeResult);
}

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
    if (twoPlayers) {
      updateSquare(this, squareIndex);
      changePlayer();
      changeResult();
      endGame();
    }
    if (easy) {
      updateSquare(this, squareIndex);
      endGame();
      if (running) {
        changePlayer();
        pcMove();
      }
      endGame();
      if (running) {
        changePlayer();
      }
    }
  }
  console.log(cells);
}

function updateSquare(square, index) {
  cells[index] = currentPlayer.sing;
  square.innerHTML = currentPlayer.sing;
}

function changePlayer() {
  currentPlayer == player1
    ? (currentPlayer = player2)
    : (currentPlayer = player1);
}

function resetGame() {
  cells = ["", "", "", "", "", "", "", "", ""];
  squares.forEach((e) => (e.innerHTML = ""));
  currentPlayer = player1;
  running = true;
  changeResult();
  endGame();
}

function changeResult() {
  resultText.textContent = `Player ${currentPlayer.name}'s move`;
}

function endGame() {
  for (let i = 0; i < winConditions.length; i++) {
    if (
      cells[winConditions[i][0]] == "X" &&
      cells[winConditions[i][1]] == "X" &&
      cells[winConditions[i][2]] == "X"
    ) {
      running = false;
      resultText.textContent = `Player ${player1.name} won the game`;
      break;
    } else if (
      cells[winConditions[i][0]] == "O" &&
      cells[winConditions[i][1]] == "O" &&
      cells[winConditions[i][2]] == "O"
    ) {
      running = false;
      resultText.textContent = `Player ${player2.name} won the game`;
      break;
    } else {
      continue;
    }
  }
  if (cells.indexOf("") == -1 && running) {
    running = false;
    resultText.textContent = `Draw`;
  }
}

function pcMove() {
  let posibbleMoves = cells
    .map((e, index) => (e == "" ? (e = index) : (e = -1)))
    .filter((e) => e != -1);
  let randomNumber = Math.ceil(Math.random() * posibbleMoves.length) - 1;
  updateSquare(
    squares[posibbleMoves[randomNumber]],
    posibbleMoves[randomNumber]
  );
}
function changeTime() {}
