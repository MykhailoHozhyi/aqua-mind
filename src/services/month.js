import WaterCollection from '../db/models/water.js';
import { startOfMonth, endOfMonth } from 'date-fns';

export const getMonthlyWater = async (userId, year, month) => {
  const start = startOfMonth(new Date(year, month - 1));
  const end = endOfMonth(start);

  const records = await WaterCollection.aggregate([
    {
      $match: {
        userId,
        date: { $gte: start.toISOString(), $lte: end.toISOString() },
      },
    },
    {
      $group: {
        _id: {
          $dateToString: { format: '%Y-%m-%d', date: { $toDate: '$date' } },
        },
        totalVolume: { $sum: '$volume' },
        count: { $sum: 1 },
      },
    },
    { $sort: { _id: 1 } },
  ]);

  return records.map((record) => ({
    date: record._id,
    totalVolume: record.totalVolume,
    count: record.count,
  }));
};
