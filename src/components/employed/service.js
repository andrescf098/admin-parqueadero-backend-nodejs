import sequelize from '../../libs/sequelize.js';
import boom from '@hapi/boom';

const models = sequelize.models;

export class EmployedService {
  async create(data) {
    const newEmployed = await models.Employed.create(data);
    return newEmployed;
  }
  async find() {
    const Employed = await models.Employed.findAll();
    return Employed;
  }
  async findOne(id) {
    const employed = await models.Employed.findByPk(id);
    if (!employed) throw boom.notFound('Employed not found');
    return employed;
  }
  async update(id, changes) {
    const employed = await this.findOne(id);
    const employedUpdated = await employed.update(changes);
    return employedUpdated;
  }
  async delete(id) {
    const employed = await this.findOne(id);
    await employed.destroy();
    return { message: 'Employed deleted' };
  }
}
