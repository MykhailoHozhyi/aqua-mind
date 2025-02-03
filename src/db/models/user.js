import { model, Schema } from 'mongoose';

const updateUserSchema = new Schema(
  {
    gender: {
      type: String,
      enum: ['woman', 'man'],
      default: 'woman',
    },
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: { type: String },
    photo: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

updateUserSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

export const UserCollection = model('user', updateUserSchema);
