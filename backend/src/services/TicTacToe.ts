type Tile = "O" | "X" | null;

export class TicTacToeService {
  winner: Tile | null = null;
  board: Array<Tile> = Array(9).fill(null);

  reset() {
    this.board = Array(9).fill(null);
    this.winner = null;

    return {
      board: this.board,
      winner: this.winner,
    };
  }

  checkWinners(): Tile {
    const winningCombinations = [
      // Rows
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      // Columns
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      // Diagonals
      [0, 4, 8],
      [2, 4, 6],
    ];

    let winner: Tile = null;
    const { board } = this;

    winningCombinations.forEach((combination) => {
      const [a, b, c] = combination;

      if (board[a] === board[b] && board[a] === board[c]) {
        winner = board[a];
      }
    });

    return winner;
  }

  getRandomIndex() {
    return Math.floor(Math.random() * this.board.length);
  }

  tileExists(index: number) {
    return !!this.board[index];
  }

  allTilesFilled() {
    return this.board.every((tile) => tile !== null);
  }

  updateBoard(index: number) {
    // a client's move
    this.board.splice(index, 1, "X");

    let randomIndex = this.getRandomIndex();

    if (this.allTilesFilled()) {
      return;
    }

    while (this.board[randomIndex]) {
      randomIndex = this.getRandomIndex();
    }

    this.board.splice(randomIndex, 1, "O");
  }

  getBoard() {
    return {
      board: this.board,
      winner: this.checkWinners(),
    };
  }

  handleNextMove(index: number) {
    let winner = this.checkWinners();

    if (this.tileExists(index)) {
      return {
        board: this.board,
        winner,
      };
    }

    if (winner) {
      return {
        board: this.board,
        winner,
      };
    }

    this.updateBoard(index);

    winner = this.checkWinners();

    return {
      board: this.board,
      winner,
    };
  }
}
