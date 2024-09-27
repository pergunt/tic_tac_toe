import { FC, useEffect, useState } from "react";
import { ticTacToeApi } from "apis";
import { SquareButton, ResetButton } from "./components";
import styles from "./Board.module.css";
import { Types } from "./duck";

export const Board: FC = () => {
  const [winner, setWinner] = useState<Types.BoardTile>(null);
  const [board, setBoard] = useState<Types.BoardState>([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  useEffect(() => {
    ticTacToeApi.getBoard().then((response) => {
      setBoard(response.data);
    });
  }, []);

  const onSquareClick = (index: number) => async () => {
    try {
      const { data } = await ticTacToeApi.handleNextMove(index);

      setBoard(data.board);

      setWinner(data.winner);
    } catch (e: any) {
      alert(e.response?.data?.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {board.map((tile, index) => {
          return (
            <SquareButton
              // eslint-disable-next-line
              key={index}
              tile={tile}
              index={index}
              onClick={onSquareClick(index)}
              winner={!!winner}
              rotation="vertical"
            />
          );
        })}
      </div>
      <ResetButton onReset={(emptyBoard) => setBoard(emptyBoard)} />
    </div>
  );
};
