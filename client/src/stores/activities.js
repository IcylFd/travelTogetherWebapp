/*
 * @Date: 2020-05-02 14:53:08
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-05-03 16:41:18
 */
import { observable, action, toJS } from 'mobx';
import { Toast } from 'antd-mobile';
import API from '../services/app';

class Activities {
  @observable activitiesList = []
  @observable loading = false

  @action.bound
  async getActivitiesList() {
    this.loading = true;
    return await API.getActivitiesList().then(data => {
      this.activitiesList = data.list;
      console.log(toJS(this.activitiesList), '---')
      this.loading = false;
    }).catch(err => {
      this.activitiesList = [];
      this.loading = false;
      Toast.fail(`获取文章列表错误：${err}`, 3);
    });
  }
}

export default Activities;
