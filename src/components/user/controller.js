import { UserService } from './service.js';

const userService = new UserService();

export class UserController {
  async list(req, res, next) {
    try {
      return res.status(200).json(await userService.find());
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      const { id } = req.params;
      return res.status(200).json(await userService.findOne(id));
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      const data = req.body;
      const idEmployed = data.idEmployed;
      const user = await userService.create(data, idEmployed);
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }
  async update(req, res, next) {
    try {
      const data = req.body;
      const { id } = req.params;
      res.status(200).json(await userService.update(id, data));
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      const { id } = req.params;
      res.status(200).json(await userService.delete(id));
    } catch (error) {
      next(error);
    }
  }
}
