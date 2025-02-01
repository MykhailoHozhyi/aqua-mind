import { Router } from 'express';
import { validateBody } from '../middlewares/validateBody.js';
import { authUserSchema } from '../validation/auth.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  loginUserController,
  registerUserController,
} from '../controllers/auth.js';

const router = Router();

router.post(
  '/register',
  validateBody(authUserSchema),
  ctrlWrapper(registerUserController),
);

router.post(
  '/login',
  validateBody(authUserSchema),
  ctrlWrapper(loginUserController),
);

export default router;
