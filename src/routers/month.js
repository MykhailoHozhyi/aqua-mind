import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { getMonthlyWaterController } from '../controllers/month.js';

const router = Router();

router.get('/:year/:month', ctrlWrapper(getMonthlyWaterController));

export default router;
