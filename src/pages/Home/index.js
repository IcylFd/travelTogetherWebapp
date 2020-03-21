/*
 * @Date: 2020-03-19 04:54:06
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-03-20 15:36:30
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { NavBar, Icon } from 'antd-mobile';
import {MyIcon} from '../../components/Icons'

@withRouter
class Home extends Component {
  render() {
    const { clientHeight } = this.props
    return (
      <div style={{height: clientHeight - 95 + 'px'}}>
        <MyIcon type="iconmy"></MyIcon>
      </div>
    )
  }
}

export default Home;