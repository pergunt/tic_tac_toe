import { FC, useEffect, useState } from "react";
import { ticTacToeApi } from "apis";
import { SquareButton, ResetButton } from "./components";
import styles from "./Board.module.css";
import { Types, utils } from "./duck";

export const Board: FC = () => {
  const [state, setState] = useState<{
    board: Types.BoardState;
    winner: Types.BoardTile;
  }>(() => ({
    board: Array(9).fill(null),
    winner: null,
  }));

  useEffect(() => {
    ticTacToeApi.getBoard().then((response) => {
      setState(response.data);
    });
  }, []);

  const onSquareClick = (index: number) => async () => {
    if (state.winner || state.board.every((tile) => tile !== null)) {
      return;
    }

    try {
      const { data } = await ticTacToeApi.handleNextMove(index);

      setState(data);
    } catch (e: any) {
      alert(e.response?.data?.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {state.board.map((tile, index) => {
          return (
            <SquareButton
              // eslint-disable-next-line
              key={index}
              tile={tile}
              index={index}
              onClick={onSquareClick(index)}
              winnerInfo={utils.getWinnerInfo({
                board: state.board,
                winner: state.winner,
              })}
            />
          );
        })}
      </div>
      <ResetButton onReset={(result) => setState(result)} />
    </div>
  );
};
