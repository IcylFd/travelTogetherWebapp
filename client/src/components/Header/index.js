/*
 * @Date: 2020-03-19 18:08:49
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-05-18 12:36:00
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import './index.less'
import { NavBar, Icon } from 'antd-mobile';
import { MyIcon } from '../Icons'

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
        return ''
      default:
        break;
    }
  }
  render() {
    console.log(this.props)
    return (
      <div className="header">
        <NavBar
          mode="light"
          icon={this.props.location.pathname === '/main/home' ? null : <Icon type="left" />}
          onLeftClick={() => this.props.history.goBack()}
          rightContent={
            // <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            this.props.location.pathname === '/main/schedule' ? <MyIcon onClick={() => this.props.history.push('/main/schedule/edit')} type="iconedit" /> : <Icon key="1" type="ellipsis" />
          }
        >
          {this.renderHeaderTitle()}
        </NavBar>
      </div>
    )
  }
}

export default Header;