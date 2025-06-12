import { Request, Response } from 'express';
import Weight from '../models/weight';

export const addWeight = async (req: Request, res: Response) => {
  try {
    const { date, weight } = req.body;

    const newWorkout = new Weight({
      date,
      weight
    });

    const savedWorkout = await newWorkout.save();
    res.status(201).json(savedWorkout);
  } catch (error) {
    res.status(500).json({ message: 'Failed to add workout', error });
  }
};

// 📥 Get all workouts
export const getAllWeights = async (_req: Request, res: Response) => {
  try {
    const workouts = await Weight.find().sort({ date: -1 }); // newest first
    res.status(200).json(workouts);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch workouts', error });
  }
};
