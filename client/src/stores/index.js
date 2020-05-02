/*
 * @Date: 2020-03-20 22:41:38
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-05-02 15:08:31
 */
import SignupStore from './signup'
import ActivitiesStore from './activities'

export default {
  SignupStore,
  activitiesStore: new ActivitiesStore(),
}