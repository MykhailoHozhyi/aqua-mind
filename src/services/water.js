import WaterCollection from '../db/models/water.js';

export const getWaterRecords = ({ userId }) => WaterCollection.find({ userId });

export const getWaterRecord = (filter) => WaterCollection.findOne(filter);

export const addWater = (payload) => WaterCollection.create(payload);

export const updateWater = async (waterId, userId, payload) => {
  const result = await WaterCollection.findOneAndUpdate(
    { _id: waterId, userId },
    payload,
    {
      new: true,
    },
  );
  return result;
};

export const deleteWater = async (waterId, userId) => {
  const result = await WaterCollection.findOneAndDelete({
    _id: waterId,
    userId,
  });
  return result;
};
