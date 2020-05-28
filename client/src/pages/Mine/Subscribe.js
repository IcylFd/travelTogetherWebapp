/*
 * @Date: 2020-03-19 04:54:06
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-05-18 15:33:10
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
        avatorUrl: 'https://user-images.githubusercontent.com/38416128/82178566-e6dc2380-990e-11ea-97e8-b32615d3f762.jpg',
        name: 'Lily',
        id: 1
      },
      {
        avatorUrl: 'https://user-images.githubusercontent.com/38416128/82178619-ff4c3e00-990e-11ea-9229-8f574d06a63a.jpg',
        name: '小明',
        id: 2
      },
      {
        avatorUrl: 'https://user-images.githubusercontent.com/38416128/82179146-34a55b80-9910-11ea-841a-db5b7f1c3c50.jpg',
        name: '美丽人生',
        id: 2
      },
    ],
    bloggersData: [
      {
        id: 1,
        avatorUrl: 'https://user-images.githubusercontent.com/38416128/82178579-ec396e00-990e-11ea-89ca-17c24693803e.jpg',
        name: '拍下美好',
        intro: '旅行摄影博主',
        isSubcribed: true
      },
      {
        id: 2,
        avatorUrl: 'https://user-images.githubusercontent.com/38416128/82178572-e93e7d80-990e-11ea-83d0-7e181d640578.jpg',
        name: '港湾美食探索',
        intro: '美食生活博主',
        isSubcribed: true
      },
      {
        id: 1,
        avatorUrl: 'https://user-images.githubusercontent.com/38416128/82178579-ec396e00-990e-11ea-89ca-17c24693803e.jpg',
        name: '拍下美好',
        intro: '旅行摄影博主',
        isSubcribed: true
      },
      {
        id: 2,
        avatorUrl: 'https://user-images.githubusercontent.com/38416128/82178572-e93e7d80-990e-11ea-83d0-7e181d640578.jpg',
        name: '港湾美食探索',
        intro: '美食生活博主',
        isSubcribed: true
      },
      {
        id: 1,
        avatorUrl: 'https://user-images.githubusercontent.com/38416128/82178579-ec396e00-990e-11ea-89ca-17c24693803e.jpg',
        name: '拍下美好',
        intro: '旅行摄影博主',
        isSubcribed: true
      },
      {
        id: 2,
        avatorUrl: 'https://user-images.githubusercontent.com/38416128/82178572-e93e7d80-990e-11ea-83d0-7e181d640578.jpg',
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
          <div className="companions-wrapper">
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