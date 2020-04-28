/*
 * @Date: 2020-04-29 01:21:00
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-04-29 01:24:03
 */
// eslint-disable-next-line strict
const Service = require('egg').Service;

class UserService extends Service {
  async create(params) {
    const { app } = this;
    try {
      const result = await app.mysql.insert('user', params);
      return result;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}

module.exports = UserService;
