import { Router } from 'express';
import { getItems, addItem, updateItem, deleteItem } from '../controllers/shoppingController';

const router = Router();

router.get('/', getItems);        // Pega todos os itens
router.post('/', addItem);        // Adiciona um novo item
router.put('/:id', updateItem);   // Atualiza um item pelo ID
router.delete('/:id', deleteItem); // Deleta um item pelo ID

export default router;
