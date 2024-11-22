import { Request, Response } from 'express';
import { ShoppingItem } from '../models/shoppingItem';

let shoppingList: ShoppingItem[] = [];
let currentId = 1;

export const addItem = (req: Request, res: Response) => {
  const { name, value } = req.body;
  const newItem: ShoppingItem = { id: currentId++, name, value: Number(value) };
  shoppingList.push(newItem);
  res.status(201).json(newItem);
};

export const getItems = (_: Request, res: Response) => {
  res.json(shoppingList);
};

export const updateItem = (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, value } = req.body;
  const item = shoppingList.find((item) => item.id === parseInt(id));

  if (item) {
    item.name = name;
    item.value = Number(value);
    res.json(item);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
};

export const deleteItem = (req: Request, res: Response) => {
  const { id } = req.params;
  const index = shoppingList.findIndex((item) => item.id === parseInt(id));

  if (index !== -1) {
    const removedItem = shoppingList.splice(index, 1);
    res.json(removedItem[0]);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
};
