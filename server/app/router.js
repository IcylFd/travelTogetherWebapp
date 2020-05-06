/*
 * @Date: 2020-04-29 00:43:20
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-05-03 16:54:55
 */
'use strict';
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/user/signin', controller.user.signin);
  router.post('/user/signup', controller.user.signup);
  router.get('/user/info/:id', controller.user.userInfo);

  // 活动
  router.post('/activities/submit', controller.activities.create);
  router.get('/activities/list', controller.activities.list);
  router.get('/activities/detail/:id', controller.activities.detail);

  // 标签
  router.get('/tags/list', controller.tags.list);
  router.get('/tags/user/:id', controller.tags.filterByUserId);

};
