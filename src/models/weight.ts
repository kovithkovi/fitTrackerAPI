import mongoose from 'mongoose';

const weightSchema = new mongoose.Schema({
  date: { type: String, required: true },
  weight: {type: String, required: true}
});

const Weight = mongoose.model('Weight', weightSchema);

export default Weight;
