import sequelize from '../../libs/sequelize.js';
import boom from '@hapi/boom';
import { ParkingService } from '../park/service.js';
import { Sequelize } from 'sequelize';

const models = sequelize.models;
const serviceParking = new ParkingService();

export class VehiculeService {
  async findOne(id) {
    const vehicule = await models.Vehicule.findByPk(id);
    if (!vehicule) throw boom.notFound('Vehicule not found');
    return vehicule;
  }
  async create(data, idPlace, idVehicule) {
    const place = await serviceParking.findOne(idPlace);
    const vehicule = await models.Vehicule.findByPk(idVehicule);
    if (!place) throw boom.notFound('Place not found');
    if (!vehicule) {
      const newVehicule = await models.Vehicule.create(data);
      await place.update({ placeAllow: false });
      return { message: 'Vehicule registered', newVehicule };
    } else {
      const newVehicule = await vehicule.update({
        idPlace: idPlace,
        createAt: Date.now(),
        timeExit: null,
      });
      await place.update({ placeAllow: false });
      return { message: 'Vehicule registered', newVehicule };
    }
  }
  async find() {
    const vehicules = await models.Vehicule.findAll();
    return vehicules;
  }
  async findByEntry() {
    const vehicules = await models.Vehicule.findAll({
      where: { incoming: true },
    });
    return vehicules;
  }
  async findByExit() {
    const vehicules = await models.Vehicule.findAll({
      where: { incoming: false },
    });
    return vehicules;
  }
  async update(id, changes) {
    const vehicule = await this.findOne(id);
    const vehiculeUpdated = await vehicule.update(changes);
    return {message: "Edit successful",vehiculeUpdated};
  }
  async exit(id) {
    const vehicule = await this.findOne(id);
    const idPlace = vehicule.idPlace;
    const place = await serviceParking.findOne(idPlace);
    await vehicule.update({ incoming: false, timeExit: Date.now() });
    await place.update({ placeAllow: true });
    return { message: 'Vehicule exit' };
  }
  async delete(id) {
    const vehicule = await this.findOne(id);
    const idPlace = vehicule.idPlace;
    const place = await serviceParking.findOne(idPlace);
    await vehicule.destroy();
    await place.update({ placeAllow: true });
    return { message: 'Vehicule deleted' };
  }
}
