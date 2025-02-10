import { Router } from 'express';
import authRouter from './auth.js';
import userRouter from './user.js';
import waterRouter from './water.js';
import { authenticate } from '../middlewares/authenticate.js';

const router = Router();

router.use('/auth', authRouter);
router.use(authenticate);
router.use('/user', userRouter);
router.use('/water', waterRouter);

export default router;
