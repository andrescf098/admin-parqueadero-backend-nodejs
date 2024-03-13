import sequelize from '../../libs/sequelize.js';
import boom from '@hapi/boom';
import bcrypt from 'bcrypt';

const models = sequelize.models;

export class UserService {
  async create(data, idEmployed) {
    const employed = await models.Employed.findByPk(idEmployed);
    if (!employed) {
      throw boom.notFound('Employed not found');
    } else {
      const hash = await bcrypt.hash(data.password, 10);
      const newUser = await models.User.create({
        ...data,
        password: hash,
      });
      delete newUser.dataValues.password;
      return newUser;
    }
  }
  async find() {
    const users = await models.User.findAll();
    return users;
  }
  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) throw boom.notFound('User not found');
    return user;
  }
  async findByEmail(email) {
    const user = await models.User.findOne({ where: { email } });
    if (!user) throw boom.notFound('User not found');
    return user;
  }
  async update(id, changes) {
    const user = await this.findOne(id);
    const password = changes.password;
    let userUpdated;
    if (password) {
      const hash = await bcrypt.hash(changes.password, 10);
      userUpdated = await user.update({
        ...changes,
        password: hash,
      });
      delete userUpdated.dataValues.password;
      return userUpdated;
    } else {
      userUpdated = await user.update(changes);
      delete userUpdated.dataValues.password;
      return userUpdated;
    }
  }
  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return { message: 'User deleted' };
  }
}
