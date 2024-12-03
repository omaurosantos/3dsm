import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import eventRoutes from "./routes/eventRoutes";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Conectar ao MongoDB
mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/evento")
  .then(() => console.log("Conectado ao MongoDB"))
  .catch((err) => console.error("Erro ao conectar ao MongoDB:", err));

// Rotas
app.use("/api", eventRoutes);

export default app;
