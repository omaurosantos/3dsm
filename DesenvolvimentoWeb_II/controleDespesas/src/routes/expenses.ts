import { Router } from "express";
import {
  getExpenses,
  addExpense,
  updateExpense,
  deleteExpense,
  getTotalExpenses,
} from "../controllers/expenseController";

const router = Router();

router.get("/", getExpenses);
router.post("/", addExpense);
router.put("/:id", updateExpense);
router.delete("/:id", deleteExpense);
router.get("/total", getTotalExpenses);

export default router;
