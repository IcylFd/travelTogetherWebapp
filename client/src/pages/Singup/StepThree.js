/*
 * @Date: 2020-03-19 04:54:06
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-05-18 17:26:48
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Button, Icon } from 'antd-mobile'
import './index.less'
import { MyIcon } from '../../components/Icons'

@withRouter
class StepThree extends Component {
  render() {
    return (
      <div className="step-three">
        <div className="add-comp">
          <MyIcon type="iconinvite"></MyIcon>
        </div>
        <Button onClick={() => {this.props.history.push({pathname: '/main/home'})}} className="next-btn"><Icon type="right" /></Button>
      </div>
    )
  }
}

export default StepThree;