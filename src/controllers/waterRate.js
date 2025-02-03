import createHttpError from 'http-errors';
import { getWaterRate, updateWaterRate } from '../services/waterRate.js';

export const getWaterRateController = async (req, res) => {
  const waterRate = await getWaterRate();
  res.json({
    status: 200,
    message: 'Water Rate found successfully',
    data: waterRate,
  });
};

export const upsertWaterRateController = async (req, res, next) => {
  const { waterRateId } = req.params;
  const result = await updateWaterRate(waterRateId, req.body, {
    upsert: true,
  });
  if (!result) {
    next(createHttpError(404, 'Water Rate not found'));
    return;
  }
  const status = result.isNew ? 201 : 200;

  res.status(status).json({
    status: 200,
    message: 'Water Rate updated successfully',
    data: result.waterRate,
  });
};

export const patchWaterRateController = async (req, res, next) => {
  const { waterRateId } = req.params;
  const result = await updateWaterRate(waterRateId, req.body);
  if (!result) {
    next(createHttpError(404, 'Water Rate not found'));
    return;
  }

  res.json({
    status: 200,
    message: 'Water Rate patched successfully',
    data: result.waterRate,
  });
};
