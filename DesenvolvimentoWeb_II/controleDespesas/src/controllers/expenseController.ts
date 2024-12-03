import { Request, Response } from "express";
import Expense from "../models/Expense";

export const getExpenses = async (req: Request, res: Response) => {
  const expenses = await Expense.find();
  res.json(expenses);
};

export const addExpense = async (req: Request, res: Response) => {
  const { description, amount, date } = req.body;
  const newExpense = new Expense({ description, amount, date });
  await newExpense.save();
  res.status(201).json(newExpense);
};

export const updateExpense = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { description, amount, date } = req.body;
  const updatedExpense = await Expense.findByIdAndUpdate(
    id,
    { description, amount, date },
    { new: true }
  );
  res.json(updatedExpense);
};

export const deleteExpense = async (req: Request, res: Response) => {
  const { id } = req.params;
  await Expense.findByIdAndDelete(id);
  res.status(204).send();
};

export const getTotalExpenses = async (req: Request, res: Response) => {
  const total = await Expense.aggregate([
    { $group: { _id: null, total: { $sum: "$amount" } } },
  ]);
  res.json(total[0]?.total || 0);
};
