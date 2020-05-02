/*
 * @Date: 2020-05-02 14:53:08
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-05-02 15:24:53
 */
import { observable, action, computed } from 'mobx';
import { Toast } from 'antd-mobile';
import API from '../services/app';

class Activities {
  @observable activitiesList = []
  @observable loading = false

  @action.bound
   async getActivitiesList() {
    this.loading = true;
    return await API.getActivitiesList().then(data => {
      this.activitiesList = data;
      this.loading = false;
    }).catch(err => {
      this.toolList = [];
      this.loading = false;
      Toast.fail(`获取文章列表错误：${err}`, 3);
    });
  }
}

export default Activities;
