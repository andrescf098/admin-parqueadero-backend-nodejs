import { VehiculeService } from './service.js';

const service = new VehiculeService();

export class VehiculeController {
  async list(req, res, next) {
    try {
      return res.status(200).json(await service.find());
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      const { idVehicule } = req.params;
      return res.status(200).json(await service.findOne(idVehicule));
    } catch (error) {
      next(error);
    }
  }
  async getByEntry(req, res, next) {
    try {
      return res.status(200).json(await service.findByEntry());
    } catch (error) {
      next(error);
    }
  }
  async getByExit(req, res, next) {
    try {
      return res.status(200).json(await service.findByExit());
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      const data = req.body;
      const idPlace = data.idPlace;
      const idVehicule = data.idVehicule;
      res.status(201).json(await service.create(data, idPlace, idVehicule));
    } catch (error) {
      next(error);
    }
  }
  async update(req, res, next) {
    try {
      const { idVehicule } = req.params;
      res.status(200).json(await service.update(idVehicule, req.body));
    } catch (error) {
      next(error);
    }
  }
  async exit(req, res, next) {
    try {
      const { idVehicule } = req.params;
      return res.status(200).json(await service.exit(idVehicule));
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      const { idVehicule } = req.params;
      res.status(200).json(await service.delete(idVehicule));
    } catch (error) {
      next(error);
    }
  }
}
