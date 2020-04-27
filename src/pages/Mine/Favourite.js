/*
 * @Date: 2020-03-19 04:54:06
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-04-28 01:11:41
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { MyIcon } from '../../components/Icons'
import moment from 'moment'

@withRouter
class Favourite extends Component {
  state = {
    travelData: [
      {
        year: '2019',
        date: moment('2019-07-02').format('MM/DD'),
        title: '一场追寻，日本之光的旅行',
        activityTitle: '东京芝公园',
        content: '这好似一件很奇妙的事情——我的耳朵分明一直在工作，但在认真聆听之前，她却像蔫了一样。一场追寻，日本之光的旅行',
        headImg: 'https://user-images.githubusercontent.com/38416128/80085384-b9f45500-858a-11ea-94d0-fc43380ae7e0.jpg'
      },
      {
        year: '2019',
        date: moment('2019-07-02').format('MM/DD'),
        title: '一场追寻，日本之光的旅行',
        activityTitle: '东京芝公园',
        content: '这好似一件很奇妙的事情——我的耳朵分明一直在工作，但在认真聆听之前，她却像蔫了一样。一场追寻',
        headImg: 'https://user-images.githubusercontent.com/38416128/80085384-b9f45500-858a-11ea-94d0-fc43380ae7e0.jpg'
      },
      {
        year: '2020',
        date: moment('2019-07-02').format('MM/DD'),
        title: '一场追寻，日本之光的旅行',
        activityTitle: '东京芝公园',
        content: '这好似一件很奇妙的事情——我的耳朵分明一直在工作，但在认真聆听之前，她却像蔫了一样。一场追寻',
        headImg: 'https://user-images.githubusercontent.com/38416128/80085384-b9f45500-858a-11ea-94d0-fc43380ae7e0.jpg'
      }
    ]
  }
  render() {
    const { travelData } = this.state
    return (
      <div className="favourite-container">
      {
        travelData.length > 0 ? travelData.map((item, index) => (
          <div className="footpoint-item">
            <div className="time-line">
              <div className="line"></div>
              <div className="dot"></div>
              <div className="year">{item.year}</div>
              <div className="date">{item.date}</div>
            </div>
            <div className="article">
              <div className="top">
                {/* <MyIcon type="iconedit"></MyIcon> */}
                <div className="sperate-line"></div>
              </div>
              <div className="content">
                <div className="head-info">
                  <div className="intro">
                    <MyIcon className="people-icon" type="icongroup-people"></MyIcon>
                    <div className="title">{item.title}</div>
                    <div className="position">
                      <MyIcon className="position-icon" type="iconposition"></MyIcon>
                      {item.activityTitle}
                    </div>
                  </div>
                  <div className="img" style={{backgroundImage: `url(${item.headImg})`}}></div>
                </div>
              </div>
            </div>
          </div>
        ))
        : <div className="no-data">暂无数据</div>
      }
        
      </div>
    )
  }
}

export default Favourite;