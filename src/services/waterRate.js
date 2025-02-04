import { UsersCollection } from './../db/models/user.js';

export const getWaterRate = async (userId) => {
  const user = await UsersCollection.findById(userId).select('waterRate');
  return user?.waterRate || 1500;
};

export const updateWaterRate = async (userId, payload) => {
  const user = await UsersCollection.findByIdAndUpdate(
    userId,
    { waterRate: payload.waterRate },
    { new: true },
  );
  return user ? user.waterRate : null;
};
