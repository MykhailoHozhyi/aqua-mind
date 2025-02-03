import { model, Schema } from 'mongoose';

const userSchema = new Schema(
  {
    gender: {
      type: String,
      enum: ['woman', 'man'],
      default: 'woman',
      required: true,
    },
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    oldPassword: { type: String },
    password: { type: String },
    photo: { type: String },
    waterRate: {
      type: Number,
      default: 1500,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

export const UsersCollection = model('user', userSchema);
