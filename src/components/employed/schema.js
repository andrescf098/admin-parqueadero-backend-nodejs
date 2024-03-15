import Joi from 'joi';

const id = Joi.number().integer();
const name = Joi.string().min(3).max(50);
const lastname = Joi.string().min(3).max(50);

export const getEmployedSchema = Joi.object({
  id: id.required(),
});

export const createEmployedSchema = Joi.object({
  name: name.required(),
  lastname: lastname.required(),
});
export const updateEmployedSchema = Joi.object({
  name,
  lastname,
});
