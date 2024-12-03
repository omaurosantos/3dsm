"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const expenses_1 = __importDefault(require("./routes/expenses"));
const app = (0, express_1.default)();
const PORT = 3000;
// Middleware
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
// Rotas
app.use("/api/expenses", expenses_1.default);
// Conexão ao MongoDB
mongoose_1.default
    .connect("mongodb://127.0.0.1:27017/expense-tracker")
    .then(() => console.log("Conectado ao MongoDB"))
    .catch(err => console.error(err));
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
