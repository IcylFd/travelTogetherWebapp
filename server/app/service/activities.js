/*
 * @Date: 2020-04-29 01:21:00
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-05-01 01:36:51
 */
// eslint-disable-next-line strict
const Service = require('egg').Service;

class ActivitiesService extends Service {
  async create(params) {
    const { app } = this;
    try {
      const result = await app.mysql.insert('activities', params);
      return result;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async list() {
    const { app } = this;
    try {
      const list = await app.mysql.select('activities');
      const num = await app.mysql.query('select count(*) from activities');
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

  async detail(id) {
    const { app } = this;
    if (!id) {
      console.log('id必传');
      return null;
    }
    try {
      const result = await app.mysql.get('activities', { id });
      return result;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}

module.exports = ActivitiesService;
