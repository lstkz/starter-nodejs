import { Schema } from 'mongoose';

const ObjectId = Schema.Types.ObjectId;

export default new Schema({
  _id: {type: String, required: true},
  userId: {type: ObjectId, required: true},
});
