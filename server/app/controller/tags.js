/*
 * @Date: 2020-04-29 23:35:52
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-05-03 13:56:15
 */
// eslint-disable-next-line strict
const Controller = require('egg').Controller;

class TagsController extends Controller {
  async add() {
    const { ctx } = this;
    const result = await ctx.service.user.signup(ctx.request.body);
    if (result) {
      ctx.body = {
        status: 200,
        errno: 0,
        data: result,
      };
    } else {
      ctx.body = {
        status: 500,
        errno: 40001,
        errMsg: '注册失败',
      };
    }
  }

  async list() {
    const { ctx } = this;
    const result = await ctx.service.tags.list();
    if (result) {
      ctx.body = {
        status: 200,
        errno: 0,
        data: result,
      };
    } else {
      ctx.body = {
        status: 500,
        errno: 40001,
        errMsg: '获取标签列表失败',
      };
    }
  }
}

module.exports = TagsController;
