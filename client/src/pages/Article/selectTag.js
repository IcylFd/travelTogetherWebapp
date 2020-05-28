/*
 * @Date: 2020-03-19 04:54:06
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-05-28 17:48:10
 */
import React, { Component } from 'react';
import { toJS } from 'mobx'
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom'
import { Popover, Icon, ImagePicker, InputItem, TextareaItem } from 'antd-mobile';
import { MyIcon } from '../../components/Icons'
import './index.less'

const Item = Popover.Item;

@withRouter
@inject('activitiesStore')
@observer
class SelectTag extends Component {
  state = {
    filterVisible: false,
    selectedTag: [],
    imgUrl: [],
    tags: [
      {
        tagName: '潮流前线',
        key: '6',
        img: ''
      },
      {
        tagName: '必逛景点',
        key: '7'
      },
      {
        tagName: '卡通动漫',
        key: '8'
      },
      {
        tagName: '优质夜蒲',
        key: '9'
      },
      {
        tagName: '理容悦己',
        key: '10'
      },
    ]
  }
 
  componentDidMount() {
    // this.getDiscoveryList()
  }
  render() {
    const { screenInfo: { clientWidth }, activitiesStore: { loading, activitiesList } } = this.props
    const { tags } = this.state;
    console.log(loading, toJS(activitiesList))
    return (
      <div className="tag">
        <div className="header">
          <Icon className="back-icon" type="left" onClick={() => this.props.history.goBack()} />
          选择游记标签
        </div>
        <div className="tag-container">
        {
          tags.map(item => <div className="tag-item">{item.tagName}</div>)
        }
        </div>
      </div>
    )
  }
}

export default SelectTag;