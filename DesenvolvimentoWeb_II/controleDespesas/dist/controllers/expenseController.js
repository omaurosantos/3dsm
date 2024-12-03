"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTotalExpenses = exports.deleteExpense = exports.updateExpense = exports.addExpense = exports.getExpenses = void 0;
const Expense_1 = __importDefault(require("../models/Expense"));
const getExpenses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const expenses = yield Expense_1.default.find();
    res.json(expenses);
});
exports.getExpenses = getExpenses;
const addExpense = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { description, amount, date } = req.body;
    const newExpense = new Expense_1.default({ description, amount, date });
    yield newExpense.save();
    res.status(201).json(newExpense);
});
exports.addExpense = addExpense;
const updateExpense = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { description, amount, date } = req.body;
    const updatedExpense = yield Expense_1.default.findByIdAndUpdate(id, { description, amount, date }, { new: true });
    res.json(updatedExpense);
});
exports.updateExpense = updateExpense;
const deleteExpense = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield Expense_1.default.findByIdAndDelete(id);
    res.status(204).send();
});
exports.deleteExpense = deleteExpense;
const getTotalExpenses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const total = yield Expense_1.default.aggregate([
        { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);
    res.json(((_a = total[0]) === null || _a === void 0 ? void 0 : _a.total) || 0);
});
exports.getTotalExpenses = getTotalExpenses;
