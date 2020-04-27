/*
 * @Date: 2020-03-19 04:54:06
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-04-28 00:37:08
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { ImagePicker, Tabs, Button } from 'antd-mobile';
import { MyIcon } from '../../components/Icons';

@withRouter
class Subscribe extends Component {
  state = {
    companionsData: [
      {
        avatorUrl: 'https://user-images.githubusercontent.com/38416128/78419061-586c5500-7674-11ea-9a52-3c4bde684304.jpeg',
        name: 'xiaohong',
        id: 1
      },
      {
        avatorUrl: 'https://user-images.githubusercontent.com/38416128/78419061-586c5500-7674-11ea-9a52-3c4bde684304.jpeg',
        name: 'xiaoming',
        id: 2
      }
    ],
    bloggersData: [
      {
        id: 1,
        avatorUrl: 'https://user-images.githubusercontent.com/38416128/78503841-c2334e80-779b-11ea-9ef0-64440f43c31f.JPG',
        name: '拍下美好',
        intro: '旅行摄影博主',
        isSubcribed: true
      },
      {
        id: 2,
        avatorUrl: 'https://user-images.githubusercontent.com/38416128/78503841-c2334e80-779b-11ea-9ef0-64440f43c31f.JPG',
        name: '港湾美食探索',
        intro: '美食生活博主',
        isSubcribed: true
      }
    ]
  }
  render() {
    const { companionsData, bloggersData } = this.state
    return (
      <div className="subscribe-container">
        <div className="companions">
          <p>同行人</p>
          <div className="companions-container">
          {
            companionsData.map(item => (
              <div className="companions-item">
                <div className="avator" style={{backgroundImage: `url(${item.avatorUrl})`}}></div>
                <div className="name">{item.name}</div>
              </div>
            ))
          }
            <div className="add-compainon"><MyIcon type="iconadd"></MyIcon></div>
          </div>
        </div>
        {
          bloggersData.length > 0 &&
          <div className="bloggers">
            <p>关注博主</p>
          {
            bloggersData.map(item => (
              <div className="bloggers-item">
                <div className="blogger-info">
                  <div className="avator" style={{backgroundImage: `url(${item.avatorUrl})`}}></div>
                  <div>
                    <div className="name">{item.name}</div>
                    <div className="intro">{item.intro}</div>
                  </div>
                </div>
                <div className="subscribe-btn">
                {
                  item.isSubcribed
                  ? <Button>已关注</Button>
                  : <Button>关注</Button>
                }
                </div>
              </div>
            ))
          }
          </div>
        }
        
      </div>
    )
  }
}

export default Subscribe;