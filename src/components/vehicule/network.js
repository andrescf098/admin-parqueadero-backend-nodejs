import express from 'express';
import { VehiculeController } from './controller.js';
import { validatorHandler } from '../../middleware/validator.handler.js';
import {
  getVehiculeSchema,
  createVehiculeSchema,
  updateVehiculeSchema,
} from './schema.js';

const controller = new VehiculeController();
const router = express.Router();

router.get('/', controller.list);
router.get('/entry', controller.getByEntry);
router.get('/exit', controller.getByExit);
router.get(
  '/:idVehicule',
  validatorHandler(getVehiculeSchema, 'params'),
  controller.getById
);
router.post(
  '/',
  validatorHandler(createVehiculeSchema, 'body'),
  controller.create
);
router.post(
  '/exit/:idVehicule',
  validatorHandler(getVehiculeSchema, 'params'),
  controller.exit
);
router.patch(
  '/:idVehicule',
  [
    validatorHandler(getVehiculeSchema, 'params'),
    validatorHandler(updateVehiculeSchema, 'body'),
  ],
  controller.update
);
router.delete(
  '/:idVehicule',
  validatorHandler(getVehiculeSchema, 'params'),
  controller.delete
);

export default router;
