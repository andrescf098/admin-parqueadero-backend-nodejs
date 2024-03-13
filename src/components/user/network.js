import express from 'express';
import { UserController } from './controller.js';
import { validatorHandler } from '../../middleware/validator.handler.js';
import { getUserSchema, createUserSchema, updateUserSchema } from './schema.js';

const controller = new UserController();
const router = express.Router();

router.get('/', controller.list);
router.get(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  controller.getById
);
router.post('/', validatorHandler(createUserSchema, 'body'), controller.create);
router.put(
  '/:id',
  [
    validatorHandler(getUserSchema, 'params'),
    validatorHandler(updateUserSchema, 'body'),
  ],
  controller.update
);
router.delete(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  controller.delete
);

export default router;
