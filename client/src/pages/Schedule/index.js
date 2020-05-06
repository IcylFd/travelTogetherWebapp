/*
 * @Date: 2020-03-19 04:54:06
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-05-06 17:54:14
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { NavBar, Icon, Button } from 'antd-mobile';
import { MyIcon } from '../../components/Icons'
import Plan from './Plan'
import './index.less'

@withRouter
class Schedule extends Component {
  state = {
    curPlan: [
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
    companiers: [
      {
        id: 1,
        avatarImg: 'https://user-images.githubusercontent.com/38416128/78503841-c2334e80-779b-11ea-9ef0-64440f43c31f.JPG'
      },
      {
        id: 2,
        avatarImg: 'https://user-images.githubusercontent.com/38416128/78503841-c2334e80-779b-11ea-9ef0-64440f43c31f.JPG'
      },
      {
        id: 3,
        avatarImg: 'https://user-images.githubusercontent.com/38416128/78503841-c2334e80-779b-11ea-9ef0-64440f43c31f.JPG'
      }
    ]
  }
  componentDidMount() {
    const { curPlan } = this.state;

    JSON.stringify(curPlan) === '{}' && this.redirectToCreate();
  }
  redirectToCreate() {
    this.props.history.push('/main/schedule/plan')
  }
  render() {
    const { screenInfo: { clientHeight } } = this.props
    const { curPlan, companiers } = this.state;
    console.log(curPlan, JSON.stringify(curPlan))
    return (
      <div style={{height: clientHeight - 100, marginTop: 50}}>
      { 
        JSON.stringify(curPlan) !== '{}' ?
        <div className="plan-container">
          <div className="compainer-container">
          {
            companiers.length > 0 &&
            companiers.map(item => (
              <div className="compainer-avatar" style={{backgroundImage: `url(${item.avatarImg})`}}></div>
            ))
          }
          </div>
          <div>
          {
            curPlan.map((item, index) => (
              <div className="plan-item">
                {
                  index === 0 || curPlan[index - 1].date !== item.date ?
                  <div className="day-seprate">
                    <div className="plan-date">{item.date}</div>
                    <div className="date-num">
                      <div className="num">{item.day}</div>
                    </div>
                    <div className={`seprate-line ${index === 0 && 'transparent'}`}></div>
                  </div>
                  : null
                }
                <div className="plan-detail">
                  <div className="plan-tags">
                  {
                    item.tags.map(tagItem => (
                      <div className="tag-item">
                        <MyIcon className="tag-icon" type={tagItem.icon}></MyIcon>
                        <span>{tagItem.name}</span>
                      </div>
                    ))
                  }
                  </div>
                  <div className="middle-line">
                    <div className="line"></div>
                    <div className="dot"></div>
                  </div>
                  <div className="plan-info">
                    <div className="info-img" style={{backgroundImage: `url(${item.headImg})`}}></div>
                    <div className="info-name">{item.name}</div>
                    </div>
                  </div>
                </div>
            ))
          }
          </div>
        </div>
        : <div className="empty-container">
          <div className="none-tip">当前还没有行程哦</div>
        </div>
      }
      </div>
    )
  }
}

export default Schedule;