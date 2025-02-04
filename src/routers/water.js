import { Router } from 'express';
import * as waterControllers from '../controllers/water.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { isValidId } from '../middlewares/isValidId.js';
import * as waterSchemas from '../validation/water.js';

const router = Router();

waterRouter.get('/', ctrlWrapper(waterControllers.getWaterController));

waterRouter.get(
  '/:waterId',
  isValidId,
  ctrlWrapper(waterControllers.getWaterByIdController),
);

waterRouter.post(
  '/',
  validateBody(waterSchemas.addWaterSchema),
  ctrlWrapper(waterControllers.addWaterController),
);

waterRouter.patch(
  '/:waterId',
  isValidId,
  validateBody(waterSchemas.updateWaterSchema),
  ctrlWrapper(waterControllers.updateWaterController),
);

waterRouter.delete(
  '/:waterId',
  isValidId,
  ctrlWrapper(waterControllers.deleteWaterController),
);

export default router;
