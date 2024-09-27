import { API } from "configs";

export const ticTacToeApi = {
  baseURL: "/tic-tac-toe",

  getBoard() {
    return API.get(`${this.baseURL}/board`);
  },

  handleNextMove(index: number) {
    return API.post(`${this.baseURL}/next-move`, {
      index,
    });
  },

  resetGame() {
    return API.delete(`${this.baseURL}/reset`);
  },
};
