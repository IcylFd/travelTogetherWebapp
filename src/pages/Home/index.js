/*
 * @Date: 2020-03-19 04:54:06
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-03-22 16:16:35
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { NavBar, Icon } from 'antd-mobile';
import {MyIcon} from '../../components/Icons'

@withRouter
class Home extends Component {
  render() {
    return (
      <div style={{marginTop: 50}}>
        <MyIcon type="iconmy"></MyIcon>
      </div>
    )
  }
}

export default Home;