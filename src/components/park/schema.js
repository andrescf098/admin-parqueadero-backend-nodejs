import Joi from 'joi';

const idPlace = Joi.string().min(3).max(10);
const placeAllow = Joi.boolean();

export const getParkSchema = {
  idPlace: idPlace.required(),
};
export const createParkSchema = {
  idPlace: idPlace.required(),
};
export const updateParkSchema = {
  idPlace,
  placeAllow,
};
