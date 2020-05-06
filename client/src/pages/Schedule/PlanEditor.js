/*
 * @Date: 2020-05-05 21:51:37
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-05-06 19:11:08
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { NavBar, Icon, Calendar, Toast } from 'antd-mobile';
import {MyIcon} from '../../components/Icons'
import zhCN from 'antd-mobile/lib/calendar/locale/zh_CN';

const now = new Date()
@withRouter
class PlanEditor extends Component {
  state = {
    myCurPlan: [
      {
        date: '2020/06/01',
        day: 1,
        name: '大阪城天守阁',
        headImg: 'https://user-images.githubusercontent.com/38416128/81144524-d50d8e80-8fa6-11ea-82c4-ecce8e1ee20a.png',
        tags: [
          {
            name: '景点打卡',
            icon: 'iconscenic'
          }
        ]
      },
      {
        date: '2020/06/01',
        day: 2,
        name: '新宿御苑',
        headImg: 'https://user-images.githubusercontent.com/38416128/81144522-d3dc6180-8fa6-11ea-8071-6c775ccb8c34.png',
        tags: [
          {
            name: '景点打卡',
            icon: 'iconscenic'
          },
          {
            name: '品尝美食',
            icon: 'icontubiao-'
          }
        ]
      },
      {
        date: '2020/06/02',
        day: 2,
        name: '和光市',
        headImg: 'https://user-images.githubusercontent.com/38416128/81144521-d2ab3480-8fa6-11ea-9698-b0d553b2ed1e.png',
        tags: [
          {
            name: '景点打卡',
            icon: 'iconscenic'
          }
        ]
      }
    ],
    companiesPlan: [
      {
        date: '2020/06/01',
        day: 1,
        name: '大阪城天守阁',
        headImg: 'https://user-images.githubusercontent.com/38416128/81144524-d50d8e80-8fa6-11ea-82c4-ecce8e1ee20a.png',
        tags: [
          {
            name: '景点打卡',
            icon: 'iconscenic'
          }
        ]
      },
    ]
  }
  handleConfirmDate(start, end) {
    console.log(start, end)
    this.props.history.push({pathname: '/main/schedule/edit', props: { start, end }})
  }
  render() {
    return (
      <div className="plandate-container" style={{marginTop: 50}}>
        
      </div>
    )
  }
}

export default PlanEditor;