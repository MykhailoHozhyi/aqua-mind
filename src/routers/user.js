import { Router } from 'express';
import {
  getUserByIdController,
  patchUserController,
  patchUserAvatarController,
} from '../controllers/user.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { userSchema } from '../validation/user.js';
import { upload } from '../middlewares/multer.js';
import waterRateRouter from './waterRate.js';

const router = Router();

router.get('/', ctrlWrapper(getUserByIdController));

router.patch('/', validateBody(userSchema), ctrlWrapper(patchUserController));

router.patch(
  '/photo',
  upload.single('photo'),
  ctrlWrapper(patchUserAvatarController),
);

router.use('/water-rate', waterRateRouter);

export default router;
