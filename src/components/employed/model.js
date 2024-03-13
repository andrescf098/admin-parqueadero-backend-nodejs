import { Model, DataTypes, Sequelize } from 'sequelize';

export const EMPLOYED_TABLE = 'employees';
export const EmployedSchema = {
  idEmployed: {
    field: 'employed_id',
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  lastname: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createAt: {
    field: 'create_at',
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
};

export class Employed extends Model {
  static associate(models) {
    this.hasOne(models.User, { as: 'user', foreignKey: 'idEmployed' });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: EMPLOYED_TABLE,
      modelName: 'Employed',
      timestamps: false,
    };
  }
}
