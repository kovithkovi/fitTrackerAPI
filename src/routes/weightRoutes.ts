import express from 'express';
import { addWeight, getAllWeights } from '../controller/weightController';
const router = express.Router();

router.post('/', addWeight);
router.get('/', getAllWeights);

export default router;
