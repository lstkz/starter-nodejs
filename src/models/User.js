import { Schema } from 'mongoose';

export default new Schema({
  email: { type: String, required: true },
  email_lowered: { type: String, required: true, index: true },
  password: { type: String, required: true },
  salt: { type: String, required: true },
  googleId: { type: String },
});
