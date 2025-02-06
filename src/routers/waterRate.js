import { Router } from 'express';
import {
  getWaterRateController,
  updateWaterRateController,
} from '../controllers/waterRate.js';
import { ctrlWrapper } from './../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { waterRateSchema } from '../validation/waterRate.js';

const router = Router();

router.get('/', ctrlWrapper(getWaterRateController));
router.patch(
  '/',
  validateBody(waterRateSchema),
  ctrlWrapper(updateWaterRateController),
);

export default router;
