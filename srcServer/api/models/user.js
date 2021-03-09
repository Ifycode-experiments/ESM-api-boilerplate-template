import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true }
});

let UserModel = mongoose.model('User', UserSchema);

export { UserModel };
