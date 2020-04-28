/*
 * @Date: 2020-04-29 01:14:04
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-04-29 01:25:40
 */
// eslint-disable-next-line strict
const Controller = require('egg').Controller;

class UserController extends Controller {
  async create() {
    const { ctx } = this;
    const result = await ctx.service.user.create(ctx.request.body);
    if (result) {
      ctx.body = {
        status: 200,
        data: result,
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '注册失败',
      };
    }
  }
}

module.exports = UserController;
