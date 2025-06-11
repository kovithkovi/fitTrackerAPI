import { Request, RequestHandler, Response } from 'express';
import Food from '../models/food';

export const addFood = async (req: Request, res: Response) => {
  try {
    const { name, calories, category, time, date } = req.body;
    const newFood = new Food({ name, calories, category, time, date });
    const savedFood = await newFood.save();
    res.status(201).json(savedFood);
  } catch (error) {
    res.status(500).json({ message: 'Failed to add food', error });
  }
};

export const getAllFoods = async (_req: Request, res: Response) => {
  try {
    const foods = await Food.find().sort({ date: -1 });
    res.status(200).json(foods);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch foods', error });
  }
};


export const getFoodsByDate = async (req: Request, res: Response): Promise<void> => {
  try {
    const { date } = req.params;

    const foods = await Food.find({ date });

    if (foods.length === 0) {
      res.status(404).json({ message: `No food records found for ${date}` });
      return; // ✅ End execution early
    }

    res.status(200).json(foods);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch food by date', error });
  }
};
