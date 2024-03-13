import express from 'express';
import { EmployedController } from './controller.js';
import { validatorHandler } from '../../middleware/validator.handler.js';
import {
  getParkSchema,
  createParkSchema,
  updateParkSchema,
} from '../park/schema.js';

const controller = new EmployedController();
const router = express.Router();

router.get('/', controller.list);
router.get(
  '/:id',
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
  validatorHandler(getParkSchema, 'params'),
  controller.delete
);

export default router;
