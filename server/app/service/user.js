/*
 * @Date: 2020-04-29 01:21:00
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-04-29 23:27:42
 */
// eslint-disable-next-line strict
const Service = require('egg').Service;

class UserService extends Service {
  async signin(params) {
    const { app } = this;
    try {
      const result = await app.mysql.insert('user', params);
      return result;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async signup(params) {
    const { app } = this;
    try {
      const result = await app.mysql.insert('user', params);
      return result;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async userInfo(id) {
    const { app } = this;
    if (!id) {
      console.log('id必传');
      return null;
    }
    try {
      const result = await app.mysql.get('user', { id });
      return result;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}

module.exports = UserService;
