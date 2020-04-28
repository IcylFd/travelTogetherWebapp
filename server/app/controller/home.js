/*
 * @Date: 2020-04-29 00:43:20
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-04-29 01:08:07
 */
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx, app } = this;
    const res = await app.mysql.select('user');
    console.log(res);
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
