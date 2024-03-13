import Joi from 'joi';

const idPlace = Joi.string().min(3).max(10);
const placeAllow = Joi.boolean();

export const getParkSchema = Joi.object({
  idPlace: idPlace.required(),
});
export const createParkSchema = Joi.object({
  idPlace: idPlace.required(),
});
export const updateParkSchema = Joi.object({
  idPlace,
  placeAllow,
});
