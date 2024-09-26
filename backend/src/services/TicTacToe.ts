import { ApiError } from "exceptions";

interface Tile {
  id: number;
  type: "cross" | "circle";
}

export class TicTacToeService {
  tiles: Tile[];

  constructor() {
    this.tiles = [];
  }

  checkWinners() {
    if (this.tiles.length !== 9) {
      return null;
    }

    const map = this.tiles.reduce((prev, curr) => {
      prev.set(curr.type, (prev.get(curr.type) || 0) + 1);

      return prev;
    }, new Map());

    let winner = "server";

    if (map.get("cross") < map.get("circle")) {
      winner = "client";
    }

    return winner;
  }

  validateTiles(tileID: number) {
    if (this.tiles.some((tile) => tile.id === tileID)) {
      throw ApiError.BadRequest("This tile has been already set");
    }
  }

  setTiles(tileID: number) {
    // a client's move
    this.tiles.push({
      id: tileID,
      type: "cross",
    });

    // a random move
    this.tiles.push({
      id: Math.ceil(Math.random() * this.tiles.length),
      type: "circle",
    });
  }

  handleNextMove(tileID: number) {
    this.validateTiles(tileID);

    this.setTiles(tileID);

    return {
      tiles: this.tiles,
      winner: this.checkWinners(),
    };
  }
}
