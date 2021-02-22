import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
  name: { type: String },
  address: { type: String },
  email: { type: String },
  phone: { type: Number }
});

let UserModel = mongoose.model('User', UserSchema);

export { UserModel };
