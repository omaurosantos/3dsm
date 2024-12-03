import mongoose, { Schema, Document } from "mongoose";

interface IExpense extends Document {
  description: string;
  amount: number;
  date: Date;
}

const ExpenseSchema = new Schema<IExpense>({
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

export default mongoose.model<IExpense>("Expense", ExpenseSchema);
