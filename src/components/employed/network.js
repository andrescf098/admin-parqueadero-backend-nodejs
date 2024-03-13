import express from 'express';
import { EmployedController } from './controller.js';

const controller = new EmployedController();
const router = express.Router();

router.get('/', controller.list);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

export default router;
