import { getWaterRate, updateWaterRate } from '../services/waterRate.js';

export const getWaterRateController = async (req, res) => {
  const userId = req.user._id;
  const waterRate = await getWaterRate(userId);

  res.status(200).json({
    status: 200,
    message: 'Water rate found successfully',
    data: { waterRate },
  });
};

export const updateWaterRateController = async (req, res, next) => {
  const userId = req.user._id;
  const waterRate = await updateWaterRate(userId, req.body);

  res.status(200).json({
    status: 200,
    message: 'Water rate updated successfully',
    data: { waterRate },
  });
};
