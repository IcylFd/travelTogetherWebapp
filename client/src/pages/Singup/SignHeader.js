/*
 * @Date: 2020-03-19 04:54:06
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-03-22 14:52:27
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { inject } from 'mobx-react'
import { Icon } from 'antd-mobile';
import './index.less'

@withRouter
@inject('SignupStore')
class SignHeader extends Component {
  render() {
    const { SignupStore: { changeCurStep, curStep }, title } = this.props
    return (
      <div className="sign-header">
        {curStep !== 0 && <Icon className="back-icon" type="left" onClick={() => changeCurStep(curStep - 1)} />}
        <span>{title}</span>
      </div>
    )
  }
}

export default SignHeader;