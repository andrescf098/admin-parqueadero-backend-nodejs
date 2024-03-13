import Joi from 'joi';

const idUser = Joi.number().integer();
const idEmployed = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string().min(6).max(50);
const role = Joi.string().valid('user', 'admin');

const getUserSchema = {
  idUser: idUser.required(),
};
const createUserSchema = {
  idEmployed: idEmployed.required(),
  email: email.required(),
  password: password.required(),
};
const updateUserSchema = {
  email,
  password,
  role,
};

export default { getUserSchema, createUserSchema, updateUserSchema };
