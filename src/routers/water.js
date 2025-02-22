import { Router } from 'express';
import * as waterControllers from '../controllers/water.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { isValidId } from '../middlewares/isValidId.js';
import * as waterSchemas from '../validation/water.js';
import todayRouter from './today.js';
import monthRouter from './month.js';

const router = Router();

router.get('/', ctrlWrapper(waterControllers.getWaterController));

router.use('/today', todayRouter);
router.use('/month', monthRouter);

router.get(
  '/:waterId',
  isValidId,
  ctrlWrapper(waterControllers.getWaterByIdController),
);

router.post(
  '/',
  validateBody(waterSchemas.addWaterSchema),
  ctrlWrapper(waterControllers.addWaterController),
);

router.patch(
  '/:waterId',
  isValidId,
  validateBody(waterSchemas.updateWaterSchema),
  ctrlWrapper(waterControllers.updateWaterController),
);

router.delete(
  '/:waterId',
  isValidId,
  ctrlWrapper(waterControllers.deleteWaterController),
);

export default router;
