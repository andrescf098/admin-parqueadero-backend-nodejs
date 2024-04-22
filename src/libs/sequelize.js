import { Sequelize } from 'sequelize';
import setupModel from '../db/setupModels.js';

const USER = encodeURIComponent(process.env.DB_USER);
const PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);
const URI = `mysql://${USER}:${PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
const sequelize = new Sequelize(URI, {
  dialect: 'mysql',
  logging: false,
});

setupModel(sequelize);
sequelize.sync();

const models = sequelize.models;

export default { sequelize, models };
