/*
 * @Date: 2020-05-02 14:34:17
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-05-02 15:16:34
 */
import { reqDomain } from './config';

const prefix = `${reqDomain}/api`;
// mock接口
// const mockPrefix = 'https://mock.xiaojukeji.com/mock/1065/ihap-toolkitty';

const URL = {
  activitiesList: `${prefix}/activities/list`,
};

export default URL;