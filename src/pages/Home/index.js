/*
 * @Date: 2020-03-22 16:19:12
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-04-26 23:30:53
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Tabs } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import { MyIcon } from '../../components/Icons'
import './index.less'

@withRouter
class Home extends Component {
  renderContent = tab => {
    console.log(tab)
    return (
      <div style={{width: '93%', margin: '44px auto 65px auto' }} className="home-container">
        <img src={tab.headImgUrl} alt="" style={{width: '100%' }} />
        <div className="schedule-content">
        {
          tab.scheduleData.map(item => (
            <div className="scedule-item">
            <div className="item-img" style={{backgroundImage: `url(${item.imgUrl})`}}></div>
            <div className="item-info">
              <div className="info-title">
                <span className="title text-ellipsis">{item.name}</span>
                <div className="tag-item">{item.tag.name}</div>
              </div>
              <div className="info-desc">
                <p className="info-subtitle text-ellipsis">{item.subTitle}</p>
                { item.spend && <p className="spend-aver"><span>{item.spend}</span>元/人</p>}
              </div>
              <div className="like-info">
                <MyIcon type="icongood" className="like-icon" />
                {
                  item.likeUserInfo.map(item => (
                    <div className="avator" style={{backgroundImage: `url(${item.avator})`}} />
                  ))
                }
              </div>
            </div>
            </div>
          ))
        }
        </div>
        <div className="add-btn">
          <MyIcon type="iconadd"></MyIcon>增加一个行程
        </div>
      </div>
    );
  }
    
  render() {
    const tabs = [
      {
        title: 'Day 1',
        headImgUrl: 'https://user-images.githubusercontent.com/38416128/78503395-e3467000-7798-11ea-903b-2573731cf187.png',
        scheduleData: [
          {
            name: '东京芝公园',
            tag: {
              name: '人文景点',
              key: 1
            },
            imgUrl: 'https://user-images.githubusercontent.com/38416128/78503521-b050ac00-7799-11ea-9844-d9b9835dc39e.png',
            subTitle: '日本最古老的公园之一',
            likeUserInfo: [
              {
                avator: 'https://user-images.githubusercontent.com/38416128/78503841-c2334e80-779b-11ea-9ef0-64440f43c31f.JPG',
                userId: '123'
              },
              {
                avator: 'https://user-images.githubusercontent.com/38416128/78503841-c2334e80-779b-11ea-9ef0-64440f43c31f.JPG',
                userId: '123'
              }
            ]
          },
          {
            name: '东京芝公园',
            tag: {
              name: '人文景点',
              key: 1
            },
            imgUrl: 'https://user-images.githubusercontent.com/38416128/78503521-b050ac00-7799-11ea-9844-d9b9835dc39e.png',
            subTitle: '日本最古老的公园之一',
            spend: '97',
            likeUserInfo: [
              {
                avator: 'https://user-images.githubusercontent.com/38416128/78503841-c2334e80-779b-11ea-9ef0-64440f43c31f.JPG',
                userId: '123'
              }
            ]
          },
          {
            name: '东京芝公园',
            tag: {
              name: '人文景点',
              key: 1
            },
            imgUrl: 'https://user-images.githubusercontent.com/38416128/78503521-b050ac00-7799-11ea-9844-d9b9835dc39e.png',
            subTitle: '日本最古老的公园之一',
            spend: '97',
            likeUserInfo: [
              {
                avator: 'https://user-images.githubusercontent.com/38416128/78503841-c2334e80-779b-11ea-9ef0-64440f43c31f.JPG',
                userId: '123'
              }
            ]
          }
        ]
      },
      {
        title: 'Day 2',
        headImgUrl: 'https://user-images.githubusercontent.com/38416128/78503395-e3467000-7798-11ea-903b-2573731cf187.png',
        scheduleData: [
          {
            name: '东京芝公园',
            tag: {
              name: '人文景点',
              key: 1
            },
            imgUrl: 'https://user-images.githubusercontent.com/38416128/78503521-b050ac00-7799-11ea-9844-d9b9835dc39e.png',
            subTitle: '日本最古老的公园之一',
            spend: '97',
            likeUserInfo: [
              {
                avator: 'https://user-images.githubusercontent.com/38416128/78503841-c2334e80-779b-11ea-9ef0-64440f43c31f.JPG',
                userId: '123'
              }
            ]
          }
        ]
      },
      {
        title: 'Day 3',
        headImgUrl: 'https://user-images.githubusercontent.com/38416128/78503395-e3467000-7798-11ea-903b-2573731cf187.png',
        scheduleData: [
          {
            name: '东京芝公园',
            tag: {
              name: '人文景点',
              key: 1
            },
            imgUrl: 'https://user-images.githubusercontent.com/38416128/78503521-b050ac00-7799-11ea-9844-d9b9835dc39e.png',
            subTitle: '日本最古老的公园之一',
            spend: '97',
            likeUserInfo: [
              {
                avator: 'https://user-images.githubusercontent.com/38416128/78503841-c2334e80-779b-11ea-9ef0-64440f43c31f.JPG',
                userId: '123'
              }
            ]
          }
        ]
      },
      {
        title: 'Day 4',
        headImgUrl: 'https://user-images.githubusercontent.com/38416128/78503395-e3467000-7798-11ea-903b-2573731cf187.png',
        scheduleData: [
          {
            name: '东京芝公园',
            tag: {
              name: '人文景点',
              key: 1
            },
            imgUrl: 'https://user-images.githubusercontent.com/38416128/78503521-b050ac00-7799-11ea-9844-d9b9835dc39e.png',
            subTitle: '日本最古老的公园之一',
            spend: '97',
            likeUserInfo: [
              {
                avator: 'https://user-images.githubusercontent.com/38416128/78503841-c2334e80-779b-11ea-9ef0-64440f43c31f.JPG',
                userId: '123'
              }
            ]
          }
        ]
      },
    ];
    return (
      <div style={{marginTop: 50}}>
        <StickyContainer>
          <Tabs
            tabs={tabs}
            tabBarUnderlineStyle={{display: 'none'}}
            tabBarActiveTextColor='#bdb5da'
            renderTabBar={
              props => 
              <Sticky>
              {
                ({ style }) => 
                <div
                  style={{ ...style, zIndex: 2, position: 'fixed', width: '100%' }}>
                  <Tabs.DefaultTabBar {...props} page={4} />
                </div>}
              </Sticky>}
          >
            {this.renderContent}
          </Tabs>
        </StickyContainer>
      </div>
    )
  }
}

export default Home;