import { ParkingService } from './service.js';

const service = new ParkingService();

export class ParkingController {
  async list(req, res, next) {
    try {
      return res.status(200).json(await service.find());
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      const { id } = req.params;
      return res.status(200).json(await service.findOne(id));
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      res.status(201).json(await service.create(req.body));
    } catch (error) {
      next(error);
    }
  }
  async update(req, res, next) {
    try {
      const { id } = req.params;
      res.status(200).json(await service.update(id, req.body));
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      const { id } = req.params;
      res.status(200).json(await service.delete(id));
    } catch (error) {
      next(error);
    }
  }
}
