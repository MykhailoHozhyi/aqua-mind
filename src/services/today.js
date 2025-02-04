import WaterCollection from '../db/models/water.js';
import { startOfDay, endOfDay } from 'date-fns';

export const getTodayWater = async (userId) => {
  const start = startOfDay(new Date());
  const end = endOfDay(new Date());

  return WaterCollection.find({
    userId,
    date: { $gte: start.toISOString(), $lte: end.toISOString() },
  });
};
