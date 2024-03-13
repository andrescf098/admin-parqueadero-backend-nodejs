import express from 'express';
import { ParkingController } from './controller.js';
import { validatorHandler } from '../../middleware/validator.handler.js';
import { getParkSchema, createParkSchema, updateParkSchema } from './schema.js';

const controller = new ParkingController();
const router = express.Router();

router.get('/', controller.list);
router.get(
  '/:idPlace',
  validatorHandler(getParkSchema, 'params'),
  controller.getById
);
router.post('/', validatorHandler(createParkSchema, 'body'), controller.create);
router.patch(
  '/:id',
  [
    validatorHandler(getParkSchema, 'params'),
    validatorHandler(updateParkSchema, 'body'),
  ],
  controller.update
);
router.delete(
  '/:id',
  [validatorHandler(getParkSchema, 'params')],
  controller.delete
);

export default router;
