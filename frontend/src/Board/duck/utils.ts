import { WIN_COMBINATIONS } from "./constants";
import { BoardState, BoardTile, TileRotation } from "./types";

export const getWinnerInfo = ({
  board,
  winner,
}: {
  board: BoardState;
  winner: BoardTile;
}) => {
  if (!winner) {
    return null;
  }

  const { horizontal, vertical, rightDiagonal, leftDiagonal } =
    WIN_COMBINATIONS;

  let winnerInfo: {
    rotation: TileRotation;
    combination: number[];
  } | null = null;

  // board item
  horizontal.forEach((item) => {
    const [a, b, c] = item;

    if (board[a] === board[b] && board[a] === board[c]) {
      winnerInfo = {
        rotation: "horizontal",
        combination: [a, b, c],
      };
    }
  });

  vertical.forEach((item) => {
    const [a, b, c] = item;

    if (board[a] === board[b] && board[a] === board[c]) {
      winnerInfo = {
        rotation: "vertical",
        combination: [a, b, c],
      };
    }
  });

  rightDiagonal.forEach((item) => {
    const [a, b, c] = item;

    if (board[a] === board[b] && board[a] === board[c]) {
      winnerInfo = {
        rotation: "diagonal-right",
        combination: [a, b, c],
      };
    }
  });

  leftDiagonal.forEach((item) => {
    const [a, b, c] = item;

    if (board[a] === board[b] && board[a] === board[c]) {
      winnerInfo = {
        rotation: "diagonal-left",
        combination: [a, b, c],
      };
    }
  });

  return winnerInfo;
};
