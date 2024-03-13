import express from 'express';
import passport from 'passport';
import { AuthService } from './service.js';

const service = new AuthService();
const router = express.Router();

router.post(
  '/login',
  [passport.authenticate('local', { session: false })],
  async (req, res, next) => {
    try {
      const user = req.user;
      res.status(200).json(await service.signToken(user));
    } catch (error) {
      next(error);
    }
  }
);
export default router;
