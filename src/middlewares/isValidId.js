import { isValidObjectId } from 'mongoose';
import createHttpError from 'http-errors';

export const isValidId = (req, res, next) => {
  const { waterId, id } = req.params;

  if (waterId && !isValidObjectId(waterId)) {
    throw createHttpError(
      400,
      `Invalid ID format: '${waterId}' is not a valid ObjectId`,
    );
  }

  if (id && !isValidObjectId(id)) {
    throw createHttpError(
      400,
      `Invalid ID format: '${id}' is not a valid ObjectId`,
    );
  }

  next();
};
