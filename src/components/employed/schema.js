import Joi from 'joi';

const id = Joi.number().integer();
const name = Joi.string().min(3).max(50);
const lastname = Joi.string().min(3).max(50);

const getEmployedSchema = {
  id: id.required(),
};

const createEmployedSchema = {
  name: name.required(),
  lastname: lastname.required(),
};
const updateEmployedSchema = {
  name,
  lastname,
};

export default {
  getEmployedSchema,
  createEmployedSchema,
  updateEmployedSchema,
};
