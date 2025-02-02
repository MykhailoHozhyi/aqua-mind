import { getEnvVar } from '../utils/getEnvVar.js';
import { getUserById, patchUser } from '../services/user.js';
import createHttpError from 'http-errors';

// import { saveFileToUploadDir } from '../utils/saveFileToUploadDir.js';
// import { saveFileToCloudinary } from '../utils/saveFileToCloudinary.js';

export const getUserByIdController = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const user = await getUserById(userId);
    if (!user) {
      throw createHttpError(404, 'User not found');
    }
    res.json({
      status: 200,
      message: `Successfully found user with id ${userId}!`,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

export const patchUserController = async (req, res, next) => {
  const { userId } = req.params;
  const result = await patchUser(userId, req.body);
  if (!result) {
    next(createHttpError(404, 'User not found'));
    return;
  }
  res.json({
    status: 200,
    message: `Successfully patched a user!`,
    data: result.user,
  });
};

export const patchUserAvatarController = async (req, res, next) => {};
