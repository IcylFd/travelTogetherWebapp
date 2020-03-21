/*
 * @Date: 2020-03-19 18:08:49
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-03-20 18:42:27
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import './index.less'
import { NavBar, Icon } from 'antd-mobile';

@withRouter
class Header extends Component {
  renderHeaderTitle = () => {
    switch (this.props.location.pathname) {
      case '/main/home':
        return '首页'
      case '/main/schedule':
        return '行程'
      case '/main/discovery':
        return '发现'
      case '/main/mine':
        return '我的'
      default:
        break;
    }
  }
  render() {
    console.log(this.props)
    return (
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => console.log('onLeftClick')}
        rightContent={[
          // <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
          <Icon key="1" type="ellipsis" />,
        ]}
      >
        {this.renderHeaderTitle()}
      </NavBar>
    )
  }
}

export default Header;