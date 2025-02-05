import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { getTodayWaterController } from '../controllers/today.js';
import { authenticate } from './../middlewares/authenticate.js';

const router = Router();

router.get('/', authenticate, ctrlWrapper(getTodayWaterController));

export default router;
