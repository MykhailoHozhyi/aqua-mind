import { Router } from 'express';
import authRouter from './auth.js';
import userRouter from './user.js';
import waterRateRouter from './waterRate.js';
import waterRouter from './water.js';
import todayRouter from './today.js';
import monthRouter from './month.js';

const router = Router();

router.use('/auth', authRouter);
router.use('/user', userRouter);
router.use('/water-rate', waterRateRouter);
router.use('/water', waterRouter);
router.use('/today', todayRouter);
router.use('/month', monthRouter);

export default router;
