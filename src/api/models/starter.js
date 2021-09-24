import mongoose from 'mongoose';

let collectionName = 'quick-tour';

const StarterSchema = mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true }
});

let StarterModel = mongoose.model(collectionName, StarterSchema, collectionName); //declare 'Starter' a second time to prevent mongoose from pluralizing or adding 's' to this collection name

export { StarterModel };
