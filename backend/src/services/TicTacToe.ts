type Tile = "O" | "X" | null;

export class TicTacToeService {
  board: Array<Tile> = Array(9).fill(null);

  reset() {
    this.board = Array(9).fill(null);

    return this.board;
  }

  checkWinner(): Tile {
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
    return Math.floor(Math.random() * this.board.length - 1);
  }

  validate(index: number) {
    return !!this.board[index];
  }

  updateBoard(index: number) {
    // a client's move
    this.board.splice(index, 1, "X");

    let randomIndex = this.getRandomIndex();

    while (this.board[randomIndex]) {
      randomIndex = this.getRandomIndex();
    }

    this.board.splice(randomIndex, 1, "O");
  }

  getBoard() {
    return this.board;
  }

  handleNextMove(index: number) {
    let winner = this.checkWinner();

    if (this.validate(index)) {
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

    winner = this.checkWinner();

    return {
      board: this.board,
      winner,
    };
  }
}
