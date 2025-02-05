import createHttpError from 'http-errors';
import { UsersCollection } from '../db/models/user.js';
import { getTodayWater } from '../services/today.js';

export const getTodayWaterController = async (req, res, next) => {
  const userId = req.user._id;

  const user = await UsersCollection.findById(userId).select('waterRate');
  if (!user) {
    return next(createHttpError(404, 'User not found'));
  }

  const waterToday = await getTodayWater(userId);

  const totalWater = waterToday.reduce((sum, record) => sum + record.volume, 0);

  const percentage = ((totalWater / user.waterRate) * 100).toFixed(2);

  res.json({
    status: 200,
    message: 'Water consumption retrieved successfully',
    data: {
      percentage: `${percentage}%`,
      records: waterToday,
    },
  });
};
