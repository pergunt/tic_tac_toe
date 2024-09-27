import { NextFunction, Request, Response } from "express";
import { TicTacToeService } from "services";

const ticTacToeService = new TicTacToeService();

export const move = async (
  req: Request<any, { index: number }>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { body } = req;

    const result = ticTacToeService.handleNextMove(body.index);

    res.json(result);
  } catch (e) {
    next(e);
  }
};

export const getBoard = async (
  req: Request<any, { index: number }>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = ticTacToeService.getBoard();

    res.json(result);
  } catch (e) {
    next(e);
  }
};

export const resetGame = async (
  req: Request<any, { index: number }>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = ticTacToeService.reset();

    res.json(result);
  } catch (e) {
    next(e);
  }
};
