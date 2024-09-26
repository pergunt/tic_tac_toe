import { API } from "configs";

export const ticTacToeApi = {
  baseURL: "/products",
  getOne(id: number | string) {
    return API.get(`${this.baseURL}/${id}`);
  },
};
