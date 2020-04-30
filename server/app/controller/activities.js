/*
 * @Date: 2020-04-29 01:14:04
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-05-01 01:14:57
 */
// eslint-disable-next-line strict
const Controller = require('egg').Controller;
const moment = require('moment');

class ActivitiesController extends Controller {
  async list() {
    const { ctx } = this;
    const result = await ctx.service.activities.list(ctx.params.id);
    if (result) {
      ctx.body = {
        status: 200,
        data: result,
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '获取活动列表失败',
      };
    }
  }

  async detail() {
    const { ctx } = this;
    const result = await ctx.service.activities.detail(ctx.params.id);
    if (result) {
      ctx.body = {
        status: 200,
        data: result,
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '获取活动列表失败',
      };
    }
  }

  async create() {
    const { ctx } = this;
    const data = {
      ...ctx.request.body,
      createTime: moment().format('YYYY-MM-DD HH:mm:ss'),
    };
    const result = await ctx.service.activities.create(data);
    if (result) {
      ctx.body = {
        status: 200,
        data: '发布成功',
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '发布失败',
      };
    }
  }
}

module.exports = ActivitiesController;
