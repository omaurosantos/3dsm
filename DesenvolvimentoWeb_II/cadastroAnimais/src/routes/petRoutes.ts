import { Router, Request, Response } from 'express';
import { Pet } from '../models/Pet';
import asyncHandler from '../middleware/asyncHandler';
import { validateCreatePetData, validateUpdatePetData } from '../middleware/validateData';

const router = Router();

// Adicionar um novo pet (usando validação)
router.post('/pets', validateCreatePetData, asyncHandler(async (req: Request, res: Response): Promise<Response> => {
  const { name, species, age, tutor, tutorContact } = req.body;
  const pet = new Pet({ name, species, age, tutor, tutorContact });
  await pet.save();
  return res.status(201).json({ message: 'Pet cadastrado com sucesso!', pet });
}));

// Listar todos os pets
router.get('/pets', asyncHandler(async (_req: Request, res: Response): Promise<Response> => {
  const pets = await Pet.find();
  return res.status(200).json(pets);
}));

// Buscar pets por nome ou espécie
router.get('/pets/search', asyncHandler(async (req: Request, res: Response): Promise<Response> => {
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
}));

// Atualizar informações de um pet
router.put('/pets/:id', validateUpdatePetData, asyncHandler(async (req: Request, res: Response): Promise<Response> => {
  const updatedPet = await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updatedPet) {
    return res.status(404).json({ message: 'Pet não encontrado.' });
  }
  return res.status(200).json({ message: 'Pet atualizado com sucesso!', pet: updatedPet });
}));

// Remover um pet
router.delete('/pets/:id', asyncHandler(async (req: Request, res: Response): Promise<Response> => {
  const deletedPet = await Pet.findByIdAndDelete(req.params.id);
  if (!deletedPet) {
    return res.status(404).json({ message: 'Pet não encontrado.' });
  }
  return res.status(200).json({ message: 'Pet removido com sucesso!' });
}));

export default router;
