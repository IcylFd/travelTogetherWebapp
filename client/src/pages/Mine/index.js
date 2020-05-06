/*
 * @Date: 2020-03-19 04:54:06
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-05-06 19:12:04
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
  onImageClick = (e) => {
    // e.preventDefault();
    this.setState({files: [{
      url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
      id: '3',
    }]})
  }
  _crop(){
    // image in dataUrl
    console.log(this.refs.cropper.getCroppedCanvas().toDataURL());
  }

  render() {
    const { files } = this.state;
    return (
      <div className="mine-content" style={{marginTop: 50, paddingBottom: 60}}>
        {/* <ImagePicker
          files={files}
          onChange={this.onChange}
          onImageClick={this.onImageClick}
          selectable={false}
          multiple={this.state.multiple}
          style={{borderRadius: '50%'}}
          disableDelete
          accept="image/jpge,image/jpg,image/png"
        />
        <Cropper
        ref={cropper}
        src='../../public/logo192.png'
        style={{height: 400, width: '100%'}}
        // Cropper.js options
        aspectRatio={16 / 9}
        guides={false}
        crop={this._crop.bind(this)} /> */}
        <div className="info-card">
          <div className="avatar"></div>
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