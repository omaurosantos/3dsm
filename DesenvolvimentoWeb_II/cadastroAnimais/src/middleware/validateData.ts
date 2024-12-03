import { Request, Response, NextFunction } from 'express';

// Middleware para validar dados de criação
export const validateCreatePetData = (req: Request, res: Response, next: NextFunction): void => {
  const { name, species, age, tutor } = req.body;

  if (!name || !species || !age || !tutor) {
    res.status(400).json({ message: 'Campos obrigatórios ausentes.' });
    return;
  }
  next();
};

// Middleware para validar dados de atualização
export const validateUpdatePetData = (req: Request, res: Response, next: NextFunction): void => {
  const { name, species, age, tutor } = req.body;

  // Pelo menos um dos campos deve estar presente
  if (!name && !species && !age && !tutor) {
    res.status(400).json({ message: 'Pelo menos um campo deve ser atualizado.' });
    return;
  }
  next();
};
