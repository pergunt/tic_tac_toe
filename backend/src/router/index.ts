import { Router } from "express";
import { ticTacToeController } from "controllers";

const router = Router();

router.get("/tic-tac-toe/board", ticTacToeController.getBoard);
router.post("/tic-tac-toe/next-move", ticTacToeController.move);
router.delete("/tic-tac-toe/reset", ticTacToeController.resetGame);

export default router;
