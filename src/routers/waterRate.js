import { Router } from 'express';
import {
  getWaterRateController,
  patchWaterRateController,
  upsertWaterRateController,
} from '../controllers/waterRate.js';
import { ctrlWrapper } from './../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { waterRateSchema } from '../validation/waterRate.js';

const router = Router();

router.get('/', ctrlWrapper(getWaterRateController));

router.put(
  '/:waterRateId',
  validateBody(waterRateSchema),
  ctrlWrapper(upsertWaterRateController),
);
router.patch('/:waterRateId', ctrlWrapper(patchWaterRateController));

export default router;
