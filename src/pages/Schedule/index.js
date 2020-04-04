/*
 * @Date: 2020-03-19 04:54:06
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-04-04 15:42:04
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { NavBar, Icon } from 'antd-mobile';
import {MyIcon} from '../../components/Icons'

@withRouter
class Home extends Component {
  render() {
    const { srceenInfo: { clientHeight } } = this.props
    console.log(clientHeight)
    return (
      <div style={{height: clientHeight - 100, marginTop: 50}}>
        xingcheng
      </div>
    )
  }
}

export default Home;