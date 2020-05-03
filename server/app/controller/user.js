/*
 * @Date: 2020-04-29 01:14:04
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-05-03 13:56:30
 */
// eslint-disable-next-line strict
const Controller = require('egg').Controller;
const moment = require('moment');

class UserController extends Controller {
  async signin() {
    const { ctx } = this;
    const data = {
      ...ctx.request.body,
      createTime: moment().format('YYYY-MM-DD HH:mm:ss'),
    };
    const result = await ctx.service.user.signin(data);
    console.log(ctx.request.body);
    if (result) {
      ctx.body = {
        status: 200,
        data: '注册成功',
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '注册失败',
      };
    }
  }

  async signup() {
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

  async userInfo() {
    const { ctx } = this;
    const result = await ctx.service.user.userInfo(ctx.params.id);
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
        errMsg: '用户不存在',
      };
    }
  }
}

module.exports = UserController;
