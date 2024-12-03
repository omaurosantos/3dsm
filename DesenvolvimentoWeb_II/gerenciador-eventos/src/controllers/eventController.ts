import { Request, Response } from "express";
import Event from "../models/Event";

// Criar evento
export const createEvent = async (req: Request, res: Response) => {
  try {
    const { title, description, date, location, price } = req.body;
    const event = new Event({ title, description, date, location, price });
    await event.save();
    res.status(201).json({ message: "Evento criado com sucesso!", event });
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar evento", error });
  }
};

// Listar eventos ou pesquisar por título
export const getEvents = async (req: Request, res: Response) => {
  try {
    const { title } = req.query;
    const events = title
      ? await Event.find({ title: new RegExp(title as string, "i") })
      : await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: "Erro ao listar eventos", error });
  }
};

// Atualizar evento
export const updateEvent = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const updatedEvent = await Event.findByIdAndUpdate(id, req.body, { new: true });
      if (!updatedEvent) {
        res.status(404).json({ message: "Evento não encontrado" });
        return;
      }
      res.status(200).json({ message: "Evento atualizado com sucesso!", updatedEvent });
    } catch (error) {
      res.status(500).json({ message: "Erro ao atualizar evento", error });
    }
  };

// Excluir evento
export const deleteEvent = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const deletedEvent = await Event.findByIdAndDelete(id);
      if (!deletedEvent) {
        res.status(404).json({ message: "Evento não encontrado" });
        return;
      }
      res.status(200).json({ message: "Evento excluído com sucesso!" });
    } catch (error) {
      res.status(500).json({ message: "Erro ao excluir evento", error });
    }
  };