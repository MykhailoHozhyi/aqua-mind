import { getEnvVar } from '../utils/getEnvVar.js';
import { getUserById, patchUser, updateAvatar } from '../services/user.js';
import createHttpError from 'http-errors';
import { saveFileToUploadDir } from '../utils/saveFileToUploadDir.js';
import { saveFileToCloudinary } from '../utils/saveFileToCloudinary.js';

export const getUserByIdController = async (req, res, next) => {
  const userId = req.user._id;
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
  const { userId } = req.user._id;
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

export const patchUserAvatarController = async (req, res, next) => {
  const { userId } = req.user._id;
  const photo = req.file;
  let photoUrl;
  if (photo) {
    if (getEnvVar('ENABLE_CLOUDINARY') === 'true') {
      photoUrl = await saveFileToCloudinary(photo);
    } else {
      photoUrl = await saveFileToUploadDir(photo);
    }
  }
  const result = await updateAvatar(
    userId,
    {
      photo: photoUrl,
    },
    { new: true },
  );

  if (!result) {
    next(createHttpError(404, 'User not found'));
    return;
  }
  res.json({
    status: 200,
    message: `Successfully added an avatar!`,
    data: result.user,
  });
};
