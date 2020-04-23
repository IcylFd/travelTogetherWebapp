/*
 * @Date: 2020-03-19 04:54:06
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-04-23 19:06:26
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import { Carousel, Button } from 'antd-mobile'
import './index.less'
import Header from './header'
import { MyIcon } from '../../components/Icons';


// const Step = Steps.Step;

@withRouter
@inject('SignupStore')
@observer
class Singup extends Component {
  state = {
    activityData: {
      activityId: 1,
      title: '东京芝公园',
      subTitle: '绝佳赏樱地',
      headPics: [
        'https://user-images.githubusercontent.com/38416128/80085384-b9f45500-858a-11ea-94d0-fc43380ae7e0.jpg',
        'https://user-images.githubusercontent.com/38416128/80085390-bbbe1880-858a-11ea-9fd5-6614db09ee88.jpg',
        'https://user-images.githubusercontent.com/38416128/80085397-bcef4580-858a-11ea-85cd-ee2a01c19034.jpg',
        'https://user-images.githubusercontent.com/38416128/80085402-beb90900-858a-11ea-9b9e-3cc91af26577.jpg'
      ],
      content: 'aaaaaa, aaaaaa. aaaaaaaaaaaaaaaaaa. aaaaaa, aaaaaa, aaaaaa',
      authorInfo: {
        name: 'icy',
        avatorUrl: 'https://user-images.githubusercontent.com/38416128/78503841-c2334e80-779b-11ea-9ef0-64440f43c31f.JPG',
        userId: '1'
      },
      weather: [
        {
          date: '4月1日',
          type: 'sunny',
          top: 26,
          low: 20
        },
        {
          date: '4月2日',
          type: 'rain',
          top: 22,
          low: 18
        },
        {
          date: '4月3日',
          type: 'sunny',
          top: 26,
          low: 20
        }
      ],
      position: {
        city: '京都',
        district: '涉谷区',
        street: '神宫',
        num: '12-1'
      },
      spend: '1000日元/人'
    }
  }
  render() {
    const { screenInfo: { clientHeight } } = this.props
    const { activityData } = this.state
    return (
      <div style={{height: clientHeight}} className="container">
        <Header title={activityData.subTitle}/>
        <div className="swiper-container">
          <Carousel autoplay={true} infinite>
            {activityData.headPics.map(item => (
              <div className="img-wrapper">
                <img src={item} alt="" class="img-item" />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="content-container">
          <div class="title-container">
            <div class="title">{activityData.title}</div>
            <div class="info">
              <div><MyIcon className="info-icon" type="iconLike" /><span>201</span></div>
              <div><MyIcon className="info-icon" type="iconlike" /><span>100</span></div>
            </div>
          </div>
          
          <div className="intro-container">{activityData.content}</div>
          <div className="author-container">
            <div className="author-info">
              <div className="avator" style={{backgroundImage: `url(${activityData.authorInfo.avatorUrl})`}}></div>
              <div className="name">{activityData.authorInfo.name}</div>
            </div>
            <div className="subscribe"><Button>关注</Button></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Singup;