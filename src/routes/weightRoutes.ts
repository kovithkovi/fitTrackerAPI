import express from 'express';
import { addWeight, getAllWeights, getWorkoutsByDate } from '../controller/weightController';
const router = express.Router();

router.post('/', addWeight);
router.get('/', getAllWeights);
router.get('/:date', getWorkoutsByDate)

export default router;
