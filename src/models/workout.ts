import mongoose from 'mongoose';

// Define types for sets and exercises
const setSchema = new mongoose.Schema({
  reps: { type: Number, required: true },
  weight: { type: Number, required: true },
}, { _id: false });

const exerciseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sets: [setSchema],
}, { _id: false });

// Main workout schema
const workoutSchema = new mongoose.Schema({
  date: { type: String, required: true }, // ISO format string
  exercises: [exerciseSchema],
  notes: { type: String },
  duration: { type: Number }, // in minutes
});

const Workout = mongoose.model('Workout', workoutSchema);

export default Workout;
