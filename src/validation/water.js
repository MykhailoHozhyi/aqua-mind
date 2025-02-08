import Joi from 'joi';

export const addWaterSchema = Joi.object({
  date: Joi.string()
    .pattern(
      /^(?:19|20)\d\d-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12][0-9]|3[01])T(?:[01][0-9]|2[0-3]):([0-5][0-9])$/,
      'date format',
    )
    .required(),
  volume: Joi.number().min(1).max(5000).required(),
});

export const updateWaterSchema = Joi.object({
  date: Joi.string().pattern(
    /^(?:19|20)\d\d-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12][0-9]|3[01])T(?:[01][0-9]|2[0-3]):([0-5][0-9])$/,
    'date format',
  ),
  volume: Joi.number().min(1).max(5000),
});
