import { Strategy } from 'passport-local';
import { AuthService } from '../../components/auth/service.js';

const service = new AuthService();

export const LocalStrategy = new Strategy(
  {
    usernameField: 'email',
    passwordField: 'password',
  },
  async (email, password, done) => {
    try {
      const user = await service.getUser(email, password);
      done(null, user);
    } catch (error) {
      done(error, false);
    }
  }
);
