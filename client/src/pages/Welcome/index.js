/*
 * @Date: 2020-03-19 04:54:06
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-03-19 21:14:07
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

@withRouter
class Welcome extends Component {
  render() {
    return (
      <div>Welcome</div>
    )
  }
}

export default Welcome;