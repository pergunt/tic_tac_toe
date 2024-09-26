import { Router } from "express";
import { ticTacToeController } from "controllers";

const router = Router();

router.post("/tic-tac-toe/next-move", ticTacToeController.move);

export default router;
