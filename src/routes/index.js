import express from 'express';
import employed from '../components/employed/network.js';
import park from '../components/park/network.js';
import user from '../components/user/network.js';
import auth from '../components/auth/network.js';
import vehiculo from '../components/vehicule/network.js';

const routerApi = (app) => {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/employed', employed);
  router.use('/park', park);
  router.use('/user', user);
  router.use('/auth', auth);
  router.use('/vehiculo', vehiculo);
};

export default routerApi;
