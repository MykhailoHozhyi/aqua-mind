import WaterCollection from '../db/models/water.js';

export const getWaterRecords = ({ userId }) => WaterCollection.find({ userId });

export const getWaterRecord = (filter) => WaterCollection.findOne(filter);

export const addWater = (payload) => WaterCollection.create(payload);

export const updateWater = async (contactId, userId, payload) => {
  const result = await WaterCollection.findOneAndUpdate(
    { _id: contactId, userId },
    payload,
    {
      new: true,
    },
  );
  return result;
};

export const deleteWater = async (contactId, userId) => {
  const result = await WaterCollection.findOneAndDelete({
    _id: contactId,
    userId,
  });
  return result;
};
