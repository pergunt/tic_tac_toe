import { FC } from "react";
import { ticTacToeApi } from "apis";
import { Types } from "../../duck";
import styles from "./ResetButton.module.css";

interface ResetButtonProps {
  onReset: (emptyBoard: Types.BoardState) => void;
}

export const ResetButton: FC<ResetButtonProps> = ({ onReset }) => {
  return (
    <button
      type="button"
      className={styles.resetButton}
      onClick={async () => {
        try {
          const { data } = await ticTacToeApi.resetGame();

          onReset(data);
        } catch (e: any) {
          alert(e.response?.data?.message);
        }
      }}
    >
      reset
    </button>
  );
};
