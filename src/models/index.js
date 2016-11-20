/**
 * Init and export all schemas.
 */

import mongoose from 'mongoose';
import config from 'config';
import HttpError from 'http-errors';
import BearerTokenSchema from './BearerToken';
import UserSchema from './User';

const conn = mongoose.connect(config.MONGODB_URL).connection;

/**
 * Initialize model and add helper method `findByIdOrError`
 * @param {Object} schema the schema
 * @param {String} name the model name
 * @returns {Object} the mongoose model
 */
function createModel(schema, name) {
  schema.statics.findByIdOrError = async function findByIdOrError(id, projection, options) {
    const item = await this.findById(id, projection, options);
    if (!item) {
      throw new HttpError.NotFound(`${name} not found with id=${id}`);
    }
    return item;
  };
  const model = conn.model(name, schema);

  model.schema.options.minimize = false;
  model.schema.options.toJSON = {
    /**
     * Transform model to json object
     * @param {Object} doc the mongoose document which is being converted
     * @param {Object} ret the plain object representation which has been converted
     * @returns {Object} the transformed object
     */
    transform: (doc, ret) => {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
      return ret;
    },
  };
  return model;
}

export const User = createModel(UserSchema, 'User');
export const BearerToken = createModel(BearerTokenSchema, 'BearerToken');

export default {
  User,
  BearerToken,
};
