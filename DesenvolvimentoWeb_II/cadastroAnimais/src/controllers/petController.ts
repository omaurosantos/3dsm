import { Request, Response } from 'express';
import { Pet } from '../models/Pet';
import asyncHandler from '../middleware/asyncHandler';

export const createPet = asyncHandler(async (req: Request, res: Response): Promise<Response> => {
  const { name, species, age, tutor, tutorContact } = req.body;

  if (!name || !species || !age || !tutor) {
    return res.status(400).json({ message: 'Campos obrigatórios ausentes.' });
  }

  const pet = new Pet({ name, species, age, tutor, tutorContact });
  await pet.save();

  return res.status(201).json({ message: 'Pet cadastrado com sucesso!', pet });
});

export const listPets = asyncHandler(async (_req: Request, res: Response): Promise<Response> => {
  const pets = await Pet.find();
  return res.status(200).json(pets);
});

export const searchPets = asyncHandler(async (req: Request, res: Response): Promise<Response> => {
  const { query } = req.query;
  if (!query) {
    return res.status(400).json({ message: 'Parâmetro de busca ausente.' });
  }

  const pets = await Pet.find({
    $or: [
      { name: { $regex: query as string, $options: 'i' } },
      { species: { $regex: query as string, $options: 'i' } }
    ]
  });

  return res.status(200).json(pets);
});

export const updatePet = asyncHandler(async (req: Request, res: Response): Promise<Response> => {
  const updatedPet = await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updatedPet) {
    return res.status(404).json({ message: 'Pet não encontrado.' });
  }
  return res.status(200).json({ message: 'Pet atualizado com sucesso!', pet: updatedPet });
});

export const deletePet = asyncHandler(async (req: Request, res: Response): Promise<Response> => {
  const deletedPet = await Pet.findByIdAndDelete(req.params.id);
  if (!deletedPet) {
    return res.status(404).json({ message: 'Pet não encontrado.' });
  }
  return res.status(200).json({ message: 'Pet removido com sucesso!' });
});
