import mongoose from 'mongoose';

const StarterSchema = mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true }
});

let StarterModel = mongoose.model('Starter', StarterSchema);

export { StarterModel };
