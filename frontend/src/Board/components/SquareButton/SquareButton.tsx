import { FC } from "react";
import classNames from "classnames";
import styles from "./SquareButton.module.css";
import { Types } from "../../duck";

interface SquareButtonProps {
  index: number;
  onClick: () => void;
  tile: Types.BoardTile;
  winnerInfo: Types.WinnerInfo | null;
}

export const SquareButton: FC<SquareButtonProps> = ({
  index,
  onClick,
  tile,
  winnerInfo,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(styles.squareButton, {
        [styles.borderBottom]: index < 6,
        [styles.borderLeft]: index !== 0 && index !== 3 && index !== 6,
      })}
    >
      {tile}
      {winnerInfo && winnerInfo.combination.includes(index) && (
        <span
          className={classNames(styles.crossLine, {
            [styles.horizontal]: winnerInfo.rotation === "horizontal",
            [styles.vertical]: winnerInfo.rotation === "vertical",
            [styles.leftDiagonal]: winnerInfo.rotation === "diagonal-left",
            [styles.rightDiagonal]: winnerInfo.rotation === "diagonal-right",
          })}
        />
      )}
    </button>
  );
};
