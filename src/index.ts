import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db'; // ✅ fixed here
import workoutRoutes from './routes/workoutRoutes';
import foodRoutes from './routes/foodRoutes';
dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://localhost:8081',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json()); 

app.use('/api/workouts', workoutRoutes);
app.use('/api/food', foodRoutes)

app.get('/', (_req, res) => {
  res.send('Fit Tracker Backend is Running 🏋️‍♂️');
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
