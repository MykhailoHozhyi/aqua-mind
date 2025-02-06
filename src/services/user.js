import { UsersCollection } from '../db/models/user.js';
import bcrypt from 'bcrypt';

export const getUserById = async (userId) => {
  const user = await UsersCollection.findOne({ _id: userId });
  return user;
};

export const patchUser = async (userId, payload, options = {}) => {
  const { oldPassword, password, ...restPayload } = payload;
  const user = await UsersCollection.findById(userId);
  if (!user) {
    throw new Error('User not found');
  }
  // Логіка зміни пароля
  if (oldPassword && password) {
    const isMatch = await bcrypt.compare(oldPassword, user.password);

    if (!isMatch) {
      throw new Error('Old password is not correct');
    }
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      // Додаємо хешований пароль до оновлюваних даних
      restPayload.password = hashedPassword;
    } catch (error) {
      console.error('Error in hashing password:', error);
      throw new Error('New password was not saved');
    }
  }
  // Оновлення користувача
  const updatedUser = await UsersCollection.findByIdAndUpdate(
    userId,
    { $set: restPayload },
    {
      new: true,
      includeResultMetadata: true,
      ...options,
    },
  );
  if (!updatedUser || !updatedUser.value) return null;
  console.log('Password in Mongo after updating:', updatedUser.value.password);

  return {
    user: updatedUser.value,
    isNew: Boolean(updatedUser?.lastErrorObject?.upserted),
  };
};

export const updateAvatar = async (userId, payload, options = {}) => {
  const rawResult = await UsersCollection.findByIdAndUpdate(userId, payload, {
    new: true,
    includeResultMetadata: true,
    ...options,
  });
  if (!rawResult || !rawResult.value) return null;
  return {
    user: rawResult.value,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted),
  };
};
