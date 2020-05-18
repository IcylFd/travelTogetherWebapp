/*
 * @Date: 2020-03-19 04:54:06
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-05-06 20:08:27
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { ImagePicker, Tabs } from 'antd-mobile';
import Cropper from 'react-cropper'
import Favourite from './Favourite';
import TravelFootpoints from './TravelFootpoints'
import Subscribe from './Subscribe'
import './index.less'


const data = [{
  url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
  id: '2121',
}];

const tabs = [
  { title: '足迹'},
  { title: '关注'},
  { title: '收藏'},
]
const cropper = React.createRef(null);

@withRouter
class Mine extends Component {
  state = {
    files: data,
    multiple: false,
  }
  onChange = (files, type, index) => {
    console.log(files, type, index);
    this.setState({
      files,
    });
  }

  render() {
    const { files } = this.state;
    return (
      <div className="mine-content" style={{marginTop: 50, paddingBottom: 60}}>
        <div className="info-card">
          <div className="avatar" style={{backgroundImage: `url(https://user-images.githubusercontent.com/38416128/78503841-c2334e80-779b-11ea-9ef0-64440f43c31f.JPG)`}}></div>
          <div className="user-name">icy</div>
        </div>
        <div>
        <Tabs tabs={tabs}
          initialPage={0}
          onChange={(tab, index) => { console.log('onChange', index, tab); }}
          onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
          tabBarUnderlineStyle={{display: 'none'}}
          tabBarBackgroundColor={'transparent'}
          tabBarActiveTextColor={'#bdb5da'}
          tabBarInactiveTextColor={'#c5cbe3'}
          animated={false}
        >
          <TravelFootpoints />
          <Subscribe />
          <Favourite />
        </Tabs>
        </div>
      </div>
    )
  }
}

export default Mine;