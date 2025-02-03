import { isValidObjectId } from 'mongoose';
import createHttpError from 'http-errors';

export const isValidId = (req, res, next) => {
  const { userId } = req.params;
  if (!isValidObjectId(userId)) {
    throw createHttpError(
      400,
      `Invalid ID format: '${userId}' is not a valid ObjectId`,
    );
  }
  next();
};
