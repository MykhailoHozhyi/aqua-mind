import { Router } from 'express';
import {
  getUserByIdController,
  patchUserController,
  patchUserAvatarController,
} from '../controllers/user.js';
import { isValidId } from '../middlewares/isValidId.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { updateUserSchema } from '../validation/user.js';
import { upload } from '../middlewares/multer.js';

const router = Router();

router.get('/:userId', isValidId, ctrlWrapper(getUserByIdController));

router.patch(
  '/:userId',
  isValidId,
  validateBody(updateUserSchema),
  ctrlWrapper(patchUserController),
);

router.patch(
  '/:userId/photo',
  isValidId,
  upload.single('photo'),
  ctrlWrapper(patchUserAvatarController),
);
export default router;
