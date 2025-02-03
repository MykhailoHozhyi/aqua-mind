import { WaterRateCollection } from '../db/models/waterRate.js';

export const getWaterRate = async () => {
  const waterRate = await WaterRateCollection.find();
  return waterRate;
};

export const updateWaterRate = async (waterRateId, payload, options = {}) => {
  const waterRate = await WaterRateCollection.findByIdAndUpdate(
    { _id: waterRateId },
    payload,
    {
      new: true,
      includeResultMetadata: true,
      ...options,
    },
  );
  if (!waterRate || !waterRate.value) return null;
  return {
    waterRate: waterRate.value,
    isNew: Boolean(waterRate?.lastErrorObject?.upserted),
  };
};
