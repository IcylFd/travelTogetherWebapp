/*
 * @Date: 2020-03-19 04:54:06
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-04-04 15:00:50
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { ImagePicker, Tabs } from 'antd-mobile';

@withRouter
class TravelFootpoints extends Component {
  state = {
  }
  render() {
    return (
      <div className="travel-container">
        足迹
      </div>
    )
  }
}

export default TravelFootpoints;