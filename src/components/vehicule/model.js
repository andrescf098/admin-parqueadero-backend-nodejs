import { Model, DataTypes, Sequelize } from 'sequelize';
import { PARKING_TABLE } from '../park/model.js';

export const VEHICULE_TABLE = 'vehicules';
export const VehiculeSchema = {
  idVehicule: {
    field: 'id_vehicule',
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
  },
  type: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  observations: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  idPlace: {
    field: 'id_place',
    allowNull: false,
    type: DataTypes.STRING,
    reference: {
      model: PARKING_TABLE,
      key: 'id_place',
    },
    defaultValue: '',
  },
  incoming: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  createAt: {
    field: 'time_entry',
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
  timeExit: {
    field: 'time_exit',
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
};

export class Vehicule extends Model {
  static associate(models) {
    this.belongsTo(models.Parking, { as: 'parking', foreignKey: 'idPlace' });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: VEHICULE_TABLE,
      modelName: 'Vehicule',
      timestamps: false,
    };
  }
}
