import Joi from 'joi';

export const authUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(64).required(),
});
