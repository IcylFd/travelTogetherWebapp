/*
 * @Date: 2020-04-29 01:21:00
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-05-01 01:34:05
 */
// eslint-disable-next-line strict
const Service = require('egg').Service;

class TagsService extends Service {
  async add(params) {
    const { app } = this;
    try {
      const result = await app.mysql.insert('tags', params);
      return result;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async list() {
    const { app } = this;
    try {
      const list = await app.mysql.select('tags');
      const num = await app.mysql.query('select count(*) from tags');
      const result = {
        list,
        count: num[0]['count(*)'],
      };
      return result;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}

module.exports = TagsService;
