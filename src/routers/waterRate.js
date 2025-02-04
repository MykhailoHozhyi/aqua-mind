import { Router } from 'express';
import {
  getWaterRateController,
  updateWaterRateController,
} from '../controllers/waterRate.js';
import { ctrlWrapper } from './../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { waterRateSchema } from '../validation/waterRate.js';
import { authenticate } from './../middlewares/authenticate.js';

const router = Router();

router.get('/', authenticate, ctrlWrapper(getWaterRateController));
router.patch(
  '/',
  authenticate,
  validateBody(waterRateSchema),
  ctrlWrapper(updateWaterRateController),
);

export default router;
