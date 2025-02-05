import createHttpError from 'http-errors';
import { UsersCollection } from '../db/models/user.js';
import { getMonthlyWater } from '../services/month.js';
import { format } from 'date-fns';

export const getMonthlyWaterController = async (req, res, next) => {
  const userId = req.user._id;
  const { year, month } = req.params;

  const user = await UsersCollection.findById(userId).select('waterRate');
  if (!user) {
    return next(createHttpError(404, 'User not found'));
  }

  const waterRecords = await getMonthlyWater(userId, year, month);

  const dailyReports = waterRecords.map(({ date, totalVolume, count }) => {
    const percentage = ((totalVolume / user.waterRate) * 100).toFixed(2);
    return {
      date: format(new Date(date), 'd, MMMM'),
      dailyWaterNorm: `${(user.waterRate / 1000).toFixed(1)} L`,
      percentage: `${percentage}%`,
      consumptionCount: count,
    };
  });

  res.json({
    status: 200,
    message: 'Monthly water consumption retrieved successfully',
    data: dailyReports,
  });
};
