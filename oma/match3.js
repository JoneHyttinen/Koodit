const fruits = ["🍎", "🍌", "🍇", "🍉", "🍒"];
const size = 6;
let board = Array.from({ length: size * size }, () => fruits[Math.floor(Math.random() * fruits.length)]);
let selected = null;
let score = 0;

function renderBoard() {
    const gameBoard = document.getElementById("gameBoard");
    gameBoard.innerHTML = "";
    board.forEach((fruit, index) => {
        const tile = document.createElement("div");
        tile.classList.add("tile");
        tile.textContent = fruit;
        tile.dataset.index = index;
        tile.onclick = () => handleTileClick(index);
        if (selected === index) tile.classList.add("selected");
        gameBoard.appendChild(tile);
    });
}

function handleTileClick(index) {
    if (selected === null) {
        selected = index;
    } else {
        if (isAdjacent(selected, index)) {
            swapTiles(selected, index);
        }
        selected = null;
    }
    renderBoard();
    setTimeout(checkMatches, 300);
}

function isAdjacent(index1, index2) {
    return (
        (index1 % size !== 0 && index1 === index2 - 1) ||
        ((index1 + 1) % size !== 0 && index1 === index2 + 1) ||
        index1 === index2 - size ||
        index1 === index2 + size
    );
}

function swapTiles(index1, index2) {
    [board[index1], board[index2]] = [board[index2], board[index1]];
}

function checkMatches() {
    let matched = new Set();
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size - 2; j++) {
            let rowIdx = i * size + j;
            if (
                board[rowIdx] === board[rowIdx + 1] &&
                board[rowIdx] === board[rowIdx + 2]
            ) {
                matched.add(rowIdx);
                matched.add(rowIdx + 1);
                matched.add(rowIdx + 2);
            }
        }
    }
    for (let i = 0; i < size - 2; i++) {
        for (let j = 0; j < size; j++) {
            let colIdx = i * size + j;
            if (
                board[colIdx] === board[colIdx + size] &&
                board[colIdx] === board[colIdx + 2 * size]
            ) {
                matched.add(colIdx);
                matched.add(colIdx + size);
                matched.add(colIdx + 2 * size);
            }
        }
    }
    if (matched.size > 0) {
        matched.forEach(index => {
            board[index] = fruits[Math.floor(Math.random() * fruits.length)];
        });
        score += matched.size;
        document.getElementById("score").textContent = score;
        setTimeout(checkMatches, 300);
    }
    renderBoard();
}

renderBoard();
