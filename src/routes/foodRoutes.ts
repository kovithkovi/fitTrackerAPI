import express from 'express';
import {
  addFood,
  getAllFoods,
  getFoodsByDate,
} from '../controller/foodController';

const router = express.Router();
router.post('/', addFood);
router.get('/', getAllFoods);
router.get('/:date', getFoodsByDate);

export default router;
