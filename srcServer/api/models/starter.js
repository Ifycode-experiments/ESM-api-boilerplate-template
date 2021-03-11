import mongoose from 'mongoose';

const StarterSchema = mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true }
});

let StarterModel = mongoose.model('Starter', StarterSchema);

export { StarterModel };
