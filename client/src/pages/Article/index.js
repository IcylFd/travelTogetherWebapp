/*
 * @Date: 2020-03-19 04:54:06
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-05-28 17:37:38
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
class Article extends Component {
  state = {
    filterVisible: false,
    selectedTag: [],
    imgUrl: [],
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

  addImage = () => {
    this.input.click();//触发input：file的click事件，
  };
  showToast = (msg) => {
    // Toast.info(msg);
    console.log(111)
  };
  handleImageChange = (e) => {//处理图片
    const saveUrl = this.props.saveUrl;
    const file = e.target.files[0];
    const windowURL = window.URL || window.webkitURL;//实现预览
    const dataURl = windowURL.createObjectURL(file);//硬盘或sd卡指向文件路径
    let imgsUrlArr = [...this.state.imgUrl, dataURl]
    this.setState({
      imgUrl: imgsUrlArr
    });
    // let param = new FormData(); //创建form对象
    // param.append('file',file);
    // this.props.dispatch({
    //   type:this.props.url,
    //   payload:{
    //     params:param,
    //     callback: (rsp) => {
    //       saveUrl(rsp.data);
    //       this.showToast("上传成功！");
    //     },
    //     errorCallBack: (rsp) => {
    //       this.showToast(rsp.msg);
    //     }
    //   }
    // });
  };

  handleSearchPosition() {
    console.log(111)
  }
  onChange(files) {
    console.log(files)
    this.setState({ imgUrl: files})
    console.log(this.state.imgUrl)
  }
  render() {
    const { screenInfo: { clientWidth }, activitiesStore: { loading, activitiesList } } = this.props
    const { imgUrl } = this.state;
    console.log(loading, toJS(activitiesList))
    return (
      <div className="article">
        <div className="header">
          <Icon className="back-icon" type="cross" onClick={() => this.props.history.goBack()} />
        </div>
        <div className="article-container" style={{marginTop: 50, padding: '10px 20px'}}>
          <div>
            <input
              style={{ display:'none' }}
              ref={(el) => { this.input = el }}
              type='file'
              accept='image/*'
              onChange={this.handleImageChange}
            />
            <div className="image-container">
              { imgUrl.length > 0 && imgUrl.map(item => 
                <div className="img-scale">
                  <img className="img" src={item} />
                </div>
              ) }
              <div className="add-img" onClick={this.addImage}><b>+</b></div>
            </div>
          </div>
          <div className="title">
            <InputItem placeholder="填写合适的标题会有更多赞哦~"></InputItem>
          </div>
          <div className="content">
            <TextareaItem rows="9" placeholder="填写正文"></TextareaItem>
          </div>
          <div className="spend" onClick={this.handleSearchPosition}>
            <InputItem>
              <MyIcon type="iconmoney"></MyIcon>人均消费
            </InputItem>
          </div>
          <div className="tag" onClick={() => this.props.history.push('/single/article/tag')}>
            <div className="left">
              <MyIcon type="icontag"></MyIcon>
              选择标签
            </div>
            <div className="right">
              <span className="right-des">选择合适的标签让更多人看到~</span>
              <Icon type="right"></Icon>
            </div>
          </div>
          <div className="position" onClick={this.handleSearchPosition}>
            <div className="left">
              <MyIcon type="iconPointer"></MyIcon>
              选择地点
            </div>
            <div className="right"><Icon type="right"></Icon></div>
          </div>
          <div className="publish-btn">发布游记</div>
        </div>
      </div>
    )
  }
}

export default Article;