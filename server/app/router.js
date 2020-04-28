/*
 * @Date: 2020-04-29 00:43:20
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-04-29 01:24:11
 */
'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/signin', controller.user.create);
};
