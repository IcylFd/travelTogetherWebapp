/*
 * @Date: 2020-03-19 04:54:06
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-03-21 20:54:54
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Button, Icon } from 'antd-mobile'
import './index.less'

@withRouter
class StepThree extends Component {
  render() {
    return (
      <div>
        邀请成员
        <Button onClick={() => {this.props.history.push({pathname: '/main/home'})}} className="next-btn"><Icon type="right" /></Button>
      </div>
    )
  }
}

export default StepThree;