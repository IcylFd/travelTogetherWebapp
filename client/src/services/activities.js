/*
 * @Date: 2020-05-02 14:38:23
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-05-03 13:51:21
 */
import Fetch from '../utils/fetch.js';
import URL from '../config/apiUrls';

const getActivitiesList = () => Fetch.getJSON({
  url: URL.activitiesList
});

export default {
  getActivitiesList,
};
