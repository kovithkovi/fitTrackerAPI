import mongoose from 'mongoose';

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  calories: { type: Number, required: true },
  category: { 
    type: String, 
    enum: ['breakfast', 'lunch', 'dinner', 'snack'], 
    required: true 
  },
  time: { type: String, required: true },
  date: { type: String, required: true },
});

const Food = mongoose.model('Food', foodSchema);

export default Food;
