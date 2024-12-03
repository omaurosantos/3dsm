import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import expenseRoutes from "./routes/expenses";

const app = express();
const PORT = process.env.PORT || 4000; // Mude para 4000 ou outra porta

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rotas
app.use("/api/expenses", expenseRoutes);

// Conexão ao MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/expense-tracker")
  .then(() => console.log("Conectado ao MongoDB"))
  .catch(err => console.error(err));

  app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));