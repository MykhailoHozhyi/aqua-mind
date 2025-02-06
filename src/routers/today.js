import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { getTodayWaterController } from '../controllers/today.js';

const router = Router();

router.get('/', ctrlWrapper(getTodayWaterController));

export default router;
