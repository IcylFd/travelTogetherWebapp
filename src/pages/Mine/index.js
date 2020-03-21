/*
 * @Date: 2020-03-19 04:54:06
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-03-21 22:39:21
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { ImagePicker } from 'antd-mobile';
import Cropper from 'react-cropper'

const data = [{
  url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
  id: '2121',
}];

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
    const { clientHeight } = this.props
    return (
      <div style={{height: clientHeight - 95}}>
        <ImagePicker
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
        crop={this._crop.bind(this)} />
      </div>
    )
  }
}

export default Mine;