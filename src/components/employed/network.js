import express from 'express';
import { EmployedController } from './controller.js';
import { validatorHandler } from '../../middleware/validator.handler.js';
import {
  getEmployedSchema,
  createEmployedSchema,
  updateEmployedSchema,
} from './schema.js';

const controller = new EmployedController();
const router = express.Router();

router.get('/', controller.list);
router.get(
  '/:id',
  validatorHandler(getEmployedSchema, 'params'),
  controller.getById
);
router.post(
  '/',
  validatorHandler(createEmployedSchema, 'body'),
  controller.create
);
router.patch(
  '/:id',
  [
    validatorHandler(getEmployedSchema, 'params'),
    validatorHandler(updateEmployedSchema, 'body'),
  ],
  controller.update
);
router.delete(
  '/:id',
  validatorHandler(getEmployedSchema, 'params'),
  controller.delete
);

export default router;
