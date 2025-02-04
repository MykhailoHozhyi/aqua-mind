import { Router } from 'express';
import {
  getWaterRateController,
  upsertWaterRateController,
} from '../controllers/waterRate.js';
import { ctrlWrapper } from './../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { waterRateSchema } from '../validation/waterRate.js';
import { authenticate } from './../middlewares/authenticate.js';

const router = Router();

router.get('/', authenticate, ctrlWrapper(getWaterRateController));
router.put(
  '/',
  authenticate,
  validateBody(waterRateSchema),
  ctrlWrapper(upsertWaterRateController),
);

export default router;
