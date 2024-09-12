

let board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
let currentPlayer = 'X';

function handleCellClick(event) {
	const cellIndex = parseInt(event.target.dataset.cell);
	if (board[cellIndex] === ' ') {
		board[cellIndex] = currentPlayer;
		event.target.textContent = currentPlayer;
		if (checkWin()) {
			alert(`Player ${currentPlayer} wins!`);
			resetBoard();
		} else {
			currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
		}
	}
}

function checkWin() {
	const winConditions = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];
	for (const condition of winConditions) {
		if (board[condition[0]] !== ' ' &&
			board[condition[0]] === board[condition[1]] &&
			board[condition[0]] === board[condition[2]]) {
			return true;
		}
	}
	return false;
}

function resetBoard() {
	board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
	currentPlayer = 'X';
	document.querySelectorAll('.cell').forEach(cell => cell.textContent = '');
}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));