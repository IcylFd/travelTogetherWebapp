import React, { Component } from 'react'
import { withRouter, Link, HashRouter } from 'react-router-dom'
import { TabBar } from 'antd-mobile';
import { MyIcon } from '../Icons'
import './index.less'

@withRouter
class TabNav extends Component {
  state = {
    curSelect: '/main/home',
    hidden: false,
    fullScreen: false,
    tabItem: [
      {
        title: '首页',
        key: 'home',
        iconName: 'iconhome',
        selected: '/main/home',
        onPressFn: () => {
          this.setState({
            curSelect: '/main/home',
          });
          this.props.history.push({pathname: '/main/home'})
        }
      },
      {
        title: '行程',
        key: 'schedule',
        iconName: 'iconsuitcase',
        selected: '/main/schedule',
        onPressFn: () => {
          this.setState({
            curSelect: '/main/schedule',
          });
          this.props.history.push({pathname: '/main/schedule'})
        }
      },
      {
        title: '发现',
        key: 'discovery',
        iconName: 'icondiscover',
        selected: '/main/discovery',
        onPressFn: () => {
          this.setState({
            curSelect: '/main/discovery',
          });
          this.props.history.push({pathname: '/main/discovery'})
        }
      },
      {
        title: '我的',
        key: 'mine',
        iconName: 'iconmy',
        selected: '/main/mine',
        onPressFn: () => {
          this.setState({
            curSelect: '/main/mine',
          });
          this.props.history.push({pathname: '/main/mine'})
        }
      }
    ]
  }

  renderTabItem = () => {
    return this.state.tabItem.map(item => {
      return <TabBar.Item
        title={item.title}
        key={item.key}
        icon={<MyIcon type={item.iconName} className="tab-icon" />}
        selectedIcon={<MyIcon type={item.iconName} className="tab-icon-selected" />}
        selected={this.state.curSelect === item.selected}
        onPress={item.onPressFn}
    />})
  }


  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 50 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#4056A1"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          {this.renderTabItem()}
        </TabBar>
      </div>
    );
  }
}

export default TabNav