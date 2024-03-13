import Joi from 'joi';

const idVehiculo = Joi.number().integer();
const type = Joi.string().min(3).max(50);
const ticket = Joi.number().integer();
const observations = Joi.string().min(3).max(50);
const idPlace = Joi.number().integer();
const incoming = Joi.boolean();

const getVehiculoSchema = {
  idVehiculo: idVehiculo.required(),
};
const createVehiculoSchema = {
  type: type.required(),
  ticket: ticket.required(),
  observations: observations.required(),
  idPlace: idPlace.required(),
};
const updateVehiculoSchema = {
  type,
  ticket,
  observations,
  idPlace,
  incoming,
};

export default {
  getVehiculoSchema,
  createVehiculoSchema,
  updateVehiculoSchema,
};
