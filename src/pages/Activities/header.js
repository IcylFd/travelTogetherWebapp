/*
 * @Date: 2020-03-19 04:54:06
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-04-23 17:31:38
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { inject } from 'mobx-react'
import { Icon } from 'antd-mobile';
import './index.less'
import { MyIcon } from '../../components/Icons';

@withRouter
@inject('SignupStore')
class Header extends Component {
  render() {
    const { title } = this.props
    return (
      <div className="header">
        <Icon className="back-icon" type="left" />
        <span>{title}</span>
        <MyIcon className="share-icon" type="iconshare"/>
      </div>
    )
  }
}

export default Header;