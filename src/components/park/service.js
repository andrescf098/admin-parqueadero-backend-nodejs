import sequelize from '../../libs/sequelize.js';
import boom from '@hapi/boom';

const models = sequelize.models;

export class ParkingService {
  async create(data) {
    const newPlace = await models.Parking.create(data);
    return newPlace;
  }
  async find() {
    const place = await models.Parking.findAll();
    return place;
  }
  async findOne(id) {
    const place = await models.Parking.findByPk(id);
    if (!place) throw boom.notFound('Place not found');
    return place;
  }
  async update(id, changes) {
    const place = await this.findOne(id);
    const placeUpdated = await place.update(changes);
    return placeUpdated;
  }
  async delete(id) {
    const place = await this.findOne(id);
    await place.destroy();
    return { message: 'Place deleted' };
  }
}
