/*
 * @Date: 2020-03-19 04:54:06
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-05-18 12:43:30
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
      content: `樱花季去日本，是一件很浪漫的事🌸。\n
      芝公园是东京首选赏樱地之一，我们偶然在那找到了一处人流甚少的樱花小道，还能跟铁塔近距离合照。
      具体位置是在公园后方，寺庙附近，靠近停车场，这里不像公园前方那么多人，人们基本都只是经过不停留，所以此处更有日本那种干净素雅，却又充满生活气息的感觉。`,
      authorInfo: {
        name: 'icy',
        avatorUrl: 'https://user-images.githubusercontent.com/38416128/78503841-c2334e80-779b-11ea-9ef0-64440f43c31f.JPG',
        userId: '1',
        subInfo: '旅行生活博主'
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
          type: 'light_rain',
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
        detail: '12-1'
      },
      spend: '1000日元/人'
    }
  }
  renderWeather = (item) => {
    const dateArr = item.date.split('')
    return (
      <div className="weather-item">
        <div className="item-top">
          <div className="date">{dateArr[0]}<span>{dateArr[1]}</span>{dateArr[2]}<span>{dateArr[3]}</span></div>
          <MyIcon className="weather-icon" type={`iconweather_${item.type}`}></MyIcon>
        </div>
        <div className="item-bottom">
          <div className="weather-num">{item.low} / {item.top}℃</div>
        </div>
      </div>
    )
  }

  render() {
    // const { screenInfo: { clientHeight } } = this.props
    const { activityData } = this.state
    return (
      <div className="activities-container">
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
              <div><MyIcon className="info-icon" type="icongood" /><span>201</span></div>
              <div><MyIcon className="info-icon" type="iconfavorites" /><span>100</span></div>
            </div>
          </div>
          
          <p className="intro-container">{activityData.content}</p>
          <div className="author-container">
            <div className="author-info">
              <div className="avator" style={{backgroundImage: `url(${activityData.authorInfo.avatorUrl})`}}></div>
              <div className="name">{activityData.authorInfo.name}</div>
              {activityData.authorInfo.subInfo !== '' && <div className="sub-info">{activityData.authorInfo.subInfo}</div>}
            </div>
            <div className="subscribe"><Button>关注</Button></div>
          </div>
          
          <div className="weather-container">
            { activityData.weather.map(item => this.renderWeather(item)) }
          </div>

          <div className="info-container">
            <div className="info-item">
              <MyIcon type="iconPointer"></MyIcon>
              { activityData.position.city !== '' && <p>{activityData.position.city}</p> }
              { activityData.position.district !== '' && <p>{activityData.position.district}</p> }
              { activityData.position.street !== '' && <p>{activityData.position.street}</p> }
              { activityData.position.detail !== '' && <p>{activityData.position.detail}</p> }
            </div>
            <div className="info-item">
              <MyIcon type="iconmoney"></MyIcon>
              { activityData.spend !== '' && <p>{activityData.spend}</p> }
            </div>
          </div>
        </div>
        <Button className="add">添加到行程</Button>
      </div>
    )
  }
}

export default Singup;