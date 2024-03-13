import Joi from 'joi';

const id = Joi.number().integer();
const name = Joi.string().min(3).max(50);
const lastname = Joi.string().min(3).max(50);

const getEmployedSchema = Joi.object({
  id: id.required(),
});

const createEmployedSchema = Joi.object({
  name: name.required(),
  lastname: lastname.required(),
});
const updateEmployedSchema = Joi.object({
  name,
  lastname,
});

export default {
  getEmployedSchema,
  createEmployedSchema,
  updateEmployedSchema,
};
