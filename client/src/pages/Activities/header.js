/*
 * @Date: 2020-03-19 04:54:06
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-04-28 18:16:18
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { inject } from 'mobx-react'
import { Icon } from 'antd-mobile';
import './index.less'
import { MyIcon } from '../../components/Icons';
import creatHistory from 'history/createHashHistory' 

@withRouter
@inject('SignupStore')
class Header extends Component {
  render() {
    const history = creatHistory();
    const { title } = this.props
    return (
      <div className="header">
        <Icon className="back-icon" type="left" onClick={() =>  history.goBack()} />
        <span>{title}</span>
        <MyIcon className="share-icon" type="iconshare"/>
      </div>
    )
  }
}

export default Header;