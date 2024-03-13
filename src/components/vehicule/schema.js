import Joi from 'joi';

const idVehicule = Joi.string().min(6);
const type = Joi.string().min(3).max(50);
const observations = Joi.string().min(3).max(50);
const idPlace = Joi.string();
const incoming = Joi.boolean();

export const getVehiculeSchema = Joi.object({
  idVehicule: idVehicule.required(),
});
export const createVehiculeSchema = Joi.object({
  idVehicule: idVehicule.required(),
  type: type.required(),
  observations: observations.required(),
  idPlace: idPlace.required(),
});
export const updateVehiculeSchema = Joi.object({
  type,
  observations,
  idPlace,
  incoming,
});
