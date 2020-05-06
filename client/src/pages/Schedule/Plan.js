/*
 * @Date: 2020-05-05 21:51:37
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-05-06 14:43:12
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { NavBar, Icon, Calendar, Toast } from 'antd-mobile';
import {MyIcon} from '../../components/Icons'
import zhCN from 'antd-mobile/lib/calendar/locale/zh_CN';

const now = new Date()
@withRouter
class Plan extends Component {
  componentDidMount() {
    Toast.info('请先创建哦', 2);
  }
  handleConfirmDate(start, end) {
    console.log(start, end)
    this.props.history.push({pathname: '/main/schedule/edit', props: { start, end }})
  }
  render() {
    return (
      <div className="plandate-container" style={{marginTop: 50}}>
        <Calendar
          locale={zhCN}
          visible={true}
          infiniteOpt={true}
          minDate={new Date(now)}
          onConfirm={(start, end) => this.handleConfirmDate(start, end)}
          onCancel={() => {this.props.history.push('/main/home')}}
        />
      </div>
    )
  }
}

export default Plan;