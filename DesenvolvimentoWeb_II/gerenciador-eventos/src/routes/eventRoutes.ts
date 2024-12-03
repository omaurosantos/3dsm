import express from "express";
import { createEvent, deleteEvent, getEvents, updateEvent } from "../controllers/eventController";

const router = express.Router();

router.post("/events", createEvent); // Criar
router.get("/events", getEvents); // Ler
router.put("/events/:id", updateEvent); // Atualizar
router.delete("/events/:id", deleteEvent); // Excluir

export default router;
