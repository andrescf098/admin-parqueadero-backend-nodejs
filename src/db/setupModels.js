import { Employed, EmployedSchema } from '../components/employed/model.js';
import { Parking, ParkingSchema } from '../components/park/model.js';
import { User, UserSchema } from '../components/user/model.js';
import { Vehicule, VehiculeSchema } from '../components/vehicule/model.js';

const setupModels = (sequelize) => {
  Employed.init(EmployedSchema, Employed.config(sequelize));
  Parking.init(ParkingSchema, Parking.config(sequelize));
  User.init(UserSchema, User.config(sequelize));
  Vehicule.init(VehiculeSchema, Vehicule.config(sequelize));

  Parking.associate(sequelize.models);
  Vehicule.associate(sequelize.models);
  User.associate(sequelize.models);
  Employed.associate(sequelize.models);
};
export default setupModels;
