import { Router } from 'express';
import * as waterControllers from '../controllers/water.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { isValidId } from '../middlewares/isValidId.js';
import * as waterSchemas from '../validation/water.js';
import { authenticate } from '../middlewares/authenticate.js';

const router = Router();

router.use(authenticate);

router.get('/', ctrlWrapper(waterControllers.getWaterController));

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
