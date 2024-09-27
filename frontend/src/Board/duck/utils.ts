import { WIN_COMBINATIONS } from "./constants";
import { BoardState, BoardTile } from "./types";

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

  const { horizontal } = WIN_COMBINATIONS;
  let rotation;

  horizontal.forEach((item) => {
    const [a, b, c] = item;

    if (board[a] === board[b] && board[a] === board[c]) {
      rotation = "horizontal";
    }
  });

  return rotation;
};
