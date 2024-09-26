import { NextFunction, Request, Response } from "express";
import { TicTacToeService } from "services";

const ticTacToeService = new TicTacToeService();

export const move = async (
  req: Request<any, { tileID: number }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { body } = req;

    const result = ticTacToeService.handleNextMove(body.tileID);

    res.json(result);
  } catch (e) {
    next(e);
  }
};
