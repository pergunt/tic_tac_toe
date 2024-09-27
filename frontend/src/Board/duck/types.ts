export type TileRotation =
  | "vertical"
  | "horizontal"
  | "diagonal-left"
  | "diagonal-right";

export type BoardState = Array<"X" | "O" | null>;

export type BoardTile = BoardState[number];
