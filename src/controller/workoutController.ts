import { Request, Response } from 'express';
import Workout from '../models/workout';

// ➕ Add a new workout
export const addWorkout = async (req: Request, res: Response) => {
  try {
    const { date, exercises, notes, duration } = req.body;

    const newWorkout = new Workout({
      date,
      exercises,
      notes,
      duration,
    });

    const savedWorkout = await newWorkout.save();
    res.status(201).json(savedWorkout);
  } catch (error) {
    res.status(500).json({ message: 'Failed to add workout', error });
  }
};

// 📥 Get all workouts
export const getAllWorkouts = async (_req: Request, res: Response) => {
  try {
    const workouts = await Workout.find().sort({ date: -1 }); // newest first
    res.status(200).json(workouts);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch workouts', error });
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

    const workouts = await Workout.find({ date: formattedDate });

    if (workouts.length === 0) {
      res.status(404).json({ message: `No workouts found on ${formattedDate}` });
      return; // ✅ Stop further execution
    }

    res.status(200).json(workouts);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch workouts by date', error });
  }
};