import express from 'express';
import {
  addWorkout,
  getAllWorkouts,
  getWorkoutsByDate,
} from '../controller/workoutController';

const router = express.Router();

router.post('/', addWorkout);
router.get('/', getAllWorkouts);
router.get('/:date', getWorkoutsByDate); 

export default router;
