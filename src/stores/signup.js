/*
 * @Date: 2020-03-20 22:39:40
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-03-21 13:54:43
 */
import { observable, action } from 'mobx'

class SignupStore {
  @observable curStep = 1
  @observable curTitle = '个人信息'
  @observable tag = ['主题展览', '音乐演出', '特色美食', '自然风光', '人文景点', '潮流前线', '运动健身', '买买买', '书影舒享']

  @action.bound
  changeCurStep(stepNum) {
    this.curStep = stepNum
  }

  @action.bound
  changeCurTitle(stepTitle) {
    this.curTitle = stepTitle
  }
}

export default new SignupStore();