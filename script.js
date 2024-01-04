let currentPlayer = 'X';
let cells = document.querySelectorAll('.cell');
let statusDisplay = document.getElementById('status');
let gameActive = true;

const winningPatterns = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

function checkGameStatus() {
  for (let i = 0; i < winningPatterns.length; i++) {
    const [a, b, c] = winningPatterns[i];
    if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
      gameActive = false;
      statusDisplay.textContent = `${cells[a].textContent} wins!`;
      break;
    }
  }

  if (gameActive) {
    let isDraw = true;
    for (let i = 0; i < cells.length; i++) {
      if (!cells[i].textContent) {
        isDraw = false;
        break;
      }
    }
    if (isDraw) {
      gameActive = false;
      statusDisplay.textContent = "It's a draw!";
    }
  }
}

function handleClick() {
  if (gameActive && !this.textContent) {
    this.textContent = currentPlayer;
    checkGameStatus();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function resetGame() {
  cells.forEach(cell => {
    cell.textContent = '';
  });
  currentPlayer = 'X';
  gameActive = true;
  statusDisplay.textContent = '';
}

cells.forEach(cell => {
  cell.addEventListener('click', handleClick);
});

document.getElementById('resetButton').addEventListener('click', resetGame);
