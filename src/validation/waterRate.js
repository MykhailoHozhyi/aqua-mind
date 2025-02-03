import Joi from 'joi';

export const waterRateSchema = Joi.object({
  waterRate: Joi.number().min(1).max(15000).required().messages({
    'number.base': 'Water rate must be a number',
    'number.min': 'Water rate must be at least 1',
    'number.max': 'Water rate must be at most 15000',
    'any.required': 'Water rate is required',
  }),
});
