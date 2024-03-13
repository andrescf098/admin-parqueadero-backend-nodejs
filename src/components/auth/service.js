import { UserService } from '../user/service.js';
import boom from '@hapi/boom';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userService = new UserService();

export class AuthService {
  async getUser(email, password) {
    const user = await userService.findByEmail(email);
    if (!user) throw boom.unauthorized('Invalid email or password');
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw boom.unauthorized('Invalid email or password');
    return user;
  }
  async signToken(user) {
    const payload = {
      id: user.id,
      email: user.email,
      role: user.role,
    };
    return {
      token: jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' }),
    };
  }
}
