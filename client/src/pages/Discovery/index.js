/*
 * @Date: 2020-03-19 04:54:06
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-05-18 15:09:39
 */
import React, { Component } from 'react';
import { toJS } from 'mobx'
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom'
import { Popover } from 'antd-mobile';
import { MyIcon } from '../../components/Icons'
import './index.less'

const Item = Popover.Item;

@withRouter
@inject('activitiesStore')
@observer
class Discovery extends Component {
  state = {
    filterVisible: false,
    selectedTag: [],
    discoveryData: [
      {
        title: 'IFS',
        subTitle: '和妈妈一起买买买',
        imgUrl: 'https://user-images.githubusercontent.com/38416128/78419061-586c5500-7674-11ea-9a52-3c4bde684304.jpeg',
        spend: '97',
        descInfo: '9:00-22:00 营业',
        likeNum: 233,
        type: '购物'
      },
      {
        title: '炫彩万沐源乡村风景区',
        subTitle: '动漫里的彩色童话镇',
        imgUrl: 'https://user-images.githubusercontent.com/38416128/82178130-dc6d5a00-990d-11ea-9f47-23586835fa27.jpeg',
        spend: '',
        descInfo: '9:00-17:00 营业',
        likeNum: 104,
        type: '必逛景点'
      },
      {
        title: '明月松间·洱海酒店',
        subTitle: '我想去大理的理由',
        imgUrl: 'https://user-images.githubusercontent.com/38416128/82178136-decfb400-990d-11ea-8123-cef28837e6c2.jpeg',
        spend: '450',
        descInfo: '24小时营业',
        likeNum: 23,
        type: '探店'
      },
      {
        title: '东京芝公园',
        subTitle: '圣诞主题等你来',
        imgUrl: 'https://user-images.githubusercontent.com/38416128/80085402-beb90900-858a-11ea-9b9e-3cc91af26577.jpg',
        spend: '20',
        descInfo: '',
        likeNum: 12,
        type: '人文景点'
      }
    ],
    filterData: [
      {
        name: '我',
        tags: [
          {
            tagName: '主题展览',
            key: '1'
          },
          {
            tagName: '音乐',
            key: '2'
          }
        ]
      },
      {
        name: '小明',
        tags: [
          {
            tagName: '特色餐厅',
            key: '3'
          },
          {
            tagName: '运动健身',
            key: '4'
          }
        ]
      },
      {
        name: '妈妈',
        tags: [
          {
            tagName: '主题展览',
            key: '1'
          },
          {
            tagName: '购物',
            key: '5'
          }
        ]
      }
    ],
    discoveryTags: [
      {
        tagName: '潮流前线',
        key: '6'
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

  getDiscoveryList() {
    const { activitiesStore: { getActivitiesList, activitiesList } } = this.props;
    getActivitiesList();
  }
  renderDiscoveryItem() {
    const { discoveryData } = this.state
    // const { activitiesStore: { activitiesList } } = this.props;
    // const discoveryData = toJS(activitiesList)
    return discoveryData && discoveryData.map(item => (
      <div className="item" onClick={() => this.props.history.push('/single/activities')}>
        <div className="type-tag">{item.type}</div>
        <div className="item-img" style={{ backgroundImage: `url(${item.imgUrl})` }}></div>
        <div className="item-info">
          <p className="info-title">{item.title}</p>
          <p className="info-subtitle">{item.subTitle}</p>
          { item.spend && <p className="spend"><span>{item.spend}</span>元/人</p>}
          <div className="info-desc">
            <span className="open-time">{item.descInfo}</span>
            <div className="like-icon">
              <MyIcon type="icongood" />{item.likeNum}
            </div>
          </div>
        </div>
      </div>
    ))
  }

  renderFilterItem() {
    const { filterData } = this.state;
    return filterData && filterData.map(item => (
      <>
        <div className="item-header">{item.name}的关注</div>
        <div className="tag-content">
          {item.tags.map(item => <Item value={item.key} className="tag-item">{item.tagName}</Item>)}
        </div>
      </>
    ))
  }
  onFilterSelect = (opt) => {
    console.log(opt)
    this.setState({
      filterVisible: false,
      selectedTag: [].push(opt.props.value),
    });
  };
  handleFilterVisibleChange = (visible) => {
    console.log(visible)
    this.setState({
      filterVisible: visible,
    });
  };
  render() {
    const { screenInfo: { clientWidth }, activitiesStore: { loading, activitiesList } } = this.props
    const { discoveryTags, filterVisible } = this.state;
    console.log(loading, toJS(activitiesList))
    return (
      <div style={{marginTop: 50, padding: '10px 20px'}}>
        <div className="discovery-header">
          <span className="header-title">个性化推荐</span>
          <Popover
            mask
            overlayClassName="fortest"
            visible={filterVisible}
            overlay={
              <div className="filter-pop" style={{width: clientWidth - 80}}>
              {this.renderFilterItem()}
              <div className="separate"></div>
              <div className="item-header">发现好去处</div>
                <div className="tag-content">
                  {discoveryTags.map(item => <Item value={item.key} className="tag-item">{item.tagName}</Item>)}
                </div>
              </div>
            }
            onVisibleChange={this.handleFilterVisibleChange}
            onSelect={this.onFilterSelect}
          >
            <MyIcon type="iconfilter" className="header-icon"></MyIcon>
          </Popover>
        </div>
        {
          loading
          ? <MyIcon type="iconloading"></MyIcon>
          : <div className="discovery-content">
              {this.renderDiscoveryItem()}
            </div>
        }
        
      </div>
    )
  }
}

export default Discovery;