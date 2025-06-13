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
    res.status(500).json({ message: 'Failed to add weight', error });
  }
};

// 📥 Get all workouts
export const getAllWeights = async (_req: Request, res: Response) => {
  try {
    const workouts = await Weight.find().sort({date: -1}).limit(10);
    res.status(200).json(workouts);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch weight', error });
  }
};



export const getWorkoutsByDate = async (req: Request, res: Response): Promise<void> => {
  try {
    const { date } = req.params;

    if (isNaN(Date.parse(date))) {
      res.status(400).json({ message: 'Invalid date format. Use YYYY-MM-DD.' });
      return; // ✅ Stop further execution
    }

    const formattedDate = new Date(date).toISOString().split('T')[0];

    const workouts = await Weight.find({ date: formattedDate });

    if (workouts.length === 0) {
      res.status(404).json({ message: `No weights found on ${formattedDate}` });
      return;
    }

    res.status(200).json(workouts);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch weight by date', error });
  }
};