import Joi from 'joi';

export const userSchema = Joi.object({
  gender: Joi.string().valid('woman', 'man').default('woman'),
  name: Joi.string().max(32),
  email: Joi.string().email().messages({
    'string.pattern.base': 'Invalid email format',
  }),
  oldPassword: Joi.string().min(8).max(64).allow('').optional(),
  password: Joi.string().min(8).max(64).allow('').optional(),
});
