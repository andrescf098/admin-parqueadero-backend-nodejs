import Joi from 'joi';

const idUser = Joi.number().integer();
const idEmployed = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string().min(6).max(50);
const role = Joi.string().valid('user', 'admin');

export const getUserSchema = Joi.object({
  idUser: idUser.required(),
});
export const createUserSchema = Joi.object({
  idEmployed: idEmployed.required(),
  email: email.required(),
  password: password.required(),
});
export const updateUserSchema = Joi.object({
  email,
  password,
  role,
});
