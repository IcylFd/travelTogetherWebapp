/*
 * @Date: 2020-05-02 14:38:23
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-05-02 15:32:10
 */
import Fetch from '../utils/fetch.js';
import URL from '../config/apiUrls';

const getActivitiesList = () => fetch.get({
  url: URL.activitiesList
});

export default {
  getActivitiesList,
};
