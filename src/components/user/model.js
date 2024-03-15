import { Model, DataTypes, Sequelize } from 'sequelize';
import { EMPLOYED_TABLE } from '../employed/model.js';

export const USER_TABLE = 'users';
export const UserSchema = {
  idUser: {
    field: 'user_id',
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
  },
  email: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'user',
  },
  createAt: {
    field: 'create_at',
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
  idEmployed: {
    field: 'employed_id',
    allowNull: false,
    unique: true,
    type: DataTypes.UUID,
    reference: {
      model: EMPLOYED_TABLE,
      key: 'employed_id',
    },
  },
};

export class User extends Model {
  static associate(models) {
    this.belongsTo(models.Employed, {
      as: 'employed',
      foreignKey: 'idEmployed',
      constraints: false,
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false,
    };
  }
}
