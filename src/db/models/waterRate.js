import { model, Schema } from 'mongoose';
import { WATER_RATE } from './../../constants/waterRate.js';

const waterRateSchema = new Schema(
  {
    waterRate: {
      type: Number,
      default: WATER_RATE,
      min: 1,
      max: 15000,
      required: true,
    },
  },
  { timestamps: true, versionKey: false },
);

export const WaterRateCollection = model('waterRates', waterRateSchema);
