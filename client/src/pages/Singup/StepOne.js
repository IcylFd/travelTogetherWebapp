/*
 * @Date: 2020-03-19 04:54:06
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-03-21 02:46:13
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { inject } from 'mobx-react'
import { List, InputItem, Button } from 'antd-mobile';
import { MyIcon } from '../../components/Icons'
import './index.less'

@withRouter
@inject('SignupStore')
class StepOne extends Component {
  checkPhone() {
    console.log(211)
  }
  render() {
    const { SignupStore: { changeCurStep } } = this.props
    return (
      <div className="step1-content">
        <div className="copywriting">
          <div className="title">同游</div>
          <div className="content">
            <p>当我们在一起时</p>
            <p>去哪里，并不重要</p>
          </div>
        </div>
        <div className="login-part">
          <List>
            <InputItem type="phone" placeholder="请输入手机号" onBlur={this.checkPhone}><MyIcon type="iconphone" /></InputItem>
            <InputItem type="password" placeholder="请输入密码" onBlur={this.checkPhone}><MyIcon type="iconpassword" /></InputItem>
          </List>
        </div>
        <div className="btn-group">
          <Button className="login-btn">登录</Button>
          <Button className="signup-btn" onClick={() => changeCurStep(1)}>注册</Button>
        </div>
      </div>
    )
  }
}

export default StepOne;