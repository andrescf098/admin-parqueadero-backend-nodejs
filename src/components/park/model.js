import { Model, DataTypes, Sequelize } from 'sequelize';

export const PARKING_TABLE = 'parking';
export const ParkingSchema = {
  idPlace: {
    field: 'id_place',
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
  },
  placeAllow: {
    field: 'place_allow',
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  createAt: {
    field: 'create_at',
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
};

export class Parking extends Model {
  static associate(models) {
    this.hasOne(models.Vehicule, { as: 'vehicule', foreignKey: 'idPlace' });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: PARKING_TABLE,
      modelName: 'Parking',
      timestamps: false,
    };
  }
}
