import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { authenticate } from './../middlewares/authenticate.js';
import { getMonthlyWaterController } from '../controllers/month.js';

const router = Router();

router.get(
  '/:year/:month',
  authenticate,
  ctrlWrapper(getMonthlyWaterController),
);

export default router;
