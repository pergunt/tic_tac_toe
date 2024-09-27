import { FC } from "react";
import classNames from "classnames";
import styles from "./SquareButton.module.css";
import { Types } from "../../duck";

interface SquareButtonProps {
  index: number;
  onClick: () => void;
  tile: Types.BoardTile;
  winner: boolean;
  rotation: Types.TileRotation;
}

export const SquareButton: FC<SquareButtonProps> = ({
  index,
  onClick,
  tile,
  winner,
  rotation,
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
      {winner && (
        <span
          className={classNames(styles.crossLine, {
            [styles.horizontal]: rotation === "horizontal",
          })}
        />
      )}
    </button>
  );
};
